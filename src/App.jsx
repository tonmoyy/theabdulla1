import Benefits from "./sections/About.jsx";
import Partnerships from "./sections/Partnerships.jsx";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Pricing from "./sections/InvestmentPhilosophy.jsx";
import Roadmap from "./sections/Roadmap";
import CorePillars from "./sections/CorePillars.jsx";
import { BrowserRouter } from 'react-router-dom';

const App = () => {
    return (
        <>
            <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
                <BrowserRouter>
                    <Navbar />
                   <Hero />
                   <Benefits />
                   <Partnerships />
                   <CorePillars />
                   <Pricing />
                   <Roadmap />
                   <Footer />
                    </BrowserRouter>
            </div>
        </>
    );
};

export default App;
