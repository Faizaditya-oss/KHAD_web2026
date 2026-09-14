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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Silver Tier */}
          <div className="bg-khad-card border border-khad-border p-8 rounded-3xl flex flex-col">
            <h3 className="text-2xl font-bold text-slate-300 mb-2">Silver</h3>
            <p className="text-sm text-slate-400 mb-6 border-b border-khad-border pb-6">Perfect for emerging brands.</p>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex gap-3 text-sm text-slate-300"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> Small logo on vehicle</li>
              <li className="flex gap-3 text-sm text-slate-300"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> Social media mentions</li>
              <li className="flex gap-3 text-sm text-slate-300"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> Logo on website</li>
            </ul>
          </div>
          
          {/* Platinum Tier (Highlighted) */}
          <div className="bg-gradient-to-b from-[#0B2A1E] to-khad-card border border-emerald-500/30 p-8 rounded-3xl flex flex-col relative transform md:-translate-y-4 shadow-[0_0_30px_rgba(16,185,129,0.1)]">
            <div className="absolute top-0 right-8 transform -translate-y-1/2">
              <span className="bg-emerald-500 text-khad-dark text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">Most Popular</span>
            </div>
            <h3 className="text-2xl font-bold text-emerald-400 mb-2">Platinum</h3>
            <p className="text-sm text-slate-400 mb-6 border-b border-emerald-500/20 pb-6">Maximum exposure & integration.</p>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex gap-3 text-sm text-slate-200"><CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> Extra large logo on vehicle</li>
              <li className="flex gap-3 text-sm text-slate-200"><CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> Exclusive media coverage</li>
              <li className="flex gap-3 text-sm text-slate-200"><CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> VIP access to paddock</li>
              <li className="flex gap-3 text-sm text-slate-200"><CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> Prime spot on apparel & website</li>
            </ul>
          </div>
          
          {/* Gold Tier */}
          <div className="bg-khad-card border border-khad-border p-8 rounded-3xl flex flex-col">
            <h3 className="text-2xl font-bold text-amber-400 mb-2">Gold</h3>
            <p className="text-sm text-slate-400 mb-6 border-b border-khad-border pb-6">Excellent visibility and reach.</p>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex gap-3 text-sm text-slate-300"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> Medium logo on vehicle</li>
              <li className="flex gap-3 text-sm text-slate-300"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> Logo on team apparel</li>
              <li className="flex gap-3 text-sm text-slate-300"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> Prominent social media presence</li>
            </ul>
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
