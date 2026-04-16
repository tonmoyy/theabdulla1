import { motion, useScroll, useTransform } from "framer-motion";
import Button from "../components/Button";
import Heading from "../components/Heading";
import { geographic1, benefitIcon1 } from "../assets";
import { useEffect, useState, useRef } from "react";

const Geographic = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const imageRef = useRef(null);

    // Scroll-based animations
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.95]);
    const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [50, 0, 0, -50]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
                ease: "easeOut"
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
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
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    const statVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: "easeOut",
            },
        }),
    };

    return (
        <motion.section
            id="geographic"
            ref={sectionRef}
            className="relative overflow-hidden bg-[#FCF9F5]"
            style={{ opacity, scale, y }}
        >
            {/* Premium Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 -left-40 w-80 h-80 bg-stone-400/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 -right-40 w-96 h-96 bg-stone-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-stone-400/5 to-stone-500/5 rounded-full blur-3xl" />

                {/* Subtle Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
            </div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15, margin: "-100px" }}
                    variants={containerVariants}
                >
                    {/* Premium Header */}
                    <motion.div variants={itemVariants} className="text-center mb-16 lg:mb-24">
                        <div className="inline-block mb-6">
                            <div className="flex items-center justify-center gap-3">
                                <motion.div
                                    className="w-12 h-px bg-gradient-to-r from-transparent to-stone-600"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: 48 }}
                                    transition={{ duration: 0.8 }}
                                />
                                <span className="text-stone-600 text-sm uppercase tracking-[0.3em] font-medium">
                                    Global Presence
                                </span>
                                <motion.div
                                    className="w-12 h-px bg-gradient-to-l from-transparent to-stone-600"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: 48 }}
                                    transition={{ duration: 0.8 }}
                                />
                            </div>
                        </div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl sm:text-6xl lg:text-7xl font-light text-stone-900 mb-6 tracking-tight"
                        >
                            Geographic
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-stone-800 via-stone-700 to-stone-600 font-medium">
                                Outlook
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg lg:text-xl text-stone-600 max-w-3xl mx-auto font-light leading-relaxed"
                        >
                            Strategic deployment of capital across key global markets with
                            a focus on sustainable growth and risk-adjusted returns
                        </motion.p>
                    </motion.div>

                    {/* Main Content Grid */}
                    <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center"
                    >
                        {/* Left Content Section */}
                        <div className="space-y-10">
                            <div>
                                <motion.h2
                                    variants={itemVariants}
                                    className="text-3xl lg:text-4xl xl:text-5xl font-light text-stone-900 mb-6 leading-[1.2] tracking-tight"
                                >
                                    A Global Perspective With
                                    <span className="text-stone-700 block mt-2 font-medium">
                                        Strategic Regional Focus
                                    </span>
                                </motion.h2>

                                <motion.div variants={itemVariants}>
                                    <p className="text-base lg:text-lg text-stone-600 font-light leading-relaxed">
                                        Abdulla Capital operates with an international outlook while
                                        maintaining strong strategic engagement across the Middle East,
                                        Europe and selected emerging markets. Our diversified approach
                                        ensures optimal risk management and sustainable growth
                                        opportunities.
                                    </p>
                                </motion.div>
                            </div>

                            {/* Statistics Section */}
                            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 py-6 border-y border-stone-200">
                                {[
                                    { value: "15+", label: "Global Markets" },
                                    { value: "$2.5B+", label: "Assets Under Management" },
                                    { value: "25+", label: "Strategic Partners" },
                                ].map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        custom={index}
                                        variants={statVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        className="text-center group cursor-pointer"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <div className="text-2xl lg:text-3xl font-semibold text-stone-800 mb-1 group-hover:text-stone-600 transition-colors">
                                            {stat.value}
                                        </div>
                                        <div className="text-xs lg:text-sm text-stone-500 font-medium uppercase tracking-wide">
                                            {stat.label}
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Key Pillars */}
                            <motion.div variants={itemVariants} className="space-y-6">
                                {[
                                    {
                                        title: "Strategic Markets",
                                        description: "Focused expansion across MENA, Europe, and emerging economies",
                                        icon: "🌍"
                                    },
                                    {
                                        title: "Risk Management",
                                        description: "Diversified portfolio approach for sustainable returns",
                                        icon: "📊"
                                    },
                                    {
                                        title: "Global Network",
                                        description: "Established partnerships and local expertise worldwide",
                                        icon: "🤝"
                                    },
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        custom={index}
                                        className="group flex items-start space-x-5 p-4 rounded-xl transition-all duration-300 hover:bg-stone-100 cursor-pointer"
                                        whileHover={{ x: 10 }}
                                    >
                                        <div className="text-2xl opacity-70 group-hover:opacity-100 transition-opacity">{item.icon}</div>
                                        <div className="flex-1">
                                            <h4 className="text-stone-800 font-medium text-lg mb-2 group-hover:text-stone-600 transition-colors">
                                                {item.title}
                                            </h4>
                                            <p className="text-stone-500 font-light text-sm leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                        <div className="w-6 h-px bg-gradient-to-r from-stone-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Premium Button with Dark Gray Color */}
                            <motion.div
                                variants={itemVariants}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Button className="group relative overflow-hidden bg-gradient-to-r from-stone-800 via-stone-700 to-stone-800 hover:from-stone-700 hover:via-stone-600 hover:to-stone-700 text-white border border-stone-600/30 shadow-xl hover:shadow-stone-800/20 transition-all duration-300 px-10 py-5 text-base font-medium tracking-wide rounded-none w-full lg:w-auto">
                                    <span className="relative z-10 flex items-center justify-center gap-3">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Explore Our Markets
                                        <motion.svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            animate={{ x: 0 }}
                                            whileHover={{ x: 5 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </motion.svg>
                                    </span>
                                    <motion.span
                                        className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"
                                    />
                                </Button>
                            </motion.div>

                            {/* Additional Market Insights Card */}
                            <motion.div
                                variants={itemVariants}
                                className="mt-8 p-6 bg-stone-100 border-l-4 border-stone-700"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8, duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <p className="text-stone-600 text-sm font-light italic">
                                    "Our market expansion strategy focuses on sustainable growth through strategic partnerships
                                    and deep local expertise across all operational regions."
                                </p>
                                <div className="mt-3 flex items-center gap-2">
                                    <div className="w-8 h-px bg-stone-500" />
                                    <span className="text-stone-600 text-xs uppercase tracking-wider">Investment Committee</span>
                                </div>
                            </motion.div>

                            {/* Markets Overview */}
                            <motion.div
                                variants={itemVariants}
                                className="grid grid-cols-2 gap-4 pt-4"
                            >
                                <div className="bg-stone-50 p-4 border border-stone-200 hover:border-stone-400 transition-colors duration-300">
                                    <div className="text-stone-800 text-lg font-medium mb-1">MENA</div>
                                    <div className="text-stone-500 text-xs uppercase tracking-wider">Regional HQ</div>
                                </div>
                                <div className="bg-stone-50 p-4 border border-stone-200 hover:border-stone-400 transition-colors duration-300">
                                    <div className="text-stone-800 text-lg font-medium mb-1">Europe</div>
                                    <div className="text-stone-500 text-xs uppercase tracking-wider">Strategic Hub</div>
                                </div>
                                <div className="bg-stone-50 p-4 border border-stone-200 hover:border-stone-400 transition-colors duration-300">
                                    <div className="text-stone-800 text-lg font-medium mb-1">Asia-Pacific</div>
                                    <div className="text-stone-500 text-xs uppercase tracking-wider">Growth Markets</div>
                                </div>
                                <div className="bg-stone-50 p-4 border border-stone-200 hover:border-stone-400 transition-colors duration-300">
                                    <div className="text-stone-800 text-lg font-medium mb-1">Emerging</div>
                                    <div className="text-stone-500 text-xs uppercase tracking-wider">Opportunity Markets</div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Image Section */}
                        <motion.div
                            variants={imageVariants}
                            className="relative"
                            ref={imageRef}
                        >
                            <div className="relative rounded-none overflow-hidden shadow-2xl">
                                {/* Image Container */}
                                <div className="relative aspect-[4/5] lg:aspect-square">
                                    <motion.img
                                        src={geographic1}
                                        alt="Geographic Outlook"
                                        className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.6 }}
                                    />

                                    {/* Gradient Overlays */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#FCF9F5] via-[#FCF9F5]/20 to-transparent" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-stone-800/10 to-transparent" />
                                </div>

                                {/* Premium Card Overlay */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: 0.6 }}
                                    className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-none p-5 border-l-4 border-stone-700 shadow-xl"
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-stone-600 text-xs uppercase tracking-wider mb-1 font-semibold">
                                                Active Regions
                                            </p>
                                            <p className="text-stone-800 text-sm font-medium">
                                                MENA • Europe • Asia-Pacific
                                            </p>
                                        </div>
                                        <motion.div
                                            className="w-10 h-10 bg-gradient-to-r from-stone-700 to-stone-600 rounded-none flex items-center justify-center cursor-pointer"
                                            whileHover={{ x: 5 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </motion.div>
                                    </div>
                                </motion.div>

                                {/* Decorative Rings */}
                                <div className="absolute -top-5 -right-5 w-32 h-32 border border-stone-400/20 rounded-full animate-pulse" />
                                <div className="absolute -bottom-5 -left-5 w-24 h-24 border border-stone-400/20 rounded-full animate-pulse delay-1000" />
                            </div>

                            {/* Floating Icon Badge */}
                            <motion.div
                                className="absolute -top-8 -right-8 bg-gradient-to-r from-stone-700 to-stone-600 backdrop-blur-md rounded-none p-4 shadow-2xl cursor-pointer"
                                initial={{ opacity: 0, rotate: -10, scale: 0.9 }}
                                whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                                whileHover={{ rotate: 5, scale: 1.05 }}
                            >
                                <img src={benefitIcon1} alt="Icon" className="w-8 h-8 brightness-0 invert" />
                            </motion.div>

                            {/* Market Presence Indicator */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.7 }}
                                className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-3 py-1.5"
                            >
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-stone-600 rounded-full animate-pulse" />
                                    <span className="text-stone-700 text-xs font-medium uppercase tracking-wider">15+ Markets Active</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom Gradient Line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-400/50 to-transparent" />
        </motion.section>
    );
};

export default Geographic;