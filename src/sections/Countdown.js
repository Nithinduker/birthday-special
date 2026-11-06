import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import { SectionHeading, Reveal, Heart } from "../components/Bits";
import { BIRTHDAY } from "../data/site";
import { useNow, pad2 } from "@/lib/useNow";

const CONFETTI = ["#C87D87", "#E8D3B9", "#F2D6DC", "#8C4A52", "#FFFDF9"];

const unit = (ms) => ({
    days: Math.floor(ms / 86400000),
    hours: pad2(Math.floor((ms / 3600000) % 24)),
    minutes: pad2(Math.floor((ms / 60000) % 60)),
    seconds: pad2(Math.floor((ms / 1000) % 60)),
});

const Value = ({ v }) => (
    <span className="relative block h-[1em] leading-none overflow-hidden font-display font-medium text-5xl sm:text-6xl tabular-nums text-burgundy">
        <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
                key={v}
                initial={{ y: 18, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -18, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="block"
            >
                {v}
            </motion.span>
        </AnimatePresence>
    </span>
);

export const Countdown = () => {
    const now = useNow(1000);
    const diff = Math.max(0, BIRTHDAY.getTime() - now.getTime());
    const arrived = diff <= 0;
    const { days, hours, minutes, seconds } = unit(diff);
    const [celebrated, setCelebrated] = useState(false);

    useEffect(() => {
        if (arrived && !celebrated) {
            setCelebrated(true);
            confetti({ particleCount: 160, spread: 100, origin: { y: 0.5 }, colors: CONFETTI });
        }
    }, [arrived, celebrated]);

    const cells = [
        { v: String(days), label: "Days" },
        { v: hours, label: "Hours" },
        { v: minutes, label: "Minutes" },
        { v: seconds, label: "Seconds" },
    ];

    return (
        <section id="countdown" className="py-24 md:py-32 px-6 relative">
            <div className="max-w-5xl mx-auto">
                <SectionHeading
                    eyebrow="Live Birthday Countdown"
                    title={arrived ? "It's Your Day, Pappuma" : "Counting Every Second Until You"}
                    sub="November 17, 2026 — every heartbeat brings my Pappuma's special day closer."
                />

                <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                    {cells.map((c, i) => (
                        <Reveal key={c.label} delay={i * 0.1}>
                            <div data-testid={`countdown-${c.label.toLowerCase()}`} className="glass-card rounded-2xl px-4 py-8 sm:py-10 text-center">
                                <Value v={c.v} />
                                <p className="mt-3 text-[10px] sm:text-[11px] font-medium tracking-[0.3em] uppercase text-rose-deep">{c.label}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={0.3}>
                    <p className={`mt-10 text-center font-hand text-2xl sm:text-3xl ${arrived ? "text-rose-deep" : "text-burgundy/60"}`}>
                        {arrived ? (
                            <span className="inline-flex items-center gap-3">
                                the wait is over — happy birthday, Pappuma <Heart className="w-6 h-6 text-rose inline" />
                            </span>
                        ) : (
                            "…until the whole world celebrates the day it was given Mathu"
                        )}
                    </p>
                </Reveal>
            </div>
        </section>
    );
};
