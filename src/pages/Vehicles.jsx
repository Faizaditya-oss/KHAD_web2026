import React, { useState, useRef, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  Trophy, ArrowRight, MoveRight, Activity,
  CheckCircle2, Sparkles, Medal, Flag, Award, ChevronLeft, ChevronRight,
  MapPin
} from 'lucide-react';

import { vehicleData } from '../data/vehicleData';

// Medal Badge Icon Component for legacy / participant / non-SVG cards
const MedalBadge = ({ type, positionText }) => {
  if (type === 'podium-bronze' || type === 'podium-gold') {
    return (
      <div className="relative flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center">
        {/* Decorative Medal Ribbon */}
        <div className="absolute -top-1 w-5 h-3 flex justify-between z-0">
          <div className="w-2 h-full bg-red-600 rounded-t-sm rotate-[-12deg]"></div>
          <div className="w-2 h-full bg-blue-600 rounded-t-sm rotate-[12deg]"></div>
        </div>

        {/* Medal Coin */}
        <div className="relative z-10 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600 p-[2px] shadow-[0_4px_12px_rgba(217,119,6,0.25)] flex items-center justify-center group-hover:scale-105 transition-transform">
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-amber-500 via-amber-300 to-amber-100 flex flex-col items-center justify-center text-amber-950 border border-amber-600/30">
            <Award className="w-4 h-4 stroke-[2.2] text-amber-900" />
            <span className="text-[9px] font-black font-mono leading-none tracking-tighter mt-0.5 text-amber-950">
              {positionText || '3rd'}
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'finalist') {
    return (
      <div className="relative flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400 p-[1.5px] shadow-sm flex items-center justify-center">
        <div className="w-full h-full rounded-full bg-slate-100 flex flex-col items-center justify-center text-slate-700 border border-slate-300">
          <Medal className="w-4 h-4 text-slate-600" />
          <span className="text-[8px] font-bold font-mono leading-none tracking-tighter mt-0.5 text-slate-600">
            {positionText || 'TOP 5'}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500">
      <Flag className="w-4 h-4" />
    </div>
  );
};

const Vehicles = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('lingsar');
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (location.state?.activeTab && vehicleData[location.state.activeTab]) {
      setActiveTab(location.state.activeTab);
    }
  }, [location.state]);

  const activeData = vehicleData[activeTab] || vehicleData.lingsar;

  const scrollHorizontally = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      scrollHorizontally('left');
    } else if (e.key === 'ArrowRight') {
      scrollHorizontally('right');
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 selection:bg-emerald-500 selection:text-white">

      {/* ── 1. HERO SECTION ── */}
      <section className="relative w-full h-[78vh] min-h-[540px] flex flex-col justify-end overflow-hidden">
        {/* Background Image (Transisi Tab) */}
        <div className="absolute inset-0 z-0">
          {Object.values(vehicleData).map((veh) => {
            const isActive = activeTab === veh.id;
            return (
              <img
                key={veh.id}
                src={veh.heroImage}
                alt={veh.name}
                loading={isActive ? 'eager' : 'lazy'}
                decoding="async"
                className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
                  isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
                }`}
              />
            );
          })}

          {/* Gradasi Elegan & Perbaikan Radial Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-900/40"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent,rgba(0,0,0,0.6))] pointer-events-none"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pb-16 text-center text-white">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 font-mono text-xs uppercase tracking-[0.25em] mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            KHAD Engineering Fleet
          </span>

          <h1
            className="text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-white mb-4 drop-shadow-md"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            {activeData.name}
          </h1>

          <p className="text-slate-200 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8 drop-shadow">
            {activeData.tagline}
          </p>

          {/* Tab Selector Buttons (Accessible Tablist) */}
          <div
            role="tablist"
            aria-label="KHAD Fleet Vehicle Selection"
            className="inline-flex p-1.5 rounded-full bg-slate-900/80 border border-white/10 backdrop-blur-md shadow-2xl"
          >
            {Object.values(vehicleData).map((veh) => {
              const Icon = veh.icon;
              const isActive = activeTab === veh.id;
              return (
                <button
                  key={veh.id}
                  id={`tab-${veh.id}`}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${veh.id}`}
                  onClick={() => setActiveTab(veh.id)}
                  className={`px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? veh.tabActive
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{veh.shortName}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 2. METRICS HIGHLIGHT STRIP ── */}
      <section className="border-b border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-slate-100">
            {activeData.highlightStats.map((stat, idx) => (
              <div key={idx} className="px-3">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block mb-1">
                  {stat.label}
                </span>
                <div className="flex items-baseline justify-center gap-1">
                  <span
                    className="text-3xl sm:text-4xl font-black text-slate-900"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-xs font-mono font-semibold text-emerald-700">
                    {stat.unit}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. DETAILED PROTOTYPE SHOWCASE ("ABOUT THE CAR") ── */}
      <section
        id={`panel-${activeData.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeData.id}`}
        className="relative w-full py-16 md:py-24 bg-white border-b border-slate-200 overflow-hidden"
      >
        {/* Sisi Kiri: Mobil Menempel ke Tepi Kiri Layar (Full Bleed to Left Edge) */}
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-[50vw] xl:w-[52vw] flex flex-col justify-center items-start pointer-events-none z-10">
          <div className="relative w-full px-4 sm:px-6 lg:px-0 lg:pl-0 flex flex-col items-start group pointer-events-auto">
            {/* Top Status on Mobile */}
            <div className="w-full lg:hidden flex justify-between items-center pb-3 mb-2 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="font-mono text-xs font-bold text-slate-700 uppercase tracking-wider">
                  {activeData.category}
                </span>
              </div>
              <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                READY FOR TRACK
              </span>
            </div>

            {/* Stage Visual Mobil Menempel ke Kiri */}
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[460px] xl:h-[520px] flex items-center justify-start">
              {/* Soft Radial Ambient Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-slate-100/40 to-transparent rounded-r-3xl blur-3xl pointer-events-none"></div>

              {/* Transisi Mobil: Menempel ke Tepi Kiri Section Layar Penuh */}
              <div
                key={activeData.id}
                className="relative z-10 w-full h-full flex items-center justify-start -ml-3 sm:-ml-4 lg:-ml-6 xl:-ml-8 animate-fade-in"
              >
                <img
                  src={activeData.carImage}
                  alt={activeData.name}
                  decoding="async"
                  className="max-h-[92%] sm:max-h-[96%] lg:max-h-[100%] w-auto max-w-[110%] sm:max-w-none object-contain object-left filter drop-shadow-[0_28px_40px_rgba(0,0,0,0.22)] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />
              </div>

              {/* Floor Shadow Refinement di lantai bawah mobil */}
              <div className="absolute -bottom-2 left-0 w-4/5 h-8 bg-black/20 rounded-full blur-xl pointer-events-none"></div>
            </div>

            {/* Quick Specs Strip di bawah mobil pada mobile & desktop */}
            <div className="w-full lg:max-w-xl grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-slate-200/80 mt-2 lg:ml-6 xl:ml-10">
              {activeData.quickSpecs.map((m, idx) => (
                <div key={idx} className="border-l-2 border-slate-300 pl-3">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                    {m.label}
                  </span>
                  <span className="text-xs font-bold text-slate-800 block mt-0.5 line-clamp-1">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sisi Kanan: Teks Tetap di dalam Container Max-W-7xl */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 lg:mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[460px] xl:min-h-[520px]">
            {/* Spacer Kolom Kiri untuk mengalokasikan ruang bagi Mobil Full-Bleed */}
            <div className="hidden lg:block lg:col-span-6 xl:col-span-6 pointer-events-none"></div>

            {/* Kolom Kanan: Teks Konten Showcase */}
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center space-y-6 lg:text-right lg:pl-6 xl:pl-8">
              
              {/* Header: Status Track + Logo Event & Tag Badge */}
              <div className="flex items-center justify-between lg:justify-end gap-4">
                <div className="hidden lg:flex items-center gap-2 mr-auto">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="font-mono text-xs font-bold text-slate-700 uppercase tracking-wider">
                    {activeData.category}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-2 lg:order-2">
                  <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider border ${activeData.accentLight}`}>
                    {activeData.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-500 px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200">
                    {activeData.generation}
                  </span>
                </div>

                {activeData.badgeLogo && (
                  <img
                    src={activeData.badgeLogo}
                    alt={activeData.badgeLogoAlt || 'Event Badge'}
                    className="h-11 sm:h-14 w-auto object-contain flex-shrink-0 lg:order-1"
                  />
                )}
              </div>

              {/* Section Italic Title: ABOUT THE CAR (Sesuai Referensi Gambar) */}
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400 block mb-1.5 font-semibold">
                  Prototype Profile
                </span>
                <h2
                  className="text-3xl sm:text-4xl lg:text-5xl font-extrabold italic tracking-wider text-slate-400 uppercase"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  ABOUT THE CAR
                </h2>
              </div>

              {/* Editorial Description Text (Rata Kanan di Desktop Sesuai Referensi, Rata Kiri di Mobile) */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-left lg:text-right">
                <strong className="text-slate-900 font-semibold">{activeData.name}</strong> is an energy efficient prototype developed by KHAD Team to compete in official eco-marathons. The car focuses on minimizing parasitic consumption through lightweight aerospace composite construction, low-drag aerodynamic body shaping, and an optimized powertrain. Each component is precision engineered to reduce kinetic and thermal losses while maintaining high reliability and responsive control on track.
              </p>

              {/* Key Engineering Features List */}
              <div className="divide-y divide-slate-200 pt-3 border-t border-slate-200 text-left">
                {activeData.keyFeatures.map((item, idx) => (
                  <div key={idx} className="py-3 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                      <p className="text-slate-600 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ── 4. COMPETITION MILESTONES & RECORDS (DENGAN PODIUM HIGHLIGHTS STRIP & BADGE SVG) ── */}
      <section className="py-20 bg-slate-100/60 border-y border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* A. Horizontal Header with Navigation Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-emerald-700 font-semibold mb-2 block">
                Track Milestones
              </span>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                Competition Milestones & Records
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
                Linimasa lintasan perlombaan, capaian podium, dan verifikasi benchmarking sirkuit resmi untuk {activeData.name}.
              </p>
            </div>

            {/* Horizontal Arrow Buttons with aria-label */}
            <div className="flex items-center gap-3 self-end md:self-auto flex-shrink-0">
              <button
                onClick={() => scrollHorizontally('left')}
                className="w-11 h-11 rounded-full bg-white border border-slate-300 hover:border-emerald-600 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 flex items-center justify-center transition-all shadow-sm active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                title="Scroll Previous"
                aria-label="Scroll Carousel ke Kiri"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollHorizontally('right')}
                className="w-11 h-11 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center transition-all shadow-md active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                title="Scroll Next"
                aria-label="Scroll Carousel ke Kanan"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* B. Podium Highlights Strip Khusus Juara 3 (Animasi fade-in saat ganti tab) */}
          {activeData.podiumBadge && (
            <div
              key={`podium-${activeData.id}`}
              className="mb-8 p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/25 flex flex-col sm:flex-row items-center justify-between gap-4 animate-fade-in shadow-sm"
            >
              <div className="flex items-center gap-4">
                <img
                  src={activeData.podiumBadge}
                  alt={`${activeData.podiumTitle} - ${activeData.podiumEvent}`}
                  className="w-36 sm:w-44 md:w-52 h-auto object-contain flex-shrink-0 drop-shadow-md"
                />
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-amber-900 font-bold block mb-1">
                    Featured Official Podium
                  </span>
                  <h3
                    className="text-lg sm:text-xl font-bold text-slate-900 leading-snug"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    {activeData.podiumTitle} — {activeData.podiumEvent}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>{activeData.podiumCircuit}</span>
                  </p>
                </div>
              </div>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500 text-amber-950 font-mono text-xs font-bold uppercase tracking-wider shadow-sm flex-shrink-0">
                <Trophy className="w-3.5 h-3.5" />
                Verified Trophy
              </span>
            </div>
          )}

          {/* C. Horizontal Editorial Stats Row (3 Columns Side-by-Side) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 border-y border-slate-200 mb-10">
            <div className="border-l-4 border-amber-500 pl-4 py-1">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                Highest Achievement
              </span>
              <span className="text-xl sm:text-2xl font-bold text-slate-900 block" style={{ fontFamily: "'Oswald', sans-serif" }}>
                {activeData.trackRecord.bestPodium}
              </span>
              <span className="text-xs text-slate-500 mt-1 block">
                First Debut: <span className="font-semibold text-slate-700 font-mono">{activeData.trackRecord.firstDebut}</span>
              </span>
            </div>

            <div className="border-l-4 border-emerald-500 pl-4 py-1">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                Total Races Entered
              </span>
              <span className="text-xl sm:text-2xl font-bold text-slate-900 block" style={{ fontFamily: "'Oswald', sans-serif" }}>
                {activeData.trackRecord.totalRaces}
              </span>
              <span className="text-xs text-slate-500 mt-1 block">
                Benchmark: <span className="font-semibold text-emerald-700 font-mono">{activeData.trackRecord.efficiencyRecord}</span>
              </span>
            </div>

            <div className="border-l-4 border-slate-400 pl-4 py-1">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                Telemetry Pipeline
              </span>
              <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                Setiap putaran sirkuit menghasilkan log data real-time untuk memvalidasi efisiensi aerodinamika dan torsi motor.
              </p>
            </div>
          </div>

          {/* D. Full Horizontal Scroll Track (Horizontal Cards with Medals & Large Badge SVG) */}
          <div
            tabIndex={0}
            aria-label="Carousel Daftar Kompetisi (Gunakan tombol panah kiri dan kanan)"
            onKeyDown={handleKeyDown}
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-6 pt-2 scroll-smooth snap-x snap-mandatory focus:outline-none focus:ring-1 focus:ring-emerald-500/30 rounded-2xl"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {activeData.trackRecord.competitionsList.map((comp, idx) => (
              <div
                key={idx}
                className={`snap-start flex-shrink-0 w-[310px] sm:w-[350px] md:w-[380px] flex flex-col justify-between p-6 rounded-2xl border transition-all duration-300 group ${
                  comp.highlight
                    ? 'bg-gradient-to-br from-amber-50/80 via-white to-amber-50/20 border-amber-300 shadow-md hover:border-amber-400'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md'
                }`}
              >
                <div>
                  {/* Top: Large Badge SVG jika highlight, atau MedalBadge biasa */}
                  {comp.badgeImage ? (
                    <div className="mb-4 flex flex-col items-start">
                      <img
                        src={comp.badgeImage}
                        alt={comp.badgeAlt || comp.name}
                        className="w-40 sm:w-44 h-auto object-contain drop-shadow-sm mb-3 group-hover:scale-105 transition-transform"
                      />
                      <div className="flex items-center justify-between w-full">
                        <span className="text-xs font-mono font-bold text-slate-400">
                          {comp.year}
                        </span>
                        <span className="inline-block text-xs font-mono font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 shadow-sm">
                          {comp.result}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <MedalBadge
                        type={comp.medalType}
                        positionText={comp.positionNumber}
                      />

                      <div className="text-right">
                        <span className="text-xs font-mono font-bold text-slate-400 block mb-1">
                          {comp.year}
                        </span>
                        <span
                          className={`inline-block text-xs font-mono font-bold px-3 py-1 rounded-full ${
                            comp.highlight
                              ? 'bg-amber-100 text-amber-900 border border-amber-300 shadow-sm'
                              : 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          {comp.result}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Competition Title */}
                  <h4 className="font-bold text-slate-900 text-base leading-snug group-hover:text-emerald-700 transition-colors mb-3">
                    {comp.name}
                  </h4>
                </div>

                {/* Bottom Metadata: Category & Circuit */}
                <div className="pt-4 border-t border-slate-100 space-y-1.5 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                    <span className="truncate">{comp.category}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span className="truncate">{comp.circuit}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sub-label helper & keyboard hint */}
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono mt-3 px-1">
            <span>← Geser horizontal atau gunakan tombol panah keyboard ← / →</span>
            <span>{activeData.trackRecord.competitionsList.length} Official Events Recorded</span>
          </div>

        </div>
      </section>

      {/* ── 5. TECHNICAL SPECIFICATIONS ── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-emerald-700 font-semibold mb-2 block">
              Engineering Breakdown
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              General Specifications
            </h2>
            <p className="text-slate-600 text-sm mt-3">
              Standard component architecture and design configuration of {activeData.name}.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6">
            {activeData.specs.map((spec, idx) => (
              <div
                key={idx}
                className="border-b border-slate-200 pb-4"
              >
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                  {spec.label}
                </span>
                <span
                  className="text-sm font-bold text-slate-900 block"
                  style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: '0.02em' }}
                >
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. TELEMETRY & IOT ECOSYSTEM ── */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left: Telemetry Data Terminal */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-800">
              {/* Terminal Header */}
              <div className="flex justify-between items-center border-b border-slate-800 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="font-mono text-xs font-bold text-slate-200 tracking-wider">
                    PITLANE_TELEMETRY.NODE // {activeData.shortName.toUpperCase()}
                  </span>
                </div>
                <span className="font-mono text-[10px] bg-slate-800 text-emerald-400 px-2.5 py-1 rounded-full border border-slate-700">
                  LIVE 100Hz
                </span>
              </div>

              {/* Data Rows */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-6 gap-x-4 border-b border-slate-800 pb-6 mb-6">
                {activeData.telemetry.map((item, idx) => (
                  <div key={idx} className="border-l border-slate-800 pl-3">
                    <span className="text-[10px] font-mono text-slate-400 uppercase block mb-1">
                      {item.label}
                    </span>
                    <span
                      className={`text-lg sm:text-xl font-mono font-bold ${
                        item.highlight ? 'text-emerald-400' : 'text-white'
                      }`}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Realtime Wave Monitor */}
              <div>
                <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 mb-2">
                  <span>REALTIME EFFICIENCY CURVE</span>
                  <span className="text-emerald-400 font-semibold">SIGNAL: OPTIMAL</span>
                </div>
                <div className="w-full h-16 relative overflow-hidden bg-slate-950/60 rounded-xl p-2 border border-slate-800/80">
                  <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path
                      d="M0,12 Q10,18 20,6 T40,14 T60,4 T80,13 T100,7"
                      fill="none"
                      stroke="#10B981"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M0,12 Q10,18 20,6 T40,14 T60,4 T80,13 T100,7 L100,20 L0,20 Z"
                      fill="#10B981"
                      opacity="0.12"
                    />
                  </svg>
                </div>
                <div className="flex justify-between text-[9px] font-mono text-slate-500 mt-2">
                  <span>T - 60s</span>
                  <span>T - 30s</span>
                  <span>T - 0 (Live Pitlane)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text explanation */}
          <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-mono font-semibold uppercase tracking-wider border border-emerald-200">
              <Activity className="w-3.5 h-3.5" />
              Connected Track Technology
            </span>

            <h2
              className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              In-House Telemetry Ecosystem
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Designed from scratch by our electrical division, this custom IoT network enables real-time transmission of powertrain metrics directly to engineers in the pit box over long-range radio frequencies.
            </p>

            <div className="space-y-4 pt-2">
              <div className="border-l-2 border-emerald-500 pl-4">
                <h4 className="font-bold text-slate-900 text-sm">Long Range LoRa Protocol</h4>
                <p className="text-slate-600 text-xs leading-relaxed mt-0.5">
                  Operates on 915 MHz frequency to penetrate obstacles across race tracks with low power drain.
                </p>
              </div>

              <div className="border-l-2 border-emerald-500 pl-4">
                <h4 className="font-bold text-slate-900 text-sm">Real-time Driving Strategy</h4>
                <p className="text-slate-600 text-xs leading-relaxed mt-0.5">
                  Pitwall crew analyzes live power draws to instruct the driver on throttle modulation for maximum lap efficiency.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 7. CALL TO ACTION ── */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-400 font-semibold mb-3 block">
            Collaborate With Our Engineering Crew
          </span>

          <h2
            className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-6"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            Power The Next Generation of Eco-Mobility
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-10">
            Support our university engineering research and sponsor our upcoming competition campaigns in the Shell Eco-marathon and KMHE.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/sponsors"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-lg hover:shadow-emerald-500/25 flex items-center justify-center gap-2"
            >
              <span>Explore Sponsorship Opportunities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/about"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all flex items-center justify-center gap-2"
            >
              <span>Our Full Milestone Story</span>
              <MoveRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Vehicles;
