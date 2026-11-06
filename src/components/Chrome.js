import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Monogram } from "./Bits";
import { scrollToId } from "@/lib/scroll";

const LINKS = [
    { id: "countdown", label: "Countdown" },
    { id: "journey", label: "Journey" },
    { id: "memories", label: "Memories" },
    { id: "reasons", label: "Reasons" },
    { id: "letter", label: "Letter" },
    { id: "gift", label: "Gift" },
];

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
                scrolled ? "bg-ivory/85 backdrop-blur-md border-b border-champagne/60 py-3" : "bg-transparent py-5"
            }`}
        >
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                <button data-testid="navbar-monogram" onClick={() => scrollToId("top")} className="cursor-pointer">
                    <Monogram />
                </button>
                <nav className="hidden md:flex items-center gap-7">
                    {LINKS.map((l) => (
                        <button
                            key={l.id}
                            data-testid={`nav-link-${l.id}`}
                            onClick={() => scrollToId(l.id)}
                            className="text-[11px] font-medium tracking-[0.22em] uppercase text-burgundy/70 hover:text-rose-deep transition-colors duration-300"
                        >
                            {l.label}
                        </button>
                    ))}
                </nav>
                <span className="md:hidden text-[10px] font-medium tracking-[0.25em] uppercase text-rose-deep bg-rose-light/50 border border-rose/30 rounded-full px-3 py-1.5">
                    17 · 11 · 2026
                </span>
            </div>
        </motion.header>
    );
};

export const Marquee = () => {
    const items = ["Nithin ♥ Mathu", "2½ Years of Us", "Happy Birthday, Pappuma", "17 · 11 · 2026", "Forever to Go"];
    const Row = ({ hidden }) => (
        <div aria-hidden={hidden} className="flex items-center shrink-0">
            {items.map((item, i) => (
                <span key={i} className="flex items-center shrink-0">
                    <span className="font-display italic font-medium text-xl sm:text-2xl text-burgundy/80 px-8 whitespace-nowrap">{item}</span>
                    <span className="text-rose text-sm">✦</span>
                </span>
            ))}
        </div>
    );
    return (
        <div className="border-y border-champagne/70 bg-silk py-5 overflow-hidden relative z-10">
            <div className="marquee-track">
                <Row />
                <Row hidden />
            </div>
        </div>
    );
};

export const Footer = () => (
    <footer className="bg-burgundy text-center px-6 py-16">
        <Monogram dark />
        <p className="font-script text-3xl sm:text-4xl text-champagne mt-6">made with all my heart, for you</p>
        <p className="text-rose-light/80 text-sm font-light mt-4 tracking-wide">
            2½ years down, forever to go · 17.11.2026
        </p>
        <p className="text-ivory/50 text-xs font-light mt-8 tracking-[0.3em] uppercase">— Nithin 🤍</p>
    </footer>
);
