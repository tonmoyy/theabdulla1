import {useEffect, useRef, useState} from "react";
import { AS } from "../assets";
import { Abdulla1 } from "../assets";

import {visionBackground} from "../assets";

import { invphil1 } from "../assets";

import {motion} from "framer-motion";

const About = () => {
    const frameStyle = {
        padding: '10px',
        border: '5px solid #333',
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        display: 'inline-block',
        borderRadius: '8px'
    };
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();
    const createObserver1 = (setState) => new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setState(true);
                    // Optional: stop observing once visible
                    // observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.99 }
    );

    useEffect(() => {
        const observer = createObserver1(setIsVisible);
        const { current: current } = domRef;
        if (current) observer.observe(current);

        return () => {
            if (current) observer.unobserve(current);
        };
    }, []);


    // States and refs for Div 1
    const [isVisible1, setIsVisible1] = useState(false);
    const domRef1 = useRef();

    // Reusable observer effect logic
    const createObserver = (setState) => new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setState(true);
                    // Optional: stop observing once visible
                    // observer.unobserve(entry.target);
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
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent overlay
        padding: '40px',
        borderRadius: '10px',
        maxWidth: '800px',
    };

    const leadershipData = {
        name: "Abdulla Salem",
        // title: "Chief Executive Officer",
        description: "Abdulla Salem Entrepreneur, investor, and strategic operator building ventures across the sports and investment ecosystem.",
        imageUrl: Abdulla1 // Replace with actual image path
    };

    return (
      <div>
          <section
              id="about-us"
              className="gm-flexible-small-image-content align-full gm-section-element gm-flexible-small-image-content_bg-sand-text-deepgrey-cta-drkblu"
          >
              <div
                  ref={domRef1}
                  className={`gm-flexible-small-image-content__container gm-flexible-small-image-content__container_text-right ${isVisible1 ? 'is-visible' : ''}`}>
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
                      />{" "}
                      <div className="gm-flexible-small-image-content__frame" />
                  </div>
                  <div className="gm-flexible-small-image-content__content">
                      <div

                          className="gm-flexible-small-image-content__text">
                          <h2> A Multi-Disciplinary Capital Platform</h2>
                          <p>
                              Abdulla Capital operates at the intersection of private
                              investment, strategic advisory and equity participation. The
                              platform is designed to preserve capital, assess opportunity
                              and create enduring value across sectors, markets and
                              long-term partnerships. .
                          </p>
                      </div>
                  </div>
              </div>
          </section>
          <section
              id="gm-links-carousel-images-block_90c699bbddfa7a18f235fdaa3e69ef4b"
              className="gm-links-carousel-images align-full gm-section-element gm-links-carousel-images_bg-ltblu-text-deepgrey-cta-drkblu"
          >
              <div
                  ref={domRef}
                  className={`gm-links-carousel-images__heading ${isVisible ? 'is-visible' : ''}`}>
                  <h2> Disciplined Capital Allocation</h2>
                  <p>
                      We operate with a disciplined investment framework rooted in
                      governance, long-term thinking, and strategic alignment. We
                      prioritise sustainable value over short-term gains.
                  </p>
              </div>
              <div className="gm-links-carousel-images__container">
                  <div className="gm-links-carousel-images__select-hover">
                      <div className="gm-links-carousel-images__select-hover-wrap">
                          <a
                              href="private-wealth-management/high-net-worth-individuals-and-families/index.html"
                              className="active"
                              data-id="gm-links-carousel-images-block_90c699bbddfa7a18f235fdaa3e69ef4b-individuals-families"
                          >
                              Long-term investment mindset
                          </a>
                          <a
                              href="private-wealth-management/family-office-services/index.html"
                              data-id="gm-links-carousel-images-block_90c699bbddfa7a18f235fdaa3e69ef4b-family-office-services"
                          >
                              Governance-driven decision making
                          </a>
                          <a
                              href="endowments-foundations/endowment-foundation-management/index.html"
                              data-id="gm-links-carousel-images-block_90c699bbddfa7a18f235fdaa3e69ef4b-endowments"
                          >
                              Strategic partnerships over speculation
                          </a>
                          <a
                              href="endowments-foundations/foundation-investment-management/index.html"
                              data-id="gm-links-carousel-images-block_90c699bbddfa7a18f235fdaa3e69ef4b-foundations"
                          >
                              Focus on sustainable value creation
                          </a>
                          {/* <a
                  href="https://www.TheAbdullaCapitalim.com/"
                  className=" js-gm-disabled-link"
                  data-id="gm-links-carousel-images-block_90c699bbddfa7a18f235fdaa3e69ef4b-institutions-consultants"
                >
                  Institutions &amp; Consultants{" "}
                </a> */}
                          {/* <a
                  href="https://www.TheAbdullaCapitalim.com/"
                  className=" js-gm-disabled-link"
                  data-id="gm-links-carousel-images-block_90c699bbddfa7a18f235fdaa3e69ef4b-financial-advisors"
                >
                  Financial Advisors{" "}
                </a> */}
                      </div>
                  </div>
                  <div className="gm-links-carousel-images__wrap">
                      <div
                          className="js-item gm-links-carousel-images__item active"
                          data-item-id="gm-links-carousel-images-block_90c699bbddfa7a18f235fdaa3e69ef4b-individuals-families"
                      >
                          {/* <button
                  type="button"
                  className="js-btn-mobile h5 gm-links-carousel-images__wrap-btn"
                >
                  Individuals &amp; Families{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={21}
                    height={21}
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <path
                      d="M18.9986 6.93904C16.598 9.63672 12.7351 13.8 10.2717 16.4943L10.1399 16.6399L10.0081 16.4943L5.63371 11.7285C4.54167 10.5472 2.35446 8.14402 1.28125 6.93904L1.41305 6.79688C5.14104 8.91914 8.34812 11.8978 11.3355 15.0592H8.94121C11.1472 12.683 13.5322 10.466 16.1116 8.56712C16.9997 7.94432 17.8815 7.31475 18.8668 6.79687L18.9986 6.93904Z"
                      fill="#1F292E"
                    />
                  </svg>
                </button> */}
                          <div className="js-item-inner gm-links-carousel-images__item-inner">
                              <div className="gm-links-carousel-images__item-content">
                                  <div className="gm-links-carousel-images__item-image">
                                      <div className="gm-links-carousel-images__item-image-wrap">
                                          <img
                                              decoding="async"
                                              width={1024}
                                              height={807}
                                              src={invphil1}
                                              className="attachment-large size-large lazyload"
                                              alt="boots"
                                              sizes="(max-width: 1024px) 100vw, 1024px"
                                              data-src="https://www.TheAbdullaCapital.com/wp-content/uploads/2025/12/GettyImages-1302325775-1024x807.jpg"
                                              data-srcset="https://www.TheAbdullaCapital.com/wp-content/uploads/2025/12/GettyImages-1302325775-1024x807.jpg 1024w, https://www.TheAbdullaCapital.com/wp-content/uploads/2025/12/GettyImages-1302325775-300x236.jpg 300w, https://www.TheAbdullaCapital.com/wp-content/uploads/2025/12/GettyImages-1302325775-768x605.jpg 768w, https://www.TheAbdullaCapital.com/wp-content/uploads/2025/12/GettyImages-1302325775-1536x1210.jpg 1536w, https://www.TheAbdullaCapital.com/wp-content/uploads/2025/12/GettyImages-1302325775-2048x1613.jpg 2048w"
                                          />{" "}
                                      </div>
                                  </div>
                                  {/* <div className="gm-links-carousel-images__item-info">
                      <div className="gm-links-carousel-images__item-headline">
                        <h2>
                          Empowering your confident pursuit of purpose,
                          passions, and legacy.
                        </h2>
                      </div>
                      <div className="gm-links-carousel-images__item-btn">
                        <a
                          className="gm-btn gm-btn_blue"
                          href="private-wealth-management/high-net-worth-individuals-and-families/index.html"
                          aria-label="Learn More - Individuals & Families"
                        >
                          <span>Learn More – Individuals &amp; Families</span>
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
                    </div> */}
                              </div>
                          </div>
                      </div>
                      {/* <div
                className="js-item gm-links-carousel-images__item"
                data-item-id="gm-links-carousel-images-block_90c699bbddfa7a18f235fdaa3e69ef4b-family-office-services"
              >
                <button
                  type="button"
                  className="js-btn-mobile h5 gm-links-carousel-images__wrap-btn"
                >
                  Family Office Services{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={21}
                    height={21}
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <path
                      d="M18.9986 6.93904C16.598 9.63672 12.7351 13.8 10.2717 16.4943L10.1399 16.6399L10.0081 16.4943L5.63371 11.7285C4.54167 10.5472 2.35446 8.14402 1.28125 6.93904L1.41305 6.79688C5.14104 8.91914 8.34812 11.8978 11.3355 15.0592H8.94121C11.1472 12.683 13.5322 10.466 16.1116 8.56712C16.9997 7.94432 17.8815 7.31475 18.8668 6.79687L18.9986 6.93904Z"
                      fill="#1F292E"
                    />
                  </svg>
                </button>
                <div className="js-item-inner gm-links-carousel-images__item-inner">
                  <div className="gm-links-carousel-images__item-content">
                    <div className="gm-links-carousel-images__item-image">
                      <div className="gm-links-carousel-images__item-image-wrap">
                        <img
                          loading="lazy"
                          decoding="async"
                          width={1024}
                          height={628}
                          src="#"
                          className="attachment-large size-large lazyload"
                          alt="a child on the shoulders of a man"
                          sizes="auto, (max-width: 1024px) 100vw, 1024px"
                          data-src="https://www.TheAbdullaCapital.com/wp-content/uploads/2023/08/Family-office-1024x628.jpg"
                          data-srcset="https://www.TheAbdullaCapital.com/wp-content/uploads/2023/08/Family-office-1024x628.jpg 1024w, https://www.TheAbdullaCapital.com/wp-content/uploads/2023/08/Family-office-300x184.jpg 300w, https://www.TheAbdullaCapital.com/wp-content/uploads/2023/08/Family-office-768x471.jpg 768w, https://www.TheAbdullaCapital.com/wp-content/uploads/2023/08/Family-office.jpg 1386w"
                        />{" "}
                      </div>
                    </div>
                    <div className="gm-links-carousel-images__item-info">
                      <div className="gm-links-carousel-images__item-headline">
                        <h2>
                          Empowering your confident pursuit of purpose,
                          passions, and legacy.
                        </h2>
                      </div>
                      <div className="gm-links-carousel-images__item-btn">
                        <a
                          className="gm-btn gm-btn_blue"
                          href="private-wealth-management/family-office-services/index.html"
                          aria-label="Learn More - Family Office Services"
                        >
                          <span>Learn More – Family Office Services</span>
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
                  </div>
                </div>
              </div> */}
                      {/* <div
                className="js-item gm-links-carousel-images__item"
                data-item-id="gm-links-carousel-images-block_90c699bbddfa7a18f235fdaa3e69ef4b-endowments"
              >
                <button
                  type="button"
                  className="js-btn-mobile h5 gm-links-carousel-images__wrap-btn"
                >
                  Endowments{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={21}
                    height={21}
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <path
                      d="M18.9986 6.93904C16.598 9.63672 12.7351 13.8 10.2717 16.4943L10.1399 16.6399L10.0081 16.4943L5.63371 11.7285C4.54167 10.5472 2.35446 8.14402 1.28125 6.93904L1.41305 6.79688C5.14104 8.91914 8.34812 11.8978 11.3355 15.0592H8.94121C11.1472 12.683 13.5322 10.466 16.1116 8.56712C16.9997 7.94432 17.8815 7.31475 18.8668 6.79687L18.9986 6.93904Z"
                      fill="#1F292E"
                    />
                  </svg>
                </button>
                <div className="js-item-inner gm-links-carousel-images__item-inner">
                  <div className="gm-links-carousel-images__item-content">
                    <div className="gm-links-carousel-images__item-image">
                      <div className="gm-links-carousel-images__item-image-wrap">
                        <img
                          loading="lazy"
                          decoding="async"
                          width={1000}
                          height={667}
                          src="#"
                          className="attachment-large size-large lazyload"
                          sizes="auto, (max-width: 1000px) 100vw, 1000px"
                          data-src="https://www.TheAbdullaCapital.com/wp-content/uploads/2025/12/ENF_Meeting_Ppl_1_Banner.jpg"
                          data-srcset="https://www.TheAbdullaCapital.com/wp-content/uploads/2025/12/ENF_Meeting_Ppl_1_Banner.jpg 1000w, https://www.TheAbdullaCapital.com/wp-content/uploads/2025/12/ENF_Meeting_Ppl_1_Banner-300x200.jpg 300w, https://www.TheAbdullaCapital.com/wp-content/uploads/2025/12/ENF_Meeting_Ppl_1_Banner-768x512.jpg 768w"
                        />{" "}
                      </div>
                    </div>
                    <div className="gm-links-carousel-images__item-info">
                      <div className="gm-links-carousel-images__item-headline">
                        <h2>
                          Driven by your mission, focused on your success.
                        </h2>
                      </div>
                      <div className="gm-links-carousel-images__item-btn">
                        <a
                          className="gm-btn gm-btn_blue"
                          href="endowments-foundations/endowment-foundation-management/index.html"
                          aria-label="Learn More - Endowments"
                        >
                          <span>Learn More – Endowments</span>
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
                  </div>
                </div>
              </div> */}
                      {/* <div
                className="js-item gm-links-carousel-images__item"
                data-item-id="gm-links-carousel-images-block_90c699bbddfa7a18f235fdaa3e69ef4b-foundations"
              >
                <button
                  type="button"
                  className="js-btn-mobile h5 gm-links-carousel-images__wrap-btn"
                >
                  Foundations{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={21}
                    height={21}
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <path
                      d="M18.9986 6.93904C16.598 9.63672 12.7351 13.8 10.2717 16.4943L10.1399 16.6399L10.0081 16.4943L5.63371 11.7285C4.54167 10.5472 2.35446 8.14402 1.28125 6.93904L1.41305 6.79688C5.14104 8.91914 8.34812 11.8978 11.3355 15.0592H8.94121C11.1472 12.683 13.5322 10.466 16.1116 8.56712C16.9997 7.94432 17.8815 7.31475 18.8668 6.79687L18.9986 6.93904Z"
                      fill="#1F292E"
                    />
                  </svg>
                </button>
                <div className="js-item-inner gm-links-carousel-images__item-inner">
                  <div className="gm-links-carousel-images__item-content">
                    <div className="gm-links-carousel-images__item-image">
                      <div className="gm-links-carousel-images__item-image-wrap">
                        <img
                          loading="lazy"
                          decoding="async"
                          width={1024}
                          height={643}
                          src="#"
                          className="attachment-large size-large lazyload"
                          alt="a circular fountain with people around it"
                          sizes="auto, (max-width: 1024px) 100vw, 1024px"
                          data-src="https://www.TheAbdullaCapital.com/wp-content/uploads/2023/08/Foundations-1024x643.jpg"
                          data-srcset="https://www.TheAbdullaCapital.com/wp-content/uploads/2023/08/Foundations-1024x643.jpg 1024w, https://www.TheAbdullaCapital.com/wp-content/uploads/2023/08/Foundations-300x188.jpg 300w, https://www.TheAbdullaCapital.com/wp-content/uploads/2023/08/Foundations-768x482.jpg 768w, https://www.TheAbdullaCapital.com/wp-content/uploads/2023/08/Foundations.jpg 1386w"
                        />{" "}
                      </div>
                    </div>
                    <div className="gm-links-carousel-images__item-info">
                      <div className="gm-links-carousel-images__item-headline">
                        <h2>
                          Driven by your mission, focused on your success.
                        </h2>
                      </div>
                      <div className="gm-links-carousel-images__item-btn">
                        <a
                          className="gm-btn gm-btn_blue"
                          href="endowments-foundations/foundation-investment-management/index.html"
                          aria-label="Learn More - Foundations"
                        >
                          <span>Learn More – Foundations</span>
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
                  </div>
                </div>
              </div> */}
                      {/* <div
                className="js-item gm-links-carousel-images__item"
                data-item-id="gm-links-carousel-images-block_90c699bbddfa7a18f235fdaa3e69ef4b-institutions-consultants"
              >
                <button
                  type="button"
                  className="js-btn-mobile h5 gm-links-carousel-images__wrap-btn"
                >
                  Institutions &amp; Consultants{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={21}
                    height={21}
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <path
                      d="M18.9986 6.93904C16.598 9.63672 12.7351 13.8 10.2717 16.4943L10.1399 16.6399L10.0081 16.4943L5.63371 11.7285C4.54167 10.5472 2.35446 8.14402 1.28125 6.93904L1.41305 6.79688C5.14104 8.91914 8.34812 11.8978 11.3355 15.0592H8.94121C11.1472 12.683 13.5322 10.466 16.1116 8.56712C16.9997 7.94432 17.8815 7.31475 18.8668 6.79687L18.9986 6.93904Z"
                      fill="#1F292E"
                    />
                  </svg>
                </button>
                <div className="js-item-inner gm-links-carousel-images__item-inner">
                  <div className="gm-links-carousel-images__item-content">
                    <div className="gm-links-carousel-images__item-image">
                      <div className="gm-links-carousel-images__item-image-wrap">
                        <img
                          loading="lazy"
                          decoding="async"
                          width={1024}
                          height={449}
                          src="#"
                          className="attachment-large size-large lazyload"
                          alt="A unique curved building with a mesmerizing circular pattern on its exterior."
                          sizes="auto, (max-width: 1024px) 100vw, 1024px"
                          data-src="https://www.TheAbdullaCapital.com/wp-content/uploads/2023/08/gimhero-1024x449.jpg"
                          data-srcset="https://www.TheAbdullaCapital.com/wp-content/uploads/2023/08/gimhero-1024x449.jpg 1024w, https://www.TheAbdullaCapital.com/wp-content/uploads/2023/08/gimhero-300x131.jpg 300w, https://www.TheAbdullaCapital.com/wp-content/uploads/2023/08/gimhero-768x337.jpg 768w, https://www.TheAbdullaCapital.com/wp-content/uploads/2023/08/gimhero-1536x673.jpg 1536w, https://www.TheAbdullaCapital.com/wp-content/uploads/2023/08/gimhero-2048x897.jpg 2048w"
                        />{" "}
                      </div>
                    </div>
                    <div className="gm-links-carousel-images__item-info">
                      <div className="gm-links-carousel-images__item-headline">
                        <h2>Aligned. Consistent. Transparent.</h2>
                      </div>
                      <div className="gm-links-carousel-images__item-btn">
                        <button
                          data-btn="gm-links-carousel-images-block_90c699bbddfa7a18f235fdaa3e69ef4b-5"
                          className="gm-btn js-open-modal gm-btn_orange"
                          aria-label="Learn More - Institutions & Consultants"
                        >
                          <span>
                            Learn More – Institutions &amp; Consultants
                          </span>
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
                        </button>{" "}
                      </div>
                      <div
                        className="js-modal gm-links-carousel-images__modal"
                        data-modal="gm-links-carousel-images-block_90c699bbddfa7a18f235fdaa3e69ef4b-5"
                      >
                        <div className="js-close-modal gm-links-carousel-images__modal-overlay" />
                        <div className="gm-links-carousel-images__modal-content">
                          <button
                            className="js-close-modal gm-links-carousel-images__modal-close"
                            aria-label="close modal"
                          >
                            <span style={{ display: "none" }}>modal-close</span>
                            <svg
                              role="presentation"
                              width={40}
                              height={40}
                              viewBox="0 0 40 40"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2 2C9.14661 6.53726 15.346 12.1266 21.3334 18.0204C27.2385 23.9966 32.8396 30.1962 37.3726 37.3381C30.2263 32.8121 24.0212 27.217 18.0392 21.3177C12.1396 15.336 6.54422 9.14218 2 2Z"
                                fill="#003147"
                              />
                              <path
                                d="M36.5147 2.82227C32.3207 9.75555 27.027 15.6891 21.4182 21.3957C15.7228 27.0159 9.78889 32.3208 2.85938 36.5104C7.04217 29.5768 12.3413 23.6377 17.9559 17.9369C23.6571 12.3225 29.5855 7.02308 36.5147 2.82227Z"
                                fill="#003147"
                              />
                            </svg>
                          </button>
                          <div className="gm-links-carousel-images__modal-inner">
                            <p className="gm-links-carousel-images__modal-text">
                              You will now be redirected to TheAbdullaCapital
                              Investment Management.{" "}
                            </p>
                            <a
                              className="gm-btn gm-btn_orange"
                              href="https://www.TheAbdullaCapitalim.com/"
                              target="_blank"
                              aria-label="Visit TheAbdullaCapitalIM.com, open in new tab"
                            >
                              <span>Visit TheAbdullaCapitalIM.com</span>
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
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
                      {/* <div
                className="js-item gm-links-carousel-images__item"
                data-item-id="gm-links-carousel-images-block_90c699bbddfa7a18f235fdaa3e69ef4b-financial-advisors"
              >
                <button
                  type="button"
                  className="js-btn-mobile h5 gm-links-carousel-images__wrap-btn"
                >
                  Financial Advisors{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={21}
                    height={21}
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <path
                      d="M18.9986 6.93904C16.598 9.63672 12.7351 13.8 10.2717 16.4943L10.1399 16.6399L10.0081 16.4943L5.63371 11.7285C4.54167 10.5472 2.35446 8.14402 1.28125 6.93904L1.41305 6.79688C5.14104 8.91914 8.34812 11.8978 11.3355 15.0592H8.94121C11.1472 12.683 13.5322 10.466 16.1116 8.56712C16.9997 7.94432 17.8815 7.31475 18.8668 6.79687L18.9986 6.93904Z"
                      fill="#1F292E"
                    />
                  </svg>
                </button>
                <div className="js-item-inner gm-links-carousel-images__item-inner">
                  <div className="gm-links-carousel-images__item-content">
                    <div className="gm-links-carousel-images__item-image">
                      <div className="gm-links-carousel-images__item-image-wrap">
                        <img
                          loading="lazy"
                          decoding="async"
                          width={1024}
                          height={449}
                          src="#"
                          className="attachment-large size-large lazyload"
                          alt="A unique curved building with a mesmerizing circular pattern on its exterior."
                          sizes="auto, (max-width: 1024px) 100vw, 1024px"
                          data-src="https://www.TheAbdullaCapital.com/wp-content/uploads/2023/08/gimhero-1024x449.jpg"
                          data-srcset="https://www.TheAbdullaCapital.com/wp-content/uploads/2023/08/gimhero-1024x449.jpg 1024w, https://www.TheAbdullaCapital.com/wp-content/uploads/2023/08/gimhero-300x131.jpg 300w, https://www.TheAbdullaCapital.com/wp-content/uploads/2023/08/gimhero-768x337.jpg 768w, https://www.TheAbdullaCapital.com/wp-content/uploads/2023/08/gimhero-1536x673.jpg 1536w, https://www.TheAbdullaCapital.com/wp-content/uploads/2023/08/gimhero-2048x897.jpg 2048w"
                        />{" "}
                      </div>
                    </div>
                    <div className="gm-links-carousel-images__item-info">
                      <div className="gm-links-carousel-images__item-headline">
                        <h2>Aligned. Consistent. Transparent.</h2>
                      </div>
                      <div className="gm-links-carousel-images__item-btn">
                        <button
                          data-btn="gm-links-carousel-images-block_90c699bbddfa7a18f235fdaa3e69ef4b-6"
                          className="gm-btn js-open-modal gm-btn_orange"
                          aria-label="Learn More - Financial Advisors"
                        >
                          <span>Learn More – Financial Advisors</span>
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
                        </button>{" "}
                      </div>
                      <div
                        className="js-modal gm-links-carousel-images__modal"
                        data-modal="gm-links-carousel-images-block_90c699bbddfa7a18f235fdaa3e69ef4b-6"
                      >
                        <div className="js-close-modal gm-links-carousel-images__modal-overlay" />
                        <div className="gm-links-carousel-images__modal-content">
                          <button
                            className="js-close-modal gm-links-carousel-images__modal-close"
                            aria-label="close modal"
                          >
                            <span style={{ display: "none" }}>modal-close</span>
                            <svg
                              role="presentation"
                              width={40}
                              height={40}
                              viewBox="0 0 40 40"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2 2C9.14661 6.53726 15.346 12.1266 21.3334 18.0204C27.2385 23.9966 32.8396 30.1962 37.3726 37.3381C30.2263 32.8121 24.0212 27.217 18.0392 21.3177C12.1396 15.336 6.54422 9.14218 2 2Z"
                                fill="#003147"
                              />
                              <path
                                d="M36.5147 2.82227C32.3207 9.75555 27.027 15.6891 21.4182 21.3957C15.7228 27.0159 9.78889 32.3208 2.85938 36.5104C7.04217 29.5768 12.3413 23.6377 17.9559 17.9369C23.6571 12.3225 29.5855 7.02308 36.5147 2.82227Z"
                                fill="#003147"
                              />
                            </svg>
                          </button>
                          <div className="gm-links-carousel-images__modal-inner">
                            <p className="gm-links-carousel-images__modal-text">
                              You will now be redirected to TheAbdullaCapital
                              Investment Management.{" "}
                            </p>
                            <a
                              className="gm-btn gm-btn_orange"
                              href="https://www.TheAbdullaCapitalim.com/"
                              target="_blank"
                              aria-label="Visit TheAbdullaCapitalIM.com, open in new tab"
                            >
                              <span>Visit TheAbdullaCapitalIM.com</span>
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
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
                  </div>
              </div>
          </section>

          <section
              id="leadership"
              className="gm-featured-content-2up gm-section-element gm-featured-content-2up_ow-top-dg-text-sand-bottom"
          >
              <motion.div initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true, amount: 0.3 }}
                  // exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}>
                  <h1 className="text-center font-extrabold py-8"> Leadership</h1>
              </motion.div>
                  <motion.div
                      className="leadership-container"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      // exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                  >
                      {/* Left Side: Image */}
                      <div style={frameStyle}>
                      <motion.div
                          className="image-side"
                          initial={{ x: -100, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          viewport={{ once: true, amount: 0.3 }}
                          transition={{ delay: 0.2, duration: 0.6 }}
                      >
                          <img src={leadershipData.imageUrl} alt={leadershipData.name} />
                      </motion.div>
                      </div>

                      {/* Right Side: Description */}
                      <motion.div
                          className="description-side"
                          initial={{ x: 100, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          viewport={{ once: true, amount: 0.3 }}
                          transition={{ delay: 0.2, duration: 0.6 }}
                      >
                          <div className="text-content">
                              <h1 className="name">{leadershipData.name}</h1>
                              {/*<h3 className="title">{leadershipData.title}</h3>*/}
                              <p className="description">{leadershipData.description}</p>
                              <button className="cta-button">Read Full Bio</button>
                          </div>
                      </motion.div>
                  </motion.div>

          </section>
          <section>
              <div className="bg-gray-50 text-gray-900">
                  {/* Hero Section */}
                  {/*<div className="bg-blue-600 text-white py-20 px-6 text-center">*/}
                  {/*    <h1 className="text-5xl font-extrabold mb-4">Our Vision</h1>*/}
                  {/*    <p className="text-xl max-w-2xl mx-auto opacity-90">*/}
                  {/*        Shaping the future of digital innovation by empowering businesses to reach their full potential.*/}
                  {/*    </p>*/}
                  {/*</div>*/}

                  {/* Vision Statement Section */}
                  <div className="max-w-7xl mx-auto px-6 py-16 >" style={pageStyle}>
                      <div  style={textContainerStyle} className="flex flex-col">
                          <div className="text-center">
                              <h2 className="text-4xl font-bold text-white">Our Vision</h2>
                              <p className="mt-4 text-lg text-olive-300 max-w-3xl mx-auto">
                                  To build a capital platform that combines stewardship, strategic intelligence, and long-term partnerships across global markets.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </div>
    );
};

export default About;
