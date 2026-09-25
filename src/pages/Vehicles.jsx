import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Zap, Flame, Battery, Cpu, Droplets, Gauge, ShieldCheck,
  Trophy, ArrowRight, Download, Radio, Network, Activity,
  Ruler, Eye, Settings, Terminal, Wifi
} from 'lucide-react';
import lingsarBg from '../assets/vehicles/lingsar.JPG';
import arunaBg from '../assets/sponsor/ArunaDiesel.JPG';

const vehicleData = {
  lingsar: {
    id: 'lingsar',
    name: 'Lingsar EV',
    category: 'Electric Vehicle Class',
    tagline: 'Ultralight, ultra-efficient commuter prototype engineered to conquer global eco-marathons.',
    accentColor: '#06B6D4',
    accentGlow: 'shadow-[0_0_30px_rgba(6,182,212,0.15)] border-[#06B6D4]/30',
    accentText: 'text-[#06B6D4]',
    accentBg: 'bg-[#06B6D4]',
    image: lingsarBg,
    floatingSpecs: [
      { label: 'Body Materials', value: 'Carbon' },
      { label: 'Competitions', value: 'KMHE & SEM' },
      { label: 'Top Record', number: 3, unit: 'rd SEM' }
    ],
    specs: [
      { label: 'Class Category', value: 'Prototype EV' },
      { label: 'Body Material', value: 'Carbon Fiber Composite' },
      { label: 'Motor Powertrain', value: 'BLDC High Efficiency' },
      { label: 'Chassis Type', value: 'Lightweight Monocoque' }
    ],
    telemetry: {
      voltage: '49.8 V',
      current: '3.2 A',
      temp: '41.2 °C',
      rpm: '1840 RPM',
      consumption: '1.6 Wh/km',
      signal: '100% OK'
    }
  },
  aruna: {
    id: 'aruna',
    name: 'Aruna Diesel',
    category: 'Diesel Class',
    tagline: 'High-compression, optimized biodiesel prototype maximizing thermal efficiency and mechanical precision.',
    accentColor: '#EF4444',
    accentGlow: 'shadow-[0_0_30px_rgba(239,68,68,0.15)] border-[#EF4444]/30',
    accentText: 'text-[#EF4444]',
    accentBg: 'bg-[#EF4444]',
    image: arunaBg,
    floatingSpecs: [
      { label: 'Body Materials', value: 'Carbon Fiber' },
      { label: 'Competitions', value: 'KMHE' },
      { label: 'Top Record', number: 4, unit: 'th KMHE' }
    ],
    specs: [
      { label: 'Class Category', value: 'Prototype Diesel' },
      { label: 'Body Material', value: 'Carbon-Glass Hybrid' },
      { label: 'Engine Powertrain', value: 'Custom 110cc Combustion' },
      { label: 'Chassis Type', value: 'Aluminium Spaceframe' }
    ],
    telemetry: {
      voltage: '13.4 V',
      current: '1.1 A',
      temp: '78.5 °C',
      rpm: '3100 RPM',
      consumption: '0.24 mL/s',
      signal: '98% OK'
    }
  }
};

const Vehicles = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('lingsar');

  React.useEffect(() => {
    if (location.state?.activeTab) {
      setActiveTab(location.state.activeTab);
    }
  }, [location.state]);

  const activeData = vehicleData[activeTab];

  return (
    <div className="pt-20 min-h-screen bg-[#061E14] text-slate-300 font-body selection:bg-emerald-500/30 selection:text-white">

      {/* 1. Header & Vehicle Switch */}
      <section data-aos="fade-up" className="relative overflow-hidden pt-20 pb-12">
        {/* Background Radial Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-emerald-400 text-xs md:text-sm font-semibold tracking-widest uppercase mb-3 inline-block">
            KHAD TEAM
          </span>
          <h1 data-aos="fade-up" className="text-4xl md:text-6xl font-heading font-extrabold uppercase tracking-wider text-white mb-6">
            VEHICLES
          </h1>
          <p data-aos="fade-up" className="font-body leading-relaxed text-slate-300 max-w-2xl mx-auto text-base md:text-lg mb-10">
            Explore the advanced specifications and engineering records of our energy-efficient prototypes designed for world-class competition.
          </p>

          {/* Toggle Switch */}
          <div className="flex justify-center">
            <div className="inline-flex p-1 rounded-full bg-[#0B2A1E] border border-[#133E2B] shadow-2xl">
              <button
                onClick={() => setActiveTab('lingsar')}
                className={`px-6 py-2.5 sm:px-8 sm:py-3 rounded-full text-sm sm:text-md font-heading font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${activeTab === 'lingsar'
                  ? 'bg-[#06B6D4] text-[#061E14] shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                  : 'text-slate-400 hover:text-slate-200'
                  }`}
              >
                <Zap className="w-4 h-4" />
                Lingsar EV
              </button>
              <button
                onClick={() => setActiveTab('aruna')}
                className={`px-6 py-2.5 sm:px-8 sm:py-3 rounded-full text-sm sm:text-md font-heading font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${activeTab === 'aruna'
                  ? 'bg-[#EF4444] text-white shadow-[0_0_20px_rgba(239,68,68,0.4)]'
                  : 'text-slate-400 hover:text-slate-200'
                  }`}
              >
                <Flame className="w-4 h-4" />
                Aruna Diesel
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Hero Display Section */}
      <section data-aos="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Info Details (Left) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              {activeData.category}
            </div>
            <h2 data-aos="fade-up" className="text-4xl md:text-5xl font-heading font-extrabold uppercase tracking-wider text-white">
              {activeData.name}
            </h2>
            <p data-aos="fade-up" className="font-body leading-relaxed text-slate-300 text-base md:text-lg">
              {activeData.tagline}
            </p>

            {/* Micro spec cards */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {activeData.floatingSpecs.map((fSpec, idx) => (
                <div key={idx} className="bg-[#0B2A1E] border border-[#133E2B] rounded-2xl p-4 text-center">
                  <div className="text-xs text-slate-500 font-medium mb-1 font-body">{fSpec.label}</div>
                  <div className={`text-base sm:text-lg font-bold font-mono ${activeData.accentText}`}>
                    {fSpec.number !== undefined ? (
                      <>
                        {fSpec.number}
                        <span className="text-xs text-slate-400 ml-1 font-mono">{fSpec.unit}</span>
                      </>
                    ) : (
                      fSpec.value
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Large Image Frame (Right) */}
          <div className="lg:col-span-7 relative">
            {/* Ambient Backlight Glow */}
            <div className={`absolute inset-0 rounded-[2.5rem] blur-[40px] opacity-10 transition-all duration-500 pointer-events-none ${activeTab === 'lingsar' ? 'bg-[#06B6D4]' : 'bg-[#EF4444]'}`}></div>

            <div className={`relative bg-[#0B2A1E] border border-[#133E2B] p-4 sm:p-6 rounded-[2.5rem] overflow-hidden transition-all duration-500 ${activeData.accentGlow}`}>
              {/* Photo Frame */}
              <div data-aos="fade-up" className="relative h-64 sm:h-96 rounded-[1.5rem] overflow-hidden bg-[#061E14]/40 border border-[#133E2B]/50 group">
                {Object.values(vehicleData).map((data) => (
                  <img 
                    key={data.id}
                    src={data.image}
                    alt={data.name}
                    loading="lazy"
                    decoding="async"
                    style={{ willChange: 'transform, opacity' }}
                    className={`absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-1000 ease-out ${activeTab === data.id ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                  />
                ))}

                {/* Tech HUD Grid overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#061E14]/90 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 flex items-center gap-2 bg-[#061E14]/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#133E2B] text-[10px] sm:text-xs font-mono font-bold text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
                  ACTIVE
                </div>

                {/* Floating telemetry widget */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#061E14]/90 backdrop-blur-md px-4 py-3 rounded-xl border border-[#133E2B] flex justify-center items-center text-[10px] sm:text-xs font-mono">
                  <div>
                    <span className="text-slate-500 uppercase">System status:</span>
                    <span className="text-emerald-400 ml-1.5 font-bold">READY</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. General Specifications Grid */}
      <section data-aos="fade-up" className="bg-[#0B2A1E] border-y border-[#133E2B] py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 data-aos="fade-up" className="text-2xl md:text-3xl font-heading font-bold uppercase tracking-wider text-white mb-2">General Specifications</h2>
            <p data-aos="fade-up" className="font-body leading-relaxed text-slate-300 text-sm max-w-xl mx-auto">
              Overview of the design configuration and chassis components of the vehicle.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {activeData.specs.map((item, idx) => (
              <div key={idx} className="bg-[#0B2A1E] border border-[#133E2B] rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
                <span className="text-[10px] text-slate-500 block uppercase mb-1 font-body font-medium">{item.label}</span>
                <span className={`text-base font-semibold font-mono ${activeData.accentText}`}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* 4. Telemetry Showcase Section */}
      <section data-aos="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Telemetry Dashboard Mockup (Left) */}
          <div className="lg:col-span-7 relative order-2 lg:order-1">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 blur-xl opacity-30 pointer-events-none"></div>

            <div className="bg-[#0B2A1E] border border-[#133E2B] rounded-3xl p-6 shadow-2xl relative overflow-hidden">
              {/* Header */}
              <div className="flex justify-between items-center border-b border-[#133E2B] pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="font-mono font-bold text-white text-sm">LIVE_TELEMETRY.LOG</span>
                </div>

              </div>

              {/* Grid data */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-6">
                <div className="bg-[#061E14] border border-[#133E2B]/50 p-4 rounded-xl">
                  <span className="text-[10px] text-slate-500 block uppercase mb-1 font-body">Volt_Meter</span>
                  <span className="text-lg sm:text-xl font-mono font-bold text-white block">{activeData.telemetry.voltage}</span>
                </div>
                <div className="bg-[#061E14] border border-[#133E2B]/50 p-4 rounded-xl">
                  <span className="text-[10px] text-slate-500 block uppercase mb-1 font-body">Amp_Meter</span>
                  <span className="text-lg sm:text-xl font-mono font-bold text-white block">{activeData.telemetry.current}</span>
                </div>
                <div className="bg-[#061E14] border border-[#133E2B]/50 p-4 rounded-xl">
                  <span className="text-[10px] text-slate-500 block uppercase mb-1 font-body">Motor_Temp</span>
                  <span className="text-lg sm:text-xl font-mono font-bold text-amber-500 block">{activeData.telemetry.temp}</span>
                </div>
                <div className="bg-[#061E14] border border-[#133E2B]/50 p-4 rounded-xl">
                  <span className="text-[10px] text-slate-500 block uppercase mb-1 font-body">Speed_RPM</span>
                  <span className="text-lg sm:text-xl font-mono font-bold text-white block">{activeData.telemetry.rpm}</span>
                </div>
                <div className="bg-[#061E14] border border-[#133E2B]/50 p-4 rounded-xl">
                  <span className="text-[10px] text-slate-500 block uppercase mb-1 font-body">Fuel_Energy_Cons</span>
                  <span className="text-lg sm:text-xl font-mono font-bold text-emerald-400 block">{activeData.telemetry.consumption}</span>
                </div>
                <div className="bg-[#061E14] border border-[#133E2B]/50 p-4 rounded-xl">
                  <span className="text-[10px] text-slate-500 block uppercase mb-1 font-body">Signal_Strength</span>
                  <span className="text-lg sm:text-xl font-mono font-bold text-[#06B6D4] block">{activeData.telemetry.signal}</span>
                </div>
              </div>

              {/* Graphic Line Simulation */}
              <div className="bg-[#061E14] border border-[#133E2B]/50 p-4 rounded-xl h-32 flex flex-col justify-between">
                <div className="flex justify-between items-center text-[10px] font-mono text-slate-500">
                  <span>REALTIME POWERCURVE</span>
                  <span className="text-[#06B6D4]">SYS_STABLE: 100%</span>
                </div>
                {/* SVG simulated graph wave */}
                <div className="w-full h-16 relative overflow-hidden">
                  <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path
                      d="M0,10 Q10,18 20,8 T40,12 T60,5 T80,15 T100,6"
                      fill="none"
                      stroke={activeTab === 'lingsar' ? '#06B6D4' : '#EF4444'}
                      strokeWidth="1.5"
                      className="animate-[dash_5s_linear_infinite]"
                    />
                    <path
                      d="M0,10 Q10,18 20,8 T40,12 T60,5 T80,15 T100,6 L100,20 L0,20 Z"
                      fill={activeTab === 'lingsar' ? 'url(#cyan-grad)' : 'url(#red-grad)'}
                      opacity="0.15"
                    />
                    <defs>
                      <linearGradient id="cyan-grad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#06B6D4" />
                        <stop offset="100%" stopColor="#061E14" />
                      </linearGradient>
                      <linearGradient id="red-grad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#EF4444" />
                        <stop offset="100%" stopColor="#061E14" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="flex justify-between text-[8px] font-mono text-slate-600">
                  <span>t = -30s</span>
                  <span>t = -15s</span>
                  <span>t = 0 (Live)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Description Content (Right) */}
          <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#06B6D4]/20 bg-[#06B6D4]/5 text-[#06B6D4] text-xs font-semibold uppercase tracking-wider">
              <Cpu className="w-3.5 h-3.5 animate-ping" />
              On Progress
            </div>
            <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-heading font-extrabold uppercase tracking-wider text-white">
              Telemetry Ecosystem
            </h2>
            <p data-aos="fade-up" className="font-body leading-relaxed text-slate-300 text-base">
              We developed our custom telemetry stack internally. It relies on low-power LoRa technology and highly integrated sensor nodes to stream and visualize vital performance telemetry in the pitlane.
            </p>

            <ul className="space-y-4 pt-2">
              {[
                {
                  title: 'Multi-node Sensor Integration',
                  desc: 'High-speed sensors feeding real-time current, temperature, and RPM logs directly to the processing unit.',
                  icon: Network
                },
                {
                  title: 'Long Range RF Protocol',
                  desc: 'LoRa 915 MHz module guarantees stable connectivity over up to 3 km of race track containing major obstacles.',
                  icon: Wifi
                },
                {
                  title: 'Pitlane Visualizer Dashboard',
                  desc: 'Tailored dashboard utilizing WebSockets allows race engineers to monitor, analyze, and optimize driving strategies.',
                  icon: Activity
                }
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="p-2 bg-emerald-500/10 rounded-lg">
                      <item.icon className="w-4 h-4 text-emerald-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold uppercase tracking-wider text-white text-sm sm:text-base mb-1">{item.title}</h4>
                    <p data-aos="fade-up" className="font-body leading-relaxed text-slate-300 text-xs sm:text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Bottom Call To Action */}
      <section data-aos="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#0B2A1E] border border-[#133E2B] p-8 md:p-16">
          {/* Decorative grid pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:16px_16px]"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="text-center lg:text-left space-y-4">
              <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-heading font-extrabold uppercase tracking-wider text-white">
                Technical Data Sheets
              </h2>
              <p data-aos="fade-up" className="font-body leading-relaxed text-slate-300 max-w-lg">
                Download full blueprints, structural calculations, and mechanical data logs of Lingsar EV & Aruna Diesel.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">

              <Link
                to="/sponsors"
                className="w-full sm:w-auto px-8 py-4 rounded-xl border border-[#133E2B] hover:border-emerald-500/40 hover:bg-[#061E14] text-slate-300 font-medium transition-all duration-300 flex items-center justify-center gap-2"
              >
                Sponsorship Program
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vehicles;
