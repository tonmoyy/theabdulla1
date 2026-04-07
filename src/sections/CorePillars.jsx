import Section from "../components/Section";
import Heading from "../components/Heading";
import {service2, gradient} from "../assets";
import { Button } from "@/components/ui/button";


//const openaiServicesIcons = [recording03, recording01, disc02, chromecast, sliders04];

const CorePillars = () => {
    return (
        <Section id="corepillars">
            <div className="container">
                <Heading title="Core Pillars"/>
                <div className="relative">
                    <div className="relative z-1 grid gap-3 lg:grid-cols-3">
                        <div className="relative min-h-5 border border-white/10 rounded-3xl overflow-hidden">
                            <div className="absolute inset-0">
                                <img src={service2} className="h-full w-full object-cover" width={630} height={750}
                                     alt=""/>
                            </div>

                            <div
                                className="absolute inset-0 flex flex-col justify-center p-8 bg-linear-to-b from-n-8/0 to-n-8/90 lg:p-15">
                                <h4 className="h4 mb-4">Investment</h4>
                                <p>Family office style capital stewardship focused on long-term preservation and
                                    portfolio management.</p>
                            </div>
                        </div>

                        <div className="p-4 bg-[#15131D] rounded-3xl overflow-hidden lg:min-h-60">
                            <div className="py-12 px-4 xl:px-8">
                                <h4 className="h4 mb-4">Advisory</h4>
                                <p className="body-2 mb-8 text-n-3">Institutional-grade financial intelligence, due
                                    diligence, and strategic guidance.</p>
                            </div>
                        </div>
                        <div className="p-4 bg-[#15131D] rounded-3xl overflow-hidden lg:min-h-60">
                            <div className="py-12 px-4 xl:px-8">
                                <h4 className="h4 mb-4">Equity</h4>
                                <p className="body-2 mb-8 text-n-3">Direct investments, acquisitions, and strategic
                                    partnerships with high-potential businesses.</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-6">
                   <Button variant="secondary" className="absolute right-10 p-6 text-amber-950 font-bold "> Explore more</Button>
                    </div>

                    <div
                        className="absolute top-0 -left-40 w-226.5 h-226.5 opacity-50 mix-blend-color-dodge pointer-events-none">
                        <img
                            className="absolute top-1/2 left-1/2 w-318.25 max-w-318.25 h-354.25 -translate-x-1/2 -translate-y-1/2"
                            src={gradient} width={1417} height={1417} alt=""/>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default CorePillars;
