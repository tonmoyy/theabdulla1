import Section from "../components/Section";
import { smallSphere, stars, lines, check } from "../assets";
import Heading from "../components/Heading";
import Button from "../components/Button";

const investmentPhilosophy = [
    {
        title: "Disciplined Capital Allocation",
        features: ["Long-term investment mindset\n", "Governance-driven decision making\n", "Strategic partnerships over speculation\n","Focus on sustainable value creation\n"],
    }
];

const InvestmentPhilosophy = () => {
    return (
        <Section className="overflow-hidden" id="investments">
            <div className="container relative z-2">
                <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
                    <img src={smallSphere} className="relative z-1" width={255} height={255} alt="" />
                    <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                        <img src={stars} className="w-full" width={950} height={400} alt="" />
                    </div>
                </div>

                <Heading title="INVESTMENT PHILOSOPHY" />

                <div className="relative">
                    <div className="flex gap-[1rem] max-lg:flex-wrap">
                        {investmentPhilosophy.map((item, i) => (
                            <div key={i}>
                                <h1 className="h4 mb-4">{item.title}</h1>
                                {item.features.map((feature, index) => (
                                    <li key={index} className="flex items-start py-5 border-b border-n-6">
                                        <p className="body-2 ml-4">{feature}</p>
                                    </li>
                                ))}
                            </div>
                        ))}
                    </div>

                    <div className="hidden lg:block absolute top-1/2 right-full w-[92.5rem] h-[11.0625rem] -translate-y-1/2 pointer-events-none">
                        <img className="w-full" src={lines} width={1480} height={177} alt="" />
                    </div>
                    <div className="hidden lg:block absolute top-1/2 left-full w-[92.5rem] h-[11.0625rem] -translate-y-1/2 -scale-x-100 pointer-events-none">
                        <img className="w-full" src={lines} width={1480} height={177} alt="" />
                    </div>
                </div>

            </div>
        </Section>
    );
};

export default InvestmentPhilosophy ;
