// src/sections/Homepage.jsx
import { business1 } from "../assets";
import About from "./About.jsx";
import Vision from "./Vision.jsx";
import Platform from "./Platform.jsx";
import CorePillars from "./CorePillars.jsx";
import Geographic from "./GeographicOutlook.jsx";
import Partnerships from "./Partnerships.jsx";
import Featured from "../components/Featured.jsx";

const Homepage = () => {
    const containerStyle = {
        right: "clamp(7.5rem, 4.46203rem + 6.3291vw, 10rem)",
        position: "absolute",
    };

    const headerStyle = {
        translate: "none",
        rotate: "none",
        scale: "none",
        opacity: 1,
        transform: "translate(0px, 0px)",
    };

    // Modern, sleek typography
    const heroTitleStyle = {
        fontFamily: "'Inter', 'Manrope', sans-serif",
        fontWeight: "400",
        letterSpacing: "-0.03em",
        lineHeight: "1.25",
        color: "#1a1a1a",
    };

    const heroEmphasisStyle = {
        fontFamily: "'Inter', 'Manrope', sans-serif",
        fontWeight: "500",
        fontStyle: "italic",
        letterSpacing: "-0.02em",
        color: "#2a2a2a",
    };

    const heroDescriptionStyle = {
        fontFamily: "'Inter', 'Manrope', sans-serif",
        fontWeight: "350",
        letterSpacing: "-0.01em",
        lineHeight: "1.6",
        color: "#555555",
    };

    // Lighter, more refined line styles
    const lineStyle1 = {
        width: "100%",
        height: "1px",
        backgroundColor: "rgba(30, 30, 30, 0.08)",
    };
    const lineStyle2 = {
        height: "100%",
        width: "1px",
        backgroundColor: "rgba(30, 30, 30, 0.08)",
    };
    const lineStyle3 = {
        width: "100%",
        height: "1px",
        backgroundColor: "rgba(30, 30, 30, 0.06)",
    };
    const lineStyle4 = {
        height: "100%",
        width: "1px",
        backgroundColor: "rgba(30, 30, 30, 0.06)",
    };

    return (
        <>
            {/* Hero Section */}
            <section
                id="ta-home-page-hero-block"
                className="ta-home-page-hero align-full ta-section-element"
            >
                <div className="ta-container-wide js-container">
                    <div className="ta-home-page-hero__title">
                        <h1 style={{ ...headerStyle, ...heroTitleStyle }}>
                            <span
                                style={{ position: "relative", display: "inline-block" }}
                                className="ta-home-page-hero__title-word ta-home-page-hero__title-word_1"
                            >
                                Building
                            </span>{" "}
                            <span
                                style={{
                                    position: "relative",
                                    display: "inline-block",
                                    ...heroEmphasisStyle,
                                }}
                                className="ta-home-page-hero__title-word ta-home-page-hero__title-word_2"
                            >
                                <em>Enduring Value</em>
                            </span>{" "}
                            <span
                                style={{ position: "relative", display: "inline-block" }}
                                className="ta-home-page-hero__title-word"
                            >
                                Through Strategic
                            </span>{" "}
                            <span
                                style={{ position: "relative", display: "inline-block" }}
                                className="ta-home-page-hero__title-word"
                            >
                                Capital.
                            </span>
                        </h1>
                    </div>
                    <div className="ta-home-page-hero__description">
                        <p style={heroDescriptionStyle}>
                            A private capital platform operating across investment
                            stewardship, strategic advisory and equity partnerships.
                        </p>
                    </div>
                </div>
                <div className="ta-home-page-hero__media">
                    <img
                        fetchPriority="high"
                        decoding="async"
                        width={2048}
                        height={1712}
                        src={business1}
                        alt="Hero background"
                    />
                </div>
                <div className="ta-home-page-hero__lines" style={containerStyle}>
                    <div className="ln1" style={lineStyle1}></div>
                    <div className="ln2" style={lineStyle2}></div>
                    <div className="ln3" style={lineStyle3}></div>
                    <div className="ln4" style={lineStyle4}></div>
                </div>
            </section>

            {/* Other Sections */}
            <About />
            <Vision />
            <Platform />
            <CorePillars />
            <Geographic />
            <Partnerships />
            <Featured />
        </>
    );
};

export default Homepage;