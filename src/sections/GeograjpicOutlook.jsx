import Button from "../components/Button";
import Heading from "../components/Heading";
import Section from "../components/Section";
import Tagline from "../components/Tagline";
import {
    check2,
    grid,
    loading1,
    gradient,
    roadmap1,
    roadmap2,
    roadmap3,
    roadmap4,
    smallSphere,
    stars,
    lines, benefitIcon1, benefitImage2
} from "../assets";
import Arrow from "@/assets/svg/Arrow.jsx";
import ClipPath from "@/assets/svg/ClipPath.jsx";

const geographicOutlook = [
    {
        title: "A Global Perspective With Strategic Regional Focus\n",
        text: "Abdulla Capital operates with an international outlook while maintaining strong strategic engagement across the Middle East, Europe and selected emerging markets.",
        backgroundUrl: "./src/assets/about/card-1.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
    }
];

const Geographic = () => {
    return (
        <Section id="geographic">
            <div className="container relative z-2">
                <Heading className="md:max-w-md lg:max-w-2xl" title="GEOGRAPHIC OUTLOOK" />

                <div className="flex flex-wrap gap-10 mb-10">
                    {geographicOutlook.map((item, i) => (
                        <div
                            className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] w-full "
                            style={{
                                backgroundImage: `url(${item.backgroundUrl})`,
                            }}
                            key={i}
                        >
                            <div className="relative z-2 flex flex-col ">
                                <h5 className="h5 mb-5">{item.title}</h5>
                                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                            </div>

                            {item.light && <div className="absolute top-0 left-1/4 w-full aspect-square bg-radial-gradient from-[#28206C] to-[#28206C]/0 to-70% pointer-events-none" />}


                            <ClipPath />
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Geographic;
