import React, { useState } from 'react';
import { Target, Flag, Zap, Users, ShieldCheck, ChevronRight, Activity, Battery, MoveRight, Droplets, Flame } from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const CountUpComponent = CountUp && typeof CountUp === 'object' && CountUp.default ? CountUp.default : CountUp;

import bgHome from '../assets/mobil/LingsarNews.png';
import bgCard from '../assets/bgHome/bgCard.jpg';
import lingsarBg from '../assets/mobil/vision.JPG';
import arunaBg from '../assets/mobil/DesignBody.jpeg';
import bgHero from '../assets/bgHome/LandPage.JPG';

const phases = [
  {
    id: 'phase-01',
    title: 'Software Technical',
    subtitle: 'CAD & Aerodynamic Simulation',
    description: 'Tahap awal perancangan di mana ide diubah menjadi model 3D presisi tinggi. Tim kami menghadapi tantangan kompleks dalam mengoptimalkan aerodinamika menggunakan simulasi CFD (Computational Fluid Dynamics) pada SolidWorks dan ANSYS untuk mencapai drag coefficient serendah mungkin tanpa mengorbankan downforce.',
    image: bgHome,
  },
  {
    id: 'phase-02',
    title: 'Electrical & Technology',
    subtitle: 'Development of a BLDC motor controller',
    description: 'Membangun sistem kendali motor BLDC dari nol memerlukan keahlian tinggi dalam elektronika daya dan pemrograman mikrokontroler. Tantangan utamanya adalah merancang algoritma kontrol yang efisien untuk memaksimalkan torsi pada putaran rendah sambil menjaga suhu motor tetap stabil saat berakselerasi pada kecepatan tinggi.',
    image: bgCard,
  },
  {
    id: 'phase-03',
    title: 'Electrical & Technology',
    subtitle: 'Telemetry & ECU Wiring',
    description: 'Jantung dan otak kendaraan mulai dihidupkan. Tim kelistrikan secara teliti merakit sistem controller, Battery Management System (BMS), dan jaringan sensor telemetri dari nol. Tantangannya adalah merancang arsitektur kelistrikan yang efisien, stabil, dan tahan terhadap noise elektromagnetik di area sasis yang sangat terbatas.',
    image: arunaBg,
  },
  {
    id: 'phase-04',
    title: 'Software Technical',
    subtitle: 'Dyno Test & Track Testing',
    description: 'Momen pembuktian. Kendaraan diuji secara ekstrem di atas dynamometer dan aspal lintasan nyata untuk mengukur efisiensi riil dan mengkalibrasi ulang parameter ECU. Tantangan terbesarnya adalah menemukan titik puncak efisiensi (sweet spot) kinerja motor dan mesin di berbagai kondisi cuaca dan suhu lintasan ekstrem.',
    image: lingsarBg,
  }
];

const About = () => {
  const [activePhase, setActivePhase] = useState(0);
  const [activeTab, setActiveTab] = useState('stats');
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="pt-20 min-h-screen bg-khad-dark text-slate-300 font-sans">

      {/* 1. Hero Section */}
      <section data-aos="fade-up" className="relative overflow-hidden h-screen min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full z-0">
          <img data-aos="fade-up" src={bgHero} alt="KHAD Team Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-khad-dark via-khad-dark/40 to-transparent"></div>
        </div>
        <div className="relative z-10 px-4 text-center w-full">
          <h1 data-aos="fade-up" className="text-5xl md:text-3xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-300 drop-shadow-2xl tracking-tight uppercase">
            About Us
          </h1>
        </div>
      </section>

      {/* 2. Quick Metrics / Stats Banner - Flowbite Full Width Tabs Card */}
      <section data-aos="fade-up" className="w-full px-3 sm:px-6 lg:px-8 xl:px-12 py-12">
        <div className="w-full bg-khad-card border border-khad-border rounded-lg shadow-sm">
          <div className="sm:hidden">
            <label htmlFor="tabs" className="sr-only">Select tab</label>
            <select
              id="tabs"
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
              className="bg-khad-dark border-0 border-b border-khad-border text-white text-sm rounded-t-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5"
            >
              <option value="stats">Statistics</option>
              <option value="about">About</option>
              <option value="achievements">Achievements</option>
            </select>
          </div>
          <ul className="hidden text-sm font-medium text-center text-slate-400 divide-x divide-khad-border rounded-lg sm:flex" id="fullWidthTab" role="tablist">
            <li className="w-full">
              <button
                id="stats-tab"
                onClick={() => setActiveTab('stats')}
                type="button"
                role="tab"
                aria-controls="stats"
                aria-selected={activeTab === 'stats'}
                className={`inline-block w-full p-4 rounded-tl-lg focus:outline-none transition-colors ${activeTab === 'stats' ? 'bg-khad-dark text-white' : 'bg-khad-card hover:bg-khad-dark hover:text-white'}`}
              >
                Statistics
              </button>
            </li>
            <li className="w-full">
              <button
                id="about-tab"
                onClick={() => setActiveTab('about')}
                type="button"
                role="tab"
                aria-controls="about"
                aria-selected={activeTab === 'about'}
                className={`inline-block w-full p-4 focus:outline-none transition-colors ${activeTab === 'about' ? 'bg-khad-dark text-white' : 'bg-khad-card hover:bg-khad-dark hover:text-white'}`}
              >
                About
              </button>
            </li>
            <li className="w-full">
              <button
                id="achievements-tab"
                onClick={() => setActiveTab('achievements')}
                type="button"
                role="tab"
                aria-controls="achievements"
                aria-selected={activeTab === 'achievements'}
                className={`inline-block w-full p-4 rounded-tr-lg focus:outline-none transition-colors ${activeTab === 'achievements' ? 'bg-khad-dark text-white' : 'bg-khad-card hover:bg-khad-dark hover:text-white'}`}
              >
                Achievements
              </button>
            </li>
          </ul>

          <div id="fullWidthTabContent" className="border-t border-khad-border">
            <div className={`p-4 bg-khad-dark rounded-b-lg md:p-8 ${activeTab === 'stats' ? 'block' : 'hidden'}`} id="stats" role="tabpanel" aria-labelledby="stats-tab">
              <dl ref={statsRef} className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-white sm:grid-cols-4 xl:grid-cols-4 sm:p-8">
                {[
                  { icon: Zap, label: "Lingsar EV Efficiency", number: 600, unit: "km/kWh", suffix: "" },
                  { icon: Flame, label: "Aruna Diesel Efficiency", number: 400, unit: "km/L", suffix: "" },
                  { icon: Activity, label: "Telemetry System", textValue: "Custom", unit: "", suffix: " Built" },
                  { icon: Droplets, label: "Emission Target", number: 0, unit: "", suffix: " %" },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col items-center justify-center text-center transition-all duration-700 ease-out ${statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: `${idx * 150}ms` }}
                  >
                    <dt className="mb-2 text-3xl md:text-4xl font-extrabold text-white flex items-baseline justify-center">
                      {stat.number !== undefined ? (
                        statsInView ? <CountUpComponent end={stat.number} duration={2.5} /> : "0"
                      ) : (
                        stat.textValue
                      )}
                      <span className="text-2xl md:text-3xl ml-1">{stat.unit}</span>
                      <span className="text-xl md:text-2xl text-slate-400 font-medium ml-1">{stat.suffix}</span>
                    </dt>
                    <dd className="text-slate-400 flex items-center gap-2 mt-1">
                      <stat.icon className="w-4 h-4 text-emerald-400" />
                      {stat.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className={`p-4 bg-khad-dark rounded-b-lg md:p-8 ${activeTab === 'about' ? 'block' : 'hidden'}`} id="about" role="tabpanel" aria-labelledby="about-tab">
              <div className="text-center max-w-3xl mx-auto py-6">
                <h2 data-aos="fade-up" className="mb-4 text-2xl md:text-3xl font-extrabold tracking-tight text-white">K.H Ahmad Dahlan Team</h2>
                <p data-aos="fade-up" className="text-slate-400 text-base md:text-lg leading-relaxed">
                  KHAD Team adalah salah satu Unit Kegiatan Mahasiswa di UMY yang berfokus pada pengembangan penggunaan energi ramah lingkungan, terutama pada kendaraan bertenaga listrik. Oleh karena itu, Tim ini terdiri dari mahasiswa-mahasiswa terpilih yang diharapkan dapat berkontibusi besar untuk dapat menjawab tantangan isu krisis energi yang menjadi kekhawatiran terbesar dunia. Dalam hal ini KHAD Team melakukan pengembangan mobil ramah lingkungan.
                </p>
              </div>
            </div>

            <div className={`p-4 bg-khad-dark rounded-b-lg md:p-8 ${activeTab === 'achievements' ? 'block' : 'hidden'}`} id="achievements" role="tabpanel" aria-labelledby="achievements-tab">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-khad-card border border-khad-border p-6 rounded-xl hover:border-emerald-500/50 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-emerald-500/10 rounded-lg">
                      <Target className="w-6 h-6 text-emerald-400" />
                    </div>
                    <h3 data-aos="fade-up" className="text-xl font-bold text-white">Kontes Mobil Hemat Energi (KMHE)</h3>
                  </div>
                  <p data-aos="fade-up" className="text-slate-400 leading-relaxed">
                    2020 Lingsar EV - 3rd Sistem Kontrol & Kelistrikan <br></br>
                    2021 Lingsar EV -  Penghargaan Kendaraan Paling Handal <br></br>
                    2023 Lingsar EV - 3rd Kontes Mobil Hemat Energi <br></br>
                    2025 Aruna Diesel - 4th Kontes Mobil Hemat Energi

                  </p>
                </div>

                <div className="bg-khad-card border border-khad-border p-6 rounded-xl hover:border-cyan-500/50 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-cyan-500/10 rounded-lg">
                      <Zap className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h3 data-aos="fade-up" className="text-xl font-bold text-white">Shell Eco Marathon</h3>
                  </div>
                  <p data-aos="fade-up" className="text-slate-400 leading-relaxed">
                    2023 Lingsar EV - 7th Shell Eco-Marathon Asia Pacific & Middle East <br></br>
                    2024 Lingsar EV - 3rd Shell Eco-Marathon Asia Pacific & Middle East
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Engineering Phases Section */}
      <section data-aos="fade-up" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-2xl md:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-white to-slate-400 mb-4 tracking-tight">
            Building The Future <br className="hidden md:block" />
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">From aerodynamic simulations to track testing, take a look at the four crucial phases in the creation of our energy-efficient vehicle.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">
          {/* Left: Vertical Steps */}
          <div className="w-full lg:w-5/12 relative flex">
            {/* Glowing Line */}
            <div className="absolute left-0 top-6 bottom-6 w-1 bg-khad-border/50 rounded-full overflow-hidden hidden sm:block">
              <div
                className="absolute left-0 w-full bg-emerald-500 shadow-[0_0_15px_#10b981] transition-all duration-500 ease-in-out rounded-full"
                style={{
                  top: `${(activePhase * 25)}%`,
                  height: '25%'
                }}
              ></div>
            </div>

            <div className="flex flex-col justify-between w-full sm:pl-8 space-y-4">
              {phases.map((phase, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl cursor-pointer transition-all duration-300 ${activePhase === idx ? 'bg-khad-card/80 border border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.1)]' : 'hover:bg-khad-card/40 border border-transparent opacity-60 hover:opacity-100'}`}
                  onMouseEnter={() => setActivePhase(idx)}
                  onClick={() => setActivePhase(idx)}
                >
                  <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center font-bold text-base sm:text-lg font-heading transition-colors duration-300 ${activePhase === idx ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50' : 'bg-khad-dark border border-khad-border text-slate-500'}`}>
                    0{idx + 1}
                  </div>
                  <div>
                    <h3 className={`text-lg sm:text-xl font-bold font-heading transition-colors duration-300 leading-tight ${activePhase === idx ? 'text-emerald-400' : 'text-white'}`}>{phase.subtitle}</h3>
                    <p className={`mt-1 text-xs sm:text-sm font-medium transition-colors duration-300 ${activePhase === idx ? 'text-slate-300' : 'text-slate-500'}`}>{phase.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Big Image and Story */}
          <div className="w-full lg:w-7/12 flex flex-col">
            <div className="relative rounded-3xl overflow-hidden bg-khad-card border border-khad-border aspect-[4/3] sm:aspect-video mb-8 group shadow-lg">
              {phases.map((phase, idx) => (
                <img
                  key={idx}
                  src={phase.image}
                  alt={phase.subtitle}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${activePhase === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-khad-dark via-transparent to-transparent z-20"></div>
              {/* Glow overlay on image hover */}
              <div className="absolute inset-0 bg-emerald-500/10 mix-blend-overlay z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div className="grid grid-cols-1 bg-khad-card/30 rounded-2xl border border-khad-border/50 items-start">
              {phases.map((phase, idx) => (
                <div
                  key={idx}
                  className={`col-start-1 row-start-1 p-6 sm:p-8 transition-all duration-500 ease-in-out ${activePhase === idx ? 'opacity-100 translate-y-0 pointer-events-auto z-10' : 'opacity-0 translate-y-4 pointer-events-none z-0'}`}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
                    <Zap className="w-3.5 h-3.5" />
                    Technical Challenge
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-white font-heading mb-3">{phase.subtitle}</h4>
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA Banner */}
      <section data-aos="fade-up" className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center border-t border-khad-border">
        <h1 data-aos="fade-up" className="text-2xl md:text-6xl font-semibold italic text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-white to-slate-400 mb-4 tracking-tight">
          Be Part of <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">the Future</span> <br className="hidden md:block" />
        </h1>
        <p data-aos="fade-up" className="text-lg text-slate-400 mb-10">
          Interested in learning more about our vehicle specifications or collaborating as a sponsor?
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/vehicles" className="w-full sm:w-auto px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-khad-dark font-bold transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] flex items-center justify-center gap-2 group">
            Explore Vehicles
            <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/sponsors" className="w-full sm:w-auto px-8 py-4 rounded-full border border-khad-border hover:border-emerald-500/50 bg-khad-card hover:bg-khad-card/80 text-white font-medium transition-all duration-300 flex items-center justify-center gap-2">
            Sponsorship Info
          </Link>
        </div>
      </section>

    </div>
  );
};

export default About;
