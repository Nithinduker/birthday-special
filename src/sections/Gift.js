import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import confetti from "canvas-confetti";
import { SectionHeading } from "../components/Bits";
import { GIFT_VOUCHERS, IMAGES } from "../data/site";
import { EASE } from "../components/Bits";
import { UtensilsCrossed, IceCreamCone, Popcorn, Crown } from "lucide-react";

const ICONS = { utensils: UtensilsCrossed, icecream: IceCreamCone, popcorn: Popcorn, crown: Crown };
const CONFETTI = ["#C87D87", "#E8D3B9", "#F2D6DC", "#8C4A52", "#FFFDF9"];

export const Gift = () => {
    const [opened, setOpened] = useState(false);

    const open = () => {
        setOpened(true);
        setTimeout(() => {
            confetti({ particleCount: 140, spread: 90, origin: { y: 0.6 }, colors: CONFETTI });
        }, 350);
    };

    return (
        <section id="gift" className="relative py-24 md:py-32 px-6 overflow-hidden">
            <img src={IMAGES.gift} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover opacity-[0.07]" />
            <div className="max-w-5xl mx-auto relative z-10">
                <SectionHeading
                    eyebrow="Open Your Little Gift"
                    title="A Little Something, Wrapped in Rose Gold"
                    sub="It isn't much — just a few promises with your name on them. Go on, open it."
                />

                <div className="mt-16 flex flex-col items-center">
                    {!opened && (
                        <motion.button
                            data-testid="gift-box-button"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7, ease: EASE }}
                            onClick={open}
                            className="relative flex flex-col items-center cursor-pointer group"
                        >
                            <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}>
                                <div className="relative w-44 h-36 sm:w-52 sm:h-40">
                                    <div className="absolute bottom-0 inset-x-0 h-24 sm:h-28 rounded-b-lg rounded-t-sm bg-gradient-to-b from-rose to-rose-deep shadow-[0_30px_60px_-24px_rgba(140,74,82,0.55)]" />
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-full bg-champagne shadow-md" />
                                    <motion.div
                                        className="absolute top-0 inset-x-0 h-9 sm:h-10 rounded-md bg-gradient-to-b from-rose-light to-rose z-10 shadow-lg group-hover:-translate-y-2 transition-transform duration-300"
                                        style={{ transformOrigin: "left center" }}
                                    >
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-full bg-champagne rounded-t-md" />
                                    </motion.div>
                                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20 flex">
                                        <span className="w-8 h-6 bg-champagne rounded-tl-full rounded-tr-md rotate-[-14deg]" />
                                        <span className="w-8 h-6 bg-champagne rounded-tr-full rounded-tl-md rotate-[14deg]" />
                                    </div>
                                </div>
                            </motion.div>
                            <span className="mt-10 text-xs font-medium tracking-[0.3em] uppercase text-rose-deep border border-rose/40 rounded-full px-7 py-3.5 group-hover:bg-rose-light/40 transition-colors duration-300">
                                Tap to Open Your Little Gift
                            </span>
                        </motion.button>
                    )}

                    <AnimatePresence>
                        {opened && (
                            <motion.div
                                data-testid="gift-vouchers"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="w-full"
                            >
                                <motion.p
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3, duration: 0.6, ease: EASE }}
                                    className="font-script text-4xl sm:text-5xl text-rose-deep text-center mb-10"
                                >
                                    All yours, Pappuma — redeem anytime, forever
                                </motion.p>
                                <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
                                    {GIFT_VOUCHERS.map((v, i) => {
                                        const Icon = ICONS[v.icon];
                                        return (
                                            <motion.div
                                                key={i}
                                                data-testid={`gift-voucher-${i + 1}`}
                                                initial={{ opacity: 0, y: 30, rotate: i % 2 ? 1.5 : -1.5 }}
                                                animate={{ opacity: 1, y: 0, rotate: 0 }}
                                                transition={{ delay: 0.45 + i * 0.15, duration: 0.6, ease: EASE }}
                                                whileHover={{ y: -5 }}
                                                className="glass-card rounded-2xl p-6 flex items-start gap-4"
                                            >
                                                <span className="shrink-0 w-12 h-12 rounded-full bg-rose-light/60 border border-rose/30 flex items-center justify-center">
                                                    <Icon className="w-5 h-5 text-rose-deep" />
                                                </span>
                                                <span>
                                                    <span className="block font-display font-medium text-xl text-burgundy">{v.title}</span>
                                                    <span className="block mt-1.5 text-sm font-light leading-relaxed text-burgundy/70">{v.text}</span>
                                                </span>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.3, duration: 0.6 }}
                                    className="text-center mt-10 text-[11px] font-medium tracking-[0.3em] uppercase text-burgundy/50"
                                >
                                    with love, Nithin — no expiry, ever
                                </motion.p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};
