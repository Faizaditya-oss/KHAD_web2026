import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import navLogo from '../assets/navbar/navbarbenar.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Vehicles', href: '/vehicles' },
    { name: 'Team', href: '/team' },
    { name: 'Sponsors', href: '/sponsors' },
    { name: 'News', href: '/news' },
  ];

  return (
    <nav className="absolute w-full z-50 top-0 left-0 bg-khad-dark/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <img src={navLogo} alt="KHAD TEAM UMY Logo" className="h-14 md:h-12 w-auto object-contain" />
          </div>

          {/* Desktop Navigation (Aligned to the Far Right) */}
          <div className="hidden md:flex items-center space-x-8 ml-auto">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-emerald-500 hover:text-white transition-colors text-md font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

         

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2 rounded-md focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-khad-dark border-b border-khad-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-emerald-400 hover:bg-khad-card transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="px-3 py-4">
              <button className="w-full px-6 py-3 rounded-full border border-emerald-500/50 hover:bg-emerald-500/10 text-emerald-400 font-medium transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                Sponsor Us
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
