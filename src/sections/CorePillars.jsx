import Heading from "../components/Heading";
import {service2, gradient} from "../assets";
import { Button } from "@/components/ui/button";
import { Target, Lightbulb, TrendingUp ,LucideHandshake,HandCoins} from 'lucide-react';
import {investment1,advisory1,equity1} from "../assets";


const CorePillars = () => {
    return (
        <section id="corepillars">
            {/* Pillars Section */}
            <div className="py-20">
                <h1 className="text-center"> The Platform </h1>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-xl shadow-sm h-dvh" style={{backgroundImage: `url(${investment1})`}}>
                        <HandCoins className="w-20 h-20 text-blue-600 mb-4" />
                        <h3 className="text-2xl font-semibold mb-2 py-60">Investment</h3>
                        <p className="text-slate-700 font-extrabold">
                            Family office-style capital stewardship focused on long-term preservation and disciplined portfolio management.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-sm border-none" style={{backgroundImage: `url(${advisory1})`}}>
                        <Lightbulb className="w-15 h-15 text-blue-600 mb-4" />
                        <h3 className="text-2xl text-white font-semibold mb-2">Advisory </h3>
                        <p className="text-white">
                            Institutional-grade financial intelligence, due diligence, and strategic guidance across investment decisions.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-sm border-none" style={{backgroundImage: `url(${equity1})`}}>
                        <LucideHandshake className="w-15 h-15 text-blue-600 mb-4" />
                        <h3 className="text-2xl font-semibold mb-2">Equity</h3>
                        <p className="text-gray-600">
                            Direct investments, acquisitions, and long-term partnerships with high-potential businesses.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default CorePillars;
