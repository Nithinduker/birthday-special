import React, { useEffect, useState, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE } from "./components/Bits";
import { initSmoothScroll } from "@/lib/scroll";
import { Navbar, Marquee, Footer } from "./components/Chrome";
import { Hero } from "./sections/Hero";
import { Countdown } from "./sections/Countdown";
import { Journey } from "./sections/Journey";
import { Memories } from "./sections/Memories";
import { Reasons } from "./sections/Reasons";
import { Letter } from "./sections/Letter";
import { Gift } from "./sections/Gift";
import { LockedReveal } from "./sections/LockedReveal";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-ivory text-burgundy font-display text-2xl text-center px-6">
                    Something went wrong — refresh and it will be right back, Pappuma.
                </div>
            );
        }
        return this.props.children;
    }
}

const Intro = () => (
    <motion.div
        key="intro"
        exit={{ y: "-100%" }}
        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-0 z-[100] bg-burgundy flex flex-col items-center justify-center"
    >
        <motion.svg
            viewBox="0 0 24 24"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="w-10 h-10 text-rose animate-heartbeat"
            fill="currentColor"
        >
            <path d="M12 21c-.5 0-8.5-5.2-8.5-11.2C3.5 6.6 6 4.5 8.8 4.5c1.6 0 2.6.8 3.2 1.8.6-1 1.6-1.8 3.2-1.8 2.8 0 5.3 2.1 5.3 5.3C20.5 15.8 12.5 21 12 21z" />
        </motion.svg>
        <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: EASE }}
            className="font-script text-5xl sm:text-6xl text-champagne mt-6"
        >
            For my Pappuma
        </motion.p>
        <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="text-[10px] font-medium tracking-[0.4em] uppercase text-rose-light/80 mt-4"
        >
            from Nithin, with love
        </motion.p>
    </motion.div>
);

const Home = () => {
    const [intro, setIntro] = useState(true);

    useEffect(() => {
        initSmoothScroll();
        const t = setTimeout(() => setIntro(false), 2100);
        return () => clearTimeout(t);
    }, []);

    return (
        <div className="grain bg-ivory text-burgundy font-sans min-h-screen">
            <AnimatePresence>{intro && <Intro />}</AnimatePresence>
            <Navbar />
            <main>
                <Hero />
                <Marquee />
                <Countdown />
                <Journey />
                <Memories />
                <Reasons />
                <Letter />
                <Gift />
                <LockedReveal />
            </main>
            <Footer />
        </div>
    );
};

function App() {
    return (
        <ErrorBoundary>
            <Suspense fallback={<div className="min-h-screen bg-ivory" />}>
                <Home />
            </Suspense>
        </ErrorBoundary>
    );
}

export default App;
