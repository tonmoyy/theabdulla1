import Heading from "../components/Heading";
import Section from "../components/Section";
import Arrow from "../assets/svg/Arrow";
import ClipPath from "../assets/svg/ClipPath";
import { benefitIcon1, benefitImage2 } from "../assets";

const about = [
    {
        title: "A Multi-Disciplinary Capital Platform",
        text: "The Abdulla Capital operates at the intersection of private investment, financial advisory, and strategic equity partnerships.\n" +
            "Our platform is designed to preserve capital, identify opportunities, and create long-term value across industries and markets.",
        backgroundUrl: "./src/assets/about/card-1.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
    }
];

const About = () => {
    return (
        <Section id="about">
            <div className="container relative z-2">
                <Heading className="md:max-w-md lg:max-w-2xl" title="ABOUT THE PLATFORM
" />

                <div className="flex flex-wrap gap-10 mb-10">
                    {about.map((item, i) => (
                        <div
                            className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] w-full "
                            style={{
                                backgroundImage: `url(${item.backgroundUrl})`,
                            }}
                            key={i}
                        >
                            <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem]">
                                <h5 className="h5 mb-5">{item.title}</h5>
                                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                                <div className="flex items-center mt-auto">
                                    <img src={item.iconUrl} width={48} height={48} alt={item.title} />
                                    <p className="ml-auto font-code text-xs font-bold text-white uppercase tracking-wider">Explore more</p>
                                    <Arrow />
                                </div>
                            </div>

                            {item.light && <div className="absolute top-0 left-1/4 w-full aspect-square bg-radial-gradient from-[#28206C] to-[#28206C]/0 to-70% pointer-events-none" />}

                            <div className="absolute inset-0.5 bg-n-8" style={{ clipPath: "url(#about)" }}>
                                <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-10">{item.imageUrl && <img src={item.imageUrl} width={380} height={362} alt={item.title} className="w-full h-full object-cover" />}</div>
                            </div>

                            <ClipPath />
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default About;
