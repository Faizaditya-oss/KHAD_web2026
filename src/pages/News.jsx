import React, { useState } from 'react';
import { 
  Newspaper, Search, Calendar, Clock, User, ArrowRight, X, 
  Share2, ChevronRight, Sparkles, CheckCircle2, Bell, Send
} from 'lucide-react';

import bgHome from '../assets/bgHome/LandPage.jpg';
import lingsarBg from '../assets/mobil/vision.JPG';
import arunaBg from '../assets/mobil/DesignBody.jpeg';
import khadTeamGroup from '../assets/divisions/Team.JPG';

const newsCategories = [
  'All',
  'Competitions',
  'Tech Insights',
  'Achievements',
  'Events & Workshops'
];

const newsArticles = [
  {
    id: 'lingsar-sem-2026-prep',
    title: 'KHAD Team UMY Siapkan Mobil Lingsar EV Menuju Kompetisi Internasional 2026',
    subtitle: 'Optimalisasi Aerodinamika CFD dan Pembaharuan Telemetry RTOS Menjadi Fokus Utama Tim Mechanical & Electrical.',
    category: 'Competitions',
    date: '28 Agustus 2026',
    readTime: '5 min read',
    author: 'Tim Komunikasi KHAD',
    authorRole: 'Official Media Press',
    image: lingsarBg,
    isFeatured: true,
    tags: ['Lingsar EV', 'Shell Eco-Marathon', 'Inovasi', 'Mobil Listrik'],
    content: `
      KHAD Team Universitas Muhammadiyah Yogyakarta (UMY) kembali bersiap untuk berlaga pada kompetisi kendaraan hemat energi tingkat internasional. Setelah sukses membawa pulang penghargaan pada tahun-tahun sebelumnya, tim riset Lingsar EV berfokus melakukan perombakan besar pada efisiensi daya dan drag coefficient.

      ### Perombakan Aerodinamika & Material Serat Karbon
      Pada seri pengembangan terbaru ini, divisi Mechanical berhasil memangkas koefisien hambatan udara (drag coefficient) hingga 12% melalui simulasi ANSYS Fluent. Penggunaan struktur bodi *carbon fiber monocoque* generasi ketiga juga memberikan penurunan bobot total tanpa mengurangi fleksibilitas sasis.

      ### Integrasi Telemetri Berbasis LoRa & RTOS
      Dari sisi elektrikal, controller terbaru menggunakan mikrokontroler STM32 dengan sistem operasi *real-time* (RTOS). Sensor voltase, arus, dan suhu motor kini ditransmisikan secara langsung (*real-time*) ke pitlane menggunakan protokol LoRa 915MHz dengan frekuensi pembaruan data hingga 50ms.

      > "Target kami tahun ini bukan hanya sekadar menyelesaikan sirkuit, melainkan menembus batas efisiensi energi terbaik di kategori Prototype EV," ujar Faiz Aditya, General Manager KHAD Team UMY.
    `
  },
  {
    id: 'podium-sem-asia-pacific',
    title: 'KHAD Team UMY Raih Podium ke-3 di Shell Eco-Marathon Asia Pacific & Middle East',
    subtitle: 'Capaian gemilang kendaraan Lingsar EV membuktikan daya saing riset mahasiswa UMY di kancah internasional.',
    category: 'Achievements',
    date: '14 Juli 2026',
    readTime: '4 min read',
    author: 'Anisa Nurul',
    authorRole: 'Head of PR & Media',
    image: khadTeamGroup,
    isFeatured: false,
    tags: ['Podium', 'Internasional', 'Shell Eco-Marathon', 'Prestasi'],
    content: `
      Pencapaian luar biasa diraih oleh KHAD Team UMY pada ajang kompetisi efisiensi energi Shell Eco-Marathon Asia Pacific & Middle East. Berlaga di kelas Prototype Battery-Electric, kendaraan Lingsar EV berhasil mencatatkan rekor konsumsi daya sebesar 600+ km/kWh.

      ### Perjuangan di Lintasan Pertamina Mandalika Circuit
      Selama empat hari kompetisi yang diwarnai cuaca ekstrem dan suhu lintasan yang tinggi, tim teknis berhasil menjaga kestabilan baterai dan sistem pendingin motor BLDC. Strategi pengemudi yang disiplin dalam mengatur *coasting* dan *acceleration zone* menjadi kunci utama keberhasilan meraih posisi ke-3.

      ### Apresiasi Rektorat & Sponsor
      Keberhasilan ini tidak lepas dari dukungan penuh Universitas Muhammadiyah Yogyakarta serta para mitra sponsor industri yang terus mendukung riset teknologi hijau mahasiswa.
    `
  },
  {
    id: 'aruna-diesel-ecu-tuning',
    title: 'Hasil Uji Dyno Aruna Diesel: Penyesuaian Injeksi Bahan Bakar Meningkatkan Efisiensi 15%',
    subtitle: 'Divisi Engine berhasil mengkalibrasi ulang timing pembakaran mesin 110cc dengan bahan bakar Biodiesel B35.',
    category: 'Tech Insights',
    date: '02 Juni 2026',
    readTime: '6 min read',
    author: 'Rizky Perdana',
    authorRole: 'Chief Mechanical Engineer',
    image: arunaBg,
    isFeatured: false,
    tags: ['Aruna Diesel', 'Engine Dyno', 'Biodiesel', 'KMHE'],
    content: `
      Mengembangkan kendaraan bertenaga mesin pembakaran dalam (*Internal Combustion Engine*) memerlukan tingkat presisi mekanis yang sangat tinggi. Tim riset Aruna Diesel baru-baru ini merampungkan serangkaian pengujian *dynamometer* di laboratorium mekanik UMY.

      ### Kalibrasi Rasio Kompresi & Injektor Custom
      Melalui penggantian injektor buatan sendiri (*custom atomizing nozzle*) dan pemetaan ECU yang diperbarui, atomisasi bahan bakar Biodiesel B35 menjadi lebih sempurna. Hasilnya, temperatur mesin tetap stabil di bawah 80°C sementara konsumsi bahan bakar berkurang hingga 0.24 mL/detik.

      ### Uji Ketahanan Lintasan
      Langkah selanjutnya adalah pengujian daya tahan (*endurance test*) sejauh 50 lap untuk memastikan keandalan komponen *drivetrain* dan *aluminium spaceframe* saat menerima beban vibrasi kontinu.
    `
  },
  {
    id: 'open-workshop-community',
    title: 'KHAD Team Gelar Open Workshop & Technology Exhibition Bagi Mahasiswa Baru UMY',
    subtitle: 'Memperkenalkan teknologi otomotif ramah lingkungan dan membuka kesempatan bergabung dalam riset kendaraan masa depan.',
    category: 'Events & Workshops',
    date: '18 Mei 2026',
    readTime: '3 min read',
    author: 'Farhan Syah',
    authorRole: 'Media & Creative Lead',
    image: bgHome,
    isFeatured: false,
    tags: ['Workshop', 'Recruitment', 'Edukasi', 'Kampus UMY'],
    content: `
      Dalam rangka menumbuhkan minat riset di kalangan mahasiswa, KHAD Team UMY menggelar pameran teknologi dan *Open Workshop* bertempat di Gedung Laboratorium Teknik UMY.

      ### Demonstrasi Telemetri Live & Komposit Serat Karbon
      Pengunjung diberikan kesempatan untuk melihat langsung proses pembuatan komponen bodi serat karbon (*vacuum bagging process*) serta mencoba simulator kemudi telemetri interaktif. Event ini juga menandai dimulainya tahap pendaftaran anggota baru (*Open Recruitment*) untuk divisi Mechanical, Electrical, dan Sponsorship.
    `
  },
  {
    id: 'telemetry-lora-innovation',
    title: 'Inovasi Modul Telemetri Khusus: Mentransfer Data Performa Mobil Tanpa Latensi Network',
    subtitle: 'Pengembangan hardware independen berbasis LoRa 915 MHz menjamin kontinuitas monitoring di pitlane.',
    category: 'Tech Insights',
    date: '10 April 2026',
    readTime: '5 min read',
    author: 'Fadhil Muhammad',
    authorRole: 'Chief Electrical Engineer',
    image: lingsarBg,
    isFeatured: false,
    tags: ['Telemetri', 'LoRa', 'Embedded System', 'IoT'],
    content: `
      Keterbatasan sirkuit balap yang kerap kali berada di area minim sinyal seluler mendorong divisi Electrical KHAD Team untuk merancang jaringan telemetri independen berbasis radio frekuensi.

      ### Keunggulan Frekuensi LoRa 915 MHz
      Dengan jangkauan hingga 3 kilometer dan konsumsi daya transmisi di bawah 1 Watt, modul telemetri KHAD mampu mengirimkan data kecepatan, konsumsi arus baterai, serta kondisi temperatur tanpa bergantung pada koneksi internet publik. Data tersebut diterima oleh *Pit Station Dashboard* secara instan.
    `
  },
  {
    id: 'kmhe-2025-retrospective',
    title: 'Retrospeksi KMHE 2025: Evaluasi Ketat & Rencana Strategis Musim Mendatang',
    subtitle: 'Pembelajaran berharga dari lintasan kompetisi nasional mendorong perbaikan menyeluruh pada manajemen energi.',
    category: 'Competitions',
    date: '20 Februari 2026',
    readTime: '4 min read',
    author: 'Daffa Zhalif',
    authorRole: 'Project Manager',
    image: arunaBg,
    isFeatured: false,
    tags: ['KMHE', 'Evaluasi', 'Strategi', 'Tim KHAD'],
    content: `
      Kompetisi Mobil Hemat Energi (KMHE) 2025 memberikan banyak pelajaran berharga bagi seluruh awak KHAD Team. Masukan dari tim juri teknis nasional serta data evaluasi dari pit stop menjadi fondasi perbaikan untuk persiapan musim kompetisi tahun ini.
    `
  }
];

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalArticle, setActiveModalArticle] = useState(null);
  const [subscribedEmail, setSubscribedEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState('');

  // Filter articles based on Category and Search Query
  const filteredArticles = newsArticles.filter(article => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = newsArticles.find(a => a.isFeatured) || newsArticles[0];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (subscribedEmail) {
      setSubscribeStatus('Terima kasih! Anda telah berlangganan buletin berita KHAD Team UMY.');
      setSubscribedEmail('');
      setTimeout(() => setSubscribeStatus(''), 4000);
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-[#061E14] text-slate-300 font-sans selection:bg-emerald-500/30 selection:text-white">
      
      {/* 1. Hero Header */}
      <section data-aos="fade-up" className="relative overflow-hidden pt-28 pb-16 border-b border-[#133E2B]">
        {/* Ambient Backlight Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none z-0"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-widest shadow-[0_0_15px_rgba(16,185,129,0.15)]">
            <Newspaper className="w-4 h-4 animate-pulse text-emerald-400" />
            KHAD TEAM PRESS & INSIGHTS
          </div>

          <h1 data-aos="fade-up" className="text-4xl sm:text-5xl md:text-7xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-white to-slate-400 tracking-tight">
            Latest News & <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-200 to-cyan-400">
              Technology Innovations
            </span>
          </h1>

          <p data-aos="fade-up" className="max-w-3xl mx-auto text-base md:text-lg text-slate-400 leading-relaxed font-sans">
            Ikuti kabar perkembangan riset kendaraan hemat energi, liputan kompetisi nasional & internasional, serta cerita balik layar pengembang KHAD Team UMY.
          </p>

          {/* Search Input Bar */}
          <div className="max-w-2xl mx-auto pt-4">
            <div className="relative flex items-center">
              <Search className="absolute left-4 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Cari berita, teknologi, atau event KHAD Team..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-10 py-3.5 bg-[#0B2A1E] border border-[#133E2B] rounded-2xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/60 shadow-lg text-sm md:text-base transition-all duration-300"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Featured Article Banner */}
      {searchQuery === '' && selectedCategory === 'All' && (
        <section data-aos="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest mb-6 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            Featured Article
          </div>

          <div 
            onClick={() => setActiveModalArticle(featuredArticle)}
            className="group relative bg-[#0B2A1E] border border-[#133E2B] rounded-3xl overflow-hidden hover:border-emerald-500/40 hover:shadow-[0_0_35px_rgba(16,185,129,0.15)] transition-all duration-500 cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-0"
          >
            {/* Corner Tech Accents */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-emerald-500/40 group-hover:border-white transition-all duration-300 rounded-tl-3xl z-20"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-emerald-500/40 group-hover:border-white transition-all duration-300 rounded-tr-3xl z-20"></div>

            {/* Image Banner */}
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto overflow-hidden bg-[#061E14]">
              <img data-aos="fade-up" 
                src={featuredArticle.image} 
                alt={featuredArticle.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A1E] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0B2A1E]"></div>
              
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3.5 py-1.5 rounded-full bg-emerald-500 text-[#061E14] font-mono font-extrabold text-xs uppercase tracking-wider shadow-md">
                  {featuredArticle.category}
                </span>
              </div>
            </div>

            {/* Article Details */}
            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    {featuredArticle.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    {featuredArticle.readTime}
                  </span>
                </div>

                <h2 data-aos="fade-up" className="text-2xl sm:text-3xl font-sans font-extrabold text-white group-hover:text-emerald-400 transition-colors duration-300 leading-snug">
                  {featuredArticle.title}
                </h2>

                <p data-aos="fade-up" className="text-sm sm:text-base text-slate-300 leading-relaxed line-clamp-3">
                  {featuredArticle.subtitle}
                </p>
              </div>

              <div className="space-y-6 pt-4 border-t border-[#133E2B]">
                <div className="flex flex-wrap gap-2">
                  {featuredArticle.tags.map((tag, idx) => (
                    <span key={idx} className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-[#061E14] text-slate-400 border border-[#133E2B]">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-xs">
                      {featuredArticle.author.charAt(0)}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-200">{featuredArticle.author}</div>
                      <div className="text-[10px] text-slate-500">{featuredArticle.authorRole}</div>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 group-hover:translate-x-1 transition-transform">
                    Baca Artikel Full
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. Category Filter Tabs */}
      <section data-aos="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#133E2B] pb-6">
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {newsCategories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-heading font-bold uppercase tracking-wider transition-all duration-300 border ${
                    isSelected
                      ? 'bg-emerald-500 text-[#061E14] border-white shadow-[0_0_20px_rgba(16,185,129,0.25)]'
                      : 'bg-[#0B2A1E] text-slate-400 hover:text-white border-[#133E2B] hover:border-emerald-500/30'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="text-xs font-mono text-slate-400">
            Menampilkan <span className="text-emerald-400 font-bold">{filteredArticles.length}</span> Berita
          </div>
        </div>
      </section>

      {/* 4. Articles Grid Section */}
      <section data-aos="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-16 bg-[#0B2A1E] border border-[#133E2B] rounded-3xl p-8 space-y-4">
            <Search className="w-12 h-12 text-slate-500 mx-auto" />
            <h3 data-aos="fade-up" className="text-xl font-bold text-white">Tidak Ada Berita Ditemukan</h3>
            <p data-aos="fade-up" className="text-sm text-slate-400 max-w-md mx-auto">
              Coba kata kunci pencarian lain atau ganti kategori berita untuk menemukan informasi yang Anda cari.
            </p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="px-6 py-2.5 rounded-xl bg-emerald-500 text-[#061E14] font-bold text-xs uppercase tracking-wider hover:bg-emerald-400 transition-colors"
            >
              Reset Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <div 
                key={article.id}
                onClick={() => setActiveModalArticle(article)}
                className="group relative bg-[#0B2A1E] border border-[#133E2B] rounded-3xl overflow-hidden hover:border-emerald-500/40 hover:-translate-y-1.5 hover:shadow-[0_0_25px_rgba(16,185,129,0.12)] transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                {/* Tech Corner Accent */}
                <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-transparent group-hover:border-emerald-500/40 transition-all duration-300 rounded-tr-3xl"></div>
                <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-transparent group-hover:border-emerald-500/40 transition-all duration-300 rounded-bl-3xl"></div>

                <div>
                  {/* Card Header Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#061E14]">
                    <img data-aos="fade-up" 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A1E] via-transparent to-transparent"></div>
                    
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-lg bg-[#061E14]/80 backdrop-blur-md text-emerald-400 border border-[#133E2B] font-mono font-bold text-[10px] uppercase">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-emerald-400" />
                        {article.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-emerald-400" />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 data-aos="fade-up" className="text-lg font-sans font-extrabold text-white group-hover:text-emerald-400 transition-colors duration-300 leading-snug line-clamp-2">
                      {article.title}
                    </h3>

                    <p data-aos="fade-up" className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                      {article.subtitle}
                    </p>
                  </div>
                </div>

                {/* Footer Info */}
                <div className="p-6 pt-0 mt-4 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {article.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#061E14] text-slate-400 border border-[#133E2B]">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between border-t border-[#133E2B]/60 pt-4">
                    <div className="flex items-center gap-2">
                      <User className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-xs font-medium text-slate-300">{article.author}</span>
                    </div>

                    <span className="text-xs font-bold text-emerald-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Selengkapnya
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 5. Newsletter Subscription CTA */}
      <section data-aos="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#0B2A1E] border border-[#133E2B] p-8 sm:p-14 text-center">
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto text-emerald-400">
              <Bell className="w-6 h-6 animate-bounce" />
            </div>

            <h2 data-aos="fade-up" className="text-2xl md:text-6xl font-semibold italic text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-white to-slate-400 mb-4 tracking-tight">
           Get Notifications from <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">KHAD Team</span> <br className="hidden md:block" />
          </h2>

            <p data-aos="fade-up" className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Dapatkan rilis pers resmi, jadwal kompetisi, serta laporan riset teknologi terbaru langsung ke kotak masuk email Anda.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 pt-2">
              <input 
                type="email" 
                required
                placeholder="Masukkan email Anda (contoh: name@domain.com)"
                value={subscribedEmail}
                onChange={(e) => setSubscribedEmail(e.target.value)}
                className="flex-grow px-5 py-3.5 bg-[#061E14] border border-[#133E2B] rounded-xl text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500/60"
              />
              <button 
                type="submit"
                className="px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#061E14] font-heading font-bold uppercase tracking-wider text-xs sm:text-sm transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.25)] flex items-center justify-center gap-2"
              >
                Subscribe
                <Send className="w-4 h-4" />
              </button>
            </form>

            {subscribeStatus && (
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-xs font-semibold flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                {subscribeStatus}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 6. Article Detail Modal View */}
      {activeModalArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-fade-in">
          <div 
            className="relative w-full max-w-4xl bg-[#0B2A1E] border border-[#133E2B] rounded-3xl overflow-hidden shadow-2xl my-8 max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="flex items-center justify-between p-6 border-b border-[#133E2B] bg-[#061E14]/80 backdrop-blur-md sticky top-0 z-20">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-mono font-bold text-xs uppercase">
                  {activeModalArticle.category}
                </span>
                <span className="text-xs font-mono text-slate-400 hidden sm:inline-block">
                  {activeModalArticle.date}
                </span>
              </div>

              <button 
                onClick={() => setActiveModalArticle(null)}
                className="p-2 rounded-xl bg-[#0B2A1E] text-slate-400 hover:text-white border border-[#133E2B] hover:border-emerald-500/40 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 sm:p-10 overflow-y-auto space-y-8">
              {/* Header Info */}
              <div className="space-y-4">
                <h1 data-aos="fade-up" className="text-2xl sm:text-4xl font-sans font-extrabold text-white leading-tight">
                  {activeModalArticle.title}
                </h1>

                <p data-aos="fade-up" className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
                  {activeModalArticle.subtitle}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#133E2B] text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-sm">
                      {activeModalArticle.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-slate-200">{activeModalArticle.author}</div>
                      <div className="text-[10px] text-slate-500">{activeModalArticle.authorRole}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-emerald-400" />
                      {activeModalArticle.readTime}
                    </span>
                  </div>
                </div>
              </div>

              {/* Main Banner Image */}
              <div className="rounded-2xl overflow-hidden aspect-[16/9] border border-[#133E2B] bg-[#061E14]">
                <img data-aos="fade-up" 
                  src={activeModalArticle.image} 
                  alt={activeModalArticle.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Formatted Article Body */}
              <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-4 text-sm sm:text-base whitespace-pre-line">
                {activeModalArticle.content}
              </div>

              {/* Tags & Action Bar */}
              <div className="pt-6 border-t border-[#133E2B] flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {activeModalArticle.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs font-mono px-3 py-1 rounded-lg bg-[#061E14] text-slate-300 border border-[#133E2B]">
                      #{tag}
                    </span>
                  ))}
                </div>

                <button 
                  onClick={() => {
                    if (navigator.clipboard) {
                      navigator.clipboard.writeText(window.location.href);
                      alert('Tautan artikel berhasil disalin!');
                    }
                  }}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#061E14] hover:bg-emerald-500/10 text-emerald-400 border border-[#133E2B] hover:border-emerald-500/40 text-xs font-bold transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                  Bagikan Artikel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default News;
