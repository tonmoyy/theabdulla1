import React from 'react'
import { dfm } from "../assets";
import { CNN_International_logo } from "../assets";
import { cnbc } from "../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const Featured = () => {
    return (
       <div>
           <section id="gm-logos-showcase-block" className="gm-logos-showcase">
               <div className="gm-logos-showcase__header">
                   <div className="gm-logos-showcase__header-title">Featured In</div>
               </div>

               <div className="gm-logos-showcase__body">
                   <Swiper
                       modules={[Autoplay]}
                       spaceBetween={30}
                       slidesPerView={5}
                       loop={true}
                       speed={10000}
                       autoplay={{
                           delay: 0,
                           disableOnInteraction: false,
                       }}
                       //   breakpoints={{
                       //     320: { slidesPerView: 2 },
                       //     768: { slidesPerView: 3 },
                       //     1024: { slidesPerView: 5 },
                       //   }}
                   >
                       <SwiperSlide>
                <span className="gm-logos-showcase__item-image">
                  <img src={dfm} alt="Associated Press" />
                </span>
                       </SwiperSlide>
                       <SwiperSlide>
                <span className="gm-logos-showcase__item-image">
                  <img
                      loading="lazy"
                      decoding="async"
                      width={212}
                      height={142}
                      src={CNN_International_logo}
                      className="attachment-medium size-medium lazyload"
                      data-src="wp-content/uploads/2024/11/CNN_logo-copy.png"
                  />{" "}
                </span>
                       </SwiperSlide>
                       <SwiperSlide>
                <span className="gm-logos-showcase__item-image">
                  <img src={dfm} alt="Associated Press" />
                </span>
                       </SwiperSlide>
                       <SwiperSlide>
                <span className="gm-logos-showcase__item-image">
                  <img src={dfm} alt="Associated Press" />
                </span>
                       </SwiperSlide>
                       <SwiperSlide>
                <span className="gm-logos-showcase__item-image">
                  <img src={dfm} alt="Associated Press" />
                </span>
                       </SwiperSlide>
                       <SwiperSlide>
                <span className="gm-logos-showcase__item-image">
                  <img src={dfm} alt="Associated Press" />
                </span>
                       </SwiperSlide>
                   </Swiper>
               </div>
           </section>
           <section
               id="gm-background-image-block_1409607484f4a7c9e6d38b42bb827d55"
               className="gm-background-image align-full gm-section-element gm-background-image_text-left-cta-right"
               style={{}}
               data-width={1920}
               data-height={1920}
           >
               <div
                   className="gm-background-image__overlay"
                   style={{ opacity: "0.7" }}
               />
               <div className="gm-background-image__container">
                   <div className="gm-background-image__content">
                       <h2>
                           We’re <em>here to help</em>
                       </h2>
                       <p>Get to know our team and how we can partner with you.</p>
                   </div>
                   <div className="gm-background-image__btn">
                       <a
                           className="gm-btn gm-btn_orange"
                           href="contact-us/index.html"
                           aria-label="Contact Us"
                       >
                           <span>Contact Us</span>
                           <svg
                               role="presentation"
                               width={8}
                               height={15}
                               viewBox="0 0 8 15"
                               fill="none"
                               xmlns="http://www.w3.org/2000/svg"
                           >
                               <path d="M0.115543 0.533203C2.30811 2.43012 5.69188 5.48255 7.8817 7.42906L8 7.5332L7.8817 7.63735L4.00825 11.094C3.04814 11.9569 1.09491 13.6852 0.115543 14.5332L-4.5523e-09 14.4291C1.7249 11.4833 4.1458 8.94907 6.71527 6.58846L6.71527 8.48042C4.78404 6.73724 2.98212 4.85272 1.43879 2.81446C0.932599 2.11273 0.420907 1.41595 -6.07407e-07 0.637347L0.115543 0.533203Z" />
                           </svg>
                       </a>{" "}
                   </div>
               </div>
           </section>
       </div>
    )
}
export default Featured
