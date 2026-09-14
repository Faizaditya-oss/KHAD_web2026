import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, ArrowRight, 
  Cpu, Wrench, Shield, Award, Sparkles, Layers, Phone,
  Video,
  Cog,
  BrickWallFire,
  Handshake,
  Zap
} from 'lucide-react';

const GithubIcon = ({ className }) => (
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
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className }) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
import bgHome from '../assets/bgHome/LandPage.jpg';
import khadTeamGroup from '../assets/divisions/Team.JPG';

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
          <img 
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
  // Executive Division
  {
    name: 'Faiz Aditya',
    role: 'General Manager',
    division: 'Executive',
    initials: 'FA',
    isLead: true,
    skills: ['Leadership', 'Vehicle Dynamics', 'Project Planning', 'Strategy'],
    bio: 'Memimpin arah strategis KHAD Team UMY dalam riset kendaraan hemat energi global dan koordinasi divisi teknis.',
    photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400&h=400',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com'
  },
  {
    name: 'Daffa Zhalif',
    role: 'Project Manager',
    division: 'Executive',
    initials: 'DZ',
    isLead: false,
    skills: ['Scrum', 'Operations Management', 'Budgeting', 'Public Relations'],
    bio: 'Mengelola lini masa proyek, perizinan, dan logistik pembuatan mobil dari fase simulasi hingga testing.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com'
  },
  
  // Mechanical Division
  {
    name: 'Rizky Perdana',
    role: 'Chief Mechanical Engineer',
    division: 'Mechanical',
    initials: 'RP',
    isLead: true,
    skills: ['SolidWorks', 'CFD Simulation', 'FEA Analysis', 'Carbon Fabrication'],
    bio: 'Bertanggung jawab atas desain sasis monocoque serat karbon dan simulasi aerodinamika kendaraan.',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com'
  },
  {
    name: 'Bagas Adi',
    role: 'Aerodynamics Specialist',
    division: 'Mechanical',
    initials: 'BA',
    isLead: false,
    skills: ['ANSYS Fluent', 'CAD Modeling', 'Additive Manufacturing'],
    bio: 'Mengembangkan model aerodinamis kendaraan dengan koefisien hambatan udara minimal untuk hemat energi.',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com'
  },
  {
    name: 'Hendra Wijaya',
    role: 'Chassis & Body Fabricator',
    division: 'Mechanical',
    initials: 'HW',
    isLead: false,
    skills: ['TIG Welding', 'Carbon Layup', 'CNC Milling', 'Metrology'],
    bio: 'Memastikan presisi tinggi pada proses manufaktur bodi serat karbon komposit dan kekuatan struktur sasis.',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com'
  },

  // Electrical & Telemetry Division
  {
    name: 'Fadhil Muhammad',
    role: 'Chief Electrical Engineer',
    division: 'Electrical & Telemetry',
    initials: 'FM',
    isLead: true,
    skills: ['PCB Design', 'STM32 Microcontrollers', 'BMS Design', 'Power Electronics'],
    bio: 'Merancang arsitektur kelistrikan kendaraan, modul pengaman BMS baterai, dan integrasi sensor telemetri.',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=400',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com'
  },
  {
    name: 'Aditya Pratama',
    role: 'Telemetry & Firmware Developer',
    division: 'Electrical & Telemetry',
    initials: 'AP',
    isLead: false,
    skills: ['ESP32 RTOS', 'C++', 'LoRa Protocols', 'WebSockets'],
    bio: 'Mengembangkan sistem telemetri berbasis radio frekuensi untuk mentransmisikan data performa mobil secara realtime.',
    photo: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=400&h=400',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com'
  },
  {
    name: 'Satria Yudha',
    role: 'Wiring & Power Distribution',
    division: 'Electrical & Telemetry',
    initials: 'SY',
    isLead: false,
    skills: ['ECU Tuning', 'Wiring Harness Design', 'Sensors Calibration'],
    bio: 'Mengoptimalkan jalur kabel internal agar minim hambatan dan bebas noise elektromagnetik dari motor listrik.',
    photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=400&h=400',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com'
  },

  // Non-Technical Division
  {
    name: 'Anisa Nurul',
    role: 'Head of PR & Sponsorship',
    division: 'Non-Technical',
    initials: 'AN',
    isLead: true,
    skills: ['Public Relations', 'B2B Sponsorship', 'Social Media Branding', 'Copywriting'],
    bio: 'Menghubungkan KHAD Team dengan sponsor industri, mengelola media sosial, dan mengarahkan kampanye branding tim.',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=400',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com'
  },
  {
    name: 'Farhan Syah',
    role: 'Creative Designer & Media',
    division: 'Non-Technical',
    initials: 'FS',
    isLead: false,
    skills: ['Figma UI/UX', 'Video Editing', 'Corporate Identity'],
    bio: 'Membuat aset media visual, mengedit video dokumentasi tim, dan merancang identitas grafis sponsor.',
    photo: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&q=80&w=400&h=400',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com'
  }
];

const divisionData = [
  { name: 'All', icon: Layers },
  { name: 'Managers', icon: Shield },
  { name: 'Engine', icon: Wrench },
  { name: 'Electrical ', icon: Zap },
  { name: 'Mechanic', icon: Wrench },
  { name: 'Manufacturing', icon: BrickWallFire },
  { name: 'Sponsorship', icon: Handshake },
  { name: 'Media', icon: Video }
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
      <section className="relative overflow-hidden pt-32 pb-20 border-b border-[#133E2B]">
        {/* Background Grid & Gradient */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img src={bgHome} alt="KHAD Team Workshop" className="w-full h-full object-cover opacity-10 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061E14] via-[#061E14]/90 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-2xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-white to-slate-400 mb-4 tracking-tight">
              Meet the Engineers <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-100 to-white">
                & Innovators
              </span>
            </h1>
            <p className="max-w-4xl mx-auto text-lg md:text-md text-slate-400 mb-12 leading-relaxed">
             A cross disciplinary collaboration of students at Universitas Muhammadiyah Yogyakarta who are dedicating their knowledge and creativity to designing eco-friendly vehicles for the future.
            </p>
          </div>

          {/* Core Team Group Photo */}
          <div className="max-w-5xl mx-auto relative group mt-12">
            {/* Ambient Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-emerald-800 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-700"></div>
            
            {/* Image Border frame */}
            <div className="relative bg-[#0B2A1E] rounded-3xl border border-[#133E2B] overflow-hidden shadow-2xl">
              <img 
                src={khadTeamGroup} 
                alt="KHAD Team Group Photo" 
                className="w-full aspect-[16/9] md:aspect-[21/9] object-cover object-center transform group-hover:scale-[1.02] transition-transform duration-700" 
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              
            </div>
          </div>
        </div>
      </section>

      {/* 2. Filter Tabs Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="flex flex-wrap justify-center gap-3">
          {divisionData.map((div) => {
            const Icon = div.icon;
            const isSelected = activeDivision === div.name;
            return (
              <button
                key={div.name}
                onClick={() => setActiveDivision(div.name)}
                className={`group flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-heading font-bold uppercase tracking-wider transition-all duration-300 border ${
                  isSelected
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        
        {/* Featured / Division Leads Grid */}
        {featuredMembers.length > 0 && (
          <div className="mb-16">
            <h3 className="text-xs font-space-mono font-semibold text-emerald-400 tracking-widest uppercase mb-8 flex items-center gap-2">
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
                    
                    <p className="text-xs sm:text-sm font-space-mono font-bold text-emerald-400/90 uppercase tracking-wide">
                      {member.role}
                    </p>
                    
                    <p className="text-xs sm:text-sm font-sans leading-relaxed text-slate-400">
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
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-emerald-400 transition-colors duration-300 transform hover:scale-110">
                        <LinkedinIcon className="w-4 h-4" />
                      </a>
                      <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-emerald-400 transition-colors duration-300 transform hover:scale-110">
                        <GithubIcon className="w-4 h-4" />
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
            <h3 className="text-xs font-space-mono font-semibold text-slate-400 tracking-widest uppercase mb-8 flex items-center gap-2">
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
                      
                      <p className="text-xs font-space-mono font-medium text-slate-400 uppercase tracking-wide">
                        {member.role}
                      </p>

                      <p className="text-xs font-sans leading-relaxed text-slate-400">
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
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-emerald-400 transition-colors duration-300 transform hover:scale-110">
                          <LinkedinIcon className="w-3.5 h-3.5" />
                        </a>
                        <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-emerald-400 transition-colors duration-300 transform hover:scale-110">
                          <GithubIcon className="w-3.5 h-3.5" />
                        </a>
                      </div>
                      <span className="text-[8px] font-space-mono text-emerald-500/30 uppercase tracking-widest">
                        KHAD_MEMBER
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* 4. Bottom CTA Section - Recruitment info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#0B2A1E] border border-[#133E2B] p-8 md:p-16 text-center">
          {/* Decorative grid pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:16px_16px]"></div>
          
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              JOIN THE CREW
            </div>
            
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold uppercase tracking-wide text-white">
              BUILD THE CARS OF TOMORROW
            </h2>
            
            <p className="font-sans leading-relaxed text-slate-300 text-sm md:text-base">
              Pendaftaran anggota baru KHAD TEAM UMY dibuka setiap awal semester. Kami mencari talenta terbaik di bidang perancangan sasis, simulasi CFD, pemrograman mikrokontroler, telemetri, serta manajemen relasi sponsor.
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
