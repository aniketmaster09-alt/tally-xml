// Tally XML Integration Script
// This script merges the logic from script.js into the main Razor Extract app

// --- Core Logic from script.js ---

const AI_API_KEY = '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';

// AI-powered header detection
async function detectHeadersWithAI(headers) {
    try {
        const prompt = `You are a CSV header mapping expert. Given the following CSV headers, map them to these categories:
- date: Date of transaction
- narration: Description/Particulars/Remarks of transaction
- amount: Transaction amount (single column)
- debit: Debit/Withdrawal amount
- credit: Credit/Deposit amount
- drcr: DR/CR indicator column

Headers: ${JSON.stringify(headers)}

Respond ONLY with a valid JSON object mapping each header to its category. If a header doesn't fit any category, omit it.
Example: {"Transaction Date": "date", "Description": "narration", "Debit": "debit", "Credit": "credit"}

JSON mapping:`;

        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${AI_API_KEY}`,
                'Content-Type': 'application/json',
                'HTTP-Referer': window.location.href,
                'X-Title': 'Bank CSV Normalizer'
            },
            body: JSON.stringify({
                model: 'kwaipilot/kat-coder-pro:free',
                messages: [{ role: 'user', content: prompt }],
                temperature: 0.1,
                max_tokens: 500
            })
        });

        if (!response.ok) throw new Error('AI API error');
        const data = await response.json();
        const aiResponse = data.choices[0].message.content.trim();
        
        let jsonMatch = aiResponse.match(/\{[^}]+\}/);
        if (!jsonMatch) jsonMatch = [aiResponse];
        
        return JSON.parse(jsonMatch[0]);

    } catch (error) {
        console.error('AI header detection failed:', error);
        throw error;
    }
}

// Parsing Helpers
function parseDate(dateString) {
    if (!dateString) return '';
    const formats = [
        /^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})$/, // DD/MM/YYYY
        /^(\d{4})[\/\-](\d{1,2})[\/\-](\d{1,2})$/, // YYYY/MM/DD
        /^(\d{1,2})[\/\-]([A-Za-z]{3})[\/\-](\d{4})$/ // DD-MMM-YYYY
    ];
    
    const monthMap = { 'jan': '01', 'feb': '02', 'mar': '03', 'apr': '04', 'may': '05', 'jun': '06', 'jul': '07', 'aug': '08', 'sep': '09', 'oct': '10', 'nov': '11', 'dec': '12' };
    
    let match = dateString.match(formats[0]);
    if (match) return `${match[1].padStart(2,'0')}/${match[2].padStart(2,'0')}/${match[3]}`;
    
    match = dateString.match(formats[1]);
    if (match) return `${match[3].padStart(2,'0')}/${match[2].padStart(2,'0')}/${match[1]}`;
    
    match = dateString.match(formats[2]);
    if (match) return `${match[1].padStart(2,'0')}/${monthMap[match[2].toLowerCase()] || '01'}/${match[3]}`;
    
    return dateString;
}

function parseAmount(amountString) {
    if (!amountString) return 0;
    const cleaned = String(amountString).replace(/[₹$,"\s]/g, '');
    const num = parseFloat(cleaned);
    return isNaN(num) ? 0 : num;
}

// Data Normalization
async function normalizeData(data) {
    if (data.length === 0) return [];
    const headers = Object.keys(data[0]);
    const headerMap = await detectHeadersWithAI(headers);
    
    const dateCol = Object.keys(headerMap).find(h => headerMap[h] === 'date');
    const narrationCol = Object.keys(headerMap).find(h => headerMap[h] === 'narration');
    const amountCol = Object.keys(headerMap).find(h => headerMap[h] === 'amount');
    const debitCol = Object.keys(headerMap).find(h => headerMap[h] === 'debit');
    const creditCol = Object.keys(headerMap).find(h => headerMap[h] === 'credit');
    const drcrCol = Object.keys(headerMap).find(h => headerMap[h] === 'drcr');
    
    return data.map(row => {
        const date = dateCol ? parseDate(row[dateCol]) : '';
        const narration = narrationCol ? row[narrationCol] : '';
        let amount = 0;
        let voucherType = 'PAYMENT'; // Default
        
        if (amountCol && drcrCol) {
            amount = parseAmount(row[amountCol]);
            const drcr = String(row[drcrCol]).trim().toUpperCase();
            voucherType = (drcr === 'CR' || drcr === 'C' || drcr === 'CREDIT') ? 'RECEIPT' : 'PAYMENT';
        } else if (debitCol && creditCol) {
            const debit = parseAmount(row[debitCol]);
            const credit = parseAmount(row[creditCol]);
            if (debit !== 0) { amount = Math.abs(debit); voucherType = 'PAYMENT'; }
            else if (credit !== 0) { amount = Math.abs(credit); voucherType = 'RECEIPT'; }
        } else if (debitCol) {
            const debit = parseAmount(row[debitCol]);
            if (debit !== 0) { amount = Math.abs(debit); voucherType = 'PAYMENT'; }
        } else if (creditCol) {
            const credit = parseAmount(row[creditCol]);
            if (credit !== 0) { amount = Math.abs(credit); voucherType = 'RECEIPT'; }
        } else if (amountCol) {
            const amt = parseAmount(row[amountCol]);
            amount = Math.abs(amt);
            voucherType = amt > 0 ? 'RECEIPT' : 'PAYMENT';
        }
        
        return { 'Date': date, 'Narration': narration, 'Amount': amount, 'Voucher Type': voucherType };
    });
}

// XML Generation
function sanitizeText(text) {
    return text ? text.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;').replace(/[^\x20-\x7E]/g, '').trim() : '';
}

function formatDateForTally(dateStr) {
    if (!dateStr) return "";
    const [d, m, y] = dateStr.split("/");
    return `${y}${m}${d}`;
}

function createVoucherXML({ date, narration, amount, voucherType, bankLedger, crLedger }) {
    const sanitizedNarration = sanitizeText(narration);
    const transDate = formatDateForTally(date);
    
    let debitEntry, creditEntry;
    if (voucherType === 'RECEIPT') {
        creditEntry = { ledger: sanitizeText(crLedger), amount: amount };
        debitEntry = { ledger: sanitizeText(bankLedger), amount: -amount };
    } else {
        debitEntry = { ledger: sanitizeText(crLedger), amount: -amount };
        creditEntry = { ledger: sanitizeText(bankLedger), amount: amount };
    }

    return `
<TALLYMESSAGE xmlns:UDF="TallyUDF">
<VOUCHER VCHTYPE="${voucherType}" ACTION="Create">
<VOUCHERTYPENAME>${voucherType}</VOUCHERTYPENAME>
<DATE>${transDate}</DATE>
<PARTYLEDGERNAME>${sanitizeText(bankLedger)}</PARTYLEDGERNAME>
<NARRATION>${sanitizedNarration}</NARRATION>
<EFFECTIVEDATE>${transDate}</EFFECTIVEDATE>
<ALLLEDGERENTRIES.LIST>
<REMOVEZEROENTRIES>No</REMOVEZEROENTRIES>
<ISDEEMEDPOSITIVE>No</ISDEEMEDPOSITIVE>
<LEDGERFROMITEM>No</LEDGERFROMITEM>
<LEDGERNAME>${creditEntry.ledger}</LEDGERNAME>
<AMOUNT>${creditEntry.amount}</AMOUNT>
</ALLLEDGERENTRIES.LIST>
<ALLLEDGERENTRIES.LIST>
<REMOVEZEROENTRIES>No</REMOVEZEROENTRIES>
<ISDEEMEDPOSITIVE>Yes</ISDEEMEDPOSITIVE>
<LEDGERFROMITEM>No</LEDGERFROMITEM>
<LEDGERNAME>${debitEntry.ledger}</LEDGERNAME>
<AMOUNT>${debitEntry.amount}</AMOUNT>
</ALLLEDGERENTRIES.LIST>
</VOUCHER>
</TALLYMESSAGE>`;
}

function generateTallyXML(rows, bankLedger, crLedger) {
    let xml = `<?xml version="1.0"?>
<ENVELOPE>
<HEADER>
<TALLYREQUEST>Import Data</TALLYREQUEST>
</HEADER>
<BODY>
<IMPORTDATA>
<REQUESTDESC>
<REPORTNAME>All Masters</REPORTNAME>
<STATICVARIABLES>
<SVCURRENTCOMPANY>X</SVCURRENTCOMPANY>
</STATICVARIABLES>
</REQUESTDESC>
<REQUESTDATA>
`;
    rows.forEach(row => {
        try {
            xml += createVoucherXML({
                date: row.Date,
                narration: row.Narration,
                amount: row.Amount.toFixed(2),
                voucherType: row['Voucher Type'],
                bankLedger,
                crLedger
            });
        } catch (e) { console.error(e); }
    });
    xml += `\n</REQUESTDATA>\n</IMPORTDATA>\n</BODY>\n</ENVELOPE>`;
    return xml;
}

// --- UI Components ---

function injectModal() {
    if (document.getElementById('tally-modal')) return;

    const modalHtml = `
    <div id="tally-modal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5); z-index:10000; align-items:center; justify-content:center; font-family: 'Segoe UI', Arial, sans-serif;">
        <div style="background:white; width:90%; max-width:450px; box-shadow:0 5px 15px rgba(0,0,0,0.2); border:1px solid #ccc;">
            <div style="background:#1a237e; color:white; padding:15px 20px;">
                <h2 style="margin:0; font-size:16px; font-weight:500; letter-spacing:0.5px;">Tally XML Configuration</h2>
            </div>
            
            <div style="padding:20px;">
                <div style="margin-bottom:15px;">
                    <label style="display:block; margin-bottom:5px; color:#555; font-weight:600; font-size:13px;">Bank Ledger Name</label>
                    <input type="text" id="tally-bank-ledger" placeholder="e.g. Bank Account" value="" style="width:100%; padding:8px; border:1px solid #ccc; border-radius:2px; font-size:14px; box-sizing:border-box;">
                </div>

                <div style="margin-bottom:0;">
                    <label style="display:block; margin-bottom:5px; color:#555; font-weight:600; font-size:13px;">Suspense / Party Ledger Name</label>
                    <input type="text" id="tally-suspense-ledger" placeholder="e.g. Suspense Account" value="" style="width:100%; padding:8px; border:1px solid #ccc; border-radius:2px; font-size:14px; box-sizing:border-box;">
                </div>
            </div>

            <div style="background:#f8f9fa; padding:15px 20px; border-top:1px solid #eee; display:flex; gap:10px; justify-content:flex-end;">
                <button id="tally-cancel-btn" style="padding:8px 20px; border:1px solid #ccc; background:white; color:#333; border-radius:2px; cursor:pointer; font-size:13px; font-weight:600; text-transform:uppercase;">Cancel</button>
                <button id="tally-confirm-btn" style="padding:8px 20px; border:1px solid #e65100; background:#e65100; color:white; border-radius:2px; cursor:pointer; font-size:13px; font-weight:600; text-transform:uppercase;">Generate XML</button>
            </div>
        </div>
    </div>`;

    const div = document.createElement('div');
    div.innerHTML = modalHtml;
    document.body.appendChild(div.firstElementChild);

    // Close on outside click
    document.getElementById('tally-modal').addEventListener('click', (e) => {
        if (e.target.id === 'tally-modal') {
            document.getElementById('tally-modal').style.display = 'none';
        }
    });

    document.getElementById('tally-cancel-btn').onclick = () => {
        document.getElementById('tally-modal').style.display = 'none';
    };
}

// --- Integration Logic ---

// Store the latest CSV download URL captured from network requests
let lastCsvDownloadUrl = null;

// Intercept fetch requests to capture the CSV download URL
const originalFetch = window.fetch;
window.fetch = async function(input, init) {
    if (typeof input === 'string') {
        // Logic 1: Direct CSV Capture
        if (input.includes('/download/csv')) {
            console.log('Captured CSV URL:', input);
            lastCsvDownloadUrl = input;
        } 
        // Logic 2: Extract ID from Excel/Deep-Extract URL to construct CSV URL
        else if (input.includes('/download/')) {
            const match = input.match(/transactions\/([^\/]+)\/download/);
            if (match && match[1]) {
                capturedTransactionId = match[1];
            }
        }
    }
    return originalFetch.apply(this, arguments);
};

// Intercept console.log to capture Request ID
let capturedTransactionId = null;
const originalConsoleLog = console.log;
console.log = function(...args) {
    // Check for the specific success message
    // "Processing complete. Request ID:", v(T)
    if (args.length >= 2 && typeof args[0] === 'string' && args[0].includes('Processing complete. Request ID:')) {
        const id = args[1];
        if (id) {
            console.info("[Tally Integration] Captured Request ID from console:", id);
            capturedTransactionId = id;
        }
    }
    originalConsoleLog.apply(console, args);
};

// --- Helper: Find Transaction ID ---
function findTransactionId() {
    // 1. Check explicitly captured ID from console or fetch
    if (capturedTransactionId) return capturedTransactionId;

    // 2. Check URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    let id = urlParams.get('id') || urlParams.get('transaction_id');
    if (id) return id;

    // 3. Check intercepted URLs (e.g. if Excel was downloaded)
    if (lastCsvDownloadUrl) {
        const match = lastCsvDownloadUrl.match(/transactions\/([^\/]+)\/download/);
        if (match) return match[1];
    }

    // 4. Scan DOM for ANY link containing the ID pattern
    const links = document.querySelectorAll('a[href*="/transactions/"]');
    for (const link of links) {
        const match = link.href.match(/transactions\/([^\/]+)\/download/);
        if (match) return match[1];
    }

    return null;
}

function getOriginalFileName() {
    // Try to find the filename from the FilePond label if it's still visible
    const fileItem = document.querySelector('.filepond--file-info-main');
    if (fileItem) {
        return fileItem.textContent.replace(/\.[^/.]+$/, ""); // Remove extension
    }
    
    // Fallback: Use the Transaction ID
    const txId = findTransactionId();
    return txId || "tally_import";
}

async function handleTallyDownload(triggerBtn) {
    const btn = document.getElementById('tally-btn');
    const originalText = btn.innerText;
    btn.innerText = 'Fetching data...';
    btn.disabled = true;

    try {
        let csvUrl = lastCsvDownloadUrl;
        
        // Capture filename BEFORE fetching/processing
        const originalFileName = getOriginalFileName();
        console.log("Using filename for export:", originalFileName);

        // If we don't have the direct URL, try to construct it
        if (!csvUrl) {
            const txId = findTransactionId();
            if (txId) {
                console.log("Found Transaction ID:", txId);
                csvUrl = `https://razorextract.com/api/v1/extractions/transactions/${txId}/download/csv`;
            }
        }

        // Check if we found a source
        if (!csvUrl) {
            alert("Could not detect the Transaction ID. \n\nPlease try clicking the 'Excel' or 'CSV' button once manually to initialize the data, then click 'Tally XML' again.");
            throw new Error("Transaction ID not found");
        }

        // Fetch silently (Background - Temp Storage)
        const response = await fetch(csvUrl);
        if (!response.ok) throw new Error("Failed to fetch CSV data in background");
        
        const csvText = await response.text();
        
        // 2. Parse CSV
        Papa.parse(csvText, {
                header: true,
                skipEmptyLines: true,
                complete: async function(results) {
                    try {
                        btn.innerText = 'Analyzing with AI...';
                        
                        // 3. Normalize Data
                        const normalizedData = await normalizeData(results.data);
                        
                        // 4. Show Modal for Ledger Names
                        const modal = document.getElementById('tally-modal');
                        modal.style.display = 'flex';
                        
                        // Handle Confirmation
                        const confirmBtn = document.getElementById('tally-confirm-btn');
                        // Remove old listeners to prevent multiple downloads
                        const newConfirmBtn = confirmBtn.cloneNode(true);
                        confirmBtn.parentNode.replaceChild(newConfirmBtn, confirmBtn);
                        
                        newConfirmBtn.onclick = () => {
                            const bankName = document.getElementById('tally-bank-ledger').value || "Bank Account";
                            const suspenseName = document.getElementById('tally-suspense-ledger').value || "Suspense Account";
                            
                            modal.style.display = 'none';
                            btn.innerText = 'Generating XML...';
                            
                            try {
                                // 5. Generate XML
                                const xmlContent = generateTallyXML(normalizedData, bankName, suspenseName);
                                
                                // 6. Download
                                const blob = new Blob([xmlContent], { type: "text/xml" });
                                const link = document.createElement("a");
                                link.href = URL.createObjectURL(blob);
                                link.download = `${originalFileName}_tally.xml`;
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                                
                                btn.innerText = 'Done!';
                                setTimeout(() => { btn.innerText = originalText; btn.disabled = false; }, 2000);
                            } catch (genErr) {
                                console.error(genErr);
                                alert('Error generating XML: ' + genErr.message);
                                btn.innerText = originalText;
                                btn.disabled = false;
                            }
                        };

                    } catch (err) {
                        console.error(err);
                        alert('Error processing data: ' + err.message);
                        btn.innerText = originalText;
                        btn.disabled = false;
                    }
                }
            });

    } catch (err) {
        console.error(err);
        alert('Failed to fetch CSV: ' + err.message);
        btn.innerText = originalText;
        btn.disabled = false;
    }
}

// Observer to inject button
function initObserver() {
    injectModal(); // Ensure modal is present

    const observer = new MutationObserver((mutations) => {
        if (document.getElementById('tally-btn')) return;

        // Method 1: Look for specific text content in buttons/links
        const candidates = Array.from(document.querySelectorAll('button, a, div[role="button"]'));
        
        // Priority: Find CSV button first
        let targetBtn = candidates.find(el => {
            const text = el.innerText || el.textContent;
            return text && text.includes('CSV') && !text.includes('Tally');
        });
        
        // Fallback: Find Excel button if CSV not found (just for positioning)
        if (!targetBtn) {
             targetBtn = candidates.find(el => {
                const text = el.innerText || el.textContent;
                return text && text.includes('Excel') && !text.includes('Tally');
            });
        }

        // Method 2: Look for elements with specific download classes (fallback)
        if (!targetBtn) {
            targetBtn = document.querySelector('a[href*="download/csv"]');
        }

        if (targetBtn) {
            // Found the target! Now find the best container to inject into
            const container = targetBtn.parentElement;
            
            // Prevent double injection
            if (container.querySelector('#tally-btn')) return;

            console.log('Found download button:', targetBtn);

            const tallyBtn = document.createElement('button');
            tallyBtn.id = 'tally-btn';
            // Copy classes from target for consistent styling
            tallyBtn.className = targetBtn.className; 
            // Add specific styling overrides
            tallyBtn.style.cssText = `
                background-color: #e65100 !important; 
                color: white !important; 
                margin-left: 10px; 
                cursor: pointer;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                padding: 10px 20px;
                border-radius: 2px;
                font-weight: 600;
                font-size: 14px;
                text-transform: uppercase;
                border: none;
                font-family: 'Segoe UI', Arial, sans-serif;
            `;
            
            tallyBtn.innerHTML = `
                <svg style="width:16px;height:16px;margin-right:5px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Tally XML
            `;
            
            /* 
               We no longer pre-calculate the CSV URL here. 
               Instead, we rely on:
               1. Intercepting the network request (fetch)
               2. Constructing it from the transaction ID in the URL
            */

            tallyBtn.onclick = (e) => {
                e.preventDefault();
                e.stopPropagation();
                // Pass the target button so we can click it if needed
                handleTallyDownload(targetBtn); 
            };
            
            // Insert after the target button
            if (targetBtn.nextSibling) {
                container.insertBefore(tallyBtn, targetBtn.nextSibling);
            } else {
                container.appendChild(tallyBtn);
            }
            
            console.log('Tally button injected successfully');
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
}

// Start
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initObserver);
} else {
    initObserver();
}
