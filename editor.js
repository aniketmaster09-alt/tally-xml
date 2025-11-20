// Editor Script to Modify Website Appearance

function applyEdits() {
    // 1. Replace Title
    // Find h1 with specific classes and text content
    const titles = document.querySelectorAll('h1.text-2xl.font-semibold');
    titles.forEach(title => {
        if (title.textContent.trim() === 'Razor Extract') {
            title.textContent = 'TALLY SUPPORT';
            
            // Add dynamic color animation
            title.style.backgroundImage = 'linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)';
            title.style.backgroundSize = '400%';
            title.style.webkitBackgroundClip = 'text';
            title.style.webkitTextFillColor = 'transparent';
            title.style.animation = 'rainbow-text 10s linear infinite';
            
            // Inject keyframes if not present
            if (!document.getElementById('dynamic-color-style')) {
                const style = document.createElement('style');
                style.id = 'dynamic-color-style';
                style.innerHTML = `
                    @keyframes rainbow-text {
                        0% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                        100% { background-position: 0% 50%; }
                    }
                `;
                document.head.appendChild(style);
            }
        }
    });

    // 2. Remove Footer
    const footer = document.querySelector('footer.bg-gray-100.border-t.border-gray-200.mt-auto.py-4.footer.svelte-dlninc');
    if (footer) {
        footer.remove();
        console.log('Footer removed');
    }

    // 3. Remove Feature Cards Grid
    const featureGrid = document.querySelector('.grid.grid-cols-2.md\\:grid-cols-4.gap-4.my-12.max-w-5xl.mx-auto.w-full');
    if (featureGrid) {
        featureGrid.remove();
        console.log('Feature grid removed');
    }

    restyleFilePond();
}

function restyleFilePond() {
    // Inject custom CSS to override FilePond styles with a DYNAMIC look
    if (!document.getElementById('filepond-overrides')) {
        const style = document.createElement('style');
        style.id = 'filepond-overrides';
        style.innerHTML = `
            /* Container - Dynamic Border Animation */
            .filepond--panel-root {
                background-color: #ffffff !important;
                border: none !important;
                border-radius: 12px !important;
                position: relative;
                overflow: hidden;
                box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                transition: transform 0.3s ease;
            }
            
            /* Create a pseudo-element for the animated gradient border */
            .filepond--panel-root::before {
                content: '';
                position: absolute;
                top: -2px; left: -2px; right: -2px; bottom: -2px;
                background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
                background-size: 400%;
                z-index: -1;
                animation: rainbow-border 20s linear infinite;
                border-radius: 14px;
            }
            
            .filepond--panel-root:hover {
                transform: scale(1.02);
                box-shadow: 0 8px 25px rgba(0,0,0,0.15);
            }

            @keyframes rainbow-border {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            
            /* Inner content area */
            .filepond--drop-label {
                background: rgba(255, 255, 255, 0.9) !important; /* Slightly transparent to show glow */
                border-radius: 10px;
                margin: 4px; /* Space for the border */
                height: calc(100% - 8px) !important;
            }

            /* Icons & Text */
            .filepond--drop-label svg {
                color: #4f46e5 !important; /* Indigo */
                width: 50px !important;
                height: 50px !important;
                filter: drop-shadow(0 2px 4px rgba(79, 70, 229, 0.3));
                transition: transform 0.3s ease;
            }
            
            .filepond--root:hover .filepond--drop-label svg {
                transform: translateY(-5px) scale(1.1);
            }
            
            .filepond--drop-label p {
                color: #333 !important;
                font-family: 'Segoe UI', sans-serif !important;
                font-weight: 500;
            }
            
            /* "Browse files" link */
            .filepond--label-action {
                background: linear-gradient(to right, #4f46e5, #06b6d4);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                font-weight: 800 !important;
                text-decoration: none !important;
                position: relative;
            }
            
            .filepond--label-action::after {
                content: '';
                position: absolute;
                width: 100%;
                height: 2px;
                bottom: -2px;
                left: 0;
                background: linear-gradient(to right, #4f46e5, #06b6d4);
                transform: scaleX(0);
                transform-origin: bottom right;
                transition: transform 0.3s ease-out;
            }
            
            .filepond--label-action:hover::after {
                transform: scaleX(1);
                transform-origin: bottom left;
            }
            
            /* File Item (When uploaded) */
            .filepond--item-panel {
                background: linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%) !important;
                border-radius: 8px !important;
            }
            
            /* Fix height */
            .filepond--root {
                min-height: 180px !important;
            }
        `;
        document.head.appendChild(style);
        console.log('FilePond dynamic styles injected');
    }
}

// Run edits immediately if DOM is ready, or wait
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyEdits);
} else {
    applyEdits();
}

// Also run periodically to handle dynamic content changes (SPA behavior)
const observer = new MutationObserver(applyEdits);
observer.observe(document.body, { childList: true, subtree: true });
