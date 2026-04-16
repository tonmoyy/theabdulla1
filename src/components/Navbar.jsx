import { Logo3 } from "../assets";
import { business1 } from "../assets";
import { useState } from "react";
import { LogoAbdulla3 } from "../assets";

// Import Swiper styles
import "swiper/css";

// Modern icon imports
import { Search, X, ArrowRight, Menu } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleSearch = () => {
        setSearchOpen(!searchOpen);
    };

    const toggleMobileSearch = () => {
        setMobileSearchOpen(!mobileSearchOpen);
    };

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

    // Inline styles for Contact Us button to ensure single line
    const contactButtonStyle = {
        whiteSpace: "nowrap",
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
    };

    const mobileContactButtonStyle = {
        whiteSpace: "nowrap",
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        fontSize: "14px",
    };

    // Modern font styles for hero section
    const heroTitleStyle = {
        fontFamily: "'Cormorant Garamond', 'Playfair Display', 'Times New Roman', serif",
        fontWeight: "500",
        letterSpacing: "-0.02em",
        lineHeight: "1.2",
    };

    const heroEmphasisStyle = {
        fontFamily: "'Cormorant Garamond', 'Playfair Display', 'Times New Roman', serif",
        fontWeight: "600",
        fontStyle: "italic",
        letterSpacing: "-0.02em",
    };

    const heroDescriptionStyle = {
        fontFamily: "'Inter', 'Manrope', sans-serif",
        fontWeight: "400",
        letterSpacing: "-0.01em",
        lineHeight: "1.6",
    };

    return (
        <div className="outline-style-solid">
            <meta httpEquiv="content-type" content="text/html;charset=UTF-8" />
            <link rel="preconnect" href="https://fonts.googleapis.com/" />
            <link rel="preconnect" href="https://fonts.gstatic.com/" />

            {/* Premium Font Imports */}
            <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />

            <link
                rel="icon"
                type="image/png"
                href="favicon-96x96.png"
                sizes="96x96"
            />
            <link rel="icon" type="image/svg+xml" href="favicon.svg" />
            <link rel="shortcut icon" href="favicon.ico" />
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="apple-touch-icon.png"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
                rel="stylesheet"
            />
            <link
                rel="preload"
                as="font"
                type="font/woff2"
                crossOrigin={"anonymous"}
            />
            <link
                rel="preload"
                as="font"
                type="font/woff"
                crossOrigin={"anonymous"}
            />
            <link rel="preload" as="font" type="font/ttf" crossOrigin={"anonymous"} />
            <link
                rel="preload"
                as="font"
                type="font/woff2"
                crossOrigin={"anonymous"}
            />
            <link rel="preload" as="font" type="font/woff" />
            <link rel="preload" as="font" type="font/ttf" crossOrigin={"anonymous"} />

            <meta
                name="robots"
                content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
            />

            <title>The Abdulla Capital</title>
            <meta
                name="description"
                content="The Abdulla Capital management firm specializing in personalized financial planning and investment strategies, expertly tailored to meet your unique financial goals. Experience the difference today."
            />
            <link rel="canonical" href="index.html" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Home Page" />
            <meta
                property="og:description"
                content="The Abdulla Capital is a boutique wealth management firm specializing in personalized financial planning and investment strategies, expertly tailored to meet your unique financial goals. Experience the difference today."
            />
            <meta property="og:url" content="#" />
            <meta property="og:site_name" content="The Abdulla Capital" />
            <meta property="article:modified_time" content="2026-03-02T16:10:55+00:00" />
            <meta name="twitter:card" content="summary_large_image" />

            <link rel="dns-prefetch" href="index.html" />
            <link rel="alternate" title="oEmbed (JSON)" type="application/json+oembed" />
            <link rel="alternate" title="oEmbed (XML)" type="text/xml+oembed" />

            <style
                id="wp-img-auto-sizes-contain-inline-css"
                type="text/css"
                dangerouslySetInnerHTML={{
                    __html:
                        '\nimg:is([sizes=auto i],[sizes^="auto," i]){contain-intrinsic-size:3000px 1500px}\n/*# sourceURL=wp-img-auto-sizes-contain-inline-css */\n',
                }}
            />

            <link
                rel="stylesheet"
                id="gm-style-css"
                href="/assets/css/styled4d0.css?ver=6.9"
                type="text/css"
                media="all"
            />

            <link rel="https://api.w.org/" href="wp-json/index.html" />
            <link rel="alternate" title="JSON" type="application/json" href="wp-json/wp/v2/pages/68.json" />
            <link rel="EditURI" type="application/rsd+xml" title="RSD" href="xmlrpc0db0.html?rsd" />
            <link rel="shortlink" href="index.html" />

            <link
                rel="preload"
                as="image"
                href="wp-content/uploads/2023/08/gtchphero-e1691176665403-2048x1712.jpg"
                imageSizes="(max-width: 2048px) 100vw, 2048px"
            />

            <style className="wp-fonts-local" type="text/css" />

            <link rel="icon" href="wp-content/uploads/2023/08/GTC-fav.svg" sizes="32x32" />
            <link rel="icon" href="wp-content/uploads/2023/08/GTC-fav.svg" sizes="192x192" />
            <link rel="apple-touch-icon" href="wp-content/uploads/2023/08/GTC-fav.svg" />

            <meta name="msapplication-TileImage" />

            <style
                id="global-styles-inline-css"
                type="text/css"
                dangerouslySetInnerHTML={{
                    __html:
                        "\n:root{--wp--preset--aspect-ratio--square: 1;--wp--preset--aspect-ratio--4-3: 4/3;--wp--preset--aspect-ratio--3-4: 3/4;--wp--preset--aspect-ratio--3-2: 3/2;--wp--preset--aspect-ratio--2-3: 2/3;--wp--preset--aspect-ratio--16-9: 16/9;--wp--preset--aspect-ratio--9-16: 9/16;--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--color--dark-blue: #003147;--wp--preset--color--off-white: #FCF9F5;--wp--preset--color--sky-blue: #D1DEE4;--wp--preset--color--sand: #E5E2DB;--wp--preset--color--storm: #394B52;--wp--preset--color--goldenrod: #F6A748;--wp--preset--color--midnight: #002232;--wp--preset--color--dark-mauve: #534657;--wp--preset--color--teal: #2F5B6B;--wp--preset--color--deep-grey: #1F292E;--wp--preset--color--storm-20: #D5D6D4;--wp--preset--color--im-orange: #E77427;--wp--preset--color--im-dark-orange: #AE5113;--wp--preset--color--line: #A5AFB7;--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgb(6,147,227) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgb(252,185,0) 0%,rgb(255,105,0) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgb(255,105,0) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--font-size--small: 13px;--wp--preset--font-size--medium: 20px;--wp--preset--font-size--large: 36px;--wp--preset--font-size--x-large: 42px;--wp--preset--font-size--heading-1-b: clamp(2.625rem, 2.625rem + ((1vw - 0.48rem) * 3.6392), 4.0625rem);--wp--preset--font-size--12: 0.75rem;--wp--preset--font-size--14: 0.875rem;--wp--preset--font-size--15: 0.9375rem;--wp--preset--font-size--16: 1rem;--wp--preset--font-size--18: clamp(1rem, 1rem + ((1vw - 0.48rem) * 0.3165), 1.125rem);--wp--preset--font-size--20: clamp(1rem, 1rem + ((1vw - 0.48rem) * 0.6329), 1.25rem);--wp--preset--font-size--22: clamp(1.0625rem, 1.0625rem + ((1vw - 0.48rem) * 0.7911), 1.375rem);--wp--preset--font-size--23: clamp(1.125rem, 1.125rem + ((1vw - 0.48rem) * 0.7911), 1.4375rem);--wp--preset--font-size--24: clamp(1.1875rem, 1.1875rem + ((1vw - 0.48rem) * 0.7911), 1.5rem);--wp--preset--font-size--26: clamp(1.3125rem, 1.3125rem + ((1vw - 0.48rem) * 0.7911), 1.625rem);--wp--preset--font-family--manrope: 'Manrope', sans-serif;--wp--preset--font-family--canela: Canela;--wp--preset--spacing--20: 0.44rem;--wp--preset--spacing--30: 0.67rem;--wp--preset--spacing--40: 1rem;--wp--preset--spacing--50: 1.5rem;--wp--preset--spacing--60: 2.25rem;--wp--preset--spacing--70: 3.38rem;--wp--preset--spacing--80: 5.06rem;--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);--wp--preset--shadow--outlined: 6px 6px 0px -3px rgb(255, 255, 255), 6px 6px rgb(0, 0, 0);--wp--preset--shadow--crisp: 6px 6px 0px rgb(0, 0, 0);--wp--custom--prefix: gm;}:root { --wp--style--global--content-size: min(100% - clamp(3.125rem, 3.125rem + ((1vw - 0.36rem) * 17.6282), 10rem), 980px);--wp--style--global--wide-size: min(100% - clamp(3.125rem, 3.125rem + ((1vw - 0.36rem) * 17.6282), 10rem), 1500px); }:where(body) { margin: 0; }.wp-site-blocks { padding-top: var(--wp--style--root--padding-top); padding-bottom: var(--wp--style--root--padding-bottom); }.has-global-padding { padding-right: var(--wp--style--root--padding-right); padding-left: var(--wp--style--root--padding-left); }.has-global-padding > .alignfull { margin-right: calc(var(--wp--style--root--padding-right) * -1); margin-left: calc(var(--wp--style--root--padding-left) * -1); }.has-global-padding :where(:not(.alignfull.is-layout-flow) > .has-global-padding:not(.wp-block-block, .alignfull)) { padding-right: 0; padding-left: 0; }.has-global-padding :where(:not(.alignfull.is-layout-flow) > .has-global-padding:not(.wp-block-block, .alignfull)) > .alignfull { margin-left: 0; margin-right: 0; }.wp-site-blocks > .alignleft { float: left; margin-right: 2em; }.wp-site-blocks > .alignright { float: right; margin-left: 2em; }.wp-site-blocks > .aligncenter { justify-content: center; margin-left: auto; margin-right: auto; }:where(.wp-site-blocks) > * { margin-block-start: 30px; margin-block-end: 0; }:where(.wp-site-blocks) > :first-child { margin-block-start: 0; }:where(.wp-site-blocks) > :last-child { margin-block-end: 0; }:root { --wp--style--block-gap: 30px; }:root :where(.is-layout-flow) > :first-child{margin-block-start: 0;}:root :where(.is-layout-flow) > :last-child{margin-block-end: 0;}:root :where(.is-layout-flow) > *{margin-block-start: 30px;margin-block-end: 0;}:root :where(.is-layout-constrained) > :first-child{margin-block-start: 0;}:root :where(.is-layout-constrained) > :last-child{margin-block-end: 0;}:root :where(.is-layout-constrained) > *{margin-block-start: 30px;margin-block-end: 0;}:root :where(.is-layout-flex){gap: 30px;}:root :where(.is-layout-grid){gap: 30px;}.is-layout-flow > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}.is-layout-flow > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}.is-layout-flow > .aligncenter{margin-left: auto !important;margin-right: auto !important;}.is-layout-constrained > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}.is-layout-constrained > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}.is-layout-constrained > .aligncenter{margin-left: auto !important;margin-right: auto !important;}.is-layout-constrained > :where(:not(.alignleft):not(.alignright):not(.alignfull)){max-width: var(--wp--style--global--content-size);margin-left: auto !important;margin-right: auto !important;}.is-layout-constrained > .alignwide{max-width: var(--wp--style--global--wide-size);}body .is-layout-flex{display: flex;}.is-layout-flex{flex-wrap: wrap;align-items: center;}.is-layout-flex > :is(*, div){margin: 0;}body .is-layout-grid{display: grid;}.is-layout-grid > :is(*, div){margin: 0;}body{backgroundColor: var(--wp--preset--color--off-white);color: var(--wp--preset--color--deep-grey);font-family: var(--wp--preset--font-family--manrope);font-size: var(--wp--preset--font-size--20);font-weight: 400;line-height: 1.9;margin-top: 0;margin-right: 0;margin-bottom: 0;margin-left: 0;--wp--style--root--padding-top: 0px;--wp--style--root--padding-right: 0px;--wp--style--root--padding-bottom: 0px;--wp--style--root--padding-left: 0px;}a:where(:not(.wp-element-button)){color: var(--wp--preset--color--deep-grey);font-weight: 600;line-height: 1.5;text-decoration: underline;}:root :where(a:where(:not(.wp-element-button)):hover){color: var(--wp--preset--color--dark-blue);text-decoration: none;}:root :where(a:where(:not(.wp-element-button)):focus){outline-width: 1;}h1, h2, h3, h4, h5, h6{margin-top: 0;margin-bottom: clamp(1.5625rem, 1.5625rem + ((1vw - 0.48rem) * 2.3734), 2.5rem);padding-top: 20px;}h1{font-family: var(--wp--preset--font-family--canela);font-size: clamp(2.9375rem, 2.9375rem + ((1vw - 0.48rem) * 3.6392), 4.375rem);font-weight: 300;line-height: 1.2;}h2{font-family: var(--wp--preset--font-family--canela);font-size: clamp(2.375rem, 2.375rem + ((1vw - 0.48rem) * 3.0063), 3.5625rem);font-weight: 300;line-height: 1.3;}h3{font-family: var(--wp--preset--font-family--canela);font-size: clamp(1.875rem, 1.875rem + ((1vw - 0.48rem) * 2.3734), 2.8125rem);font-weight: 300;line-height: clamp(2.5875rem, 2.5875rem + ((1vw - 0.48rem) * 2.7057), 3.65625rem);}h4{font-family: var(--wp--preset--font-family--canela);font-size: clamp(1.6875rem, 1.6875rem + ((1vw - 0.48rem) * 1.5823), 2.3125rem);font-weight: 300;line-height: clamp(2.32875rem, 2.32875rem + ((1vw - 0.48rem) * 1.7152), 3.00625rem);}h5{font-family: var(--wp--preset--font-family--canela);font-size: clamp(1.5rem, 1.5rem + ((1vw - 0.48rem) * 0.9494), 1.875rem);font-weight: 300;line-height: clamp(2.07rem, 2.07rem + ((1vw - 0.48rem) * 0.9304), 2.4375rem);}h6{font-family: var(--wp--preset--font-family--manrope);font-size: clamp(1.1875rem, 1.1875rem + ((1vw - 0.48rem) * 0.7911), 1.5rem);font-weight: 400;line-height: clamp(1.78125rem, 1.78125rem + ((1vw - 0.48rem) * 1.5665), 2.4rem);}:root :where(.wp-element-button, .wp-block-button__link){backgroundColor: #32373c;border-width: 0;color: #fff;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;letter-spacing: inherit;line-height: inherit;padding-top: calc(0.667em + 2px);padding-right: calc(1.333em + 2px);padding-bottom: calc(0.667em + 2px);padding-left: calc(1.333em + 2px);text-decoration: none;text-transform: inherit;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-dark-blue-color{color: var(--wp--preset--color--dark-blue) !important;}.has-off-white-color{color: var(--wp--preset--color--off-white) !important;}.has-sky-blue-color{color: var(--wp--preset--color--sky-blue) !important;}.has-sand-color{color: var(--wp--preset--color--sand) !important;}.has-storm-color{color: var(--wp--preset--color--storm) !important;}.has-goldenrod-color{color: var(--wp--preset--color--goldenrod) !important;}.has-midnight-color{color: var(--wp--preset--color--midnight) !important;}.has-dark-mauve-color{color: var(--wp--preset--color--dark-mauve) !important;}.has-teal-color{color: var(--wp--preset--color--teal) !important;}.has-deep-grey-color{color: var(--wp--preset--color--deep-grey) !important;}.has-storm-20-color{color: var(--wp--preset--color--storm-20) !important;}.has-im-orange-color{color: var(--wp--preset--color--im-orange) !important;}.has-im-dark-orange-color{color: var(--wp--preset--color--im-dark-orange) !important;}.has-line-color{color: var(--wp--preset--color--line) !important;}.has-black-backgroundColor{backgroundColor: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-backgroundColor{backgroundColor: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-backgroundColor{backgroundColor: var(--wp--preset--color--white) !important;}.has-pale-pink-backgroundColor{backgroundColor: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-backgroundColor{backgroundColor: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-backgroundColor{backgroundColor: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-backgroundColor{backgroundColor: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-backgroundColor{backgroundColor: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-backgroundColor{backgroundColor: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-backgroundColor{backgroundColor: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-backgroundColor{backgroundColor: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-backgroundColor{backgroundColor: var(--wp--preset--color--vivid-purple) !important;}.has-dark-blue-backgroundColor{backgroundColor: var(--wp--preset--color--dark-blue) !important;}.has-off-white-backgroundColor{backgroundColor: var(--wp--preset--color--off-white) !important;}.has-sky-blue-backgroundColor{backgroundColor: var(--wp--preset--color--sky-blue) !important;}.has-sand-backgroundColor{backgroundColor: var(--wp--preset--color--sand) !important;}.has-storm-backgroundColor{backgroundColor: var(--wp--preset--color--storm) !important;}.has-goldenrod-backgroundColor{backgroundColor: var(--wp--preset--color--goldenrod) !important;}.has-midnight-backgroundColor{backgroundColor: var(--wp--preset--color--midnight) !important;}.has-dark-mauve-backgroundColor{backgroundColor: var(--wp--preset--color--dark-mauve) !important;}.has-teal-backgroundColor{backgroundColor: var(--wp--preset--color--teal) !important;}.has-deep-grey-backgroundColor{backgroundColor: var(--wp--preset--color--deep-grey) !important;}.has-storm-20-backgroundColor{backgroundColor: var(--wp--preset--color--storm-20) !important;}.has-im-orange-backgroundColor{backgroundColor: var(--wp--preset--color--im-orange) !important;}.has-im-dark-orange-backgroundColor{backgroundColor: var(--wp--preset--color--im-dark-orange) !important;}.has-line-backgroundColor{backgroundColor: var(--wp--preset--color--line) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-dark-blue-border-color{border-color: var(--wp--preset--color--dark-blue) !important;}.has-off-white-border-color{border-color: var(--wp--preset--color--off-white) !important;}.has-sky-blue-border-color{border-color: var(--wp--preset--color--sky-blue) !important;}.has-sand-border-color{border-color: var(--wp--preset--color--sand) !important;}.has-storm-border-color{border-color: var(--wp--preset--color--storm) !important;}.has-goldenrod-border-color{border-color: var(--wp--preset--color--goldenrod) !important;}.has-midnight-border-color{border-color: var(--wp--preset--color--midnight) !important;}.has-dark-mauve-border-color{border-color: var(--wp--preset--color--dark-mauve) !important;}.has-teal-border-color{border-color: var(--wp--preset--color--teal) !important;}.has-deep-grey-border-color{border-color: var(--wp--preset--color--deep-grey) !important;}.has-storm-20-border-color{border-color: var(--wp--preset--color--storm-20) !important;}.has-im-orange-border-color{border-color: var(--wp--preset--color--im-orange) !important;}.has-im-dark-orange-border-color{border-color: var(--wp--preset--color--im-dark-orange) !important;}.has-line-border-color{border-color: var(--wp--preset--color--line) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}.has-heading-1-b-font-size{font-size: var(--wp--preset--font-size--heading-1-b) !important;}.has-12-font-size{font-size: var(--wp--preset--font-size--12) !important;}.has-14-font-size{font-size: var(--wp--preset--font-size--14) !important;}.has-15-font-size{font-size: var(--wp--preset--font-size--15) !important;}.has-16-font-size{font-size: var(--wp--preset--font-size--16) !important;}.has-18-font-size{font-size: var(--wp--preset--font-size--18) !important;}.has-20-font-size{font-size: var(--wp--preset--font-size--20) !important;}.has-22-font-size{font-size: var(--wp--preset--font-size--22) !important;}.has-23-font-size{font-size: var(--wp--preset--font-size--23) !important;}.has-24-font-size{font-size: var(--wp--preset--font-size--24) !important;}.has-26-font-size{font-size: var(--wp--preset--font-size--26) !important;}.has-manrope-font-family{font-family: var(--wp--preset--font-family--manrope) !important;}.has-canela-font-family{font-family: var(--wp--preset--font-family--canela) !important;}\n/*# sourceURL=global-styles-inline-css */\n",
                }}
            />

            <div className="gm-focus-trap" tabIndex={0} />

            <a
                href="#gm-main"
                className="gm-btn gm-btn_blue gm-skip-to-link"
                target="_self"
                role="button"
            >
                Skip to Main Content
            </a>

            {/* Header with Modern Icons */}
            <header className="gm-header">
                <div className="gm-container-wide">
                    <a href="/" className="gm-header__logo" aria-label="link to the home page">
                        <img
                            width={200}
                            height={100}
                            src={Logo3}
                            className="attachment-medium_large size-medium_large"
                            alt="The Abdulla Capital"
                            decoding="async"
                        />
                    </a>

                    <div className="gm-header__wrap" role="navigation" aria-label="main navigation">
                        <ul id="menu-header-menu" className="gm-header__menu">
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-40">
                                <a href="#about-us" data-title="Platform Us">
                                    <span>Platform</span>
                                </a>
                                <ul className="sub-menu">
                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-41">
                                        <a href="about/index.html#who-we-are" data-title="Vision">
                                            <span>Vision</span>
                                        </a>
                                    </li>
                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2635">
                                        <a href="about/index.html#our-history" data-title="Investment Philosophy">
                                            <span>Disciplined Capital Allocation</span>
                                        </a>
                                    </li>
                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-42">
                                        <a href="#leadership" data-title="Leadership">
                                            <span>Leadership</span>
                                        </a>
                                    </li>
                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-44">
                                        <a href="careers/index.html" data-title="Careers">
                                            <span>Careers</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-40">
                                <a href="platform/index.html" data-title="Platform">
                                    <span>Platform</span>
                                </a>
                                <ul className="sub-menu">
                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-41">
                                        <a href="platform/index.html#investment" data-title="Investment">
                                            <span>Investment</span>
                                        </a>
                                    </li>
                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2635">
                                        <a href="platform/index.html#advisory" data-title="Advisory">
                                            <span>Advisory</span>
                                        </a>
                                    </li>
                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-42">
                                        <a href="platform/index.html#Equity" data-title="Equity">
                                            <span>Equity</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-40">
                                <a href="investments/index.html" data-title="Investments">
                                    <span>Investments</span>
                                </a>
                                <ul className="sub-menu">
                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-41">
                                        <a href="investments/index.html#investment-focus" data-title="Investment Focus">
                                            <span>Investment Focus</span>
                                        </a>
                                    </li>
                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2635">
                                        <a href="investments/index.html#sector-coverage" data-title="Sector Coverage">
                                            <span>Sector Coverage</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-40">
                                <a href="partnerships/index.html" data-title="Partnerships">
                                    <span>Partnerships</span>
                                </a>
                                <ul className="sub-menu">
                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-41">
                                        <a href="partnerships/index.html#who-we-partner-with" data-title="Who We Partner With">
                                            <span>Who We Partner With</span>
                                        </a>
                                    </li>
                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2635">
                                        <a href="partnerships/index.html#submit-opportunity" data-title="Submit Opportunity">
                                            <span>Submit Opportunity</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-40">
                                <a href="insights/index.html" data-title="Insights">
                                    <span>Insights</span>
                                </a>
                                <ul className="sub-menu">
                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-41">
                                        <a href="insights/index.html#market-outlook" data-title="Market Outlook">
                                            <span>Market Outlook</span>
                                        </a>
                                    </li>
                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2635">
                                        <a href="insights/index.html#investment-commentary" data-title="Investment Commentary">
                                            <span>Investment Commentary</span>
                                        </a>
                                    </li>
                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2635">
                                        <a href="insights/index.html#strategic-research" data-title="Strategic Research">
                                            <span>Strategic Research</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>

                        <div className="gm-header__info">
                            <a
                                className="gm-btn gm-btn_blue gm-btn_min"
                                href="contact-us/index.html"
                                aria-label="Contact Us"
                                style={contactButtonStyle}
                            >
                                <span>Contact Us</span>
                                <ArrowRight size={16} />
                            </a>

                            <div className="gm-header__search js-search">
                                <button
                                    className="gm-header__search-open js-search-open"
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
                                            defaultValue=""
                                            placeholder="Search..."
                                            aria-label="Search"
                                            style={{ padding: "8px", marginRight: "8px" }}
                                        />
                                        <button
                                            className="gm-header__search-submit js-search-submit"
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

                        <button className="gm-header__open-menu js-open-menu" onClick={toggleMenu} aria-label="Menu">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`gm-mobile-menu ${isOpen ? "open" : "hidden"}`} style={{ display: isOpen ? "block" : "none" }}>
                    <div className="gm-container-wide">
                        <ul id="menu-header-menu-1" className="gm-mobile-header__menu">
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-40">
                                <div className="menu-item-children">
                                    <a href="about/index.html">
                                        <span>Platform Us</span>
                                    </a>
                                </div>
                                <ul className="sub-menu">
                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-41">
                                        <a href="about/index.html#who-we-are">
                                            <span>Who We Are</span>
                                        </a>
                                    </li>
                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2635">
                                        <a href="about/index.html#our-history">
                                            <span>Our History</span>
                                        </a>
                                    </li>
                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-42">
                                        <a href="about/index.html#the-board">
                                            <span>The Board</span>
                                        </a>
                                    </li>
                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-43">
                                        <a href="about/index.html#our-leadership">
                                            <span>Our People</span>
                                        </a>
                                    </li>
                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-44">
                                        <a href="careers/index.html">
                                            <span>Careers</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-45">
                                <div className="menu-item-children">
                                    <a>
                                        <span>A True Partnership</span>
                                    </a>
                                </div>
                                <ul className="sub-menu">
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3185">
                                        <a href="private-wealth-management/high-net-worth-individuals-and-families/index.html">
                                            <span>Individuals &amp; Families</span>
                                        </a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3186">
                                        <a href="private-wealth-management/family-office-services/index.html">
                                            <span>Family Office Services</span>
                                        </a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6075">
                                        <a href="business-owners/index.html">
                                            <span>Business Owners</span>
                                        </a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3187">
                                        <a href="endowments-foundations/foundation-investment-management/index.html">
                                            <span>Foundations</span>
                                        </a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2278">
                                        <a href="sustainable-investing-overview/index.html">
                                            <span>Sustainable Investing</span>
                                        </a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3188">
                                        <a href="endowments-foundations/endowment-foundation-management/index.html">
                                            <span>Endowments</span>
                                        </a>
                                    </li>
                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-51">
                                        <a className="js-open-modal" href="#" data-modal="#modal-financial-intermediaries">
                                            <span>Financial Intermediaries</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3378">
                                <a href="news-insights/index.html">
                                    <span>News &amp; Insights</span>
                                </a>
                            </li>

                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-57">
                                <a target="_blank" rel="noopener" href="https://www.TheAbdullaCapitalconnect.com/">
                                    <span>TheAbdullaCapitalConnect</span>
                                </a>
                            </li>
                        </ul>

                        <div className="gm-mobile-header__info">
                            <a
                                className="gm-btn gm-btn_blue gm-btn_min"
                                href="contact-us/index.html"
                                aria-label="Contact Us"
                                style={mobileContactButtonStyle}
                            >
                                <span>Contact Us</span>
                                <ArrowRight size={14} />
                            </a>

                            <div className="gm-mobile-header__search">
                                <div className="js-mobile-search" style={{ display: "flex", alignItems: "center" }}>
                                    <label htmlFor="mobile-search" style={{ display: "none" }}>mobile-search</label>
                                    <input
                                        id="mobile-search"
                                        name="s"
                                        maxLength={50}
                                        type="text"
                                        defaultValue=""
                                        placeholder="Search Keywords..."
                                        aria-label="Search Keywords"
                                        style={{ padding: "8px", flex: 1 }}
                                    />
                                    <button
                                        className="gm-mobile-header__search-open js-mobile-search-open"
                                        onClick={toggleMobileSearch}
                                        aria-label="open search bar"
                                    >
                                        <Search size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main id="gm-main" className="main-wrapper">
                {/* Hero Section with Modern Fonts */}
                <section
                    id="gm-home-page-hero-block_844d7ab1cb949749438679af64370224"
                    className="gm-home-page-hero align-full gm-section-element"
                >
                    <div className="gm-container-wide js-container">
                        <div className="gm-home-page-hero__title">
                            <h1 style={{ ...headerStyle, ...heroTitleStyle }}>
                                <span style={{ position: "relative", display: "inline-block" }} className="gm-home-page-hero__title-word gm-home-page-hero__title-word_1">
                                    Building
                                </span>{" "}
                                <span style={{ position: "relative", display: "inline-block", ...heroEmphasisStyle }} className="gm-home-page-hero__title-word gm-home-page-hero__title-word_2">
                                    <em>Enduring Value</em>
                                </span>{" "}
                                <span style={{ position: "relative", display: "inline-block" }} className="gm-home-page-hero__title-word">
                                    Through Strategic
                                </span>{" "}
                                <span style={{ position: "relative", display: "inline-block" }} className="gm-home-page-hero__title-word">
                                    Capital.
                                </span>
                            </h1>
                        </div>
                        <div className="gm-home-page-hero__description">
                            <p style={heroDescriptionStyle}>
                                A private capital platform operating across investment
                                stewardship, strategic advisory and equity partnerships.
                            </p>
                        </div>
                    </div>
                    <div className="gm-home-page-hero__media">
                        <img
                            fetchPriority="high"
                            decoding="async"
                            width={2048}
                            height={1712}
                            src={business1}
                            alt="Hero background"
                        />
                    </div>
                    <div className="gm-home-page-hero__lines" style={containerStyle}>
                        <div className="ln1" style={{ width: "100%" }}></div>
                        <div className="ln2" style={{ height: "100%" }}></div>
                        <div className="ln3" style={{ width: "100%" }}></div>
                        <div className="ln4" style={{ height: "100%" }}></div>
                    </div>
                </section>
            </main>

            {/* Modal components with modern icons */}
            <div className="js-modal exit-modal" id="modal-financial-intermediaries">
                <div className="js-close-modal exit-modal-overlay" />
                <div className="exit-modal-content">
                    <button className="js-close-modal exit-modal-close" aria-label="close modal">
                        <X size={24} />
                    </button>
                    <div className="exit-modal-inner">
                        <p className="exit-modal-text">
                            You will now be redirected to TheAbdullaCapital Investment Management.
                        </p>
                        <a className="gm-btn gm-btn_blue" href="https://www.TheAbdullaCapitalim.com/" aria-label="Visit TheAbdullaCapitalIM.com">
                            <span>Visit TheAbdullaCapitalIM.com</span>
                            <ArrowRight size={14} style={{ marginLeft: "8px" }} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="js-modal exit-modal" id="modal-TheAbdullaCapital-investment-management">
                <div className="js-close-modal exit-modal-overlay" />
                <div className="exit-modal-content">
                    <button className="js-close-modal exit-modal-close" aria-label="close modal">
                        <X size={24} />
                    </button>
                    <div className="exit-modal-inner">
                        <p className="exit-modal-text">
                            You will now be redirected to TheAbdullaCapital Investment Management.
                        </p>
                        <a className="gm-btn gm-btn_blue" href="https://www.TheAbdullaCapitalim.com/" aria-label="Visit TheAbdullaCapitalIM.com">
                            <span>Visit TheAbdullaCapitalIM.com</span>
                            <ArrowRight size={14} style={{ marginLeft: "8px" }} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;