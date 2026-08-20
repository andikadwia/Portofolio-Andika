import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [selectedProject, setSelectedProject] = useState(null); 
  const [selectedCertificate, setSelectedCertificate] = useState(null); 
  const [showComingSoon, setShowComingSoon] = useState(false); 

  // FUNGSI PENGUNCI SCROLL BACKGROUND
  useEffect(() => {
    if (selectedProject || selectedCertificate) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedProject, selectedCertificate]);

  // FUNGSI AUTO-CLOSE POP-UP COMING SOON
  useEffect(() => {
    if (showComingSoon) {
      const timer = setTimeout(() => {
        setShowComingSoon(false);
      }, 3000); 
      return () => clearTimeout(timer);
    }
  }, [showComingSoon]);

  // Data Proyek Final
  const projects = [
    {
      title: "Mahasigma Reservation",
      desc: "Aplikasi web untuk reservasi lapangan futsal dengan fitur manajemen jadwal, dashboard admin, dan pemulihan akun berbasis OTP WhatsApp.",
      tags: ["PHP", "MySQL", "JavaScript", "Web"],
      image: "/mahasigma.jpg", 
      liveDemoUrl: "https://youtu.be/-vzqk766OWU?si=7ndm0pOL_jtwhrHX",
      githubUrl: "https://github.com/zidanhp/MAHASIGMA-RESERVATION.git",
      fullDetails: "Mahasigma Reservation adalah platform berbasis web arsitektur Client-Server yang memfasilitasi penyewaan lapangan futsal secara efisien. Sistem ini dibangun menggunakan HTML, CSS, JavaScript, PHP, dan MySQL. Tantangan utama yang diselesaikan dalam proyek ini adalah merancang logika validasi jadwal agar tidak terjadi bentrok pemesanan (double-booking) pada waktu yang sama, serta mengimplementasikan integrasi API pengiriman kode OTP via WhatsApp untuk fitur keamanan lupa kata sandi."
    },
    {
      title: "InsPhony",
      desc: "Platform e-commerce penyewaan alat musik modern dengan fitur transaksi, pencetakan invoice otomatis, dan manajemen status pengembalian.",
      tags: ["Laravel", "Tailwind", "REST API", "Web"],
      image: "/insphony.jpg", 
      liveDemoUrl: "https://youtu.be/J54TDg2KCLM?si=mJQmJ8v4RmP5DH1O",
      githubUrl: "https://github.com/andikadwia/AlatMusik.git",
      fullDetails: "InsPhony dikembangkan menggunakan framework Laravel, Tailwind CSS, dan arsitektur REST API untuk memberikan kemudahan bagi pengguna dalam menyewa berbagai alat musik berkualitas, seperti kordofon dan aerofon. Aplikasi ini menangani seluruh siklus transaksi penyewaan secara end-to-end. Rintangan utamanya adalah mendesain basis data MySQL yang andal untuk melacak status ketersediaan alat secara real-time, menangani pencetakan resi (invoice), dan memproses otomatisasi kalkulasi denda jika terjadi kerusakan atau keterlambatan saat pengembalian."
    },
    {
      title: "RambuID",
      desc: "Aplikasi mobile berbasis AI untuk mendeteksi rambu lalu lintas Indonesia secara real-time menggunakan model YOLOv5 dan Flutter.",
      tags: ["AI", "YOLOv5", "Flutter", "Mobile"],
      image: "/rambuid.jpg",
      liveDemoUrl: "https://youtu.be/jBnh_bd4ZAA?si=lPBL9U6dYv87z_sB",
      githubUrl: "https://github.com/arrel123/RambuID.git",
      fullDetails: "RambuID dibangun untuk mengatasi kurangnya pemahaman masyarakat terhadap rambu lalu lintas yang kerap memicu pelanggaran dan kecelakaan. Menggunakan model AI YOLOv5 dan framework Flutter, aplikasi ini mampu mendeteksi rambu secara real-time melalui kamera ponsel. Tantangan utama dalam pengembangannya adalah mengumpulkan, melabeli, dan melatih lebih dari 27.000 dataset citra rambu Indonesia agar model tetap akurat pada berbagai kondisi pencahayaan, jarak, dan latar belakang."
    },
    {
      title: "DigiSurat",
      desc: "DigiSurat dikembangkan untuk mempermudah manajemen dan klasifikasi surat yang jumlahnya masif secara otomatis.",
      tags: ["Data Mining", "Algorithms", "Web", "AI"],
      image: "/digisurat.png",
      liveDemoUrl: "https://youtu.be/0xkXQ4gwgzg?si=JvLOg5VbfvCFM4yF",
      githubUrl: "https://github.com/andikadwia/arsip-surat.git",
      fullDetails: "Sistem Arsip Surat Cerdas (DigiSurat) dikembangkan untuk mempermudah manajemen dan klasifikasi surat yang jumlahnya masif secara otomatis. Proyek ini membandingkan efektivitas algoritma Naive Bayes dan K-Nearest Neighbor (KNN) dalam mengoptimasi penentuan kategori surat. Tantangan terbesar adalah pada tahap text-preprocessing agar proses pengarsipan dokumen ke dalam basis data tidak mengalami kesalahan penempatan (misclassification)."
    },
  ];

  // Data Sertifikasi
  const certificates = [
    {
      title: "Project Based Learning: DigiSurat",
      issuer: "Politeknik Negeri Batam",
      year: "2026",
      image: "/pbl-digisurat.jpg" 
    },
    {
      title: "Project Based Learning: RambuID",
      issuer: "Politeknik Negeri Batam",
      year: "2026",
      image: "/pbl-rambuid.jpg" 
    },
    {
      title: "Project Based Learning: Insphony",
      issuer: "Politeknik Negeri Batam",
      year: "2025",
      image: "/pbl-insphony.jpg" 
    },
    {
      title: "Project Based Learning: Mahasigma Reservation",
      issuer: "Politeknik Negeri Batam",
      year: "2024",
      image: "/pbl-mahasigma.jpg" 
    },
    {
      title: "Kelas Belajar Dasar AI",
      issuer: "Dicoding Indonesia",
      year: "2025",
      image: "/dicoding.jpg" 
    },
    {
      title: "Level Up Networking dengan Cisco",
      issuer: "HMTI Politeknik Negeri Batam",
      year: "2024",
      image: "/metaka.jpg" 
    },
    {
      title: "Workshop: Programmer & Era AI",
      issuer: "BLUG Politeknik Negeri Batam",
      year: "2024",
      image: "/blug.jpg" 
    },
    {
      title: "Growth Mindset & Mindfulness",
      issuer: "ESQ Leadership Center",
      year: "2025",
      image: "/esq.jpg" 
    },
    {
      title: "Seminar Literasi & Keamanan Digital",
      issuer: "Kementerian Kominfo RI",
      year: "2024",
      image: "/kominfo.jpg" 
    }
  ];

  // Modifikasi: Menggabungkan tech stack jadi satu list rata tanpa kategori, hanya menggunakan teknologi ril dengan logo resmi
  const skills = [
    { name: "JavaScript", icon: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" },
    { name: "PHP", icon: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" },
    { name: "Python", icon: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
    { name: "React.js", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "Laravel", icon: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg" },
    { name: "Flutter", icon: "/flutter.png" },
    { name: "Tailwind CSS", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    { name: "MySQL", icon: "/mysql.png" },
    { name: "Vite", icon: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg" },
    { name: "Git", icon: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg" }
  ];

  return (
    <section className="w-full py-20 px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide">Portfolio Showcase</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Explore my journey through projects, certifications, and technical expertise.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <button 
            onClick={() => setActiveTab('projects')}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 cursor-pointer text-sm tracking-wide ${
              activeTab === 'projects' 
              ? 'bg-cyan-600 text-slate-900 font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)]' 
              : 'bg-slate-900/40 text-gray-400 hover:bg-slate-900/80 hover:text-white border border-cyan-500/5'
            }`}
          >
            Projects
          </button>
          
          <button 
            onClick={() => setActiveTab('certificates')}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 cursor-pointer text-sm tracking-wide ${
              activeTab === 'certificates' 
              ? 'bg-cyan-600 text-slate-900 font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)]' 
              : 'bg-slate-900/40 text-gray-400 hover:bg-slate-900/80 hover:text-white border border-cyan-500/5'
            }`}
          >
            Certificates
          </button>

          <button 
            onClick={() => setActiveTab('tech')}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 cursor-pointer text-sm tracking-wide ${
              activeTab === 'tech' 
              ? 'bg-cyan-600 text-slate-900 font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)]' 
              : 'bg-slate-900/40 text-gray-400 hover:bg-slate-900/80 hover:text-white border border-cyan-500/5'
            }`}
          >
            Tech Stack
          </button>
        </motion.div>

        <div className="min-h-[400px]">
          
          {/* Projects Content */}
          {activeTab === 'projects' && (
            <motion.div 
              key="projects-tab"
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {projects.map((project, index) => (
                <div key={index} className="bg-slate-900/40 border border-cyan-500/10 rounded-2xl p-6 hover:bg-slate-900/70 hover:border-cyan-500/30 transition-all group flex flex-col shadow-lg">
                  <div className="w-full h-40 bg-[#0B1120] rounded-xl mb-6 overflow-hidden flex items-center justify-center border border-cyan-500/5 relative">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#03060d] to-transparent opacity-50 group-hover:opacity-20 transition-opacity"></div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">{project.desc}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] font-bold uppercase tracking-wider text-cyan-300 bg-cyan-950/40 px-3 py-1.5 rounded-md border border-cyan-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-cyan-500/10">
                    {project.liveDemoUrl === "#" ? (
                      <button 
                        onClick={(e) => { e.preventDefault(); setShowComingSoon(true); }}
                        className="text-gray-400 text-sm font-bold hover:text-cyan-400 transition-colors cursor-pointer flex items-center gap-1.5"
                      >
                        Live Demo <span className="text-[9px] uppercase tracking-wider bg-cyan-950/80 text-cyan-400 px-1.5 py-0.5 rounded border border-cyan-800">Soon</span>
                      </button>
                    ) : (
                      <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-400 text-sm font-bold hover:text-cyan-300 transition-colors cursor-pointer">
                        Live Demo 
                      </a>
                    )}

                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors cursor-pointer"
                    >
                      Details
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* Certificates Content */}
          {activeTab === 'certificates' && (
            <motion.div 
              key="certificates-tab"
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {certificates.map((cert, index) => (
                <div key={index} className="bg-slate-900/40 border border-cyan-500/10 rounded-2xl p-5 flex flex-col justify-between shadow-xl group hover:border-cyan-500/40 transition-colors">
                  <div 
                    onClick={() => setSelectedCertificate(cert.image)}
                    className="w-full h-48 bg-[#03060d] rounded-xl mb-5 overflow-hidden border border-cyan-500/10 relative cursor-pointer group/img flex items-center justify-center p-2"
                  >
                    <img src={cert.image} alt={cert.title} className="w-full h-full object-contain group-hover/img:scale-105 transition-transform duration-500" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/5 px-2 py-1 rounded border border-cyan-500/10 mb-3 inline-block">
                      ✓ Verified Credential
                    </span>
                    <h3 className="text-lg font-bold text-white mb-1 tracking-wide leading-tight">{cert.title}</h3>
                    <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
                    <p className="text-cyan-600 text-xs font-mono">{cert.year}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* Modifikasi: Render Tech Stack menjadi satu kesatuan grid yang responsif dan rapi */}
          {activeTab === 'tech' && (
            <motion.div 
              key="tech-tab"
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
            >
              {skills.map((skill, sIdx) => (
                <div key={sIdx} className="flex flex-col items-center justify-center text-center gap-3 bg-slate-900/40 border border-cyan-500/10 p-6 rounded-2xl hover:border-cyan-500/30 hover:bg-slate-900/70 transition-all shadow-lg group">
                  <img src={skill.icon} alt={skill.name} className="w-12 h-12 object-contain drop-shadow-sm group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-300 font-medium text-sm tracking-wide">{skill.name}</span>
                </div>
              ))}
            </motion.div>
          )}

        </div>
      </div>

      {/* POP-UP MODAL UNTUK PROJECT DETAILS */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            key="project-detail"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed inset-0 z-40 w-full h-screen bg-[#03060d]/95 backdrop-blur-md pt-[80px] pb-8 px-4 md:px-8 flex justify-center items-center overflow-hidden"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-slate-900 border border-cyan-500/20 rounded-3xl w-full max-w-4xl max-h-[85vh] flex flex-col overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-gray-300 hover:text-white hover:bg-cyan-500/50 transition-colors z-10"
              >
                ✕
              </button>

              <div className="w-full h-40 sm:h-48 md:h-64 bg-[#0B1120] relative shrink-0">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-1 overflow-y-auto">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 shrink-0">{selectedProject.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-4 shrink-0">
                  {selectedProject.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-cyan-300 bg-cyan-950/40 px-3 py-1 rounded-md border border-cyan-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h4 className="text-base md:text-lg font-bold text-gray-200 mb-2 shrink-0">Latar Belakang & Tantangan</h4>
                
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-6">
                  {selectedProject.fullDetails}
                </p>

                <div className="pt-4 border-t border-cyan-500/10 mt-auto shrink-0">
                  <a 
                    href={selectedProject.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block w-full bg-transparent border-2 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 font-bold py-3 px-6 rounded-xl transition-all text-sm text-center"
                  >
                    Source Code GitHub
                  </a>
                </div>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* POP-UP MODAL KHUSUS UNTUK MEMPERBESAR SERTIFIKAT */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-8 bg-[#03060d]/95 backdrop-blur-md"
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative flex flex-col items-end"
              onClick={(e) => e.stopPropagation()} 
            >
              <button 
                onClick={() => setSelectedCertificate(null)}
                className="mb-4 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-cyan-950 hover:bg-cyan-500 text-cyan-400 hover:text-slate-900 rounded-full text-xl md:text-2xl font-bold transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(6,182,212,0.5)] border border-cyan-500/50"
                title="Tutup"
              >
                ✕
              </button>
              <img 
                src={selectedCertificate} 
                alt="Certificate Full Size" 
                className="max-w-full md:max-w-4xl lg:max-w-5xl max-h-[65vh] object-contain rounded-xl shadow-[0_0_50px_rgba(6,182,212,0.2)] border border-cyan-500/30" 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* TOAST NOTIFICATION COMING SOON CREATIVE */}
      <AnimatePresence>
        {showComingSoon && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-[99999] bg-slate-900 border border-cyan-500/40 shadow-[0_0_30px_rgba(6,182,212,0.2)] rounded-2xl px-6 py-4 flex items-center gap-4 pointer-events-none"
          >
            <div className="text-3xl drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">🚀</div>
            <div>
              <h4 className="text-white font-bold text-sm tracking-wide">Website Coming Soon!</h4>
              <p className="text-cyan-400/80 text-xs mt-0.5">Fitur ini masih dalam tahap pengembangan.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Portfolio;