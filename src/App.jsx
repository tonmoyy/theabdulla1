import Partnerships from "./sections/Partnerships.jsx";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import CorePillars from "./sections/CorePillars.jsx";
import { BrowserRouter } from "react-router-dom";
import About from "./sections/About.jsx";
import InvestmentPhilosophy from "./sections/InvestmentPhilosophy.jsx";
import Geographic from "./sections/GeograjpicOutlook.jsx";
import Contact from "@/sections/Contact.jsx";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
