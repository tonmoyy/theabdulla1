// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./sections/HomePage.jsx";
import Contact from "./sections/Contact";

const App = () => {
  return (
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/platform" element={<Homepage />} />
            <Route path="/investments" element={<Homepage />} />
            <Route path="/partnerships" element={<Homepage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
  );
};

export default App;