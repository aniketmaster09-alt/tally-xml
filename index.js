(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]'))
        n(s);
    new MutationObserver(s => {
        for (const o of s)
            if (o.type === "childList")
                for (const i of o.addedNodes)
                    i.tagName === "LINK" && i.rel === "modulepreload" && n(i)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function r(s) {
        const o = {};
        return s.integrity && (o.integrity = s.integrity),
        s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy),
        s.crossOrigin === "use-credentials" ? o.credentials = "include" : s.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin",
        o
    }
    function n(s) {
        if (s.ep)
            return;
        s.ep = !0;
        const o = r(s);
        fetch(s.href, o)
    }
}
)();
const Io = !1;
var Dn = Array.isArray
  , Os = Array.from
  , pl = Object.defineProperty
  , at = Object.getOwnPropertyDescriptor
  , bo = Object.getOwnPropertyDescriptors
  , hl = Object.prototype
  , ml = Array.prototype
  , mn = Object.getPrototypeOf;
function Wt(e) {
    return typeof e == "function"
}
const Ue = () => {}
;
function gl(e) {
    return typeof (e == null ? void 0 : e.then) == "function"
}
function _l(e) {
    return e()
}
function gn(e) {
    for (var t = 0; t < e.length; t++)
        e[t]()
}
const Je = 2
  , wo = 4
  , Gr = 8
  , Pn = 16
  , Xe = 32
  , Ur = 64
  , Nt = 128
  , _n = 256
  , Re = 512
  , It = 1024
  , dr = 2048
  , Ze = 4096
  , Br = 8192
  , Ro = 16384
  , fr = 32768
  , So = 65536
  , El = 1 << 18
  , Oo = 1 << 19
  , Et = Symbol("$state")
  , vl = Symbol("");
function Do(e) {
    return e === this.v
}
function Ds(e, t) {
    return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function"
}
function Ps(e) {
    return !Ds(e, this.v)
}
function yl(e) {
    throw new Error("effect_in_teardown")
}
function Tl() {
    throw new Error("effect_in_unowned_derived")
}
function Il(e) {
    throw new Error("effect_orphan")
}
function bl() {
    throw new Error("effect_update_depth_exceeded")
}
function wl(e) {
    throw new Error("lifecycle_legacy_only")
}
function Rl(e) {
    throw new Error("props_invalid_value")
}
function Sl() {
    throw new Error("state_descriptors_fixed")
}
function Ol() {
    throw new Error("state_prototype_fixed")
}
function Dl() {
    throw new Error("state_unsafe_local_read")
}
function Pl() {
    throw new Error("state_unsafe_mutation")
}
let pr = !1;
function Al() {
    pr = !0
}
function we(e) {
    return {
        f: 0,
        v: e,
        reactions: null,
        equals: Do,
        version: 0
    }
}
function ar(e, t=!1) {
    var n;
    const r = we(e);
    return t || (r.equals = Ps),
    pr && Q !== null && Q.l !== null && ((n = Q.l).s ?? (n.s = [])).push(r),
    r
}
function j(e, t=!1) {
    return Ll(ar(e, t))
}
function Ll(e) {
    return ee !== null && ee.f & Je && (Ke === null ? Jl([e]) : Ke.push(e)),
    e
}
function ri(e, t) {
    return I(e, je( () => v(e))),
    t
}
function I(e, t) {
    return ee !== null && zr() && ee.f & (Je | Pn) && (Ke === null || !Ke.includes(e)) && Pl(),
    tr(e, t)
}
function tr(e, t) {
    return e.equals(t) || (e.v = t,
    e.version = Xo(),
    Po(e, It),
    zr() && X !== null && X.f & Re && !(X.f & Xe) && (Ie !== null && Ie.includes(e) ? (Qe(X, It),
    Mn(X)) : yt === null ? ec([e]) : yt.push(e))),
    t
}
function Po(e, t) {
    var r = e.reactions;
    if (r !== null)
        for (var n = zr(), s = r.length, o = 0; o < s; o++) {
            var i = r[o]
              , l = i.f;
            l & It || !n && i === X || (Qe(i, t),
            l & (Re | Nt) && (l & Je ? Po(i, dr) : Mn(i)))
        }
}
const As = 1
  , Ls = 2
  , Ao = 4
  , Ml = 8
  , Cl = 16
  , xl = 1
  , Nl = 2
  , Lo = 4
  , Fl = 8
  , Gl = 16
  , Ul = 1
  , Bl = 2
  , kl = 4
  , $l = 1
  , Vl = 2
  , Ae = Symbol()
  , Mo = "http://www.w3.org/2000/svg";
let Co = !1;
function jt(e, t=null, r) {
    if (typeof e != "object" || e === null || Et in e)
        return e;
    const n = mn(e);
    if (n !== hl && n !== ml)
        return e;
    var s = new Map
      , o = Dn(e)
      , i = we(0);
    o && s.set("length", we(e.length));
    var l;
    return new Proxy(e,{
        defineProperty(a, u, c) {
            (!("value"in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Sl();
            var d = s.get(u);
            return d === void 0 ? (d = we(c.value),
            s.set(u, d)) : I(d, jt(c.value, l)),
            !0
        },
        deleteProperty(a, u) {
            var c = s.get(u);
            if (c === void 0)
                u in a && s.set(u, we(Ae));
            else {
                if (o && typeof u == "string") {
                    var d = s.get("length")
                      , f = Number(u);
                    Number.isInteger(f) && f < d.v && I(d, f)
                }
                I(c, Ae),
                ni(i)
            }
            return !0
        },
        get(a, u, c) {
            var p;
            if (u === Et)
                return e;
            var d = s.get(u)
              , f = u in a;
            if (d === void 0 && (!f || (p = at(a, u)) != null && p.writable) && (d = we(jt(f ? a[u] : Ae, l)),
            s.set(u, d)),
            d !== void 0) {
                var h = v(d);
                return h === Ae ? void 0 : h
            }
            return Reflect.get(a, u, c)
        },
        getOwnPropertyDescriptor(a, u) {
            var c = Reflect.getOwnPropertyDescriptor(a, u);
            if (c && "value"in c) {
                var d = s.get(u);
                d && (c.value = v(d))
            } else if (c === void 0) {
                var f = s.get(u)
                  , h = f == null ? void 0 : f.v;
                if (f !== void 0 && h !== Ae)
                    return {
                        enumerable: !0,
                        configurable: !0,
                        value: h,
                        writable: !0
                    }
            }
            return c
        },
        has(a, u) {
            var h;
            if (u === Et)
                return !0;
            var c = s.get(u)
              , d = c !== void 0 && c.v !== Ae || Reflect.has(a, u);
            if (c !== void 0 || X !== null && (!d || (h = at(a, u)) != null && h.writable)) {
                c === void 0 && (c = we(d ? jt(a[u], l) : Ae),
                s.set(u, c));
                var f = v(c);
                if (f === Ae)
                    return !1
            }
            return d
        },
        set(a, u, c, d) {
            var y;
            var f = s.get(u)
              , h = u in a;
            if (o && u === "length")
                for (var p = c; p < f.v; p += 1) {
                    var m = s.get(p + "");
                    m !== void 0 ? I(m, Ae) : p in a && (m = we(Ae),
                    s.set(p + "", m))
                }
            f === void 0 ? (!h || (y = at(a, u)) != null && y.writable) && (f = we(void 0),
            I(f, jt(c, l)),
            s.set(u, f)) : (h = f.v !== Ae,
            I(f, jt(c, l)));
            var _ = Reflect.getOwnPropertyDescriptor(a, u);
            if (_ != null && _.set && _.set.call(d, c),
            !h) {
                if (o && typeof u == "string") {
                    var g = s.get("length")
                      , E = Number(u);
                    Number.isInteger(E) && E >= g.v && I(g, E + 1)
                }
                ni(i)
            }
            return !0
        },
        ownKeys(a) {
            v(i);
            var u = Reflect.ownKeys(a).filter(f => {
                var h = s.get(f);
                return h === void 0 || h.v !== Ae
            }
            );
            for (var [c,d] of s)
                d.v !== Ae && !(c in a) && u.push(c);
            return u
        },
        setPrototypeOf() {
            Ol()
        }
    })
}
function ni(e, t=1) {
    I(e, e.v + t)
}
function si(e) {
    return e !== null && typeof e == "object" && Et in e ? e[Et] : e
}
function zl(e, t) {
    return Object.is(si(e), si(t))
}
var ii, xo, No;
function ql() {
    if (ii === void 0) {
        ii = window;
        var e = Element.prototype
          , t = Node.prototype;
        xo = at(t, "firstChild").get,
        No = at(t, "nextSibling").get,
        e.__click = void 0,
        e.__className = "",
        e.__attributes = null,
        e.__styles = null,
        e.__e = void 0,
        Text.prototype.__t = void 0
    }
}
function kr(e="") {
    return document.createTextNode(e)
}
function lr(e) {
    return xo.call(e)
}
function An(e) {
    return No.call(e)
}
function B(e, t) {
    return lr(e)
}
function se(e, t) {
    {
        var r = lr(e);
        return r instanceof Comment && r.data === "" ? An(r) : r
    }
}
function $(e, t=1, r=!1) {
    let n = e;
    for (; t--; )
        n = An(n);
    return n
}
function Yl(e) {
    e.textContent = ""
}
function En(e) {
    var t = Je | It;
    X === null ? t |= Nt : X.f |= Oo;
    const r = {
        children: null,
        ctx: Q,
        deps: null,
        equals: Do,
        f: t,
        fn: e,
        reactions: null,
        v: null,
        version: 0,
        parent: X
    };
    if (ee !== null && ee.f & Je) {
        var n = ee;
        (n.children ?? (n.children = [])).push(r)
    }
    return r
}
function Hl(e) {
    const t = En(e);
    return t.equals = Ps,
    t
}
function Fo(e) {
    var t = e.children;
    if (t !== null) {
        e.children = null;
        for (var r = 0; r < t.length; r += 1) {
            var n = t[r];
            n.f & Je ? Ms(n) : bt(n)
        }
    }
}
function Go(e) {
    var t, r = X;
    Me(e.parent);
    try {
        Fo(e),
        t = Qo(e)
    } finally {
        Me(r)
    }
    return t
}
function Uo(e) {
    var t = Go(e)
      , r = (Qt || e.f & Nt) && e.deps !== null ? dr : Re;
    Qe(e, r),
    e.equals(t) || (e.v = t,
    e.version = Xo())
}
function Ms(e) {
    Fo(e),
    Nr(e, 0),
    Qe(e, Br),
    e.v = e.children = e.deps = e.ctx = e.reactions = null
}
function Bo(e) {
    X === null && ee === null && Il(),
    ee !== null && ee.f & Nt && Tl(),
    Ns && yl()
}
function Wl(e, t) {
    var r = t.last;
    r === null ? t.last = t.first = e : (r.next = e,
    e.prev = r,
    t.last = e)
}
function hr(e, t, r, n=!0) {
    var s = (e & Ur) !== 0
      , o = X
      , i = {
        ctx: Q,
        deps: null,
        deriveds: null,
        nodes_start: null,
        nodes_end: null,
        f: e | It,
        first: null,
        fn: t,
        last: null,
        next: null,
        parent: s ? null : o,
        prev: null,
        teardown: null,
        transitions: null,
        version: 0
    };
    if (r) {
        var l = rr;
        try {
            oi(!0),
            qr(i),
            i.f |= Ro
        } catch (c) {
            throw bt(i),
            c
        } finally {
            oi(l)
        }
    } else
        t !== null && Mn(i);
    var a = r && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & Oo) === 0;
    if (!a && !s && n && (o !== null && Wl(i, o),
    ee !== null && ee.f & Je)) {
        var u = ee;
        (u.children ?? (u.children = [])).push(i)
    }
    return i
}
function Cs(e) {
    const t = hr(Gr, null, !1);
    return Qe(t, Re),
    t.teardown = e,
    t
}
function as(e) {
    Bo();
    var t = X !== null && (X.f & Xe) !== 0 && Q !== null && !Q.m;
    if (t) {
        var r = Q;
        (r.e ?? (r.e = [])).push({
            fn: e,
            effect: X,
            reaction: ee
        })
    } else {
        var n = mr(e);
        return n
    }
}
function jl(e) {
    return Bo(),
    $r(e)
}
function Xl(e) {
    const t = hr(Ur, e, !0);
    return () => {
        bt(t)
    }
}
function mr(e) {
    return hr(wo, e, !1)
}
function ot(e, t) {
    var r = Q
      , n = {
        effect: null,
        ran: !1
    };
    r.l.r1.push(n),
    n.effect = $r( () => {
        e(),
        !n.ran && (n.ran = !0,
        I(r.l.r2, !0),
        je(t))
    }
    )
}
function Ln() {
    var e = Q;
    $r( () => {
        if (v(e.l.r2)) {
            for (var t of e.l.r1) {
                var r = t.effect;
                r.f & Re && Qe(r, dr),
                gr(r) && qr(r),
                t.ran = !1
            }
            e.l.r2.v = !1
        }
    }
    )
}
function $r(e) {
    return hr(Gr, e, !0)
}
function _e(e) {
    return Ft(e)
}
function Ft(e, t=0) {
    return hr(Gr | Pn | t, e, !0)
}
function We(e, t=!0) {
    return hr(Gr | Xe, e, !0, t)
}
function ko(e) {
    var t = e.teardown;
    if (t !== null) {
        const r = Ns
          , n = ee;
        ai(!0),
        Ve(null);
        try {
            t.call(null)
        } finally {
            ai(r),
            Ve(n)
        }
    }
}
function $o(e) {
    var t = e.deriveds;
    if (t !== null) {
        e.deriveds = null;
        for (var r = 0; r < t.length; r += 1)
            Ms(t[r])
    }
}
function Vo(e, t=!1) {
    var r = e.first;
    for (e.first = e.last = null; r !== null; ) {
        var n = r.next;
        bt(r, t),
        r = n
    }
}
function Ql(e) {
    for (var t = e.first; t !== null; ) {
        var r = t.next;
        t.f & Xe || bt(t),
        t = r
    }
}
function bt(e, t=!0) {
    var r = !1;
    if ((t || e.f & El) && e.nodes_start !== null) {
        for (var n = e.nodes_start, s = e.nodes_end; n !== null; ) {
            var o = n === s ? null : An(n);
            n.remove(),
            n = o
        }
        r = !0
    }
    Vo(e, t && !r),
    $o(e),
    Nr(e, 0),
    Qe(e, Br);
    var i = e.transitions;
    if (i !== null)
        for (const a of i)
            a.stop();
    ko(e);
    var l = e.parent;
    l !== null && l.first !== null && zo(e),
    e.next = e.prev = e.teardown = e.ctx = e.deps = e.parent = e.fn = e.nodes_start = e.nodes_end = null
}
function zo(e) {
    var t = e.parent
      , r = e.prev
      , n = e.next;
    r !== null && (r.next = n),
    n !== null && (n.prev = r),
    t !== null && (t.first === e && (t.first = n),
    t.last === e && (t.last = r))
}
function lt(e, t) {
    var r = [];
    xs(e, r, !0),
    qo(r, () => {
        bt(e),
        t && t()
    }
    )
}
function qo(e, t) {
    var r = e.length;
    if (r > 0) {
        var n = () => --r || t();
        for (var s of e)
            s.out(n)
    } else
        t()
}
function xs(e, t, r) {
    if (!(e.f & Ze)) {
        if (e.f ^= Ze,
        e.transitions !== null)
            for (const i of e.transitions)
                (i.is_global || r) && t.push(i);
        for (var n = e.first; n !== null; ) {
            var s = n.next
              , o = (n.f & fr) !== 0 || (n.f & Xe) !== 0;
            xs(n, t, o ? r : !1),
            n = s
        }
    }
}
function vt(e) {
    Yo(e, !0)
}
function Yo(e, t) {
    if (e.f & Ze) {
        gr(e) && qr(e),
        e.f ^= Ze;
        for (var r = e.first; r !== null; ) {
            var n = r.next
              , s = (r.f & fr) !== 0 || (r.f & Xe) !== 0;
            Yo(r, s ? t : !1),
            r = n
        }
        if (e.transitions !== null)
            for (const o of e.transitions)
                (o.is_global || t) && o.in()
    }
}
let vn = !1
  , ls = [];
function Ho() {
    vn = !1;
    const e = ls.slice();
    ls = [],
    gn(e)
}
function Gt(e) {
    vn || (vn = !0,
    queueMicrotask(Ho)),
    ls.push(e)
}
function Zl() {
    vn && Ho()
}
function Vr(e) {
    throw new Error("lifecycle_outside_component")
}
const Wo = 0
  , Kl = 1;
let fn = Wo
  , xr = !1
  , rr = !1
  , Ns = !1;
function oi(e) {
    rr = e
}
function ai(e) {
    Ns = e
}
let St = []
  , nr = 0;
let ee = null;
function Ve(e) {
    ee = e
}
let X = null;
function Me(e) {
    X = e
}
let Ke = null;
function Jl(e) {
    Ke = e
}
let Ie = null
  , Ne = 0
  , yt = null;
function ec(e) {
    yt = e
}
let jo = 0
  , Qt = !1
  , Zt = !1
  , Xt = new Set
  , Q = null;
function li(e) {
    Q = e
}
function Xo() {
    return ++jo
}
function zr() {
    return !pr || Q !== null && Q.l === null
}
function gr(e) {
    var i, l;
    var t = e.f;
    if (t & It)
        return !0;
    if (t & dr) {
        var r = e.deps
          , n = (t & Nt) !== 0;
        if (r !== null) {
            var s;
            if (t & _n) {
                for (s = 0; s < r.length; s++)
                    ((i = r[s]).reactions ?? (i.reactions = [])).push(e);
                e.f ^= _n
            }
            for (s = 0; s < r.length; s++) {
                var o = r[s];
                if (gr(o) && Uo(o),
                n && X !== null && !Qt && !((l = o == null ? void 0 : o.reactions) != null && l.includes(e)) && (o.reactions ?? (o.reactions = [])).push(e),
                o.version > e.version)
                    return !0
            }
        }
        n || Qe(e, Re)
    }
    return !1
}
function tc(e, t, r) {
    throw e
}
function Qo(e) {
    var f;
    var t = Ie
      , r = Ne
      , n = yt
      , s = ee
      , o = Qt
      , i = Ke
      , l = Q
      , a = e.f;
    Ie = null,
    Ne = 0,
    yt = null,
    ee = a & (Xe | Ur) ? null : e,
    Qt = !rr && (a & Nt) !== 0,
    Ke = null,
    Q = e.ctx;
    try {
        var u = (0,
        e.fn)()
          , c = e.deps;
        if (Ie !== null) {
            var d;
            if (Nr(e, Ne),
            c !== null && Ne > 0)
                for (c.length = Ne + Ie.length,
                d = 0; d < Ie.length; d++)
                    c[Ne + d] = Ie[d];
            else
                e.deps = c = Ie;
            if (!Qt)
                for (d = Ne; d < c.length; d++)
                    ((f = c[d]).reactions ?? (f.reactions = [])).push(e)
        } else
            c !== null && Ne < c.length && (Nr(e, Ne),
            c.length = Ne);
        return u
    } finally {
        Ie = t,
        Ne = r,
        yt = n,
        ee = s,
        Qt = o,
        Ke = i,
        Q = l
    }
}
function rc(e, t) {
    let r = t.reactions;
    if (r !== null) {
        var n = r.indexOf(e);
        if (n !== -1) {
            var s = r.length - 1;
            s === 0 ? r = t.reactions = null : (r[n] = r[s],
            r.pop())
        }
    }
    r === null && t.f & Je && (Ie === null || !Ie.includes(t)) && (Qe(t, dr),
    t.f & (Nt | _n) || (t.f ^= _n),
    Nr(t, 0))
}
function Nr(e, t) {
    var r = e.deps;
    if (r !== null)
        for (var n = t; n < r.length; n++)
            rc(e, r[n])
}
function qr(e) {
    var t = e.f;
    if (!(t & Br)) {
        Qe(e, Re);
        var r = X;
        X = e;
        try {
            t & Pn ? Ql(e) : Vo(e),
            $o(e),
            ko(e);
            var n = Qo(e);
            e.teardown = typeof n == "function" ? n : null,
            e.version = jo
        } catch (s) {
            tc(s)
        } finally {
            X = r
        }
    }
}
function Zo() {
    nr > 1e3 && (nr = 0,
    bl()),
    nr++
}
function Ko(e) {
    var t = e.length;
    if (t !== 0) {
        Zo();
        var r = rr;
        rr = !0;
        try {
            for (var n = 0; n < t; n++) {
                var s = e[n];
                s.f & Re || (s.f ^= Re);
                var o = [];
                Jo(s, o),
                nc(o)
            }
        } finally {
            rr = r
        }
    }
}
function nc(e) {
    var t = e.length;
    if (t !== 0)
        for (var r = 0; r < t; r++) {
            var n = e[r];
            !(n.f & (Br | Ze)) && gr(n) && (qr(n),
            n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null ? zo(n) : n.fn = null))
        }
}
function sc() {
    if (xr = !1,
    nr > 1001)
        return;
    const e = St;
    St = [],
    Ko(e),
    xr || (nr = 0)
}
function Mn(e) {
    fn === Wo && (xr || (xr = !0,
    queueMicrotask(sc)));
    for (var t = e; t.parent !== null; ) {
        t = t.parent;
        var r = t.f;
        if (r & (Ur | Xe)) {
            if (!(r & Re))
                return;
            t.f ^= Re
        }
    }
    St.push(t)
}
function Jo(e, t) {
    var r = e.first
      , n = [];
    e: for (; r !== null; ) {
        var s = r.f
          , o = (s & Xe) !== 0
          , i = o && (s & Re) !== 0;
        if (!i && !(s & Ze))
            if (s & Gr) {
                o ? r.f ^= Re : gr(r) && qr(r);
                var l = r.first;
                if (l !== null) {
                    r = l;
                    continue
                }
            } else
                s & wo && n.push(r);
        var a = r.next;
        if (a === null) {
            let d = r.parent;
            for (; d !== null; ) {
                if (e === d)
                    break e;
                var u = d.next;
                if (u !== null) {
                    r = u;
                    continue e
                }
                d = d.parent
            }
        }
        r = a
    }
    for (var c = 0; c < n.length; c++)
        l = n[c],
        t.push(l),
        Jo(l, t)
}
function oe(e) {
    var t = fn
      , r = St;
    try {
        Zo();
        const s = [];
        fn = Kl,
        St = s,
        xr = !1,
        Ko(r);
        var n = e == null ? void 0 : e();
        return Zl(),
        (St.length > 0 || s.length > 0) && oe(),
        nr = 0,
        n
    } finally {
        fn = t,
        St = r
    }
}
function v(e) {
    var l;
    var t = e.f
      , r = (t & Je) !== 0;
    if (r && t & Br) {
        var n = Go(e);
        return Ms(e),
        n
    }
    if (Zt && Xt.add(e),
    ee !== null) {
        Ke !== null && Ke.includes(e) && Dl();
        var s = ee.deps;
        Ie === null && s !== null && s[Ne] === e ? Ne++ : Ie === null ? Ie = [e] : Ie.push(e),
        yt !== null && X !== null && X.f & Re && !(X.f & Xe) && yt.includes(e) && (Qe(X, It),
        Mn(X))
    } else if (r && e.deps === null) {
        var o = e
          , i = o.parent;
        i !== null && !((l = i.deriveds) != null && l.includes(o)) && (i.deriveds ?? (i.deriveds = [])).push(o)
    }
    return r && (o = e,
    gr(o) && Uo(o)),
    e.v
}
function ic(e) {
    var t = Zt
      , r = Xt;
    Zt = !0,
    Xt = new Set;
    var n = Xt, s;
    try {
        je(e)
    } finally {
        if (Zt = t,
        Zt)
            for (s of Xt)
                r.add(s);
        Xt = r
    }
    for (s of n)
        if (s.f & So)
            for (const o of s.deps || [])
                o.f & Je || ri(o, null);
        else
            ri(s, null)
}
function je(e) {
    const t = ee;
    try {
        return ee = null,
        e()
    } finally {
        ee = t
    }
}
const oc = ~(It | dr | Re);
function Qe(e, t) {
    e.f = e.f & oc | t
}
function sr(e) {
    return ea().get(e)
}
function Hn(e, t) {
    return ea().set(e, t),
    t
}
function ea(e) {
    return Q === null && Vr(),
    Q.c ?? (Q.c = new Map(ac(Q) || void 0))
}
function ac(e) {
    let t = e.p;
    for (; t !== null; ) {
        const r = t.c;
        if (r !== null)
            return r;
        t = t.p
    }
    return null
}
function ci(e, t=1) {
    var r = +v(e);
    return I(e, r + t),
    r
}
function et(e, t=!1, r) {
    Q = {
        p: Q,
        c: null,
        e: null,
        m: !1,
        s: e,
        x: null,
        l: null
    },
    pr && !t && (Q.l = {
        s: null,
        u: null,
        r1: [],
        r2: we(!1)
    })
}
function tt(e) {
    const t = Q;
    if (t !== null) {
        e !== void 0 && (t.x = e);
        const i = t.e;
        if (i !== null) {
            var r = X
              , n = ee;
            t.e = null;
            try {
                for (var s = 0; s < i.length; s++) {
                    var o = i[s];
                    Me(o.effect),
                    Ve(o.reaction),
                    mr(o.fn)
                }
            } finally {
                Me(r),
                Ve(n)
            }
        }
        Q = t.p,
        t.m = !0
    }
    return e || {}
}
function ir(e) {
    if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
        if (Et in e)
            cs(e);
        else if (!Array.isArray(e))
            for (let t in e) {
                const r = e[t];
                typeof r == "object" && r && Et in r && cs(r)
            }
    }
}
function cs(e, t=new Set) {
    if (typeof e == "object" && e !== null && !(e instanceof EventTarget) && !t.has(e)) {
        t.add(e),
        e instanceof Date && e.getTime();
        for (let n in e)
            try {
                cs(e[n], t)
            } catch {}
        const r = mn(e);
        if (r !== Object.prototype && r !== Array.prototype && r !== Map.prototype && r !== Set.prototype && r !== Date.prototype) {
            const n = bo(r);
            for (let s in n) {
                const o = n[s].get;
                if (o)
                    try {
                        o.call(e)
                    } catch {}
            }
        }
    }
}
function lc(e, t) {
    if (t) {
        const r = document.body;
        e.autofocus = !0,
        Gt( () => {
            document.activeElement === r && e.focus()
        }
        )
    }
}
let ui = !1;
function cc() {
    ui || (ui = !0,
    document.addEventListener("reset", e => {
        Promise.resolve().then( () => {
            var t;
            if (!e.defaultPrevented)
                for (const r of e.target.elements)
                    (t = r.__on_r) == null || t.call(r)
        }
        )
    }
    , {
        capture: !0
    }))
}
function ta(e) {
    var t = ee
      , r = X;
    Ve(null),
    Me(null);
    try {
        return e()
    } finally {
        Ve(t),
        Me(r)
    }
}
function ra(e, t, r, n=r) {
    e.addEventListener(t, () => ta(r));
    const s = e.__on_r;
    s ? e.__on_r = () => {
        s(),
        n()
    }
    : e.__on_r = n,
    cc()
}
const na = new Set
  , us = new Set;
function ds(e, t, r, n) {
    function s(o) {
        if (n.capture || Or.call(t, o),
        !o.cancelBubble)
            return ta( () => r.call(this, o))
    }
    return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Gt( () => {
        t.addEventListener(e, s, n)
    }
    ) : t.addEventListener(e, s, n),
    s
}
function Ge(e, t, r, n, s) {
    var o = {
        capture: n,
        passive: s
    }
      , i = ds(e, t, r, o);
    (t === document.body || t === window || t === document) && Cs( () => {
        t.removeEventListener(e, i, o)
    }
    )
}
function uc(e) {
    for (var t = 0; t < e.length; t++)
        na.add(e[t]);
    for (var r of us)
        r(e)
}
function Or(e) {
    var E;
    var t = this
      , r = t.ownerDocument
      , n = e.type
      , s = ((E = e.composedPath) == null ? void 0 : E.call(e)) || []
      , o = s[0] || e.target
      , i = 0
      , l = e.__root;
    if (l) {
        var a = s.indexOf(l);
        if (a !== -1 && (t === document || t === window)) {
            e.__root = t;
            return
        }
        var u = s.indexOf(t);
        if (u === -1)
            return;
        a <= u && (i = a)
    }
    if (o = s[i] || e.target,
    o !== t) {
        pl(e, "currentTarget", {
            configurable: !0,
            get() {
                return o || r
            }
        });
        var c = ee
          , d = X;
        Ve(null),
        Me(null);
        try {
            for (var f, h = []; o !== null; ) {
                var p = o.assignedSlot || o.parentNode || o.host || null;
                try {
                    var m = o["__" + n];
                    if (m !== void 0 && !o.disabled)
                        if (Dn(m)) {
                            var [_,...g] = m;
                            _.apply(o, [e, ...g])
                        } else
                            m.call(o, e)
                } catch (y) {
                    f ? h.push(y) : f = y
                }
                if (e.cancelBubble || p === t || p === null)
                    break;
                o = p
            }
            if (f) {
                for (let y of h)
                    queueMicrotask( () => {
                        throw y
                    }
                    );
                throw f
            }
        } finally {
            e.__root = t,
            delete e.currentTarget,
            Ve(c),
            Me(d)
        }
    }
}
function sa(e) {
    var t = document.createElement("template");
    return t.innerHTML = e,
    t.content
}
function cr(e, t) {
    var r = X;
    r.nodes_start === null && (r.nodes_start = e,
    r.nodes_end = t)
}
function Z(e, t) {
    var r = (t & $l) !== 0, n = (t & Vl) !== 0, s, o = !e.startsWith("<!>");
    return () => {
        s === void 0 && (s = sa(o ? e : "<!>" + e),
        r || (s = lr(s)));
        var i = n ? document.importNode(s, !0) : s.cloneNode(!0);
        if (r) {
            var l = lr(i)
              , a = i.lastChild;
            cr(l, a)
        } else
            cr(i, i);
        return i
    }
}
function dc(e, t, r="svg") {
    var n = !e.startsWith("<!>"), s = `<${r}>${n ? e : "<!>" + e}</${r}>`, o;
    return () => {
        if (!o) {
            var i = sa(s)
              , l = lr(i);
            o = lr(l)
        }
        var a = o.cloneNode(!0);
        return cr(a, a),
        a
    }
}
function Pr(e="") {
    {
        var t = kr(e + "");
        return cr(t, t),
        t
    }
}
function ue() {
    var e = document.createDocumentFragment()
      , t = document.createComment("")
      , r = kr();
    return e.append(t, r),
    cr(t, r),
    e
}
function U(e, t) {
    e !== null && e.before(t)
}
function fc(e) {
    return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture"
}
const pc = ["beforeinput", "click", "change", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"];
function hc(e) {
    return pc.includes(e)
}
const mc = {
    formnovalidate: "formNoValidate",
    ismap: "isMap",
    nomodule: "noModule",
    playsinline: "playsInline",
    readonly: "readOnly"
};
function gc(e) {
    return e = e.toLowerCase(),
    mc[e] ?? e
}
const _c = ["touchstart", "touchmove"];
function Ec(e) {
    return _c.includes(e)
}
let yn = !0;
function di(e) {
    yn = e
}
function qe(e, t) {
    var r = t == null ? "" : typeof t == "object" ? t + "" : t;
    r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r,
    e.nodeValue = r == null ? "" : r + "")
}
function vc(e, t) {
    return yc(e, t)
}
const Yt = new Map;
function yc(e, {target: t, anchor: r, props: n={}, events: s, context: o, intro: i=!0}) {
    ql();
    var l = new Set
      , a = d => {
        for (var f = 0; f < d.length; f++) {
            var h = d[f];
            if (!l.has(h)) {
                l.add(h);
                var p = Ec(h);
                t.addEventListener(h, Or, {
                    passive: p
                });
                var m = Yt.get(h);
                m === void 0 ? (document.addEventListener(h, Or, {
                    passive: p
                }),
                Yt.set(h, 1)) : Yt.set(h, m + 1)
            }
        }
    }
    ;
    a(Os(na)),
    us.add(a);
    var u = void 0
      , c = Xl( () => {
        var d = r ?? t.appendChild(kr());
        return We( () => {
            if (o) {
                et({});
                var f = Q;
                f.c = o
            }
            s && (n.$$events = s),
            yn = i,
            u = e(d, n) || {},
            yn = !0,
            o && tt()
        }
        ),
        () => {
            var p;
            for (var f of l) {
                t.removeEventListener(f, Or);
                var h = Yt.get(f);
                --h === 0 ? (document.removeEventListener(f, Or),
                Yt.delete(f)) : Yt.set(f, h)
            }
            us.delete(a),
            fi.delete(u),
            d !== r && ((p = d.parentNode) == null || p.removeChild(d))
        }
    }
    );
    return fi.set(u, c),
    u
}
let fi = new WeakMap;
const Wn = 0
  , Jr = 1
  , jn = 2;
function Tc(e, t, r, n, s) {
    var o = e, i = zr(), l = Q, a, u, c, d, f = (i ? we : ar)(void 0), h = (i ? we : ar)(void 0), p = !1;
    function m(g, E) {
        p = !0,
        E && (Me(_),
        Ve(_),
        li(l));
        try {
            g === Wn && r && (u ? vt(u) : u = We( () => r(o))),
            g === Jr && n && (c ? vt(c) : c = We( () => n(o, f))),
            g === jn && s && (d ? vt(d) : d = We( () => s(o, h))),
            g !== Wn && u && lt(u, () => u = null),
            g !== Jr && c && lt(c, () => c = null),
            g !== jn && d && lt(d, () => d = null)
        } finally {
            E && (li(null),
            Ve(null),
            Me(null),
            oe())
        }
    }
    var _ = Ft( () => {
        if (a !== (a = t())) {
            if (gl(a)) {
                var g = a;
                p = !1,
                g.then(E => {
                    g === a && (tr(f, E),
                    m(Jr, !0))
                }
                , E => {
                    if (g === a)
                        throw tr(h, E),
                        m(jn, !0),
                        h.v
                }
                ),
                Gt( () => {
                    p || m(Wn, !0)
                }
                )
            } else
                tr(f, a),
                m(Jr, !1);
            return () => a = null
        }
    }
    )
}
function ce(e, t, r, n=null, s=!1) {
    var o = e
      , i = null
      , l = null
      , a = null
      , u = s ? fr : 0;
    Ft( () => {
        a !== (a = !!t()) && (a ? (i ? vt(i) : i = We( () => r(o)),
        l && lt(l, () => {
            l = null
        }
        )) : (l ? vt(l) : n && (l = We( () => n(o))),
        i && lt(i, () => {
            i = null
        }
        )))
    }
    , u)
}
function Ic(e, t, r) {
    var n = e, s = Ae, o;
    Ft( () => {
        Ds(s, s = t()) && (o && lt(o),
        o = We( () => r(n)))
    }
    )
}
function Ar(e, t) {
    return t
}
function bc(e, t, r, n) {
    for (var s = [], o = t.length, i = 0; i < o; i++)
        xs(t[i].e, s, !0);
    var l = o > 0 && s.length === 0 && r !== null;
    if (l) {
        var a = r.parentNode;
        Yl(a),
        a.append(r),
        n.clear(),
        mt(e, t[0].prev, t[o - 1].next)
    }
    qo(s, () => {
        for (var u = 0; u < o; u++) {
            var c = t[u];
            l || (n.delete(c.k),
            mt(e, c.prev, c.next)),
            bt(c.e, !l)
        }
    }
    )
}
function Lr(e, t, r, n, s, o=null) {
    var i = e
      , l = {
        flags: t,
        items: new Map,
        first: null
    }
      , a = (t & Ao) !== 0;
    if (a) {
        var u = e;
        i = u.appendChild(kr())
    }
    var c = null
      , d = !1;
    Ft( () => {
        var f = r()
          , h = Dn(f) ? f : f == null ? [] : Os(f)
          , p = h.length;
        if (!(d && p === 0)) {
            d = p === 0;
            {
                var m = ee;
                wc(h, l, i, s, t, (m.f & Ze) !== 0, n)
            }
            o !== null && (p === 0 ? c ? vt(c) : c = We( () => o(i)) : c !== null && lt(c, () => {
                c = null
            }
            )),
            r()
        }
    }
    )
}
function wc(e, t, r, n, s, o, i) {
    var S, L, O, M;
    var l = (s & Ml) !== 0, a = (s & (As | Ls)) !== 0, u = e.length, c = t.items, d = t.first, f = d, h, p = null, m, _ = [], g = [], E, y, b, T;
    if (l)
        for (T = 0; T < u; T += 1)
            E = e[T],
            y = i(E, T),
            b = c.get(y),
            b !== void 0 && ((S = b.a) == null || S.measure(),
            (m ?? (m = new Set)).add(b));
    for (T = 0; T < u; T += 1) {
        if (E = e[T],
        y = i(E, T),
        b = c.get(y),
        b === void 0) {
            var A = f ? f.e.nodes_start : r;
            p = Sc(A, t, p, p === null ? t.first : p.next, E, y, T, n, s),
            c.set(y, p),
            _ = [],
            g = [],
            f = p.next;
            continue
        }
        if (a && Rc(b, E, T, s),
        b.e.f & Ze && (vt(b.e),
        l && ((L = b.a) == null || L.unfix(),
        (m ?? (m = new Set)).delete(b))),
        b !== f) {
            if (h !== void 0 && h.has(b)) {
                if (_.length < g.length) {
                    var C = g[0], R;
                    p = C.prev;
                    var P = _[0]
                      , N = _[_.length - 1];
                    for (R = 0; R < _.length; R += 1)
                        pi(_[R], C, r);
                    for (R = 0; R < g.length; R += 1)
                        h.delete(g[R]);
                    mt(t, P.prev, N.next),
                    mt(t, p, P),
                    mt(t, N, C),
                    f = C,
                    p = N,
                    T -= 1,
                    _ = [],
                    g = []
                } else
                    h.delete(b),
                    pi(b, f, r),
                    mt(t, b.prev, b.next),
                    mt(t, b, p === null ? t.first : p.next),
                    mt(t, p, b),
                    p = b;
                continue
            }
            for (_ = [],
            g = []; f !== null && f.k !== y; )
                (o || !(f.e.f & Ze)) && (h ?? (h = new Set)).add(f),
                g.push(f),
                f = f.next;
            if (f === null)
                continue;
            b = f
        }
        _.push(b),
        p = b,
        f = b.next
    }
    if (f !== null || h !== void 0) {
        for (var w = h === void 0 ? [] : Os(h); f !== null; )
            (o || !(f.e.f & Ze)) && w.push(f),
            f = f.next;
        var x = w.length;
        if (x > 0) {
            var V = s & Ao && u === 0 ? r : null;
            if (l) {
                for (T = 0; T < x; T += 1)
                    (O = w[T].a) == null || O.measure();
                for (T = 0; T < x; T += 1)
                    (M = w[T].a) == null || M.fix()
            }
            bc(t, w, V, c)
        }
    }
    l && Gt( () => {
        var F;
        if (m !== void 0)
            for (b of m)
                (F = b.a) == null || F.apply()
    }
    ),
    X.first = t.first && t.first.e,
    X.last = p && p.e
}
function Rc(e, t, r, n) {
    n & As && tr(e.v, t),
    n & Ls ? tr(e.i, r) : e.i = r
}
function Sc(e, t, r, n, s, o, i, l, a) {
    var u = (a & As) !== 0
      , c = (a & Cl) === 0
      , d = u ? c ? ar(s) : we(s) : s
      , f = a & Ls ? we(i) : i
      , h = {
        i: f,
        v: d,
        k: o,
        a: null,
        e: null,
        prev: r,
        next: n
    };
    try {
        return h.e = We( () => l(e, d, f), Co),
        h.e.prev = r && r.e,
        h.e.next = n && n.e,
        r === null ? t.first = h : (r.next = h,
        r.e.next = h.e),
        n !== null && (n.prev = h,
        n.e.prev = h.e),
        h
    } finally {}
}
function pi(e, t, r) {
    for (var n = e.next ? e.next.e.nodes_start : r, s = t ? t.e.nodes_start : r, o = e.e.nodes_start; o !== n; ) {
        var i = An(o);
        s.before(o),
        o = i
    }
}
function mt(e, t, r) {
    t === null ? e.first = r : (t.next = r,
    t.e.next = r && r.e),
    r !== null && (r.prev = t,
    r.e.prev = t && t.e)
}
function Se(e, t, r, n, s) {
    var l;
    var o = (l = t.$$slots) == null ? void 0 : l[r]
      , i = !1;
    o === !0 && (o = t.children,
    i = !0),
    o === void 0 || o(e, i ? () => n : n)
}
function Oc(e, t, r) {
    var n = e, s, o;
    Ft( () => {
        s !== (s = t()) && (o && (lt(o),
        o = null),
        s && (o = We( () => r(n, s))))
    }
    , fr)
}
function Dc(e, t, r, n, s, o) {
    var i, l, a = null, u = e, c;
    Ft( () => {
        const d = t() || null;
        var f = Mo;
        d !== i && (c && (d === null ? lt(c, () => {
            c = null,
            l = null
        }
        ) : d === l ? vt(c) : (bt(c),
        di(!1))),
        d && d !== l && (c = We( () => {
            if (a = document.createElementNS(f, d),
            cr(a, a),
            n) {
                var h = a.appendChild(kr());
                n(a, h)
            }
            X.nodes_end = a,
            u.before(a)
        }
        )),
        i = d,
        i && (l = i),
        di(!0))
    }
    , fr)
}
function gt(e, t, r, n) {
    var s = e.__attributes ?? (e.__attributes = {});
    s[t] !== (s[t] = r) && (t === "style" && "__styles"in e && (e.__styles = {}),
    t === "loading" && (e[vl] = r),
    r == null ? e.removeAttribute(t) : typeof r != "string" && ia(e).includes(t) ? e[t] = r : e.setAttribute(t, r))
}
function fs(e, t, r, n, s=!1, o=!1, i=!1) {
    var l = t || {}
      , a = e.tagName === "OPTION";
    for (var u in t)
        u in r || (r[u] = null);
    var c = ia(e)
      , d = e.__attributes ?? (e.__attributes = {})
      , f = [];
    for (const E in r) {
        let y = r[E];
        if (a && E === "value" && y == null) {
            e.value = e.__value = "",
            l[E] = y;
            continue
        }
        var h = l[E];
        if (y !== h) {
            l[E] = y;
            var p = E[0] + E[1];
            if (p !== "$$") {
                if (p === "on") {
                    const b = {}
                      , T = "$$" + E;
                    let A = E.slice(2);
                    var m = hc(A);
                    if (fc(A) && (A = A.slice(0, -7),
                    b.capture = !0),
                    !m && h) {
                        if (y != null)
                            continue;
                        e.removeEventListener(A, l[T], b),
                        l[T] = null
                    }
                    if (y != null)
                        if (m)
                            e[`__${A}`] = y,
                            uc([A]);
                        else {
                            let C = function(R) {
                                l[E].call(this, R)
                            };
                            var g = C;
                            t ? l[T] = ds(A, e, C, b) : f.push([E, y, () => l[T] = ds(A, e, C, b)])
                        }
                } else if (E === "style" && y != null)
                    e.style.cssText = y + "";
                else if (E === "autofocus")
                    lc(e, !!y);
                else if (E === "__value" || E === "value" && y != null)
                    e.value = e[E] = e.__value = y;
                else {
                    var _ = E;
                    s || (_ = gc(_)),
                    y == null && !o ? (d[E] = null,
                    e.removeAttribute(E)) : c.includes(_) && (o || typeof y != "string") ? e[_] = y : typeof y != "function" && gt(e, _, y)
                }
                E === "style" && "__styles"in e && (e.__styles = {})
            }
        }
    }
    return t || Gt( () => {
        if (e.isConnected)
            for (const [E,y,b] of f)
                l[E] === y && b()
    }
    ),
    l
}
var hi = new Map;
function ia(e) {
    var t = hi.get(e.nodeName);
    if (t)
        return t;
    hi.set(e.nodeName, t = []);
    for (var r, n = mn(e), s = Element.prototype; s !== n; ) {
        r = bo(n);
        for (var o in r)
            r[o].set && t.push(o);
        n = mn(n)
    }
    return t
}
function Fs(e, t) {
    var r = e.__className
      , n = Pc(t);
    (r !== n || Co) && (t == null ? e.removeAttribute("class") : e.className = n,
    e.__className = n)
}
function Pc(e) {
    return e ?? ""
}
const Ac = () => performance.now()
  , _t = {
    tick: e => requestAnimationFrame(e),
    now: () => Ac(),
    tasks: new Set
};
function oa(e) {
    _t.tasks.forEach(t => {
        t.c(e) || (_t.tasks.delete(t),
        t.f())
    }
    ),
    _t.tasks.size !== 0 && _t.tick(oa)
}
function Lc(e) {
    let t;
    return _t.tasks.size === 0 && _t.tick(oa),
    {
        promise: new Promise(r => {
            _t.tasks.add(t = {
                c: e,
                f: r
            })
        }
        ),
        abort() {
            _t.tasks.delete(t)
        }
    }
}
function en(e, t) {
    e.dispatchEvent(new CustomEvent(t))
}
function Mc(e) {
    if (e === "float")
        return "cssFloat";
    if (e === "offset")
        return "cssOffset";
    if (e.startsWith("--"))
        return e;
    const t = e.split("-");
    return t.length === 1 ? t[0] : t[0] + t.slice(1).map(r => r[0].toUpperCase() + r.slice(1)).join("")
}
function mi(e) {
    const t = {}
      , r = e.split(";");
    for (const n of r) {
        const [s,o] = n.split(":");
        if (!s || o === void 0)
            break;
        const i = Mc(s.trim());
        t[i] = o.trim()
    }
    return t
}
const Cc = e => e;
function gi(e, t, r, n) {
    var s = (e & Ul) !== 0, o = (e & Bl) !== 0, i = s && o, l = (e & kl) !== 0, a = i ? "both" : s ? "in" : "out", u, c = t.inert, d, f;
    function h() {
        var E = ee
          , y = X;
        Ve(null),
        Me(null);
        try {
            return u ?? (u = r()(t, (n == null ? void 0 : n()) ?? {}, {
                direction: a
            }))
        } finally {
            Ve(E),
            Me(y)
        }
    }
    var p = {
        is_global: l,
        in() {
            var E;
            if (t.inert = c,
            !s) {
                f == null || f.abort(),
                (E = f == null ? void 0 : f.reset) == null || E.call(f);
                return
            }
            o || d == null || d.abort(),
            en(t, "introstart"),
            d = ps(t, h(), f, 1, () => {
                en(t, "introend"),
                d == null || d.abort(),
                d = u = void 0
            }
            )
        },
        out(E) {
            if (!o) {
                E == null || E(),
                u = void 0;
                return
            }
            t.inert = !0,
            en(t, "outrostart"),
            f = ps(t, h(), d, 0, () => {
                en(t, "outroend"),
                E == null || E()
            }
            )
        },
        stop: () => {
            d == null || d.abort(),
            f == null || f.abort()
        }
    }
      , m = X;
    if ((m.transitions ?? (m.transitions = [])).push(p),
    s && yn) {
        var _ = l;
        if (!_) {
            for (var g = m.parent; g && g.f & fr; )
                for (; (g = g.parent) && !(g.f & Pn); )
                    ;
            _ = !g || (g.f & Ro) !== 0
        }
        _ && mr( () => {
            je( () => p.in())
        }
        )
    }
}
function ps(e, t, r, n, s) {
    var o = n === 1;
    if (Wt(t)) {
        var i, l = !1;
        return Gt( () => {
            if (!l) {
                var _ = t({
                    direction: o ? "in" : "out"
                });
                i = ps(e, _, r, n, s)
            }
        }
        ),
        {
            abort: () => {
                l = !0,
                i == null || i.abort()
            }
            ,
            deactivate: () => i.deactivate(),
            reset: () => i.reset(),
            t: () => i.t()
        }
    }
    if (r == null || r.deactivate(),
    !(t != null && t.duration))
        return s(),
        {
            abort: Ue,
            deactivate: Ue,
            reset: Ue,
            t: () => n
        };
    const {delay: a=0, css: u, tick: c, easing: d=Cc} = t;
    var f = [];
    if (o && r === void 0 && (c && c(0, 1),
    u)) {
        var h = mi(u(0, 1));
        f.push(h, h)
    }
    var p = () => 1 - n
      , m = e.animate(f, {
        duration: a
    });
    return m.onfinish = () => {
        var _ = (r == null ? void 0 : r.t()) ?? 1 - n;
        r == null || r.abort();
        var g = n - _
          , E = t.duration * Math.abs(g)
          , y = [];
        if (E > 0) {
            if (u)
                for (var b = Math.ceil(E / 16.666666666666668), T = 0; T <= b; T += 1) {
                    var A = _ + g * d(T / b)
                      , C = u(A, 1 - A);
                    y.push(mi(C))
                }
            p = () => {
                var R = m.currentTime;
                return _ + g * d(R / E)
            }
            ,
            c && Lc( () => {
                if (m.playState !== "running")
                    return !1;
                var R = p();
                return c(R, 1 - R),
                !0
            }
            )
        }
        m = e.animate(y, {
            duration: E,
            fill: "forwards"
        }),
        m.onfinish = () => {
            p = () => n,
            c == null || c(n, 1 - n),
            s()
        }
    }
    ,
    {
        abort: () => {
            m && (m.cancel(),
            m.effect = null,
            m.onfinish = Ue)
        }
        ,
        deactivate: () => {
            s = Ue
        }
        ,
        reset: () => {
            n === 0 && (c == null || c(1, 0))
        }
        ,
        t: () => p()
    }
}
function hs(e, t, r=t) {
    var n = zr();
    ra(e, "input", () => {
        var s = _i(e) ? Ei(e.value) : e.value;
        r(s),
        n && s !== (s = t()) && (e.value = s ?? "")
    }
    ),
    $r( () => {
        var s = t();
        _i(e) && s === Ei(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "")
    }
    )
}
function _i(e) {
    var t = e.type;
    return t === "number" || t === "range"
}
function Ei(e) {
    return e === "" ? null : +e
}
function vi(e, t, r) {
    var n = at(e, t);
    n && n.set && (e[t] = r,
    Cs( () => {
        e[t] = null
    }
    ))
}
function aa(e, t, r) {
    if (e.multiple)
        return Fc(e, t);
    for (var n of e.options) {
        var s = Mr(n);
        if (zl(s, t)) {
            n.selected = !0;
            return
        }
    }
    (!r || t !== void 0) && (e.selectedIndex = -1)
}
function xc(e, t) {
    mr( () => {
        var r = new MutationObserver( () => {
            var n = e.__value;
            aa(e, n)
        }
        );
        return r.observe(e, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["value"]
        }),
        () => {
            r.disconnect()
        }
    }
    )
}
function Nc(e, t, r=t) {
    var n = !0;
    ra(e, "change", () => {
        var s;
        if (e.multiple)
            s = [].map.call(e.querySelectorAll(":checked"), Mr);
        else {
            var o = e.querySelector(":checked");
            s = o && Mr(o)
        }
        r(s)
    }
    ),
    mr( () => {
        var s = t();
        if (aa(e, s, n),
        n && s === void 0) {
            var o = e.querySelector(":checked");
            o !== null && (s = Mr(o),
            r(s))
        }
        e.__value = s,
        n = !1
    }
    ),
    xc(e)
}
function Fc(e, t) {
    for (var r of e.options)
        r.selected = ~t.indexOf(Mr(r))
}
function Mr(e) {
    return "__value"in e ? e.__value : e.value
}
function yi(e, t) {
    return e === t || (e == null ? void 0 : e[Et]) === t
}
function la(e={}, t, r, n) {
    return mr( () => {
        var s, o;
        return $r( () => {
            s = o,
            o = [],
            je( () => {
                e !== r(...o) && (t(e, ...o),
                s && yi(r(...s), e) && t(null, ...s))
            }
            )
        }
        ),
        () => {
            Gt( () => {
                o && yi(r(...o), e) && t(null, ...o)
            }
            )
        }
    }
    ),
    e
}
function Gc(e) {
    return function(...t) {
        var r = t[0];
        r.target === this && (e == null || e.apply(this, t))
    }
}
function Uc(e) {
    return function(...t) {
        var r = t[0];
        return r.stopPropagation(),
        e == null ? void 0 : e.apply(this, t)
    }
}
function Bc(e) {
    return function(...t) {
        var r = t[0];
        return r.preventDefault(),
        e == null ? void 0 : e.apply(this, t)
    }
}
function dt(e=!1) {
    const t = Q
      , r = t.l.u;
    if (!r)
        return;
    let n = () => ir(t.s);
    if (e) {
        let s = 0
          , o = {};
        const i = En( () => {
            let l = !1;
            const a = t.s;
            for (const u in a)
                a[u] !== o[u] && (o[u] = a[u],
                l = !0);
            return l && s++,
            s
        }
        );
        n = () => v(i)
    }
    r.b.length && jl( () => {
        Ti(t, n),
        gn(r.b)
    }
    ),
    as( () => {
        const s = je( () => r.m.map(_l));
        return () => {
            for (const o of s)
                typeof o == "function" && o()
        }
    }
    ),
    r.a.length && as( () => {
        Ti(t, n),
        gn(r.a)
    }
    )
}
function Ti(e, t) {
    if (e.l.s)
        for (const r of e.l.s)
            v(r);
    t()
}
function ca(e, t, r) {
    if (e == null)
        return t(void 0),
        r && r(void 0),
        Ue;
    const n = je( () => e.subscribe(t, r));
    return n.unsubscribe ? () => n.unsubscribe() : n
}
let tn = !1;
function Ot(e, t, r) {
    const n = r[t] ?? (r[t] = {
        store: null,
        source: ar(void 0),
        unsubscribe: Ue
    });
    if (n.store !== e)
        if (n.unsubscribe(),
        n.store = e ?? null,
        e == null)
            n.source.v = void 0,
            n.unsubscribe = Ue;
        else {
            var s = !0;
            n.unsubscribe = ca(e, o => {
                s ? n.source.v = o : I(n.source, o)
            }
            ),
            s = !1
        }
    return v(n.source)
}
function Gs() {
    const e = {};
    return Cs( () => {
        for (var t in e)
            e[t].unsubscribe()
    }
    ),
    e
}
function kc(e) {
    var t = tn;
    try {
        return tn = !1,
        [e(), tn]
    } finally {
        tn = t
    }
}
const $c = {
    get(e, t) {
        if (!e.exclude.includes(t))
            return v(e.version),
            t in e.special ? e.special[t]() : e.props[t]
    },
    set(e, t, r) {
        return t in e.special || (e.special[t] = Y({
            get[t]() {
                return e.props[t]
            }
        }, t, Lo)),
        e.special[t](r),
        ci(e.version),
        !0
    },
    getOwnPropertyDescriptor(e, t) {
        if (!e.exclude.includes(t) && t in e.props)
            return {
                enumerable: !0,
                configurable: !0,
                value: e.props[t]
            }
    },
    deleteProperty(e, t) {
        return e.exclude.includes(t) || (e.exclude.push(t),
        ci(e.version)),
        !0
    },
    has(e, t) {
        return e.exclude.includes(t) ? !1 : t in e.props
    },
    ownKeys(e) {
        return Reflect.ownKeys(e.props).filter(t => !e.exclude.includes(t))
    }
};
function Oe(e, t) {
    return new Proxy({
        props: e,
        exclude: t,
        special: {},
        version: we(0)
    },$c)
}
const Vc = {
    get(e, t) {
        let r = e.props.length;
        for (; r--; ) {
            let n = e.props[r];
            if (Wt(n) && (n = n()),
            typeof n == "object" && n !== null && t in n)
                return n[t]
        }
    },
    set(e, t, r) {
        let n = e.props.length;
        for (; n--; ) {
            let s = e.props[n];
            Wt(s) && (s = s());
            const o = at(s, t);
            if (o && o.set)
                return o.set(r),
                !0
        }
        return !1
    },
    getOwnPropertyDescriptor(e, t) {
        let r = e.props.length;
        for (; r--; ) {
            let n = e.props[r];
            if (Wt(n) && (n = n()),
            typeof n == "object" && n !== null && t in n) {
                const s = at(n, t);
                return s && !s.configurable && (s.configurable = !0),
                s
            }
        }
    },
    has(e, t) {
        for (let r of e.props)
            if (Wt(r) && (r = r()),
            r != null && t in r)
                return !0;
        return !1
    },
    ownKeys(e) {
        const t = [];
        for (let r of e.props) {
            Wt(r) && (r = r());
            for (const n in r)
                t.includes(n) || t.push(n)
        }
        return t
    }
};
function rt(...e) {
    return new Proxy({
        props: e
    },Vc)
}
function Ii(e) {
    for (var t = X, r = X; t !== null && !(t.f & (Xe | Ur)); )
        t = t.parent;
    try {
        return Me(t),
        e()
    } finally {
        Me(r)
    }
}
function Y(e, t, r, n) {
    var A;
    var s = (r & xl) !== 0, o = !pr || (r & Nl) !== 0, i = (r & Fl) !== 0, l = (r & Gl) !== 0, a = !1, u;
    i ? [u,a] = kc( () => e[t]) : u = e[t];
    var c = (A = at(e, t)) == null ? void 0 : A.set
      , d = n
      , f = !0
      , h = !1
      , p = () => (h = !0,
    f && (f = !1,
    l ? d = je(n) : d = n),
    d);
    u === void 0 && n !== void 0 && (c && o && Rl(),
    u = p(),
    c && c(u));
    var m;
    if (o)
        m = () => {
            var C = e[t];
            return C === void 0 ? p() : (f = !0,
            h = !1,
            C)
        }
        ;
    else {
        var _ = Ii( () => (s ? En : Hl)( () => e[t]));
        _.f |= So,
        m = () => {
            var C = v(_);
            return C !== void 0 && (d = void 0),
            C === void 0 ? d : C
        }
    }
    if (!(r & Lo))
        return m;
    if (c) {
        var g = e.$$legacy;
        return function(C, R) {
            return arguments.length > 0 ? ((!o || !R || g || a) && c(R ? m() : C),
            C) : m()
        }
    }
    var E = !1
      , y = !1
      , b = ar(u)
      , T = Ii( () => En( () => {
        var C = m()
          , R = v(b);
        return E ? (E = !1,
        y = !0,
        R) : (y = !1,
        b.v = C)
    }
    ));
    return s || (T.equals = Ps),
    function(C, R) {
        if (Zt && (E = y,
        m(),
        v(b)),
        arguments.length > 0) {
            const P = R ? v(T) : o && i ? jt(C) : C;
            return T.equals(P) || (E = !0,
            I(b, P),
            h && d !== void 0 && (d = P),
            je( () => v(T))),
            C
        }
        return v(T)
    }
}
function Yr(e) {
    Q === null && Vr(),
    pr && Q.l !== null ? da(Q).m.push(e) : as( () => {
        const t = je(e);
        if (typeof t == "function")
            return t
    }
    )
}
function ua(e) {
    Q === null && Vr(),
    Yr( () => () => je(e))
}
function zc(e, t, {bubbles: r=!1, cancelable: n=!1}={}) {
    return new CustomEvent(e,{
        detail: t,
        bubbles: r,
        cancelable: n
    })
}
function qc() {
    const e = Q;
    return e === null && Vr(),
    (t, r, n) => {
        var o;
        const s = (o = e.s.$$events) == null ? void 0 : o[t];
        if (s) {
            const i = Dn(s) ? s.slice() : [s]
              , l = zc(t, r, n);
            for (const a of i)
                a.call(e.x, l);
            return !l.defaultPrevented
        }
        return !0
    }
}
function Yc(e) {
    Q === null && Vr(),
    Q.l === null && wl(),
    da(Q).a.push(e)
}
function da(e) {
    var t = e.l;
    return t.u ?? (t.u = {
        a: [],
        b: [],
        m: []
    })
}
const Hc = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = {
    v: new Set
})).v.add(Hc);
Al();
const ms = {}
  , Tn = {}
  , fa = {}
  , pa = /^:(.+)/
  , bi = 4
  , Wc = 3
  , jc = 2
  , Xc = 1
  , Qc = 1
  , Fr = e => e.replace(/(^\/+|\/+$)/g, "").split("/")
  , Xn = e => e.replace(/(^\/+|\/+$)/g, "")
  , Zc = (e, t) => {
    const r = e.default ? 0 : Fr(e.path).reduce( (n, s) => (n += bi,
    s === "" ? n += Qc : pa.test(s) ? n += jc : s[0] === "*" ? n -= bi + Xc : n += Wc,
    n), 0);
    return {
        route: e,
        score: r,
        index: t
    }
}
  , Kc = e => e.map(Zc).sort( (t, r) => t.score < r.score ? 1 : t.score > r.score ? -1 : t.index - r.index)
  , wi = (e, t) => {
    let r, n;
    const [s] = t.split("?")
      , o = Fr(s)
      , i = o[0] === ""
      , l = Kc(e);
    for (let a = 0, u = l.length; a < u; a++) {
        const c = l[a].route;
        let d = !1;
        if (c.default) {
            n = {
                route: c,
                params: {},
                uri: t
            };
            continue
        }
        const f = Fr(c.path)
          , h = {}
          , p = Math.max(o.length, f.length);
        let m = 0;
        for (; m < p; m++) {
            const _ = f[m]
              , g = o[m];
            if (_ && _[0] === "*") {
                const y = _ === "*" ? "*" : _.slice(1);
                h[y] = o.slice(m).map(decodeURIComponent).join("/");
                break
            }
            if (typeof g > "u") {
                d = !0;
                break
            }
            const E = pa.exec(_);
            if (E && !i) {
                const y = decodeURIComponent(g);
                h[E[1]] = y
            } else if (_ !== g) {
                d = !0;
                break
            }
        }
        if (!d) {
            r = {
                route: c,
                params: h,
                uri: "/" + o.slice(0, m).join("/")
            };
            break
        }
    }
    return r || n || null
}
  , Qn = (e, t) => e + (t ? `?${t}` : "")
  , Jc = (e, t) => {
    if (e.startsWith("/"))
        return e;
    const [r,n] = e.split("?")
      , [s] = t.split("?")
      , o = Fr(r)
      , i = Fr(s);
    if (o[0] === "")
        return Qn(s, n);
    if (!o[0].startsWith(".")) {
        const u = i.concat(o).join("/");
        return Qn((s === "/" ? "" : "/") + u, n)
    }
    const l = i.concat(o)
      , a = [];
    return l.forEach(u => {
        u === ".." ? a.pop() : u !== "." && a.push(u)
    }
    ),
    Qn("/" + a.join("/"), n)
}
  , Zn = (e, t) => `${Xn(t === "/" ? e : `${Xn(e)}/${Xn(t)}`)}/`
  , eu = e => !e.defaultPrevented && e.button === 0 && !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
  , gs = () => typeof window < "u" && "document"in window && "location"in window;
var tu = Z("<a><!></a>");
function Kt(e, t) {
    const r = Oe(t, ["children", "$$slots", "$$events", "$$legacy"])
      , n = Oe(r, ["to", "replace", "state", "getProps", "preserveScroll"]);
    et(t, !1);
    const s = Gs()
      , o = () => Ot(p, "$base", s)
      , i = () => Ot(h, "$location", s)
      , l = j();
    let a = Y(t, "to", 8, "#")
      , u = Y(t, "replace", 8, !1)
      , c = Y(t, "state", 24, () => ({}))
      , d = Y(t, "getProps", 8, () => ({}))
      , f = Y(t, "preserveScroll", 8, !1);
    const h = sr(ms)
      , {base: p} = sr(Tn)
      , {navigate: m} = sr(fa)
      , _ = qc();
    let g = j()
      , E = j()
      , y = j()
      , b = j();
    const T = P => {
        if (_("click", P),
        eu(P)) {
            P.preventDefault();
            const N = i().pathname === v(g) || u();
            m(v(g), {
                state: c(),
                replace: N,
                preserveScroll: f()
            })
        }
    }
    ;
    ot( () => (ir(a()),
    o()), () => {
        I(g, Jc(a(), o().uri))
    }
    ),
    ot( () => (i(),
    v(g)), () => {
        I(E, i().pathname.startsWith(v(g)))
    }
    ),
    ot( () => (v(g),
    i()), () => {
        I(y, v(g) === i().pathname)
    }
    ),
    ot( () => v(y), () => {
        I(l, v(y) ? "page" : void 0)
    }
    ),
    ot( () => (ir(d()),
    i(),
    v(g),
    v(E),
    v(y),
    ir(n)), () => {
        I(b, d()({
            location: i(),
            href: v(g),
            isPartiallyCurrent: v(E),
            isCurrent: v(y),
            existingProps: n
        }))
    }
    ),
    Ln(),
    dt();
    var A = tu();
    let C;
    var R = B(A);
    Se(R, t, "default", {
        get active() {
            return !!v(l)
        }
    }),
    _e( () => C = fs(A, C, {
        href: v(g),
        "aria-current": v(l),
        ...v(b),
        ...n
    })),
    Ge("click", A, T),
    U(e, A),
    tt()
}
function rn(e, t) {
    const r = Oe(t, ["children", "$$slots", "$$events", "$$legacy"]);
    et(t, !1);
    const n = Gs()
      , s = () => Ot(d, "$activeRoute", n);
    let o = Y(t, "path", 8, "")
      , i = Y(t, "component", 12, null)
      , l = j({})
      , a = j({});
    const {registerRoute: u, unregisterRoute: c, activeRoute: d} = sr(Tn)
      , f = {
        path: o(),
        default: o() === ""
    };
    u(f),
    ua( () => {
        c(f)
    }
    ),
    ot( () => (s(),
    ir(r),
    gs), () => {
        if (s() && s().route === f) {
            I(l, s().params);
            const {component: m, path: _, ...g} = r;
            I(a, g),
            m && (m.toString().startsWith("class ") ? i(m) : i(m())),
            gs() && !s().preserveScroll && (window == null || window.scrollTo(0, 0))
        }
    }
    ),
    Ln(),
    dt();
    var h = ue()
      , p = se(h);
    ce(p, () => s() && s().route === f, m => {
        var _ = ue()
          , g = se(_);
        ce(g, i, E => {
            var y = ue()
              , b = se(y);
            Tc(b, i, null, (T, A) => {
                var C = ue()
                  , R = se(C);
                Oc(R, () => {
                    var P;
                    return ((P = v(A)) == null ? void 0 : P.default) || v(A)
                }
                , (P, N) => {
                    N(P, rt( () => v(l), () => v(a)))
                }
                ),
                U(T, C)
            }
            ),
            U(E, y)
        }
        , E => {
            var y = ue()
              , b = se(y);
            Se(b, t, "default", {
                get params() {
                    return v(l)
                }
            }),
            U(E, y)
        }
        ),
        U(m, _)
    }
    ),
    U(e, h),
    tt()
}
const Ht = [];
function ru(e, t) {
    return {
        subscribe: Dr(e, t).subscribe
    }
}
function Dr(e, t=Ue) {
    let r = null;
    const n = new Set;
    function s(l) {
        if (Ds(e, l) && (e = l,
        r)) {
            const a = !Ht.length;
            for (const u of n)
                u[1](),
                Ht.push(u, e);
            if (a) {
                for (let u = 0; u < Ht.length; u += 2)
                    Ht[u][0](Ht[u + 1]);
                Ht.length = 0
            }
        }
    }
    function o(l) {
        s(l(e))
    }
    function i(l, a=Ue) {
        const u = [l, a];
        return n.add(u),
        n.size === 1 && (r = t(s, o) || Ue),
        l(e),
        () => {
            n.delete(u),
            n.size === 0 && r && (r(),
            r = null)
        }
    }
    return {
        set: s,
        update: o,
        subscribe: i
    }
}
function nu(e, t, r) {
    const n = !Array.isArray(e)
      , s = n ? [e] : e;
    if (!s.every(Boolean))
        throw new Error("derived() expects stores as input, got a falsy value");
    const o = t.length < 2;
    return ru(r, (i, l) => {
        let a = !1;
        const u = [];
        let c = 0
          , d = Ue;
        const f = () => {
            if (c)
                return;
            d();
            const p = t(n ? u[0] : u, i, l);
            o ? i(p) : d = typeof p == "function" ? p : Ue
        }
          , h = s.map( (p, m) => ca(p, _ => {
            u[m] = _,
            c &= ~(1 << m),
            a && f()
        }
        , () => {
            c |= 1 << m
        }
        ));
        return a = !0,
        f(),
        function() {
            gn(h),
            d(),
            a = !1
        }
    }
    )
}
const Kn = e => ({
    ...e.location,
    state: e.history.state,
    key: e.history.state && e.history.state.key || "initial"
})
  , su = e => {
    const t = [];
    let r = Kn(e);
    return {
        get location() {
            return r
        },
        listen(n) {
            t.push(n);
            const s = () => {
                r = Kn(e),
                n({
                    location: r,
                    action: "POP"
                })
            }
            ;
            return e.addEventListener("popstate", s),
            () => {
                e.removeEventListener("popstate", s);
                const o = t.indexOf(n);
                t.splice(o, 1)
            }
        },
        navigate(n, {state: s, replace: o=!1, preserveScroll: i=!1, blurActiveElement: l=!0}={}) {
            s = {
                ...s,
                key: Date.now() + ""
            };
            try {
                o ? e.history.replaceState(s, "", n) : e.history.pushState(s, "", n)
            } catch {
                e.location[o ? "replace" : "assign"](n)
            }
            r = Kn(e),
            t.forEach(a => a({
                location: r,
                action: "PUSH",
                preserveScroll: i
            })),
            l && document.activeElement.blur()
        }
    }
}
  , iu = (e="/") => {
    let t = 0;
    const r = [{
        pathname: e,
        search: ""
    }]
      , n = [];
    return {
        get location() {
            return r[t]
        },
        addEventListener(s, o) {},
        removeEventListener(s, o) {},
        history: {
            get entries() {
                return r
            },
            get index() {
                return t
            },
            get state() {
                return n[t]
            },
            pushState(s, o, i) {
                const [l,a=""] = i.split("?");
                t++,
                r.push({
                    pathname: l,
                    search: a
                }),
                n.push(s)
            },
            replaceState(s, o, i) {
                const [l,a=""] = i.split("?");
                r[t] = {
                    pathname: l,
                    search: a
                },
                n[t] = s
            }
        }
    }
}
  , ou = su(gs() ? window : iu());
var au = Z("<div><!></div>");
function lu(e, t) {
    et(t, !1);
    const r = Gs()
      , n = () => Ot(E, "$base", r)
      , s = () => Ot(g, "$location", r)
      , o = () => Ot(p, "$routes", r)
      , i = () => Ot(m, "$activeRoute", r);
    let l = Y(t, "basepath", 8, "/")
      , a = Y(t, "url", 8, null)
      , u = Y(t, "viewtransition", 8, null)
      , c = Y(t, "history", 8, ou);
    const d = (P, N, w) => {
        const x = u()(w);
        return typeof (x == null ? void 0 : x.fn) == "function" ? x.fn(P, x) : x
    }
    ;
    Hn(fa, c());
    const f = sr(ms)
      , h = sr(Tn)
      , p = Dr([])
      , m = Dr(null);
    let _ = !1;
    const g = f || Dr(a() ? {
        pathname: a()
    } : c().location)
      , E = h ? h.routerBase : Dr({
        path: l(),
        uri: l()
    })
      , y = nu([E, m], ([P,N]) => {
        if (!N)
            return P;
        const {path: w} = P
          , {route: x, uri: V} = N;
        return {
            path: x.default ? w : x.path.replace(/\*.*$/, ""),
            uri: V
        }
    }
    )
      , b = P => {
        const {path: N} = n();
        let {path: w} = P;
        if (P._path = w,
        P.path = Zn(N, w),
        typeof window > "u") {
            if (_)
                return;
            const x = wi([P], s().pathname);
            x && (m.set(x),
            _ = !0)
        } else
            p.update(x => [...x, P])
    }
      , T = P => {
        p.update(N => N.filter(w => w !== P))
    }
    ;
    let A = j(!1);
    f || (Yr( () => c().listen(N => {
        I(A, N.preserveScroll || !1),
        g.set(N.location)
    }
    )),
    Hn(ms, g)),
    Hn(Tn, {
        activeRoute: m,
        base: E,
        routerBase: y,
        registerRoute: b,
        unregisterRoute: T
    }),
    ot( () => (n(),
    Zn), () => {
        const {path: P} = n();
        p.update(N => N.map(w => Object.assign(w, {
            path: Zn(P, w._path)
        })))
    }
    ),
    ot( () => (o(),
    s(),
    v(A)), () => {
        const P = wi(o(), s().pathname);
        m.set(P && {
            ...P,
            preserveScroll: v(A)
        })
    }
    ),
    Ln(),
    dt();
    var C = ue()
      , R = se(C);
    ce(R, u, P => {
        var N = ue()
          , w = se(N);
        Ic(w, () => s().pathname, x => {
            var V = au()
              , S = B(V);
            Se(S, t, "default", {
                get route() {
                    return i() && i().uri
                },
                get location() {
                    return s()
                }
            }),
            gi(1, V, () => d),
            gi(2, V, () => d),
            U(x, V)
        }
        ),
        U(P, N)
    }
    , P => {
        var N = ue()
          , w = se(N);
        Se(w, t, "default", {
            get route() {
                return i() && i().uri
            },
            get location() {
                return s()
            }
        }),
        U(P, N)
    }
    ),
    U(e, C),
    tt()
}
/**
 * @license lucide-svelte v0.460.1 - ISC
 const r=await fetch(`${t?"https://razorextract.com":""}/api/v1/extractions/contact-us/",{method:"POST",body:e});
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cu = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": 2,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
};
var uu = dc("<svg><!><!></svg>");
function ft(e, t) {
    const r = Oe(t, ["children", "$$slots", "$$events", "$$legacy"])
      , n = Oe(r, ["name", "color", "size", "strokeWidth", "absoluteStrokeWidth", "iconNode"]);
    et(t, !1);
    let s = Y(t, "name", 8, void 0)
      , o = Y(t, "color", 8, "currentColor")
      , i = Y(t, "size", 8, 24)
      , l = Y(t, "strokeWidth", 8, 2)
      , a = Y(t, "absoluteStrokeWidth", 8, !1)
      , u = Y(t, "iconNode", 24, () => []);
    const c = (...m) => m.filter( (_, g, E) => !!_ && E.indexOf(_) === g).join(" ");
    dt();
    var d = uu();
    let f;
    var h = B(d);
    Lr(h, 1, u, Ar, (m, _) => {
        let g = () => v(_)[0]
          , E = () => v(_)[1];
        var y = ue()
          , b = se(y);
        Dc(b, g, !0, (T, A) => {
            let C;
            _e( () => C = fs(T, C, {
                ...E()
            }, void 0, T.namespaceURI === Mo, T.nodeName.includes("-")))
        }
        ),
        U(m, y)
    }
    );
    var p = $(h);
    Se(p, t, "default", {}),
    _e( () => f = fs(d, f, {
        ...cu,
        ...n,
        width: i(),
        height: i(),
        stroke: o(),
        "stroke-width": a() ? Number(l()) * 24 / Number(i()) : l(),
        class: c("lucide-icon", "lucide", s() ? `lucide-${s()}` : "", r.class)
    }, void 0, !0)),
    U(e, d),
    tt()
}
function du(e, t) {
    const r = Oe(t, ["children", "$$slots", "$$events", "$$legacy"]);
    ft(e, rt({
        name: "sheet"
    }, () => r, {
        iconNode: [["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            ry: "2"
        }], ["line", {
            x1: "3",
            x2: "21",
            y1: "9",
            y2: "9"
        }], ["line", {
            x1: "3",
            x2: "21",
            y1: "15",
            y2: "15"
        }], ["line", {
            x1: "9",
            x2: "9",
            y1: "9",
            y2: "21"
        }], ["line", {
            x1: "15",
            x2: "15",
            y1: "9",
            y2: "21"
        }]],
        children: (s, o) => {
            var i = ue()
              , l = se(i);
            Se(l, t, "default", {}),
            U(s, i)
        }
        ,
        $$slots: {
            default: !0
        }
    }))
}
function fu(e, t) {
    const r = Oe(t, ["children", "$$slots", "$$events", "$$legacy"]);
    ft(e, rt({
        name: "mail"
    }, () => r, {
        iconNode: [["rect", {
            width: "20",
            height: "16",
            x: "2",
            y: "4",
            rx: "2"
        }], ["path", {
            d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
        }]],
        children: (s, o) => {
            var i = ue()
              , l = se(i);
            Se(l, t, "default", {}),
            U(s, i)
        }
        ,
        $$slots: {
            default: !0
        }
    }))
}
const pu = "modulepreload"
  , hu = function(e) {
    return "/" + e
}
  , Ri = {}
  , mu = function(t, r, n) {
    let s = Promise.resolve();
    if (r && r.length > 0) {
        document.getElementsByTagName("link");
        const i = document.querySelector("meta[property=csp-nonce]")
          , l = (i == null ? void 0 : i.nonce) || (i == null ? void 0 : i.getAttribute("nonce"));
        s = Promise.allSettled(r.map(a => {
            if (a = hu(a),
            a in Ri)
                return;
            Ri[a] = !0;
            const u = a.endsWith(".css")
              , c = u ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${a}"]${c}`))
                return;
            const d = document.createElement("link");
            if (d.rel = u ? "stylesheet" : pu,
            u || (d.as = "script"),
            d.crossOrigin = "",
            d.href = a,
            l && d.setAttribute("nonce", l),
            document.head.appendChild(d),
            u)
                return new Promise( (f, h) => {
                    d.addEventListener("load", f),
                    d.addEventListener("error", () => h(new Error(`Unable to preload CSS for ${a}`)))
                }
                )
        }
        ))
    }
    function o(i) {
        const l = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (l.payload = i,
        window.dispatchEvent(l),
        !l.defaultPrevented)
            throw i
    }
    return s.then(i => {
        for (const l of i || [])
            l.status === "rejected" && o(l.reason);
        return t().catch(o)
    }
    )
};
/*!
 * FilePond 4.32.1
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */
const gu = e => e instanceof HTMLElement
  , _u = (e, t=[], r=[]) => {
    const n = {
        ...e
    }
      , s = []
      , o = []
      , i = () => ({
        ...n
    })
      , l = () => {
        const p = [...s];
        return s.length = 0,
        p
    }
      , a = () => {
        const p = [...o];
        o.length = 0,
        p.forEach( ({type: m, data: _}) => {
            u(m, _)
        }
        )
    }
      , u = (p, m, _) => {
        if (_ && !document.hidden) {
            o.push({
                type: p,
                data: m
            });
            return
        }
        h[p] && h[p](m),
        s.push({
            type: p,
            data: m
        })
    }
      , c = (p, ...m) => f[p] ? f[p](...m) : null
      , d = {
        getState: i,
        processActionQueue: l,
        processDispatchQueue: a,
        dispatch: u,
        query: c
    };
    let f = {};
    t.forEach(p => {
        f = {
            ...p(n),
            ...f
        }
    }
    );
    let h = {};
    return r.forEach(p => {
        h = {
            ...p(u, c, n),
            ...h
        }
    }
    ),
    d
}
  , Eu = (e, t, r) => {
    if (typeof r == "function") {
        e[t] = r;
        return
    }
    Object.defineProperty(e, t, {
        ...r
    })
}
  , le = (e, t) => {
    for (const r in e)
        e.hasOwnProperty(r) && t(r, e[r])
}
  , Tt = e => {
    const t = {};
    return le(e, r => {
        Eu(t, r, e[r])
    }
    ),
    t
}
  , he = (e, t, r=null) => {
    if (r === null)
        return e.getAttribute(t) || e.hasAttribute(t);
    e.setAttribute(t, r)
}
  , vu = "http://www.w3.org/2000/svg"
  , yu = ["svg", "path"]
  , Si = e => yu.includes(e)
  , In = (e, t, r={}) => {
    typeof t == "object" && (r = t,
    t = null);
    const n = Si(e) ? document.createElementNS(vu, e) : document.createElement(e);
    return t && (Si(e) ? he(n, "class", t) : n.className = t),
    le(r, (s, o) => {
        he(n, s, o)
    }
    ),
    n
}
  , Tu = e => (t, r) => {
    typeof r < "u" && e.children[r] ? e.insertBefore(t, e.children[r]) : e.appendChild(t)
}
  , Iu = (e, t) => (r, n) => (typeof n < "u" ? t.splice(n, 0, r) : t.push(r),
r)
  , bu = (e, t) => r => (t.splice(t.indexOf(r), 1),
r.element.parentNode && e.removeChild(r.element),
r)
  , wu = typeof window < "u" && typeof window.document < "u"
  , ha = () => wu
  , Ru = ha() ? In("svg") : {}
  , Su = "children"in Ru ? e => e.children.length : e => e.childNodes.length
  , ma = (e, t, r, n) => {
    const s = r[0] || e.left
      , o = r[1] || e.top
      , i = s + e.width
      , l = o + e.height * (n[1] || 1)
      , a = {
        element: {
            ...e
        },
        inner: {
            left: e.left,
            top: e.top,
            right: e.right,
            bottom: e.bottom
        },
        outer: {
            left: s,
            top: o,
            right: i,
            bottom: l
        }
    };
    return t.filter(u => !u.isRectIgnored()).map(u => u.rect).forEach(u => {
        Oi(a.inner, {
            ...u.inner
        }),
        Oi(a.outer, {
            ...u.outer
        })
    }
    ),
    Di(a.inner),
    a.outer.bottom += a.element.marginBottom,
    a.outer.right += a.element.marginRight,
    Di(a.outer),
    a
}
  , Oi = (e, t) => {
    t.top += e.top,
    t.right += e.left,
    t.bottom += e.top,
    t.left += e.left,
    t.bottom > e.bottom && (e.bottom = t.bottom),
    t.right > e.right && (e.right = t.right)
}
  , Di = e => {
    e.width = e.right - e.left,
    e.height = e.bottom - e.top
}
  , Dt = e => typeof e == "number"
  , Ou = (e, t, r, n=.001) => Math.abs(e - t) < n && Math.abs(r) < n
  , Du = ({stiffness: e=.5, damping: t=.75, mass: r=10}={}) => {
    let n = null
      , s = null
      , o = 0
      , i = !1;
    const u = Tt({
        interpolate: (c, d) => {
            if (i)
                return;
            if (!(Dt(n) && Dt(s))) {
                i = !0,
                o = 0;
                return
            }
            const f = -(s - n) * e;
            o += f / r,
            s += o,
            o *= t,
            Ou(s, n, o) || d ? (s = n,
            o = 0,
            i = !0,
            u.onupdate(s),
            u.oncomplete(s)) : u.onupdate(s)
        }
        ,
        target: {
            set: c => {
                if (Dt(c) && !Dt(s) && (s = c),
                n === null && (n = c,
                s = c),
                n = c,
                s === n || typeof n > "u") {
                    i = !0,
                    o = 0,
                    u.onupdate(s),
                    u.oncomplete(s);
                    return
                }
                i = !1
            }
            ,
            get: () => n
        },
        resting: {
            get: () => i
        },
        onupdate: c => {}
        ,
        oncomplete: c => {}
    });
    return u
}
  , Pu = e => e < .5 ? 2 * e * e : -1 + (4 - 2 * e) * e
  , Au = ({duration: e=500, easing: t=Pu, delay: r=0}={}) => {
    let n = null, s, o, i = !0, l = !1, a = null;
    const c = Tt({
        interpolate: (d, f) => {
            i || a === null || (n === null && (n = d),
            !(d - n < r) && (s = d - n - r,
            s >= e || f ? (s = 1,
            o = l ? 0 : 1,
            c.onupdate(o * a),
            c.oncomplete(o * a),
            i = !0) : (o = s / e,
            c.onupdate((s >= 0 ? t(l ? 1 - o : o) : 0) * a))))
        }
        ,
        target: {
            get: () => l ? 0 : a,
            set: d => {
                if (a === null) {
                    a = d,
                    c.onupdate(d),
                    c.oncomplete(d);
                    return
                }
                d < a ? (a = 1,
                l = !0) : (l = !1,
                a = d),
                i = !1,
                n = null
            }
        },
        resting: {
            get: () => i
        },
        onupdate: d => {}
        ,
        oncomplete: d => {}
    });
    return c
}
  , Pi = {
    spring: Du,
    tween: Au
}
  , Lu = (e, t, r) => {
    const n = e[t] && typeof e[t][r] == "object" ? e[t][r] : e[t] || e
      , s = typeof n == "string" ? n : n.type
      , o = typeof n == "object" ? {
        ...n
    } : {};
    return Pi[s] ? Pi[s](o) : null
}
  , Us = (e, t, r, n=!1) => {
    t = Array.isArray(t) ? t : [t],
    t.forEach(s => {
        e.forEach(o => {
            let i = o
              , l = () => r[o]
              , a = u => r[o] = u;
            typeof o == "object" && (i = o.key,
            l = o.getter || l,
            a = o.setter || a),
            !(s[i] && !n) && (s[i] = {
                get: l,
                set: a
            })
        }
        )
    }
    )
}
  , Mu = ({mixinConfig: e, viewProps: t, viewInternalAPI: r, viewExternalAPI: n}) => {
    const s = {
        ...t
    }
      , o = [];
    return le(e, (i, l) => {
        const a = Lu(l);
        if (!a)
            return;
        a.onupdate = c => {
            t[i] = c
        }
        ,
        a.target = s[i],
        Us([{
            key: i,
            setter: c => {
                a.target !== c && (a.target = c)
            }
            ,
            getter: () => t[i]
        }], [r, n], t, !0),
        o.push(a)
    }
    ),
    {
        write: i => {
            let l = document.hidden
              , a = !0;
            return o.forEach(u => {
                u.resting || (a = !1),
                u.interpolate(i, l)
            }
            ),
            a
        }
        ,
        destroy: () => {}
    }
}
  , Cu = e => (t, r) => {
    e.addEventListener(t, r)
}
  , xu = e => (t, r) => {
    e.removeEventListener(t, r)
}
  , Nu = ({mixinConfig: e, viewProps: t, viewInternalAPI: r, viewExternalAPI: n, viewState: s, view: o}) => {
    const i = []
      , l = Cu(o.element)
      , a = xu(o.element);
    return n.on = (u, c) => {
        i.push({
            type: u,
            fn: c
        }),
        l(u, c)
    }
    ,
    n.off = (u, c) => {
        i.splice(i.findIndex(d => d.type === u && d.fn === c), 1),
        a(u, c)
    }
    ,
    {
        write: () => !0,
        destroy: () => {
            i.forEach(u => {
                a(u.type, u.fn)
            }
            )
        }
    }
}
  , Fu = ({mixinConfig: e, viewProps: t, viewExternalAPI: r}) => {
    Us(e, r, t)
}
  , be = e => e != null
  , Gu = {
    opacity: 1,
    scaleX: 1,
    scaleY: 1,
    translateX: 0,
    translateY: 0,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    originX: 0,
    originY: 0
}
  , Uu = ({mixinConfig: e, viewProps: t, viewInternalAPI: r, viewExternalAPI: n, view: s}) => {
    const o = {
        ...t
    }
      , i = {};
    Us(e, [r, n], t);
    const l = () => [t.translateX || 0, t.translateY || 0]
      , a = () => [t.scaleX || 0, t.scaleY || 0]
      , u = () => s.rect ? ma(s.rect, s.childViews, l(), a()) : null;
    return r.rect = {
        get: u
    },
    n.rect = {
        get: u
    },
    e.forEach(c => {
        t[c] = typeof o[c] > "u" ? Gu[c] : o[c]
    }
    ),
    {
        write: () => {
            if (Bu(i, t))
                return ku(s.element, t),
                Object.assign(i, {
                    ...t
                }),
                !0
        }
        ,
        destroy: () => {}
    }
}
  , Bu = (e, t) => {
    if (Object.keys(e).length !== Object.keys(t).length)
        return !0;
    for (const r in t)
        if (t[r] !== e[r])
            return !0;
    return !1
}
  , ku = (e, {opacity: t, perspective: r, translateX: n, translateY: s, scaleX: o, scaleY: i, rotateX: l, rotateY: a, rotateZ: u, originX: c, originY: d, width: f, height: h}) => {
    let p = ""
      , m = "";
    (be(c) || be(d)) && (m += `transform-origin: ${c || 0}px ${d || 0}px;`),
    be(r) && (p += `perspective(${r}px) `),
    (be(n) || be(s)) && (p += `translate3d(${n || 0}px, ${s || 0}px, 0) `),
    (be(o) || be(i)) && (p += `scale3d(${be(o) ? o : 1}, ${be(i) ? i : 1}, 1) `),
    be(u) && (p += `rotateZ(${u}rad) `),
    be(l) && (p += `rotateX(${l}rad) `),
    be(a) && (p += `rotateY(${a}rad) `),
    p.length && (m += `transform:${p};`),
    be(t) && (m += `opacity:${t};`,
    t === 0 && (m += "visibility:hidden;"),
    t < 1 && (m += "pointer-events:none;")),
    be(h) && (m += `height:${h}px;`),
    be(f) && (m += `width:${f}px;`);
    const _ = e.elementCurrentStyle || "";
    (m.length !== _.length || m !== _) && (e.style.cssText = m,
    e.elementCurrentStyle = m)
}
  , $u = {
    styles: Uu,
    listeners: Nu,
    animations: Mu,
    apis: Fu
}
  , Ai = (e={}, t={}, r={}) => (t.layoutCalculated || (e.paddingTop = parseInt(r.paddingTop, 10) || 0,
e.marginTop = parseInt(r.marginTop, 10) || 0,
e.marginRight = parseInt(r.marginRight, 10) || 0,
e.marginBottom = parseInt(r.marginBottom, 10) || 0,
e.marginLeft = parseInt(r.marginLeft, 10) || 0,
t.layoutCalculated = !0),
e.left = t.offsetLeft || 0,
e.top = t.offsetTop || 0,
e.width = t.offsetWidth || 0,
e.height = t.offsetHeight || 0,
e.right = e.left + e.width,
e.bottom = e.top + e.height,
e.scrollTop = t.scrollTop,
e.hidden = t.offsetParent === null,
e)
  , pe = ({tag: e="div", name: t=null, attributes: r={}, read: n= () => {}
, write: s= () => {}
, create: o= () => {}
, destroy: i= () => {}
, filterFrameActionsForChild: l= (h, p) => p, didCreateView: a= () => {}
, didWriteView: u= () => {}
, ignoreRect: c=!1, ignoreRectUpdate: d=!1, mixins: f=[]}={}) => (h, p={}) => {
    const m = In(e, `filepond--${t}`, r)
      , _ = window.getComputedStyle(m, null)
      , g = Ai();
    let E = null
      , y = !1;
    const b = []
      , T = []
      , A = {}
      , C = {}
      , R = [s]
      , P = [n]
      , N = [i]
      , w = () => m
      , x = () => b.concat()
      , V = () => A
      , S = k => (re, Ce) => re(k, Ce)
      , L = () => E || (E = ma(g, b, [0, 0], [1, 1]),
    E)
      , O = () => _
      , M = () => {
        E = null,
        b.forEach(Ce => Ce._read()),
        !(d && g.width && g.height) && Ai(g, m, _);
        const re = {
            root: J,
            props: p,
            rect: g
        };
        P.forEach(Ce => Ce(re))
    }
      , F = (k, re, Ce) => {
        let me = re.length === 0;
        return R.forEach(ae => {
            ae({
                props: p,
                root: J,
                actions: re,
                timestamp: k,
                shouldOptimize: Ce
            }) === !1 && (me = !1)
        }
        ),
        T.forEach(ae => {
            ae.write(k) === !1 && (me = !1)
        }
        ),
        b.filter(ae => !!ae.element.parentNode).forEach(ae => {
            ae._write(k, l(ae, re), Ce) || (me = !1)
        }
        ),
        b.forEach( (ae, nt) => {
            ae.element.parentNode || (J.appendChild(ae.element, nt),
            ae._read(),
            ae._write(k, l(ae, re), Ce),
            me = !1)
        }
        ),
        y = me,
        u({
            props: p,
            root: J,
            actions: re,
            timestamp: k
        }),
        me
    }
      , G = () => {
        T.forEach(k => k.destroy()),
        N.forEach(k => {
            k({
                root: J,
                props: p
            })
        }
        ),
        b.forEach(k => k._destroy())
    }
      , K = {
        element: {
            get: w
        },
        style: {
            get: O
        },
        childViews: {
            get: x
        }
    }
      , q = {
        ...K,
        rect: {
            get: L
        },
        ref: {
            get: V
        },
        is: k => t === k,
        appendChild: Tu(m),
        createChildView: S(h),
        linkView: k => (b.push(k),
        k),
        unlinkView: k => {
            b.splice(b.indexOf(k), 1)
        }
        ,
        appendChildView: Iu(m, b),
        removeChildView: bu(m, b),
        registerWriter: k => R.push(k),
        registerReader: k => P.push(k),
        registerDestroyer: k => N.push(k),
        invalidateLayout: () => m.layoutCalculated = !1,
        dispatch: h.dispatch,
        query: h.query
    }
      , pt = {
        element: {
            get: w
        },
        childViews: {
            get: x
        },
        rect: {
            get: L
        },
        resting: {
            get: () => y
        },
        isRectIgnored: () => c,
        _read: M,
        _write: F,
        _destroy: G
    }
      , kt = {
        ...K,
        rect: {
            get: () => g
        }
    };
    Object.keys(f).sort( (k, re) => k === "styles" ? 1 : re === "styles" ? -1 : 0).forEach(k => {
        const re = $u[k]({
            mixinConfig: f[k],
            viewProps: p,
            viewState: C,
            viewInternalAPI: q,
            viewExternalAPI: pt,
            view: Tt(kt)
        });
        re && T.push(re)
    }
    );
    const J = Tt(q);
    o({
        root: J,
        props: p
    });
    const ve = Su(m);
    return b.forEach( (k, re) => {
        J.appendChild(k.element, ve + re)
    }
    ),
    a(J),
    Tt(pt)
}
  , Vu = (e, t, r=60) => {
    const n = "__framePainter";
    if (window[n]) {
        window[n].readers.push(e),
        window[n].writers.push(t);
        return
    }
    window[n] = {
        readers: [e],
        writers: [t]
    };
    const s = window[n]
      , o = 1e3 / r;
    let i = null
      , l = null
      , a = null
      , u = null;
    const c = () => {
        document.hidden ? (a = () => window.setTimeout( () => d(performance.now()), o),
        u = () => window.clearTimeout(l)) : (a = () => window.requestAnimationFrame(d),
        u = () => window.cancelAnimationFrame(l))
    }
    ;
    document.addEventListener("visibilitychange", () => {
        u && u(),
        c(),
        d(performance.now())
    }
    );
    const d = f => {
        l = a(d),
        i || (i = f);
        const h = f - i;
        h <= o || (i = f - h % o,
        s.readers.forEach(p => p()),
        s.writers.forEach(p => p(f)))
    }
    ;
    return c(),
    d(performance.now()),
    {
        pause: () => {
            u(l)
        }
    }
}
  , Pe = (e, t) => ({root: r, props: n, actions: s=[], timestamp: o, shouldOptimize: i}) => {
    s.filter(l => e[l.type]).forEach(l => e[l.type]({
        root: r,
        props: n,
        action: l.data,
        timestamp: o,
        shouldOptimize: i
    })),
    t && t({
        root: r,
        props: n,
        actions: s,
        timestamp: o,
        shouldOptimize: i
    })
}
  , Li = (e, t) => t.parentNode.insertBefore(e, t)
  , Mi = (e, t) => t.parentNode.insertBefore(e, t.nextSibling)
  , Cn = e => Array.isArray(e)
  , ct = e => e == null
  , zu = e => e.trim()
  , xn = e => "" + e
  , qu = (e, t=",") => ct(e) ? [] : Cn(e) ? e : xn(e).split(t).map(zu).filter(r => r.length)
  , ga = e => typeof e == "boolean"
  , _a = e => ga(e) ? e : e === "true"
  , De = e => typeof e == "string"
  , Ea = e => Dt(e) ? e : De(e) ? xn(e).replace(/[a-z]+/gi, "") : 0
  , pn = e => parseInt(Ea(e), 10)
  , Ci = e => parseFloat(Ea(e))
  , _r = e => Dt(e) && isFinite(e) && Math.floor(e) === e
  , xi = (e, t=1e3) => {
    if (_r(e))
        return e;
    let r = xn(e).trim();
    return /MB$/i.test(r) ? (r = r.replace(/MB$i/, "").trim(),
    pn(r) * t * t) : /KB/i.test(r) ? (r = r.replace(/KB$i/, "").trim(),
    pn(r) * t) : pn(r)
}
  , Pt = e => typeof e == "function"
  , Yu = e => {
    let t = self
      , r = e.split(".")
      , n = null;
    for (; n = r.shift(); )
        if (t = t[n],
        !t)
            return null;
    return t
}
  , Ni = {
    process: "POST",
    patch: "PATCH",
    revert: "DELETE",
    fetch: "GET",
    restore: "GET",
    load: "GET"
}
  , Hu = e => {
    const t = {};
    return t.url = De(e) ? e : e.url || "",
    t.timeout = e.timeout ? parseInt(e.timeout, 10) : 0,
    t.headers = e.headers ? e.headers : {},
    le(Ni, r => {
        t[r] = Wu(r, e[r], Ni[r], t.timeout, t.headers)
    }
    ),
    t.process = e.process || De(e) || e.url ? t.process : null,
    t.remove = e.remove || null,
    delete t.headers,
    t
}
  , Wu = (e, t, r, n, s) => {
    if (t === null)
        return null;
    if (typeof t == "function")
        return t;
    const o = {
        url: r === "GET" || r === "PATCH" ? `?${e}=` : "",
        method: r,
        headers: s,
        withCredentials: !1,
        timeout: n,
        onload: null,
        ondata: null,
        onerror: null
    };
    if (De(t))
        return o.url = t,
        o;
    if (Object.assign(o, t),
    De(o.headers)) {
        const i = o.headers.split(/:(.+)/);
        o.headers = {
            header: i[0],
            value: i[1]
        }
    }
    return o.withCredentials = _a(o.withCredentials),
    o
}
  , ju = e => Hu(e)
  , Xu = e => e === null
  , Ee = e => typeof e == "object" && e !== null
  , Qu = e => Ee(e) && De(e.url) && Ee(e.process) && Ee(e.revert) && Ee(e.restore) && Ee(e.fetch)
  , _s = e => Cn(e) ? "array" : Xu(e) ? "null" : _r(e) ? "int" : /^[0-9]+ ?(?:GB|MB|KB)$/gi.test(e) ? "bytes" : Qu(e) ? "api" : typeof e
  , Zu = e => e.replace(/{\s*'/g, '{"').replace(/'\s*}/g, '"}').replace(/'\s*:/g, '":').replace(/:\s*'/g, ':"').replace(/,\s*'/g, ',"').replace(/'\s*,/g, '",')
  , Ku = {
    array: qu,
    boolean: _a,
    int: e => _s(e) === "bytes" ? xi(e) : pn(e),
    number: Ci,
    float: Ci,
    bytes: xi,
    string: e => Pt(e) ? e : xn(e),
    function: e => Yu(e),
    serverapi: ju,
    object: e => {
        try {
            return JSON.parse(Zu(e))
        } catch {
            return null
        }
    }
}
  , Ju = (e, t) => Ku[t](e)
  , va = (e, t, r) => {
    if (e === t)
        return e;
    let n = _s(e);
    if (n !== r) {
        const s = Ju(e, r);
        if (n = _s(s),
        s === null)
            throw `Trying to assign value with incorrect type to "${option}", allowed type: "${r}"`;
        e = s
    }
    return e
}
  , ed = (e, t) => {
    let r = e;
    return {
        enumerable: !0,
        get: () => r,
        set: n => {
            r = va(n, e, t)
        }
    }
}
  , td = e => {
    const t = {};
    return le(e, r => {
        const n = e[r];
        t[r] = ed(n[0], n[1])
    }
    ),
    Tt(t)
}
  , rd = e => ({
    items: [],
    listUpdateTimeout: null,
    itemUpdateTimeout: null,
    processingQueue: [],
    options: td(e)
})
  , Nn = (e, t="-") => e.split(/(?=[A-Z])/).map(r => r.toLowerCase()).join(t)
  , nd = (e, t) => {
    const r = {};
    return le(t, n => {
        r[n] = {
            get: () => e.getState().options[n],
            set: s => {
                e.dispatch(`SET_${Nn(n, "_").toUpperCase()}`, {
                    value: s
                })
            }
        }
    }
    ),
    r
}
  , sd = e => (t, r, n) => {
    const s = {};
    return le(e, o => {
        const i = Nn(o, "_").toUpperCase();
        s[`SET_${i}`] = l => {
            try {
                n.options[o] = l.value
            } catch {}
            t(`DID_SET_${i}`, {
                value: n.options[o]
            })
        }
    }
    ),
    s
}
  , id = e => t => {
    const r = {};
    return le(e, n => {
        r[`GET_${Nn(n, "_").toUpperCase()}`] = s => t.options[n]
    }
    ),
    r
}
  , $e = {
    API: 1,
    DROP: 2,
    BROWSE: 3,
    PASTE: 4,
    NONE: 5
}
  , Bs = () => Math.random().toString(36).substring(2, 11)
  , ks = (e, t) => e.splice(t, 1)
  , od = (e, t) => {
    t ? e() : document.hidden ? Promise.resolve(1).then(e) : setTimeout(e, 0)
}
  , Fn = () => {
    const e = []
      , t = (n, s) => {
        ks(e, e.findIndex(o => o.event === n && (o.cb === s || !s)))
    }
      , r = (n, s, o) => {
        e.filter(i => i.event === n).map(i => i.cb).forEach(i => od( () => i(...s), o))
    }
    ;
    return {
        fireSync: (n, ...s) => {
            r(n, s, !0)
        }
        ,
        fire: (n, ...s) => {
            r(n, s, !1)
        }
        ,
        on: (n, s) => {
            e.push({
                event: n,
                cb: s
            })
        }
        ,
        onOnce: (n, s) => {
            e.push({
                event: n,
                cb: (...o) => {
                    t(n, s),
                    s(...o)
                }
            })
        }
        ,
        off: t
    }
}
  , ya = (e, t, r) => {
    Object.getOwnPropertyNames(e).filter(n => !r.includes(n)).forEach(n => Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n)))
}
  , ad = ["fire", "process", "revert", "load", "on", "off", "onOnce", "retryLoad", "extend", "archive", "archived", "release", "released", "requestProcessing", "freeze"]
  , Le = e => {
    const t = {};
    return ya(e, t, ad),
    t
}
  , ld = e => {
    e.forEach( (t, r) => {
        t.released && ks(e, r)
    }
    )
}
  , H = {
    INIT: 1,
    IDLE: 2,
    PROCESSING_QUEUED: 9,
    PROCESSING: 3,
    PROCESSING_COMPLETE: 5,
    PROCESSING_ERROR: 6,
    PROCESSING_REVERT_ERROR: 10,
    LOADING: 7,
    LOAD_ERROR: 8
}
  , ge = {
    INPUT: 1,
    LIMBO: 2,
    LOCAL: 3
}
  , Ta = e => /[^0-9]+/.exec(e)
  , Ia = () => Ta(1.1 .toLocaleString())[0]
  , cd = () => {
    const e = Ia()
      , t = 1e3 .toLocaleString();
    return t !== "1000" ? Ta(t)[0] : e === "." ? "," : "."
}
  , D = {
    BOOLEAN: "boolean",
    INT: "int",
    NUMBER: "number",
    STRING: "string",
    ARRAY: "array",
    OBJECT: "object",
    FUNCTION: "function",
    ACTION: "action",
    SERVER_API: "serverapi",
    REGEX: "regex"
}
  , $s = []
  , ze = (e, t, r) => new Promise( (n, s) => {
    const o = $s.filter(l => l.key === e).map(l => l.cb);
    if (o.length === 0) {
        n(t);
        return
    }
    const i = o.shift();
    o.reduce( (l, a) => l.then(u => a(u, r)), i(t, r)).then(l => n(l)).catch(l => s(l))
}
)
  , Ut = (e, t, r) => $s.filter(n => n.key === e).map(n => n.cb(t, r))
  , ud = (e, t) => $s.push({
    key: e,
    cb: t
})
  , dd = e => Object.assign(Jt, e)
  , bn = () => ({
    ...Jt
})
  , fd = e => {
    le(e, (t, r) => {
        Jt[t] && (Jt[t][0] = va(r, Jt[t][0], Jt[t][1]))
    }
    )
}
  , Jt = {
    id: [null, D.STRING],
    name: ["filepond", D.STRING],
    disabled: [!1, D.BOOLEAN],
    className: [null, D.STRING],
    required: [!1, D.BOOLEAN],
    captureMethod: [null, D.STRING],
    allowSyncAcceptAttribute: [!0, D.BOOLEAN],
    allowDrop: [!0, D.BOOLEAN],
    allowBrowse: [!0, D.BOOLEAN],
    allowPaste: [!0, D.BOOLEAN],
    allowMultiple: [!1, D.BOOLEAN],
    allowReplace: [!0, D.BOOLEAN],
    allowRevert: [!0, D.BOOLEAN],
    allowRemove: [!0, D.BOOLEAN],
    allowProcess: [!0, D.BOOLEAN],
    allowReorder: [!1, D.BOOLEAN],
    allowDirectoriesOnly: [!1, D.BOOLEAN],
    storeAsFile: [!1, D.BOOLEAN],
    forceRevert: [!1, D.BOOLEAN],
    maxFiles: [null, D.INT],
    checkValidity: [!1, D.BOOLEAN],
    itemInsertLocationFreedom: [!0, D.BOOLEAN],
    itemInsertLocation: ["before", D.STRING],
    itemInsertInterval: [75, D.INT],
    dropOnPage: [!1, D.BOOLEAN],
    dropOnElement: [!0, D.BOOLEAN],
    dropValidation: [!1, D.BOOLEAN],
    ignoredFiles: [[".ds_store", "thumbs.db", "desktop.ini"], D.ARRAY],
    instantUpload: [!0, D.BOOLEAN],
    maxParallelUploads: [2, D.INT],
    allowMinimumUploadDuration: [!0, D.BOOLEAN],
    chunkUploads: [!1, D.BOOLEAN],
    chunkForce: [!1, D.BOOLEAN],
    chunkSize: [5e6, D.INT],
    chunkRetryDelays: [[500, 1e3, 3e3], D.ARRAY],
    server: [null, D.SERVER_API],
    fileSizeBase: [1e3, D.INT],
    labelFileSizeBytes: ["bytes", D.STRING],
    labelFileSizeKilobytes: ["KB", D.STRING],
    labelFileSizeMegabytes: ["MB", D.STRING],
    labelFileSizeGigabytes: ["GB", D.STRING],
    labelDecimalSeparator: [Ia(), D.STRING],
    labelThousandsSeparator: [cd(), D.STRING],
    labelIdle: ['Drag & Drop your files or <span class="filepond--label-action">Browse</span>', D.STRING],
    labelInvalidField: ["Field contains invalid files", D.STRING],
    labelFileWaitingForSize: ["Waiting for size", D.STRING],
    labelFileSizeNotAvailable: ["Size not available", D.STRING],
    labelFileCountSingular: ["file in list", D.STRING],
    labelFileCountPlural: ["files in list", D.STRING],
    labelFileLoading: ["Loading", D.STRING],
    labelFileAdded: ["Added", D.STRING],
    labelFileLoadError: ["Error during load", D.STRING],
    labelFileRemoved: ["Removed", D.STRING],
    labelFileRemoveError: ["Error during remove", D.STRING],
    labelFileProcessing: ["Uploading", D.STRING],
    labelFileProcessingComplete: ["Upload complete", D.STRING],
    labelFileProcessingAborted: ["Upload cancelled", D.STRING],
    labelFileProcessingError: ["Error during upload", D.STRING],
    labelFileProcessingRevertError: ["Error during revert", D.STRING],
    labelTapToCancel: ["tap to cancel", D.STRING],
    labelTapToRetry: ["tap to retry", D.STRING],
    labelTapToUndo: ["tap to undo", D.STRING],
    labelButtonRemoveItem: ["Remove", D.STRING],
    labelButtonAbortItemLoad: ["Abort", D.STRING],
    labelButtonRetryItemLoad: ["Retry", D.STRING],
    labelButtonAbortItemProcessing: ["Cancel", D.STRING],
    labelButtonUndoItemProcessing: ["Undo", D.STRING],
    labelButtonRetryItemProcessing: ["Retry", D.STRING],
    labelButtonProcessItem: ["Upload", D.STRING],
    iconRemove: ['<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M11.586 13l-2.293 2.293a1 1 0 0 0 1.414 1.414L13 14.414l2.293 2.293a1 1 0 0 0 1.414-1.414L14.414 13l2.293-2.293a1 1 0 0 0-1.414-1.414L13 11.586l-2.293-2.293a1 1 0 0 0-1.414 1.414L11.586 13z" fill="currentColor" fill-rule="nonzero"/></svg>', D.STRING],
    iconProcess: ['<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M14 10.414v3.585a1 1 0 0 1-2 0v-3.585l-1.293 1.293a1 1 0 0 1-1.414-1.415l3-3a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.415L14 10.414zM9 18a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2H9z" fill="currentColor" fill-rule="evenodd"/></svg>', D.STRING],
    iconRetry: ['<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M10.81 9.185l-.038.02A4.997 4.997 0 0 0 8 13.683a5 5 0 0 0 5 5 5 5 0 0 0 5-5 1 1 0 0 1 2 0A7 7 0 1 1 9.722 7.496l-.842-.21a.999.999 0 1 1 .484-1.94l3.23.806c.535.133.86.675.73 1.21l-.804 3.233a.997.997 0 0 1-1.21.73.997.997 0 0 1-.73-1.21l.23-.928v-.002z" fill="currentColor" fill-rule="nonzero"/></svg>', D.STRING],
    iconUndo: ['<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M9.185 10.81l.02-.038A4.997 4.997 0 0 1 13.683 8a5 5 0 0 1 5 5 5 5 0 0 1-5 5 1 1 0 0 0 0 2A7 7 0 1 0 7.496 9.722l-.21-.842a.999.999 0 1 0-1.94.484l.806 3.23c.133.535.675.86 1.21.73l3.233-.803a.997.997 0 0 0 .73-1.21.997.997 0 0 0-1.21-.73l-.928.23-.002-.001z" fill="currentColor" fill-rule="nonzero"/></svg>', D.STRING],
    iconDone: ['<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M18.293 9.293a1 1 0 0 1 1.414 1.414l-7.002 7a1 1 0 0 1-1.414 0l-3.998-4a1 1 0 1 1 1.414-1.414L12 15.586l6.294-6.293z" fill="currentColor" fill-rule="nonzero"/></svg>', D.STRING],
    oninit: [null, D.FUNCTION],
    onwarning: [null, D.FUNCTION],
    onerror: [null, D.FUNCTION],
    onactivatefile: [null, D.FUNCTION],
    oninitfile: [null, D.FUNCTION],
    onaddfilestart: [null, D.FUNCTION],
    onaddfileprogress: [null, D.FUNCTION],
    onaddfile: [null, D.FUNCTION],
    onprocessfilestart: [null, D.FUNCTION],
    onprocessfileprogress: [null, D.FUNCTION],
    onprocessfileabort: [null, D.FUNCTION],
    onprocessfilerevert: [null, D.FUNCTION],
    onprocessfile: [null, D.FUNCTION],
    onprocessfiles: [null, D.FUNCTION],
    onremovefile: [null, D.FUNCTION],
    onpreparefile: [null, D.FUNCTION],
    onupdatefiles: [null, D.FUNCTION],
    onreorderfiles: [null, D.FUNCTION],
    beforeDropFile: [null, D.FUNCTION],
    beforeAddFile: [null, D.FUNCTION],
    beforeRemoveFile: [null, D.FUNCTION],
    beforePrepareFile: [null, D.FUNCTION],
    stylePanelLayout: [null, D.STRING],
    stylePanelAspectRatio: [null, D.STRING],
    styleItemPanelAspectRatio: [null, D.STRING],
    styleButtonRemoveItemPosition: ["left", D.STRING],
    styleButtonProcessItemPosition: ["right", D.STRING],
    styleLoadIndicatorPosition: ["right", D.STRING],
    styleProgressIndicatorPosition: ["right", D.STRING],
    styleButtonRemoveItemAlign: [!1, D.BOOLEAN],
    files: [[], D.ARRAY],
    credits: [["https://pqina.nl/", "Powered by PQINA"], D.ARRAY]
}
  , At = (e, t) => ct(t) ? e[0] || null : _r(t) ? e[t] || null : (typeof t == "object" && (t = t.id),
e.find(r => r.id === t) || null)
  , ba = e => {
    if (ct(e))
        return e;
    if (/:/.test(e)) {
        const t = e.split(":");
        return t[1] / t[0]
    }
    return parseFloat(e)
}
  , Ye = e => e.filter(t => !t.archived)
  , pd = {
    EMPTY: 0,
    IDLE: 1,
    ERROR: 2,
    BUSY: 3,
    READY: 4
};
let nn = null;
const hd = () => {
    if (nn === null)
        try {
            const e = new DataTransfer;
            e.items.add(new File(["hello world"],"This_Works.txt"));
            const t = document.createElement("input");
            t.setAttribute("type", "file"),
            t.files = e.files,
            nn = t.files.length === 1
        } catch {
            nn = !1
        }
    return nn
}
  , md = [H.LOAD_ERROR, H.PROCESSING_ERROR, H.PROCESSING_REVERT_ERROR]
  , gd = [H.LOADING, H.PROCESSING, H.PROCESSING_QUEUED, H.INIT]
  , _d = [H.PROCESSING_COMPLETE]
  , Ed = e => md.includes(e.status)
  , vd = e => gd.includes(e.status)
  , yd = e => _d.includes(e.status)
  , Fi = e => Ee(e.options.server) && (Ee(e.options.server.process) || Pt(e.options.server.process))
  , Td = e => ({
    GET_STATUS: () => {
        const t = Ye(e.items)
          , {EMPTY: r, ERROR: n, BUSY: s, IDLE: o, READY: i} = pd;
        return t.length === 0 ? r : t.some(Ed) ? n : t.some(vd) ? s : t.some(yd) ? i : o
    }
    ,
    GET_ITEM: t => At(e.items, t),
    GET_ACTIVE_ITEM: t => At(Ye(e.items), t),
    GET_ACTIVE_ITEMS: () => Ye(e.items),
    GET_ITEMS: () => e.items,
    GET_ITEM_NAME: t => {
        const r = At(e.items, t);
        return r ? r.filename : null
    }
    ,
    GET_ITEM_SIZE: t => {
        const r = At(e.items, t);
        return r ? r.fileSize : null
    }
    ,
    GET_STYLES: () => Object.keys(e.options).filter(t => /^style/.test(t)).map(t => ({
        name: t,
        value: e.options[t]
    })),
    GET_PANEL_ASPECT_RATIO: () => /circle/.test(e.options.stylePanelLayout) ? 1 : ba(e.options.stylePanelAspectRatio),
    GET_ITEM_PANEL_ASPECT_RATIO: () => e.options.styleItemPanelAspectRatio,
    GET_ITEMS_BY_STATUS: t => Ye(e.items).filter(r => r.status === t),
    GET_TOTAL_ITEMS: () => Ye(e.items).length,
    SHOULD_UPDATE_FILE_INPUT: () => e.options.storeAsFile && hd() && !Fi(e),
    IS_ASYNC: () => Fi(e),
    GET_FILE_SIZE_LABELS: t => ({
        labelBytes: t("GET_LABEL_FILE_SIZE_BYTES") || void 0,
        labelKilobytes: t("GET_LABEL_FILE_SIZE_KILOBYTES") || void 0,
        labelMegabytes: t("GET_LABEL_FILE_SIZE_MEGABYTES") || void 0,
        labelGigabytes: t("GET_LABEL_FILE_SIZE_GIGABYTES") || void 0
    })
})
  , Id = e => {
    const t = Ye(e.items).length;
    if (!e.options.allowMultiple)
        return t === 0;
    const r = e.options.maxFiles;
    return r === null || t < r
}
  , wa = (e, t, r) => Math.max(Math.min(r, e), t)
  , bd = (e, t, r) => e.splice(t, 0, r)
  , wd = (e, t, r) => ct(t) ? null : typeof r > "u" ? (e.push(t),
t) : (r = wa(r, 0, e.length),
bd(e, r, t),
t)
  , Es = e => /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*)\s*$/i.test(e)
  , Hr = e => `${e}`.split("/").pop().split("?").shift()
  , Gn = e => e.split(".").pop()
  , Rd = e => {
    if (typeof e != "string")
        return "";
    const t = e.split("/").pop();
    return /svg/.test(t) ? "svg" : /zip|compressed/.test(t) ? "zip" : /plain/.test(t) ? "txt" : /msword/.test(t) ? "doc" : /[a-z]+/.test(t) ? t === "jpeg" ? "jpg" : t : ""
}
  , wr = (e, t="") => (t + e).slice(-t.length)
  , Ra = (e=new Date) => `${e.getFullYear()}-${wr(e.getMonth() + 1, "00")}-${wr(e.getDate(), "00")}_${wr(e.getHours(), "00")}-${wr(e.getMinutes(), "00")}-${wr(e.getSeconds(), "00")}`
  , ur = (e, t, r=null, n=null) => {
    const s = typeof r == "string" ? e.slice(0, e.size, r) : e.slice(0, e.size, e.type);
    return s.lastModifiedDate = new Date,
    e._relativePath && (s._relativePath = e._relativePath),
    De(t) || (t = Ra()),
    t && n === null && Gn(t) ? s.name = t : (n = n || Rd(s.type),
    s.name = t + (n ? "." + n : "")),
    s
}
  , Sd = () => window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder
  , Sa = (e, t) => {
    const r = Sd();
    if (r) {
        const n = new r;
        return n.append(e),
        n.getBlob(t)
    }
    return new Blob([e],{
        type: t
    })
}
  , Od = (e, t) => {
    const r = new ArrayBuffer(e.length)
      , n = new Uint8Array(r);
    for (let s = 0; s < e.length; s++)
        n[s] = e.charCodeAt(s);
    return Sa(r, t)
}
  , Oa = e => (/^data:(.+);/.exec(e) || [])[1] || null
  , Dd = e => e.split(",")[1].replace(/\s/g, "")
  , Pd = e => atob(Dd(e))
  , Ad = e => {
    const t = Oa(e)
      , r = Pd(e);
    return Od(r, t)
}
  , Ld = (e, t, r) => ur(Ad(e), t, null, r)
  , Md = e => {
    if (!/^content-disposition:/i.test(e))
        return null;
    const t = e.split(/filename=|filename\*=.+''/).splice(1).map(r => r.trim().replace(/^["']|[;"']{0,2}$/g, "")).filter(r => r.length);
    return t.length ? decodeURI(t[t.length - 1]) : null
}
  , Cd = e => {
    if (/content-length:/i.test(e)) {
        const t = e.match(/[0-9]+/)[0];
        return t ? parseInt(t, 10) : null
    }
    return null
}
  , xd = e => /x-content-transfer-id:/i.test(e) && (e.split(":")[1] || "").trim() || null
  , Vs = e => {
    const t = {
        source: null,
        name: null,
        size: null
    }
      , r = e.split(`
`);
    for (let n of r) {
        const s = Md(n);
        if (s) {
            t.name = s;
            continue
        }
        const o = Cd(n);
        if (o) {
            t.size = o;
            continue
        }
        const i = xd(n);
        if (i) {
            t.source = i;
            continue
        }
    }
    return t
}
  , Nd = e => {
    const t = {
        source: null,
        complete: !1,
        progress: 0,
        size: null,
        timestamp: null,
        duration: 0,
        request: null
    }
      , r = () => t.progress
      , n = () => {
        t.request && t.request.abort && t.request.abort()
    }
      , s = () => {
        const l = t.source;
        i.fire("init", l),
        l instanceof File ? i.fire("load", l) : l instanceof Blob ? i.fire("load", ur(l, l.name)) : Es(l) ? i.fire("load", Ld(l)) : o(l)
    }
      , o = l => {
        if (!e) {
            i.fire("error", {
                type: "error",
                body: "Can't load URL",
                code: 400
            });
            return
        }
        t.timestamp = Date.now(),
        t.request = e(l, a => {
            t.duration = Date.now() - t.timestamp,
            t.complete = !0,
            a instanceof Blob && (a = ur(a, a.name || Hr(l))),
            i.fire("load", a instanceof Blob ? a : a ? a.body : null)
        }
        , a => {
            i.fire("error", typeof a == "string" ? {
                type: "error",
                code: 0,
                body: a
            } : a)
        }
        , (a, u, c) => {
            if (c && (t.size = c),
            t.duration = Date.now() - t.timestamp,
            !a) {
                t.progress = null;
                return
            }
            t.progress = u / c,
            i.fire("progress", t.progress)
        }
        , () => {
            i.fire("abort")
        }
        , a => {
            const u = Vs(typeof a == "string" ? a : a.headers);
            i.fire("meta", {
                size: t.size || u.size,
                filename: u.name,
                source: u.source
            })
        }
        )
    }
      , i = {
        ...Fn(),
        setSource: l => t.source = l,
        getProgress: r,
        abort: n,
        load: s
    };
    return i
}
  , Gi = e => /GET|HEAD/.test(e)
  , Lt = (e, t, r) => {
    const n = {
        onheaders: () => {}
        ,
        onprogress: () => {}
        ,
        onload: () => {}
        ,
        ontimeout: () => {}
        ,
        onerror: () => {}
        ,
        onabort: () => {}
        ,
        abort: () => {
            s = !0,
            i.abort()
        }
    };
    let s = !1
      , o = !1;
    r = {
        method: "POST",
        headers: {},
        withCredentials: !1,
        ...r
    },
    t = encodeURI(t),
    Gi(r.method) && e && (t = `${t}${encodeURIComponent(typeof e == "string" ? e : JSON.stringify(e))}`);
    const i = new XMLHttpRequest
      , l = Gi(r.method) ? i : i.upload;
    return l.onprogress = a => {
        s || n.onprogress(a.lengthComputable, a.loaded, a.total)
    }
    ,
    i.onreadystatechange = () => {
        i.readyState < 2 || i.readyState === 4 && i.status === 0 || o || (o = !0,
        n.onheaders(i))
    }
    ,
    i.onload = () => {
        i.status >= 200 && i.status < 300 ? n.onload(i) : n.onerror(i)
    }
    ,
    i.onerror = () => n.onerror(i),
    i.onabort = () => {
        s = !0,
        n.onabort()
    }
    ,
    i.ontimeout = () => n.ontimeout(i),
    i.open(r.method, t, !0),
    _r(r.timeout) && (i.timeout = r.timeout),
    Object.keys(r.headers).forEach(a => {
        const u = unescape(encodeURIComponent(r.headers[a]));
        i.setRequestHeader(a, u)
    }
    ),
    r.responseType && (i.responseType = r.responseType),
    r.withCredentials && (i.withCredentials = !0),
    i.send(e),
    n
}
  , de = (e, t, r, n) => ({
    type: e,
    code: t,
    body: r,
    headers: n
})
  , Mt = e => t => {
    e(de("error", 0, "Timeout", t.getAllResponseHeaders()))
}
  , Ui = e => /\?/.test(e)
  , Cr = (...e) => {
    let t = "";
    return e.forEach(r => {
        t += Ui(t) && Ui(r) ? r.replace(/\?/, "&") : r
    }
    ),
    t
}
  , Jn = (e="", t) => {
    if (typeof t == "function")
        return t;
    if (!t || !De(t.url))
        return null;
    const r = t.onload || (s => s)
      , n = t.onerror || (s => null);
    return (s, o, i, l, a, u) => {
        const c = Lt(s, Cr(e, t.url), {
            ...t,
            responseType: "blob"
        });
        return c.onload = d => {
            const f = d.getAllResponseHeaders()
              , h = Vs(f).name || Hr(s);
            o(de("load", d.status, t.method === "HEAD" ? null : ur(r(d.response), h), f))
        }
        ,
        c.onerror = d => {
            i(de("error", d.status, n(d.response) || d.statusText, d.getAllResponseHeaders()))
        }
        ,
        c.onheaders = d => {
            u(de("headers", d.status, null, d.getAllResponseHeaders()))
        }
        ,
        c.ontimeout = Mt(i),
        c.onprogress = l,
        c.onabort = a,
        c
    }
}
  , Be = {
    QUEUED: 0,
    COMPLETE: 1,
    PROCESSING: 2,
    ERROR: 3,
    WAITING: 4
}
  , Fd = (e, t, r, n, s, o, i, l, a, u, c) => {
    const d = []
      , {chunkTransferId: f, chunkServer: h, chunkSize: p, chunkRetryDelays: m} = c
      , _ = {
        serverId: f,
        aborted: !1
    }
      , g = t.ondata || (S => S)
      , E = t.onload || ( (S, L) => L === "HEAD" ? S.getResponseHeader("Upload-Offset") : S.response)
      , y = t.onerror || (S => null)
      , b = S => {
        const L = new FormData;
        Ee(s) && L.append(r, JSON.stringify(s));
        const O = typeof t.headers == "function" ? t.headers(n, s) : {
            ...t.headers,
            "Upload-Length": n.size
        }
          , M = {
            ...t,
            headers: O
        }
          , F = Lt(g(L), Cr(e, t.url), M);
        F.onload = G => S(E(G, M.method)),
        F.onerror = G => i(de("error", G.status, y(G.response) || G.statusText, G.getAllResponseHeaders())),
        F.ontimeout = Mt(i)
    }
      , T = S => {
        const L = Cr(e, h.url, _.serverId)
          , M = {
            headers: typeof t.headers == "function" ? t.headers(_.serverId) : {
                ...t.headers
            },
            method: "HEAD"
        }
          , F = Lt(null, L, M);
        F.onload = G => S(E(G, M.method)),
        F.onerror = G => i(de("error", G.status, y(G.response) || G.statusText, G.getAllResponseHeaders())),
        F.ontimeout = Mt(i)
    }
      , A = Math.floor(n.size / p);
    for (let S = 0; S <= A; S++) {
        const L = S * p
          , O = n.slice(L, L + p, "application/offset+octet-stream");
        d[S] = {
            index: S,
            size: O.size,
            offset: L,
            data: O,
            file: n,
            progress: 0,
            retries: [...m],
            status: Be.QUEUED,
            error: null,
            request: null,
            timeout: null
        }
    }
    const C = () => o(_.serverId)
      , R = S => S.status === Be.QUEUED || S.status === Be.ERROR
      , P = S => {
        if (_.aborted)
            return;
        if (S = S || d.find(R),
        !S) {
            d.every(q => q.status === Be.COMPLETE) && C();
            return
        }
        S.status = Be.PROCESSING,
        S.progress = null;
        const L = h.ondata || (q => q)
          , O = h.onerror || (q => null)
          , M = h.onload || ( () => {}
        )
          , F = Cr(e, h.url, _.serverId)
          , G = typeof h.headers == "function" ? h.headers(S) : {
            ...h.headers,
            "Content-Type": "application/offset+octet-stream",
            "Upload-Offset": S.offset,
            "Upload-Length": n.size,
            "Upload-Name": n.name
        }
          , K = S.request = Lt(L(S.data), F, {
            ...h,
            headers: G
        });
        K.onload = q => {
            M(q, S.index, d.length),
            S.status = Be.COMPLETE,
            S.request = null,
            x()
        }
        ,
        K.onprogress = (q, pt, kt) => {
            S.progress = q ? pt : null,
            w()
        }
        ,
        K.onerror = q => {
            S.status = Be.ERROR,
            S.request = null,
            S.error = O(q.response) || q.statusText,
            N(S) || i(de("error", q.status, O(q.response) || q.statusText, q.getAllResponseHeaders()))
        }
        ,
        K.ontimeout = q => {
            S.status = Be.ERROR,
            S.request = null,
            N(S) || Mt(i)(q)
        }
        ,
        K.onabort = () => {
            S.status = Be.QUEUED,
            S.request = null,
            a()
        }
    }
      , N = S => S.retries.length === 0 ? !1 : (S.status = Be.WAITING,
    clearTimeout(S.timeout),
    S.timeout = setTimeout( () => {
        P(S)
    }
    , S.retries.shift()),
    !0)
      , w = () => {
        const S = d.reduce( (O, M) => O === null || M.progress === null ? null : O + M.progress, 0);
        if (S === null)
            return l(!1, 0, 0);
        const L = d.reduce( (O, M) => O + M.size, 0);
        l(!0, S, L)
    }
      , x = () => {
        d.filter(L => L.status === Be.PROCESSING).length >= 1 || P()
    }
      , V = () => {
        d.forEach(S => {
            clearTimeout(S.timeout),
            S.request && S.request.abort()
        }
        )
    }
    ;
    return _.serverId ? T(S => {
        _.aborted || (d.filter(L => L.offset < S).forEach(L => {
            L.status = Be.COMPLETE,
            L.progress = L.size
        }
        ),
        x())
    }
    ) : b(S => {
        _.aborted || (u(S),
        _.serverId = S,
        x())
    }
    ),
    {
        abort: () => {
            _.aborted = !0,
            V()
        }
    }
}
  , Gd = (e, t, r, n) => (s, o, i, l, a, u, c) => {
    if (!s)
        return;
    const d = n.chunkUploads
      , f = d && s.size > n.chunkSize
      , h = d && (f || n.chunkForce);
    if (s instanceof Blob && h)
        return Fd(e, t, r, s, o, i, l, a, u, c, n);
    const p = t.ondata || (T => T)
      , m = t.onload || (T => T)
      , _ = t.onerror || (T => null)
      , g = typeof t.headers == "function" ? t.headers(s, o) || {} : {
        ...t.headers
    }
      , E = {
        ...t,
        headers: g
    };
    var y = new FormData;
    Ee(o) && y.append(r, JSON.stringify(o)),
    (s instanceof Blob ? [{
        name: null,
        file: s
    }] : s).forEach(T => {
        y.append(r, T.file, T.name === null ? T.file.name : `${T.name}${T.file.name}`)
    }
    );
    const b = Lt(p(y), Cr(e, t.url), E);
    return b.onload = T => {
        i(de("load", T.status, m(T.response), T.getAllResponseHeaders()))
    }
    ,
    b.onerror = T => {
        l(de("error", T.status, _(T.response) || T.statusText, T.getAllResponseHeaders()))
    }
    ,
    b.ontimeout = Mt(l),
    b.onprogress = a,
    b.onabort = u,
    b
}
  , Ud = (e="", t, r, n) => typeof t == "function" ? (...s) => t(r, ...s, n) : !t || !De(t.url) ? null : Gd(e, t, r, n)
  , Rr = (e="", t) => {
    if (typeof t == "function")
        return t;
    if (!t || !De(t.url))
        return (s, o) => o();
    const r = t.onload || (s => s)
      , n = t.onerror || (s => null);
    return (s, o, i) => {
        const l = Lt(s, e + t.url, t);
        return l.onload = a => {
            o(de("load", a.status, r(a.response), a.getAllResponseHeaders()))
        }
        ,
        l.onerror = a => {
            i(de("error", a.status, n(a.response) || a.statusText, a.getAllResponseHeaders()))
        }
        ,
        l.ontimeout = Mt(i),
        l
    }
}
  , Da = (e=0, t=1) => e + Math.random() * (t - e)
  , Bd = (e, t=1e3, r=0, n=25, s=250) => {
    let o = null;
    const i = Date.now()
      , l = () => {
        let a = Date.now() - i
          , u = Da(n, s);
        a + u > t && (u = a + u - t);
        let c = a / t;
        if (c >= 1 || document.hidden) {
            e(1);
            return
        }
        e(c),
        o = setTimeout(l, u)
    }
    ;
    return t > 0 && l(),
    {
        clear: () => {
            clearTimeout(o)
        }
    }
}
  , kd = (e, t) => {
    const r = {
        complete: !1,
        perceivedProgress: 0,
        perceivedPerformanceUpdater: null,
        progress: null,
        timestamp: null,
        perceivedDuration: 0,
        duration: 0,
        request: null,
        response: null
    }
      , {allowMinimumUploadDuration: n} = t
      , s = (c, d) => {
        const f = () => {
            r.duration === 0 || r.progress === null || u.fire("progress", u.getProgress())
        }
          , h = () => {
            r.complete = !0,
            u.fire("load-perceived", r.response.body)
        }
        ;
        u.fire("start"),
        r.timestamp = Date.now(),
        r.perceivedPerformanceUpdater = Bd(p => {
            r.perceivedProgress = p,
            r.perceivedDuration = Date.now() - r.timestamp,
            f(),
            r.response && r.perceivedProgress === 1 && !r.complete && h()
        }
        , n ? Da(750, 1500) : 0),
        r.request = e(c, d, p => {
            r.response = Ee(p) ? p : {
                type: "load",
                code: 200,
                body: `${p}`,
                headers: {}
            },
            r.duration = Date.now() - r.timestamp,
            r.progress = 1,
            u.fire("load", r.response.body),
            (!n || n && r.perceivedProgress === 1) && h()
        }
        , p => {
            r.perceivedPerformanceUpdater.clear(),
            u.fire("error", Ee(p) ? p : {
                type: "error",
                code: 0,
                body: `${p}`
            })
        }
        , (p, m, _) => {
            r.duration = Date.now() - r.timestamp,
            r.progress = p ? m / _ : null,
            f()
        }
        , () => {
            r.perceivedPerformanceUpdater.clear(),
            u.fire("abort", r.response ? r.response.body : null)
        }
        , p => {
            u.fire("transfer", p)
        }
        )
    }
      , o = () => {
        r.request && (r.perceivedPerformanceUpdater.clear(),
        r.request.abort && r.request.abort(),
        r.complete = !0)
    }
      , i = () => {
        o(),
        r.complete = !1,
        r.perceivedProgress = 0,
        r.progress = 0,
        r.timestamp = null,
        r.perceivedDuration = 0,
        r.duration = 0,
        r.request = null,
        r.response = null
    }
      , l = n ? () => r.progress ? Math.min(r.progress, r.perceivedProgress) : null : () => r.progress || null
      , a = n ? () => Math.min(r.duration, r.perceivedDuration) : () => r.duration
      , u = {
        ...Fn(),
        process: s,
        abort: o,
        getProgress: l,
        getDuration: a,
        reset: i
    };
    return u
}
  , Pa = e => e.substring(0, e.lastIndexOf(".")) || e
  , $d = e => {
    let t = [e.name, e.size, e.type];
    return e instanceof Blob || Es(e) ? t[0] = e.name || Ra() : Es(e) ? (t[1] = e.length,
    t[2] = Oa(e)) : De(e) && (t[0] = Hr(e),
    t[1] = 0,
    t[2] = "application/octet-stream"),
    {
        name: t[0],
        size: t[1],
        type: t[2]
    }
}
  , Ct = e => !!(e instanceof File || e instanceof Blob && e.name)
  , Aa = e => {
    if (!Ee(e))
        return e;
    const t = Cn(e) ? [] : {};
    for (const r in e) {
        if (!e.hasOwnProperty(r))
            continue;
        const n = e[r];
        t[r] = n && Ee(n) ? Aa(n) : n
    }
    return t
}
  , Vd = (e=null, t=null, r=null) => {
    const n = Bs()
      , s = {
        archived: !1,
        frozen: !1,
        released: !1,
        source: null,
        file: r,
        serverFileReference: t,
        transferId: null,
        processingAborted: !1,
        status: t ? H.PROCESSING_COMPLETE : H.INIT,
        activeLoader: null,
        activeProcessor: null
    };
    let o = null;
    const i = {}
      , l = R => s.status = R
      , a = (R, ...P) => {
        s.released || s.frozen || A.fire(R, ...P)
    }
      , u = () => Gn(s.file.name)
      , c = () => s.file.type
      , d = () => s.file.size
      , f = () => s.file
      , h = (R, P, N) => {
        if (s.source = R,
        A.fireSync("init"),
        s.file) {
            A.fireSync("load-skip");
            return
        }
        s.file = $d(R),
        P.on("init", () => {
            a("load-init")
        }
        ),
        P.on("meta", w => {
            s.file.size = w.size,
            s.file.filename = w.filename,
            w.source && (e = ge.LIMBO,
            s.serverFileReference = w.source,
            s.status = H.PROCESSING_COMPLETE),
            a("load-meta")
        }
        ),
        P.on("progress", w => {
            l(H.LOADING),
            a("load-progress", w)
        }
        ),
        P.on("error", w => {
            l(H.LOAD_ERROR),
            a("load-request-error", w)
        }
        ),
        P.on("abort", () => {
            l(H.INIT),
            a("load-abort")
        }
        ),
        P.on("load", w => {
            s.activeLoader = null;
            const x = S => {
                s.file = Ct(S) ? S : s.file,
                e === ge.LIMBO && s.serverFileReference ? l(H.PROCESSING_COMPLETE) : l(H.IDLE),
                a("load")
            }
              , V = S => {
                s.file = w,
                a("load-meta"),
                l(H.LOAD_ERROR),
                a("load-file-error", S)
            }
            ;
            if (s.serverFileReference) {
                x(w);
                return
            }
            N(w, x, V)
        }
        ),
        P.setSource(R),
        s.activeLoader = P,
        P.load()
    }
      , p = () => {
        s.activeLoader && s.activeLoader.load()
    }
      , m = () => {
        if (s.activeLoader) {
            s.activeLoader.abort();
            return
        }
        l(H.INIT),
        a("load-abort")
    }
      , _ = (R, P) => {
        if (s.processingAborted) {
            s.processingAborted = !1;
            return
        }
        if (l(H.PROCESSING),
        o = null,
        !(s.file instanceof Blob)) {
            A.on("load", () => {
                _(R, P)
            }
            );
            return
        }
        R.on("load", x => {
            s.transferId = null,
            s.serverFileReference = x
        }
        ),
        R.on("transfer", x => {
            s.transferId = x
        }
        ),
        R.on("load-perceived", x => {
            s.activeProcessor = null,
            s.transferId = null,
            s.serverFileReference = x,
            l(H.PROCESSING_COMPLETE),
            a("process-complete", x)
        }
        ),
        R.on("start", () => {
            a("process-start")
        }
        ),
        R.on("error", x => {
            s.activeProcessor = null,
            l(H.PROCESSING_ERROR),
            a("process-error", x)
        }
        ),
        R.on("abort", x => {
            s.activeProcessor = null,
            s.serverFileReference = x,
            l(H.IDLE),
            a("process-abort"),
            o && o()
        }
        ),
        R.on("progress", x => {
            a("process-progress", x)
        }
        );
        const N = x => {
            s.archived || R.process(x, {
                ...i
            })
        }
          , w = console.error;
        P(s.file, N, w),
        s.activeProcessor = R
    }
      , g = () => {
        s.processingAborted = !1,
        l(H.PROCESSING_QUEUED)
    }
      , E = () => new Promise(R => {
        if (!s.activeProcessor) {
            s.processingAborted = !0,
            l(H.IDLE),
            a("process-abort"),
            R();
            return
        }
        o = () => {
            R()
        }
        ,
        s.activeProcessor.abort()
    }
    )
      , y = (R, P) => new Promise( (N, w) => {
        const x = s.serverFileReference !== null ? s.serverFileReference : s.transferId;
        if (x === null) {
            N();
            return
        }
        R(x, () => {
            s.serverFileReference = null,
            s.transferId = null,
            N()
        }
        , V => {
            if (!P) {
                N();
                return
            }
            l(H.PROCESSING_REVERT_ERROR),
            a("process-revert-error"),
            w(V)
        }
        ),
        l(H.IDLE),
        a("process-revert")
    }
    )
      , b = (R, P, N) => {
        const w = R.split(".")
          , x = w[0]
          , V = w.pop();
        let S = i;
        w.forEach(L => S = S[L]),
        JSON.stringify(S[V]) !== JSON.stringify(P) && (S[V] = P,
        a("metadata-update", {
            key: x,
            value: i[x],
            silent: N
        }))
    }
      , A = {
        id: {
            get: () => n
        },
        origin: {
            get: () => e,
            set: R => e = R
        },
        serverId: {
            get: () => s.serverFileReference
        },
        transferId: {
            get: () => s.transferId
        },
        status: {
            get: () => s.status
        },
        filename: {
            get: () => s.file.name
        },
        filenameWithoutExtension: {
            get: () => Pa(s.file.name)
        },
        fileExtension: {
            get: u
        },
        fileType: {
            get: c
        },
        fileSize: {
            get: d
        },
        file: {
            get: f
        },
        relativePath: {
            get: () => s.file._relativePath
        },
        source: {
            get: () => s.source
        },
        getMetadata: R => Aa(R ? i[R] : i),
        setMetadata: (R, P, N) => {
            if (Ee(R)) {
                const w = R;
                return Object.keys(w).forEach(x => {
                    b(x, w[x], P)
                }
                ),
                R
            }
            return b(R, P, N),
            P
        }
        ,
        extend: (R, P) => C[R] = P,
        abortLoad: m,
        retryLoad: p,
        requestProcessing: g,
        abortProcessing: E,
        load: h,
        process: _,
        revert: y,
        ...Fn(),
        freeze: () => s.frozen = !0,
        release: () => s.released = !0,
        released: {
            get: () => s.released
        },
        archive: () => s.archived = !0,
        archived: {
            get: () => s.archived
        },
        setFile: R => s.file = R
    }
      , C = Tt(A);
    return C
}
  , zd = (e, t) => ct(t) ? 0 : De(t) ? e.findIndex(r => r.id === t) : -1
  , Bi = (e, t) => {
    const r = zd(e, t);
    if (!(r < 0))
        return e[r] || null
}
  , ki = (e, t, r, n, s, o) => {
    const i = Lt(null, e, {
        method: "GET",
        responseType: "blob"
    });
    return i.onload = l => {
        const a = l.getAllResponseHeaders()
          , u = Vs(a).name || Hr(e);
        t(de("load", l.status, ur(l.response, u), a))
    }
    ,
    i.onerror = l => {
        r(de("error", l.status, l.statusText, l.getAllResponseHeaders()))
    }
    ,
    i.onheaders = l => {
        o(de("headers", l.status, null, l.getAllResponseHeaders()))
    }
    ,
    i.ontimeout = Mt(r),
    i.onprogress = n,
    i.onabort = s,
    i
}
  , $i = e => (e.indexOf("//") === 0 && (e = location.protocol + e),
e.toLowerCase().replace("blob:", "").replace(/([a-z])?:\/\//, "$1").split("/")[0])
  , qd = e => (e.indexOf(":") > -1 || e.indexOf("//") > -1) && $i(location.href) !== $i(e)
  , sn = e => (...t) => Pt(e) ? e(...t) : e
  , Yd = e => !Ct(e.file)
  , es = (e, t) => {
    clearTimeout(t.listUpdateTimeout),
    t.listUpdateTimeout = setTimeout( () => {
        e("DID_UPDATE_ITEMS", {
            items: Ye(t.items)
        })
    }
    , 0)
}
  , Vi = (e, ...t) => new Promise(r => {
    if (!e)
        return r(!0);
    const n = e(...t);
    if (n == null)
        return r(!0);
    if (typeof n == "boolean")
        return r(n);
    typeof n.then == "function" && n.then(r)
}
)
  , ts = (e, t) => {
    e.items.sort( (r, n) => t(Le(r), Le(n)))
}
  , ke = (e, t) => ({query: r, success: n= () => {}
, failure: s= () => {}
, ...o}={}) => {
    const i = At(e.items, r);
    if (!i) {
        s({
            error: de("error", 0, "Item not found"),
            file: null
        });
        return
    }
    t(i, n, s, o || {})
}
  , Hd = (e, t, r) => ({
    ABORT_ALL: () => {
        Ye(r.items).forEach(n => {
            n.freeze(),
            n.abortLoad(),
            n.abortProcessing()
        }
        )
    }
    ,
    DID_SET_FILES: ({value: n=[]}) => {
        const s = n.map(i => ({
            source: i.source ? i.source : i,
            options: i.options
        }));
        let o = Ye(r.items);
        o.forEach(i => {
            s.find(l => l.source === i.source || l.source === i.file) || e("REMOVE_ITEM", {
                query: i,
                remove: !1
            })
        }
        ),
        o = Ye(r.items),
        s.forEach( (i, l) => {
            o.find(a => a.source === i.source || a.file === i.source) || e("ADD_ITEM", {
                ...i,
                interactionMethod: $e.NONE,
                index: l
            })
        }
        )
    }
    ,
    DID_UPDATE_ITEM_METADATA: ({id: n, action: s, change: o}) => {
        o.silent || (clearTimeout(r.itemUpdateTimeout),
        r.itemUpdateTimeout = setTimeout( () => {
            const i = Bi(r.items, n);
            if (!t("IS_ASYNC")) {
                ze("SHOULD_PREPARE_OUTPUT", !1, {
                    item: i,
                    query: t,
                    action: s,
                    change: o
                }).then(c => {
                    const d = t("GET_BEFORE_PREPARE_FILE");
                    d && (c = d(i, c)),
                    c && e("REQUEST_PREPARE_OUTPUT", {
                        query: n,
                        item: i,
                        success: f => {
                            e("DID_PREPARE_OUTPUT", {
                                id: n,
                                file: f
                            })
                        }
                    }, !0)
                }
                );
                return
            }
            i.origin === ge.LOCAL && e("DID_LOAD_ITEM", {
                id: i.id,
                error: null,
                serverFileReference: i.source
            });
            const l = () => {
                setTimeout( () => {
                    e("REQUEST_ITEM_PROCESSING", {
                        query: n
                    })
                }
                , 32)
            }
              , a = c => {
                i.revert(Rr(r.options.server.url, r.options.server.revert), t("GET_FORCE_REVERT")).then(c ? l : () => {}
                ).catch( () => {}
                )
            }
              , u = c => {
                i.abortProcessing().then(c ? l : () => {}
                )
            }
            ;
            if (i.status === H.PROCESSING_COMPLETE)
                return a(r.options.instantUpload);
            if (i.status === H.PROCESSING)
                return u(r.options.instantUpload);
            r.options.instantUpload && l()
        }
        , 0))
    }
    ,
    MOVE_ITEM: ({query: n, index: s}) => {
        const o = At(r.items, n);
        if (!o)
            return;
        const i = r.items.indexOf(o);
        s = wa(s, 0, r.items.length - 1),
        i !== s && r.items.splice(s, 0, r.items.splice(i, 1)[0])
    }
    ,
    SORT: ({compare: n}) => {
        ts(r, n),
        e("DID_SORT_ITEMS", {
            items: t("GET_ACTIVE_ITEMS")
        })
    }
    ,
    ADD_ITEMS: ({items: n, index: s, interactionMethod: o, success: i= () => {}
    , failure: l= () => {}
    }) => {
        let a = s;
        if (s === -1 || typeof s > "u") {
            const h = t("GET_ITEM_INSERT_LOCATION")
              , p = t("GET_TOTAL_ITEMS");
            a = h === "before" ? 0 : p
        }
        const u = t("GET_IGNORED_FILES")
          , c = h => Ct(h) ? !u.includes(h.name.toLowerCase()) : !ct(h)
          , f = n.filter(c).map(h => new Promise( (p, m) => {
            e("ADD_ITEM", {
                interactionMethod: o,
                source: h.source || h,
                success: p,
                failure: m,
                index: a++,
                options: h.options || {}
            })
        }
        ));
        Promise.all(f).then(i).catch(l)
    }
    ,
    ADD_ITEM: ({source: n, index: s=-1, interactionMethod: o, success: i= () => {}
    , failure: l= () => {}
    , options: a={}}) => {
        if (ct(n)) {
            l({
                error: de("error", 0, "No source"),
                file: null
            });
            return
        }
        if (Ct(n) && r.options.ignoredFiles.includes(n.name.toLowerCase()))
            return;
        if (!Id(r)) {
            if (r.options.allowMultiple || !r.options.allowMultiple && !r.options.allowReplace) {
                const E = de("warning", 0, "Max files");
                e("DID_THROW_MAX_FILES", {
                    source: n,
                    error: E
                }),
                l({
                    error: E,
                    file: null
                });
                return
            }
            const g = Ye(r.items)[0];
            if (g.status === H.PROCESSING_COMPLETE || g.status === H.PROCESSING_REVERT_ERROR) {
                const E = t("GET_FORCE_REVERT");
                if (g.revert(Rr(r.options.server.url, r.options.server.revert), E).then( () => {
                    E && e("ADD_ITEM", {
                        source: n,
                        index: s,
                        interactionMethod: o,
                        success: i,
                        failure: l,
                        options: a
                    })
                }
                ).catch( () => {}
                ),
                E)
                    return
            }
            e("REMOVE_ITEM", {
                query: g.id
            })
        }
        const u = a.type === "local" ? ge.LOCAL : a.type === "limbo" ? ge.LIMBO : ge.INPUT
          , c = Vd(u, u === ge.INPUT ? null : n, a.file);
        Object.keys(a.metadata || {}).forEach(g => {
            c.setMetadata(g, a.metadata[g])
        }
        ),
        Ut("DID_CREATE_ITEM", c, {
            query: t,
            dispatch: e
        });
        const d = t("GET_ITEM_INSERT_LOCATION");
        r.options.itemInsertLocationFreedom || (s = d === "before" ? -1 : r.items.length),
        wd(r.items, c, s),
        Pt(d) && n && ts(r, d);
        const f = c.id;
        c.on("init", () => {
            e("DID_INIT_ITEM", {
                id: f
            })
        }
        ),
        c.on("load-init", () => {
            e("DID_START_ITEM_LOAD", {
                id: f
            })
        }
        ),
        c.on("load-meta", () => {
            e("DID_UPDATE_ITEM_META", {
                id: f
            })
        }
        ),
        c.on("load-progress", g => {
            e("DID_UPDATE_ITEM_LOAD_PROGRESS", {
                id: f,
                progress: g
            })
        }
        ),
        c.on("load-request-error", g => {
            const E = sn(r.options.labelFileLoadError)(g);
            if (g.code >= 400 && g.code < 500) {
                e("DID_THROW_ITEM_INVALID", {
                    id: f,
                    error: g,
                    status: {
                        main: E,
                        sub: `${g.code} (${g.body})`
                    }
                }),
                l({
                    error: g,
                    file: Le(c)
                });
                return
            }
            e("DID_THROW_ITEM_LOAD_ERROR", {
                id: f,
                error: g,
                status: {
                    main: E,
                    sub: r.options.labelTapToRetry
                }
            })
        }
        ),
        c.on("load-file-error", g => {
            e("DID_THROW_ITEM_INVALID", {
                id: f,
                error: g.status,
                status: g.status
            }),
            l({
                error: g.status,
                file: Le(c)
            })
        }
        ),
        c.on("load-abort", () => {
            e("REMOVE_ITEM", {
                query: f
            })
        }
        ),
        c.on("load-skip", () => {
            c.on("metadata-update", g => {
                Ct(c.file) && e("DID_UPDATE_ITEM_METADATA", {
                    id: f,
                    change: g
                })
            }
            ),
            e("COMPLETE_LOAD_ITEM", {
                query: f,
                item: c,
                data: {
                    source: n,
                    success: i
                }
            })
        }
        ),
        c.on("load", () => {
            const g = E => {
                if (!E) {
                    e("REMOVE_ITEM", {
                        query: f
                    });
                    return
                }
                c.on("metadata-update", y => {
                    e("DID_UPDATE_ITEM_METADATA", {
                        id: f,
                        change: y
                    })
                }
                ),
                ze("SHOULD_PREPARE_OUTPUT", !1, {
                    item: c,
                    query: t
                }).then(y => {
                    const b = t("GET_BEFORE_PREPARE_FILE");
                    b && (y = b(c, y));
                    const T = () => {
                        e("COMPLETE_LOAD_ITEM", {
                            query: f,
                            item: c,
                            data: {
                                source: n,
                                success: i
                            }
                        }),
                        es(e, r)
                    }
                    ;
                    if (y) {
                        e("REQUEST_PREPARE_OUTPUT", {
                            query: f,
                            item: c,
                            success: A => {
                                e("DID_PREPARE_OUTPUT", {
                                    id: f,
                                    file: A
                                }),
                                T()
                            }
                        }, !0);
                        return
                    }
                    T()
                }
                )
            }
            ;
            ze("DID_LOAD_ITEM", c, {
                query: t,
                dispatch: e
            }).then( () => {
                Vi(t("GET_BEFORE_ADD_FILE"), Le(c)).then(g)
            }
            ).catch(E => {
                if (!E || !E.error || !E.status)
                    return g(!1);
                e("DID_THROW_ITEM_INVALID", {
                    id: f,
                    error: E.error,
                    status: E.status
                })
            }
            )
        }
        ),
        c.on("process-start", () => {
            e("DID_START_ITEM_PROCESSING", {
                id: f
            })
        }
        ),
        c.on("process-progress", g => {
            e("DID_UPDATE_ITEM_PROCESS_PROGRESS", {
                id: f,
                progress: g
            })
        }
        ),
        c.on("process-error", g => {
            e("DID_THROW_ITEM_PROCESSING_ERROR", {
                id: f,
                error: g,
                status: {
                    main: sn(r.options.labelFileProcessingError)(g),
                    sub: r.options.labelTapToRetry
                }
            })
        }
        ),
        c.on("process-revert-error", g => {
            e("DID_THROW_ITEM_PROCESSING_REVERT_ERROR", {
                id: f,
                error: g,
                status: {
                    main: sn(r.options.labelFileProcessingRevertError)(g),
                    sub: r.options.labelTapToRetry
                }
            })
        }
        ),
        c.on("process-complete", g => {
            e("DID_COMPLETE_ITEM_PROCESSING", {
                id: f,
                error: null,
                serverFileReference: g
            }),
            e("DID_DEFINE_VALUE", {
                id: f,
                value: g
            })
        }
        ),
        c.on("process-abort", () => {
            e("DID_ABORT_ITEM_PROCESSING", {
                id: f
            })
        }
        ),
        c.on("process-revert", () => {
            e("DID_REVERT_ITEM_PROCESSING", {
                id: f
            }),
            e("DID_DEFINE_VALUE", {
                id: f,
                value: null
            })
        }
        ),
        e("DID_ADD_ITEM", {
            id: f,
            index: s,
            interactionMethod: o
        }),
        es(e, r);
        const {url: h, load: p, restore: m, fetch: _} = r.options.server || {};
        c.load(n, Nd(u === ge.INPUT ? De(n) && qd(n) && _ ? Jn(h, _) : ki : u === ge.LIMBO ? Jn(h, m) : Jn(h, p)), (g, E, y) => {
            ze("LOAD_FILE", g, {
                query: t
            }).then(E).catch(y)
        }
        )
    }
    ,
    REQUEST_PREPARE_OUTPUT: ({item: n, success: s, failure: o= () => {}
    }) => {
        const i = {
            error: de("error", 0, "Item not found"),
            file: null
        };
        if (n.archived)
            return o(i);
        ze("PREPARE_OUTPUT", n.file, {
            query: t,
            item: n
        }).then(l => {
            ze("COMPLETE_PREPARE_OUTPUT", l, {
                query: t,
                item: n
            }).then(a => {
                if (n.archived)
                    return o(i);
                s(a)
            }
            )
        }
        )
    }
    ,
    COMPLETE_LOAD_ITEM: ({item: n, data: s}) => {
        const {success: o, source: i} = s
          , l = t("GET_ITEM_INSERT_LOCATION");
        if (Pt(l) && i && ts(r, l),
        e("DID_LOAD_ITEM", {
            id: n.id,
            error: null,
            serverFileReference: n.origin === ge.INPUT ? null : i
        }),
        o(Le(n)),
        n.origin === ge.LOCAL) {
            e("DID_LOAD_LOCAL_ITEM", {
                id: n.id
            });
            return
        }
        if (n.origin === ge.LIMBO) {
            e("DID_COMPLETE_ITEM_PROCESSING", {
                id: n.id,
                error: null,
                serverFileReference: i
            }),
            e("DID_DEFINE_VALUE", {
                id: n.id,
                value: n.serverId || i
            });
            return
        }
        t("IS_ASYNC") && r.options.instantUpload && e("REQUEST_ITEM_PROCESSING", {
            query: n.id
        })
    }
    ,
    RETRY_ITEM_LOAD: ke(r, n => {
        n.retryLoad()
    }
    ),
    REQUEST_ITEM_PREPARE: ke(r, (n, s, o) => {
        e("REQUEST_PREPARE_OUTPUT", {
            query: n.id,
            item: n,
            success: i => {
                e("DID_PREPARE_OUTPUT", {
                    id: n.id,
                    file: i
                }),
                s({
                    file: n,
                    output: i
                })
            }
            ,
            failure: o
        }, !0)
    }
    ),
    REQUEST_ITEM_PROCESSING: ke(r, (n, s, o) => {
        if (!(n.status === H.IDLE || n.status === H.PROCESSING_ERROR)) {
            const l = () => e("REQUEST_ITEM_PROCESSING", {
                query: n,
                success: s,
                failure: o
            })
              , a = () => document.hidden ? l() : setTimeout(l, 32);
            n.status === H.PROCESSING_COMPLETE || n.status === H.PROCESSING_REVERT_ERROR ? n.revert(Rr(r.options.server.url, r.options.server.revert), t("GET_FORCE_REVERT")).then(a).catch( () => {}
            ) : n.status === H.PROCESSING && n.abortProcessing().then(a);
            return
        }
        n.status !== H.PROCESSING_QUEUED && (n.requestProcessing(),
        e("DID_REQUEST_ITEM_PROCESSING", {
            id: n.id
        }),
        e("PROCESS_ITEM", {
            query: n,
            success: s,
            failure: o
        }, !0))
    }
    ),
    PROCESS_ITEM: ke(r, (n, s, o) => {
        const i = t("GET_MAX_PARALLEL_UPLOADS");
        if (t("GET_ITEMS_BY_STATUS", H.PROCESSING).length === i) {
            r.processingQueue.push({
                id: n.id,
                success: s,
                failure: o
            });
            return
        }
        if (n.status === H.PROCESSING)
            return;
        const a = () => {
            const c = r.processingQueue.shift();
            if (!c)
                return;
            const {id: d, success: f, failure: h} = c
              , p = At(r.items, d);
            if (!p || p.archived) {
                a();
                return
            }
            e("PROCESS_ITEM", {
                query: d,
                success: f,
                failure: h
            }, !0)
        }
        ;
        n.onOnce("process-complete", () => {
            s(Le(n)),
            a();
            const c = r.options.server;
            if (r.options.instantUpload && n.origin === ge.LOCAL && Pt(c.remove)) {
                const h = () => {}
                ;
                n.origin = ge.LIMBO,
                r.options.server.remove(n.source, h, h)
            }
            t("GET_ITEMS_BY_STATUS", H.PROCESSING_COMPLETE).length === r.items.length && e("DID_COMPLETE_ITEM_PROCESSING_ALL")
        }
        ),
        n.onOnce("process-error", c => {
            o({
                error: c,
                file: Le(n)
            }),
            a()
        }
        );
        const u = r.options;
        n.process(kd(Ud(u.server.url, u.server.process, u.name, {
            chunkTransferId: n.transferId,
            chunkServer: u.server.patch,
            chunkUploads: u.chunkUploads,
            chunkForce: u.chunkForce,
            chunkSize: u.chunkSize,
            chunkRetryDelays: u.chunkRetryDelays
        }), {
            allowMinimumUploadDuration: t("GET_ALLOW_MINIMUM_UPLOAD_DURATION")
        }), (c, d, f) => {
            ze("PREPARE_OUTPUT", c, {
                query: t,
                item: n
            }).then(h => {
                e("DID_PREPARE_OUTPUT", {
                    id: n.id,
                    file: h
                }),
                d(h)
            }
            ).catch(f)
        }
        )
    }
    ),
    RETRY_ITEM_PROCESSING: ke(r, n => {
        e("REQUEST_ITEM_PROCESSING", {
            query: n
        })
    }
    ),
    REQUEST_REMOVE_ITEM: ke(r, n => {
        Vi(t("GET_BEFORE_REMOVE_FILE"), Le(n)).then(s => {
            s && e("REMOVE_ITEM", {
                query: n
            })
        }
        )
    }
    ),
    RELEASE_ITEM: ke(r, n => {
        n.release()
    }
    ),
    REMOVE_ITEM: ke(r, (n, s, o, i) => {
        const l = () => {
            const u = n.id;
            Bi(r.items, u).archive(),
            e("DID_REMOVE_ITEM", {
                error: null,
                id: u,
                item: n
            }),
            es(e, r),
            s(Le(n))
        }
          , a = r.options.server;
        n.origin === ge.LOCAL && a && Pt(a.remove) && i.remove !== !1 ? (e("DID_START_ITEM_REMOVE", {
            id: n.id
        }),
        a.remove(n.source, () => l(), u => {
            e("DID_THROW_ITEM_REMOVE_ERROR", {
                id: n.id,
                error: de("error", 0, u, null),
                status: {
                    main: sn(r.options.labelFileRemoveError)(u),
                    sub: r.options.labelTapToRetry
                }
            })
        }
        )) : ((i.revert && n.origin !== ge.LOCAL && n.serverId !== null || r.options.chunkUploads && n.file.size > r.options.chunkSize || r.options.chunkUploads && r.options.chunkForce) && n.revert(Rr(r.options.server.url, r.options.server.revert), t("GET_FORCE_REVERT")),
        l())
    }
    ),
    ABORT_ITEM_LOAD: ke(r, n => {
        n.abortLoad()
    }
    ),
    ABORT_ITEM_PROCESSING: ke(r, n => {
        if (n.serverId) {
            e("REVERT_ITEM_PROCESSING", {
                id: n.id
            });
            return
        }
        n.abortProcessing().then( () => {
            r.options.instantUpload && e("REMOVE_ITEM", {
                query: n.id
            })
        }
        )
    }
    ),
    REQUEST_REVERT_ITEM_PROCESSING: ke(r, n => {
        if (!r.options.instantUpload) {
            e("REVERT_ITEM_PROCESSING", {
                query: n
            });
            return
        }
        const s = l => {
            l && e("REVERT_ITEM_PROCESSING", {
                query: n
            })
        }
          , o = t("GET_BEFORE_REMOVE_FILE");
        if (!o)
            return s(!0);
        const i = o(Le(n));
        if (i == null)
            return s(!0);
        if (typeof i == "boolean")
            return s(i);
        typeof i.then == "function" && i.then(s)
    }
    ),
    REVERT_ITEM_PROCESSING: ke(r, n => {
        n.revert(Rr(r.options.server.url, r.options.server.revert), t("GET_FORCE_REVERT")).then( () => {
            (r.options.instantUpload || Yd(n)) && e("REMOVE_ITEM", {
                query: n.id
            })
        }
        ).catch( () => {}
        )
    }
    ),
    SET_OPTIONS: ({options: n}) => {
        const s = Object.keys(n)
          , o = Wd.filter(l => s.includes(l));
        [...o, ...Object.keys(n).filter(l => !o.includes(l))].forEach(l => {
            e(`SET_${Nn(l, "_").toUpperCase()}`, {
                value: n[l]
            })
        }
        )
    }
})
  , Wd = ["server"]
  , zs = e => e
  , ut = e => document.createElement(e)
  , fe = (e, t) => {
    let r = e.childNodes[0];
    r ? t !== r.nodeValue && (r.nodeValue = t) : (r = document.createTextNode(t),
    e.appendChild(r))
}
  , zi = (e, t, r, n) => {
    const s = (n % 360 - 90) * Math.PI / 180;
    return {
        x: e + r * Math.cos(s),
        y: t + r * Math.sin(s)
    }
}
  , jd = (e, t, r, n, s, o) => {
    const i = zi(e, t, r, s)
      , l = zi(e, t, r, n);
    return ["M", i.x, i.y, "A", r, r, 0, o, 0, l.x, l.y].join(" ")
}
  , Xd = (e, t, r, n, s) => {
    let o = 1;
    return s > n && s - n <= .5 && (o = 0),
    n > s && n - s >= .5 && (o = 0),
    jd(e, t, r, Math.min(.9999, n) * 360, Math.min(.9999, s) * 360, o)
}
  , Qd = ({root: e, props: t}) => {
    t.spin = !1,
    t.progress = 0,
    t.opacity = 0;
    const r = In("svg");
    e.ref.path = In("path", {
        "stroke-width": 2,
        "stroke-linecap": "round"
    }),
    r.appendChild(e.ref.path),
    e.ref.svg = r,
    e.appendChild(r)
}
  , Zd = ({root: e, props: t}) => {
    if (t.opacity === 0)
        return;
    t.align && (e.element.dataset.align = t.align);
    const r = parseInt(he(e.ref.path, "stroke-width"), 10)
      , n = e.rect.element.width * .5;
    let s = 0
      , o = 0;
    t.spin ? (s = 0,
    o = .5) : (s = 0,
    o = t.progress);
    const i = Xd(n, n, n - r, s, o);
    he(e.ref.path, "d", i),
    he(e.ref.path, "stroke-opacity", t.spin || t.progress > 0 ? 1 : 0)
}
  , qi = pe({
    tag: "div",
    name: "progress-indicator",
    ignoreRectUpdate: !0,
    ignoreRect: !0,
    create: Qd,
    write: Zd,
    mixins: {
        apis: ["progress", "spin", "align"],
        styles: ["opacity"],
        animations: {
            opacity: {
                type: "tween",
                duration: 500
            },
            progress: {
                type: "spring",
                stiffness: .95,
                damping: .65,
                mass: 10
            }
        }
    }
})
  , Kd = ({root: e, props: t}) => {
    e.element.innerHTML = (t.icon || "") + `<span>${t.label}</span>`,
    t.isDisabled = !1
}
  , Jd = ({root: e, props: t}) => {
    const {isDisabled: r} = t
      , n = e.query("GET_DISABLED") || t.opacity === 0;
    n && !r ? (t.isDisabled = !0,
    he(e.element, "disabled", "disabled")) : !n && r && (t.isDisabled = !1,
    e.element.removeAttribute("disabled"))
}
  , La = pe({
    tag: "button",
    attributes: {
        type: "button"
    },
    ignoreRect: !0,
    ignoreRectUpdate: !0,
    name: "file-action-button",
    mixins: {
        apis: ["label"],
        styles: ["translateX", "translateY", "scaleX", "scaleY", "opacity"],
        animations: {
            scaleX: "spring",
            scaleY: "spring",
            translateX: "spring",
            translateY: "spring",
            opacity: {
                type: "tween",
                duration: 250
            }
        },
        listeners: !0
    },
    create: Kd,
    write: Jd
})
  , Ma = (e, t=".", r=1e3, n={}) => {
    const {labelBytes: s="bytes", labelKilobytes: o="KB", labelMegabytes: i="MB", labelGigabytes: l="GB"} = n;
    e = Math.round(Math.abs(e));
    const a = r
      , u = r * r
      , c = r * r * r;
    return e < a ? `${e} ${s}` : e < u ? `${Math.floor(e / a)} ${o}` : e < c ? `${Yi(e / u, 1, t)} ${i}` : `${Yi(e / c, 2, t)} ${l}`
}
  , Yi = (e, t, r) => e.toFixed(t).split(".").filter(n => n !== "0").join(r)
  , ef = ({root: e, props: t}) => {
    const r = ut("span");
    r.className = "filepond--file-info-main",
    he(r, "aria-hidden", "true"),
    e.appendChild(r),
    e.ref.fileName = r;
    const n = ut("span");
    n.className = "filepond--file-info-sub",
    e.appendChild(n),
    e.ref.fileSize = n,
    fe(n, e.query("GET_LABEL_FILE_WAITING_FOR_SIZE")),
    fe(r, zs(e.query("GET_ITEM_NAME", t.id)))
}
  , vs = ({root: e, props: t}) => {
    fe(e.ref.fileSize, Ma(e.query("GET_ITEM_SIZE", t.id), ".", e.query("GET_FILE_SIZE_BASE"), e.query("GET_FILE_SIZE_LABELS", e.query))),
    fe(e.ref.fileName, zs(e.query("GET_ITEM_NAME", t.id)))
}
  , Hi = ({root: e, props: t}) => {
    if (_r(e.query("GET_ITEM_SIZE", t.id))) {
        vs({
            root: e,
            props: t
        });
        return
    }
    fe(e.ref.fileSize, e.query("GET_LABEL_FILE_SIZE_NOT_AVAILABLE"))
}
  , tf = pe({
    name: "file-info",
    ignoreRect: !0,
    ignoreRectUpdate: !0,
    write: Pe({
        DID_LOAD_ITEM: vs,
        DID_UPDATE_ITEM_META: vs,
        DID_THROW_ITEM_LOAD_ERROR: Hi,
        DID_THROW_ITEM_INVALID: Hi
    }),
    didCreateView: e => {
        Ut("CREATE_VIEW", {
            ...e,
            view: e
        })
    }
    ,
    create: ef,
    mixins: {
        styles: ["translateX", "translateY"],
        animations: {
            translateX: "spring",
            translateY: "spring"
        }
    }
})
  , Ca = e => Math.round(e * 100)
  , rf = ({root: e}) => {
    const t = ut("span");
    t.className = "filepond--file-status-main",
    e.appendChild(t),
    e.ref.main = t;
    const r = ut("span");
    r.className = "filepond--file-status-sub",
    e.appendChild(r),
    e.ref.sub = r,
    xa({
        root: e,
        action: {
            progress: null
        }
    })
}
  , xa = ({root: e, action: t}) => {
    const r = t.progress === null ? e.query("GET_LABEL_FILE_LOADING") : `${e.query("GET_LABEL_FILE_LOADING")} ${Ca(t.progress)}%`;
    fe(e.ref.main, r),
    fe(e.ref.sub, e.query("GET_LABEL_TAP_TO_CANCEL"))
}
  , nf = ({root: e, action: t}) => {
    const r = t.progress === null ? e.query("GET_LABEL_FILE_PROCESSING") : `${e.query("GET_LABEL_FILE_PROCESSING")} ${Ca(t.progress)}%`;
    fe(e.ref.main, r),
    fe(e.ref.sub, e.query("GET_LABEL_TAP_TO_CANCEL"))
}
  , sf = ({root: e}) => {
    fe(e.ref.main, e.query("GET_LABEL_FILE_PROCESSING")),
    fe(e.ref.sub, e.query("GET_LABEL_TAP_TO_CANCEL"))
}
  , of = ({root: e}) => {
    fe(e.ref.main, e.query("GET_LABEL_FILE_PROCESSING_ABORTED")),
    fe(e.ref.sub, e.query("GET_LABEL_TAP_TO_RETRY"))
}
  , af = ({root: e}) => {
    fe(e.ref.main, e.query("GET_LABEL_FILE_PROCESSING_COMPLETE")),
    fe(e.ref.sub, e.query("GET_LABEL_TAP_TO_UNDO"))
}
  , Wi = ({root: e}) => {
    fe(e.ref.main, ""),
    fe(e.ref.sub, "")
}
  , Sr = ({root: e, action: t}) => {
    fe(e.ref.main, t.status.main),
    fe(e.ref.sub, t.status.sub)
}
  , lf = pe({
    name: "file-status",
    ignoreRect: !0,
    ignoreRectUpdate: !0,
    write: Pe({
        DID_LOAD_ITEM: Wi,
        DID_REVERT_ITEM_PROCESSING: Wi,
        DID_REQUEST_ITEM_PROCESSING: sf,
        DID_ABORT_ITEM_PROCESSING: of,
        DID_COMPLETE_ITEM_PROCESSING: af,
        DID_UPDATE_ITEM_PROCESS_PROGRESS: nf,
        DID_UPDATE_ITEM_LOAD_PROGRESS: xa,
        DID_THROW_ITEM_LOAD_ERROR: Sr,
        DID_THROW_ITEM_INVALID: Sr,
        DID_THROW_ITEM_PROCESSING_ERROR: Sr,
        DID_THROW_ITEM_PROCESSING_REVERT_ERROR: Sr,
        DID_THROW_ITEM_REMOVE_ERROR: Sr
    }),
    didCreateView: e => {
        Ut("CREATE_VIEW", {
            ...e,
            view: e
        })
    }
    ,
    create: rf,
    mixins: {
        styles: ["translateX", "translateY", "opacity"],
        animations: {
            opacity: {
                type: "tween",
                duration: 250
            },
            translateX: "spring",
            translateY: "spring"
        }
    }
})
  , ys = {
    AbortItemLoad: {
        label: "GET_LABEL_BUTTON_ABORT_ITEM_LOAD",
        action: "ABORT_ITEM_LOAD",
        className: "filepond--action-abort-item-load",
        align: "LOAD_INDICATOR_POSITION"
    },
    RetryItemLoad: {
        label: "GET_LABEL_BUTTON_RETRY_ITEM_LOAD",
        action: "RETRY_ITEM_LOAD",
        icon: "GET_ICON_RETRY",
        className: "filepond--action-retry-item-load",
        align: "BUTTON_PROCESS_ITEM_POSITION"
    },
    RemoveItem: {
        label: "GET_LABEL_BUTTON_REMOVE_ITEM",
        action: "REQUEST_REMOVE_ITEM",
        icon: "GET_ICON_REMOVE",
        className: "filepond--action-remove-item",
        align: "BUTTON_REMOVE_ITEM_POSITION"
    },
    ProcessItem: {
        label: "GET_LABEL_BUTTON_PROCESS_ITEM",
        action: "REQUEST_ITEM_PROCESSING",
        icon: "GET_ICON_PROCESS",
        className: "filepond--action-process-item",
        align: "BUTTON_PROCESS_ITEM_POSITION"
    },
    AbortItemProcessing: {
        label: "GET_LABEL_BUTTON_ABORT_ITEM_PROCESSING",
        action: "ABORT_ITEM_PROCESSING",
        className: "filepond--action-abort-item-processing",
        align: "BUTTON_PROCESS_ITEM_POSITION"
    },
    RetryItemProcessing: {
        label: "GET_LABEL_BUTTON_RETRY_ITEM_PROCESSING",
        action: "RETRY_ITEM_PROCESSING",
        icon: "GET_ICON_RETRY",
        className: "filepond--action-retry-item-processing",
        align: "BUTTON_PROCESS_ITEM_POSITION"
    },
    RevertItemProcessing: {
        label: "GET_LABEL_BUTTON_UNDO_ITEM_PROCESSING",
        action: "REQUEST_REVERT_ITEM_PROCESSING",
        icon: "GET_ICON_UNDO",
        className: "filepond--action-revert-item-processing",
        align: "BUTTON_PROCESS_ITEM_POSITION"
    }
}
  , Ts = [];
le(ys, e => {
    Ts.push(e)
}
);
const Fe = e => {
    if (Is(e) === "right")
        return 0;
    const t = e.ref.buttonRemoveItem.rect.element;
    return t.hidden ? null : t.width + t.left
}
  , cf = e => e.ref.buttonAbortItemLoad.rect.element.width
  , on = e => Math.floor(e.ref.buttonRemoveItem.rect.element.height / 4)
  , uf = e => Math.floor(e.ref.buttonRemoveItem.rect.element.left / 2)
  , df = e => e.query("GET_STYLE_LOAD_INDICATOR_POSITION")
  , ff = e => e.query("GET_STYLE_PROGRESS_INDICATOR_POSITION")
  , Is = e => e.query("GET_STYLE_BUTTON_REMOVE_ITEM_POSITION")
  , pf = {
    buttonAbortItemLoad: {
        opacity: 0
    },
    buttonRetryItemLoad: {
        opacity: 0
    },
    buttonRemoveItem: {
        opacity: 0
    },
    buttonProcessItem: {
        opacity: 0
    },
    buttonAbortItemProcessing: {
        opacity: 0
    },
    buttonRetryItemProcessing: {
        opacity: 0
    },
    buttonRevertItemProcessing: {
        opacity: 0
    },
    loadProgressIndicator: {
        opacity: 0,
        align: df
    },
    processProgressIndicator: {
        opacity: 0,
        align: ff
    },
    processingCompleteIndicator: {
        opacity: 0,
        scaleX: .75,
        scaleY: .75
    },
    info: {
        translateX: 0,
        translateY: 0,
        opacity: 0
    },
    status: {
        translateX: 0,
        translateY: 0,
        opacity: 0
    }
}
  , ji = {
    buttonRemoveItem: {
        opacity: 1
    },
    buttonProcessItem: {
        opacity: 1
    },
    info: {
        translateX: Fe
    },
    status: {
        translateX: Fe
    }
}
  , rs = {
    buttonAbortItemProcessing: {
        opacity: 1
    },
    processProgressIndicator: {
        opacity: 1
    },
    status: {
        opacity: 1
    }
}
  , er = {
    DID_THROW_ITEM_INVALID: {
        buttonRemoveItem: {
            opacity: 1
        },
        info: {
            translateX: Fe
        },
        status: {
            translateX: Fe,
            opacity: 1
        }
    },
    DID_START_ITEM_LOAD: {
        buttonAbortItemLoad: {
            opacity: 1
        },
        loadProgressIndicator: {
            opacity: 1
        },
        status: {
            opacity: 1
        }
    },
    DID_THROW_ITEM_LOAD_ERROR: {
        buttonRetryItemLoad: {
            opacity: 1
        },
        buttonRemoveItem: {
            opacity: 1
        },
        info: {
            translateX: Fe
        },
        status: {
            opacity: 1
        }
    },
    DID_START_ITEM_REMOVE: {
        processProgressIndicator: {
            opacity: 1,
            align: Is
        },
        info: {
            translateX: Fe
        },
        status: {
            opacity: 0
        }
    },
    DID_THROW_ITEM_REMOVE_ERROR: {
        processProgressIndicator: {
            opacity: 0,
            align: Is
        },
        buttonRemoveItem: {
            opacity: 1
        },
        info: {
            translateX: Fe
        },
        status: {
            opacity: 1,
            translateX: Fe
        }
    },
    DID_LOAD_ITEM: ji,
    DID_LOAD_LOCAL_ITEM: {
        buttonRemoveItem: {
            opacity: 1
        },
        info: {
            translateX: Fe
        },
        status: {
            translateX: Fe
        }
    },
    DID_START_ITEM_PROCESSING: rs,
    DID_REQUEST_ITEM_PROCESSING: rs,
    DID_UPDATE_ITEM_PROCESS_PROGRESS: rs,
    DID_COMPLETE_ITEM_PROCESSING: {
        buttonRevertItemProcessing: {
            opacity: 1
        },
        info: {
            opacity: 1
        },
        status: {
            opacity: 1
        }
    },
    DID_THROW_ITEM_PROCESSING_ERROR: {
        buttonRemoveItem: {
            opacity: 1
        },
        buttonRetryItemProcessing: {
            opacity: 1
        },
        status: {
            opacity: 1
        },
        info: {
            translateX: Fe
        }
    },
    DID_THROW_ITEM_PROCESSING_REVERT_ERROR: {
        buttonRevertItemProcessing: {
            opacity: 1
        },
        status: {
            opacity: 1
        },
        info: {
            opacity: 1
        }
    },
    DID_ABORT_ITEM_PROCESSING: {
        buttonRemoveItem: {
            opacity: 1
        },
        buttonProcessItem: {
            opacity: 1
        },
        info: {
            translateX: Fe
        },
        status: {
            opacity: 1
        }
    },
    DID_REVERT_ITEM_PROCESSING: ji
}
  , hf = pe({
    create: ({root: e}) => {
        e.element.innerHTML = e.query("GET_ICON_DONE")
    }
    ,
    name: "processing-complete-indicator",
    ignoreRect: !0,
    mixins: {
        styles: ["scaleX", "scaleY", "opacity"],
        animations: {
            scaleX: "spring",
            scaleY: "spring",
            opacity: {
                type: "tween",
                duration: 250
            }
        }
    }
})
  , mf = ({root: e, props: t}) => {
    const r = Object.keys(ys).reduce( (p, m) => (p[m] = {
        ...ys[m]
    },
    p), {})
      , {id: n} = t
      , s = e.query("GET_ALLOW_REVERT")
      , o = e.query("GET_ALLOW_REMOVE")
      , i = e.query("GET_ALLOW_PROCESS")
      , l = e.query("GET_INSTANT_UPLOAD")
      , a = e.query("IS_ASYNC")
      , u = e.query("GET_STYLE_BUTTON_REMOVE_ITEM_ALIGN");
    let c;
    a ? i && !s ? c = p => !/RevertItemProcessing/.test(p) : !i && s ? c = p => !/ProcessItem|RetryItemProcessing|AbortItemProcessing/.test(p) : !i && !s && (c = p => !/Process/.test(p)) : c = p => !/Process/.test(p);
    const d = c ? Ts.filter(c) : Ts.concat();
    if (l && s && (r.RevertItemProcessing.label = "GET_LABEL_BUTTON_REMOVE_ITEM",
    r.RevertItemProcessing.icon = "GET_ICON_REMOVE"),
    a && !s) {
        const p = er.DID_COMPLETE_ITEM_PROCESSING;
        p.info.translateX = uf,
        p.info.translateY = on,
        p.status.translateY = on,
        p.processingCompleteIndicator = {
            opacity: 1,
            scaleX: 1,
            scaleY: 1
        }
    }
    if (a && !i && (["DID_START_ITEM_PROCESSING", "DID_REQUEST_ITEM_PROCESSING", "DID_UPDATE_ITEM_PROCESS_PROGRESS", "DID_THROW_ITEM_PROCESSING_ERROR"].forEach(p => {
        er[p].status.translateY = on
    }
    ),
    er.DID_THROW_ITEM_PROCESSING_ERROR.status.translateX = cf),
    u && s) {
        r.RevertItemProcessing.align = "BUTTON_REMOVE_ITEM_POSITION";
        const p = er.DID_COMPLETE_ITEM_PROCESSING;
        p.info.translateX = Fe,
        p.status.translateY = on,
        p.processingCompleteIndicator = {
            opacity: 1,
            scaleX: 1,
            scaleY: 1
        }
    }
    o || (r.RemoveItem.disabled = !0),
    le(r, (p, m) => {
        const _ = e.createChildView(La, {
            label: e.query(m.label),
            icon: e.query(m.icon),
            opacity: 0
        });
        d.includes(p) && e.appendChildView(_),
        m.disabled && (_.element.setAttribute("disabled", "disabled"),
        _.element.setAttribute("hidden", "hidden")),
        _.element.dataset.align = e.query(`GET_STYLE_${m.align}`),
        _.element.classList.add(m.className),
        _.on("click", g => {
            g.stopPropagation(),
            !m.disabled && e.dispatch(m.action, {
                query: n
            })
        }
        ),
        e.ref[`button${p}`] = _
    }
    ),
    e.ref.processingCompleteIndicator = e.appendChildView(e.createChildView(hf)),
    e.ref.processingCompleteIndicator.element.dataset.align = e.query("GET_STYLE_BUTTON_PROCESS_ITEM_POSITION"),
    e.ref.info = e.appendChildView(e.createChildView(tf, {
        id: n
    })),
    e.ref.status = e.appendChildView(e.createChildView(lf, {
        id: n
    }));
    const f = e.appendChildView(e.createChildView(qi, {
        opacity: 0,
        align: e.query("GET_STYLE_LOAD_INDICATOR_POSITION")
    }));
    f.element.classList.add("filepond--load-indicator"),
    e.ref.loadProgressIndicator = f;
    const h = e.appendChildView(e.createChildView(qi, {
        opacity: 0,
        align: e.query("GET_STYLE_PROGRESS_INDICATOR_POSITION")
    }));
    h.element.classList.add("filepond--process-indicator"),
    e.ref.processProgressIndicator = h,
    e.ref.activeStyles = []
}
  , gf = ({root: e, actions: t, props: r}) => {
    _f({
        root: e,
        actions: t,
        props: r
    });
    let n = t.concat().filter(s => /^DID_/.test(s.type)).reverse().find(s => er[s.type]);
    if (n) {
        e.ref.activeStyles = [];
        const s = er[n.type];
        le(pf, (o, i) => {
            const l = e.ref[o];
            le(i, (a, u) => {
                const c = s[o] && typeof s[o][a] < "u" ? s[o][a] : u;
                e.ref.activeStyles.push({
                    control: l,
                    key: a,
                    value: c
                })
            }
            )
        }
        )
    }
    e.ref.activeStyles.forEach( ({control: s, key: o, value: i}) => {
        s[o] = typeof i == "function" ? i(e) : i
    }
    )
}
  , _f = Pe({
    DID_SET_LABEL_BUTTON_ABORT_ITEM_PROCESSING: ({root: e, action: t}) => {
        e.ref.buttonAbortItemProcessing.label = t.value
    }
    ,
    DID_SET_LABEL_BUTTON_ABORT_ITEM_LOAD: ({root: e, action: t}) => {
        e.ref.buttonAbortItemLoad.label = t.value
    }
    ,
    DID_SET_LABEL_BUTTON_ABORT_ITEM_REMOVAL: ({root: e, action: t}) => {
        e.ref.buttonAbortItemRemoval.label = t.value
    }
    ,
    DID_REQUEST_ITEM_PROCESSING: ({root: e}) => {
        e.ref.processProgressIndicator.spin = !0,
        e.ref.processProgressIndicator.progress = 0
    }
    ,
    DID_START_ITEM_LOAD: ({root: e}) => {
        e.ref.loadProgressIndicator.spin = !0,
        e.ref.loadProgressIndicator.progress = 0
    }
    ,
    DID_START_ITEM_REMOVE: ({root: e}) => {
        e.ref.processProgressIndicator.spin = !0,
        e.ref.processProgressIndicator.progress = 0
    }
    ,
    DID_UPDATE_ITEM_LOAD_PROGRESS: ({root: e, action: t}) => {
        e.ref.loadProgressIndicator.spin = !1,
        e.ref.loadProgressIndicator.progress = t.progress
    }
    ,
    DID_UPDATE_ITEM_PROCESS_PROGRESS: ({root: e, action: t}) => {
        e.ref.processProgressIndicator.spin = !1,
        e.ref.processProgressIndicator.progress = t.progress
    }
})
  , Ef = pe({
    create: mf,
    write: gf,
    didCreateView: e => {
        Ut("CREATE_VIEW", {
            ...e,
            view: e
        })
    }
    ,
    name: "file"
})
  , vf = ({root: e, props: t}) => {
    e.ref.fileName = ut("legend"),
    e.appendChild(e.ref.fileName),
    e.ref.file = e.appendChildView(e.createChildView(Ef, {
        id: t.id
    })),
    e.ref.data = !1
}
  , yf = ({root: e, props: t}) => {
    fe(e.ref.fileName, zs(e.query("GET_ITEM_NAME", t.id)))
}
  , Tf = pe({
    create: vf,
    ignoreRect: !0,
    write: Pe({
        DID_LOAD_ITEM: yf
    }),
    didCreateView: e => {
        Ut("CREATE_VIEW", {
            ...e,
            view: e
        })
    }
    ,
    tag: "fieldset",
    name: "file-wrapper"
})
  , Xi = {
    type: "spring",
    damping: .6,
    mass: 7
}
  , If = ({root: e, props: t}) => {
    [{
        name: "top"
    }, {
        name: "center",
        props: {
            translateY: null,
            scaleY: null
        },
        mixins: {
            animations: {
                scaleY: Xi
            },
            styles: ["translateY", "scaleY"]
        }
    }, {
        name: "bottom",
        props: {
            translateY: null
        },
        mixins: {
            animations: {
                translateY: Xi
            },
            styles: ["translateY"]
        }
    }].forEach(r => {
        bf(e, r, t.name)
    }
    ),
    e.element.classList.add(`filepond--${t.name}`),
    e.ref.scalable = null
}
  , bf = (e, t, r) => {
    const n = pe({
        name: `panel-${t.name} filepond--${r}`,
        mixins: t.mixins,
        ignoreRectUpdate: !0
    })
      , s = e.createChildView(n, t.props);
    e.ref[t.name] = e.appendChildView(s)
}
  , wf = ({root: e, props: t}) => {
    if ((e.ref.scalable === null || t.scalable !== e.ref.scalable) && (e.ref.scalable = ga(t.scalable) ? t.scalable : !0,
    e.element.dataset.scalable = e.ref.scalable),
    !t.height)
        return;
    const r = e.ref.top.rect.element
      , n = e.ref.bottom.rect.element
      , s = Math.max(r.height + n.height, t.height);
    e.ref.center.translateY = r.height,
    e.ref.center.scaleY = (s - r.height - n.height) / 100,
    e.ref.bottom.translateY = s - n.height
}
  , Na = pe({
    name: "panel",
    read: ({root: e, props: t}) => t.heightCurrent = e.ref.bottom.translateY,
    write: wf,
    create: If,
    ignoreRect: !0,
    mixins: {
        apis: ["height", "heightCurrent", "scalable"]
    }
})
  , Rf = e => {
    const t = e.map(n => n.id);
    let r;
    return {
        setIndex: n => {
            r = n
        }
        ,
        getIndex: () => r,
        getItemIndex: n => t.indexOf(n.id)
    }
}
  , Qi = {
    type: "spring",
    stiffness: .75,
    damping: .45,
    mass: 10
}
  , Zi = "spring"
  , Ki = {
    DID_START_ITEM_LOAD: "busy",
    DID_UPDATE_ITEM_LOAD_PROGRESS: "loading",
    DID_THROW_ITEM_INVALID: "load-invalid",
    DID_THROW_ITEM_LOAD_ERROR: "load-error",
    DID_LOAD_ITEM: "idle",
    DID_THROW_ITEM_REMOVE_ERROR: "remove-error",
    DID_START_ITEM_REMOVE: "busy",
    DID_START_ITEM_PROCESSING: "busy processing",
    DID_REQUEST_ITEM_PROCESSING: "busy processing",
    DID_UPDATE_ITEM_PROCESS_PROGRESS: "processing",
    DID_COMPLETE_ITEM_PROCESSING: "processing-complete",
    DID_THROW_ITEM_PROCESSING_ERROR: "processing-error",
    DID_THROW_ITEM_PROCESSING_REVERT_ERROR: "processing-revert-error",
    DID_ABORT_ITEM_PROCESSING: "cancelled",
    DID_REVERT_ITEM_PROCESSING: "idle"
}
  , Sf = ({root: e, props: t}) => {
    if (e.ref.handleClick = n => e.dispatch("DID_ACTIVATE_ITEM", {
        id: t.id
    }),
    e.element.id = `filepond--item-${t.id}`,
    e.element.addEventListener("click", e.ref.handleClick),
    e.ref.container = e.appendChildView(e.createChildView(Tf, {
        id: t.id
    })),
    e.ref.panel = e.appendChildView(e.createChildView(Na, {
        name: "item-panel"
    })),
    e.ref.panel.height = null,
    t.markedForRemoval = !1,
    !e.query("GET_ALLOW_REORDER"))
        return;
    e.element.dataset.dragState = "idle";
    const r = n => {
        if (!n.isPrimary)
            return;
        let s = !1;
        const o = {
            x: n.pageX,
            y: n.pageY
        };
        t.dragOrigin = {
            x: e.translateX,
            y: e.translateY
        },
        t.dragCenter = {
            x: n.offsetX,
            y: n.offsetY
        };
        const i = Rf(e.query("GET_ACTIVE_ITEMS"));
        e.dispatch("DID_GRAB_ITEM", {
            id: t.id,
            dragState: i
        });
        const l = d => {
            if (!d.isPrimary)
                return;
            d.stopPropagation(),
            d.preventDefault(),
            t.dragOffset = {
                x: d.pageX - o.x,
                y: d.pageY - o.y
            },
            t.dragOffset.x * t.dragOffset.x + t.dragOffset.y * t.dragOffset.y > 16 && !s && (s = !0,
            e.element.removeEventListener("click", e.ref.handleClick)),
            e.dispatch("DID_DRAG_ITEM", {
                id: t.id,
                dragState: i
            })
        }
          , a = d => {
            d.isPrimary && (t.dragOffset = {
                x: d.pageX - o.x,
                y: d.pageY - o.y
            },
            c())
        }
          , u = () => {
            c()
        }
          , c = () => {
            document.removeEventListener("pointercancel", u),
            document.removeEventListener("pointermove", l),
            document.removeEventListener("pointerup", a),
            e.dispatch("DID_DROP_ITEM", {
                id: t.id,
                dragState: i
            }),
            s && setTimeout( () => e.element.addEventListener("click", e.ref.handleClick), 0)
        }
        ;
        document.addEventListener("pointercancel", u),
        document.addEventListener("pointermove", l),
        document.addEventListener("pointerup", a)
    }
    ;
    e.element.addEventListener("pointerdown", r)
}
  , Of = Pe({
    DID_UPDATE_PANEL_HEIGHT: ({root: e, action: t}) => {
        e.height = t.height
    }
})
  , Df = Pe({
    DID_GRAB_ITEM: ({root: e, props: t}) => {
        t.dragOrigin = {
            x: e.translateX,
            y: e.translateY
        }
    }
    ,
    DID_DRAG_ITEM: ({root: e}) => {
        e.element.dataset.dragState = "drag"
    }
    ,
    DID_DROP_ITEM: ({root: e, props: t}) => {
        t.dragOffset = null,
        t.dragOrigin = null,
        e.element.dataset.dragState = "drop"
    }
}, ({root: e, actions: t, props: r, shouldOptimize: n}) => {
    e.element.dataset.dragState === "drop" && e.scaleX <= 1 && (e.element.dataset.dragState = "idle");
    let s = t.concat().filter(i => /^DID_/.test(i.type)).reverse().find(i => Ki[i.type]);
    s && s.type !== r.currentState && (r.currentState = s.type,
    e.element.dataset.filepondItemState = Ki[r.currentState] || "");
    const o = e.query("GET_ITEM_PANEL_ASPECT_RATIO") || e.query("GET_PANEL_ASPECT_RATIO");
    o ? n || (e.height = e.rect.element.width * o) : (Of({
        root: e,
        actions: t,
        props: r
    }),
    !e.height && e.ref.container.rect.element.height > 0 && (e.height = e.ref.container.rect.element.height)),
    n && (e.ref.panel.height = null),
    e.ref.panel.height = e.height
}
)
  , Pf = pe({
    create: Sf,
    write: Df,
    destroy: ({root: e, props: t}) => {
        e.element.removeEventListener("click", e.ref.handleClick),
        e.dispatch("RELEASE_ITEM", {
            query: t.id
        })
    }
    ,
    tag: "li",
    name: "item",
    mixins: {
        apis: ["id", "interactionMethod", "markedForRemoval", "spawnDate", "dragCenter", "dragOrigin", "dragOffset"],
        styles: ["translateX", "translateY", "scaleX", "scaleY", "opacity", "height"],
        animations: {
            scaleX: Zi,
            scaleY: Zi,
            translateX: Qi,
            translateY: Qi,
            opacity: {
                type: "tween",
                duration: 150
            }
        }
    }
});
var qs = (e, t) => Math.max(1, Math.floor((e + 1) / t));
const Ys = (e, t, r) => {
    if (!r)
        return;
    const n = e.rect.element.width
      , s = t.length;
    let o = null;
    if (s === 0 || r.top < t[0].rect.element.top)
        return -1;
    const l = t[0].rect.element
      , a = l.marginLeft + l.marginRight
      , u = l.width + a
      , c = qs(n, u);
    if (c === 1) {
        for (let h = 0; h < s; h++) {
            const p = t[h]
              , m = p.rect.outer.top + p.rect.element.height * .5;
            if (r.top < m)
                return h
        }
        return s
    }
    const d = l.marginTop + l.marginBottom
      , f = l.height + d;
    for (let h = 0; h < s; h++) {
        const p = h % c
          , m = Math.floor(h / c)
          , _ = p * u
          , g = m * f
          , E = g - l.marginTop
          , y = _ + u
          , b = g + f + l.marginBottom;
        if (r.top < b && r.top > E) {
            if (r.left < y)
                return h;
            h !== s - 1 ? o = h : o = null
        }
    }
    return o !== null ? o : s
}
  , an = {
    height: 0,
    width: 0,
    get getHeight() {
        return this.height
    },
    set setHeight(e) {
        (this.height === 0 || e === 0) && (this.height = e)
    },
    get getWidth() {
        return this.width
    },
    set setWidth(e) {
        (this.width === 0 || e === 0) && (this.width = e)
    },
    setDimensions: function(e, t) {
        (this.height === 0 || e === 0) && (this.height = e),
        (this.width === 0 || t === 0) && (this.width = t)
    }
}
  , Af = ({root: e}) => {
    he(e.element, "role", "list"),
    e.ref.lastItemSpanwDate = Date.now()
}
  , Lf = ({root: e, action: t}) => {
    const {id: r, index: n, interactionMethod: s} = t;
    e.ref.addIndex = n;
    const o = Date.now();
    let i = o
      , l = 1;
    if (s !== $e.NONE) {
        l = 0;
        const a = e.query("GET_ITEM_INSERT_INTERVAL")
          , u = o - e.ref.lastItemSpanwDate;
        i = u < a ? o + (a - u) : o
    }
    e.ref.lastItemSpanwDate = i,
    e.appendChildView(e.createChildView(Pf, {
        spawnDate: i,
        id: r,
        opacity: l,
        interactionMethod: s
    }), n)
}
  , Ji = (e, t, r, n=0, s=1) => {
    e.dragOffset ? (e.translateX = null,
    e.translateY = null,
    e.translateX = e.dragOrigin.x + e.dragOffset.x,
    e.translateY = e.dragOrigin.y + e.dragOffset.y,
    e.scaleX = 1.025,
    e.scaleY = 1.025) : (e.translateX = t,
    e.translateY = r,
    Date.now() > e.spawnDate && (e.opacity === 0 && Mf(e, t, r, n, s),
    e.scaleX = 1,
    e.scaleY = 1,
    e.opacity = 1))
}
  , Mf = (e, t, r, n, s) => {
    e.interactionMethod === $e.NONE ? (e.translateX = null,
    e.translateX = t,
    e.translateY = null,
    e.translateY = r) : e.interactionMethod === $e.DROP ? (e.translateX = null,
    e.translateX = t - n * 20,
    e.translateY = null,
    e.translateY = r - s * 10,
    e.scaleX = .8,
    e.scaleY = .8) : e.interactionMethod === $e.BROWSE ? (e.translateY = null,
    e.translateY = r - 30) : e.interactionMethod === $e.API && (e.translateX = null,
    e.translateX = t - 30,
    e.translateY = null)
}
  , Cf = ({root: e, action: t}) => {
    const {id: r} = t
      , n = e.childViews.find(s => s.id === r);
    n && (n.scaleX = .9,
    n.scaleY = .9,
    n.opacity = 0,
    n.markedForRemoval = !0)
}
  , ns = e => e.rect.element.height + e.rect.element.marginBottom * .5 + e.rect.element.marginTop * .5
  , xf = e => e.rect.element.width + e.rect.element.marginLeft * .5 + e.rect.element.marginRight * .5
  , Nf = ({root: e, action: t}) => {
    const {id: r, dragState: n} = t
      , s = e.query("GET_ITEM", {
        id: r
    })
      , o = e.childViews.find(_ => _.id === r)
      , i = e.childViews.length
      , l = n.getItemIndex(s);
    if (!o)
        return;
    const a = {
        x: o.dragOrigin.x + o.dragOffset.x + o.dragCenter.x,
        y: o.dragOrigin.y + o.dragOffset.y + o.dragCenter.y
    }
      , u = ns(o)
      , c = xf(o);
    let d = Math.floor(e.rect.outer.width / c);
    d > i && (d = i);
    const f = Math.floor(i / d + 1);
    an.setHeight = u * f,
    an.setWidth = c * d;
    var h = {
        y: Math.floor(a.y / u),
        x: Math.floor(a.x / c),
        getGridIndex: function() {
            return a.y > an.getHeight || a.y < 0 || a.x > an.getWidth || a.x < 0 ? l : this.y * d + this.x
        },
        getColIndex: function() {
            const g = e.query("GET_ACTIVE_ITEMS")
              , E = e.childViews.filter(w => w.rect.element.height)
              , y = g.map(w => E.find(x => x.id === w.id))
              , b = y.findIndex(w => w === o)
              , T = ns(o)
              , A = y.length;
            let C = A
              , R = 0
              , P = 0
              , N = 0;
            for (let w = 0; w < A; w++)
                if (R = ns(y[w]),
                N = P,
                P = N + R,
                a.y < P) {
                    if (b > w) {
                        if (a.y < N + T) {
                            C = w;
                            break
                        }
                        continue
                    }
                    C = w;
                    break
                }
            return C
        }
    };
    const p = d > 1 ? h.getGridIndex() : h.getColIndex();
    e.dispatch("MOVE_ITEM", {
        query: o,
        index: p
    });
    const m = n.getIndex();
    if (m === void 0 || m !== p) {
        if (n.setIndex(p),
        m === void 0)
            return;
        e.dispatch("DID_REORDER_ITEMS", {
            items: e.query("GET_ACTIVE_ITEMS"),
            origin: l,
            target: p
        })
    }
}
  , Ff = Pe({
    DID_ADD_ITEM: Lf,
    DID_REMOVE_ITEM: Cf,
    DID_DRAG_ITEM: Nf
})
  , Gf = ({root: e, props: t, actions: r, shouldOptimize: n}) => {
    Ff({
        root: e,
        props: t,
        actions: r
    });
    const {dragCoordinates: s} = t
      , o = e.rect.element.width
      , i = e.childViews.filter(y => y.rect.element.height)
      , l = e.query("GET_ACTIVE_ITEMS").map(y => i.find(b => b.id === y.id)).filter(y => y)
      , a = s ? Ys(e, l, s) : null
      , u = e.ref.addIndex || null;
    e.ref.addIndex = null;
    let c = 0
      , d = 0
      , f = 0;
    if (l.length === 0)
        return;
    const h = l[0].rect.element
      , p = h.marginTop + h.marginBottom
      , m = h.marginLeft + h.marginRight
      , _ = h.width + m
      , g = h.height + p
      , E = qs(o, _);
    if (E === 1) {
        let y = 0
          , b = 0;
        l.forEach( (T, A) => {
            if (a) {
                let P = A - a;
                P === -2 ? b = -p * .25 : P === -1 ? b = -p * .75 : P === 0 ? b = p * .75 : P === 1 ? b = p * .25 : b = 0
            }
            n && (T.translateX = null,
            T.translateY = null),
            T.markedForRemoval || Ji(T, 0, y + b);
            let R = (T.rect.element.height + p) * (T.markedForRemoval ? T.opacity : 1);
            y += R
        }
        )
    } else {
        let y = 0
          , b = 0;
        l.forEach( (T, A) => {
            A === a && (c = 1),
            A === u && (f += 1),
            T.markedForRemoval && T.opacity < .5 && (d -= 1);
            const C = A + f + c + d
              , R = C % E
              , P = Math.floor(C / E)
              , N = R * _
              , w = P * g
              , x = Math.sign(N - y)
              , V = Math.sign(w - b);
            y = N,
            b = w,
            !T.markedForRemoval && (n && (T.translateX = null,
            T.translateY = null),
            Ji(T, N, w, x, V))
        }
        )
    }
}
  , Uf = (e, t) => t.filter(r => r.data && r.data.id ? e.id === r.data.id : !0)
  , Bf = pe({
    create: Af,
    write: Gf,
    tag: "ul",
    name: "list",
    didWriteView: ({root: e}) => {
        e.childViews.filter(t => t.markedForRemoval && t.opacity === 0 && t.resting).forEach(t => {
            t._destroy(),
            e.removeChildView(t)
        }
        )
    }
    ,
    filterFrameActionsForChild: Uf,
    mixins: {
        apis: ["dragCoordinates"]
    }
})
  , kf = ({root: e, props: t}) => {
    e.ref.list = e.appendChildView(e.createChildView(Bf)),
    t.dragCoordinates = null,
    t.overflowing = !1
}
  , $f = ({root: e, props: t, action: r}) => {
    e.query("GET_ITEM_INSERT_LOCATION_FREEDOM") && (t.dragCoordinates = {
        left: r.position.scopeLeft - e.ref.list.rect.element.left,
        top: r.position.scopeTop - (e.rect.outer.top + e.rect.element.marginTop + e.rect.element.scrollTop)
    })
}
  , Vf = ({props: e}) => {
    e.dragCoordinates = null
}
  , zf = Pe({
    DID_DRAG: $f,
    DID_END_DRAG: Vf
})
  , qf = ({root: e, props: t, actions: r}) => {
    if (zf({
        root: e,
        props: t,
        actions: r
    }),
    e.ref.list.dragCoordinates = t.dragCoordinates,
    t.overflowing && !t.overflow && (t.overflowing = !1,
    e.element.dataset.state = "",
    e.height = null),
    t.overflow) {
        const n = Math.round(t.overflow);
        n !== e.height && (t.overflowing = !0,
        e.element.dataset.state = "overflow",
        e.height = n)
    }
}
  , Yf = pe({
    create: kf,
    write: qf,
    name: "list-scroller",
    mixins: {
        apis: ["overflow", "dragCoordinates"],
        styles: ["height", "translateY"],
        animations: {
            translateY: "spring"
        }
    }
})
  , He = (e, t, r, n="") => {
    r ? he(e, t, n) : e.removeAttribute(t)
}
  , Hf = e => {
    if (!(!e || e.value === "")) {
        try {
            e.value = ""
        } catch {}
        if (e.value) {
            const t = ut("form")
              , r = e.parentNode
              , n = e.nextSibling;
            t.appendChild(e),
            t.reset(),
            n ? r.insertBefore(e, n) : r.appendChild(e)
        }
    }
}
  , Wf = ({root: e, props: t}) => {
    e.element.id = `filepond--browser-${t.id}`,
    he(e.element, "name", e.query("GET_NAME")),
    he(e.element, "aria-controls", `filepond--assistant-${t.id}`),
    he(e.element, "aria-labelledby", `filepond--drop-label-${t.id}`),
    Fa({
        root: e,
        action: {
            value: e.query("GET_ACCEPTED_FILE_TYPES")
        }
    }),
    Ga({
        root: e,
        action: {
            value: e.query("GET_ALLOW_MULTIPLE")
        }
    }),
    Ua({
        root: e,
        action: {
            value: e.query("GET_ALLOW_DIRECTORIES_ONLY")
        }
    }),
    bs({
        root: e
    }),
    Ba({
        root: e,
        action: {
            value: e.query("GET_REQUIRED")
        }
    }),
    ka({
        root: e,
        action: {
            value: e.query("GET_CAPTURE_METHOD")
        }
    }),
    e.ref.handleChange = r => {
        if (!e.element.value)
            return;
        const n = Array.from(e.element.files).map(s => (s._relativePath = s.webkitRelativePath,
        s));
        setTimeout( () => {
            t.onload(n),
            Hf(e.element)
        }
        , 250)
    }
    ,
    e.element.addEventListener("change", e.ref.handleChange)
}
  , Fa = ({root: e, action: t}) => {
    e.query("GET_ALLOW_SYNC_ACCEPT_ATTRIBUTE") && He(e.element, "accept", !!t.value, t.value ? t.value.join(",") : "")
}
  , Ga = ({root: e, action: t}) => {
    He(e.element, "multiple", t.value)
}
  , Ua = ({root: e, action: t}) => {
    He(e.element, "webkitdirectory", t.value)
}
  , bs = ({root: e}) => {
    const t = e.query("GET_DISABLED")
      , r = e.query("GET_ALLOW_BROWSE")
      , n = t || !r;
    He(e.element, "disabled", n)
}
  , Ba = ({root: e, action: t}) => {
    t.value ? e.query("GET_TOTAL_ITEMS") === 0 && He(e.element, "required", !0) : He(e.element, "required", !1)
}
  , ka = ({root: e, action: t}) => {
    He(e.element, "capture", !!t.value, t.value === !0 ? "" : t.value)
}
  , eo = ({root: e}) => {
    const {element: t} = e;
    e.query("GET_TOTAL_ITEMS") > 0 ? (He(t, "required", !1),
    He(t, "name", !1)) : (He(t, "name", !0, e.query("GET_NAME")),
    e.query("GET_CHECK_VALIDITY") && t.setCustomValidity(""),
    e.query("GET_REQUIRED") && He(t, "required", !0))
}
  , jf = ({root: e}) => {
    e.query("GET_CHECK_VALIDITY") && e.element.setCustomValidity(e.query("GET_LABEL_INVALID_FIELD"))
}
  , Xf = pe({
    tag: "input",
    name: "browser",
    ignoreRect: !0,
    ignoreRectUpdate: !0,
    attributes: {
        type: "file"
    },
    create: Wf,
    destroy: ({root: e}) => {
        e.element.removeEventListener("change", e.ref.handleChange)
    }
    ,
    write: Pe({
        DID_LOAD_ITEM: eo,
        DID_REMOVE_ITEM: eo,
        DID_THROW_ITEM_INVALID: jf,
        DID_SET_DISABLED: bs,
        DID_SET_ALLOW_BROWSE: bs,
        DID_SET_ALLOW_DIRECTORIES_ONLY: Ua,
        DID_SET_ALLOW_MULTIPLE: Ga,
        DID_SET_ACCEPTED_FILE_TYPES: Fa,
        DID_SET_CAPTURE_METHOD: ka,
        DID_SET_REQUIRED: Ba
    })
})
  , to = {
    ENTER: 13,
    SPACE: 32
}
  , Qf = ({root: e, props: t}) => {
    const r = ut("label");
    he(r, "for", `filepond--browser-${t.id}`),
    he(r, "id", `filepond--drop-label-${t.id}`),
    e.ref.handleKeyDown = n => {
        (n.keyCode === to.ENTER || n.keyCode === to.SPACE) && (n.preventDefault(),
        e.ref.label.click())
    }
    ,
    e.ref.handleClick = n => {
        n.target === r || r.contains(n.target) || e.ref.label.click()
    }
    ,
    r.addEventListener("keydown", e.ref.handleKeyDown),
    e.element.addEventListener("click", e.ref.handleClick),
    $a(r, t.caption),
    e.appendChild(r),
    e.ref.label = r
}
  , $a = (e, t) => {
    e.innerHTML = t;
    const r = e.querySelector(".filepond--label-action");
    return r && he(r, "tabindex", "0"),
    t
}
  , Zf = pe({
    name: "drop-label",
    ignoreRect: !0,
    create: Qf,
    destroy: ({root: e}) => {
        e.ref.label.addEventListener("keydown", e.ref.handleKeyDown),
        e.element.removeEventListener("click", e.ref.handleClick)
    }
    ,
    write: Pe({
        DID_SET_LABEL_IDLE: ({root: e, action: t}) => {
            $a(e.ref.label, t.value)
        }
    }),
    mixins: {
        styles: ["opacity", "translateX", "translateY"],
        animations: {
            opacity: {
                type: "tween",
                duration: 150
            },
            translateX: "spring",
            translateY: "spring"
        }
    }
})
  , Kf = pe({
    name: "drip-blob",
    ignoreRect: !0,
    mixins: {
        styles: ["translateX", "translateY", "scaleX", "scaleY", "opacity"],
        animations: {
            scaleX: "spring",
            scaleY: "spring",
            translateX: "spring",
            translateY: "spring",
            opacity: {
                type: "tween",
                duration: 250
            }
        }
    }
})
  , Jf = ({root: e}) => {
    const t = e.rect.element.width * .5
      , r = e.rect.element.height * .5;
    e.ref.blob = e.appendChildView(e.createChildView(Kf, {
        opacity: 0,
        scaleX: 2.5,
        scaleY: 2.5,
        translateX: t,
        translateY: r
    }))
}
  , ep = ({root: e, action: t}) => {
    if (!e.ref.blob) {
        Jf({
            root: e
        });
        return
    }
    e.ref.blob.translateX = t.position.scopeLeft,
    e.ref.blob.translateY = t.position.scopeTop,
    e.ref.blob.scaleX = 1,
    e.ref.blob.scaleY = 1,
    e.ref.blob.opacity = 1
}
  , tp = ({root: e}) => {
    e.ref.blob && (e.ref.blob.opacity = 0)
}
  , rp = ({root: e}) => {
    e.ref.blob && (e.ref.blob.scaleX = 2.5,
    e.ref.blob.scaleY = 2.5,
    e.ref.blob.opacity = 0)
}
  , np = ({root: e, props: t, actions: r}) => {
    sp({
        root: e,
        props: t,
        actions: r
    });
    const {blob: n} = e.ref;
    r.length === 0 && n && n.opacity === 0 && (e.removeChildView(n),
    e.ref.blob = null)
}
  , sp = Pe({
    DID_DRAG: ep,
    DID_DROP: rp,
    DID_END_DRAG: tp
})
  , ip = pe({
    ignoreRect: !0,
    ignoreRectUpdate: !0,
    name: "drip",
    write: np
})
  , Va = (e, t) => {
    try {
        const r = new DataTransfer;
        t.forEach(n => {
            n instanceof File ? r.items.add(n) : r.items.add(new File([n],n.name,{
                type: n.type
            }))
        }
        ),
        e.files = r.files
    } catch {
        return !1
    }
    return !0
}
  , op = ({root: e}) => e.ref.fields = {}
  , Un = (e, t) => e.ref.fields[t]
  , Hs = e => {
    e.query("GET_ACTIVE_ITEMS").forEach(t => {
        e.ref.fields[t.id] && e.element.appendChild(e.ref.fields[t.id])
    }
    )
}
  , ro = ({root: e}) => Hs(e)
  , ap = ({root: e, action: t}) => {
    const s = !(e.query("GET_ITEM", t.id).origin === ge.LOCAL) && e.query("SHOULD_UPDATE_FILE_INPUT")
      , o = ut("input");
    o.type = s ? "file" : "hidden",
    o.name = e.query("GET_NAME"),
    e.ref.fields[t.id] = o,
    Hs(e)
}
  , lp = ({root: e, action: t}) => {
    const r = Un(e, t.id);
    if (!r || (t.serverFileReference !== null && (r.value = t.serverFileReference),
    !e.query("SHOULD_UPDATE_FILE_INPUT")))
        return;
    const n = e.query("GET_ITEM", t.id);
    Va(r, [n.file])
}
  , cp = ({root: e, action: t}) => {
    e.query("SHOULD_UPDATE_FILE_INPUT") && setTimeout( () => {
        const r = Un(e, t.id);
        r && Va(r, [t.file])
    }
    , 0)
}
  , up = ({root: e}) => {
    e.element.disabled = e.query("GET_DISABLED")
}
  , dp = ({root: e, action: t}) => {
    const r = Un(e, t.id);
    r && (r.parentNode && r.parentNode.removeChild(r),
    delete e.ref.fields[t.id])
}
  , fp = ({root: e, action: t}) => {
    const r = Un(e, t.id);
    r && (t.value === null ? r.removeAttribute("value") : r.type != "file" && (r.value = t.value),
    Hs(e))
}
  , pp = Pe({
    DID_SET_DISABLED: up,
    DID_ADD_ITEM: ap,
    DID_LOAD_ITEM: lp,
    DID_REMOVE_ITEM: dp,
    DID_DEFINE_VALUE: fp,
    DID_PREPARE_OUTPUT: cp,
    DID_REORDER_ITEMS: ro,
    DID_SORT_ITEMS: ro
})
  , hp = pe({
    tag: "fieldset",
    name: "data",
    create: op,
    write: pp,
    ignoreRect: !0
})
  , mp = e => "getRootNode"in e ? e.getRootNode() : document
  , gp = ["jpg", "jpeg", "png", "gif", "bmp", "webp", "svg", "tiff"]
  , _p = ["css", "csv", "html", "txt"]
  , Ep = {
    zip: "zip|compressed",
    epub: "application/epub+zip"
}
  , za = (e="") => (e = e.toLowerCase(),
gp.includes(e) ? "image/" + (e === "jpg" ? "jpeg" : e === "svg" ? "svg+xml" : e) : _p.includes(e) ? "text/" + e : Ep[e] || "")
  , Ws = e => new Promise( (t, r) => {
    const n = Sp(e);
    if (n.length && !vp(e))
        return t(n);
    yp(e).then(t)
}
)
  , vp = e => e.files ? e.files.length > 0 : !1
  , yp = e => new Promise( (t, r) => {
    const n = (e.items ? Array.from(e.items) : []).filter(s => Tp(s)).map(s => Ip(s));
    if (!n.length) {
        t(e.files ? Array.from(e.files) : []);
        return
    }
    Promise.all(n).then(s => {
        const o = [];
        s.forEach(i => {
            o.push.apply(o, i)
        }
        ),
        t(o.filter(i => i).map(i => (i._relativePath || (i._relativePath = i.webkitRelativePath),
        i)))
    }
    ).catch(console.error)
}
)
  , Tp = e => {
    if (qa(e)) {
        const t = js(e);
        if (t)
            return t.isFile || t.isDirectory
    }
    return e.kind === "file"
}
  , Ip = e => new Promise( (t, r) => {
    if (Rp(e)) {
        bp(js(e)).then(t).catch(r);
        return
    }
    t([e.getAsFile()])
}
)
  , bp = e => new Promise( (t, r) => {
    const n = [];
    let s = 0
      , o = 0;
    const i = () => {
        o === 0 && s === 0 && t(n)
    }
      , l = a => {
        s++;
        const u = a.createReader()
          , c = () => {
            u.readEntries(d => {
                if (d.length === 0) {
                    s--,
                    i();
                    return
                }
                d.forEach(f => {
                    f.isDirectory ? l(f) : (o++,
                    f.file(h => {
                        const p = wp(h);
                        f.fullPath && (p._relativePath = f.fullPath),
                        n.push(p),
                        o--,
                        i()
                    }
                    ))
                }
                ),
                c()
            }
            , r)
        }
        ;
        c()
    }
    ;
    l(e)
}
)
  , wp = e => {
    if (e.type.length)
        return e;
    const t = e.lastModifiedDate
      , r = e.name
      , n = za(Gn(e.name));
    return n.length && (e = e.slice(0, e.size, n),
    e.name = r,
    e.lastModifiedDate = t),
    e
}
  , Rp = e => qa(e) && (js(e) || {}).isDirectory
  , qa = e => "webkitGetAsEntry"in e
  , js = e => e.webkitGetAsEntry()
  , Sp = e => {
    let t = [];
    try {
        if (t = Dp(e),
        t.length)
            return t;
        t = Op(e)
    } catch {}
    return t
}
  , Op = e => {
    let t = e.getData("url");
    return typeof t == "string" && t.length ? [t] : []
}
  , Dp = e => {
    let t = e.getData("text/html");
    if (typeof t == "string" && t.length) {
        const r = t.match(/src\s*=\s*"(.+?)"/);
        if (r)
            return [r[1]]
    }
    return []
}
  , wn = []
  , xt = e => ({
    pageLeft: e.pageX,
    pageTop: e.pageY,
    scopeLeft: e.offsetX || e.layerX,
    scopeTop: e.offsetY || e.layerY
})
  , Pp = (e, t, r) => {
    const n = Ap(t)
      , s = {
        element: e,
        filterElement: r,
        state: null,
        ondrop: () => {}
        ,
        onenter: () => {}
        ,
        ondrag: () => {}
        ,
        onexit: () => {}
        ,
        onload: () => {}
        ,
        allowdrop: () => {}
    };
    return s.destroy = n.addListener(s),
    s
}
  , Ap = e => {
    const t = wn.find(n => n.element === e);
    if (t)
        return t;
    const r = Lp(e);
    return wn.push(r),
    r
}
  , Lp = e => {
    const t = []
      , r = {
        dragenter: Cp,
        dragover: xp,
        dragleave: Fp,
        drop: Np
    }
      , n = {};
    le(r, (o, i) => {
        n[o] = i(e, t),
        e.addEventListener(o, n[o], !1)
    }
    );
    const s = {
        element: e,
        addListener: o => (t.push(o),
        () => {
            t.splice(t.indexOf(o), 1),
            t.length === 0 && (wn.splice(wn.indexOf(s), 1),
            le(r, i => {
                e.removeEventListener(i, n[i], !1)
            }
            ))
        }
        )
    };
    return s
}
  , Mp = (e, t) => ("elementFromPoint"in e || (e = document),
e.elementFromPoint(t.x, t.y))
  , Xs = (e, t) => {
    const r = mp(t)
      , n = Mp(r, {
        x: e.pageX - window.pageXOffset,
        y: e.pageY - window.pageYOffset
    });
    return n === t || t.contains(n)
}
;
let Ya = null;
const ln = (e, t) => {
    try {
        e.dropEffect = t
    } catch {}
}
  , Cp = (e, t) => r => {
    r.preventDefault(),
    Ya = r.target,
    t.forEach(n => {
        const {element: s, onenter: o} = n;
        Xs(r, s) && (n.state = "enter",
        o(xt(r)))
    }
    )
}
  , xp = (e, t) => r => {
    r.preventDefault();
    const n = r.dataTransfer;
    Ws(n).then(s => {
        let o = !1;
        t.some(i => {
            const {filterElement: l, element: a, onenter: u, onexit: c, ondrag: d, allowdrop: f} = i;
            ln(n, "copy");
            const h = f(s);
            if (!h) {
                ln(n, "none");
                return
            }
            if (Xs(r, a)) {
                if (o = !0,
                i.state === null) {
                    i.state = "enter",
                    u(xt(r));
                    return
                }
                if (i.state = "over",
                l && !h) {
                    ln(n, "none");
                    return
                }
                d(xt(r))
            } else
                l && !o && ln(n, "none"),
                i.state && (i.state = null,
                c(xt(r)))
        }
        )
    }
    )
}
  , Np = (e, t) => r => {
    r.preventDefault();
    const n = r.dataTransfer;
    Ws(n).then(s => {
        t.forEach(o => {
            const {filterElement: i, element: l, ondrop: a, onexit: u, allowdrop: c} = o;
            if (o.state = null,
            !(i && !Xs(r, l))) {
                if (!c(s))
                    return u(xt(r));
                a(xt(r), s)
            }
        }
        )
    }
    )
}
  , Fp = (e, t) => r => {
    Ya === r.target && t.forEach(n => {
        const {onexit: s} = n;
        n.state = null,
        s(xt(r))
    }
    )
}
  , Gp = (e, t, r) => {
    e.classList.add("filepond--hopper");
    const {catchesDropsOnPage: n, requiresDropOnElement: s, filterItems: o=c => c} = r
      , i = Pp(e, n ? document.documentElement : e, s);
    let l = ""
      , a = "";
    i.allowdrop = c => t(o(c)),
    i.ondrop = (c, d) => {
        const f = o(d);
        if (!t(f)) {
            u.ondragend(c);
            return
        }
        a = "drag-drop",
        u.onload(f, c)
    }
    ,
    i.ondrag = c => {
        u.ondrag(c)
    }
    ,
    i.onenter = c => {
        a = "drag-over",
        u.ondragstart(c)
    }
    ,
    i.onexit = c => {
        a = "drag-exit",
        u.ondragend(c)
    }
    ;
    const u = {
        updateHopperState: () => {
            l !== a && (e.dataset.hopperState = a,
            l = a)
        }
        ,
        onload: () => {}
        ,
        ondragstart: () => {}
        ,
        ondrag: () => {}
        ,
        ondragend: () => {}
        ,
        destroy: () => {
            i.destroy()
        }
    };
    return u
}
;
let ws = !1;
const or = []
  , Ha = e => {
    const t = document.activeElement;
    if (t && (/textarea|input/i.test(t.nodeName) || t.getAttribute("contenteditable") === "true")) {
        let n = !1
          , s = t;
        for (; s !== document.body; ) {
            if (s.classList.contains("filepond--root")) {
                n = !0;
                break
            }
            s = s.parentNode
        }
        if (!n)
            return
    }
    Ws(e.clipboardData).then(n => {
        n.length && or.forEach(s => s(n))
    }
    )
}
  , Up = e => {
    or.includes(e) || (or.push(e),
    !ws && (ws = !0,
    document.addEventListener("paste", Ha)))
}
  , Bp = e => {
    ks(or, or.indexOf(e)),
    or.length === 0 && (document.removeEventListener("paste", Ha),
    ws = !1)
}
  , kp = () => {
    const e = r => {
        t.onload(r)
    }
      , t = {
        destroy: () => {
            Bp(e)
        }
        ,
        onload: () => {}
    };
    return Up(e),
    t
}
  , $p = ({root: e, props: t}) => {
    e.element.id = `filepond--assistant-${t.id}`,
    he(e.element, "role", "alert"),
    he(e.element, "aria-live", "polite"),
    he(e.element, "aria-relevant", "additions")
}
;
let no = null
  , so = null;
const ss = []
  , Bn = (e, t) => {
    e.element.textContent = t
}
  , Vp = e => {
    e.element.textContent = ""
}
  , Wa = (e, t, r) => {
    const n = e.query("GET_TOTAL_ITEMS");
    Bn(e, `${r} ${t}, ${n} ${n === 1 ? e.query("GET_LABEL_FILE_COUNT_SINGULAR") : e.query("GET_LABEL_FILE_COUNT_PLURAL")}`),
    clearTimeout(so),
    so = setTimeout( () => {
        Vp(e)
    }
    , 1500)
}
  , ja = e => e.element.parentNode.contains(document.activeElement)
  , zp = ({root: e, action: t}) => {
    if (!ja(e))
        return;
    e.element.textContent = "";
    const r = e.query("GET_ITEM", t.id);
    ss.push(r.filename),
    clearTimeout(no),
    no = setTimeout( () => {
        Wa(e, ss.join(", "), e.query("GET_LABEL_FILE_ADDED")),
        ss.length = 0
    }
    , 750)
}
  , qp = ({root: e, action: t}) => {
    if (!ja(e))
        return;
    const r = t.item;
    Wa(e, r.filename, e.query("GET_LABEL_FILE_REMOVED"))
}
  , Yp = ({root: e, action: t}) => {
    const n = e.query("GET_ITEM", t.id).filename
      , s = e.query("GET_LABEL_FILE_PROCESSING_COMPLETE");
    Bn(e, `${n} ${s}`)
}
  , io = ({root: e, action: t}) => {
    const n = e.query("GET_ITEM", t.id).filename
      , s = e.query("GET_LABEL_FILE_PROCESSING_ABORTED");
    Bn(e, `${n} ${s}`)
}
  , cn = ({root: e, action: t}) => {
    const n = e.query("GET_ITEM", t.id).filename;
    Bn(e, `${t.status.main} ${n} ${t.status.sub}`)
}
  , Hp = pe({
    create: $p,
    ignoreRect: !0,
    ignoreRectUpdate: !0,
    write: Pe({
        DID_LOAD_ITEM: zp,
        DID_REMOVE_ITEM: qp,
        DID_COMPLETE_ITEM_PROCESSING: Yp,
        DID_ABORT_ITEM_PROCESSING: io,
        DID_REVERT_ITEM_PROCESSING: io,
        DID_THROW_ITEM_REMOVE_ERROR: cn,
        DID_THROW_ITEM_LOAD_ERROR: cn,
        DID_THROW_ITEM_INVALID: cn,
        DID_THROW_ITEM_PROCESSING_ERROR: cn
    }),
    tag: "span",
    name: "assistant"
})
  , Xa = (e, t="-") => e.replace(new RegExp(`${t}.`,"g"), r => r.charAt(1).toUpperCase())
  , Qa = (e, t=16, r=!0) => {
    let n = Date.now()
      , s = null;
    return (...o) => {
        clearTimeout(s);
        const i = Date.now() - n
          , l = () => {
            n = Date.now(),
            e(...o)
        }
        ;
        i < t ? r || (s = setTimeout(l, t - i)) : l()
    }
}
  , Wp = 1e6
  , Rn = e => e.preventDefault()
  , jp = ({root: e, props: t}) => {
    const r = e.query("GET_ID");
    r && (e.element.id = r);
    const n = e.query("GET_CLASS_NAME");
    n && n.split(" ").filter(a => a.length).forEach(a => {
        e.element.classList.add(a)
    }
    ),
    e.ref.label = e.appendChildView(e.createChildView(Zf, {
        ...t,
        translateY: null,
        caption: e.query("GET_LABEL_IDLE")
    })),
    e.ref.list = e.appendChildView(e.createChildView(Yf, {
        translateY: null
    })),
    e.ref.panel = e.appendChildView(e.createChildView(Na, {
        name: "panel-root"
    })),
    e.ref.assistant = e.appendChildView(e.createChildView(Hp, {
        ...t
    })),
    e.ref.data = e.appendChildView(e.createChildView(hp, {
        ...t
    })),
    e.ref.measure = ut("div"),
    e.ref.measure.style.height = "100%",
    e.element.appendChild(e.ref.measure),
    e.ref.bounds = null,
    e.query("GET_STYLES").filter(a => !ct(a.value)).map( ({name: a, value: u}) => {
        e.element.dataset[a] = u
    }
    ),
    e.ref.widthPrevious = null,
    e.ref.widthUpdated = Qa( () => {
        e.ref.updateHistory = [],
        e.dispatch("DID_RESIZE_ROOT")
    }
    , 250),
    e.ref.previousAspectRatio = null,
    e.ref.updateHistory = [];
    const s = window.matchMedia("(pointer: fine) and (hover: hover)").matches
      , o = "PointerEvent"in window;
    e.query("GET_ALLOW_REORDER") && o && !s && (e.element.addEventListener("touchmove", Rn, {
        passive: !1
    }),
    e.element.addEventListener("gesturestart", Rn));
    const i = e.query("GET_CREDITS");
    if (i.length === 2) {
        const a = document.createElement("a");
        a.className = "filepond--credits",
        a.href = i[0],
        a.tabIndex = -1,
        a.target = "_blank",
        a.rel = "noopener noreferrer",
        a.textContent = i[1],
        e.element.appendChild(a),
        e.ref.credits = a
    }
}
  , Xp = ({root: e, props: t, actions: r}) => {
    if (eh({
        root: e,
        props: t,
        actions: r
    }),
    r.filter(A => /^DID_SET_STYLE_/.test(A.type)).filter(A => !ct(A.data.value)).map( ({type: A, data: C}) => {
        const R = Xa(A.substring(8).toLowerCase(), "_");
        e.element.dataset[R] = C.value,
        e.invalidateLayout()
    }
    ),
    e.rect.element.hidden)
        return;
    e.rect.element.width !== e.ref.widthPrevious && (e.ref.widthPrevious = e.rect.element.width,
    e.ref.widthUpdated());
    let n = e.ref.bounds;
    n || (n = e.ref.bounds = Kp(e),
    e.element.removeChild(e.ref.measure),
    e.ref.measure = null);
    const {hopper: s, label: o, list: i, panel: l} = e.ref;
    s && s.updateHopperState();
    const a = e.query("GET_PANEL_ASPECT_RATIO")
      , u = e.query("GET_ALLOW_MULTIPLE")
      , c = e.query("GET_TOTAL_ITEMS")
      , d = u ? e.query("GET_MAX_FILES") || Wp : 1
      , f = c === d
      , h = r.find(A => A.type === "DID_ADD_ITEM");
    if (f && h) {
        const A = h.data.interactionMethod;
        o.opacity = 0,
        u ? o.translateY = -40 : A === $e.API ? o.translateX = 40 : A === $e.BROWSE ? o.translateY = 40 : o.translateY = 30
    } else
        f || (o.opacity = 1,
        o.translateX = 0,
        o.translateY = 0);
    const p = Qp(e)
      , m = Zp(e)
      , _ = o.rect.element.height
      , g = !u || f ? 0 : _
      , E = f ? i.rect.element.marginTop : 0
      , y = c === 0 ? 0 : i.rect.element.marginBottom
      , b = g + E + m.visual + y
      , T = g + E + m.bounds + y;
    if (i.translateY = Math.max(0, g - i.rect.element.marginTop) - p.top,
    a) {
        const A = e.rect.element.width
          , C = A * a;
        a !== e.ref.previousAspectRatio && (e.ref.previousAspectRatio = a,
        e.ref.updateHistory = []);
        const R = e.ref.updateHistory;
        R.push(A);
        const P = 2;
        if (R.length > P * 2) {
            const w = R.length
              , x = w - 10;
            let V = 0;
            for (let S = w; S >= x; S--)
                if (R[S] === R[S - 2] && V++,
                V >= P)
                    return
        }
        l.scalable = !1,
        l.height = C;
        const N = C - g - (y - p.bottom) - (f ? E : 0);
        m.visual > N ? i.overflow = N : i.overflow = null,
        e.height = C
    } else if (n.fixedHeight) {
        l.scalable = !1;
        const A = n.fixedHeight - g - (y - p.bottom) - (f ? E : 0);
        m.visual > A ? i.overflow = A : i.overflow = null
    } else if (n.cappedHeight) {
        const A = b >= n.cappedHeight
          , C = Math.min(n.cappedHeight, b);
        l.scalable = !0,
        l.height = A ? C : C - p.top - p.bottom;
        const R = C - g - (y - p.bottom) - (f ? E : 0);
        b > n.cappedHeight && m.visual > R ? i.overflow = R : i.overflow = null,
        e.height = Math.min(n.cappedHeight, T - p.top - p.bottom)
    } else {
        const A = c > 0 ? p.top + p.bottom : 0;
        l.scalable = !0,
        l.height = Math.max(_, b - A),
        e.height = Math.max(_, T - A)
    }
    e.ref.credits && l.heightCurrent && (e.ref.credits.style.transform = `translateY(${l.heightCurrent}px)`)
}
  , Qp = e => {
    const t = e.ref.list.childViews[0].childViews[0];
    return t ? {
        top: t.rect.element.marginTop,
        bottom: t.rect.element.marginBottom
    } : {
        top: 0,
        bottom: 0
    }
}
  , Zp = e => {
    let t = 0
      , r = 0;
    const n = e.ref.list
      , s = n.childViews[0]
      , o = s.childViews.filter(E => E.rect.element.height)
      , i = e.query("GET_ACTIVE_ITEMS").map(E => o.find(y => y.id === E.id)).filter(E => E);
    if (i.length === 0)
        return {
            visual: t,
            bounds: r
        };
    const l = s.rect.element.width
      , a = Ys(s, i, n.dragCoordinates)
      , u = i[0].rect.element
      , c = u.marginTop + u.marginBottom
      , d = u.marginLeft + u.marginRight
      , f = u.width + d
      , h = u.height + c
      , p = typeof a < "u" && a >= 0 ? 1 : 0
      , m = i.find(E => E.markedForRemoval && E.opacity < .45) ? -1 : 0
      , _ = i.length + p + m
      , g = qs(l, f);
    return g === 1 ? i.forEach(E => {
        const y = E.rect.element.height + c;
        r += y,
        t += y * E.opacity
    }
    ) : (r = Math.ceil(_ / g) * h,
    t = r),
    {
        visual: t,
        bounds: r
    }
}
  , Kp = e => {
    const t = e.ref.measureHeight || null;
    return {
        cappedHeight: parseInt(e.style.maxHeight, 10) || null,
        fixedHeight: t === 0 ? null : t
    }
}
  , Qs = (e, t) => {
    const r = e.query("GET_ALLOW_REPLACE")
      , n = e.query("GET_ALLOW_MULTIPLE")
      , s = e.query("GET_TOTAL_ITEMS");
    let o = e.query("GET_MAX_FILES");
    const i = t.length;
    return !n && i > 1 ? (e.dispatch("DID_THROW_MAX_FILES", {
        source: t,
        error: de("warning", 0, "Max files")
    }),
    !0) : (o = n ? o : 1,
    !n && r ? !1 : _r(o) && s + i > o ? (e.dispatch("DID_THROW_MAX_FILES", {
        source: t,
        error: de("warning", 0, "Max files")
    }),
    !0) : !1)
}
  , Jp = (e, t, r) => {
    const n = e.childViews[0];
    return Ys(n, t, {
        left: r.scopeLeft - n.rect.element.left,
        top: r.scopeTop - (e.rect.outer.top + e.rect.element.marginTop + e.rect.element.scrollTop)
    })
}
  , oo = e => {
    const t = e.query("GET_ALLOW_DROP")
      , r = e.query("GET_DISABLED")
      , n = t && !r;
    if (n && !e.ref.hopper) {
        const s = Gp(e.element, o => {
            const i = e.query("GET_BEFORE_DROP_FILE") || ( () => !0);
            return e.query("GET_DROP_VALIDATION") ? o.every(a => Ut("ALLOW_HOPPER_ITEM", a, {
                query: e.query
            }).every(u => u === !0) && i(a)) : !0
        }
        , {
            filterItems: o => {
                const i = e.query("GET_IGNORED_FILES");
                return o.filter(l => Ct(l) ? !i.includes(l.name.toLowerCase()) : !0)
            }
            ,
            catchesDropsOnPage: e.query("GET_DROP_ON_PAGE"),
            requiresDropOnElement: e.query("GET_DROP_ON_ELEMENT")
        });
        s.onload = (o, i) => {
            const a = e.ref.list.childViews[0].childViews.filter(c => c.rect.element.height)
              , u = e.query("GET_ACTIVE_ITEMS").map(c => a.find(d => d.id === c.id)).filter(c => c);
            ze("ADD_ITEMS", o, {
                dispatch: e.dispatch
            }).then(c => {
                if (Qs(e, c))
                    return !1;
                e.dispatch("ADD_ITEMS", {
                    items: c,
                    index: Jp(e.ref.list, u, i),
                    interactionMethod: $e.DROP
                })
            }
            ),
            e.dispatch("DID_DROP", {
                position: i
            }),
            e.dispatch("DID_END_DRAG", {
                position: i
            })
        }
        ,
        s.ondragstart = o => {
            e.dispatch("DID_START_DRAG", {
                position: o
            })
        }
        ,
        s.ondrag = Qa(o => {
            e.dispatch("DID_DRAG", {
                position: o
            })
        }
        ),
        s.ondragend = o => {
            e.dispatch("DID_END_DRAG", {
                position: o
            })
        }
        ,
        e.ref.hopper = s,
        e.ref.drip = e.appendChildView(e.createChildView(ip))
    } else
        !n && e.ref.hopper && (e.ref.hopper.destroy(),
        e.ref.hopper = null,
        e.removeChildView(e.ref.drip))
}
  , ao = (e, t) => {
    const r = e.query("GET_ALLOW_BROWSE")
      , n = e.query("GET_DISABLED")
      , s = r && !n;
    s && !e.ref.browser ? e.ref.browser = e.appendChildView(e.createChildView(Xf, {
        ...t,
        onload: o => {
            ze("ADD_ITEMS", o, {
                dispatch: e.dispatch
            }).then(i => {
                if (Qs(e, i))
                    return !1;
                e.dispatch("ADD_ITEMS", {
                    items: i,
                    index: -1,
                    interactionMethod: $e.BROWSE
                })
            }
            )
        }
    }), 0) : !s && e.ref.browser && (e.removeChildView(e.ref.browser),
    e.ref.browser = null)
}
  , lo = e => {
    const t = e.query("GET_ALLOW_PASTE")
      , r = e.query("GET_DISABLED")
      , n = t && !r;
    n && !e.ref.paster ? (e.ref.paster = kp(),
    e.ref.paster.onload = s => {
        ze("ADD_ITEMS", s, {
            dispatch: e.dispatch
        }).then(o => {
            if (Qs(e, o))
                return !1;
            e.dispatch("ADD_ITEMS", {
                items: o,
                index: -1,
                interactionMethod: $e.PASTE
            })
        }
        )
    }
    ) : !n && e.ref.paster && (e.ref.paster.destroy(),
    e.ref.paster = null)
}
  , eh = Pe({
    DID_SET_ALLOW_BROWSE: ({root: e, props: t}) => {
        ao(e, t)
    }
    ,
    DID_SET_ALLOW_DROP: ({root: e}) => {
        oo(e)
    }
    ,
    DID_SET_ALLOW_PASTE: ({root: e}) => {
        lo(e)
    }
    ,
    DID_SET_DISABLED: ({root: e, props: t}) => {
        oo(e),
        lo(e),
        ao(e, t),
        e.query("GET_DISABLED") ? e.element.dataset.disabled = "disabled" : e.element.removeAttribute("data-disabled")
    }
})
  , th = pe({
    name: "root",
    read: ({root: e}) => {
        e.ref.measure && (e.ref.measureHeight = e.ref.measure.offsetHeight)
    }
    ,
    create: jp,
    write: Xp,
    destroy: ({root: e}) => {
        e.ref.paster && e.ref.paster.destroy(),
        e.ref.hopper && e.ref.hopper.destroy(),
        e.element.removeEventListener("touchmove", Rn),
        e.element.removeEventListener("gesturestart", Rn)
    }
    ,
    mixins: {
        styles: ["height"]
    }
})
  , rh = (e={}) => {
    let t = null;
    const r = bn()
      , n = _u(rd(r), [Td, id(r)], [Hd, sd(r)]);
    n.dispatch("SET_OPTIONS", {
        options: e
    });
    const s = () => {
        document.hidden || n.dispatch("KICK")
    }
    ;
    document.addEventListener("visibilitychange", s);
    let o = null
      , i = !1
      , l = !1
      , a = null
      , u = null;
    const c = () => {
        i || (i = !0),
        clearTimeout(o),
        o = setTimeout( () => {
            i = !1,
            a = null,
            u = null,
            l && (l = !1,
            n.dispatch("DID_STOP_RESIZE"))
        }
        , 500)
    }
    ;
    window.addEventListener("resize", c);
    const d = th(n, {
        id: Bs()
    });
    let f = !1
      , h = !1;
    const p = {
        _read: () => {
            i && (u = window.innerWidth,
            a || (a = u),
            !l && u !== a && (n.dispatch("DID_START_RESIZE"),
            l = !0)),
            h && f && (f = d.element.offsetParent === null),
            !f && (d._read(),
            h = d.rect.element.hidden)
        }
        ,
        _write: O => {
            const M = n.processActionQueue().filter(F => !/^SET_/.test(F.type));
            f && !M.length || (E(M),
            f = d._write(O, M, l),
            ld(n.query("GET_ITEMS")),
            f && n.processDispatchQueue())
        }
    }
      , m = O => M => {
        const F = {
            type: O
        };
        if (!M)
            return F;
        if (M.hasOwnProperty("error") && (F.error = M.error ? {
            ...M.error
        } : null),
        M.status && (F.status = {
            ...M.status
        }),
        M.file && (F.output = M.file),
        M.source)
            F.file = M.source;
        else if (M.item || M.id) {
            const G = M.item ? M.item : n.query("GET_ITEM", M.id);
            F.file = G ? Le(G) : null
        }
        return M.items && (F.items = M.items.map(Le)),
        /progress/.test(O) && (F.progress = M.progress),
        M.hasOwnProperty("origin") && M.hasOwnProperty("target") && (F.origin = M.origin,
        F.target = M.target),
        F
    }
      , _ = {
        DID_DESTROY: m("destroy"),
        DID_INIT: m("init"),
        DID_THROW_MAX_FILES: m("warning"),
        DID_INIT_ITEM: m("initfile"),
        DID_START_ITEM_LOAD: m("addfilestart"),
        DID_UPDATE_ITEM_LOAD_PROGRESS: m("addfileprogress"),
        DID_LOAD_ITEM: m("addfile"),
        DID_THROW_ITEM_INVALID: [m("error"), m("addfile")],
        DID_THROW_ITEM_LOAD_ERROR: [m("error"), m("addfile")],
        DID_THROW_ITEM_REMOVE_ERROR: [m("error"), m("removefile")],
        DID_PREPARE_OUTPUT: m("preparefile"),
        DID_START_ITEM_PROCESSING: m("processfilestart"),
        DID_UPDATE_ITEM_PROCESS_PROGRESS: m("processfileprogress"),
        DID_ABORT_ITEM_PROCESSING: m("processfileabort"),
        DID_COMPLETE_ITEM_PROCESSING: m("processfile"),
        DID_COMPLETE_ITEM_PROCESSING_ALL: m("processfiles"),
        DID_REVERT_ITEM_PROCESSING: m("processfilerevert"),
        DID_THROW_ITEM_PROCESSING_ERROR: [m("error"), m("processfile")],
        DID_REMOVE_ITEM: m("removefile"),
        DID_UPDATE_ITEMS: m("updatefiles"),
        DID_ACTIVATE_ITEM: m("activatefile"),
        DID_REORDER_ITEMS: m("reorderfiles")
    }
      , g = O => {
        const M = {
            pond: L,
            ...O
        };
        delete M.type,
        d.element.dispatchEvent(new CustomEvent(`FilePond:${O.type}`,{
            detail: M,
            bubbles: !0,
            cancelable: !0,
            composed: !0
        }));
        const F = [];
        O.hasOwnProperty("error") && F.push(O.error),
        O.hasOwnProperty("file") && F.push(O.file);
        const G = ["type", "error", "file"];
        Object.keys(O).filter(q => !G.includes(q)).forEach(q => F.push(O[q])),
        L.fire(O.type, ...F);
        const K = n.query(`GET_ON${O.type.toUpperCase()}`);
        K && K(...F)
    }
      , E = O => {
        O.length && O.filter(M => _[M.type]).forEach(M => {
            const F = _[M.type];
            (Array.isArray(F) ? F : [F]).forEach(G => {
                M.type === "DID_INIT_ITEM" ? g(G(M.data)) : setTimeout( () => {
                    g(G(M.data))
                }
                , 0)
            }
            )
        }
        )
    }
      , y = O => n.dispatch("SET_OPTIONS", {
        options: O
    })
      , b = O => n.query("GET_ACTIVE_ITEM", O)
      , T = O => new Promise( (M, F) => {
        n.dispatch("REQUEST_ITEM_PREPARE", {
            query: O,
            success: G => {
                M(G)
            }
            ,
            failure: G => {
                F(G)
            }
        })
    }
    )
      , A = (O, M={}) => new Promise( (F, G) => {
        P([{
            source: O,
            options: M
        }], {
            index: M.index
        }).then(K => F(K && K[0])).catch(G)
    }
    )
      , C = O => O.file && O.id
      , R = (O, M) => (typeof O == "object" && !C(O) && !M && (M = O,
    O = void 0),
    n.dispatch("REMOVE_ITEM", {
        ...M,
        query: O
    }),
    n.query("GET_ACTIVE_ITEM", O) === null)
      , P = (...O) => new Promise( (M, F) => {
        const G = []
          , K = {};
        if (Cn(O[0]))
            G.push.apply(G, O[0]),
            Object.assign(K, O[1] || {});
        else {
            const q = O[O.length - 1];
            typeof q == "object" && !(q instanceof Blob) && Object.assign(K, O.pop()),
            G.push(...O)
        }
        n.dispatch("ADD_ITEMS", {
            items: G,
            index: K.index,
            interactionMethod: $e.API,
            success: M,
            failure: F
        })
    }
    )
      , N = () => n.query("GET_ACTIVE_ITEMS")
      , w = O => new Promise( (M, F) => {
        n.dispatch("REQUEST_ITEM_PROCESSING", {
            query: O,
            success: G => {
                M(G)
            }
            ,
            failure: G => {
                F(G)
            }
        })
    }
    )
      , x = (...O) => {
        const M = Array.isArray(O[0]) ? O[0] : O
          , F = M.length ? M : N();
        return Promise.all(F.map(T))
    }
      , V = (...O) => {
        const M = Array.isArray(O[0]) ? O[0] : O;
        if (!M.length) {
            const F = N().filter(G => !(G.status === H.IDLE && G.origin === ge.LOCAL) && G.status !== H.PROCESSING && G.status !== H.PROCESSING_COMPLETE && G.status !== H.PROCESSING_REVERT_ERROR);
            return Promise.all(F.map(w))
        }
        return Promise.all(M.map(w))
    }
      , S = (...O) => {
        const M = Array.isArray(O[0]) ? O[0] : O;
        let F;
        typeof M[M.length - 1] == "object" ? F = M.pop() : Array.isArray(O[0]) && (F = O[1]);
        const G = N();
        return M.length ? M.map(q => Dt(q) ? G[q] ? G[q].id : null : q).filter(q => q).map(q => R(q, F)) : Promise.all(G.map(q => R(q, F)))
    }
      , L = {
        ...Fn(),
        ...p,
        ...nd(n, r),
        setOptions: y,
        addFile: A,
        addFiles: P,
        getFile: b,
        processFile: w,
        prepareFile: T,
        removeFile: R,
        moveFile: (O, M) => n.dispatch("MOVE_ITEM", {
            query: O,
            index: M
        }),
        getFiles: N,
        processFiles: V,
        removeFiles: S,
        prepareFiles: x,
        sort: O => n.dispatch("SORT", {
            compare: O
        }),
        browse: () => {
            var O = d.element.querySelector("input[type=file]");
            O && O.click()
        }
        ,
        destroy: () => {
            L.fire("destroy", d.element),
            n.dispatch("ABORT_ALL"),
            d._destroy(),
            window.removeEventListener("resize", c),
            document.removeEventListener("visibilitychange", s),
            n.dispatch("DID_DESTROY")
        }
        ,
        insertBefore: O => Li(d.element, O),
        insertAfter: O => Mi(d.element, O),
        appendTo: O => O.appendChild(d.element),
        replaceElement: O => {
            Li(d.element, O),
            O.parentNode.removeChild(O),
            t = O
        }
        ,
        restoreElement: () => {
            t && (Mi(t, d.element),
            d.element.parentNode.removeChild(d.element),
            t = null)
        }
        ,
        isAttachedTo: O => d.element === O || t === O,
        element: {
            get: () => d.element
        },
        status: {
            get: () => n.query("GET_STATUS")
        }
    };
    return n.dispatch("DID_INIT"),
    Tt(L)
}
  , Za = (e={}) => {
    const t = {};
    return le(bn(), (n, s) => {
        t[n] = s[0]
    }
    ),
    rh({
        ...t,
        ...e
    })
}
  , nh = e => e.charAt(0).toLowerCase() + e.slice(1)
  , sh = e => Xa(e.replace(/^data-/, ""))
  , Ka = (e, t) => {
    le(t, (r, n) => {
        le(e, (s, o) => {
            const i = new RegExp(r);
            if (!i.test(s) || (delete e[s],
            n === !1))
                return;
            if (De(n)) {
                e[n] = o;
                return
            }
            const a = n.group;
            Ee(n) && !e[a] && (e[a] = {}),
            e[a][nh(s.replace(i, ""))] = o
        }
        ),
        n.mapping && Ka(e[n.group], n.mapping)
    }
    )
}
  , ih = (e, t={}) => {
    const r = [];
    le(e.attributes, s => {
        r.push(e.attributes[s])
    }
    );
    const n = r.filter(s => s.name).reduce( (s, o) => {
        const i = he(e, o.name);
        return s[sh(o.name)] = i === o.name ? !0 : i,
        s
    }
    , {});
    return Ka(n, t),
    n
}
  , oh = (e, t={}) => {
    const r = {
        "^class$": "className",
        "^multiple$": "allowMultiple",
        "^capture$": "captureMethod",
        "^webkitdirectory$": "allowDirectoriesOnly",
        "^server": {
            group: "server",
            mapping: {
                "^process": {
                    group: "process"
                },
                "^revert": {
                    group: "revert"
                },
                "^fetch": {
                    group: "fetch"
                },
                "^restore": {
                    group: "restore"
                },
                "^load": {
                    group: "load"
                }
            }
        },
        "^type$": !1,
        "^files$": !1
    };
    Ut("SET_ATTRIBUTE_TO_OPTION_MAP", r);
    const n = {
        ...t
    }
      , s = ih(e.nodeName === "FIELDSET" ? e.querySelector("input[type=file]") : e, r);
    Object.keys(s).forEach(i => {
        Ee(s[i]) ? (Ee(n[i]) || (n[i] = {}),
        Object.assign(n[i], s[i])) : n[i] = s[i]
    }
    ),
    n.files = (t.files || []).concat(Array.from(e.querySelectorAll("input:not([type=file])")).map(i => ({
        source: i.value,
        options: {
            type: i.dataset.type
        }
    })));
    const o = Za(n);
    return e.files && Array.from(e.files).forEach(i => {
        o.addFile(i)
    }
    ),
    o.replaceElement(e),
    o
}
  , ah = (...e) => gu(e[0]) ? oh(...e) : Za(...e)
  , lh = ["fire", "_read", "_write"]
  , co = e => {
    const t = {};
    return ya(e, t, lh),
    t
}
  , ch = (e, t) => e.replace(/(?:{([a-zA-Z]+)})/g, (r, n) => t[n])
  , uh = e => {
    const t = new Blob(["(", e.toString(), ")()"],{
        type: "application/javascript"
    })
      , r = URL.createObjectURL(t)
      , n = new Worker(r);
    return {
        transfer: (s, o) => {}
        ,
        post: (s, o, i) => {
            const l = Bs();
            n.onmessage = a => {
                a.data.id === l && o(a.data.message)
            }
            ,
            n.postMessage({
                id: l,
                message: s
            }, i)
        }
        ,
        terminate: () => {
            n.terminate(),
            URL.revokeObjectURL(r)
        }
    }
}
  , dh = e => new Promise( (t, r) => {
    const n = new Image;
    n.onload = () => {
        t(n)
    }
    ,
    n.onerror = s => {
        r(s)
    }
    ,
    n.src = e
}
)
  , Ja = (e, t) => {
    const r = e.slice(0, e.size, e.type);
    return r.lastModifiedDate = e.lastModifiedDate,
    r.name = t,
    r
}
  , fh = e => Ja(e, e.name)
  , uo = []
  , ph = e => {
    if (uo.includes(e))
        return;
    uo.push(e);
    const t = e({
        addFilter: ud,
        utils: {
            Type: D,
            forin: le,
            isString: De,
            isFile: Ct,
            toNaturalFileSize: Ma,
            replaceInString: ch,
            getExtensionFromFilename: Gn,
            getFilenameWithoutExtension: Pa,
            guesstimateMimeType: za,
            getFileFromBlob: ur,
            getFilenameFromURL: Hr,
            createRoute: Pe,
            createWorker: uh,
            createView: pe,
            createItemAPI: Le,
            loadImage: dh,
            copyFile: fh,
            renameFile: Ja,
            createBlob: Sa,
            applyFilterChain: ze,
            text: fe,
            getNumericAspectRatioFromString: ba
        },
        views: {
            fileActionButton: La
        }
    });
    dd(t.options)
}
  , hh = () => Object.prototype.toString.call(window.operamini) === "[object OperaMini]"
  , mh = () => "Promise"in window
  , gh = () => "slice"in Blob.prototype
  , _h = () => "URL"in window && "createObjectURL"in window.URL
  , Eh = () => "visibilityState"in document
  , vh = () => "performance"in window
  , yh = () => "supports"in (window.CSS || {})
  , Th = () => /MSIE|Trident/.test(window.navigator.userAgent)
  , Rs = ( () => {
    const e = ha() && !hh() && Eh() && mh() && gh() && _h() && vh() && (yh() || Th());
    return () => e
}
)()
  , ht = {
    apps: []
}
  , Ih = "filepond"
  , Bt = () => {}
;
let fo = {}
  , hn = Bt
  , is = Bt
  , po = Bt
  , ho = Bt
  , Sn = Bt
  , mo = Bt
  , go = Bt;
if (Rs()) {
    Vu( () => {
        ht.apps.forEach(r => r._read())
    }
    , r => {
        ht.apps.forEach(n => n._write(r))
    }
    );
    const e = () => {
        document.dispatchEvent(new CustomEvent("FilePond:loaded",{
            detail: {
                supported: Rs,
                create: hn,
                destroy: is,
                parse: po,
                find: ho,
                registerPlugin: Sn,
                setOptions: go
            }
        })),
        document.removeEventListener("DOMContentLoaded", e)
    }
    ;
    document.readyState !== "loading" ? setTimeout( () => e(), 0) : document.addEventListener("DOMContentLoaded", e);
    const t = () => le(bn(), (r, n) => {
        fo[r] = n[1]
    }
    );
    fo = {},
    t(),
    hn = (...r) => {
        const n = ah(...r);
        return n.on("destroy", is),
        ht.apps.push(n),
        co(n)
    }
    ,
    is = r => {
        const n = ht.apps.findIndex(s => s.isAttachedTo(r));
        return n >= 0 ? (ht.apps.splice(n, 1)[0].restoreElement(),
        !0) : !1
    }
    ,
    po = r => Array.from(r.querySelectorAll(`.${Ih}`)).filter(o => !ht.apps.find(i => i.isAttachedTo(o))).map(o => hn(o)),
    ho = r => {
        const n = ht.apps.find(s => s.isAttachedTo(r));
        return n ? co(n) : null
    }
    ,
    Sn = (...r) => {
        r.forEach(ph),
        t()
    }
    ,
    mo = () => {
        const r = {};
        return le(bn(), (n, s) => {
            r[n] = s[0]
        }
        ),
        r
    }
    ,
    go = r => (Ee(r) && (ht.apps.forEach(n => {
        n.setOptions(r)
    }
    ),
    fd(r)),
    mo())
}
var bh = Z('<div class="filepond--wrapper"><input type="file"></div>');
function wh(e, t) {
    const r = Oe(t, ["children", "$$slots", "$$events", "$$legacy"]);
    et(t, !1);
    const n = Sn
      , s = Rs();
    let o = j(), i, l = Y(t, "class", 12, void 0), a = Y(t, "id", 12, void 0), u = Y(t, "name", 12, void 0), c = Y(t, "allowMultiple", 12, void 0), d = Y(t, "required", 12, void 0), f = Y(t, "captureMethod", 12, void 0), h = Y(t, "acceptedFileTypes", 12, void 0);
    const p = () => {}
    ;
    let m = Y(t, "addFile", 12, p)
      , _ = Y(t, "addFiles", 12, p)
      , g = Y(t, "browse", 12, p)
      , E = Y(t, "fireSync", 12, p)
      , y = Y(t, "getFile", 12, p)
      , b = Y(t, "getFiles", 12, p)
      , T = Y(t, "moveFile", 12, p)
      , A = Y(t, "prepareFile", 12, p)
      , C = Y(t, "prepareFiles", 12, p)
      , R = Y(t, "processFile", 12, p)
      , P = Y(t, "processFiles", 12, p)
      , N = Y(t, "removeFile", 12, p)
      , w = Y(t, "removeFiles", 12, p)
      , x = Y(t, "sort", 12, p);
    Yc( () => {
        s && (i ? i.setOptions(r) : (i = hn(v(o), {
            ...r
        }),
        m(i.addFile),
        _(i.addFiles),
        N(i.removeFile),
        w(i.removeFiles),
        g(i.browse),
        E(i.fireSync),
        y(i.getFile),
        b(i.getFiles),
        T(i.moveFile),
        A(i.prepareFile),
        C(i.prepareFiles),
        R(i.processFile),
        P(i.processFiles),
        x(i.sort)))
    }
    ),
    ua( () => {
        i && (i.destroy(),
        i = void 0)
    }
    ),
    dt();
    var V = bh()
      , S = B(V);
    return la(S, L => I(o, L), () => v(o)),
    _e( () => {
        gt(S, "id", a()),
        gt(S, "name", u()),
        Fs(S, l()),
        gt(S, "accept", h()),
        S.multiple = c(),
        S.required = d(),
        gt(S, "capture", f())
    }
    ),
    U(e, V),
    vi(t, "registerPlugin", n),
    vi(t, "isSupported", s),
    tt({
        registerPlugin: n,
        isSupported: s,
        get class() {
            return l()
        },
        set class(L) {
            l(L),
            oe()
        },
        get id() {
            return a()
        },
        set id(L) {
            a(L),
            oe()
        },
        get name() {
            return u()
        },
        set name(L) {
            u(L),
            oe()
        },
        get allowMultiple() {
            return c()
        },
        set allowMultiple(L) {
            c(L),
            oe()
        },
        get required() {
            return d()
        },
        set required(L) {
            d(L),
            oe()
        },
        get captureMethod() {
            return f()
        },
        set captureMethod(L) {
            f(L),
            oe()
        },
        get acceptedFileTypes() {
            return h()
        },
        set acceptedFileTypes(L) {
            h(L),
            oe()
        },
        get addFile() {
            return m()
        },
        set addFile(L) {
            m(L),
            oe()
        },
        get addFiles() {
            return _()
        },
        set addFiles(L) {
            _(L),
            oe()
        },
        get browse() {
            return g()
        },
        set browse(L) {
            g(L),
            oe()
        },
        get fireSync() {
            return E()
        },
        set fireSync(L) {
            E(L),
            oe()
        },
        get getFile() {
            return y()
        },
        set getFile(L) {
            y(L),
            oe()
        },
        get getFiles() {
            return b()
        },
        set getFiles(L) {
            b(L),
            oe()
        },
        get moveFile() {
            return T()
        },
        set moveFile(L) {
            T(L),
            oe()
        },
        get prepareFile() {
            return A()
        },
        set prepareFile(L) {
            A(L),
            oe()
        },
        get prepareFiles() {
            return C()
        },
        set prepareFiles(L) {
            C(L),
            oe()
        },
        get processFile() {
            return R()
        },
        set processFile(L) {
            R(L),
            oe()
        },
        get processFiles() {
            return P()
        },
        set processFiles(L) {
            P(L),
            oe()
        },
        get removeFile() {
            return N()
        },
        set removeFile(L) {
            N(L),
            oe()
        },
        get removeFiles() {
            return w()
        },
        set removeFiles(L) {
            w(L),
            oe()
        },
        get sort() {
            return x()
        },
        set sort(L) {
            x(L),
            oe()
        }
    })
}
/*!
 * FilePondPluginFileValidateSize 2.2.8
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */
const el = ({addFilter: e, utils: t}) => {
    const {Type: r, replaceInString: n, toNaturalFileSize: s} = t;
    return e("ALLOW_HOPPER_ITEM", (o, {query: i}) => {
        if (!i("GET_ALLOW_FILE_SIZE_VALIDATION"))
            return !0;
        const l = i("GET_MAX_FILE_SIZE");
        if (l !== null && o.size > l)
            return !1;
        const a = i("GET_MIN_FILE_SIZE");
        return !(a !== null && o.size < a)
    }
    ),
    e("LOAD_FILE", (o, {query: i}) => new Promise( (l, a) => {
        if (!i("GET_ALLOW_FILE_SIZE_VALIDATION"))
            return l(o);
        const u = i("GET_FILE_VALIDATE_SIZE_FILTER");
        if (u && !u(o))
            return l(o);
        const c = i("GET_MAX_FILE_SIZE");
        if (c !== null && o.size > c) {
            a({
                status: {
                    main: i("GET_LABEL_MAX_FILE_SIZE_EXCEEDED"),
                    sub: n(i("GET_LABEL_MAX_FILE_SIZE"), {
                        filesize: s(c, ".", i("GET_FILE_SIZE_BASE"), i("GET_FILE_SIZE_LABELS", i))
                    })
                }
            });
            return
        }
        const d = i("GET_MIN_FILE_SIZE");
        if (d !== null && o.size < d) {
            a({
                status: {
                    main: i("GET_LABEL_MIN_FILE_SIZE_EXCEEDED"),
                    sub: n(i("GET_LABEL_MIN_FILE_SIZE"), {
                        filesize: s(d, ".", i("GET_FILE_SIZE_BASE"), i("GET_FILE_SIZE_LABELS", i))
                    })
                }
            });
            return
        }
        const f = i("GET_MAX_TOTAL_FILE_SIZE");
        if (f !== null && i("GET_ACTIVE_ITEMS").reduce( (p, m) => p + m.fileSize, 0) > f) {
            a({
                status: {
                    main: i("GET_LABEL_MAX_TOTAL_FILE_SIZE_EXCEEDED"),
                    sub: n(i("GET_LABEL_MAX_TOTAL_FILE_SIZE"), {
                        filesize: s(f, ".", i("GET_FILE_SIZE_BASE"), i("GET_FILE_SIZE_LABELS", i))
                    })
                }
            });
            return
        }
        l(o)
    }
    )),
    {
        options: {
            allowFileSizeValidation: [!0, r.BOOLEAN],
            maxFileSize: [null, r.INT],
            minFileSize: [null, r.INT],
            maxTotalFileSize: [null, r.INT],
            fileValidateSizeFilter: [null, r.FUNCTION],
            labelMinFileSizeExceeded: ["File is too small", r.STRING],
            labelMinFileSize: ["Minimum file size is {filesize}", r.STRING],
            labelMaxFileSizeExceeded: ["File is too large", r.STRING],
            labelMaxFileSize: ["Maximum file size is {filesize}", r.STRING],
            labelMaxTotalFileSizeExceeded: ["Maximum total size exceeded", r.STRING],
            labelMaxTotalFileSize: ["Maximum total file size is {filesize}", r.STRING]
        }
    }
}
  , Rh = typeof window < "u" && typeof window.document < "u";
Rh && document.dispatchEvent(new CustomEvent("FilePond:pluginloaded",{
    detail: el
}));
/*!
 * FilePondPluginFileEncode 2.1.14
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */
const Sh = function() {
    self.onmessage = t => {
        e(t.data.message, r => {
            self.postMessage({
                id: t.data.id,
                message: r
            })
        }
        )
    }
    ;
    const e = (t, r) => {
        const {file: n} = t
          , s = new FileReader;
        s.onloadend = () => {
            r(s.result.replace("data:", "").replace(/^.+,/, ""))
        }
        ,
        s.readAsDataURL(n)
    }
}
  , tl = ({addFilter: e, utils: t}) => {
    const {Type: r, createWorker: n, createRoute: s, isFile: o} = t
      , i = ({name: a, file: u}) => new Promise(c => {
        const d = n(Sh);
        d.post({
            file: u
        }, f => {
            c({
                name: a,
                data: f
            }),
            d.terminate()
        }
        )
    }
    )
      , l = [];
    return e("DID_CREATE_ITEM", (a, {query: u}) => {
        u("GET_ALLOW_FILE_ENCODE") && (a.extend("getFileEncodeBase64String", () => l[a.id] && l[a.id].data),
        a.extend("getFileEncodeDataURL", () => l[a.id] && `data:${a.fileType};base64,${l[a.id].data}`))
    }
    ),
    e("SHOULD_PREPARE_OUTPUT", (a, {query: u}) => new Promise(c => {
        c(u("GET_ALLOW_FILE_ENCODE"))
    }
    )),
    e("COMPLETE_PREPARE_OUTPUT", (a, {item: u, query: c}) => new Promise(d => {
        if (!c("GET_ALLOW_FILE_ENCODE") || !o(a) && !Array.isArray(a))
            return d(a);
        l[u.id] = {
            metadata: u.getMetadata(),
            data: null
        },
        Promise.all((a instanceof Blob ? [{
            name: null,
            file: a
        }] : a).map(i)).then(f => {
            l[u.id].data = a instanceof Blob ? f[0].data : f,
            d(a)
        }
        )
    }
    )),
    e("CREATE_VIEW", a => {
        const {is: u, view: c, query: d} = a;
        !u("file-wrapper") || !d("GET_ALLOW_FILE_ENCODE") || c.registerWriter(s({
            DID_PREPARE_OUTPUT: ({root: f, action: h}) => {
                if (d("IS_ASYNC"))
                    return;
                const p = d("GET_ITEM", h.id);
                if (!p)
                    return;
                const m = l[p.id]
                  , _ = m.metadata
                  , g = m.data
                  , E = JSON.stringify({
                    id: p.id,
                    name: p.file.name,
                    type: p.file.type,
                    size: p.file.size,
                    metadata: _,
                    data: g
                });
                f.ref.data ? f.ref.data.value = E : f.dispatch("DID_DEFINE_VALUE", {
                    id: p.id,
                    value: E
                })
            }
            ,
            DID_REMOVE_ITEM: ({action: f}) => {
                const h = d("GET_ITEM", f.id);
                h && delete l[h.id]
            }
        }))
    }
    ),
    {
        options: {
            allowFileEncode: [!0, r.BOOLEAN]
        }
    }
}
  , Oh = typeof window < "u" && typeof window.document < "u";
Oh && document.dispatchEvent(new CustomEvent("FilePond:pluginloaded",{
    detail: tl
}));
/*!
 * FilePondPluginFileValidateType 1.2.9
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */
const rl = ({addFilter: e, utils: t}) => {
    const {Type: r, isString: n, replaceInString: s, guesstimateMimeType: o, getExtensionFromFilename: i, getFilenameFromURL: l} = t
      , a = (h, p) => {
        const m = (/^[^/]+/.exec(h) || []).pop()
          , _ = p.slice(0, -2);
        return m === _
    }
      , u = (h, p) => h.some(m => /\*$/.test(m) ? a(p, m) : m === p)
      , c = h => {
        let p = "";
        if (n(h)) {
            const m = l(h)
              , _ = i(m);
            _ && (p = o(_))
        } else
            p = h.type;
        return p
    }
      , d = (h, p, m) => {
        if (p.length === 0)
            return !0;
        const _ = c(h);
        return m ? new Promise( (g, E) => {
            m(h, _).then(y => {
                u(p, y) ? g() : E()
            }
            ).catch(E)
        }
        ) : u(p, _)
    }
      , f = h => p => h[p] === null ? !1 : h[p] || p;
    return e("SET_ATTRIBUTE_TO_OPTION_MAP", h => Object.assign(h, {
        accept: "acceptedFileTypes"
    })),
    e("ALLOW_HOPPER_ITEM", (h, {query: p}) => p("GET_ALLOW_FILE_TYPE_VALIDATION") ? d(h, p("GET_ACCEPTED_FILE_TYPES")) : !0),
    e("LOAD_FILE", (h, {query: p}) => new Promise( (m, _) => {
        if (!p("GET_ALLOW_FILE_TYPE_VALIDATION")) {
            m(h);
            return
        }
        const g = p("GET_ACCEPTED_FILE_TYPES")
          , E = p("GET_FILE_VALIDATE_TYPE_DETECT_TYPE")
          , y = d(h, g, E)
          , b = () => {
            const T = g.map(f(p("GET_FILE_VALIDATE_TYPE_LABEL_EXPECTED_TYPES_MAP"))).filter(C => C !== !1)
              , A = T.filter( (C, R) => T.indexOf(C) === R);
            _({
                status: {
                    main: p("GET_LABEL_FILE_TYPE_NOT_ALLOWED"),
                    sub: s(p("GET_FILE_VALIDATE_TYPE_LABEL_EXPECTED_TYPES"), {
                        allTypes: A.join(", "),
                        allButLastType: A.slice(0, -1).join(", "),
                        lastType: A[A.length - 1]
                    })
                }
            })
        }
        ;
        if (typeof y == "boolean")
            return y ? m(h) : b();
        y.then( () => {
            m(h)
        }
        ).catch(b)
    }
    )),
    {
        options: {
            allowFileTypeValidation: [!0, r.BOOLEAN],
            acceptedFileTypes: [[], r.ARRAY],
            labelFileTypeNotAllowed: ["File is of invalid type", r.STRING],
            fileValidateTypeLabelExpectedTypes: ["Expects {allButLastType} or {lastType}", r.STRING],
            fileValidateTypeLabelExpectedTypesMap: [{}, r.OBJECT],
            fileValidateTypeDetectType: [null, r.FUNCTION]
        }
    }
}
  , Dh = typeof window < "u" && typeof window.document < "u";
Dh && document.dispatchEvent(new CustomEvent("FilePond:pluginloaded",{
    detail: rl
}));
function Ph(e) {
    return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10)
}
function On(e, t) {
    if ((r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0)
        return null;
    var r, n = e.slice(0, r);
    return [n.length > 1 ? n[0] + n.slice(2) : n, +e.slice(r + 1)]
}
function Ah(e) {
    return e = On(Math.abs(e)),
    e ? e[1] : NaN
}
function Lh(e, t) {
    return function(r, n) {
        for (var s = r.length, o = [], i = 0, l = e[0], a = 0; s > 0 && l > 0 && (a + l + 1 > n && (l = Math.max(1, n - a)),
        o.push(r.substring(s -= l, s + l)),
        !((a += l + 1) > n)); )
            l = e[i = (i + 1) % e.length];
        return o.reverse().join(t)
    }
}
function Mh(e) {
    return function(t) {
        return t.replace(/[0-9]/g, function(r) {
            return e[+r]
        })
    }
}
var Ch = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Ss(e) {
    if (!(t = Ch.exec(e)))
        throw new Error("invalid format: " + e);
    var t;
    return new Zs({
        fill: t[1],
        align: t[2],
        sign: t[3],
        symbol: t[4],
        zero: t[5],
        width: t[6],
        comma: t[7],
        precision: t[8] && t[8].slice(1),
        trim: t[9],
        type: t[10]
    })
}
Ss.prototype = Zs.prototype;
function Zs(e) {
    this.fill = e.fill === void 0 ? " " : e.fill + "",
    this.align = e.align === void 0 ? ">" : e.align + "",
    this.sign = e.sign === void 0 ? "-" : e.sign + "",
    this.symbol = e.symbol === void 0 ? "" : e.symbol + "",
    this.zero = !!e.zero,
    this.width = e.width === void 0 ? void 0 : +e.width,
    this.comma = !!e.comma,
    this.precision = e.precision === void 0 ? void 0 : +e.precision,
    this.trim = !!e.trim,
    this.type = e.type === void 0 ? "" : e.type + ""
}
Zs.prototype.toString = function() {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type
}
;
function xh(e) {
    e: for (var t = e.length, r = 1, n = -1, s; r < t; ++r)
        switch (e[r]) {
        case ".":
            n = s = r;
            break;
        case "0":
            n === 0 && (n = r),
            s = r;
            break;
        default:
            if (!+e[r])
                break e;
            n > 0 && (n = 0);
            break
        }
    return n > 0 ? e.slice(0, n) + e.slice(s + 1) : e
}
var nl;
function Nh(e, t) {
    var r = On(e, t);
    if (!r)
        return e + "";
    var n = r[0]
      , s = r[1]
      , o = s - (nl = Math.max(-8, Math.min(8, Math.floor(s / 3))) * 3) + 1
      , i = n.length;
    return o === i ? n : o > i ? n + new Array(o - i + 1).join("0") : o > 0 ? n.slice(0, o) + "." + n.slice(o) : "0." + new Array(1 - o).join("0") + On(e, Math.max(0, t + o - 1))[0]
}
function _o(e, t) {
    var r = On(e, t);
    if (!r)
        return e + "";
    var n = r[0]
      , s = r[1];
    return s < 0 ? "0." + new Array(-s).join("0") + n : n.length > s + 1 ? n.slice(0, s + 1) + "." + n.slice(s + 1) : n + new Array(s - n.length + 2).join("0")
}
const Eo = {
    "%": (e, t) => (e * 100).toFixed(t),
    b: e => Math.round(e).toString(2),
    c: e => e + "",
    d: Ph,
    e: (e, t) => e.toExponential(t),
    f: (e, t) => e.toFixed(t),
    g: (e, t) => e.toPrecision(t),
    o: e => Math.round(e).toString(8),
    p: (e, t) => _o(e * 100, t),
    r: _o,
    s: Nh,
    X: e => Math.round(e).toString(16).toUpperCase(),
    x: e => Math.round(e).toString(16)
};
function vo(e) {
    return e
}
var yo = Array.prototype.map
  , To = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Fh(e) {
    var t = e.grouping === void 0 || e.thousands === void 0 ? vo : Lh(yo.call(e.grouping, Number), e.thousands + "")
      , r = e.currency === void 0 ? "" : e.currency[0] + ""
      , n = e.currency === void 0 ? "" : e.currency[1] + ""
      , s = e.decimal === void 0 ? "." : e.decimal + ""
      , o = e.numerals === void 0 ? vo : Mh(yo.call(e.numerals, String))
      , i = e.percent === void 0 ? "%" : e.percent + ""
      , l = e.minus === void 0 ? "−" : e.minus + ""
      , a = e.nan === void 0 ? "NaN" : e.nan + "";
    function u(d) {
        d = Ss(d);
        var f = d.fill
          , h = d.align
          , p = d.sign
          , m = d.symbol
          , _ = d.zero
          , g = d.width
          , E = d.comma
          , y = d.precision
          , b = d.trim
          , T = d.type;
        T === "n" ? (E = !0,
        T = "g") : Eo[T] || (y === void 0 && (y = 12),
        b = !0,
        T = "g"),
        (_ || f === "0" && h === "=") && (_ = !0,
        f = "0",
        h = "=");
        var A = m === "$" ? r : m === "#" && /[boxX]/.test(T) ? "0" + T.toLowerCase() : ""
          , C = m === "$" ? n : /[%p]/.test(T) ? i : ""
          , R = Eo[T]
          , P = /[defgprs%]/.test(T);
        y = y === void 0 ? 6 : /[gprs]/.test(T) ? Math.max(1, Math.min(21, y)) : Math.max(0, Math.min(20, y));
        function N(w) {
            var x = A, V = C, S, L, O;
            if (T === "c")
                V = R(w) + V,
                w = "";
            else {
                w = +w;
                var M = w < 0 || 1 / w < 0;
                if (w = isNaN(w) ? a : R(Math.abs(w), y),
                b && (w = xh(w)),
                M && +w == 0 && p !== "+" && (M = !1),
                x = (M ? p === "(" ? p : l : p === "-" || p === "(" ? "" : p) + x,
                V = (T === "s" ? To[8 + nl / 3] : "") + V + (M && p === "(" ? ")" : ""),
                P) {
                    for (S = -1,
                    L = w.length; ++S < L; )
                        if (O = w.charCodeAt(S),
                        48 > O || O > 57) {
                            V = (O === 46 ? s + w.slice(S + 1) : w.slice(S)) + V,
                            w = w.slice(0, S);
                            break
                        }
                }
            }
            E && !_ && (w = t(w, 1 / 0));
            var F = x.length + w.length + V.length
              , G = F < g ? new Array(g - F + 1).join(f) : "";
            switch (E && _ && (w = t(G + w, G.length ? g - V.length : 1 / 0),
            G = ""),
            h) {
            case "<":
                w = x + w + V + G;
                break;
            case "=":
                w = x + G + w + V;
                break;
            case "^":
                w = G.slice(0, F = G.length >> 1) + x + w + V + G.slice(F);
                break;
            default:
                w = G + x + w + V;
                break
            }
            return o(w)
        }
        return N.toString = function() {
            return d + ""
        }
        ,
        N
    }
    function c(d, f) {
        var h = u((d = Ss(d),
        d.type = "f",
        d))
          , p = Math.max(-8, Math.min(8, Math.floor(Ah(f) / 3))) * 3
          , m = Math.pow(10, -p)
          , _ = To[8 + p / 3];
        return function(g) {
            return h(m * g) + _
        }
    }
    return {
        format: u,
        formatPrefix: c
    }
}
var un, sl;
Gh({
    thousands: ",",
    grouping: [3],
    currency: ["$", ""]
});
function Gh(e) {
    return un = Fh(e),
    sl = un.format,
    un.formatPrefix,
    un
}
var Uh = Z('<th class="px-4 py-3 text-left align-middle font-semibold text-gray-700 tracking-wider"> </th>')
  , Bh = Z('<td class="px-4 py-3 text-gray-800"> </td>')
  , kh = Z('<tr class="hover:bg-gray-50"></tr>')
  , $h = Z('<table class="min-w-full text-sm"><thead class="sticky top-0 bg-gray-50 z-10 border-b border-gray-200"><tr></tr></thead><tbody class="bg-white divide-y divide-gray-200"></tbody></table>')
  , Vh = Z('<div class="p-4 text-center text-gray-500">No transactions to display</div>')
  , zh = Z('<div class="relative overflow-y-auto border border-gray-200 rounded-md overflow-x-auto"><!></div>');
function qh(e, t) {
    et(t, !1);
    let r = Y(t, "transactions", 24, () => [])
      , n = Y(t, "maxHeight", 8, "600px")
      , s = j([]);
    const o = a => a == null ? "" : typeof a == "number" ? sl(",.2f")(a) : String(a);
    ot( () => ir(r()), () => {
        if (r().length > 0) {
            const a = r()[0];
            a && I(s, Object.keys(a))
        } else
            I(s, [])
    }
    ),
    Ln(),
    dt();
    var i = zh()
      , l = B(i);
    ce(l, () => r().length > 0 && v(s).length > 0, a => {
        var u = $h()
          , c = B(u)
          , d = B(c);
        Lr(d, 5, () => v(s), Ar, (h, p) => {
            var m = Uh()
              , _ = B(m);
            _e( () => qe(_, v(p).charAt(0).toUpperCase() + v(p).slice(1))),
            U(h, m)
        }
        );
        var f = $(c);
        Lr(f, 5, r, Ar, (h, p) => {
            var m = ue()
              , _ = se(m);
            ce(_, () => v(p), g => {
                var E = kh();
                Lr(E, 5, () => v(s), Ar, (y, b) => {
                    var T = Bh()
                      , A = B(T);
                    _e( () => qe(A, o(v(p)[v(b)]))),
                    U(y, T)
                }
                ),
                U(g, E)
            }
            ),
            U(h, m)
        }
        ),
        U(a, u)
    }
    , a => {
        var u = Vh();
        U(a, u)
    }
    ),
    _e( () => gt(i, "style", `max-height: ${n() ?? ""};`)),
    U(e, i),
    tt()
}
var Yh = Z('<div class="flex justify-center mb-1"><div class="animate-spin rounded-full h-10 w-10 border-4 border-gray-200 border-t-indigo-600"></div></div>');
function Hh(e) {
    var t = Yh();
    U(e, t)
}
var Wh = Z('<div class="progress-container svelte-17sq6r7"><div class="progress-text svelte-17sq6r7"> </div> <div class="progress-bar-container svelte-17sq6r7"><div class="progress-bar svelte-17sq6r7"></div></div></div>');
function jh(e, t) {
    let r = Y(t, "numerator", 8, 0)
      , n = Y(t, "denominator", 8, 1);
    var s = Wh()
      , o = B(s)
      , i = B(o)
      , l = $(o, 2)
      , a = B(l);
    _e( () => {
        qe(i, `Page ${r() ?? ""} of ${n() ?? ""}`),
        gt(a, "style", `width: ${r() * 100 / n()}%;`)
    }
    ),
    U(e, s)
}
async function Xh(e, t, r, n) {
    const s = await fetch(t ? "https://razorextract.com/api/v1/extractions/extract/stream/" : "/api/v1/extractions/extract/stream/", {
        method: "POST",
        body: e
    });
    if (!s.ok)
        throw new Error("Network response was not ok");
    const o = s.body.getReader()
      , i = new TextDecoder;
    let l = "";
    async function a() {
        try {
            for (; ; ) {
                const {done: u, value: c} = await o.read();
                if (u) {
                    n();
                    break
                }
                l += i.decode(c, {
                    stream: !0
                });
                const d = l.split(`
`);
                l = d.pop();
                for (const f of d)
                    if (f) {
                        const h = f.replace(/NaN/g, "null")
                          , p = JSON.parse(h);
                        Array.isArray(p.transactions) ? p.transactions.forEach(m => r(m, p.page_num, p.request_id)) : console.error("Received chunk is not an array:", p)
                    }
            }
        } catch (u) {
            if (u.name === "AbortError")
                console.log("Stream reading aborted.");
            else
                throw console.error("Error reading stream:", u),
                console.log("Problem buffer:", l),
                new Error("Backend is likely overloaded. Please refresh the page and try again.")
        }
    }
    try {
        await a()
    } catch (u) {
        throw u
    }
    return {
        reader: o,
        cancel: () => {
            o.cancel()
        }
    }
}
async function Qh(e, t, r="", n=!1) {
    const s = await fetch(`${t ? "https://razorextract.com" : ""}/api/v1/extractions/transactions/${e}/download?debug=${n}`, {
        method: "GET"
    });
    if (!s.ok)
        throw new Error("Failed to download transactions");
    const o = `${r ? `${r}_` : "transactions_"}${e}_extracted.json`
      , i = await s.blob()
      , l = window.URL.createObjectURL(i)
      , a = document.createElement("a");
    a.href = l,
    a.download = o,
    document.body.appendChild(a),
    a.click(),
    window.URL.revokeObjectURL(l),
    document.body.removeChild(a)
}
async function Zh(e, t, r="", n=!1) {
    const s = await fetch(`${t ? "https://razorextract.com" : ""}/api/v1/extractions/transactions/${e}/download/excel?debug=${n}`, {
        method: "GET"
    });
    if (!s.ok)
        throw new Error("Failed to download transactions excel");
    const o = `${r ? `${r}_` : "transactions_"}${e}_extracted.xlsx`
      , i = await s.blob()
      , l = window.URL.createObjectURL(i)
      , a = document.createElement("a");
    a.href = l,
    a.download = o,
    document.body.appendChild(a),
    a.click(),
    window.URL.revokeObjectURL(l),
    document.body.removeChild(a)
}
async function Kh(e, t, r="", n=!1) {
    const s = await fetch(`${t ? "https://razorextract.com" : ""}/api/v1/extractions/transactions/${e}/download/csv?debug=${n}`, {
        method: "GET"
    });
    if (!s.ok)
        throw new Error("Failed to download transactions CSV");
    const o = `${r ? `${r}_` : "transactions_"}${e}_extracted.csv`
      , i = await s.blob()
      , l = window.URL.createObjectURL(i)
      , a = document.createElement("a");
    a.href = l,
    a.download = o,
    document.body.appendChild(a),
    a.click(),
    window.URL.revokeObjectURL(l),
    document.body.removeChild(a)
}
async function Jh(e, t) {
    const r = await fetch(`${t ? "https://razorextract.com" : ""}/api/v1/extractions/contact-us/`, {
        method: "POST",
        body: e
    });
    if (!r.ok) {
        const n = await r.json();
        throw new Error(n.detail || "Failed to submit contact form")
    }
    return r.json()
}
async function em(e, t, r="", n=!1) {
    const s = await fetch(`${t ? "https://razorextract.com" : ""}/api/v1/extractions/transactions/${e}/deep-extract/?debug=${n}`, {
        method: "GET"
    });
    if (!s.ok)
        throw new Error("Failed to download deep extract analysis");
    const o = `${r ? `${r}_` : "transactions_"}${e}_deep_analysis.xlsx`
      , i = await s.blob()
      , l = window.URL.createObjectURL(i)
      , a = document.createElement("a");
    a.href = l,
    a.download = o,
    document.body.appendChild(a),
    a.click(),
    window.URL.revokeObjectURL(l),
    document.body.removeChild(a)
}
async function tm(e, t, r) {
    const n = await fetch(`${r ? "https://razorextract.com" : ""}/api/v1/extractions/transactions/${e}/rate/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            rating: t
        })
    });
    if (!n.ok) {
        const s = await n.json();
        throw new Error(s.detail || "Failed to submit rating")
    }
    return n.json()
}
async function rm(e, t, r) {
    const n = t ? "https://razorextract.com/api/v1/xml_extractions/parse/stream/" : "/api/v1/xml_extractions/parse/stream/";
    try {
        const s = await fetch(n, {
            method: "POST",
            body: e
        });
        if (!s.ok) {
            const c = await s.json();
            throw new Error(c.detail || "Failed to process XML file")
        }
        const o = s.body.getReader()
          , i = new TextDecoder("utf-8");
        let l = []
          , a = null
          , u = "";
        for (; ; ) {
            const c = await o.read();
            if (c.done) {
                if (u.trim())
                    try {
                        const f = JSON.parse(u.trim());
                        if (f.status === "ERROR")
                            throw new Error(f.message || "Unknown error during stream end");
                        f.status === "DATA" && f.transaction && (l.push(f.transaction),
                        f.request_id && (a = f.request_id),
                        r && r(f.transaction, f.count, f.request_id))
                    } catch (f) {
                        throw console.error("Error parsing remaining buffer:", f, "Buffer content:", u),
                        new Error("Error processing final part of stream data.")
                    }
                break
            }
            u += i.decode(c.value, {
                stream: !0
            });
            const d = u.split(`
`);
            u = d.pop();
            for (const f of d)
                if (f.trim() !== "")
                    try {
                        const h = JSON.parse(f);
                        if (h.request_id && (a = h.request_id),
                        h.status === "DATA" && h.transaction)
                            l.push(h.transaction),
                            r && r(h.transaction, h.count, h.request_id);
                        else if (h.status === "COMPLETED")
                            console.log("XML Stream completed by server.");
                        else {
                            if (h.status === "ERROR")
                                throw console.error("Error message from stream:", h.message),
                                new Error(h.message || "Unknown error received from stream");
                            h.status === "PROCESSING" && console.log("Processing message:", h.message)
                        }
                    } catch (h) {
                        console.error("Error parsing JSON line:", h, "Line content:", f)
                    }
        }
        return {
            transactions: l,
            request_id: a
        }
    } catch (s) {
        throw console.error("Error extracting XML transactions:", s),
        s
    }
}
function nm(e, t) {
    const r = Oe(t, ["children", "$$slots", "$$events", "$$legacy"]);
    ft(e, rt({
        name: "circle-check-big"
    }, () => r, {
        iconNode: [["path", {
            d: "M21.801 10A10 10 0 1 1 17 3.335"
        }], ["path", {
            d: "m9 11 3 3L22 4"
        }]],
        children: (s, o) => {
            var i = ue()
              , l = se(i);
            Se(l, t, "default", {}),
            U(s, i)
        }
        ,
        $$slots: {
            default: !0
        }
    }))
}
function sm(e, t) {
    const r = Oe(t, ["children", "$$slots", "$$events", "$$legacy"]);
    ft(e, rt({
        name: "gift"
    }, () => r, {
        iconNode: [["rect", {
            x: "3",
            y: "8",
            width: "18",
            height: "4",
            rx: "1"
        }], ["path", {
            d: "M12 8v13"
        }], ["path", {
            d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"
        }], ["path", {
            d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"
        }]],
        children: (s, o) => {
            var i = ue()
              , l = se(i);
            Se(l, t, "default", {}),
            U(s, i)
        }
        ,
        $$slots: {
            default: !0
        }
    }))
}
function im(e, t) {
    const r = Oe(t, ["children", "$$slots", "$$events", "$$legacy"]);
    ft(e, rt({
        name: "lock"
    }, () => r, {
        iconNode: [["rect", {
            width: "18",
            height: "11",
            x: "3",
            y: "11",
            rx: "2",
            ry: "2"
        }], ["path", {
            d: "M7 11V7a5 5 0 0 1 10 0v4"
        }]],
        children: (s, o) => {
            var i = ue()
              , l = se(i);
            Se(l, t, "default", {}),
            U(s, i)
        }
        ,
        $$slots: {
            default: !0
        }
    }))
}
function os(e, t) {
    const r = Oe(t, ["children", "$$slots", "$$events", "$$legacy"]);
    ft(e, rt({
        name: "download"
    }, () => r, {
        iconNode: [["path", {
            d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
        }], ["polyline", {
            points: "7 10 12 15 17 10"
        }], ["line", {
            x1: "12",
            x2: "12",
            y1: "15",
            y2: "3"
        }]],
        children: (s, o) => {
            var i = ue()
              , l = se(i);
            Se(l, t, "default", {}),
            U(s, i)
        }
        ,
        $$slots: {
            default: !0
        }
    }))
}
function om(e, t) {
    const r = Oe(t, ["children", "$$slots", "$$events", "$$legacy"]);
    ft(e, rt({
        name: "sparkles"
    }, () => r, {
        iconNode: [["path", {
            d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
        }], ["path", {
            d: "M20 3v4"
        }], ["path", {
            d: "M22 5h-4"
        }], ["path", {
            d: "M4 17v2"
        }], ["path", {
            d: "M5 18H3"
        }]],
        children: (s, o) => {
            var i = ue()
              , l = se(i);
            Se(l, t, "default", {}),
            U(s, i)
        }
        ,
        $$slots: {
            default: !0
        }
    }))
}
function am(e, t) {
    const r = Oe(t, ["children", "$$slots", "$$events", "$$legacy"]);
    ft(e, rt({
        name: "info"
    }, () => r, {
        iconNode: [["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }], ["path", {
            d: "M12 16v-4"
        }], ["path", {
            d: "M12 8h.01"
        }]],
        children: (s, o) => {
            var i = ue()
              , l = se(i);
            Se(l, t, "default", {}),
            U(s, i)
        }
        ,
        $$slots: {
            default: !0
        }
    }))
}
function lm(e, t) {
    const r = Oe(t, ["children", "$$slots", "$$events", "$$legacy"]);
    ft(e, rt({
        name: "file-text"
    }, () => r, {
        iconNode: [["path", {
            d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
        }], ["path", {
            d: "M14 2v4a2 2 0 0 0 2 2h4"
        }], ["path", {
            d: "M10 9H8"
        }], ["path", {
            d: "M16 13H8"
        }], ["path", {
            d: "M16 17H8"
        }]],
        children: (s, o) => {
            var i = ue()
              , l = se(i);
            Se(l, t, "default", {}),
            U(s, i)
        }
        ,
        $$slots: {
            default: !0
        }
    }))
}
var cm = Z('<div class="text-center bg-yellow-50 border border-yellow-200 p-4 rounded-md mb-4"><p class="text-yellow-800 font-medium mb-2">This PDF is password protected.</p> <input type="password" placeholder="Enter PDF password" class="border border-gray-300 p-2 rounded mr-2 focus:ring-indigo-500 focus:border-indigo-500"> <button class="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded transition duration-150 ease-in-out">Unlock & Process</button></div>')
  , um = Z('<div class="text-center my-8"><!> <p class="text-lg text-gray-700 mt-4"> </p></div>')
  , dm = Z('<div class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative mb-4 text-center" role="alert"><strong class="font-bold">Oops!</strong> <span class="block sm:inline"> </span></div>')
  , fm = Z("<button> </button>")
  , pm = Z('<div class="flex items-center justify-center"><p class="text-gray-700 font-medium">How was the extraction accuracy?</p> <div class="flex gap-3 ml-3"></div></div>')
  , hm = Z('<p class="text-gray-600 text-sm mt-1">Glad we could help! Consider joining our <a href="https://t.me/razorextract" target="_blank" rel="noopener noreferrer" class="text-indigo-600 hover:underline font-medium">Telegram group</a> for updates.</p>')
  , mm = Z('<p class="text-gray-600 text-sm mt-1">We appreciate the feedback. Join our <a href="https://t.me/razorextract" target="_blank" rel="noopener noreferrer" class="text-indigo-600 hover:underline font-medium">Telegram group</a> to discuss further or report issues.</p>')
  , gm = Z('<p class="text-gray-700 font-medium"> </p> <!>', 1)
  , _m = Z('<p class="text-red-600 text-sm mt-2"> </p>')
  , Em = Z('<div class="mr-2 animate-spin h-5 w-5 border-2 border-current border-t-transparent rounded-full"></div>')
  , vm = Z('<div class="mr-2 animate-spin h-5 w-5 border-2 border-current border-t-transparent rounded-full"></div>')
  , ym = Z('<div class="mr-2 animate-spin h-5 w-5 border-2 border-current border-t-transparent rounded-full"></div>')
  , Tm = Z('<div class="mr-2 animate-spin h-5 w-5 border-2 border-current border-t-transparent rounded-full"></div>')
  , Im = Z('<div class="mt-4 text-center mb-6"><!> <!></div> <div class="grid grid-cols-2 gap-3 mb-6 sm:flex sm:flex-wrap sm:justify-center sm:gap-4"><div class="relative inline-block w-full sm:w-auto group"><button class="w-full px-4 py-1 border border-green-700 text-green-700 rounded-md flex items-center justify-center font-medium hover:bg-green-700 hover:text-white transition duration-300 ease-in-out disabled:opacity-60 disabled:cursor-not-allowed shadow-sm"><!> Deep Extract</button> <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-56 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-center pointer-events-none z-10">AI-powered analysis for deeper insights (e.g., loans, recurring patterns). May take extra time. <svg class="absolute text-gray-800 h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255" xml:space="preserve"><polygon class="fill-current" points="0,0 127.5,127.5 255,0"></polygon></svg></div> <!></div> <button class="w-full sm:w-auto px-4 py-1 border border-indigo-600 text-indigo-700 rounded-md flex items-center justify-center font-medium hover:bg-indigo-600 hover:text-white transition duration-300 ease-in-out disabled:opacity-60 disabled:cursor-not-allowed shadow-sm"><!> Excel</button> <button class="w-full sm:w-auto px-4 py-1 border border-gray-700 text-gray-800 rounded-md flex items-center justify-center font-medium hover:bg-gray-800 hover:text-white transition duration-300 ease-in-out disabled:opacity-60 disabled:cursor-not-allowed shadow-sm"><!> CSV</button> <button class="w-full sm:w-auto px-4 py-1 border border-gray-700 text-gray-800 rounded-md flex items-center justify-center font-medium hover:bg-gray-800 hover:text-white transition duration-300 ease-in-out disabled:opacity-60 disabled:cursor-not-allowed shadow-sm"><!> JSON</button></div>', 1)
  , bm = Z('<div class="mb-8"><!> <!></div> <div class="bg-white shadow overflow-hidden sm:rounded-lg"><!></div>', 1)
  , wm = Z('<div class="flex flex-col min-h-screen px-4 sm:px-6 lg:px-8"><div class="pt-8 text-center mb-10"><div class="text-3xl font-medium sm:text-4xl mb-3 bg-gradient-to-r from-indigo-950 to-indigo-400 bg-clip-text text-transparent">PDF to Excel/CSV Converter</div> <p class="text-lg text-gray-600 max-w-2xl mx-auto">Easily extract tables and transactions from your PDF documents (including statements, invoices, and more) into Excel or CSV formats.</p></div> <div class="filepond-container max-w-3xl mx-auto w-full svelte-1jsaipk"><!></div> <div class="max-w-7xl mx-auto w-full"><!> <!> <!> <!></div> <div class="flex-grow"></div> <div class="grid grid-cols-2 md:grid-cols-4 gap-4 my-12 max-w-5xl mx-auto w-full"><div class="feature-card flex flex-col items-center text-center p-5 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"><!> <h3 class="font-semibold text-gray-800">Versatile</h3> <p class="text-sm text-gray-600 mt-1">Handles various PDF layouts</p></div> <div class="feature-card flex flex-col items-center text-center p-5 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"><!> <h3 class="font-semibold text-gray-800">Accurate</h3> <p class="text-sm text-gray-600 mt-1">Precise data extraction</p></div> <div class="feature-card flex flex-col items-center text-center p-5 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"><!> <h3 class="font-semibold text-gray-800">Free</h3> <p class="text-sm text-gray-600 mt-1">Generous free usage tier</p></div> <div class="feature-card flex flex-col items-center text-center p-5 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"><!> <h3 class="font-semibold text-gray-800">Secure</h3> <p class="text-sm text-gray-600 mt-1">Your data is processed securely</p></div></div></div>');
function Rm(e, t) {
    et(t, !1);
    let r = j(null), n = null, s = null, o = j(!1), i = j(null), l = 0, a = j(0), u = j(1), c = j(""), d = j(""), f = j(!1), h = 0, p = 0, m = j(""), _ = j(!1), g = j(!1), E = !1, y = 0, b = j(), T = j(null), A = j(!1), C = j(!1), R = j(!1), P = j(!1), N = j(0), w = j(!1), x = j(null), V, S = 0;
    const L = ["Analyzing your document...", "Extracting transaction data...", "Processing tables and entries...", "Almost there! Finalizing extraction...", "This might take a minute for complex documents...", "We're working hard to get accurate results...", "Thanks for your patience! Still processing..."]
      , O = ["Preparing your file for download...", "Formatting data for export...", "Almost ready! Finalizing your file...", "Thanks for your patience...", "Creating a clean, organized file for you..."]
      , M = ["Running AI-powered deep analysis...", "Identifying patterns in your transactions...", "Extracting additional insights...", "This advanced analysis takes a bit longer...", "Our AI is working through your data...", "Finding hidden patterns in your transactions...", "Almost there! Finalizing deep analysis..."];
    function F(z) {
        clearInterval(V),
        S = 0;
        let W;
        switch (z) {
        case "extraction":
            W = L;
            break;
        case "download":
            W = O;
            break;
        case "deepExtraction":
            W = M;
            break;
        default:
            W = L
        }
        G(W),
        setTimeout( () => {
            V = setInterval( () => {
                S = (S + 1) % W.length,
                G(W)
            }
            , 5e3)
        }
        , 1e4)
    }
    function G(z) {
        I(m, z[S])
    }
    function K() {
        clearInterval(V)
    }
    const q = ["😢", "😕", "😐", "🙂", "😊"];
    async function pt(z) {
        try {
            I(x, null),
            await tm(v(T), z, v(g)),
            I(N, z),
            I(w, !0)
        } catch {
            I(x, "Failed to submit rating. Please try again.")
        }
    }
    async function kt() {
        if (n) {
            const z = await J()
              , W = new FileReader;
            W.onload = async () => {
                const te = W.result;
                if (!te) {
                    I(i, "Failed to read file.");
                    return
                }
                const ie = new Uint8Array(te);
                try {
                    h = (await z.getDocument({
                        data: ie,
                        password: v(c)
                    }).promise)._pdfInfo.numPages,
                    I(f, !1),
                    me(n, v(c))
                } catch (ye) {
                    ye.name === "PasswordException" ? I(i, "Incorrect password. Please try again.") : I(i, "Error loading PDF: " + (ye.message || ye))
                }
            }
            ,
            W.readAsArrayBuffer(n)
        }
    }
    Yr( () => {
        const z = new URLSearchParams(window.location.search)
          , W = window.location.hostname;
        I(g, W.includes("localhost") || W.includes("127.0.0.1")),
        v(g) && I(_, z.get("debug") === "true"),
        E = z.get("magic") === "true",
        y = Number(z.get("limit"))
    }
    ),
    Sn(el, tl, rl);
    async function J() {
        const z = window;
        return z.pdfjsLib || (await mu( () => import("https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"), []),
        z.pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js"),
        z.pdfjsLib
    }
    async function ve() {
        I(r, null),
        I(f, !1),
        I(i, null),
        h = 0,
        I(m, ""),
        I(c, ""),
        I(T, null),
        n = null,
        s = null,
        I(d, ""),
        I(w, !1),
        I(N, 0),
        I(x, null),
        v(b) && ((await v(b)).cancel(),
        I(b, null))
    }
    async function k(z) {
        I(r, null),
        I(f, !1),
        I(i, null),
        h = 0,
        I(m, ""),
        I(c, ""),
        I(T, null),
        I(w, !1),
        I(N, 0),
        I(x, null),
        z.file,
        I(d, z.filename.split(".").slice(0, -1).join(".")),
        n = z.file,
        s = z.file.type,
        console.log("Detected file type:", s),
        s === "application/pdf" ? Ce() : (s === "application/xml" || s === "text/xml") && re()
    }
    async function re() {
        if (!n) {
            I(i, "No file selected for processing.");
            return
        }
        I(o, !0),
        I(i, null),
        I(r, null),
        I(T, null),
        l = 0,
        I(m, "Uploading and processing XML file..."),
        F("extraction");
        const z = new FormData;
        z.append("file", n, v(d) + ".xml");
        try {
            const W = ie => {
                l = ie,
                I(m, `Uploading XML file... ${Math.round(ie)}%`)
            }
              , te = await rm(z, v(g), W);
            I(r, te.transactions || []),
            I(T, te.request_id || null),
            I(m, "XML processing complete!")
        } catch (W) {
            console.error("Error processing XML file:", W),
            I(i, W.message || "An error occurred during XML processing."),
            I(m, ""),
            K()
        } finally {
            I(o, !1),
            K()
        }
    }
    async function Ce() {
        const z = await J();
        if (!z) {
            I(i, "PDF.js is still loading. Please try again in a moment.");
            return
        }
        const W = new FileReader;
        W.onload = async () => {
            const te = W.result;
            if (!te) {
                I(i, "Failed to read file.");
                return
            }
            const ie = new Uint8Array(te);
            let ye = z.getDocument({
                data: ie
            });
            try {
                const xe = await ye.promise;
                h = xe._pdfInfo.numPages,
                xe.encrypted ? I(f, !0) : me(n, "")
            } catch (xe) {
                if (xe.name === "PasswordException") {
                    if (I(f, !0),
                    v(c))
                        try {
                            ye = z.getDocument({
                                data: ie,
                                password: v(c)
                            }),
                            h = (await ye.promise)._pdfInfo.numPages,
                            me(n, v(c))
                        } catch (zt) {
                            zt.name === "PasswordException" ? I(i, "Incorrect password. Please try again.") : I(i, "Error loading PDF: " + (zt.message || zt))
                        }
                } else
                    console.error("Failed to load PDF", xe),
                    I(i, "Failed to load PDF: " + (xe.message || xe))
            }
        }
        ,
        W.readAsArrayBuffer(n)
    }
    async function me(z, W) {
        if (z.size > 50 * 1024 * 1024) {
            I(i, "❌ File size exceeds 50MB limit. Please upload a smaller file.");
            return
        }
        I(o, !0),
        I(i, null),
        l = 0,
        I(r, null),
        p = h,
        I(a, 0),
        I(u, 1),
        y > 0 && (p = y < h ? y : h),
        I(m, `Extracting data from ${p} pages...`),
        I(u, p),
        F("extraction");
        try {
            const te = new FormData;
            te.append("file", z),
            v(c) && te.append("password", v(c)),
            v(g) && te.append("debug", v(_).toString()),
            p != 0 && te.append("pageCount", String(p)),
            E && te.append("magic", E.toString()),
            v(b) && ((await v(b)).cancel(),
            I(b, null)),
            I(b, Xh(te, v(g), (ie, ye, xe) => {
                !v(T) && xe && I(T, xe),
                v(r) == null && (I(r, []),
                I(o, !1),
                I(m, ""),
                K()),
                I(r, [...v(r), ie]),
                I(a, ye)
            }
            , () => {
                I(a, p > 0 ? p : h),
                I(b, null),
                console.log("Processing complete. Request ID:", v(T))
            }
            ).catch(ie => {
                I(o, !1),
                I(i, ie.message || "An error occurred while processing the document. Please try again."),
                ie.message.includes("chunked encoding") && I(i, "The connection was interrupted. Please try again."),
                console.error("Processing error:", ie)
            }
            ))
        } catch (te) {
            I(o, !1),
            I(i, "We faced some issue while extracting this format. Please check back in a few days - should be fixed. Thanks for your patronage!"),
            console.error("Processing error:", te)
        }
    }
    dt();
    var ae = wm()
      , nt = $(B(ae), 2)
      , Er = B(nt);
    wh(Er, {
        allowMultiple: !1,
        className: "bg-indigo",
        maxFileSize: "50MB",
        acceptedFileTypes: ["application/pdf", "application/xml", "text/xml"],
        allowFileTypeValidation: !0,
        labelFileTypeNotAllowed: "Invalid file type. Please upload a PDF or XML file.",
        onremovefile: (z, W) => ve(),
        onaddfile: (z, W) => k(W),
        labelIdle: `
        <div class="text-center p-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10 text-indigo-600 mb-2 mx-auto">
            <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/>
            <path d="M12 12v9"/>
            <path d="m16 16-4-4-4 4"/>
          </svg>
          <p class="text-lg font-medium text-gray-700">
            Drag & Drop your PDF here or
            <span class="filepond--label-action font-semibold text-indigo-600 hover:text-indigo-800">Browse files</span>
          </p>
          <p class="text-sm text-gray-500 mt-1">Max file size: 50MB</p>
        </div>
      `,
        credits: !1,
        styleButtonRemoveItemPosition: "right"
    });
    var st = $(nt, 2)
      , wt = B(st);
    ce(wt, () => v(f), z => {
        var W = cm()
          , te = $(B(W), 2)
          , ie = $(te, 2);
        hs(te, () => v(c), ye => I(c, ye)),
        Ge("click", ie, kt),
        U(z, W)
    }
    );
    var Wr = $(wt, 2);
    ce(Wr, () => v(o) || v(A) || v(C) || v(R) || v(P), z => {
        var W = um()
          , te = B(W);
        Hh(te);
        var ie = $(te, 2)
          , ye = B(ie);
        _e( () => qe(ye, v(m))),
        U(z, W)
    }
    );
    var vr = $(Wr, 2);
    ce(vr, () => v(i), z => {
        var W = dm()
          , te = $(B(W), 2)
          , ie = B(te);
        _e( () => qe(ie, v(i))),
        U(z, W)
    }
    );
    var jr = $(vr, 2);
    ce(jr, () => v(r), z => {
        var W = bm()
          , te = se(W)
          , ie = B(te);
        ce(ie, () => v(b), Vn => {
            jh(Vn, {
                get numerator() {
                    return v(a)
                },
                get denominator() {
                    return v(u)
                }
            })
        }
        );
        var ye = $(ie, 2);
        ce(ye, () => !v(b), Vn => {
            var Ks = Im()
              , Js = se(Ks)
              , ei = B(Js);
            ce(ei, () => !v(w), ne => {
                var Te = pm()
                  , qt = $(B(Te), 2);
                Lr(qt, 5, () => q, Ar, (qn, Yn, Rt) => {
                    var it = fm();
                    gt(it, "aria-label", `Rating ${Rt + 1}`);
                    var fl = B(it);
                    _e( () => {
                        Fs(it, `text-2xl hover:scale-125 transition-transform duration-200 ${(v(N) === Rt + 1 ? "scale-125 opacity-100" : "opacity-80") ?? ""}`),
                        qe(fl, v(Yn))
                    }
                    ),
                    Ge("click", it, () => pt(Rt + 1)),
                    U(qn, it)
                }
                ),
                U(ne, Te)
            }
            , ne => {
                var Te = gm()
                  , qt = se(Te)
                  , qn = B(qt)
                  , Yn = $(qt, 2);
                ce(Yn, () => v(N) >= 4, Rt => {
                    var it = hm();
                    U(Rt, it)
                }
                , Rt => {
                    var it = mm();
                    U(Rt, it)
                }
                ),
                _e( () => qe(qn, `Thank you for your rating! ${q[3] ?? ""}`)),
                U(ne, Te)
            }
            );
            var il = $(ei, 2);
            ce(il, () => v(x), ne => {
                var Te = _m()
                  , qt = B(Te);
                _e( () => qe(qt, v(x))),
                U(ne, Te)
            }
            );
            var ol = $(Js, 2)
              , ti = B(ol)
              , Qr = B(ti)
              , al = B(Qr);
            ce(al, () => v(P), ne => {
                var Te = Em();
                U(ne, Te)
            }
            , ne => {
                om(ne, {
                    class: "mr-2",
                    size: "18"
                })
            }
            );
            var ll = $(Qr, 4);
            am(ll, {
                size: "16",
                class: "absolute -top-4 -right-4 text-green-700 cursor-help"
            });
            var Zr = $(ti, 2)
              , cl = B(Zr);
            ce(cl, () => v(A), ne => {
                var Te = vm();
                U(ne, Te)
            }
            , ne => {
                os(ne, {
                    class: "mr-2",
                    size: "18"
                })
            }
            );
            var Kr = $(Zr, 2)
              , ul = B(Kr);
            ce(ul, () => v(C), ne => {
                var Te = ym();
                U(ne, Te)
            }
            , ne => {
                os(ne, {
                    class: "mr-2",
                    size: "18"
                })
            }
            );
            var zn = $(Kr, 2)
              , dl = B(zn);
            ce(dl, () => v(R), ne => {
                var Te = Tm();
                U(ne, Te)
            }
            , ne => {
                os(ne, {
                    class: "mr-2",
                    size: "18"
                })
            }
            ),
            _e( () => {
                Qr.disabled = v(P),
                Zr.disabled = v(A),
                Kr.disabled = v(C),
                zn.disabled = v(R)
            }
            ),
            Ge("click", Qr, async () => {
                try {
                    I(P, !0),
                    I(i, null),
                    I(m, "Starting deep extraction..."),
                    F("deepExtraction"),
                    await em(v(T), v(g), v(d), v(_)),
                    K()
                } catch {
                    I(i, "Deep analysis failed. Please try again or use regular extract.")
                } finally {
                    I(P, !1)
                }
            }
            ),
            Ge("click", Zr, async () => {
                try {
                    I(A, !0),
                    I(i, null),
                    I(m, "Preparing Excel file..."),
                    F("download"),
                    await Zh(v(T), v(g), v(d), v(_)),
                    K()
                } catch {
                    I(i, "Download failed. Please try again or use another format.")
                } finally {
                    I(A, !1)
                }
            }
            ),
            Ge("click", Kr, async () => {
                try {
                    I(C, !0),
                    I(i, null),
                    I(m, "Preparing CSV file..."),
                    F("download"),
                    await Kh(v(T), v(g), v(d), v(_)),
                    K()
                } catch {
                    I(i, "Download failed. Please try again or use another format.")
                } finally {
                    I(C, !1)
                }
            }
            ),
            Ge("click", zn, async () => {
                try {
                    I(R, !0),
                    I(i, null),
                    I(m, "Preparing JSON file..."),
                    F("download"),
                    await Qh(v(T), v(g), v(d), v(_)),
                    K()
                } catch {
                    I(i, "Download failed. Please try again or use another format.")
                } finally {
                    I(R, !1)
                }
            }
            ),
            U(Vn, Ks)
        }
        );
        var xe = $(te, 2)
          , zt = B(xe);
        qh(zt, {
            get transactions() {
                return v(r)
            }
        }),
        U(z, W)
    }
    );
    var yr = $(st, 4)
      , $t = B(yr)
      , Tr = B($t);
    lm(Tr, {
        class: "text-indigo-600 mb-3",
        size: "40",
        strokeWidth: 1.5
    });
    var Vt = $($t, 2)
      , Xr = B(Vt);
    nm(Xr, {
        class: "text-indigo-600 mb-3",
        size: "40",
        strokeWidth: 1.5
    });
    var Ir = $(Vt, 2)
      , kn = B(Ir);
    sm(kn, {
        class: "text-indigo-600 mb-3",
        size: "40",
        strokeWidth: 1.5
    });
    var br = $(Ir, 2)
      , $n = B(br);
    im($n, {
        class: "text-indigo-600 mb-3",
        size: "40",
        strokeWidth: 1.5
    }),
    U(e, ae),
    tt()
}
var Sm = Z(`<div class="px-4 py-8"><h1 class="text-2xl font-semibold mb-4">Privacy Policy</h1> <div class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none text-gray-700"><p>Our Privacy Policy was last updated on <strong>03/04/2025</strong>.</p> <p>At <strong>Razor Extract</strong>, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by <strong>Razor Extract</strong> and how we use it.</p> <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at <a href="mailto:hi@razorextract.com">hi@razorextract.com</a>.</p> <p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collected on <a href="https://razorextract.com" target="_blank" rel="noopener noreferrer">https://razorextract.com</a>. This policy is not applicable to any information collected offline or via channels other than this website.</p> <h2><strong>Consent</strong></h2> <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p> <h2><strong>Information We Collect</strong></h2> <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information. This policy has been generated by <a href="https://dodopayments.com">dodopayments.com</a>.</p> <p>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p> <p>When you register for an account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</p> <h2><strong>How We Use Your Information</strong></h2> <p>We use the information we collect in various ways, including to:</p> <ul><li>Provide, operate, and maintain our website.</li> <li>Improve, personalize, and expand our website.</li> <li>Understand and analyze how you use our website.</li> <li>Develop new products, services, features, and functionality.</li> <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes.</li> <li>Send you emails.</li> <li>Find and prevent fraud.</li></ul> <h2><strong>Log Files</strong></h2> <p><strong>Razor Extract</strong> follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this as part of hosting services' analytics.</p> <p>The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</p> <h2><strong>Cookies and Web Beacons</strong></h2> <p>Like any other website, <strong>Razor Extract</strong> uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited.</p> <p>The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p> <h2><strong>Advertising Partners Privacy Policies</strong></h2> <p>Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on <strong>Razor Extract</strong>, which are sent directly to users' browsers. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p> <p>Note that <strong>Razor Extract</strong> has no access to or control over these cookies that are used by third-party advertisers.</p> <h2><strong>Third Party Privacy Policies</strong></h2> <p><strong>Razor Extract</strong>'s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.</p> <p>You can choose to disable cookies through your individual browser options. This is recommended by dodopayments.com. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.</p> <h2><strong>CCPA Privacy Rights (Do Not Sell My Personal Information)</strong></h2> <p>Under the CCPA, among other rights, California consumers have the right to:</p> <ul><li>Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</li> <li>Request that a business delete any personal data about the consumer that a business has collected.</li> <li>Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</li></ul> <p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p> <h2><strong>GDPR Data Protection Rights</strong></h2> <p>We want to ensure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p> <ul><li><strong>The right to access:</strong> You have the right to request copies of your personal data. We may charge you a small fee for this service.</li> <li><strong>The right to rectification:</strong> You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</li> <li><strong>The right to erasure:</strong> You have the right to request that we erase your personal data, under certain conditions.</li> <li><strong>The right to restrict processing:</strong> You have the right to request that we restrict the processing of your personal data, under certain conditions.</li> <li><strong>The right to object to processing:</strong> You have the right to object to our processing of your personal data, under certain conditions.</li> <li><strong>The right to data portability:</strong> You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li></ul> <p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p> <h2><strong>Children's Information</strong></h2> <p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity. These guidelines have been generated by dodopayments.com.</p> <p><strong>Razor Extract</strong> does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p></div> <p class="mt-8 text-gray-700"><!></p></div>`);
function Om(e) {
    var t = Sm()
      , r = $(B(t), 4)
      , n = B(r);
    Kt(n, {
        to: "/",
        class: "text-indigo-600 hover:underline",
        children: (s, o) => {
            var i = Pr("Go back home");
            U(s, i)
        }
        ,
        $$slots: {
            default: !0
        }
    }),
    U(e, t)
}
var Dm = Z('<div class="px-4 py-8"><h1 class="text-2xl font-semibold mb-4">Refund Policy</h1> <div class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none text-gray-700"><h2><strong>Return &amp; Refund Policy</strong></h2> <p>Our Return and Refund Policy was last updated on <strong>03/04/2025</strong>.</p> <p>Thank you for shopping at <strong>Razor Extract</strong>.</p> <p>The following terms are applicable for any products that you have purchased from us.</p> <h2><strong>Eligibility for Refunds</strong></h2> <p>We offer refunds under the following circumstances:</p> <ul><li>If the service is not delivered as promised due to an error on our end.</li><li>If a technical issue caused by our platform prevents you from accessing the features you paid for, and the issue cannot be resolved within a reasonable timeframe.</li><li>If you cancel your subscription within the refund period outlined below.</li></ul> <h2><strong>Refund Period</strong></h2> <p>Refund requests must be made within <strong>30</strong> days of the payment date. Requests made after this period will not be eligible for a refund.</p> <h2><strong>Non-Refundable Cases</strong></h2> <p>Refunds will not be granted under the following conditions:</p> <ul><li>If you change your mind after purchasing a subscription or service.</li><li>If you fail to use the service during the subscription period.</li><li>If the issue is caused by third-party software or tools not affiliated with our platform.</li></ul> <h2><strong>Refund Process</strong></h2> <p>To request a refund, please follow these steps:</p> <ol><li>Contact our support team at <a href="mailto:hi@razorextract.com">hi@razorextract.com</a>.</li><li>Provide your payment receipt, order ID, and a detailed explanation of the issue.</li><li>Our team will review your request and respond within 3-5 business days.</li><li>If your request is approved, the refund will be processed to your original payment method within 7-10 business days.</li><li>This has been generated by <a href="https://dodopayments.com">dodopayments.com</a></li></ol> <h2><strong>Contact Us</strong></h2> <p>If you have any questions about this Refund Policy or require assistance, please reach out to us:</p> <p>Email: <a href="mailto:hi@razorextract.com">hi@razorextract.com</a></p></div> <p class="mt-8 text-gray-700"><!></p></div>');
function Pm(e) {
    var t = Dm()
      , r = $(B(t), 4)
      , n = B(r);
    Kt(n, {
        to: "/",
        class: "text-indigo-600 hover:underline",
        children: (s, o) => {
            var i = Pr("Go back home");
            U(s, i)
        }
        ,
        $$slots: {
            default: !0
        }
    }),
    U(e, t)
}
var Am = Z(`<div class="px-4 py-8"><h1 class="text-2xl font-semibold mb-4">Terms and Conditions</h1> <div class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none text-gray-700"><div><p>Our Terms and Conditions were last updated on <strong>03/04/2025</strong>.</p> <p>Please read these terms and conditions carefully before using Our Service.</p> <h3><strong>Acknowledgment</strong></h3> <p>These are the Terms and Conditions governing the use of this Service and the agreement that operates between you and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.</p> <p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users, and others who access or use the Service.</p> <p>By accessing or using the Service you agree to be bound by these Terms and Conditions. If you disagree with any part of these Terms and Conditions, then you may not access the Service. This acknowledgement has been suggested by <a href="https://dodopayments.com">dodopayments.com</a>.</p> <p>Your access to and use of the Service is also conditioned on your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of your personal information when you use the Application or the Website and tells you about your privacy rights and how the law protects you. Please read Our Privacy Policy carefully before using Our Service.</p> <h3><strong>User Accounts</strong></h3> <p>When you create an account with us, you must provide us with information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in the immediate termination of your account.</p> <p>You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with Our Service or a Third-Party Social Media Service. Dodopayments.com does not bear any liability for the same.</p> <p>You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p> <p>You may not use as a username the name of another person or entity that is not lawfully available for use, a name or trademark that is subject to any rights of another person or entity other than you without appropriate authorization, or a name that is otherwise offensive, vulgar, or obscene.</p> <h3><strong>Copyright Policy</strong></h3> <p><strong>Intellectual Property Infringement</strong></p> <p>All content, features, and functionality of our services, including but not limited to text, graphics, logos, and software, are the exclusive property of <strong>Razor Extract</strong> and are protected by international copyright, trademark, and other intellectual property laws.</p> <p><strong>DMCA Notice and DMCA Procedure for Copyright Infringement Claims</strong></p> <p>You may submit a notification pursuant to the Digital Millennium Copyright Act (DMCA) by providing our Copyright Agent with the following information in writing (see 17 U.S.C 512(c)(3) for further detail):</p> <ol><li>An electronic or physical signature of the person authorized to act on behalf of the owner of the copyright's interest.</li><li>A description of the copyrighted work that You claim has been infringed, including the URL (i.e., web page address) of the location where the copyrighted work exists or a copy of the copyrighted work.</li><li>Identification of the URL or other specific location on the Service where the material that You claim is infringing is located.</li><li>Your address, telephone number, and email address.</li><li>A statement by You that You have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law.</li><li>A statement by You, made under penalty of perjury, that the above information in Your notice is accurate and that You are the copyright owner or authorized to act on the copyright owner's behalf.</li></ol> <p>You can contact our copyright agent via email at <a href="mailto:hi@razorextract.com">hi@razorextract.com</a>. Upon receipt of a notification, the Company will take whatever action, in its sole discretion, it deems appropriate, including removing the challenged content from the Service.</p> <h3><strong>Intellectual Property</strong></h3> <p>The Service and its original content (excluding Content provided by you or other users), features, and functionality are and will remain the exclusive property of the Company and its licensors.</p> <p>The Service is protected by copyright, trademark, and other laws of both the Country and foreign countries. This is following the recommendation made by dodopayments.com.</p> <p>Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of the Company.</p> <h3><strong>Your Feedback to Us</strong></h3> <p>You assign all rights, title, and interest in any Feedback You provide to the Company. If for any reason such assignment is ineffective, You agree to grant the Company a non-exclusive, perpetual, irrevocable, royalty-free, worldwide right, and license to use, reproduce, disclose, sublicense, distribute, modify, and exploit such Feedback without restriction.</p> <h3><strong>Links to Other Websites</strong></h3> <p>Our Service may contain links to third-party websites or services that are not owned or controlled by the Company.</p> <p>The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.</p> <p>We strongly advise you to read the terms and conditions and privacy policies of any third-party websites or services that you visit.</p> <h3><strong>Termination</strong></h3> <p>We may terminate or suspend your Account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms and Conditions.</p> <p>Upon termination, your right to use the Service will cease immediately. If you wish to terminate your Account, you may simply discontinue using the Service.</p> <h3><strong>Limitation of Liability</strong></h3> <p>Notwithstanding any damages that you might incur, the entire liability of the Company and any of its suppliers under any provision of these Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by you through the Service or 100 USD if you haven't purchased anything through the Service.</p> <p><strong>"AS IS" and "AS AVAILABLE" Disclaimer</strong></p> <p>The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. This has been generated by dodopayments.com. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.</p> <p>Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.</p> <p>Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.</p> <h3><strong>Governing Law</strong></h3> <p>The laws of <strong>India</strong>, excluding its conflicts of law rules, shall govern these Terms and your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.</p> <h3><strong>Disputes Resolution</strong></h3> <p>If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.</p> <h3><strong>Changes to These Terms and Conditions</strong></h3> <p>We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will make reasonable efforts to provide at least 30 days' notice before any new terms take effect. What constitutes a material change will be determined at our sole discretion.</p> <p>By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.</p> <h3><strong>Contact Us</strong></h3> <p>If you have any questions about these Terms and Conditions, You can contact us:</p> <ul><li>By visiting our website: <a href="https://razorextract.com" target="_blank" rel="noopener noreferrer">https://razorextract.com</a></li><li>By sending us an email: <a href="mailto:hi@razorextract.com">hi@razorextract.com</a></li></ul></div></div></div>`);
function Lm(e) {
    var t = Am();
    U(e, t)
}
function dn(e, t) {
    et(t, !1),
    Yr( () => {
        window.scrollTo(0, 0)
    }
    ),
    dt();
    var r = ue()
      , n = se(r);
    Se(n, t, "default", {}),
    U(e, r),
    tt()
}
var Mm = Z('<!> <h1 class="text-2xl font-semibold">Razor Extract</h1>', 1)
  , Cm = Z('<div class="text-center p-4 bg-green-50 text-green-700 rounded border border-green-200 flex flex-col items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-green-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Your message has been sent successfully! We will reach out on your email. Please keep an eye. <p class="text-sm mt-2 font-medium">For faster responses, join our <a href="https://t.me/razorextract" target="_blank" rel="noopener noreferrer" class="text-indigo-600 underline hover:text-indigo-800">Telegram group</a>.</p></div>')
  , xm = Z('<div class="mb-4 text-center p-2 bg-red-100 text-red-700 rounded"> </div>')
  , Nm = Z(`<form class="space-y-4"><div><label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label> <input type="email" id="email" required class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" placeholder="Your Email Address"></div> <div><label for="category" class="block text-sm font-medium text-gray-700 mb-1">Category</label> <select id="category" required class="w-full px-3 py-2 pr-8 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 appearance-none bg-no-repeat bg-right bg-transparent" style="background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M7%208l3%203%203-3%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E'); background-position: right 0.5rem center;"><option>Bug Report</option><option>Feature Request</option><option>Feedback</option><option>I want an enterprise plan</option><option>Other</option></select></div> <div><label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label> <textarea id="message" required rows="4" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" placeholder="How can we help?"></textarea></div> <button type="submit"> </button></form>`)
  , Fm = Z('<div class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-40 text-sm" role="presentation" tabindex="-1"><div class="bg-white rounded-lg shadow-xl p-6 w-full max-w-md relative" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title"><h3 class="text-lg font-medium text-gray-900" id="contact-modal-title">Contact Us</h3> <button type="button" class="absolute top-2 right-2 p-1 text-gray-500 hover:text-gray-800" aria-label="Close Contact Form"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg></button> <p class="text-gray-600 text-sm mb-4">We are quick to respond</p> <!></div></div>')
  , Gm = Z('<div class="flex flex-col min-h-screen"><header class="bg-white z-50 shadow-sm sticky top-0"><div class="container mx-auto px-4 py-3"><div class="flex items-center justify-between"><!></div></div></header> <div class="bg-indigo-600 text-white py-3 px-4 shadow-md" style="display:none"><div class="container mx-auto flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-2"><div><span class="font-semibold">🚀 New!</span> Version 2 of Razor Extract with leading accuracy is now available as APIs. <a href="https://api.razorextract.com/docs" target="_blank" rel="noopener noreferrer" class="underline hover:text-indigo-200 font-medium">View Documentation</a></div> <div class="text-sm">Grab your API Key by sending email to <a href="mailto:admin@razorextract.com" class="underline hover:text-indigo-200">admin@razorextract.com</a></div></div></div> <main class="container mx-auto flex-grow svelte-dlninc"><!> <!> <!> <!></main> <footer class="bg-gray-100 border-t border-gray-200 mt-auto py-4 footer svelte-dlninc"><div class="container mx-auto px-4 text-sm text-gray-700 flex flex-col items-center gap-y-3 md:flex-row md:justify-between md:gap-x-6"><div class="flex items-center justify-center gap-4"><a href="https://t.me/razorextract" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-blue-600 transition-colors" title="Join us on Telegram" aria-label="Join us on Telegram"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="3 1 20 20" fill="currentColor"><path d="M9.78 18.65l.28-4.23l7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3L3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71l-4.39-3.41l-2.08 2.02c-.37.37-.69.7-1.25.7z"></path></svg></a> <button type="button" class="text-gray-600 hover:text-green-700 transition-colors" tabindex="0" title="Contact Us" aria-label="Contact Us"><!></button> <span> </span></div> <div class="flex items-center justify-center gap-4"><!> <span class="text-gray-400">|</span> <!> <span class="text-gray-400">|</span> <!></div></div></footer> <!></div>');
function Um(e, t) {
    et(t, !1);
    let r = j(!1)
      , n = j("")
      , s = j("")
      , o = j("feedback")
      , i = j()
      , l = !1
      , a = !1
      , u = j(!1)
      , c = j(!1)
      , d = j("");
    Yr( () => {
        const _ = window.location.hostname;
        return l = _.includes("localhost") || _.includes("127.0.0.1"),
        a = new URLSearchParams(window.location.search).get("magic") === "true",
        document.addEventListener("click", f),
        () => {
            document.removeEventListener("click", f)
        }
    }
    );
    function f(_) {
        v(r) && v(i) && !v(i).contains(_.target) && I(r, !1)
    }
    function h() {
        I(r, !v(r))
    }
    function p(_) {
        (_.key === "Enter" || _.key === " ") && (_.preventDefault(),
        h())
    }
    async function m() {
        I(u, !1),
        I(c, !0),
        I(d, "");
        try {
            const _ = new FormData;
            _.append("email", v(n)),
            _.append("category", v(o)),
            _.append("message", v(s)),
            _.append("magic", a.toString()),
            await Jh(_, l),
            I(n, ""),
            I(o, "feedback"),
            I(s, ""),
            I(u, !0)
        } catch {
            I(d, "Failed to send message. Please try again later.")
        } finally {
            I(c, !1)
        }
    }
    dt(),
    lu(e, {
        children: (_, g) => {
            var E = Gm()
              , y = B(E)
              , b = B(y)
              , T = B(b)
              , A = B(T);
            Kt(A, {
                to: "/",
                class: "flex items-center gap-2 text-gray-900 hover:text-indigo-700 transition",
                children: (J, ve) => {
                    var k = Mm()
                      , re = se(k);
                    du(re, {
                        size: 30,
                        class: "text-indigo-600",
                        strokeWidth: 1.7
                    }),
                    U(J, k)
                }
                ,
                $$slots: {
                    default: !0
                }
            });
            var C = $(y, 4)
              , R = B(C);
            rn(R, {
                path: "/",
                children: (J, ve) => {
                    dn(J, {
                        children: (k, re) => {
                            Rm(k, {})
                        }
                        ,
                        $$slots: {
                            default: !0
                        }
                    })
                }
                ,
                $$slots: {
                    default: !0
                }
            });
            var P = $(R, 2);
            rn(P, {
                path: "privacy",
                children: (J, ve) => {
                    dn(J, {
                        children: (k, re) => {
                            Om(k)
                        }
                        ,
                        $$slots: {
                            default: !0
                        }
                    })
                }
                ,
                $$slots: {
                    default: !0
                }
            });
            var N = $(P, 2);
            rn(N, {
                path: "refund",
                children: (J, ve) => {
                    dn(J, {
                        children: (k, re) => {
                            Pm(k)
                        }
                        ,
                        $$slots: {
                            default: !0
                        }
                    })
                }
                ,
                $$slots: {
                    default: !0
                }
            });
            var w = $(N, 2);
            rn(w, {
                path: "terms",
                children: (J, ve) => {
                    dn(J, {
                        children: (k, re) => {
                            Lm(k)
                        }
                        ,
                        $$slots: {
                            default: !0
                        }
                    })
                }
                ,
                $$slots: {
                    default: !0
                }
            });
            var x = $(C, 2)
              , V = B(x)
              , S = B(V)
              , L = $(B(S), 2)
              , O = B(L);
            fu(O, {
                size: 24
            });
            var M = $(L, 2)
              , F = B(M);
            _e( () => qe(F, `© ${new Date().getFullYear() ?? ""} Razor Extract`));
            var G = $(S, 2)
              , K = B(G);
            Kt(K, {
                to: "/privacy",
                class: "hover:text-indigo-700 hover:underline",
                children: (J, ve) => {
                    var k = Pr("Privacy Policy");
                    U(J, k)
                }
                ,
                $$slots: {
                    default: !0
                }
            });
            var q = $(K, 4);
            Kt(q, {
                to: "/terms",
                class: "hover:text-indigo-700 hover:underline",
                children: (J, ve) => {
                    var k = Pr("Terms & Conditions");
                    U(J, k)
                }
                ,
                $$slots: {
                    default: !0
                }
            });
            var pt = $(q, 4);
            Kt(pt, {
                to: "/refund",
                class: "hover:text-indigo-700 hover:underline",
                children: (J, ve) => {
                    var k = Pr("Refund Policy");
                    U(J, k)
                }
                ,
                $$slots: {
                    default: !0
                }
            });
            var kt = $(x, 2);
            ce(kt, () => v(r), J => {
                var ve = Fm()
                  , k = B(ve)
                  , re = $(B(k), 2)
                  , Ce = $(re, 4);
                ce(Ce, () => v(u), me => {
                    var ae = Cm();
                    U(me, ae)
                }
                , me => {
                    var ae = ue()
                      , nt = se(ae);
                    ce(nt, () => v(d), Er => {
                        var st = xm()
                          , wt = B(st);
                        _e( () => qe(wt, v(d))),
                        U(Er, st)
                    }
                    , Er => {
                        var st = Nm()
                          , wt = B(st)
                          , Wr = $(B(wt), 2)
                          , vr = $(wt, 2)
                          , jr = $(B(vr), 2);
                        _e( () => {
                            v(o),
                            ic( () => {}
                            )
                        }
                        );
                        var yr = B(jr);
                        yr.value = (yr.__value = "bug") == null ? "" : "bug";
                        var $t = $(yr);
                        $t.value = ($t.__value = "feature") == null ? "" : "feature";
                        var Tr = $($t);
                        Tr.value = (Tr.__value = "feedback") == null ? "" : "feedback";
                        var Vt = $(Tr);
                        Vt.value = (Vt.__value = "enterprise_plan") == null ? "" : "enterprise_plan";
                        var Xr = $(Vt);
                        Xr.value = (Xr.__value = "other") == null ? "" : "other";
                        var Ir = $(vr, 2)
                          , kn = $(B(Ir), 2)
                          , br = $(Ir, 2)
                          , $n = B(br);
                        _e( () => {
                            br.disabled = !v(n) || !v(o) || !v(s) || v(c),
                            Fs(br, `w-full bg-indigo-600 text-white py-2 px-4 rounded-md transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${(v(n) && v(o) && v(s) ? "hover:bg-indigo-700" : "") ?? ""}`),
                            qe($n, v(c) ? "Sending..." : "Send Message")
                        }
                        ),
                        hs(Wr, () => v(n), z => I(n, z)),
                        Nc(jr, () => v(o), z => I(o, z)),
                        hs(kn, () => v(s), z => I(s, z)),
                        Ge("submit", st, Bc(m)),
                        U(Er, st)
                    }
                    , !0),
                    U(me, ae)
                }
                ),
                la(k, me => I(i, me), () => v(i)),
                Ge("click", re, () => h()),
                Ge("click", ve, Gc( () => h())),
                Ge("keydown", ve, me => {
                    me.key === "Escape" && h()
                }
                ),
                U(J, ve)
            }
            ),
            Ge("click", L, Uc( () => h())),
            Ge("keydown", L, p),
            U(_, E)
        }
        ,
        $$slots: {
            default: !0
        }
    }),
    tt()
}
vc(Um, {
    target: document.getElementById("app")
});
