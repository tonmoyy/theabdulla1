import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { partnerships1 } from "../assets";
import Button from "../components/Button";

const partnerships = [
    {
        title: "Partner With Us",
        text: "The Abdulla Capital engages with institutional partners, family offices, and entrepreneurs seeking strategic capital and long-term growth partnerships.",
    }
];

const Partnerships = () => {
    const sectionRef = useRef(null);

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
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
            },
        },
    };

    const buttonVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
        hover: {
            y: -2,
            transition: {
                duration: 0.2,
                ease: "easeInOut",
            },
        },
        tap: {
            y: 0,
            scale: 0.98,
        },
    };

    return (
        <motion.section
            id="partnerships"
            ref={sectionRef}
            className="relative overflow-hidden bg-[#FCF9F5] py-24 lg:py-32"
            style={{ opacity, y }}
        >
            {/* Premium Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 -right-40 w-80 h-80 bg-stone-400/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 -left-40 w-96 h-96 bg-stone-500/5 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-stone-400/5 to-stone-500/5 rounded-full blur-3xl" />

                {/* Subtle Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_100%]" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2, margin: "-50px" }}
                    variants={containerVariants}
                    className="max-w-5xl mx-auto"
                >
                    {/* Header Section - Modern & Premium */}
                    <motion.div variants={itemVariants} className="text-center mb-16 lg:mb-24">
                        <div className="inline-block mb-6">
                            <div className="flex items-center justify-center gap-3">
                                <motion.div
                                    className="w-12 h-px bg-gradient-to-r from-transparent to-stone-500"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: 48 }}
                                    transition={{ duration: 0.8 }}
                                />
                                <span className="text-stone-500 text-sm uppercase tracking-[0.3em] font-medium">
                                    Strategic Alliances
                                </span>
                                <motion.div
                                    className="w-12 h-px bg-gradient-to-l from-transparent to-stone-500"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: 48 }}
                                    transition={{ duration: 0.8 }}
                                />
                            </div>
                        </div>

                        <motion.h2
                            variants={itemVariants}
                            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-stone-900 mb-8 tracking-tight"
                        >
                            Partnerships
                        </motion.h2>

                        {/* Centered Large Premium Image */}
                        <motion.div
                            variants={itemVariants}
                            className="flex justify-center items-center my-12"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <motion.div
                                className="relative"
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                                {/* Decorative Rings */}
                                <motion.div
                                    className="absolute -inset-8 border border-stone-200 rounded-full"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    whileInView={{ scale: 1.1, opacity: 0.6 }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                    viewport={{ once: true }}
                                />
                                <motion.div
                                    className="absolute -inset-12 border border-stone-300/30 rounded-full"
                                    initial={{ scale: 0.6, opacity: 0 }}
                                    whileInView={{ scale: 1.2, opacity: 0.3 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    viewport={{ once: true }}
                                />
                                <motion.div
                                    className="absolute -inset-16 border border-stone-400/10 rounded-full"
                                    initial={{ scale: 0.4, opacity: 0 }}
                                    whileInView={{ scale: 1.3, opacity: 0.15 }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                    viewport={{ once: true }}
                                />

                                {/* Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-stone-300/20 to-stone-400/20 rounded-full blur-3xl" />

                                {/* Main Image - Larger Size */}
                                <img
                                    src={partnerships1}
                                    alt="partner-ships"
                                    className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-contain relative z-10"
                                />

                                {/* Inner Glow Ring */}
                                <div className="absolute inset-0 rounded-full ring-1 ring-stone-300/20 ring-inset" />
                            </motion.div>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="w-20 h-px bg-gradient-to-r from-transparent via-stone-400 to-transparent mx-auto"
                        />
                    </motion.div>

                    {/* Content Section - Premium Minimalist */}
                    <motion.div
                        variants={containerVariants}
                        className="space-y-12"
                    >
                        {/* Partnership Text - Elegant Typography */}
                        <motion.div variants={itemVariants} className="text-center">
                            <div className="text-3xl lg:text-4xl font-light text-stone-800 mb-4 tracking-tight">
                                {partnerships[0].title}
                            </div>
                            <div className="text-stone-500 font-light leading-relaxed text-base lg:text-lg max-w-2xl mx-auto">
                                {partnerships[0].text}
                            </div>
                        </motion.div>

                        {/* Button Section - Premium Design */}
                        <motion.div
                            variants={containerVariants}
                            className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
                        >
                            {/* Outline Button - Premium */}
                            <motion.div
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="w-full sm:w-auto"
                            >
                                <button className="group relative px-10 py-4 bg-transparent border border-stone-400 hover:border-stone-600 text-stone-600 hover:text-stone-900 transition-all duration-300 text-sm uppercase tracking-wider font-medium w-full">
                                    <span className="relative z-10 flex items-center justify-center gap-3">
                                        Partnership Opportunities
                                        <svg
                                            className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </span>
                                    <span className="absolute bottom-0 left-0 w-0 h-px bg-stone-600 group-hover:w-full transition-all duration-500" />
                                </button>
                            </motion.div>

                            {/* Solid Button - Premium */}
                            <motion.div
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="w-full sm:w-auto"
                            >
                                <button className="group relative px-10 py-4 bg-stone-800 hover:bg-stone-700 text-white transition-all duration-300 text-sm uppercase tracking-wider font-medium w-full overflow-hidden shadow-lg hover:shadow-stone-800/20">
                                    <span className="relative z-10 flex items-center justify-center gap-3">
                                        Submit Proposal
                                        <svg
                                            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </span>
                                    <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                </button>
                            </motion.div>
                        </motion.div>

                        {/* Elegant Divider */}
                        <motion.div
                            variants={itemVariants}
                            className="relative pt-8"
                        >
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-px h-16 bg-gradient-to-b from-transparent via-stone-300 to-transparent" />
                            </div>
                        </motion.div>

                        {/* Additional Info Text - Refined */}
                        <motion.div
                            variants={itemVariants}
                            className="text-center"
                        >
                            <div className="text-stone-400 text-xs uppercase tracking-[0.2em]">
                                Join a network of strategic partners shaping global capital markets
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom Gradient Line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-400/30 to-transparent" />
        </motion.section>
    );
};

export default Partnerships;