import React from 'react';
import { ArrowRight, Mail, Phone, MapPin, CheckCircle2, TrendingUp, Users, Globe, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

import sponsor1 from '../assets/sponsor/sponsor1bnr.png';
import sponsor2 from '../assets/sponsor/sponsor2.png';
import sponsor3 from '../assets/sponsor/sponsor3.png';
import sponsor4 from '../assets/sponsor/sponsor4.png';
import sponsor5 from '../assets/sponsor/sponsor5.png';
import sponsor6 from '../assets/sponsor/sponsor6.png';
import sponsor7 from '../assets/sponsor/sponsor7.png';

const sponsorImages = [sponsor1, sponsor2, sponsor3, sponsor4, sponsor5, sponsor6, sponsor7];

const benefits = [
  { icon: TrendingUp, title: "Brand Exposure", desc: "Gain massive visibility at national and international energy-efficient vehicle competitions." },
  { icon: Globe, title: "Media Coverage", desc: "Feature in our active social media channels, press releases, and partner publications." },
  { icon: Users, title: "Talent Access", desc: "Connect with top engineering, design, and management students from Universitas Muhammadiyah Yogyakarta." },
  { icon: CheckCircle2, title: "CSR Alignment", desc: "Support sustainable technology and youth education, aligning with green corporate social responsibility goals." }
];

const Sponsors = () => {
  return (
    <div className="min-h-screen bg-khad-dark pt-28 pb-20">
      

      {/* Why Sponsor Us / Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Why Partner With Us?</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, idx) => (
            <div key={idx} className="bg-khad-card/50 border border-khad-border p-8 rounded-3xl hover:border-emerald-500/40 hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-colors duration-500"></div>
              
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sponsorship Tiers Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Partnership Tiers</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">We offer flexible partnership packages designed to provide maximum value and visibility for your brand.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 perspective-[1000px]">
          
          {/* Platinum Tier */}
          <div className="card bg-gradient-to-b from-[#0B2A1E] to-khad-dark border border-emerald-500/50 shadow-[0_10px_30px_rgba(16,185,129,0.1)] hover:shadow-[0_30px_60px_rgba(16,185,129,0.4)] transition-all duration-500 hover:-translate-y-4 hover:scale-[1.03] hover:rotate-y-[-5deg] hover:rotate-x-[5deg] group relative overflow-hidden transform-gpu w-full">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-emerald-500/20 blur-3xl rounded-full group-hover:bg-emerald-500/30 transition-all duration-500"></div>
            <div className="card-body p-5 sm:p-6 lg:p-7 relative z-10 flex flex-col h-full overflow-hidden">
              <div className="badge badge-success text-[10px] sm:text-xs absolute top-3 right-3 sm:top-4 sm:right-4 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)] border-none whitespace-nowrap">Most Popular</div>
              <h2 className="card-title text-2xl sm:text-3xl font-extrabold text-emerald-400 mb-1 drop-shadow-md break-words">Platinum</h2>
              <p className="text-xs sm:text-sm text-slate-300 border-b border-emerald-500/20 pb-4 mb-4 flex-grow-0 break-words">Maximum exposure & integration.</p>
              <ul className="space-y-2 sm:space-y-3 flex-grow mb-6">
                <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-slate-200 break-words leading-tight"><CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 shrink-0 drop-shadow-sm" /> <span>Extra large logo on vehicle</span></li>
                <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-slate-200 break-words leading-tight"><CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 shrink-0 drop-shadow-sm" /> <span>Exclusive media coverage</span></li>
                <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-slate-200 break-words leading-tight"><CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 shrink-0 drop-shadow-sm" /> <span>VIP access to paddock</span></li>
                <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-slate-200 break-words leading-tight"><CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 shrink-0 drop-shadow-sm" /> <span>Prime spot on apparel & website</span></li>
              </ul>
              <div className="card-actions justify-center mt-auto w-full">
                <button className="btn btn-sm sm:btn-md btn-outline btn-success w-full group-hover:bg-emerald-500 group-hover:text-khad-dark transition-colors border-emerald-500/50 shadow-lg group-hover:shadow-emerald-500/50 text-xs sm:text-sm">Partner With Us</button>
              </div>
            </div>
          </div>

          {/* Gold Tier */}
          <div className="card bg-khad-card border border-amber-500/30 shadow-[0_10px_30px_rgba(251,191,36,0.05)] hover:shadow-[0_30px_60px_rgba(251,191,36,0.25)] transition-all duration-500 hover:-translate-y-4 hover:scale-[1.03] hover:rotate-y-[-2deg] hover:rotate-x-[2deg] group relative overflow-hidden transform-gpu w-full">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-amber-500/10 blur-3xl rounded-full group-hover:bg-amber-500/20 transition-all duration-500"></div>
            <div className="card-body p-5 sm:p-6 lg:p-7 relative z-10 flex flex-col h-full overflow-hidden">
              <h2 className="card-title text-2xl sm:text-3xl font-extrabold text-amber-400 mb-1 drop-shadow-md break-words">Gold</h2>
              <p className="text-xs sm:text-sm text-slate-400 border-b border-amber-500/20 pb-4 mb-4 flex-grow-0 break-words">Excellent visibility and reach.</p>
              <ul className="space-y-2 sm:space-y-3 flex-grow mb-6">
                <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-slate-300 break-words leading-tight"><CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 shrink-0" /> <span>Large logo on vehicle</span></li>
                <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-slate-300 break-words leading-tight"><CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 shrink-0" /> <span>Logo on team apparel</span></li>
                <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-slate-300 break-words leading-tight"><CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 shrink-0" /> <span>Prominent social media presence</span></li>
                <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-slate-300 break-words leading-tight"><CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 shrink-0" /> <span>Logo on website</span></li>
              </ul>
              <div className="card-actions justify-center mt-auto w-full">
                <button className="btn btn-sm sm:btn-md btn-outline btn-warning w-full group-hover:bg-amber-500 group-hover:text-khad-dark transition-colors border-amber-500/50 shadow-lg group-hover:shadow-amber-500/30 text-xs sm:text-sm">Partner With Us</button>
              </div>
            </div>
          </div>

          {/* Silver Tier */}
          <div className="card bg-khad-card border border-slate-400/30 shadow-[0_10px_30px_rgba(148,163,184,0.05)] hover:shadow-[0_30px_60px_rgba(148,163,184,0.2)] transition-all duration-500 hover:-translate-y-4 hover:scale-[1.03] hover:rotate-y-[2deg] hover:rotate-x-[2deg] group relative overflow-hidden transform-gpu w-full">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-slate-400/10 blur-3xl rounded-full group-hover:bg-slate-400/20 transition-all duration-500"></div>
            <div className="card-body p-5 sm:p-6 lg:p-7 relative z-10 flex flex-col h-full overflow-hidden">
              <h2 className="card-title text-2xl sm:text-3xl font-extrabold text-slate-300 mb-1 drop-shadow-md break-words">Silver</h2>
              <p className="text-xs sm:text-sm text-slate-400 border-b border-slate-500/20 pb-4 mb-4 flex-grow-0 break-words">Perfect for emerging brands.</p>
              <ul className="space-y-2 sm:space-y-3 flex-grow mb-6">
                <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-slate-300 break-words leading-tight"><CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 shrink-0" /> <span>Medium logo on vehicle</span></li>
                <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-slate-300 break-words leading-tight"><CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 shrink-0" /> <span>Social media mentions</span></li>
                <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-slate-300 break-words leading-tight"><CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 shrink-0" /> <span>Logo on website</span></li>
              </ul>
              <div className="card-actions justify-center mt-auto w-full">
                <button className="btn btn-sm sm:btn-md btn-outline text-slate-300 border-slate-500/50 hover:bg-slate-300 hover:text-khad-dark hover:border-slate-300 w-full transition-colors shadow-lg group-hover:shadow-slate-400/20 text-xs sm:text-sm">Partner With Us</button>
              </div>
            </div>
          </div>

          {/* Bronze Tier */}
          <div className="card bg-khad-card border border-orange-700/30 shadow-[0_10px_30px_rgba(194,65,12,0.05)] hover:shadow-[0_30px_60px_rgba(194,65,12,0.2)] transition-all duration-500 hover:-translate-y-4 hover:scale-[1.03] hover:rotate-y-[5deg] hover:rotate-x-[5deg] group relative overflow-hidden transform-gpu w-full">
             <div className="absolute inset-0 bg-gradient-to-br from-orange-700/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
             <div className="absolute -right-10 -top-10 w-32 h-32 bg-orange-700/10 blur-3xl rounded-full group-hover:bg-orange-600/20 transition-all duration-500"></div>
            <div className="card-body p-5 sm:p-6 lg:p-7 relative z-10 flex flex-col h-full overflow-hidden">
              <h2 className="card-title text-2xl sm:text-3xl font-extrabold text-orange-500 mb-1 drop-shadow-md break-words">Bronze</h2>
              <p className="text-xs sm:text-sm text-slate-400 border-b border-orange-700/20 pb-4 mb-4 flex-grow-0 break-words">A great starting point.</p>
              <ul className="space-y-2 sm:space-y-3 flex-grow mb-6">
                <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-slate-300 break-words leading-tight"><CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 shrink-0" /> <span>Small logo on vehicle</span></li>
                <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-slate-300 break-words leading-tight"><CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 shrink-0" /> <span>Logo on website</span></li>
              </ul>
              <div className="card-actions justify-center mt-auto w-full">
                <button className="btn btn-sm sm:btn-md btn-outline text-orange-500 border-orange-700/50 hover:bg-orange-600 hover:text-white hover:border-orange-600 w-full transition-colors shadow-lg group-hover:shadow-orange-600/20 text-xs sm:text-sm">Partner With Us</button>
              </div>
            </div>
          </div>
          
        </div>
        
        <div className="mt-16 sm:mt-10 flex justify-center px-4 sm:px-0 w-full">
          <div className="relative w-full sm:w-max group perspective-[1000px]">
            {/* Glowing Shadow Layer */}
            <div className="absolute -inset-0.5 sm:-inset-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 rounded-full blur opacity-40 group-hover:opacity-80 transition duration-500 group-hover:duration-200 animate-pulse"></div>
            
            {/* Main Button */}
            <a 
              href="/sponsorship.pdf" 
              download="KHAD_Sponsorship_Proposal.pdf" 
              className="relative flex items-center justify-center gap-3 w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-cyan-500 text-khad-dark px-8 py-4 sm:px-12 sm:py-5 rounded-full font-extrabold text-[15px] sm:text-lg transition-all duration-500 hover:scale-[1.03] hover:-translate-y-1 overflow-hidden transform-gpu"
            >
              {/* Shine Effect */}
              <div className="absolute top-0 -left-[150%] w-[150%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[30deg] group-hover:left-[100%] transition-all duration-1000 ease-out"></div>
              
              {/* Icon & Text */}
              <Download className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 transition-transform duration-500 group-hover:translate-y-1" />
              <span className="whitespace-nowrap z-10">Download Proposal PDF</span>
            </a>
          </div>
        </div>
      </section>

      {/* Current Sponsors Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="bg-[#0B2A1E]/30 border border-khad-border rounded-[3rem] p-10 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="text-center mb-12 relative z-10">
            <h2 className="text-3xl font-bold text-white mb-4">Our Trusted Partners</h2>
            <p className="text-slate-400">Organizations that believe in our vision and support our journey.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 items-center justify-center relative z-10">
            {sponsorImages.map((src, idx) => (
              <div key={idx} className="flex items-center justify-center p-6 bg-khad-card/80 border border-khad-border rounded-2xl hover:border-emerald-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] group">
                <img src={src} alt={`Sponsor ${idx + 1}`} className="max-w-full h-12 md:h-16 object-contain grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105 drop-shadow-md" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center border-t border-khad-border pt-20">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Accelerate With Us?</h2>
        <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
          Contact our Sponsorship division to discuss partnership tiers, branding opportunities, and how we can achieve mutual growth.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-khad-card border border-khad-border p-6 rounded-2xl flex items-start gap-4 hover:border-emerald-500/30 transition-colors group">
            <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400 group-hover:bg-emerald-500 group-hover:text-khad-dark transition-colors">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">Email Us</h4>
              <a href="mailto:khadteam@umy.ac.id" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">khadteam@umy.ac.id</a>
            </div>
          </div>
          <div className="bg-khad-card border border-khad-border p-6 rounded-2xl flex items-start gap-4 hover:border-emerald-500/30 transition-colors group">
            <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400 group-hover:bg-emerald-500 group-hover:text-khad-dark transition-colors">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">Call Us</h4>
              <p className="text-sm text-slate-400">+62 812-3456-7890</p>
            </div>
          </div>
          <div className="bg-khad-card border border-khad-border p-6 rounded-2xl flex items-start gap-4 hover:border-emerald-500/30 transition-colors group">
            <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400 group-hover:bg-emerald-500 group-hover:text-khad-dark transition-colors">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">Visit Us</h4>
              <p className="text-sm text-slate-400 line-clamp-2">Universitas Muhammadiyah Yogyakarta</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Sponsors;
