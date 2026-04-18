import { useEffect, useRef, useState } from "react";
import { AS } from "../assets";
import { Abdulla1 } from "../assets";
import { visionBackground } from "../assets";
import { invphil1 } from "../assets";
import { motion } from "framer-motion";


 const Vision = () => {
    const AnimatedText = ({ text, className, delay = 0 }) => {
        const words = text.split(" ");

        const containerVariants = {
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: {
                    staggerChildren: 0.08,
                    delayChildren: delay,
                },
            },
        };

        const childVariants = {
            hidden: { opacity: 0, y: 20 },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.4,
                    ease: "easeOut",
                },
            },
        };

        return (
            <motion.div
                className={className}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {words.map((word, index) => (
                    <motion.span
                        key={index}
                        variants={childVariants}
                        style={{ display: "inline-block", marginRight: "0.25em" }}
                    >
                        {word}
                    </motion.span>
                ))}
            </motion.div>
        );
    };
    const textContainerStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        padding: '40px',
        borderRadius: '10px',
        maxWidth: '800px',
    };
    const pageStyle = {
        backgroundImage: `url(${visionBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
    };


    return (
        <section>
            <div className="bg-gray-50 text-gray-900">
                <div className="max-w-7xl mx-auto px-6 py-16" style={pageStyle}>
                    <motion.div
                        style={textContainerStyle}
                        className="flex flex-col"
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        viewport={{once: true, amount: 0.2}}
                        transition={{duration: 0.5}}
                    >
                        <div className="text-center">
                            <motion.h2
                                className="text-4xl font-bold text-white"
                                initial={{opacity: 0, scale: 0.9}}
                                whileInView={{opacity: 1, scale: 1}}
                                viewport={{once: true, amount: 0.3}}
                                transition={{duration: 0.5}}
                            >
                                Our Vision
                            </motion.h2>

                            <AnimatedText
                                text="To build a capital platform that combines stewardship, strategic intelligence, and long-term partnerships across global markets."
                                className="mt-4 text-lg text-olive-300 max-w-3xl mx-auto"
                                delay={0.3}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Vision;