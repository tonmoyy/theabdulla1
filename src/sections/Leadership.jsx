// components/Leadership.jsx
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Abdulla1 } from "../assets"; // adjust path as needed

const Leadership = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [40, 0, 0, -40]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
                ease: "easeOut",
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
        hidden: { opacity: 0, scale: 0.95, x: 30 },
        visible: {
            opacity: 1,
            scale: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.2,
            },
        },
    };

    const leadershipData = {
        name: "Abdulla Salem",
        description:
            "Abdulla Salem – Entrepreneur, investor, and strategic operator building ventures across the sports and investment ecosystem.",
        imageUrl: Abdulla1,
    };

    return (
        <motion.section
            ref={sectionRef}
            style={{ opacity, y }}
            className="relative overflow-hidden bg-[#FCF9F5] py-24 lg:py-32"
        >
            {/* Premium Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 -right-40 w-80 h-80 bg-stone-400/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 -left-40 w-96 h-96 bg-stone-500/5 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-stone-400/3 to-stone-500/3 rounded-full blur-3xl" />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_100%]" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="max-w-7xl mx-auto"
                >
                    {/* Section Header – reduced bottom margin */}
                    <motion.div variants={itemVariants} className="text-center mb-8 lg:mb-12">
                        <div className="inline-flex items-center gap-2 mb-6">
                            <span className="w-8 h-px bg-stone-500" />
                            <span className="text-stone-500 text-xs uppercase tracking-[0.3em] font-medium">
                                Executive Leadership
                            </span>
                            <span className="w-8 h-px bg-stone-500" />
                        </div>
                        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light text-stone-900 tracking-tight mb-6">
                            Driving Strategic Vision
                        </h2>
                        <motion.div
                            variants={itemVariants}
                            className="w-24 h-px bg-gradient-to-r from-stone-400 to-transparent mx-auto mb-6"
                        />
                        <p className="text-stone-600 font-light text-lg max-w-3xl mx-auto">
                            Decades of collective expertise across global markets and asset classes.
                        </p>
                    </motion.div>

                    {/* Content Grid */}
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Left Image */}
                        <motion.div variants={imageVariants} className="relative">
                            <div className="relative overflow-hidden shadow-2xl rounded-2xl">
                                <img
                                    src={leadershipData.imageUrl}
                                    alt={leadershipData.name}
                                    className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#FCF9F5] via-transparent to-transparent" />
                            </div>
                        </motion.div>

                        {/* Right Content – CTA removed */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            <h3 className="text-4xl font-light text-stone-900">
                                {leadershipData.name}
                            </h3>
                            <p className="text-stone-600 font-light leading-relaxed text-lg">
                                {leadershipData.description}
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Gradient Line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-400/30 to-transparent" />
        </motion.section>
    );
};

export default Leadership;