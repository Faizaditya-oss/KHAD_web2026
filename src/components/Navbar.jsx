import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import navLogo from '../assets/navbar/navbarbenar.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Vehicles', href: '/vehicles' },
    { name: 'Team', href: '/team' },
    { name: 'Sponsors', href: '/sponsors' },
    { name: 'News', href: '/news' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm py-3.5'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
            <img
              src={navLogo}
              alt="KHAD TEAM UMY Logo"
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2 ml-auto">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-200 ${
                    isScrolled
                      ? isActive
                        ? 'text-emerald-700 font-bold bg-emerald-50 border border-emerald-200'
                        : 'text-slate-700 hover:text-emerald-700 hover:bg-slate-100'
                      : isActive
                      ? 'text-emerald-400 font-bold bg-emerald-500/15 border border-emerald-500/30'
                      : 'text-white/90 hover:text-emerald-400 hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Sponsor Us CTA */}
            <Link
              to="/sponsors"
              className={`ml-4 px-5 py-2 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-sm hover:scale-105 ${
                isScrolled
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                  : 'bg-emerald-500 hover:bg-emerald-400 text-black shadow-[0_0_15px_rgba(16,185,129,0.3)]'
              }`}
            >
              Sponsor Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg border focus:outline-none transition-colors ${
                isScrolled
                  ? 'text-slate-700 border-slate-200 bg-slate-50'
                  : 'text-white border-white/20 bg-black/40'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 shadow-xl animate-[fadeIn_0.2s_ease-out]">
          <div className="px-4 pt-3 pb-5 space-y-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'text-emerald-700 bg-emerald-50 font-bold border border-emerald-200'
                      : 'text-slate-700 hover:text-emerald-700 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-2">
              <Link
                to="/sponsors"
                onClick={() => setIsOpen(false)}
                className="w-full inline-flex justify-center items-center px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm uppercase tracking-wider transition-all"
              >
                Sponsor Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
