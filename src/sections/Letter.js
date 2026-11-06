import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeading, Heart } from "../components/Bits";
import { LETTER, IMAGES } from "../data/site";
import { EASE } from "../components/Bits";

export const Letter = () => {
    const [open, setOpen] = useState(false);

    return (
        <section id="letter" className="py-24 md:py-32 px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
                <div className="relative order-2 lg:order-1">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.9, ease: EASE }}
                        className="relative mx-auto w-[85%] sm:w-[70%] lg:w-full max-w-md"
                    >
                        <div className="arch-frame spotlight relative border-[10px] border-silk shadow-[0_50px_100px_-40px_rgba(140,74,82,0.45)]">
                            <img src={IMAGES.letter} alt="A single rose, kept for you" className="w-full h-[420px] sm:h-[500px] object-cover" />
                        </div>
                        <p className="font-script text-3xl text-rose-deep absolute -bottom-6 right-2 rotate-[-4deg]">for the birthday girl</p>
                    </motion.div>
                </div>

                <div className="order-1 lg:order-2">
                    <SectionHeading
                        align="left"
                        eyebrow="A Letter to My Pappuma"
                        title="Some Words I've Been Saving"
                        sub="I'm not great at saying soft things out loud — so I wrote them down for you instead."
                    />

                    <div className="mt-10 min-h-[420px]">
                        <AnimatePresence mode="wait">
                            {!open ? (
                                <motion.button
                                    key="envelope"
                                    data-testid="letter-open-button"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -14, scale: 0.96 }}
                                    transition={{ duration: 0.45, ease: EASE }}
                                    onClick={() => setOpen(true)}
                                    className="relative w-full max-w-md mx-auto block cursor-pointer group"
                                >
                                    <div className="relative bg-silk border border-champagne rounded-xl shadow-[0_30px_60px_-30px_rgba(140,74,82,0.45)] overflow-hidden h-56">
                                        <div
                                            className="absolute inset-x-0 top-0 h-28 bg-champagne-soft border-b border-champagne"
                                            style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
                                        />
                                        <div className="absolute inset-x-0 bottom-0 h-full" style={{ clipPath: "polygon(0 100%, 100% 100%, 50% 45%)", background: "linear-gradient(180deg, #FDF6EC, #F4E6D4)" }} />
                                        <div className="absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-rose-deep flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                            <Heart className="w-6 h-6 text-ivory" />
                                        </div>
                                    </div>
                                    <p className="font-script text-4xl text-burgundy mt-6 text-center group-hover:text-rose-deep transition-colors duration-300">
                                        For Pappuma — open me
                                    </p>
                                </motion.button>
                            ) : (
                                <motion.div
                                    key="paper"
                                    data-testid="letter-paper"
                                    initial={{ opacity: 0, y: 30, rotate: -1.5 }}
                                    animate={{ opacity: 1, y: 0, rotate: -0.5 }}
                                    transition={{ duration: 0.8, ease: EASE }}
                                    className="paper-lines relative bg-silk border border-champagne rounded-lg shadow-[0_36px_70px_-32px_rgba(140,74,82,0.5)] px-7 sm:px-10 py-9 max-w-xl mx-auto"
                                >
                                    {LETTER.map((p, i) => (
                                        <p
                                            key={i}
                                            className={`font-hand leading-[36px] ${i === 0 ? "text-3xl text-rose-deep" : "text-xl sm:text-2xl text-burgundy/85"} ${i > 0 ? "mt-4" : ""}`}
                                        >
                                            {p}
                                        </p>
                                    ))}
                                    <p className="font-script text-4xl text-burgundy mt-8 text-right">— Nithin</p>
                                    <button
                                        data-testid="letter-close-button"
                                        onClick={() => setOpen(false)}
                                        className="mt-6 block mx-auto text-[10px] font-medium tracking-[0.3em] uppercase text-burgundy/50 hover:text-rose-deep transition-colors"
                                    >
                                        fold it back
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};
