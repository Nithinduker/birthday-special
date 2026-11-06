import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading, Heart } from "../components/Bits";
import { REASONS } from "../data/site";
import { EASE } from "../components/Bits";

const FlipCard = ({ reason, i }) => {
    const [flipped, setFlipped] = useState(false);
    return (
        <motion.button
            data-testid={`reason-card-${i + 1}`}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: (i % 5) * 0.08, ease: EASE }}
            onClick={() => setFlipped(!flipped)}
            className="relative h-52 w-full [perspective:1200px] cursor-pointer"
            aria-label={`Reason ${i + 1}: tap to reveal`}
        >
            <motion.div
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="relative h-full w-full [transform-style:preserve-3d]"
            >
                <div className="absolute inset-0 [backface-visibility:hidden] glass-card rounded-2xl flex flex-col items-center justify-center gap-4 px-4">
                    <span className="font-display font-medium text-4xl text-rose-deep">{String(i + 1).padStart(2, "0")}</span>
                    <Heart className="w-5 h-5 text-rose" />
                    <span className="text-[10px] font-medium tracking-[0.25em] uppercase text-burgundy/50">tap to reveal</span>
                </div>
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl bg-gradient-to-br from-rose-deep to-plum flex items-center justify-center p-5 shadow-[0_20px_40px_-20px_rgba(54,22,34,0.6)]">
                    <p className="font-hand text-xl sm:text-2xl leading-snug text-ivory text-center">{reason}</p>
                </div>
            </motion.div>
        </motion.button>
    );
};

export const Reasons = () => (
    <section id="reasons" className="py-24 md:py-32 px-6 bg-champagne-soft/50">
        <div className="max-w-6xl mx-auto">
            <SectionHeading
                eyebrow="10 Reasons I Love You"
                title="Ten Out of a Million"
                sub="I tried to write them all down — these ten barely scratch the surface. Flip them, one by one."
            />
            <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
                {REASONS.map((r, i) => (
                    <FlipCard key={i} reason={r} i={i} />
                ))}
            </div>
        </div>
    </section>
);
