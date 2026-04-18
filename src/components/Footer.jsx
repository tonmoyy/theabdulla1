import { logoabdulla6 } from "../assets";

const Footerr = () => {
  return (
      <footer className="ta-footer">
        <div className="ta-footer__container ta-container-wide">
          <div className="ta-footer__logo-col">
            <a
                href="index.html"
                className="ta-footer__logo"
                aria-label="link to the home page"
            >
              <span style={{ display: "none" }}>link to the main page</span>
              <img
                  width={237}
                  height={41}
                  src={logoabdulla6}
                  className="attachment-medium_large size-medium_large"
                  alt="TheAbdullaCapital"
                  decoding="async"
                  loading="lazy"
              />
            </a>
          </div>
          <div className="ta-footer__nav-col">
            <div
                className="ta-footer__nav"
                role="navigation"
                aria-label="footer navigation 1"
            >
              <div className="ta-footer__nav-title">Company</div>
              <ul id="menu-company" className="ta-footer__menu">
                <li
                    id="menu-item-22"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-22"
                >
                  <a href="about/index.html" data-title="About Us">
                    <span>About</span>
                  </a>
                </li>
                <li
                    id="menu-item-23"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-23"
                >
                  <a href="careers/index.html" data-title="Careers">
                    <span>Platform</span>
                  </a>
                </li>
                <li
                    id="menu-item-6095"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6095"
                >
                  <a href="inclusion/index.html" data-title="Inclusion & Community">
                    <span>Investments</span>
                  </a>
                </li>
                <li
                    id="menu-item-24"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-24"
                >
                  <a href="contact-us/index.html#locations" data-title="Locations">
                    <span>Partnerships</span>
                  </a>
                </li>
                <li
                    id="menu-item-26"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-26"
                >
                  <a href="contact-us/index.html" data-title="Contact Us">
                    <span>Insights</span>
                  </a>
                </li>
                <li
                    id="menu-item-26"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-26"
                >
                  <a href="contact-us/index.html" data-title="Contact Us">
                    <span>Contact Us</span>
                  </a>
                </li>
              </ul>
            </div>
            <div
                className="ta-footer__nav"
                role="navigation"
                aria-label="footer navigation 2"
            >
              {/* Commented out content remains unchanged */}
            </div>
            <div
                className="ta-footer__nav"
                role="navigation"
                aria-label="footer navigation 3"
            >
              <div className="ta-footer__nav-title">Legal</div>
              <ul id="menu-legal" className="ta-footer__menu">
                <li
                    id="menu-item-31"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-31"
                >
                  <a href="terms-of-use/index.html" data-title="Terms of Use">
                    <span>Governance</span>
                  </a>
                </li>
                <li
                    id="menu-item-32"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-32"
                >
                  <a href="privacy-policy/index.html" data-title="Privacy Policy">
                    <span>Disclaimer</span>
                  </a>
                </li>
                <li
                    id="menu-item-33"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-33"
                >
                  <a href="disclosures/index.html" data-title="Disclosures">
                    <span>Privacy Policy</span>
                  </a>
                </li>
                <li
                    id="ot-sdk-btn"
                    className="ot-sdk-show-settings menu-item menu-item-type-custom menu-item-object-custom menu-item-4716"
                >
                  <a href="#" role="button" data-title="Cookie Settings">
                    <span>Cookie Settings</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="ta-footer__copyright">
          <div className="ta-footer__copyright-container ta-container-wide">
            <span>© 2026 TheAbdullaCapital. All rights reserved.</span>
          </div>
        </div>
      </footer>
  );
};

export default Footerr;