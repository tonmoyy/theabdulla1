// Navbar.jsx
import { useState } from "react";
import { logoabdulla5 } from "../assets";
import "swiper/css";
import { Search, X, ArrowRight, Menu } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleSearch = () => setSearchOpen(!searchOpen);
    const toggleMobileSearch = () => setMobileSearchOpen(!mobileSearchOpen);

    const scrollToAbout = (e) => {
        e.preventDefault();
        const aboutSection = document.getElementById('about-us');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    const contactButtonStyle = {
        whiteSpace: "nowrap",
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
    };

    const mobileContactButtonStyle = {
        ...contactButtonStyle,
        fontSize: "14px",
    };

    return (
        <div className="outline-style-solid">
            <header className="ta-header">
                <div className="ta-container-wide">
                    <a href="/" className="ta-header__logo" aria-label="link to the home page">
                        <img
                            width={200}
                            height={100}
                            src={logoabdulla5}
                            className="attachment-medium_large size-medium_large"
                            alt="The Abdulla Capital"
                            decoding="async"
                        />
                    </a>

                    <div className="ta-header__wrap" role="navigation" aria-label="main navigation">
                        <ul id="menu-header-menu" className="ta-header__menu">
                            <li className="menu-item"><a href="/" data-title="Home"><span>Home</span></a></li>
                            <li className="menu-item"><a href="#about-us" data-title="About" onClick={scrollToAbout}><span>About Us</span></a></li>
                            <li className="menu-item"><a href="/platform" data-title="Platform"><span>Platform</span></a></li>
                            <li className="menu-item"><a href="/investments" data-title="Investments"><span>Investments</span></a></li>
                            <li className="menu-item"><a href="/partnerships" data-title="Partnerships"><span>Partnerships</span></a></li>
                        </ul>

                        <div className="ta-header__info">
                            <a
                                className="ta-btn ta-btn_blue ta-btn_min"
                                href="/contact-us"
                                aria-label="Contact Us"
                                style={contactButtonStyle}
                            >
                                <span>Contact Us</span>
                                <ArrowRight size={16} />
                            </a>

                            <div className="ta-header__search js-search">
                                <button
                                    className="ta-header__search-open js-search-open"
                                    onClick={toggleSearch}
                                    aria-label="open search"
                                >
                                    <Search size={20} />
                                </button>
                                {searchOpen && (
                                    <div className="js-search-form" style={{ display: "flex", alignItems: "center" }}>
                                        <label htmlFor="search" style={{ display: "none" }}>search</label>
                                        <input
                                            id="search"
                                            name="s"
                                            maxLength={50}
                                            type="text"
                                            placeholder="Search..."
                                            aria-label="Search"
                                            style={{ padding: "8px", marginRight: "8px" }}
                                        />
                                        <button
                                            className="ta-header__search-submit js-search-submit"
                                            type="submit"
                                            aria-label="search submit"
                                        >
                                            <Search size={18} />
                                        </button>
                                        <button onClick={toggleSearch} aria-label="close search">
                                            <X size={18} />
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>

                        <button className="ta-header__open-menu js-open-menu" onClick={toggleMenu} aria-label="Menu">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`ta-mobile-menu ${isOpen ? "open" : "hidden"}`} style={{ display: isOpen ? "block" : "none" }}>
                    <div className="ta-container-wide">
                        <ul className="ta-mobile-header__menu">
                            <li><a href="#about-us" onClick={scrollToAbout}><span>About Us</span></a></li>
                            <li><a href="/platform"><span>Platform</span></a></li>
                            <li><a href="/investments"><span>Investments</span></a></li>
                            <li><a href="/partnerships"><span>Partnerships</span></a></li>
                        </ul>

                        <div className="ta-mobile-header__info">
                            <a
                                className="ta-btn ta-btn_blue ta-btn_min"
                                href="/contact-us"
                                aria-label="Contact Us"
                                style={mobileContactButtonStyle}
                            >
                                <span>Contact Us</span>
                                <ArrowRight size={14} />
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navbar;