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
import sponsor8 from '../assets/sponsor/sponsor8.png';

const sponsorImages = [sponsor1, sponsor2, sponsor3, sponsor4, sponsor5, sponsor6, sponsor7, sponsor8];

const benefits = [
  { icon: TrendingUp, title: "Brand Exposure", desc: "Gain massive visibility at national and international energy-efficient vehicle competitions." },
  { icon: Globe, title: "Media Coverage", desc: "Feature in our active social media channels, press releases, and partner publications." },
  { icon: Users, title: "Talent Access", desc: "Connect with top engineering, design, and management students from Universitas Muhammadiyah Yogyakarta." },
  { icon: CheckCircle2, title: "CSR Alignment", desc: "Support sustainable technology and youth education, aligning with green corporate social responsibility goals." }
];

const Sponsors = () => {
  return (
    <div className="min-h-screen bg-khad-dark pt-28 pb-20">

      {/* Current Sponsors Showcase / Hall of Fame */}
      <section data-aos="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32 relative">
        {/* Museum/Hall of Fame Backdrop */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#061E14] via-[#0a2e1f] to-[#061E14] rounded-[4rem] border border-emerald-900/30 shadow-[inset_0_0_100px_rgba(16,185,129,0.05)] overflow-hidden">
          {/* Decorative Orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 py-20 px-4 md:px-16 text-center">
          <div className="mb-20">
            <span data-aos="fade-up" className="text-emerald-400 font-semibold tracking-[0.2em] uppercase text-sm mb-4 block">Our Trusted Partners</span>
          </div>

          {/* Sponsors Layout - No Cards, Floating Elegance */}
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-20 max-w-5xl mx-auto perspective-[1000px]">
            {sponsorImages.map((src, idx) => (
              <div
                key={idx}
                className="relative group cursor-pointer"
              >
                {/* Glow Behind Logo */}
                <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-150"></div>

                {/* Sponsor Logo Container (Fixed Bounding Box for Uniformity) */}
                <div className="relative z-10 transform-gpu transition-all duration-700 ease-out group-hover:scale-110 group-hover:-translate-y-4 group-hover:rotate-x-[10deg] w-32 sm:w-40 md:w-56 h-20 sm:h-24 md:h-32 flex items-center justify-center">
                  <img
                    data-aos="fade-up"
                    data-aos-delay={idx * 100}
                    src={src}
                    alt={`Partner ${idx + 1}`}
                    className="max-w-full max-h-full object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                  />

                  {/* Subtle Reflection */}
                  <div className="absolute -bottom-10 left-0 w-full h-full opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none flex items-center justify-center" style={{ transform: 'scaleY(-0.5) translateY(20px)', filter: 'blur(2px)' }}>
                    <img src={src} alt="reflection" className="max-w-full max-h-full object-contain grayscale-0" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a2e1f] via-[#0a2e1f]/80 to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sponsor Us / Benefits */}
      <section data-aos="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="text-center mb-16">
          <h2 data-aos="fade-up" className="text-3xl font-bold text-white mb-4">Why Partner With Us?</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, idx) => (
            <div key={idx} className="bg-khad-card/50 border border-khad-border p-8 rounded-3xl hover:border-emerald-500/40 hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-colors duration-500"></div>

              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 data-aos="fade-up" className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p data-aos="fade-up" className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sponsorship Tiers — Pricing Card Style */}
      <section data-aos="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="text-center mb-16">
          <h2 data-aos="fade-up" className="text-3xl font-bold text-white mb-4">Partnership Tiers</h2>
          <p data-aos="fade-up" className="text-slate-400 max-w-2xl mx-auto">
            We offer flexible partnership packages designed to provide maximum value and visibility for your brand.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {/* ── BRONZE ── */}
          {[
            {
              name: 'Bronze',
              icon: '🥉',
              tagline: 'A great starting point for new partners.',
              color: 'text-orange-400',
              border: 'border-orange-700/40',
              borderHover: 'hover:border-orange-500/60',
              glow: 'hover:shadow-[0_0_30px_rgba(194,65,12,0.15)]',
              badgeBg: '',
              badge: null,
              ctaClass: 'bg-white/5 hover:bg-orange-500/10 text-white border border-white/10 hover:border-orange-500/40',
              checkColor: 'text-orange-400',
              benefits: [
                'Small logo on vehicle body',
                'Logo listed on our website',
                'Social media mention (1x post)',
                'Digital certificate of partnership',
              ]
            },
            {
              name: 'Silver',
              icon: '🥈',
              tagline: 'Perfect for growing brands seeking visibility.',
              color: 'text-slate-300',
              border: 'border-slate-500/40',
              borderHover: 'hover:border-slate-400/60',
              glow: 'hover:shadow-[0_0_30px_rgba(148,163,184,0.15)]',
              badge: null,
              ctaClass: 'bg-white/5 hover:bg-slate-400/10 text-white border border-white/10 hover:border-slate-400/40',
              checkColor: 'text-slate-400',
              benefits: [
                'All Bronze Benefits',
                'Medium logo on vehicle body',
                'Logo on team jersey & apparel',
                'Featured on website sponsor page',
                'Monthly social media post (2x)',
                'Mentioned in competition press releases',
              ]
            },
            {
              name: 'Gold',
              icon: '🥇',
              tagline: 'Excellent visibility and brand integration.',
              color: 'text-amber-400',
              border: 'border-amber-500/50',
              borderHover: 'hover:border-amber-400/70',
              glow: 'hover:shadow-[0_0_35px_rgba(251,191,36,0.2)]',
              badge: 'Most Popular',
              badgeBg: 'bg-amber-400/10 border border-amber-400/30 text-amber-400',
              ctaClass: 'bg-amber-400 hover:bg-amber-300 text-[#061E14] font-bold',
              checkColor: 'text-amber-400',
              benefits: [
                'All Silver Benefits',
                'Large logo on vehicle body (prime area)',
                'Logo on banner & pit display',
                'Dedicated feature article on website',
                'Weekly social media exposure',
                'Invitation to competition event',
                'Co-branded content production',
              ]
            },
            {
              name: 'Platinum',
              icon: '💎',
              tagline: 'Maximum exposure & full brand integration.',
              color: 'text-emerald-400',
              border: 'border-emerald-500/60',
              borderHover: 'hover:border-emerald-400/80',
              glow: 'hover:shadow-[0_0_40px_rgba(16,185,129,0.2)]',
              badge: 'Premium',
              badgeBg: 'bg-emerald-400/10 border border-emerald-400/30 text-emerald-400',
              ctaClass: 'bg-emerald-500 hover:bg-emerald-400 text-[#061E14] font-bold',
              checkColor: 'text-emerald-400',
              benefits: [
                'All Gold Benefits',
                'Extra-large logo — vehicle hood & side',
                'Naming rights on one vehicle',
                'VIP access to all competition paddocks',
                'Exclusive media feature & press release',
                'Custom activation booth at competitions',
                'Direct access to KHAD team engineers',
                'Annual partnership report & analytics',
              ]
            },
          ].map((tier, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 80}
              className={`relative flex flex-col rounded-2xl border bg-khad-card p-6 transition-all duration-300 ${tier.border} ${tier.borderHover} ${tier.glow}`}
            >
              {/* Badge */}
              {tier.badge && (
                <span className={`absolute top-4 right-4 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${tier.badgeBg}`}>
                  {tier.badge}
                </span>
              )}

              {/* Header */}
              <div className="mb-5">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl">{tier.icon}</span>
                  <span className={`text-sm font-bold uppercase tracking-widest ${tier.color}`}>{tier.name}</span>
                </div>

                {/* Tier "price" label */}
                <div className={`text-3xl font-extrabold mb-1 ${tier.color}`} style={{ fontFamily: "'Oswald', sans-serif" }}>
                  {tier.name}
                </div>
                <p className="text-slate-500 text-xs">Partnership</p>
              </div>

              {/* CTA Button */}
              <a
                href="mailto:khadteam@umy.ac.id"
                className={`w-full text-center py-2.5 rounded-xl text-sm transition-all duration-300 mb-6 block ${tier.ctaClass}`}
              >
                Become a Partner
              </a>

              {/* Tagline */}
              <p className="text-slate-500 text-xs mb-5 leading-relaxed border-t border-khad-border pt-4">
                {tier.tagline}
              </p>

              {/* Benefits List */}
              <ul className="space-y-3 flex-grow">
                {tier.benefits.map((benefit, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                    <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${tier.checkColor}`} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Download Proposal CTA */}
        <div className="mt-12 flex justify-center px-4 sm:px-0 w-full">
          <div className="relative w-full sm:w-max group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 rounded-full blur opacity-40 group-hover:opacity-80 transition duration-500 animate-pulse"></div>
            <a
              href="/sponsorship.pdf"
              download="KHAD_Sponsorship_Proposal.pdf"
              className="relative flex items-center justify-center gap-3 w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-cyan-500 text-khad-dark px-10 py-4 sm:px-12 sm:py-5 rounded-full font-extrabold text-sm sm:text-base transition-all duration-500 hover:scale-[1.03] hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute top-0 -left-[150%] w-[150%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[30deg] group-hover:left-[100%] transition-all duration-1000 ease-out"></div>
              <Download className="w-5 h-5 shrink-0" />
              <span className="z-10 whitespace-nowrap">Download Sponsorship Proposal</span>
            </a>
          </div>
        </div>
      </section>



      {/* Contact Section */}
      <section data-aos="fade-up" id="contact" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center border-t border-khad-border pt-20">
        <h2 data-aos="fade-up" className="text-3xl font-bold text-white mb-4">Ready to Accelerate With Us?</h2>
        <p data-aos="fade-up" className="text-slate-400 mb-12 max-w-2xl mx-auto">
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
              <p data-aos="fade-up" className="text-sm text-slate-400">+62 812-3456-7890</p>
            </div>
          </div>
          <div className="bg-khad-card border border-khad-border p-6 rounded-2xl flex items-start gap-4 hover:border-emerald-500/30 transition-colors group">
            <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400 group-hover:bg-emerald-500 group-hover:text-khad-dark transition-colors">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">Visit Us</h4>
              <p data-aos="fade-up" className="text-sm text-slate-400 line-clamp-2">Universitas Muhammadiyah Yogyakarta</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Sponsors;
