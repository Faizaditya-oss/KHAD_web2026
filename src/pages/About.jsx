import React, { useState, useRef } from 'react';
import { Target, Zap, Trophy, Medal, MoveRight, ArrowRight, ShieldCheck, Flame, Droplets, Activity, Sparkles, CheckCircle2, ChevronLeft, ChevronRight, Compass, Cpu, Radio, Gauge } from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const CountUpComponent = CountUp && typeof CountUp === 'object' && CountUp.default ? CountUp.default : CountUp;

import bgHome from '../assets/mobil/LingsarNews.png';
import bgCard from '../assets/SEM24/sem23.JPG';
import lingsarBg from '../assets/mobil/vision.JPG';
import arunaBg from '../assets/mobil/telemetry.png';
import bgHero from '../assets/bgHome/LandPage.jpg';
import kmhe2025 from '../assets/SEM24/kmhe25.JPG';
import kmhe2026 from '../assets/SEM24/kmhe26.JPG';
import kmli2019 from '../assets/SEM24/kmli19.jpg';
import kmhe2019 from '../assets/SEM24/kmhe19.jpg';
import kmhe2021 from '../assets/SEM24/kmhe21.jpg';
import kmhe2024 from '../assets/SEM24/kmhe24.jpg';
import controller from '../assets/mobil/controller.jpg';
import kmhe24 from '../assets/SEM24/lingsarsem.JPG';

const timelineEvents = [
  {
    year: '2019',
    title: 'Kontes Mobil Listrik Indonesia (KMLI)',
    subtitle: '3rd Place Gradeability Category',
    desc: 'National podium debut establishing KHAD Team electric powertrain reliability.',
    image: kmli2019,
    tag: 'National Podium'
  },
  {
    year: '2019',
    title: 'Kontes Mobil Hemat Energi (KMHE)',
    subtitle: 'Debut EV Prototype Category in KMHE',
    desc: 'First successful entry into national energy-efficient vehicle benchmarking.',
    image: kmhe2019,
    tag: 'Debut'
  },
  {
    year: '2021',
    title: 'Kontes Mobil Hemat Energi (KMHE)',
    subtitle: '4th National Place EV Prototype Category',
    desc: 'Continuous aerodynamic improvements yielding Top-4 national efficiency.',
    image: kmhe2021,
    tag: 'Finalist'
  },
  {
    year: '2023',
    title: 'Shell Eco-marathon Asia-Pacific & Middle East',
    subtitle: '3rd Place Asia-Pacific EV Prototype Category',
    desc: 'Historic international podium triumph bringing national honor at Mandalika Circuit.',
    image: bgCard,
    highlight: 'gold',
    tag: 'International Podium'
  },
  {
    year: '2024',
    title: 'Kontes Mobil Hemat Energi (KMHE)',
    subtitle: '5th National Place EV Prototype Category',
    desc: 'Deployment of high-precision telemetry and next-gen monocoque chassis.',
    image: kmhe24,
    tag: 'Top 5'
  },
  {
    year: '2024',
    title: 'Shell Eco-marathon Asia-Pacific & Middle East',
    subtitle: '5th Place Asia-Pacific EV Prototype Category',
    desc: 'Sustained top-tier international performance across extreme circuit temperatures.',
    image: kmhe2024,
    tag: 'International Top 5'
  },
  {
    year: '2025',
    title: 'Kontes Mobil Hemat Energi (KMHE)',
    subtitle: '4th National Place Diesel Prototype Category',
    desc: 'Successful expansion into internal combustion efficiency with Aruna Diesel.',
    image: kmhe2025,
    tag: 'Diesel Debut'
  },
  {
    year: '2026',
    title: 'Kontes Mobil Hemat Energi (KMHE)',
    subtitle: '3rd National Place Prototype Category',
    desc: 'Return to the national podium with optimized lean-burn thermal dynamics.',
    image: kmhe2026,
    tag: 'National Podium'
  }
];

const phases = [
  {
    id: 'phase-01',
    step: 'CAD',
    icon: Compass,
    title: 'Software & Aerodynamics',
    subtitle: 'CAD & Computational Fluid Dynamics',
    badge: 'Design & Simulation',
    description: 'Transforming theoretical designs into high-precision 3D digital twins. Utilizing SolidWorks and ANSYS CFD simulations to minimize aerodynamic drag coefficients while maintaining high-speed vehicular stability.',
    image: bgHome,
    metrics: [
      { label: 'Target Cd', val: '0.12' },
      { label: 'Software', val: 'ANSYS Fluent' },
      { label: 'Material', val: 'Carbon Prepreg' }
    ]
  },
  {
    id: 'phase-02',
    step: 'Developement',
    icon: Cpu,
    title: 'Powertrain & Hardware',
    subtitle: 'Custom BLDC Motor Controller Development',
    badge: 'Electronics Engineering',
    description: 'Engineering power electronics and microcontrollers in-house. Implementing intelligent field-oriented control algorithms to extract maximum torque at low RPMs while sustaining thermal stability during track acceleration.',
    image: controller,
    metrics: [
      { label: 'Topology', val: 'Custom MOSFET' },
      { label: 'Control', val: 'FOC Vector' },
      { label: 'Efficiency', val: '97.4%' }
    ]
  },
  {
    id: 'phase-03',
    step: 'IoT',
    icon: Radio,
    title: 'Electrical & Telemetry',
    subtitle: 'IoT Sensor Grid & ECU Wiring Architecture',
    badge: 'Real-Time Telemetry',
    description: 'Assembling custom Battery Management Systems (BMS) and CAN-bus telemetry grids. Shielding low-voltage microcontrollers against electromagnetic noise in ultra-compact composite cockpits.',
    image: arunaBg,
    metrics: [
      { label: 'Data Bus', val: 'CAN-Bus 2.0' },
      { label: 'Telemetry', val: 'Cloud 4G IoT' },
      { label: 'Sampling', val: '100 Hz' }
    ]
  },
  {
    id: 'phase-04',
    step: 'Testing',
    icon: Gauge,
    title: 'Circuit Validation',
    subtitle: 'Track Testing & Real-World Calibration',
    badge: 'Asphalt Benchmarking',
    description: 'Extreme benchmark validation under competitive asphalt conditions. Squeezing every joule of energy into distance and fine-tuning driver telemetry for race day execution.',
    image: lingsarBg,
    metrics: [
      { label: 'Track Test', val: 'Sirkuit Mandalika' },
      { label: 'Telemetry', val: 'Real-time GPS' },
      { label: 'Driver Aero', val: 'Calibrated' }
    ]
  }
];

const About = () => {
  const [activePhase, setActivePhase] = useState(0);
  const timelineScrollRef = useRef(null);
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollTimeline = (direction) => {
    if (timelineScrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      timelineScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 selection:bg-emerald-500 selection:text-white">

      {/* ── 1. HERO SECTION: HERO IMAGE DITONJOLKAN BERSIH & CENTER ALIGNED ── */}
      <section className="relative w-full h-[85vh] min-h-[580px] flex flex-col justify-end overflow-hidden">
        
        {/* Foto Tim / Workshop / Circuit - Menonjol Jelas */}
        <div className="absolute inset-0 z-0">
          <img
            src={bgHero}
            alt="KHAD Team Research Lab"
            className="w-full h-full object-cover object-center"
          />
          {/* Minimal overlay: hanya dark vignette atas untuk navbar & transisi sangat tipis di bawah */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/40 pointer-events-none"></div>
          <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#F8FAFC] to-transparent pointer-events-none"></div>
        </div>

        {/* Content Hero Center Aligned */}
        {/* <div className="relative z-10 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-12 flex flex-col items-center text-center">
          
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight uppercase leading-[1.05] mb-4 drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            INNOVATION IN <br className="hidden sm:block" />
            <span className="text-emerald-400 drop-shadow-[0_0_25px_rgba(16,185,129,0.5)]">
              EVERY DETAIL
            </span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="max-w-2xl text-base sm:text-lg text-slate-100 font-medium leading-relaxed mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          >
            K.H Ahmad Dahlan (KHAD) Team UMY adalah laboratorium riset mahasiswa lintas disiplin yang mendedikasikan inovasi untuk merancang kendaraan hemat energi masa depan.
          </p>
        </div> */}
      </section>

      {/* ── 2. METRICS ROW: AERO CLEAN STUDIO (SELARAS DENGAN HOME) ── */}
      <section className="border-y border-slate-200 py-12 bg-white" ref={statsRef}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {[
              { icon: Zap, label: "Lingsar EV Efficiency", number: 600, unit: "km/kWh", suffix: "" },
              { icon: Flame, label: "Aruna Diesel Efficiency", number: 400, unit: "km/L", suffix: "" },
              { icon: Activity, label: "Telemetry Architecture", textValue: "Custom", unit: "", suffix: " IoT" },
              { icon: Droplets, label: "Carbon Target", number: 0, unit: "", suffix: " % Emission" },
            ].map((stat, idx) => (
              <div key={idx} className={`flex flex-col items-center ${idx > 0 ? 'pt-6 md:pt-0' : ''}`}>
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono tracking-tight mb-1 flex items-baseline justify-center">
                  {stat.number !== undefined ? (
                    statsInView ? <CountUpComponent end={stat.number} duration={2} /> : "0"
                  ) : (
                    stat.textValue
                  )}
                  {stat.unit && <span className="text-base sm:text-lg text-slate-500 font-medium ml-1.5">{stat.unit}</span>}
                  {stat.suffix && <span className="text-emerald-600 font-semibold text-lg sm:text-2xl ml-1">{stat.suffix}</span>}
                </div>
                <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold flex items-center gap-1.5 mt-1">
                  <stat.icon className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. ABOUT STORY & CORE PHILOSOPHY (MINIMALIST TYPOGRAPHY) ── */}
      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-700 font-semibold mb-2 block">
            Our Purpose
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight" style={{ fontFamily: "'Oswald', sans-serif" }}>
            The Driving Force Behind KHAD Team
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mb-16">
          <div className="border-l-2 border-emerald-500 pl-6">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Multidisciplinary Collaboration</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Didirikan di Universitas Muhammadiyah Yogyakarta, KHAD Team menjadi wadah sinergi mahasiswa Teknik Mesin, Teknik Elektro, Teknologi Informasi, dan Manajemen untuk memecahkan tantangan krisis energi global melalui riset otomotif terapan.
            </p>
          </div>

          <div className="border-l-2 border-emerald-500 pl-6">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Zero-Compromise Engineering</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Mulai dari simulasi dinamika fluida komputasi (CFD), fabrikasi bodi serat karbon monocoque, hingga perakitan sistem kendali motor BLDC secara mandiri, kami menjunjung tinggi presisi rekayasa dan integritas data telemetri.
            </p>
          </div>
        </div>

        {/* Highlights Banner */}
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">Safety & Technical Scrutineering Compliance</h4>
              <p className="text-xs sm:text-sm text-slate-500">Passed strict Shell Eco-marathon technical & safety inspections with flying colors.</p>
            </div>
          </div>
          <Link
            to="/vehicles"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-900 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider transition-all shrink-0"
          >
            <span>Explore Prototypes</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* ── 4. R&D ENGINEERING PHASES (INTERACTIVE COCKPIT TELEMETRY WORKBENCH) ── */}
      <section className="py-24 border-t border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-emerald-700 font-semibold mb-2 block">
              Methodology & R&D Process
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight" style={{ fontFamily: "'Oswald', sans-serif" }}>
              How We Build The Future
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              Jelajahi alur riset interaktif dari pemodelan aerodinamika digital hingga pembuktian aspal sirkuit.
            </p>

            {/* Interactive Phase Navigation Pills */}
            <div className="flex flex-wrap justify-center gap-2 mt-8 p-1.5 bg-slate-100 rounded-full border border-slate-200 w-max mx-auto">
              {phases.map((p, idx) => {
                const IconComponent = p.icon;
                return (
                  <button
                    key={p.id}
                    onClick={() => setActivePhase(idx)}
                    className={`flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                      activePhase === idx
                        ? 'bg-emerald-600 text-white shadow-md'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
                    }`}
                  >
                    <IconComponent className="w-3.5 h-3.5" />
                    <span>PHASE {p.step}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive R&D Showcase Stage */}
          <div className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-6 sm:p-10 shadow-sm transition-all">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Visual Media with HUD Telemetry Overlays */}
              <div className="lg:col-span-7 relative">
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-900 shadow-md border border-slate-200 group">
                  <img
                    src={phases[activePhase].image}
                    alt={phases[activePhase].subtitle}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none"></div>

                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>{phases[activePhase].badge}</span>
                  </div>

                  

                  <div className="absolute bottom-4 inset-x-4 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between text-white text-xs font-mono">
                    <span className="text-emerald-400 uppercase tracking-wider">{phases[activePhase].title}</span>
                    <span className="text-slate-400">KHAD Research Lab</span>
                  </div>
                </div>

                {/* Micro Metric Telemetry Pills */}
                <div className="grid grid-cols-3 gap-3 mt-4">
                  {phases[activePhase].metrics.map((m, mIdx) => (
                    <div key={mIdx} className="bg-white rounded-xl border border-slate-200 p-3 text-center shadow-2sm">
                      <span className="text-[10px] font-mono uppercase text-slate-400 block mb-0.5">{m.label}</span>
                      <span className="text-xs sm:text-sm font-bold text-slate-800 font-mono">{m.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Deep Engineering Story */}
              <div className="lg:col-span-5 text-left flex flex-col justify-between">
                <div>
                  

                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>
                    {phases[activePhase].subtitle}
                  </h3>

                  <div className="h-0.5 w-16 bg-emerald-500 rounded-full mb-4"></div>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                    {phases[activePhase].description}
                  </p>

                  <div className="space-y-2.5 py-4 border-t border-slate-200">
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Optimasi berulang berbasis data telemetri digital presisi.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Sesuai standar regulasi keselamatan internasional Shell Eco-marathon.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Kolaborasi multidisiplin antara riset material dan software.</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-slate-200 mt-4">
                  <button
                    onClick={() => setActivePhase((prev) => (prev > 0 ? prev - 1 : phases.length - 1))}
                    className="text-xs font-bold text-slate-500 hover:text-emerald-700 transition-colors inline-flex items-center gap-1"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Previous Phase</span>
                  </button>

                  <button
                    onClick={() => setActivePhase((prev) => (prev < phases.length - 1 ? prev + 1 : 0))}
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors inline-flex items-center gap-1"
                  >
                    <span>Next Phase</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ── 5. COMPETITION JOURNEY TIMELINE (HORIZONTAL HORIZONTAL CAROUSEL / SCROLL WITH CHECKPOINTS) ── */}
      <section className="py-24 border-t border-slate-200 bg-[#F8FAFC] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header & Horizontal Navigation Controls */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-emerald-700 font-semibold mb-2 block">
                Track Record
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight" style={{ fontFamily: "'Oswald', sans-serif" }}>
                Our Competitive Journey
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
                Geser ke kanan untuk melihat linimasa pencapaian dan trofi KHAD Team dari tahun 2019 hingga saat ini.
              </p>
            </div>

            {/* Left / Right Scroll Buttons */}
            <div className="flex items-center gap-3 self-end md:self-auto">
              <button
                onClick={() => scrollTimeline('left')}
                className="w-11 h-11 rounded-full bg-white border border-slate-300 hover:border-emerald-500 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 flex items-center justify-center transition-all shadow-sm active:scale-95"
                title="Scroll Previous"
                aria-label="Scroll Left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollTimeline('right')}
                className="w-11 h-11 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center transition-all shadow-md active:scale-95"
                title="Scroll Next"
                aria-label="Scroll Right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Continuous Timeline Track Line with Checkpoint Nodes */}
          <div className="relative mb-6 hidden sm:block">
            <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-0.5 bg-slate-200 z-0"></div>

            <div className="relative z-10 flex justify-between items-center px-4">
              {timelineEvents.map((event, idx) => (
                <div key={`checkpoint-${idx}`} className="flex flex-col items-center group cursor-pointer" onClick={() => {
                  if (timelineScrollRef.current) {
                    const cardWidth = 380;
                    timelineScrollRef.current.scrollTo({ left: idx * cardWidth, behavior: 'smooth' });
                  }
                }}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center border-2 bg-white transition-all duration-300 group-hover:scale-125 ${
                    event.highlight === 'gold'
                      ? 'border-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]'
                      : 'border-emerald-600 shadow-[0_0_10px_rgba(5,150,105,0.4)]'
                  }`}>
                    <span className={`w-2 h-2 rounded-full ${
                      event.highlight === 'gold' ? 'bg-amber-500' : 'bg-emerald-600'
                    }`}></span>
                  </div>
                  <span className="text-[11px] font-mono font-bold text-slate-500 mt-2 group-hover:text-emerald-700 transition-colors">
                    {event.year}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Horizontal Scroll Track Container */}
          <div
            ref={timelineScrollRef}
            className="flex gap-6 overflow-x-auto pb-8 pt-2 scrollbar-none scroll-smooth snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {timelineEvents.map((event, idx) => (
              <div
                key={idx}
                className="snap-start flex-shrink-0 w-[300px] sm:w-[350px] md:w-[380px] flex flex-col justify-between bg-white rounded-2xl border border-slate-200 hover:border-emerald-300 p-5 shadow-sm hover:shadow-md transition-all duration-300 group relative"
              >
                {/* Image Top with Checkpoint Badge */}
                <div className="relative w-full h-48 sm:h-52 rounded-xl overflow-hidden bg-slate-100 mb-5 border border-slate-100">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Visual Checkpoint Pin on the Card */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-slate-800 text-[10px] font-mono font-bold shadow-sm">
                    <span className={`w-2 h-2 rounded-full animate-pulse ${
                      event.highlight === 'gold' ? 'bg-amber-500' : 'bg-emerald-500'
                    }`}></span>
                    <span>CP #{idx + 1}</span>
                  </div>

                  {/* Year Tag Floating on Image */}
                  <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-mono font-bold shadow-sm backdrop-blur-md ${
                    event.highlight === 'gold'
                      ? 'bg-amber-400 text-slate-900'
                      : 'bg-emerald-600 text-white'
                  }`}>
                    {event.year}
                  </span>
                </div>

                {/* Content Info */}
                <div className="flex-1 flex flex-col justify-between text-left">
                  <div>
                    <span className={`text-[11px] font-mono font-bold uppercase tracking-wider block mb-1.5 ${
                      event.highlight === 'gold' ? 'text-amber-600' : 'text-emerald-700'
                    }`}>
                      {event.tag}
                    </span>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 line-clamp-2 leading-tight" style={{ fontFamily: "'Oswald', sans-serif" }}>
                      {event.title}
                    </h3>

                    <h4 className="text-xs sm:text-sm font-semibold text-emerald-800 mb-3 line-clamp-2">
                      {event.subtitle}
                    </h4>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {event.desc}
                    </p>
                  </div>

                  {/* Bottom Footprint Indicator */}
                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-slate-400 text-xs font-mono">
                    <span>MILESTONE 0{idx + 1}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-emerald-500 transition-colors"></span>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Bottom Hint */}
          <div className="text-center mt-4">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              ← Drag or use buttons to scroll timeline →
            </span>
          </div>

        </div>
      </section>

      {/* ── 6. CALL TO ACTION (SELARAS DENGAN HOME) ── */}
      <section className="py-24 border-t border-slate-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-700 font-semibold mb-3 block">
            Future Collaboration
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>
            Be Part of Our Journey
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Ingin mengetahui spesifikasi mendalam tiap prototipe atau tertarik bermitra sebagai sponsor tim riset kami?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/vehicles"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>Explore Fleet</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/sponsors"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm border border-slate-300 transition-all hover:-translate-y-0.5"
            >
              <span>Sponsorship Info</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 7. FOOTER ── */}
      <footer className="border-t border-slate-200 py-12 text-xs text-slate-500 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-slate-800">KHAD TEAM UMY</span>
            <span>•</span>
            <span>Universitas Muhammadiyah Yogyakarta</span>
          </div>
          <p>© {new Date().getFullYear()} KHAD TEAM UMY. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
};

export default About;
