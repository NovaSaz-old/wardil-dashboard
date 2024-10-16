import { Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import Home from "./pages/Home";
import Campaign from "./pages/Campaign";
import Accounts from "./pages/Accounts";
import Volunteers from "./pages/Volunteers";
import CreditCards from "./pages/CreditCards";
import Donations from "./pages/Donations";
import WhatWeDo from "./pages/WhatWeDo";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div className="flex bg-gray-50">
      <div className="z-50 min-h-screen shadow">
        <SideBar />
      </div>

      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/campaign" element={<Campaign />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/volunteers" element={<Volunteers />} />
          <Route path="/credit-cards" element={<CreditCards />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
