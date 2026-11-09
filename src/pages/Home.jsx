import React, { useState } from 'react';
import { ArrowRight, Play, MoveRight, Users, Medal, Car, ClipboardCheck, X, Trophy } from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import navLogo from '../assets/navbar/navbarbenar.png';

const CountUpComponent = CountUp && typeof CountUp === 'object' && CountUp.default ? CountUp.default : CountUp;

// Championship & Team Glory Photo
import bgHome from '../assets/bgHome/LP4.jpeg';
import lingsarBg from '../assets/mobil/LingsarNews.png';
import arunaBg from '../assets/mobil/DesignBody.jpeg';
import khadTeamGroup from '../assets/divisions/Managers.jpg';

import lingsarImage from '../assets/mobil/LingsarEV2.png';
import arunaImage from '../assets/mobil/arunaHD.png';
import bimasenaImage from '../assets/mobil/bimasenaa.png';

import sponsor1 from '../assets/sponsor/sponsor1bnr.png';
import sponsor2 from '../assets/sponsor/sponsor2.png';
import sponsor3 from '../assets/sponsor/sponsor3.png';
import sponsor4 from '../assets/sponsor/sponsor4.png';
import sponsor5 from '../assets/sponsor/sponsor5.png';
import sponsor6 from '../assets/sponsor/sponsor6.png';
import sponsor7 from '../assets/sponsor/sponsor7.png';
import sponsor8 from '../assets/sponsor/sponsor8.png';

const sponsorImages = [sponsor1, sponsor2, sponsor3, sponsor4, sponsor5, sponsor6, sponsor7, sponsor8];

const metrics = [
  { label: 'Competitions', number: 10, suffix: '+', icon: ClipboardCheck },
  { label: 'Prototypes', number: 3, icon: Car },
  { label: 'Active Crew', number: 35, suffix: '+', icon: Users },
  { label: 'Top Record', number: 3, unit: 'rd SEM', icon: Medal },
];

const divisions = [
  {
    name: 'Management',
    tagline: 'Strategic Leadership & Operations',
    desc: 'Directing competition roadmaps, capital allocation, sponsor relationships, and project workflow.',
    roles: 'Team Lead • Operations • Finance'
  },
  {
    name: 'Technical',
    tagline: 'Engineering & Fabrication',
    desc: 'Developing powertrain systems, carbon composite chassis, aerodynamic CFD, and telemetry hardware.',
    roles: 'Engine • Electrical • Chassis • CFD'
  },
  {
    name: 'Non-Technical',
    tagline: 'Brand, Media & Partnerships',
    desc: 'Producing media content, securing sponsors, and managing public relations and event logistics.',
    roles: 'Media • Sponsorship • Public Relations'
  }
];

const newsList = [
  {
    title: 'Aruna Diesel Completes Track Validation',
    date: 'AUG 12, 2026',
    category: 'Engineering',
    desc: 'Circuit telemetry confirmed a 15% efficiency boost following new ECU timing calibration.',
    image: arunaBg
  },
  {
    title: 'Carbon-Fiber Monocoque Unveiled for Lingsar EV',
    date: 'AUG 05, 2026',
    category: 'Aero',
    desc: 'Wind-tunnel tested canopy design significantly reduced aerodynamic drag coefficient.',
    image: lingsarBg
  },
  {
    title: 'New Strategic Telemetry Sponsor Onboarded',
    date: 'JUL 28, 2026',
    category: 'Partnership',
    desc: 'Live telemetry systems integrated into our garage for real-time race data analytics.',
    image: khadTeamGroup
  }
];

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { ref: metricsRef, inView: metricsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 selection:bg-emerald-500 selection:text-white">
      
      {/* ── 1. HERO SECTION: FOTO TIM MERAIH JUARA (LP4.jpeg) DITONJOLKAN (CENTER ALIGNED) ── */}
      <section className="relative w-full h-[100vh] min-h-[650px] flex flex-col justify-end overflow-hidden">
        
        {/* Foto Tim Meraih Juara - Sangat Jelas & Dominan */}
        <div className="absolute inset-0 z-0">
          <img
            src={bgHome}
            alt="KHAD Team Championship Celebration"
            className="w-full h-full object-cover object-center"
          />

          {/* Minimal overlay: hanya dark vignette atas untuk navbar & transisi sangat tipis di bawah */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/40 pointer-events-none"></div>
          <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#F8FAFC] to-transparent pointer-events-none"></div>
        </div>

        {/* Content di bagian bawah hero (Center Aligned) */}
        <div className="relative z-10 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-12 flex flex-col items-center text-center">
          
          {/* Slogan Heading */}
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight uppercase leading-[1.05] mb-4 drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            LESS ENERGY <br className="hidden sm:block" />
            <span className="text-emerald-400 drop-shadow-[0_0_25px_rgba(16,185,129,0.5)]">
              MORE JOURNEY
            </span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="max-w-2xl text-base sm:text-lg text-slate-100 font-medium leading-relaxed mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          >
            K.H Ahmad Dahlan (KHAD) Team UMY — Terus berinovasi merancang kendaraan hemat energi kelas dunia untuk menginspirasi masa depan mobilitas berkelanjutan.
          </p>

          {/* Action Buttons (Center) */}
          <div data-aos="fade-up" data-aos-delay="200" className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/vehicles"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-khad-dark font-extrabold text-sm transition-all shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>Explore Fleet</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-black/50 hover:bg-black/70 text-white font-semibold text-sm border border-white/30 backdrop-blur-md transition-all shadow-md hover:-translate-y-0.5 hover:border-emerald-400"
            >
              <Play className="w-3.5 h-3.5 fill-current text-emerald-400" />
              <span>Watch Video</span>
            </button>
          </div>
        </div>
      </section>

      {/* ── 2. METRICS (BARIS BERSIH AERO STUDIO) ── */}
      <section className="border-y border-slate-200 py-12 bg-white" ref={metricsRef}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {metrics.map((item, idx) => (
              <div key={idx} className={`flex flex-col items-center ${idx > 0 ? 'pt-6 md:pt-0' : ''}`}>
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono tracking-tight mb-1">
                  {metricsInView ? (
                    <CountUpComponent end={item.number} duration={2} />
                  ) : (
                    <span>0</span>
                  )}
                  {item.suffix && <span className="text-emerald-600">{item.suffix}</span>}
                  {item.unit && <span className="text-sm text-slate-500 font-normal ml-1">{item.unit}</span>}
                </div>
                <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. ABOUT US (MINIMALIS & LAPANG) ── */}
      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          {/* <span className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-700 font-semibold mb-2 block">
            About Us
          </span> */}
          <h2 className="text-2xl font-mono uppercase tracking-[0.2em] text-emerald-700 font-semibold mb-2 block">
            What is KHAD Team?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          <div className="border-l-2 border-emerald-500 pl-6">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Student Research Hub</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              We serve as a multidisciplinary platform at Universitas Muhammadiyah Yogyakarta, bringing together engineering, design, and management students to transform theoretical science into tangible race prototypes.
            </p>
          </div>

          <div className="border-l-2 border-emerald-500 pl-6">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Sustainable Technology</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Our prototypes compete on international circuits like Shell Eco-marathon and KMHE, addressing global energy challenges through clean powertrains, lightweight composites, and aerodynamic chassis.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-sm text-emerald-700 hover:text-emerald-800 font-semibold transition-colors"
          >
            <span>Learn our full story and milestones</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ── 4. VEHICLES SHOWCASE (VERTICAL SCROLL ALTERNATING LAYOUT - BLEED EDGE HALF VISUAL) ── */}
      <section className="py-28 border-t border-slate-200 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-emerald-700 font-semibold mb-2 block">
              Innovation Garage
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight" style={{ fontFamily: "'Oswald', sans-serif" }}>
              Our Prototypes
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              Explore our fleet of energy-efficient competition vehicles engineered for extreme endurance and aerodynamic superiority.
            </p>
          </div>

          <div className="space-y-28 md:space-y-36">

            {/* 1. LINGSAR EV (Description Kiri, Gambar Kanan Pojok Terpotong Sebagian) */}
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-12 group">
              <div className="w-full md:w-1/2 flex flex-col items-start z-10 text-left">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-mono font-semibold uppercase tracking-wider mb-4 border border-emerald-200">
                  Electric Prototype
                </span>
                <h3 className="text-3xl sm:text-5xl font-black text-slate-900 mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  Lingsar EV 3.0
                </h3>
                <p className="text-slate-600 text-base leading-relaxed mb-6 max-w-lg">
                  Flagship electric vehicle designed with aerospace-grade aerodynamics and an ultra-efficient BLDC motor drivetrain. Built to break efficiency records in global energy competitions.
                </p>
                <div className="py-3.5 border-y border-slate-200 w-full max-w-md mb-8">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-1">Architecture</span>
                  <span className="text-sm font-semibold text-slate-800">Aerodynamic Carbon Monocoque • Custom BLDC Motor</span>
                </div>
                <Link
                  to="/vehicles"
                  state={{ activeTab: 'lingsar' }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-emerald-600 text-white font-bold text-sm transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <span>View Full Specifications</span>
                  <MoveRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="w-full md:w-1/2 relative flex items-center justify-end h-[360px] sm:h-[420px] md:h-[460px]">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>
                <img
                  src={lingsarImage}
                  alt="Lingsar EV 3.0"
                  className="w-[125%] sm:w-[130%] md:w-[145%] max-w-none h-auto object-contain translate-x-12 sm:translate-x-20 md:translate-x-28 group-hover:translate-x-8 transition-transform duration-700 drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] pointer-events-none select-none"
                />
              </div>
            </div>

            {/* 2. ARUNA DIESEL (Gambar Kiri Pojok Terpotong Sebagian, Description Kanan) */}
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-12 group">
              <div className="w-full md:w-1/2 relative flex items-center justify-start h-[360px] sm:h-[420px] md:h-[460px] order-2 md:order-1">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none"></div>
                <img
                  src={arunaImage}
                  alt="Aruna Diesel"
                  className="w-[125%] sm:w-[130%] md:w-[145%] max-w-none h-auto object-contain -translate-x-12 sm:-translate-x-20 md:-translate-x-28 group-hover:-translate-x-8 transition-transform duration-700 drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] pointer-events-none select-none"
                />
              </div>

              <div className="w-full md:w-1/2 flex flex-col items-start z-10 text-left order-1 md:order-2 md:pl-8">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-mono font-semibold uppercase tracking-wider mb-4 border border-amber-200">
                  Internal Combustion Engine
                </span>
                <h3 className="text-3xl sm:text-5xl font-black text-slate-900 mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  Aruna Diesel
                </h3>
                <p className="text-slate-600 text-base leading-relaxed mb-6 max-w-lg">
                  Thermal-optimized diesel vehicle tuned for maximum distance per drop of energy. Engineered with custom ECU mapping, lean thermal insulation, and minimal rolling resistance.
                </p>
                <div className="py-3.5 border-y border-slate-200 w-full max-w-md mb-8">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-1">Architecture</span>
                  <span className="text-sm font-semibold text-slate-800">Clean Direct Injection • Tubular Aluminum Chassis</span>
                </div>
                <Link
                  to="/vehicles"
                  state={{ activeTab: 'aruna' }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-amber-600 text-white font-bold text-sm transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <span>View Full Specifications</span>
                  <MoveRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* 3. BIMASENA EV (Description Kiri, Gambar Kanan Pojok Terpotong Sebagian) */}
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-12 group">
              <div className="w-full md:w-1/2 flex flex-col items-start z-10 text-left">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 text-cyan-800 text-xs font-mono font-semibold uppercase tracking-wider mb-4 border border-cyan-200">
                  Historic Legacy Prototype
                </span>
                <h3 className="text-3xl sm:text-5xl font-black text-slate-900 mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  Bimasena EV
                </h3>
                <p className="text-slate-600 text-base leading-relaxed mb-6 max-w-lg">
                  The foundational electric vehicle that established KHAD Team on the national stage. Built with pioneering chassis dynamics and solid structural safety, setting the legacy for subsequent models.
                </p>
                <div className="py-3.5 border-y border-slate-200 w-full max-w-md mb-8">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-1">Architecture</span>
                  <span className="text-sm font-semibold text-slate-800">Synchronous Drive • Rigid Aerodynamic Frame</span>
                </div>
                <Link
                  to="/vehicles"
                  state={{ activeTab: 'bimasena' }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-cyan-600 text-white font-bold text-sm transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <span>Learn Our History</span>
                  <MoveRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="w-full md:w-1/2 relative flex items-center justify-end h-[360px] sm:h-[420px] md:h-[460px]">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>
                <img
                  src={bimasenaImage}
                  alt="Bimasena EV"
                  className="w-[125%] sm:w-[130%] md:w-[145%] max-w-none h-auto object-contain translate-x-12 sm:translate-x-20 md:translate-x-28 group-hover:translate-x-8 transition-transform duration-700 drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] pointer-events-none select-none"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 5. DIVISIONS (MINIMALIST COLUMNS) ── */}
      <section className="py-24 border-t border-slate-200 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-14 text-center sm:text-left">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-700 font-semibold mb-2 block">
              Team Structure
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight" style={{ fontFamily: "'Oswald', sans-serif" }}>
              Core Divisions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {divisions.map((div, i) => (
              <div key={i} className="border-t-2 border-slate-300 pt-6 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-slate-400 font-bold block mb-1">0{i + 1}</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{div.name}</h3>
                  <p className="text-xs text-emerald-700 font-mono font-medium mb-3">{div.tagline}</p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{div.desc}</p>
                </div>
                <div className="pt-4 border-t border-slate-200 flex justify-between items-center text-xs text-slate-500 font-medium">
                  <span>{div.roles}</span>
                  <Link to="/team" className="text-slate-600 hover:text-emerald-700 transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. NEWS (CLEAN EDITORIAL CARDS) ── */}
      <section className="py-20 border-t border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-700 font-semibold mb-2 block">
                Dispatches
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight" style={{ fontFamily: "'Oswald', sans-serif" }}>
                Latest Updates
              </h2>
            </div>
            <Link to="/news" className="text-xs font-mono uppercase text-emerald-700 hover:text-emerald-800 font-bold transition-colors">
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsList.map((item, idx) => (
              <div key={idx} className="group flex flex-col">
                <div className="h-44 w-full overflow-hidden rounded-xl bg-slate-100 mb-4 border border-slate-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="text-xs font-mono text-emerald-700 font-semibold mb-1">{item.date} • {item.category}</div>
                <h3 className="text-base font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-emerald-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed line-clamp-2 mb-4">
                  {item.desc}
                </p>
                <Link to="/news" className="text-xs font-bold text-slate-700 group-hover:text-emerald-700 transition-colors inline-flex items-center gap-1 mt-auto">
                  <span>Read update</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. SPONSORS ── */}
      <section className="py-16 border-t border-slate-200 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-8 text-center">
          <span className="text-xs uppercase font-mono tracking-widest text-slate-400 font-semibold">
            Supported by Industry Partners
          </span>
        </div>

        <div className="relative w-full overflow-hidden flex py-2">
          <div className="flex animate-[marquee_30s_linear_infinite] items-center gap-16 pr-16 flex-shrink-0">
            {sponsorImages.map((src, idx) => (
              <div key={`s1-${idx}`} className="flex-shrink-0 h-14 w-32 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                <img src={src} alt="Sponsor" className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all" />
              </div>
            ))}
          </div>
          <div className="flex animate-[marquee_30s_linear_infinite] items-center gap-16 pr-16 flex-shrink-0" aria-hidden="true">
            {sponsorImages.map((src, idx) => (
              <div key={`s2-${idx}`} className="flex-shrink-0 h-14 w-32 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                <img src={src} alt="Sponsor" className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. CALL TO ACTION ── */}
      <section className="py-20 border-t border-slate-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-700 font-semibold mb-3 block">
            Partnership
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>
            Ready to Accelerate with KHAD Team?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Support sustainable mobility research and student automotive innovation. Explore our sponsorship packages.
          </p>
          <Link
            to="/sponsors"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-all shadow-md hover:shadow-lg"
          >
            <span>Become a Partner</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ── 9. FOOTER ── */}
      <footer className="border-t border-slate-200 py-12 text-xs text-slate-500 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img src={navLogo} alt="KHAD TEAM" className="h-8 object-contain" />
            <span className="font-medium text-slate-700">K.H Ahmad Dahlan Team UMY</span>
          </div>
          <p>© {new Date().getFullYear()} KHAD TEAM UMY. All rights reserved.</p>
        </div>
      </footer>

      {/* VIDEO MODAL */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden aspect-video shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/70 hover:bg-black text-white transition-colors"
              onClick={() => setIsModalOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>
            <iframe
              className="w-full h-full border-0"
              src="https://www.youtube.com/embed/G2GuIfViaCE?autoplay=1"
              title="KHAD TEAM Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

    </div>
  );
};

export default Home;
