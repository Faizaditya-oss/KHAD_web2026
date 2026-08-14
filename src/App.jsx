import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Vehicles from './pages/Vehicles';
import Team from './pages/Team';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
      offset: 100,
    });
  }, []);

  return (
    <Router>
      <div className="font-sans min-h-screen bg-[#061E14] text-slate-50 overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
