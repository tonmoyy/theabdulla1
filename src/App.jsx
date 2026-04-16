import Partnerships from "./sections/Partnerships.jsx";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import CorePillars from "./sections/CorePillars.jsx";
import { BrowserRouter } from "react-router-dom";
import Platform from "./sections/Platform.jsx";

import InvestmentPhilosophy from "./sections/InvestmentPhilosophy.jsx";
import Geographic from "./sections/GeographicOutlook.jsx";
import Contact from "@/sections/Contact.jsx";
import Featured from "@/components/Featured.jsx";
import About from "@/sections/About.jsx";
import Vision from "@/sections/Vision.jsx";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <BrowserRouter>
          <Navbar />
          <About />
          <Vision />
            <Platform />
            <CorePillars />
          <Geographic />
          <Partnerships />
          <Featured />
            <Footer />
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
