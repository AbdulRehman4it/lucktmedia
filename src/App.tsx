// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// import React from "react";
// import Navbar from "./components/Navbar";
// import HeroSection from "./components/HeroSection";
// import LuckyMediaSection from "./components/LuckyMediaSection";
// import ServicesSection from "./components/ServicesSection";
// import PortfolioSection from "./components/PortfolioSection";
// import StepsSection from "./components/StepsSection";
// import ContactSection from "./components/ContactSection";
// import Footer from "./components/Footer";
// import ScrollToTopButton from "./components/ScrollToTopButton";



// export default function App() {
//   return (
//     <div>
//       <Navbar />
//        <HeroSection />
//        <LuckyMediaSection />
//          <ServicesSection />
//            <PortfolioSection />
//             <StepsSection />
//             <ContactSection />
//              <Footer />
//              <ScrollToTopButton />
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Privacy from "./pages/Privacy";
import Cookies from "./pages/Cookies";
import Booking from "./pages/Booking";
import Preloader from "./components/Preloader";
import "./App.css";

const PageWrapper: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 4000); // 2 sec delay
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <Preloader show={loading} />
      <div style={{ display: loading ? "none" : "block" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/Cookies" element={<Cookies />} />
          <Route path="/Booking" element={<Booking />} />
        </Routes>
      </div>
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <PageWrapper />
    </Router>
  );
};

export default App;




