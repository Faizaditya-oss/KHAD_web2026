import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Users, ArrowRight,
  Cpu, Wrench, Shield, Award, Sparkles, Layers, Phone,
  Video,
  Cog,
  BrickWallFire,
  Handshake,
  Zap,
  Hammer,
  CarIcon
} from 'lucide-react';

const InstagramIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);
import khadTeamGroup from '../assets/divisions/Innovators.JPG';
import baniElec from '../assets/electrical/bani.JPG';
import faizElec from '../assets/electrical/faiz.JPG';
import saktiElec from '../assets/electrical/sakti.JPG';
import bimaImg from '../assets/managers/bima.JPG';
import dawaiImg from '../assets/managers/dawai.JPG';
import majidImg from '../assets/managers/majid.JPG';
import ramadhanImg from '../assets/managers/ramadhan.JPG';
import aydinImg from '../assets/mechanic/aydin.JPG';
import farisImg from '../assets/mechanic/faris.JPG';
import firmanImg from '../assets/mechanic/firman.JPG';
import ilhamImg from '../assets/mechanic/ilham.JPG';
import ulinImg from '../assets/mechanic/ulin.JPG';
import yusufImg from '../assets/mechanic/yusuf.JPG';
import beniImg from '../assets/body/beni.JPG';
import fatihImg from '../assets/body/fatih.JPG';
import imronImg from '../assets/body/imron.JPG';
import bagusImg from '../assets/nonteknis/bagus.JPG';
import erjiImg from '../assets/nonteknis/erji.JPG';
import hisyamImg from '../assets/nonteknis/hisyam.JPG';

// TechAvatar fallback component for professional look
const TechAvatar = ({ initials, accentClass }) => {
  return (
    <div className="w-full h-full bg-[#061E14] relative flex items-center justify-center overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#10B981_1px,transparent_1px),linear-gradient(to_bottom,#10B981_1px,transparent_1px)] bg-[size:16px_16px]"></div>

      {/* Glow Rings */}
      <div className="absolute w-28 h-28 rounded-full border border-emerald-500/10 animate-[spin_20s_linear_infinite]"></div>
      <div className="absolute w-36 h-36 rounded-full border border-dashed border-emerald-500/5 animate-[spin_30s_linear_infinite_reverse]"></div>

      {/* Tech HUD Corner Accents */}
      <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-emerald-500/20"></div>
      <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-emerald-500/20"></div>
      <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-emerald-500/20"></div>
      <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-emerald-500/20"></div>

      {/* Center initials */}
      <div className={`text-3xl sm:text-4xl font-heading font-extrabold tracking-widest ${accentClass || 'text-emerald-400'} opacity-80 select-none z-10`}>
        {initials}
      </div>
    </div>
  );
};

// Image Loader with TechAvatar Fallback
const MemberImage = ({ src, initials, alt, accentClass }) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="w-full h-full relative overflow-hidden bg-[#061E14]">
      {hasError || !src ? (
        <TechAvatar initials={initials} accentClass={accentClass} />
      ) : (
        <>
          {isLoading && (
            <div className="absolute inset-0 z-10">
              <TechAvatar initials={initials} accentClass={accentClass} />
            </div>
          )}
          <img data-aos="fade-up"
            src={src}
            alt={alt}
            onError={() => setHasError(true)}
            onLoad={() => setIsLoading(false)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </>
      )}
    </div>
  );
};

const teamMembers = [
  // Managers Division
  {
    name: 'Majid',
    role: 'Mechanical Engineering 23',
    division: 'Managers',
    initials: 'MJ',
    isLead: false,
    skills: ['Technical Strategy', 'Quality Control'],
    bio: 'Memimpin arah strategis KHAD Team UMY dalam riset kendaraan hemat energi global dan koordinasi divisi teknis. ',
    photo: majidImg,
    instagram: 'https://instagram.com'
  },

  {
    name: 'Dawai',
    role: 'Mechanical Engineering 23',
    division: 'Managers',
    initials: 'DW',
    isLead: false,
    skills: ['Scrum', 'Operations Management', 'Budgeting', 'Public Relations'],
    bio: 'Mengelola lini masa proyek, perizinan, dan logistik pembuatan mobil dari fase simulasi hingga testing.',
    photo: dawaiImg,
    instagram: 'https://instagram.com'
  },

  {
    name: 'Bima',
    role: 'Mechanical Engineering 23',
    division: 'Managers',
    initials: 'BM',
    isLead: false,
    skills: ['Leadership', 'Vehicle Dynamics', 'Project Planning', 'Strategy'],
    bio: 'Bertanggung jawab pada operasional harian tim Aruna Diesel Prototype',
    photo: bimaImg,
    instagram: 'https://instagram.com'
  },

  {
    name: 'Ramadhan',
    role: 'Mechanical Engineering 23',
    division: 'Managers',
    initials: 'RM',
    isLead: false,
    skills: ['Operations', 'Logistics'],
    bio: 'Bertanggung jawab pada operasional harian tim Lingsar Prototype EV 3.0.',
    photo: ramadhanImg,
    instagram: 'https://instagram.com'
  },

  // Mechanic & Engine Division

  {
    name: 'Yusuf',
    role: 'Mechanical Engineering 24',
    division: 'Mechanic & Engine',
    initials: 'YS',
    isLead: false,
    skills: ['Pneumatics', 'Drive Train'],
    bio: 'Meningkatkan efisiensi sistem roda gigi dan penggerak utama.',
    photo: yusufImg,
    instagram: 'https://instagram.com'
  },


  {
    name: 'Ilham',
    role: 'Automotive Engineering 24',
    division: 'Mechanic & Engine',
    initials: 'IH',
    isLead: false,
    skills: ['CAD Modeling', 'CNC Machining'],
    bio: 'Merancang dan mengembangkan bagian kaki-kaki kendaraan',
    photo: ilhamImg,
    instagram: 'https://instagram.com'
  },
  {
    name: 'Ulin',
    role: 'Electrical Engineering 24',
    division: 'Mechanic & Engine',
    initials: 'UL',
    isLead: false,
    skills: ['TIG Welding', 'Chassis Tuning'],
    bio: 'Merancang dan mengembangkan sistem laju kendaraan.',
    photo: ulinImg,
    instagram: 'https://instagram.com'
  },

  {
    name: 'Aydin',
    role: 'Mechanical Engineering 25',
    division: 'Mechanic & Engine',
    initials: 'AD',
    isLead: false,
    skills: ['SolidWorks', 'Engine Tuning'],
    bio: 'Fokus pada mekanikal dan mesin kendaraan.',
    photo: aydinImg,
    instagram: 'https://instagram.com'
  },
  {
    name: 'Faris',
    role: 'Electrical Engineering 25',
    division: 'Mechanic & Engine',
    initials: 'FR',
    isLead: false,
    skills: ['Mechanical Design', 'Fabrication'],
    bio: 'Terlibat dalam perakitan komponen mekanis dan transmisi daya.',
    photo: farisImg,
    instagram: 'https://instagram.com'
  },

  // Body & Manufacturing Division
  {
    name: 'Beni',
    role: 'Mechanical Engineering 24',
    division: 'Body & Manufacturing',
    initials: 'BN',
    isLead: false,
    skills: ['Carbon Layup', 'Fiberglass'],
    bio: 'Fokus pada fabrikasi chasis kendaraan.',
    photo: beniImg,
    instagram: 'https://instagram.com'
  },
  {
    name: 'Firman',
    role: 'Mechanical Engineering 24',
    division: 'Body & Manufacturing',
    initials: 'FM',
    isLead: false,
    skills: ['Engine Maintenance', 'Testing'],
    bio: 'Memastikan kinerja optimal pada sektor chasis kendaraan',
    photo: firmanImg,
    instagram: 'https://instagram.com'
  },
  {
    name: 'Fatih',
    role: 'Mechanical Engineering 24',
    division: 'Body & Manufacturing',
    initials: 'FT',
    isLead: false,
    skills: ['Surface Finishing', 'Metrology'],
    bio: 'Memastikan kualitas permukaan bodi dan keselarasan panel.',
    photo: fatihImg,
    instagram: 'https://instagram.com'
  },
  {
    name: 'Imron',
    role: 'Mechanical Engineering 25',
    division: 'Body & Manufacturing',
    initials: 'IM',
    isLead: false,
    skills: ['Aerodynamics', 'Mold Making'],
    bio: 'Merancang cetakan bodi serta pengembangan sistem software body.',
    photo: imronImg,
    instagram: 'https://instagram.com'
  },

  // Electrical & Telemetry Division
  {
    name: 'Faiz Aditya',
    role: 'Technology Information 24',
    division: 'Electrical & Technology',
    initials: 'FZ',
    isLead: false,
    skills: ['LoRa Protocols', 'BMS Design', 'Web Developer', 'Microcontroller development'],
    bio: 'Merancang arsitektur kelistrikan kendaraan, modul pengaman BMS baterai, dan integrasi sensor telemetri.',
    photo: faizElec,
    instagram: 'https://instagram.com'
  },
  {
    name: 'Bani Taufick Isya',
    role: 'Electrical Engineering 24',
    division: 'Electrical & Technology',
    initials: 'BN',
    isLead: false,
    skills: ['PCB Design', 'LoRa Protocols', 'WebSockets', 'Electrical Wiring'],
    bio: 'Mengoptimalkan controller penggerak motor BLDC',
    photo: baniElec,
    instagram: 'https://instagram.com'
  },
  {
    name: 'Sakti Wira',
    role: 'Electrical Engineering 25',
    division: 'Electrical & Technology',
    initials: 'SK',
    isLead: false,
    skills: ['Wiring Harness Design', 'Sensors Calibration', 'Electrical Diesel Prototype'],
    bio: 'Mengoptimalkan jalur kabel internal agar minim hambatan dan bebas noise elektromagnetik dari motor listrik.',
    photo: saktiElec,
    instagram: 'https://instagram.com'
  },

  // Non-Technical Division
  {
    name: 'Erji',
    role: 'Mechanical Engineering 23',
    division: 'Non-Technical',
    initials: 'EJ',
    isLead: false,
    skills: ['Social Media Management', 'CapCut', 'Canva', 'Instagram', 'TikTok', 'Gmail', 'Sponsorship'],
    bio: 'Mengelola sosial media dan partnership',
    photo: erjiImg,
    instagram: 'https://instagram.com'
  },

  {
    name: 'Bagus',
    role: 'Mechanical Engineering 23',
    division: 'Non-Technical',
    initials: 'BG',
    isLead: false,
    skills: ['CapCut', 'Canva', 'Instagram', 'TikTok', 'Gmail', 'Sponsorship'],
    bio: 'Membuat dan mengedit video ',
    photo: bagusImg,
    instagram: 'https://instagram.com'
  },

  {
    name: 'Hisyam',
    role: 'Automotive Engineering 25',
    division: 'Non-Technical',
    initials: 'HS',
    isLead: false,
    skills: ['CapCut', 'Canva', 'Instagram', 'TikTok', 'Gmail', 'Sponsorship'],
    bio: 'Mengelola konten media dan branding',
    photo: hisyamImg,
    instagram: 'https://instagram.com'
  }
];

const divisionData = [
  { name: 'All', icon: Layers },
  { name: 'Managers', icon: Shield },
  { name: 'Mechanic & Engine', icon: Wrench },
  { name: 'Electrical & Technology', icon: Zap },
  { name: 'Non-Technical', icon: Handshake },
  { name: 'Body & Manufacturing', icon: CarIcon }
];

const Team = () => {
  const [activeDivision, setActiveDivision] = useState('All');

  // Filter members based on active division tab
  const filteredMembers = activeDivision === 'All'
    ? teamMembers
    : teamMembers.filter(member => member.division === activeDivision);

  // Group members into featured (leads) and standard members for layout structure
  const featuredMembers = filteredMembers.filter(member => member.isLead);
  const standardMembers = filteredMembers.filter(member => !member.isLead);

  return (
    <div className="pt-20 min-h-screen bg-[#061E14] text-slate-300 font-sans selection:bg-emerald-500/30 selection:text-white">

      {/* 1. Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Full Screen Background Image */}
        <img
          src={khadTeamGroup}
          alt="KHAD Team Innovators"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />


        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-[#061E14]/50 to-[#061E14]"></div>
        {/* <div className="absolute inset-0 z-10 flex items-center justify-center px-4 text-center">
          <h1 data-aos="fade-up" className="text-5xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-300 drop-shadow-2xl tracking-tight uppercase">
            THE INNOVATORS
          </h1>
        </div> */}
      </section>

      {/* 2. Filter Tabs Section */}
      <section data-aos="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="flex flex-wrap justify-center gap-3">
          {divisionData.map((div) => {
            const Icon = div.icon;
            const isSelected = activeDivision === div.name;
            return (
              <button
                key={div.name}
                onClick={() => setActiveDivision(div.name)}
                className={`group flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-heading font-bold uppercase tracking-wider transition-all duration-300 border ${isSelected
                  ? 'bg-emerald-500 text-[#061E14] border-white shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                  : 'bg-[#0B2A1E] text-slate-400 hover:text-white border-[#133E2B] hover:border-white'
                  }`}
              >
                <Icon className={`w-4 h-4 transition-colors duration-300 ${isSelected ? 'text-[#061E14]' : 'text-emerald-500/70 group-hover:text-white'}`} />
                {div.name}
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. Members Grid Section */}
      <section data-aos="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">

        {/* Featured / Division Leads Grid */}
        {featuredMembers.length > 0 && (
          <div className="mb-16">
            <h3 data-aos="fade-up" className="text-xs font-space-mono font-semibold text-emerald-400 tracking-widest uppercase mb-8 flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-400" />
              Division Directors & Leads
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredMembers.map((member, idx) => (
                <div
                  key={idx}
                  className="relative bg-[#0B2A1E] border border-[#133E2B] rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 sm:items-center hover:border-emerald-500/40 hover:-translate-y-1.5 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-300 group"
                >
                  {/* Glowing corners on hover */}
                  <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-transparent group-hover:border-white transition-all duration-300 rounded-tl-3xl"></div>
                  <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-transparent group-hover:border-white transition-all duration-300 rounded-tr-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-transparent group-hover:border-white transition-all duration-300 rounded-bl-3xl"></div>
                  <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-transparent group-hover:border-white transition-all duration-300 rounded-br-3xl"></div>

                  {/* Photo Frame */}
                  <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden flex-shrink-0 border border-[#133E2B]/80 relative bg-[#061E14] group-hover:border-emerald-500/25 transition-colors duration-300">
                    <MemberImage
                      src={member.photo}
                      initials={member.initials}
                      alt={member.name}
                      accentClass="text-emerald-400"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061E14]/65 via-transparent to-transparent"></div>
                  </div>

                  {/* Member Details */}
                  <div className="space-y-3 flex-grow">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[9px] font-space-mono font-bold px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase">
                        {member.division}
                      </span>
                      <span className="text-[9px] font-space-mono font-bold px-2.5 py-1 rounded bg-white/5 text-white/70 border border-white/10 uppercase">
                        LEAD
                      </span>
                    </div>

                    <h4 className="text-xl sm:text-2xl font-heading font-extrabold uppercase tracking-wide text-white">
                      {member.name}
                    </h4>

                    <p data-aos="fade-up" className="text-xs sm:text-sm font-space-mono font-bold text-emerald-400/90 uppercase tracking-wide">
                      {member.role}
                    </p>

                    <p data-aos="fade-up" className="text-xs sm:text-sm font-sans leading-relaxed text-slate-400">
                      {member.bio}
                    </p>

                    {/* Skill Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {member.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="text-[9px] font-space-mono px-2 py-0.5 rounded bg-black/20 text-slate-400 border border-[#133E2B]">
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Social links */}
                    <div className="flex items-center gap-3 pt-2">
                      <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-emerald-400 transition-colors duration-300 transform hover:scale-110">
                        <InstagramIcon className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Standard Members Grid */}
        {standardMembers.length > 0 && (
          <div>
            <h3 data-aos="fade-up" className="text-xs font-space-mono font-semibold text-slate-400 tracking-widest uppercase mb-8 flex items-center gap-2">
              <Wrench className="w-4 h-4 text-slate-500" />
              Specialists & Engineers
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {standardMembers.map((member, idx) => (
                <div
                  key={idx}
                  className="relative bg-[#0B2A1E] border border-[#133E2B] rounded-2xl p-5 hover:border-emerald-500/35 hover:-translate-y-1.5 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] transition-all duration-300 flex flex-col justify-between group"
                >
                  {/* Glowing corners on hover */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-transparent group-hover:border-emerald-500/40 transition-all duration-300 rounded-tl-2xl"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-transparent group-hover:border-emerald-500/40 transition-all duration-300 rounded-tr-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-transparent group-hover:border-emerald-500/40 transition-all duration-300 rounded-bl-2xl"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-transparent group-hover:border-emerald-500/40 transition-all duration-300 rounded-br-2xl"></div>

                  <div className="space-y-4">
                    {/* Photo Frame */}
                    <div className="w-full aspect-[4/3] rounded-xl overflow-hidden border border-[#133E2B]/50 relative bg-[#061E14] group-hover:border-emerald-500/20 transition-colors duration-300">
                      <MemberImage
                        src={member.photo}
                        initials={member.initials}
                        alt={member.name}
                        accentClass="text-slate-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#061E14]/80 via-transparent to-transparent"></div>
                    </div>

                    {/* Info */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[8px] font-space-mono px-2 py-0.5 rounded bg-black/40 text-emerald-400 border border-[#133E2B] uppercase">
                          {member.division}
                        </span>
                      </div>

                      <h4 className="text-lg font-heading font-extrabold uppercase tracking-wide text-white group-hover:text-emerald-400 transition-colors duration-300">
                        {member.name}
                      </h4>

                      <p data-aos="fade-up" className="text-xs font-space-mono font-medium text-slate-400 uppercase tracking-wide">
                        {member.role}
                      </p>

                      <p data-aos="fade-up" className="text-xs font-sans leading-relaxed text-slate-400">
                        {member.bio}
                      </p>
                    </div>
                  </div>

                  {/* Skills & Footer */}
                  <div className="space-y-3 mt-5 pt-4 border-t border-[#133E2B]/50">
                    <div className="flex flex-wrap gap-1">
                      {member.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="text-[9px] font-space-mono px-2 py-0.5 rounded bg-black/20 text-slate-400 border border-[#133E2B]/40">
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <p className='text-white text-xs font-space-mono font-medium uppercase tracking-wide'>Instagram</p>
                        <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="text-white transition-colors duration-300 transform hover:scale-110">
                          <InstagramIcon className="w-3.5 h-3.5" />
                        </a>
                      </div>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* 4. Bottom CTA Section - Recruitment info */}
      <section data-aos="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#0B2A1E] border border-[#133E2B] p-8 md:p-16 text-center">
          {/* Decorative grid pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:16px_16px]"></div>

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">


            <h2 data-aos="fade-up" className="text-3xl md:text-5xl font-heading font-extrabold uppercase tracking-wide text-white italic">
              JOIN OUR TEAM
            </h2>

            <p data-aos="fade-up" className="font-sans leading-relaxed text-slate-300 text-sm md:text-base text-red-600">
              BUILD TOGETHER & BECOMING CHAMPIONS TOGETHER
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#061E14] font-heading font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]"
              >
                Pendaftaran & Info
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/about"
                className="w-full sm:w-auto px-8 py-4 rounded-xl border border-[#133E2B] hover:border-emerald-500/40 hover:bg-[#061E14] text-slate-300 font-heading font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2"
              >
                Our Process
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Team;
