import React from 'react';
import { ArrowRight, Play, Battery, Zap, Droplets, Target, Cpu, Activity, MoveRight, Users, Medal, Car, ClipboardCheck, Compass, X } from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import navLogo from '../assets/navbar/navbarbenar.png';

const CountUpComponent = CountUp && typeof CountUp === 'object' && CountUp.default ? CountUp.default : CountUp;

import bgHome from '../assets/bgHome/LandPage.jpg';
import lingsarBg from '../assets/mobil/vision.JPG';
import arunaBg from '../assets/mobil/DesignBody.jpeg';
import khadTeamGroup from '../assets/divisions/Managers.jpg';

import lingsarImage from '../assets/bgHome/LingsarEV.png';
import arunaImage from '../assets/bgHome/ArunaHD.png';

import sponsor1 from '../assets/sponsor/sponsor1bnr.png';
import sponsor2 from '../assets/sponsor/sponsor2.png';
import sponsor3 from '../assets/sponsor/sponsor3.png';
import sponsor4 from '../assets/sponsor/sponsor4.png';
import sponsor5 from '../assets/sponsor/sponsor5.png';
import sponsor6 from '../assets/sponsor/sponsor6.png';
import sponsor7 from '../assets/sponsor/sponsor7.png';

const sponsorImages = [sponsor1, sponsor2, sponsor3, sponsor4, sponsor5, sponsor6, sponsor7];

const metrics = [
  { label: 'Total Competition', number: 10, suffix: '+', icon: ClipboardCheck },
  { label: 'Prototypes Built', number: 2, icon: Car },
  { label: 'Active Crew', number: 35, suffix: '+', icon: Users },
  { label: 'Top Record', number: 3, unit: 'rd SEM', icon: Medal },
];

const Home = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const { ref: metricsRef, inView: metricsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Hero reveal: show text after background image is visible or after a short delay
  const [heroVisible, setHeroVisible] = React.useState(false);
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    // If the hero background is in view, reveal immediately; otherwise reveal after 1s
    let t = null;
    if (heroInView) {
      t = setTimeout(() => setHeroVisible(true), 1500); // small delay for nice effect
    } else {
      t = setTimeout(() => setHeroVisible(true), 1000);
    }
    return () => clearTimeout(t);
  }, [heroInView]);

  return (
    <div className="min-h-screen bg-khad-dark">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-32">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img src={bgHome} alt="Hero Background" className="w-full h-full object-cover opacity-120 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-khad-dark/80 to-khad-dark"></div>
        </div>

        <div ref={heroRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-2 py-2 rounded-full border border-khad-border/50 bg-khad-card/50 backdrop-blur-sm mb-8">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-semibold text-slate-300 tracking-widest uppercase">
               Muhammadiyah University of Yogyakarta
            </span>
          </div>
          
          <h1 className={`text-2xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-white to-slate-400 mb-4 tracking-tight transition-all duration-700 ease-out ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Pushing the Ultimate Boundaries <br className="hidden md:block" />
            of <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Vehicle Efficiency</span>
          </h1>
          
          <p className={`max-w-xl mx-auto text-lg md:text-md text-slate-400 mb-12 leading-relaxed transition-all duration-900 ease-out ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Pioneering the future of sustainable mobility through advanced research 
            and development of ultra-efficient prototype vehicles.
          </p>
          
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-900 ease-out ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Link to="/vehicles" className="w-full sm:w-auto px-8 py-4 rounded-full bg-emerald-500 hover:bg-white text-khad-dark font-bold transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.4)]  flex items-center justify-center gap-2 group">
              Explore Vehicles
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-khad-border hover:border-emerald-500/50 hover:bg-khad-card text-slate-300 font-medium transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Play className="w-5 h-5" />
              KHAD Profile
            </button>
          </div>
        </div>
      </section>

      {/* 2. Key Metrics Banner */}
      <section className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 md:-mt-12 mb-12">
        <div className="bg-khad-card/60 backdrop-blur-xl border border-khad-border/50 shadow-2xl rounded-3xl py-5 md:py-6" ref={metricsRef}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-4 md:gap-6">
            {metrics.map((metric, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col items-center text-center transition-all duration-700 ease-out ${metricsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <metric.icon className="w-5 h-5 md:w-6 md:h-6 text-emerald-400 mb-1.5 md:mb-2 opacity-80" />
                <div className="text-xl md:text-3xl font-bold font-heading text-white mb-1 flex flex-col md:flex-row items-center md:items-baseline gap-1">
                  {metric.number !== undefined ? (
                    metricsInView ? (
                      <span className="flex items-baseline">
                        <CountUpComponent end={metric.number} duration={2.5} />
                        {metric.suffix && <span>{metric.suffix}</span>}
                      </span>
                    ) : (
                      <span className="flex items-baseline">0{metric.suffix && <span>{metric.suffix}</span>}</span>
                    )
                  ) : (
                    metric.value
                  )}
                  {metric.unit && <span className="text-xs md:text-base text-slate-400 font-medium ml-1">{metric.unit}</span>}
                </div>
                <div className="text-[10px] md:text-xs font-semibold text-emerald-500/80 uppercase tracking-widest text-center px-2">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-gradient-to-b from-khad-card/30 via-khad-card/65 to-khad-card/30 border-y border-khad-border/40 relative overflow-hidden">
        {/* Abstract Tech Grid Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#10B981_1px,transparent_1px),linear-gradient(to_bottom,#10B981_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Glowing Ambient Backdrops */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
         
          
          <h2 className="text-2xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
            What is KHAD TEAM ?
          </h2>
          
          <p className="font-body text-base md:text-md text-slate-300 leading-relaxed max-w-3xl mx-auto mb-12">
            K.H Ahmad Dahlan TEAM UMY is the energy efficient vehicle research and development team at Universitas Muhammadiyah Yogyakarta. We serve as a collaborative platform for multidisciplinary students to translate scientific and technological innovations into tangible, eco-friendly vehicles of the future.
          </p>

          

          {/* Vision & Mission Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {/* Vision Card */}
            <div className="group relative bg-[#061E14]/40 border border-khad-border/60 hover:border-emerald-500/30 transition-all duration-300 rounded-2xl p-8 backdrop-blur-sm overflow-hidden">
              {/* Subtle top-right glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-colors duration-300"></div>
              
              <div className="flex items-center gap-4 mb-6">
                
                <h3 className="text-xl font-bold text-white tracking-wide">Student Research</h3>
              </div>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                To become a leading center for student research and innovation in energy efficient vehicles at both national and international levels, grounded in the knowledge acquired.
              </p>
            </div>

            {/* Mission Card */}
            <div className="group relative bg-[#061E14]/40 border border-khad-border/60 hover:border-emerald-500/30 transition-all duration-300 rounded-2xl p-8 backdrop-blur-sm overflow-hidden">
              {/* Subtle top-right glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-colors duration-300"></div>
              
              <div className="flex items-center gap-4 mb-6">
               
                <h3 className="text-xl font-bold text-white tracking-wide">Innovation and Technology</h3>
              </div>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                To test the ability to design, build, and test motorized vehicles that are safe, efficient, and environmentally friendly and to spur automotive technology creativity in order to address the challenges of the global energy crisis.
              </p>
            </div>
          </div>
          
          <Link to="/about" className="flex justify-end items-center gap-2 text-emerald-400 hover:text-white font-semibold text-sm tracking-wide transition-colors duration-300 group  mt-4">
            See our journey
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Our Divisions Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-md">DIVISIONS of KHAD TEAM</p><hr className="border-violet-500"></hr>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Managers Card */}
          <div className="group relative rounded-2xl border border-khad-border bg-khad-dark p-8 overflow-hidden hover:border-amber-500/40 transition-all duration-500 min-h-[300px] flex flex-col justify-end">
            <img src={khadTeamGroup} alt="Managers Team" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-500 grayscale group-hover:grayscale-0 mix-blend-luminosity" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061E14] via-[#061E14]/80 to-transparent"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl group-hover:bg-amber-500/10 transition-colors duration-500"></div>
            <div className="relative z-10 mt-auto">
              
              <h3 className="text-xl font-bold text-white mb-2">Managers</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Strategic leadership driving project direction, resource coordination, and competition planning across all teams.
              </p>
              <div className="flex justify-between items-end gap-4">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-[10px] font-bold uppercase tracking-wider border border-amber-500/20">Head Manager</span>
                  <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-[10px] font-bold uppercase tracking-wider border border-amber-500/20">Deputy Manager</span>
                  <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-[10px] font-bold uppercase tracking-wider border border-amber-500/20">Electric Proto Manager</span>
                  <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-[10px] font-bold uppercase tracking-wider border border-amber-500/20">Diesel Proto Manager</span>
                </div>
                <Link to="/team" className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 hover:bg-amber-500 hover:text-khad-dark transition-all duration-300 group/btn" title="View Team">
                  <ArrowRight className="w-5 h-5 group-hover/btn:-rotate-45 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>

          {/* Technical Card */}
          <div className="group relative rounded-2xl border border-khad-border bg-khad-dark p-8 overflow-hidden hover:border-cyan-500/40 transition-all duration-500 min-h-[300px] flex flex-col justify-end">
            <img src={khadTeamGroup} alt="Technical Team" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-500 grayscale group-hover:grayscale-0 mix-blend-luminosity" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061E14] via-[#061E14]/80 to-transparent"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/10 transition-colors duration-500"></div>
            <div className="relative z-10 mt-auto">
              
              <h3 className="text-xl font-bold text-white mb-2">Technical</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Engineering the heart of our prototypes from chassis design and powertrain to telemetry systems and CFD simulation.
              </p>
              <div className="flex justify-between items-end gap-4">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-[10px] font-bold uppercase tracking-wider border border-cyan-500/20">Engine</span>
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-[10px] font-bold uppercase tracking-wider border border-cyan-500/20">Electrical</span>
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-[10px] font-bold uppercase tracking-wider border border-cyan-500/20">Manufacture</span>
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-[10px] font-bold uppercase tracking-wider border border-cyan-500/20">Mechanic</span>
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-[10px] font-bold uppercase tracking-wider border border-cyan-500/20">Design</span>
                </div>
                <Link to="/team" className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 hover:bg-cyan-500 hover:text-khad-dark transition-all duration-300 group/btn" title="View Team">
                  <ArrowRight className="w-5 h-5 group-hover/btn:-rotate-45 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>

          {/* Non Technical Card */}
          <div className="group relative rounded-2xl border border-khad-border bg-khad-dark p-8 overflow-hidden hover:border-violet-500/40 transition-all duration-500 min-h-[300px] flex flex-col justify-end">
            <img src={khadTeamGroup} alt="Non Technical Team" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-500 grayscale group-hover:grayscale-0 mix-blend-luminosity" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061E14] via-[#061E14]/80 to-transparent"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/5 rounded-full blur-3xl group-hover:bg-violet-500/10 transition-colors duration-500"></div>
            <div className="relative z-10 mt-auto">
              
              <h3 className="text-xl font-bold text-white mb-2">Non Technical</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Building our brand through media production, sponsorship acquisition, event management, and public relations.
              </p>
              <div className="flex justify-between items-end gap-4">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 text-[10px] font-bold uppercase tracking-wider border border-violet-500/20">Media</span>
                  <span className="px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 text-[10px] font-bold uppercase tracking-wider border border-violet-500/20">Sponsors</span>
                  <span className="px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 text-[10px] font-bold uppercase tracking-wider border border-violet-500/20">Administrative</span>
                </div>
                <Link to="/team" className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 hover:bg-violet-500 hover:text-khad-dark transition-all duration-300 group/btn" title="View Team">
                  <ArrowRight className="w-5 h-5 group-hover/btn:-rotate-45 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Latest News & Progress Section */}
      <section className="py-24 bg-khad-dark border-t border-khad-border/30 relative">
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="text-left">
              <p className="text-slate-400 font-semibold tracking-widest uppercase text-sm mb-2">Updates</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">News & Progress</h2>
            </div>
            <Link to="/news" className="group flex items-center gap-2 px-6 py-3 rounded-full border border-khad-border bg-khad-card hover:border-emerald-500/50 hover:bg-emerald-500/10 text-slate-300 hover:text-emerald-400 transition-all duration-300 font-medium text-sm">
              View All News
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* News Card 1 */}
            <div className="group relative rounded-[2rem] overflow-hidden h-[400px] border border-khad-border hover:border-emerald-500/50 transition-all duration-500 cursor-pointer">
              <img src={arunaBg} alt="News 1" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              
              <div className="absolute top-5 left-5 z-20 transition-opacity duration-300 group-hover:opacity-0">
                <span className="px-3 py-1 bg-emerald-500 text-khad-dark text-xs font-bold rounded-full uppercase tracking-wider shadow-lg">Technical</span>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-khad-dark via-khad-dark/40 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                <p className="text-emerald-400 text-xs font-mono mb-2">AUGUST 12, 2026</p>
                <h3 className="text-xl font-bold text-white line-clamp-2">
                  Aruna Diesel Completes First Track Test Successfully
                </h3>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#061E14]/95 to-emerald-900/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col p-6 md:p-8 z-30">
                <div className="flex flex-col h-full transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <div className="flex justify-between items-center mb-6">
                    <span className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-bold rounded-full uppercase tracking-wider">Technical</span>
                    <span className="text-emerald-400/80 text-xs font-mono">AUG 12</span>
                  </div>
                  <div className="mt-2">
                    <h3 className="text-xl font-bold text-white mb-3">Aruna Diesel Completes First Track Test</h3>
                    <p className="text-slate-300 text-sm leading-relaxed line-clamp-4">
                      Our team has successfully tested the Aruna Diesel prototype on the main circuit. The powertrain modifications resulted in a 15% increase in efficiency compared to previous simulations.
                    </p>
                  </div>
                  <div className="mt-auto border-t border-emerald-500/20 pt-4">
                    <Link to="/news" className="flex items-center justify-between text-emerald-400 hover:text-white font-semibold text-sm transition-colors duration-300 group/btn">
                      Read Full Article
                      <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover/btn:bg-emerald-500 group-hover/btn:text-khad-dark transition-all duration-300">
                        <ArrowRight className="w-5 h-5 group-hover/btn:-rotate-45 transition-transform duration-300" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* News Card 2 */}
            <div className="group relative rounded-[2rem] overflow-hidden h-[400px] border border-khad-border hover:border-cyan-500/50 transition-all duration-500 cursor-pointer">
              <img src={lingsarBg} alt="News 2" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              
              <div className="absolute top-5 left-5 z-20 transition-opacity duration-300 group-hover:opacity-0">
                <span className="px-3 py-1 bg-cyan-500 text-khad-dark text-xs font-bold rounded-full uppercase tracking-wider shadow-lg">Technical</span>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-khad-dark via-khad-dark/40 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                <p className="text-cyan-400 text-xs font-mono mb-2">AUGUST 05, 2026</p>
                <h3 className="text-xl font-bold text-white line-clamp-2">
                  New Aerodynamic Chassis Unveiled for Lingsar EV
                </h3>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#061E14]/95 to-cyan-900/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col p-6 md:p-8 z-30">
                <div className="flex flex-col h-full transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <div className="flex justify-between items-center mb-6">
                    <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-xs font-bold rounded-full uppercase tracking-wider">Technical</span>
                    <span className="text-cyan-400/80 text-xs font-mono">AUG 05</span>
                  </div>
                  <div className="mt-2">
                    <h3 className="text-xl font-bold text-white mb-3">New Aerodynamic Chassis Unveiled</h3>
                    <p className="text-slate-300 text-sm leading-relaxed line-clamp-4">
                      Following months of intensive CFD simulations, the technical division has finalized the new carbon-fiber chassis design for the Lingsar EV, significantly reducing drag coefficient.
                    </p>
                  </div>
                  <div className="mt-auto border-t border-cyan-500/20 pt-4">
                    <Link to="/news" className="flex items-center justify-between text-cyan-400 hover:text-white font-semibold text-sm transition-colors duration-300 group/btn">
                      Read Full Article
                      <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center group-hover/btn:bg-cyan-500 group-hover/btn:text-khad-dark transition-all duration-300">
                        <ArrowRight className="w-5 h-5 group-hover/btn:-rotate-45 transition-transform duration-300" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* News Card 3 */}
            <div className="group relative rounded-[2rem] overflow-hidden h-[400px] border border-khad-border hover:border-violet-500/50 transition-all duration-500 cursor-pointer">
              <img src={khadTeamGroup} alt="News 3" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              
              <div className="absolute top-5 left-5 z-20 transition-opacity duration-300 group-hover:opacity-0">
                <span className="px-3 py-1 bg-violet-500 text-khad-dark text-xs font-bold rounded-full uppercase tracking-wider shadow-lg">Sponsorship</span>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-khad-dark via-khad-dark/40 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                <p className="text-violet-400 text-xs font-mono mb-2">JULY 28, 2026</p>
                <h3 className="text-xl font-bold text-white line-clamp-2">
                  Partnership Secured with Leading Telemetry Tech Provider
                </h3>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#061E14]/95 to-violet-900/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col p-6 md:p-8 z-30">
                <div className="flex flex-col h-full transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <div className="flex justify-between items-center mb-6">
                    <span className="px-3 py-1 bg-violet-500/20 border border-violet-500/30 text-violet-400 text-xs font-bold rounded-full uppercase tracking-wider">Sponsorship</span>
                    <span className="text-violet-400/80 text-xs font-mono">JUL 28</span>
                  </div>
                  <div className="mt-2">
                    <h3 className="text-xl font-bold text-white mb-3">Partnership Secured with Telemetry Tech</h3>
                    <p className="text-slate-300 text-sm leading-relaxed line-clamp-4">
                      We are thrilled to announce a new strategic partnership that will equip our vehicles with state-of-the-art real-time telemetry tracking and data analysis systems for the upcoming race season.
                    </p>
                  </div>
                  <div className="mt-auto border-t border-violet-500/20 pt-4">
                    <Link to="/news" className="flex items-center justify-between text-violet-400 hover:text-white font-semibold text-sm transition-colors duration-300 group/btn">
                      Read Full Article
                      <div className="w-10 h-10 rounded-full bg-violet-500/10 flex items-center justify-center group-hover/btn:bg-violet-500 group-hover/btn:text-khad-dark transition-all duration-300">
                        <ArrowRight className="w-5 h-5 group-hover/btn:-rotate-45 transition-transform duration-300" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Featured Vehicles Preview */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Our Innovations</h2>
          <p className="text-slate-400 max-w-4xl mx-auto">Engineering marvels designed to extract the absolute maximum distance from minimum energy.</p>
        </div>

        <div className="flex flex-col gap-24 mt-16">
          {/* Electric Prototype - Lingsar EV (Desc Left, Image Right) */}
          <div className="flex flex-col-reverse md:flex-row items-center gap-12 group">
            {/* Description (Left) */}
            <div className="w-full md:w-1/2 flex flex-col items-start justify-center">
              <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6 border border-blue-500/20">
                <Battery className="w-4 h-4" />
                Electric Class
              </div>
              <h3 className="text-4xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">Lingsar EV</h3>
              <p className="text-slate-300 text-md leading-relaxed mb-10">
                Our flagship electric vehicle, designed with state-of-the-art aerodynamics and an ultra-efficient electric powertrain. Lingsar EV pushes the boundaries of battery-powered mobility.
              </p>
              <Link to="/vehicles" state={{ activeTab: 'lingsar' }} className="w-full md:w-auto px-4 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                View Specifications
                <MoveRight className="w-5 h-5" />
              </Link>
            </div>
            {/* Image (Right) */}
            <div className="w-full md:w-1/2 relative flex items-center justify-center min-h-[300px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none group-hover:bg-blue-500/30 transition-all duration-700"></div>
              <img src={lingsarImage} alt="Lingsar EV" className="relative z-10 w-full max-w-[500px] h-auto object-contain group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-700 drop-shadow-2xl" />
            </div>
          </div>

          {/* ICE/Diesel Prototype - Aruna Diesel (Image Left, Desc Right) */}
          <div className="flex flex-col md:flex-row items-center gap-12 group">
            {/* Image (Left) */}
            <div className="w-full md:w-1/2 relative flex items-center justify-center min-h-[300px] order-1 md:order-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-500/20 rounded-full blur-[100px] pointer-events-none group-hover:bg-red-500/30 transition-all duration-700"></div>
              <img src={arunaImage} alt="Aruna Diesel" className="relative z-10 w-full max-w-[600px] scale-110 h-auto object-contain group-hover:scale-125 group-hover:-translate-y-2 transition-all duration-700 drop-shadow-2xl" />
            </div>
            {/* Description (Right) */}
            <div className="w-full md:w-1/2 flex flex-col items-start justify-center order-2 md:order-none">
              <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-red-500/10 text-red-400 text-xs font-bold uppercase tracking-wider mb-6 border border-red-500/20">
                <Cpu className="w-4 h-4" />
                Diesel Class
              </div>
              <h3 className="text-4xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">Aruna Diesel</h3>
              <p className="text-slate-300 text-md leading-relaxed mb-10">
                A masterpiece of internal combustion engineering. Aruna Diesel utilizes advanced tuning and thermal management to squeeze every last drop of energy from its fuel.
              </p>
              <Link to="/vehicles" state={{ activeTab: 'aruna' }} className="w-full md:w-auto px-8 py-4 rounded-xl bg-red-600 hover:bg-red-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.3)] font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                View Specifications
                <MoveRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    

      {/* 4. Sponsors Marquee Section */}
      <section className="py-16 bg-khad-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest">Trusted by Industry Leaders & Partners</p>
        </div>
        
        {/* Simple Marquee Implementation */}
        <div className="relative w-full overflow-hidden flex py-4">
          {/* Gradient masks for smooth fade effect at edges */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-khad-dark to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-khad-dark to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex animate-[marquee_25s_linear_infinite] items-center gap-8 md:gap-16 pr-8 md:pr-16 flex-shrink-0">
            {sponsorImages.map((src, idx) => (
              <div key={`sponsor-1-${idx}`} className="flex-shrink-0 flex items-center justify-center h-24 w-52 md:h-32 md:w-72 bg-transparent transition-all duration-300 cursor-default p-4 md:p-6 hover:scale-105">
                <img src={src} alt={`Sponsor ${idx + 1}`} className="max-h-full max-w-full object-contain drop-shadow-md" />
              </div>
            ))}
          </div>
          <div className="flex animate-[marquee_25s_linear_infinite] items-center gap-8 md:gap-16 pr-8 md:pr-16 flex-shrink-0" aria-hidden="true">
            {sponsorImages.map((src, idx) => (
              <div key={`sponsor-2-${idx}`} className="flex-shrink-0 flex items-center justify-center h-24 w-52 md:h-32 md:w-72 bg-transparent transition-all duration-300 cursor-default p-4 md:p-6 hover:scale-105">
                <img src={src} alt={`Sponsor ${idx + 1}`} className="max-h-full max-w-full object-contain drop-shadow-md" />
              </div>
            ))}
          </div>
        </div>

      </section>

        {/* Contact Banner Section */}
      <section className="py-8 px-6 md:px-10 rounded-[2rem] bg-gradient-to-br from-[#0B2A1E] via-khad-border to-[#061E14] relative overflow-hidden border border-emerald-500/20 mt-12 mb-16 max-w-5xl mx-4 lg:mx-auto shadow-2xl ">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute -top-16 -right-16 w-48 h-48 bg-emerald-500/20 rounded-full blur-[60px] pointer-events-none"></div>
        <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-cyan-500/20 rounded-full blur-[60px] pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left md:w-2/3">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Collaborate with us</h2>
            <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto md:mx-0">
              Join us in our mission to develop cutting-edge, energy-efficient vehicles. We are always open to new sponsorships, media partnerships, and technical collaborations.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center md:justify-center w-full mt-2 md:mt-0">
            <Link to="/sponsors" className="group relative inline-flex items-center justify-center px-6 py-3 font-bold text-khad-dark bg-emerald-400 rounded-full overflow-hidden transition-all duration-300 hover:bg-white w-full sm:w-auto text-sm">
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
              <span className="relative flex items-center gap-2">
                Get In Touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="border-t border-khad-border bg-[#03100A] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            
            {/* Left Side: Logo & Address */}
            <div className="space-y-4 max-w-md">
              <div className="flex items-center gap-3">
                <img src={navLogo} alt="KHAD TEAM" className="h-10 object-contain" />
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                K.H Ahmad Dahlan (KHAD) TEAM UMY<br />
                58RC+M5Q, Geblagan, Tamantirto, Kec. Kasihan, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55184
              </p>
            </div>

            {/* Right Side: Social Medias */}
            <div className="flex flex-col items-start md:items-center gap-3">
              <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-widest">Follow Us</h3>
              <div className="flex items-center gap-4">
              <a 
                href="https://instagram.com/khadteam.umy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-khad-card border border-khad-border flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 hover:bg-[#061E14]/40 transition-all duration-300 shadow-md group"
                title="Instagram"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="w-5 h-5 group-hover:scale-110 transition-transform"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a 
                href="https://www.youtube.com/@khahmaddahlanteamumy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-khad-card border border-khad-border flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 hover:bg-[#061E14]/40 transition-all duration-300 shadow-md group"
                title="YouTube"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="w-5 h-5 group-hover:scale-110 transition-transform"
                >
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
                  <polygon points="10 15 15 12 10 9" />
                </svg>
              </a>
              <a 
                href="https://www.tiktok.com/@khadteam.umy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-khad-card border border-khad-border flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 hover:bg-[#061E14]/40 transition-all duration-300 shadow-md group"
                title="TikTok"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="w-5 h-5 group-hover:scale-110 transition-transform"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
              </div>
            </div>

          </div>

          {/* Copyright border bottom */}
          <div className="border-t border-khad-border/40 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} KHAD TEAM UMY. All rights reserved.</p>
            
          </div>
        </div>
      </footer>

      {/* YouTube Video Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-4xl bg-khad-card border border-khad-border/80 rounded-2xl overflow-hidden aspect-video shadow-2xl animate-[fadeIn_0.2s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/60 hover:bg-emerald-500/20 text-white hover:text-emerald-400 transition-colors border border-white/10"
              onClick={() => setIsModalOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <iframe
              className="w-full h-full border-0"
              src="https://www.youtube.com/embed/G2GuIfViaCE?autoplay=1"
              title="KHAD TEAM UMY Teaser Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
