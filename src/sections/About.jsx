import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {generation1} from "../assets";

const About = () => {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);

    // Scroll-based animations
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [50, 0, 0, -50]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
                ease: "easeOut"
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: [0.25, 0.1, 0.25, 1],
            },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.95, x: 50 },
        visible: {
            opacity: 1,
            scale: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.3,
            },
        },
    };

    return (
        <motion.section
            id="about"
            ref={sectionRef}
            className="relative overflow-hidden bg-[#FCF9F5] min-h-screen flex items-center py-24 lg:py-32"
            style={{ opacity, y }}
        >
            {/* Premium Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 -right-40 w-80 h-80 bg-stone-400/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 -left-40 w-96 h-96 bg-stone-500/5 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-stone-400/3 to-stone-500/3 rounded-full blur-3xl" />

                {/* Subtle Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_100%]" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2, margin: "-50px" }}
                    variants={containerVariants}
                    className="max-w-7xl mx-auto"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Left Content Section */}
                        <div className="space-y-8">
                            {/* Premium Label */}
                            <motion.div variants={itemVariants}>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-px bg-gradient-to-r from-transparent to-stone-500" />
                                    <span className="text-stone-500 text-xs uppercase tracking-[0.3em] font-medium">
                                        About Abdulla Capital

                                    </span>
                                    <div className="w-12 h-px bg-gradient-to-l from-transparent to-stone-500" />
                                </div>
                            </motion.div>

                            {/* Main Heading */}
                            <motion.div variants={itemVariants}>
                                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-stone-900 mb-6 tracking-tight leading-[1.1]">
                                    Discretionary
                                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-stone-800 via-stone-700 to-stone-600 font-medium">
                                        Capital Stewardship
                                    </span>
                                </h1>
                            </motion.div>

                            {/* Elegant Divider */}
                            <motion.div
                                variants={itemVariants}
                                className="w-16 h-px bg-gradient-to-r from-stone-400 to-transparent"
                            />

                            {/* Paragraph Content */}
                            <motion.div variants={itemVariants}>
                                <p className="text-stone-600 font-light leading-relaxed text-base lg:text-lg max-w-xl">
                                    The Abdulla Capital is a private capital platform focused on long-term value creation through disciplined investment, strategic advisory, and equity partnerships.
                                </p>
                            </motion.div>

                            {/* Additional Refined Details */}
                            <motion.div
                                variants={itemVariants}
                                className="pt-6 space-y-3"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-px bg-stone-400" />
                                    <span className="text-stone-500 text-xs uppercase tracking-wider">
                                        Since 19.....
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-px bg-stone-400" />
                                    <span className="text-stone-500 text-xs uppercase tracking-wider">
                                        Global Multi-Family Office
                                    </span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Image Section */}
                        <motion.div
                            variants={imageVariants}
                            className="relative"
                            ref={imageRef}
                        >
                            <div className="relative">
                                {/* Decorative Rings */}
                                <motion.div
                                    className="absolute -top-10 -right-10 w-40 h-40 border border-stone-200 rounded-full"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    whileInView={{ scale: 1.1, opacity: 0.6 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    viewport={{ once: true }}
                                />
                                <motion.div
                                    className="absolute -bottom-10 -left-10 w-32 h-32 border border-stone-300/30 rounded-full"
                                    initial={{ scale: 0.6, opacity: 0 }}
                                    whileInView={{ scale: 1.2, opacity: 0.3 }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                    viewport={{ once: true }}
                                />

                                {/* Image Container */}
                                <div className="relative overflow-hidden shadow-2xl">
                                    <div className="relative aspect-[4/5] lg:aspect-square">
                                        {/* Replace with your actual image */}
                                        <img
                                            src={generation1}
                                            alt="Abdulla Capital"
                                            className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                                        />

                                        {/* Gradient Overlays */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#FCF9F5] via-[#FCF9F5]/20 to-transparent" />
                                        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/10 to-transparent" />
                                    </div>

                                    {/* Premium Overlay Card */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6, duration: 0.6 }}
                                        className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-5 border-l-4 border-stone-800 shadow-xl"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-stone-500 text-xs uppercase tracking-wider mb-1 font-semibold">
                                                    Capital Under Advisory
                                                </p>
                                                <p className="text-stone-800 text-2xl font-light">
                                                    $-----B+
                                                </p>
                                            </div>
                                            <div className="w-10 h-10 bg-stone-800 flex items-center justify-center">
                                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                </svg>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Floating Trust Badge */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5, duration: 0.5 }}
                                    className="absolute -top-6 -left-6 bg-stone-800 px-4 py-2 shadow-xl"
                                >
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                                        <span className="text-white text-xs uppercase tracking-wider font-medium">
                                            Trusted Partner
                                        </span>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Gradient Line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-400/30 to-transparent" />
        </motion.section>
    );
};

export default About;