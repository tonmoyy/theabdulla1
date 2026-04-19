// Navbar.jsx
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { logoabdulla5 } from "../assets";
import "swiper/css";
import { Search, X, ArrowRight, Menu } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleSearch = () => setSearchOpen(!searchOpen);
    const toggleMobileSearch = () => setMobileSearchOpen(!mobileSearchOpen);

    const scrollToAbout = (e) => {
        e.preventDefault();
        setIsOpen(false);

        // If we're already on the homepage, just scroll
        if (location.pathname === "/") {
            const aboutSection = document.getElementById("about-us");
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            // Navigate to home, then scroll after a short delay
            navigate("/");
            // Use setTimeout to wait for the component to mount
            setTimeout(() => {
                const aboutSection = document.getElementById("about-us");
                if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: "smooth" });
                }
            }, 100);
        }
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
                    <Link to="/" className="ta-header__logo" aria-label="link to the home page">
                        <img
                            width={200}
                            height={100}
                            src={logoabdulla5}
                            className="attachment-medium_large size-medium_large"
                            alt="The Abdulla Capital"
                            decoding="async"
                        />
                    </Link>

                    <div className="ta-header__wrap" role="navigation" aria-label="main navigation">
                        <ul id="menu-header-menu" className="ta-header__menu">
                            <li className="menu-item">
                                <Link to="/" data-title="Home"><span>Home</span></Link>
                            </li>
                            <li className="menu-item">
                                <Link
                                    to="/#about-us"
                                    data-title="About Us"
                                    onClick={scrollToAbout}
                                >
                                    <span>About Us</span>
                                </Link>
                            </li>
                            <li className="menu-item">
                                <Link to="/platform" data-title="Platform"><span>Platform</span></Link>
                            </li>
                            <li className="menu-item">
                                <Link to="/investments" data-title="Investments"><span>Investments</span></Link>
                            </li>
                            <li className="menu-item">
                                <Link to="/partnerships" data-title="Partnerships"><span>Partnerships</span></Link>
                            </li>
                        </ul>

                        <div className="ta-header__info">
                            <Link
                                className="ta-btn ta-btn_blue ta-btn_min"
                                to="/contact-us"
                                aria-label="Contact Us"
                                style={contactButtonStyle}
                            >
                                <span>Contact Us</span>
                                <ArrowRight size={16} />
                            </Link>

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
                            <li>
                                <Link to="/#about-us" onClick={scrollToAbout}>
                                    <span>About Us</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/platform"><span>Platform</span></Link>
                            </li>
                            <li>
                                <Link to="/investments"><span>Investments</span></Link>
                            </li>
                            <li>
                                <Link to="/partnerships"><span>Partnerships</span></Link>
                            </li>
                        </ul>

                        <div className="ta-mobile-header__info">
                            <Link
                                className="ta-btn ta-btn_blue ta-btn_min"
                                to="/contact-us"
                                aria-label="Contact Us"
                                style={mobileContactButtonStyle}
                            >
                                <span>Contact Us</span>
                                <ArrowRight size={14} />
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navbar;