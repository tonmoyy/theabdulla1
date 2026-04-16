import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {vision1} from "../assets";

const Vision = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <section ref={ref} className="min-h-screen bg-[#FCF9F5] flex items-center py-24">
            <div className="container mx-auto px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto"
                >
                    {/* Left Content */}
                    <div className="space-y-6">
                        <motion.div variants={itemVariants}>
                            <span className="text-stone-400 text-sm uppercase tracking-[0.3em]">
                                Our Vision
                            </span>
                        </motion.div>

                        <motion.h1 variants={itemVariants} className="text-5xl lg:text-6xl xl:text-7xl font-light text-stone-900 leading-tight">
                            Placeholder
                            <span className="block font-medium">Place Holder</span>
                        </motion.h1>

                        <motion.div variants={itemVariants} className="w-16 h-px bg-stone-300" />

                        <motion.p variants={itemVariants} className="text-stone-600 text-lg leading-relaxed">
                            To build a capital platform that combines stewardship, strategic intelligence, and
                            long-term partnerships across global markets.
                        </motion.p>

                        <motion.div variants={itemVariants} className="pt-4">
                            <div className="border-l-2 border-stone-300 pl-6">
                                <p className="text-stone-500 text-sm italic">
                                    "Capital preserved with purpose becomes legacy."
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Image */}
                    <motion.div
                        variants={itemVariants}
                        className="relative"
                    >
                        <div className="aspect-[4/5] overflow-hidden shadow-2xl">
                            <img
                                src={vision1}
                                alt="Vision - Generational Wealth"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 grayscale-[15%] hover:grayscale-0"
                            />
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-4 -left-4 bg-stone-800 px-4 py-2 shadow-xl">
                            <span className="text-white text-xs uppercase tracking-wider font-medium">
                                Perpetuity Focused
                            </span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Vision;