import Lenis from "lenis";

let lenis = null;

export function initSmoothScroll() {
    if (lenis) return lenis;
    lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    const raf = (time) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    return lenis;
}

export function scrollToId(id) {
    const el = document.getElementById(id);
    if (!el) return;
    if (lenis) lenis.scrollTo(el, { offset: 0, duration: 1.5 });
    else el.scrollIntoView({ behavior: "smooth" });
}
