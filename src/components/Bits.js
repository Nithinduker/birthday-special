import { motion } from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1];

export const Reveal = ({ children, delay = 0, y = 28, className = "" }) => (
    <motion.div
        initial={{ opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, delay, ease: EASE }}
        className={className}
    >
        {children}
    </motion.div>
);

export const SectionHeading = ({ eyebrow, title, sub, dark = false, align = "center" }) => (
    <div className={`${align === "center" ? "text-center mx-auto" : "text-left"} max-w-3xl`}>
        <Reveal>
            <div className={`flex items-center gap-4 ${align === "center" ? "justify-center" : ""}`}>
                <span className="gold-rule w-10" />
                <p className={`text-[11px] sm:text-xs font-medium tracking-[0.3em] uppercase ${dark ? "text-champagne" : "text-rose"}`}>
                    {eyebrow}
                </p>
                <span className="gold-rule w-10" />
            </div>
        </Reveal>
        <Reveal delay={0.1}>
            <h2 className={`font-display font-medium text-3xl sm:text-4xl lg:text-5xl leading-tight mt-5 ${dark ? "text-ivory" : "text-burgundy"}`}>
                {title}
            </h2>
        </Reveal>
        {sub ? (
            <Reveal delay={0.2}>
                <p className={`mt-5 text-base sm:text-lg font-light leading-relaxed ${dark ? "text-rose-light/90" : "text-burgundy/70"}`}>{sub}</p>
            </Reveal>
        ) : null}
    </div>
);

export const Heart = ({ className = "w-4 h-4", filled = true }) => (
    <svg viewBox="0 0 24 24" className={className} fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5">
        <path d="M12 21c-.5 0-8.5-5.2-8.5-11.2C3.5 6.6 6 4.5 8.8 4.5c1.6 0 2.6.8 3.2 1.8.6-1 1.6-1.8 3.2-1.8 2.8 0 5.3 2.1 5.3 5.3C20.5 15.8 12.5 21 12 21z" />
    </svg>
);

export const Monogram = ({ dark = false }) => (
    <span className={`inline-flex items-center gap-2 font-display text-xl tracking-widest ${dark ? "text-ivory" : "text-burgundy"}`}>
        <span className="font-medium">N</span>
        <Heart className="w-3.5 h-3.5 text-rose animate-heartbeat" />
        <span className="font-medium">M</span>
    </span>
);
