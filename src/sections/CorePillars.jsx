import { motion } from "framer-motion";
import { HandCoins, Lightbulb, Building2, TrendingUp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { investment1, advisory1, equity1 } from "../assets";

const CorePillars = () => {
    const pillars = [
        {
            id: 1,
            title: "Investment",
            icon: HandCoins,
            description: "Family office-style capital stewardship focused on long-term preservation and disciplined portfolio management.",
            bgImage: investment1,
            gradient: "from-blue-900/90 to-blue-800/85",
            delay: 0.1
        },
        {
            id: 2,
            title: "Advisory",
            icon: Lightbulb,
            description: "Institutional-grade financial intelligence, due diligence, and strategic guidance across investment decisions.",
            bgImage: advisory1,
            gradient: "from-indigo-900/90 to-indigo-800/85",
            delay: 0.2
        },
        {
            id: 3,
            title: "Equity",
            icon: Building2,
            description: "Direct investments, acquisitions, and long-term partnerships with high-potential businesses.",
            bgImage: equity1,
            gradient: "from-emerald-900/90 to-emerald-800/85",
            delay: 0.3
        }
    ];

    return (
        <section id="corepillars" className="relative py-24 md:py-32 bg-gradient-to-br from-slate-50 to-gray-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header with scroll animation */}
                <motion.div
                    className="text-center mb-16 md:mb-20"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-sm md:text-base font-semibold text-blue-600 tracking-wider uppercase">
                        The Platform
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                        A Multi-Disciplinary<br />
                        Capital Platform
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        Operating at the intersection of private investment, strategic advisory,
                        and equity participation to create enduring value.
                    </p>
                </motion.div>

                {/* Pillars Grid */}
                <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
                    {pillars.map((pillar, index) => {
                        const Icon = pillar.icon;
                        return (
                            <motion.div
                                key={pillar.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                whileHover={{ y: -8 }}
                                className="group relative rounded-2xl overflow-hidden shadow-xl cursor-pointer"
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${pillar.bgImage})` }}
                                />
                                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-90 group-hover:opacity-95 transition-opacity duration-300`} />

                                <div className="relative p-8 md:p-10 min-h-[500px] flex flex-col justify-between">
                                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={1.5} />
                                    </div>

                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                            {pillar.title}
                                        </h3>
                                        <p className="text-white/90 leading-relaxed text-base md:text-lg">
                                            {pillar.description}
                                        </p>
                                        <div className="mt-6 w-12 h-0.5 bg-white/40 rounded-full group-hover:w-24 transition-all duration-500" />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA */}
                <motion.div
                    className="text-center mt-16 md:mt-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        Explore Our Platform
                        <TrendingUp className="ml-2 w-5 h-5" />
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default CorePillars;