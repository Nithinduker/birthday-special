import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeading } from "../components/Bits";
import { MEMORIES } from "../data/site";
import { EASE } from "../components/Bits";

const tilt = ["-rotate-2", "rotate-1", "rotate-2", "-rotate-1", "rotate-1", "-rotate-2"];

export const Memories = () => {
    const [open, setOpen] = useState(null);

    return (
        <section id="memories" className="py-24 md:py-32 px-6">
            <div className="max-w-6xl mx-auto">
                <SectionHeading
                    eyebrow="Our Memories"
                    title="Little Moments, Kept Forever"
                    sub="A pocketful of us — tap any frame to hold it a little closer."
                />

                <div className="mt-16 columns-2 gap-6 [&>*]:mb-6">
                    {MEMORIES.map((m, i) => (
                        <motion.button
                            key={i}
                            data-testid={`memory-card-${i}`}
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ duration: 0.7, delay: (i % 3) * 0.12, ease: EASE }}
                            whileHover={{ y: -6, rotate: 0, scale: 1.015 }}
                            onClick={() => setOpen(i)}
                            className={`group relative block w-full bg-silk p-3 pb-4 shadow-[0_24px_50px_-24px_rgba(140,74,82,0.4)] border border-champagne/50 ${tilt[i % tilt.length]} cursor-pointer`}
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={m.src}
                                    alt={m.alt || m.caption}
                                    loading="lazy"
                                    className="w-full h-60 sm:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <p className="font-hand text-xl sm:text-2xl text-burgundy/80 mt-3 px-1">{m.caption}</p>
                            <span className="absolute top-4 right-4 w-2.5 h-2.5 rounded-full bg-rose/70" />
                        </motion.button>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {open !== null && (
                    <motion.div
                        data-testid="memory-lightbox"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setOpen(null)}
                        className="fixed inset-0 z-[90] bg-burgundy/80 backdrop-blur-sm flex items-center justify-center p-6 cursor-zoom-out"
                    >
                        <motion.figure
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.94, opacity: 0 }}
                            transition={{ duration: 0.4, ease: EASE }}
                            className="bg-silk p-4 pb-6 max-w-2xl w-full shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img src={MEMORIES[open].src} alt={MEMORIES[open].caption} className="w-full max-h-[70vh] object-cover" />
                            <figcaption className="font-hand text-3xl text-burgundy/85 text-center mt-4">{MEMORIES[open].caption}</figcaption>
                        </motion.figure>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};
