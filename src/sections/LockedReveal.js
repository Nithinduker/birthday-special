import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Heart, Lock } from "lucide-react";
import { SectionHeading, Reveal } from "../components/Bits";
import { BIRTHDAY, PASSCODES, REVEAL_MESSAGE } from "../data/site";
import { useNow } from "@/lib/useNow";
import { EASE } from "../components/Bits";

const CONFETTI = ["#C87D87", "#E8D3B9", "#F2D6DC", "#8C4A52", "#FFFDF9"];
const STORAGE_KEY = "pappuma_reveal_2026";

const diffString = (ms) => {
    const d = Math.floor(ms / 86400000);
    const h = Math.floor((ms / 3600000) % 24);
    const m = Math.floor((ms / 60000) % 60);
    const s = Math.floor((ms / 1000) % 60);
    return `${String(d).padStart(3, "0")}d : ${String(h).padStart(2, "0")}h : ${String(m).padStart(2, "0")}m : ${String(s).padStart(2, "0")}s`;
};

export const LockedReveal = () => {
    const now = useNow(1000);
    const arrived = now.getTime() >= BIRTHDAY.getTime();
    const [unlocked, setUnlocked] = useState(() => localStorage.getItem(STORAGE_KEY) === "true");
    const [code, setCode] = useState("");
    const [error, setError] = useState(false);

    useEffect(() => {
        if (arrived) setUnlocked(true);
    }, [arrived]);

    const tryUnlock = (e) => {
        e.preventDefault();
        if (PASSCODES.includes(code.trim().toUpperCase())) {
            localStorage.setItem(STORAGE_KEY, "true");
            setUnlocked(true);
            setError(false);
            setTimeout(() => {
                confetti({ particleCount: 200, spread: 110, origin: { y: 0.55 }, colors: CONFETTI });
            }, 400);
        } else {
            setError(true);
            setTimeout(() => setError(false), 1800);
        }
    };

    return (
        <section id="reveal" className="relative py-24 md:py-32 px-6 bg-burgundy overflow-hidden">
            <div className="pointer-events-none absolute -top-24 right-0 w-[420px] h-[420px] rounded-full bg-plum blur-3xl opacity-70" />
            <div className="max-w-3xl mx-auto relative z-10">
                <SectionHeading
                    dark
                    eyebrow="The Final Surprise"
                    title={unlocked ? "It Was Always You" : "Sealed Until November 17, 2026"}
                    sub={unlocked ? undefined : "The last door opens on your birthday — or sooner, if you know the secret word."}
                />

                <div className="mt-14 min-h-[340px]">
                    <AnimatePresence mode="wait">
                        {!unlocked ? (
                            <motion.div
                                key="locked"
                                data-testid="reveal-locked-card"
                                initial={{ opacity: 0, y: 24 }}
                                animate={error ? { x: [0, -10, 10, -6, 6, 0] } : { opacity: 1, y: 0, x: 0 }}
                                exit={{ opacity: 0, y: -20, scale: 0.97 }}
                                transition={error ? { duration: 0.5 } : { duration: 0.7, ease: EASE }}
                                className="glass-dark rounded-3xl px-6 sm:px-12 py-12 text-center max-w-xl mx-auto"
                            >
                                <span className="inline-flex w-16 h-16 rounded-full items-center justify-center bg-champagne/15 border border-champagne/30">
                                    <Lock className="w-6 h-6 text-champagne" />
                                </span>
                                <p className="mt-6 text-champagne/90 text-xs font-medium tracking-[0.3em] uppercase">unlocks in</p>
                                <p data-testid="reveal-countdown" className="font-display font-medium text-2xl sm:text-3xl tabular-nums text-ivory mt-3">
                                    {diffString(Math.max(0, BIRTHDAY.getTime() - now.getTime()))}
                                </p>
                                <form onSubmit={tryUnlock} className="mt-9 flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
                                    <input
                                        data-testid="locked-reveal-passcode-input"
                                        type="text"
                                        value={code}
                                        onChange={(e) => setCode(e.target.value)}
                                        placeholder="whisper the secret word…"
                                        className="flex-1 bg-burgundy/40 border border-champagne/30 rounded-full px-6 py-3.5 text-sm text-ivory placeholder:text-ivory/40 outline-none focus:border-rose transition-colors"
                                    />
                                    <button
                                        data-testid="locked-reveal-submit-button"
                                        type="submit"
                                        className="rounded-full bg-champagne text-burgundy px-7 py-3.5 text-xs font-medium tracking-[0.22em] uppercase hover:bg-rose-light transition-colors duration-300"
                                    >
                                        Unlock
                                    </button>
                                </form>
                                {error ? (
                                    <p data-testid="reveal-error" className="mt-4 text-sm text-rose-light font-light">
                                        not quite, my love — try again
                                    </p>
                                ) : (
                                    <p className="mt-4 text-xs text-ivory/50 font-light tracking-wide">
                                        P.S. a little bird says the word is your nickname + the year…
                                    </p>
                                )}
                            </motion.div>
                        ) : (
                            <motion.div
                                key="unlocked"
                                data-testid="reveal-unlocked-card"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: EASE }}
                                className="glass-dark rounded-3xl px-6 sm:px-12 py-12 text-center max-w-xl mx-auto"
                            >
                                <Heart className="w-10 h-10 text-rose mx-auto animate-heartbeat" />
                                <h3 className="font-script text-5xl sm:text-6xl text-champagne mt-6">Happy Birthday, Mathu</h3>
                                <div className="gold-rule w-40 mx-auto my-8" />
                                {REVEAL_MESSAGE.map((p, i) => (
                                    <p key={i} className="font-hand text-xl sm:text-2xl leading-relaxed text-ivory/90 mt-4">
                                        {p}
                                    </p>
                                ))}
                                <p className="font-script text-4xl text-rose-light mt-8">— Nithin</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};
