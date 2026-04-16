import React from 'react'
import { dfm, CNN_International_logo, cnbc } from "../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Using publicly available logo URLs — replace with local imports if you have them
const logos = [
    { src: CNN_International_logo, alt: "CNN International" },
    { src: cnbc, alt: "CNBC" },
    { src: dfm, alt: "DFM" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/320px-BBC_News_2019.svg.png", alt: "BBC News" },
    { src: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Al_Jazeera_Media_Network_Logo.svg/320px-Al_Jazeera_Media_Network_Logo.svg.png", alt: "Al Jazeera" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Fox_News_Channel_logo.svg/320px-Fox_News_Channel_logo.svg.png", alt: "Fox News" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/NBC_logo.svg/320px-NBC_logo.svg.png", alt: "NBC" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Reuters_logo.svg/320px-Reuters_logo.svg.png", alt: "Reuters" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Bloomberg_Logo.svg/320px-Bloomberg_Logo.svg.png", alt: "Bloomberg" },
];

const Featured = () => {
    return (
        <div>
            {/* ── Logos Showcase ── */}
            <section id="gm-logos-showcase-block" className="gm-logos-showcase">
                <div className="gm-logos-showcase__header">
                    <div className="gm-logos-showcase__header-title">Featured In</div>
                </div>

                <div className="gm-logos-showcase__body">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        loop={true}
                        speed={3000}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            320: { slidesPerView: 2 },
                            480: { slidesPerView: 3 },
                            768: { slidesPerView: 4 },
                            1024: { slidesPerView: 5 },
                        }}
                    >
                        {logos.map((logo, index) => (
                            <SwiperSlide key={index}>
                <span className="gm-logos-showcase__item-image">
                  <img
                      src={logo.src}
                      alt={logo.alt}
                      loading="lazy"
                      decoding="async"
                      style={{ maxHeight: "60px", objectFit: "contain", width: "100%" }}
                  />
                </span>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            {/* ── "Here to Help" Banner ── */}
            <section
                className="gm-background-image align-full gm-section-element gm-background-image_text-left-cta-right"
            >
                <div
                    className="gm-background-image__overlay"
                    style={{ opacity: "0.7" }}
                />
                <div className="gm-background-image__container">
                    <div className="gm-background-image__content">
                        <h2>
                            We're <em>here to help</em>
                        </h2>
                        <p>Get to know our team and how we can partner with you.</p>
                    </div>
                    <div className="gm-background-image__btn">
                        <a
                            className="gm-btn gm-btn_orange"
                            href="contact-us/index.html"
                            aria-label="Contact Us"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Featured;