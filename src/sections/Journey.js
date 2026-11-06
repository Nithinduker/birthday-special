import { motion } from "framer-motion";
import { SectionHeading, Reveal } from "../components/Bits";
import { JOURNEY, IMAGES } from "../data/site";
import { EASE } from "../components/Bits";

const Item = ({ m, i }) => {
    const left = i % 2 === 0;
    return (
        <div className={`relative md:w-1/2 ${left ? "md:pr-14 md:self-start md:text-right" : "md:pl-14 md:self-end"} pl-14 md:pl-0 pb-14`}>
            <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, ease: EASE }}
                className={`absolute top-1.5 w-4 h-4 rounded-full bg-rose shadow-[0_0_0_6px_rgba(200,125,135,0.25)] left-[5px] md:left-auto ${
                    left ? "md:-right-2" : "md:-left-2"
                }`}
            />
            <Reveal>
                <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-champagne">{m.chapter}</p>
                <h3 className="font-display font-medium text-2xl sm:text-3xl text-ivory mt-3">{m.title}</h3>
                <p className="mt-3 text-sm sm:text-base font-light leading-relaxed text-rose-light/85 max-w-md md:inline-block">{m.text}</p>
            </Reveal>
        </div>
    );
};

export const Journey = () => (
    <section id="journey" className="relative py-24 md:py-32 px-6 bg-burgundy overflow-hidden">
        <img src={IMAGES.journey} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover opacity-[0.08]" />
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy via-transparent to-burgundy" />
        <div className="max-w-5xl mx-auto relative z-10">
            <SectionHeading
                dark
                eyebrow="Our 2½ Years Journey"
                title="A Story Written in Little Moments"
                sub="From the first hello to today — every chapter better than the last."
            />
            <div className="mt-16 relative flex flex-col">
                <span className="absolute left-[12px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-champagne/60 to-transparent" />
                {JOURNEY.map((m, i) => (
                    <Item key={i} m={m} i={i} />
                ))}
            </div>
        </div>
    </section>
);
