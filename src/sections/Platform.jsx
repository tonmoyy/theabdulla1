import { useEffect, useRef, useState } from "react";
import { AS } from "../assets";
import { Abdulla1 } from "../assets";
import { visionBackground } from "../assets";
import { invphil1 } from "../assets";
import { motion } from "framer-motion";

const Platform = () => {
    // AnimatedText component defined INSIDE Platform (or move it outside)
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

    const frameStyle = {
        padding: '10px',
        border: '5px solid #333',
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        display: 'inline-block',
        borderRadius: '0px'
    };

   // From Deep Seek
    const [isVisible, setIsVisible] = useState(false);
    const [activeTab, setActiveTab] = useState("long-term-investment");
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const tabs = [
        {
            id: "long-term-investment",
            title: "Long-term investment mindset",
            description: "We prioritize sustainable value creation over short-term gains, focusing on investments that compound value over decades.",
            image: invphil1
        },
        {
            id: "governance-driven",
            title: "Governance-driven decision making",
            description: "Our decisions are guided by robust governance frameworks that ensure transparency, accountability, and alignment with stakeholder interests.",
            image: invphil1
        },
        {
            id: "strategic-partnerships",
            title: "Strategic partnerships over speculation",
            description: "We build lasting partnerships based on trust and mutual value creation, avoiding speculative approaches that compromise long-term stability.",
            image: invphil1
        },
        {
            id: "sustainable-value",
            title: "Focus on sustainable value creation",
            description: "Environmental, social, and governance factors are integrated into our investment process to drive resilient, long-term returns.",
            image: invphil1
        }
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    //From DeepSeek

    // States and refs for Div 1
    const [isVisible1, setIsVisible1] = useState(false);
    const domRef1 = useRef();

    const createObserver = (setState) => new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setState(true);
                }
            });
        },
        { threshold: 0.99 }
    );

    useEffect(() => {
        const observer1 = createObserver(setIsVisible1);
        const { current: current1 } = domRef1;
        if (current1) observer1.observe(current1);

        return () => {
            if (current1) observer1.unobserve(current1);
        };
    }, []);

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

    const textContainerStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        padding: '40px',
        borderRadius: '10px',
        maxWidth: '800px',
    };

    const leadershipData = {
        name: "Abdulla Salem",
        description: "Abdulla Salem Entrepreneur, investor, and strategic operator building ventures across the sports and investment ecosystem.",
        imageUrl: Abdulla1
    };

    return (
        <div>
            <section
                id="about-us"
                className="gm-flexible-small-image-content align-full gm-section-element gm-flexible-small-image-content_bg-sand-text-deepgrey-cta-drkblu"
            >
                <div
                    ref={domRef1}
                    className={`gm-flexible-small-image-content__container gm-flexible-small-image-content__container_text-right ${isVisible1 ? 'is-visible' : ''}`}
                >
                    <div className="gm-flexible-small-image-content__image">
                        <img
                            decoding="async"
                            width={469}
                            height={505}
                            src={AS}
                            className="attachment-medium_large size-medium_large lazyload"
                            alt="A unique perspective of a building from below, showcasing architectural innovation."
                            sizes="(max-width: 469px) 100vw, 469px"
                            data-src="https://www.TheAbdullaCapital.com/wp-content/uploads/2023/08/Rectangle-4517.jpg"
                            data-srcset="https://www.TheAbdullaCapital.com/wp-content/uploads/2023/08/Rectangle-4517.jpg 469w, https://www.TheAbdullaCapital.com/wp-content/uploads/2023/08/Rectangle-4517-279x300.jpg 279w"
                        />
                        <div className="gm-flexible-small-image-content__frame" />
                    </div>
                    <div className="gm-flexible-small-image-content__content">
                        <div className="gm-flexible-small-image-content__text">
                            <h2>A Multi-Disciplinary Capital Platform</h2>
                            <p>
                                Abdulla Capital operates at the intersection of private
                                investment, strategic advisory and equity participation. The
                                platform is designed to preserve capital, assess opportunity
                                and create enduring value across sectors, markets and
                                long-term partnerships.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="gm-links-carousel-images-block_90c699bbddfa7a18f235fdaa3e69ef4b"
                className="gm-links-carousel-images align-full gm-section-element gm-links-carousel-images_bg-ltblu-text-deepgrey-cta-drkblu"
                ref={sectionRef}
                style={{
                    padding: "80px 0",
                    background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)"
                }}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    {/* Modern High-End Heading Section */}
                    <motion.div
                        className="text-center mb-16 md:mb-20"
                        initial={{ opacity: 0 }}
                        animate={isVisible ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Pre-heading accent */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.4 }}
                            className="inline-flex items-center gap-2 mb-6"
                        >
                            <span className="w-8 h-0.5 bg-blue-600"></span>
                            <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">
                            Our Philosophy
                        </span>
                            <span className="w-8 h-0.5 bg-blue-600"></span>
                        </motion.div>

                        {/* Main Heading with High-End Font */}
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="font-heading mb-6"
                            style={{
                                fontFamily: "'Playfair Display', 'Times New Roman', serif",
                                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                                fontWeight: "600",
                                letterSpacing: "-0.02em",
                                background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text"
                            }}
                        >
                            Disciplined Capital<br />
                            <span style={{ fontWeight: "400", fontStyle: "italic" }}>Allocation</span>
                        </motion.h2>

                        {/* Decorative line */}
                        <motion.div
                            initial={{ opacity: 0, width: 0 }}
                            animate={isVisible ? { opacity: 1, width: "100px" } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            style={{
                                height: "2px",
                                background: "linear-gradient(90deg, transparent, #3b82f6, #1e40af, #3b82f6, transparent)",
                                margin: "0 auto",
                                borderRadius: "2px"
                            }}
                        />

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-gray-600 max-w-3xl mx-auto mt-8 text-lg leading-relaxed"
                        >
                            We operate with a disciplined investment framework rooted in
                            governance, long-term thinking, and strategic alignment. We
                            prioritise sustainable value over short-term gains.
                        </motion.p>
                    </motion.div>

                    {/* Content Section - No Side Bars */}
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                        {/* Tabs Section - Clean hover effect only */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate={isVisible ? "visible" : "hidden"}
                        >
                            <div className="space-y-2">
                                {tabs.map((tab, index) => (
                                    <motion.button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        variants={itemVariants}
                                        whileHover={{ x: 8 }}
                                        transition={{ duration: 0.2 }}
                                        className={`w-full text-left p-5 rounded-xl transition-all duration-300 cursor-pointer ${
                                            activeTab === tab.id
                                                ? "bg-white shadow-lg border border-gray-100"
                                                : "hover:bg-white/50 hover:shadow-md"
                                        }`}
                                    >
                                        <h3
                                            className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${
                                                activeTab === tab.id
                                                    ? "text-blue-600"
                                                    : "text-gray-800 hover:text-blue-600"
                                            }`}
                                        >
                                            {tab.title}
                                        </h3>
                                        {activeTab === tab.id && (
                                            <motion.p
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                transition={{ duration: 0.3 }}
                                                className="text-gray-500 mt-3 text-sm md:text-base leading-relaxed"
                                            >
                                                {tab.description}
                                            </motion.p>
                                        )}
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>

                        {/* Image Section */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={isVisible ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="relative"
                        >
                            <motion.div
                                key={activeTab}
                                initial="hidden"
                                animate="visible"
                                variants={imageVariants}
                                className="rounded-2xl overflow-hidden shadow-2xl"
                            >
                                <img
                                    src={tabs.find(t => t.id === activeTab)?.image || invphil1}
                                    alt={tabs.find(t => t.id === activeTab)?.title}
                                    className="w-full h-auto object-cover"
                                    style={{ aspectRatio: "4/3" }}
                                />
                            </motion.div>

                            {/* Decorative accent */}
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600/10 rounded-full -z-10" />
                            <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-600/5 rounded-full -z-10" />
                        </motion.div>
                    </div>
                </div>

                {/* Custom Styles */}
                <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&display=swap');
                
                .font-heading {
                    font-family: 'Playfair Display', 'Times New Roman', serif;
                }
                
                @media (max-width: 768px) {
                    section {
                        padding: 60px 0;
                    }
                }
            `}</style>
            </section>

            {/*Leader ship*/}

            <section
                id="leadership"
                className="gm-featured-content-2up gm-section-element gm-featured-content-2up_ow-top-dg-text-sand-bottom"
            >
                {/* Modern Corporate Header */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-7xl mx-auto px-6 mb-16"
                >
                    <div className="flex flex-col items-center text-center">
                        {/* Main Heading */}
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
                        >
                <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                    Executive Leadership
                </span>
                        </motion.h2>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-gray-500 text-lg max-w-2xl"
                        >
                            Driving strategic vision with decades of collective expertise
                        </motion.p>

                        {/* Decorative elements */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex gap-2 mt-6"
                        >
                            <div className="w-12 h-0.5 bg-blue-600 rounded-full" />
                            <div className="w-6 h-0.5 bg-blue-400 rounded-full" />
                            <div className="w-3 h-0.5 bg-blue-200 rounded-full" />
                        </motion.div>
                    </div>
                </motion.div>

                {/* Leadership Content */}
                <motion.div
                    className="leadership-container"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "2rem",
                        alignItems: "center",
                        maxWidth: "1200px",
                        margin: "0 auto",
                        padding: "0 1rem",
                    }}
                >
                    <div
                        style={{
                            flex: "1 1 300px",
                            minWidth: 0,
                            overflow: "hidden",
                        }}
                    >
                        <motion.div
                            className="image-side"
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            <img
                                src={leadershipData.imageUrl}
                                alt={leadershipData.name}
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    display: "block",
                                    objectFit: "cover",
                                    borderRadius: "8px",
                                }}
                            />
                        </motion.div>
                    </div>

                    <motion.div
                        className="description-side"
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        style={{
                            flex: "1 1 300px",
                            minWidth: 0,
                        }}
                    >
                        <div className="text-content">
                            <h1 className="name">{leadershipData.name}</h1>
                            <p className="description">{leadershipData.description}</p>
                            <button className="cta-button">Read Full Bio</button>
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            <section>
                <div className="bg-gray-50 text-gray-900">
                    <div className="max-w-7xl mx-auto px-6 py-16" style={pageStyle}>
                        <motion.div
                            style={textContainerStyle}
                            className="flex flex-col"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="text-center">
                                <motion.h2
                                    className="text-4xl font-bold text-white"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.5 }}
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
        </div>
    );
};

export default Platform;