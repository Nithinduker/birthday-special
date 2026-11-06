import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Music } from "lucide-react";
import { EASE, Heart } from "../components/Bits";
import { IMAGES } from "../data/site";
import { scrollToId } from "@/lib/scroll";

const line = {
    hidden: { y: "115%" },
    show: (d) => ({ y: "0%", transition: { duration: 1, delay: d, ease: EASE } }),
};

export const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const yImg = useTransform(scrollYProgress, [0, 1], [0, -70]);
    const yText = useTransform(scrollYProgress, [0, 1], [0, 60]);

    const audioRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    useEffect(() => {
        const a = new Audio("/audio/vazhithunaiye.mp3");
        a.loop = true;
        a.volume = 0.55;
        audioRef.current = a;
        return () => a.pause();
    }, []);
    const toggleMusic = () => {
        const a = audioRef.current;
        if (!a) return;
        if (playing) {
            a.pause();
            setPlaying(false);
        } else {
            a.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
        }
    };

    return (
        <section id="top" ref={ref} className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20">
            <div className="pointer-events-none absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-champagne-soft blur-3xl opacity-70" />
            <div className="pointer-events-none absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-rose-light blur-3xl opacity-50" />

            <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-14 lg:gap-8 items-center relative z-10 w-full">
                <motion.div style={{ y: yText }} className="lg:col-span-7">
                    <div className="overflow-hidden">
                        <motion.div variants={line} initial="hidden" animate="show" custom={2.15} className="flex items-center gap-4">
                            <span className="gold-rule w-12" />
                            <p className="text-[11px] sm:text-xs font-medium tracking-[0.32em] uppercase text-rose">
                                Welcome to Mathu's surprise
                            </p>
                        </motion.div>
                    </div>

                    <h1 className="font-display text-burgundy leading-[1.02] mt-7">
                        <span className="block overflow-hidden">
                            <motion.span variants={line} initial="hidden" animate="show" custom={2.3} className="block text-5xl sm:text-6xl lg:text-7xl font-medium">
                                Happy Birthday,
                            </motion.span>
                        </span>
                        <span className="block overflow-hidden pt-2">
                            <motion.span variants={line} initial="hidden" animate="show" custom={2.45} className="block font-script text-rose-deep text-6xl sm:text-7xl lg:text-8xl leading-[1.1]">
                                my Pappuma <Heart className="inline w-9 h-9 sm:w-11 sm:h-11 text-rose align-baseline" />
                            </motion.span>
                        </span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.7, duration: 0.9, ease: EASE }}
                        className="mt-7 max-w-xl text-base sm:text-lg font-light leading-relaxed text-burgundy/70"
                    >
                        Two and a half years of us — every laugh, every late-night talk, every
                        little moment — leading to this. I made something for you, Pappuma.
                        Scroll slowly, my love.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.85, duration: 0.9, ease: EASE }}
                        className="mt-10 flex flex-wrap items-center gap-4"
                    >
                        <button
                            data-testid="welcome-hero-cta"
                            onClick={() => scrollToId("countdown")}
                            className="group relative overflow-hidden rounded-full bg-rose-deep text-ivory px-8 py-4 text-xs font-medium tracking-[0.22em] uppercase transition-transform duration-300 hover:-translate-y-0.5"
                        >
                            <span className="absolute inset-0 bg-rose translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out" />
                            <span className="relative">Begin the Surprise</span>
                        </button>
                        <button
                            data-testid="hero-memories-cta"
                            onClick={() => scrollToId("memories")}
                            className="rounded-full border border-rose/40 text-rose-deep px-8 py-4 text-xs font-medium tracking-[0.22em] uppercase hover:bg-rose-light/40 transition-colors duration-300"
                        >
                            Our Favourite Moments
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 3.0, duration: 0.9, ease: EASE }}
                        className="mt-5"
                    >
                        <button
                            data-testid="music-toggle"
                            onClick={toggleMusic}
                            className="group inline-flex items-center gap-3 glass-card rounded-full pl-2 pr-6 py-2 hover:-translate-y-0.5 transition-transform duration-300"
                        >
                            <span className={`w-9 h-9 rounded-full bg-rose-deep text-ivory flex items-center justify-center ${playing ? "animate-spin-slow" : ""}`}>
                                <Music className="w-4 h-4" />
                            </span>
                            <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-burgundy/80">
                                {playing ? "Pause Our Melody" : "Play Our Melody"}
                            </span>
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3.1, duration: 1 }}
                        className="mt-10 flex flex-wrap gap-3"
                    >
                        {["Nithin ♥ Mathu", "900+ Days Together", "Nov 17, 2026"].map((b, i) => (
                            <span key={i} className="glass-card rounded-full px-5 py-2.5 text-[11px] font-medium tracking-[0.2em] uppercase text-burgundy/80">
                                {b}
                            </span>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div style={{ y: yImg }} className="lg:col-span-5 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.35, duration: 1.1, ease: EASE }}
                        className="relative mx-auto w-[82%] sm:w-[70%] lg:w-full max-w-md"
                    >
                        <div className="arch-frame spotlight relative border-[10px] border-silk shadow-[0_50px_100px_-40px_rgba(140,74,82,0.45)]">
                            <img
                                src={IMAGES.hero}
                                alt="Nithin and Mathu, forehead to forehead, smiling"
                                style={{ objectPosition: "center 30%" }}
                                className="w-full h-[420px] sm:h-[520px] object-cover"
                            />
                        </div>
                        <span className="animate-floaty absolute -left-10 top-16 glass-card rounded-full px-4 py-2 text-[11px] font-medium tracking-[0.2em] uppercase text-rose-deep">
                            Nov 17
                        </span>
                        <span className="animate-floaty absolute -right-6 bottom-24 glass-card rounded-full px-4 py-2 text-[11px] font-medium tracking-[0.2em] uppercase text-rose-deep" style={{ animationDelay: "1.2s" }}>
                            2½ years
                        </span>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.4, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
            >
                <span className="text-[10px] font-medium tracking-[0.35em] uppercase text-burgundy/50">scroll</span>
                <span className="block w-px h-10 bg-gradient-to-b from-rose to-transparent animate-scroll-hint" />
            </motion.div>
        </section>
    );
};
