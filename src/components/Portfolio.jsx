import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('projects');

  const projects = [
    {
      title: "RambuID",
      desc: "Aplikasi cerdas untuk pengenalan rambu lalu lintas jalanan Indonesia menggunakan teknologi machine learning.",
      tags: ["AI", "Machine Learning", "Python"]
    },
    {
      title: "Sistem Arsip Surat Cerdas",
      desc: "Platform klasifikasi dan pengarsipan surat menggunakan perbandingan performa algoritma Naive Bayes dan K-Nearest Neighbor (k-NN).",
      tags: ["Data Mining", "Algorithms", "Web"]
    },
    {
      title: "Ubuntu VM Configurator",
      desc: "Otomatisasi instalasi dan konfigurasi server Linux Ubuntu 22.04 dengan alokasi resource presisi (2 CPU, 128MB VRAM).",
      tags: ["Linux", "System Admin", "Server"]
    }
  ];

  // DATA SERTIFIKAT
  const certificates = [
    {
      title: "AI Engineer Track Certification",
      issuer: "IDCamp / Indosat Ooredoo Hutchison",
      year: "2025",
      fileName: "/sertifikat-esq.pdf" // Tinggal panggil nama filenya saja
    },
    {
      title: "Machine Learning Specialization",
      issuer: "Dicoding Indonesia / Pijak Scholarship",
      year: "2025",
      fileName: "/sertifikat-pbl-rambuid.pdf"
    }
  ];

  const techCategories = [
    {
      title: "Frontend & UI",
      icon: "🎨",
      skills: [
        { name: "React.js", icon: "⚛️", color: "text-cyan-400" },
        { name: "Tailwind", icon: "🌊", color: "text-cyan-300" },
        { name: "Vite", icon: "⚡", color: "text-indigo-400" }
      ]
    },
    {
      title: "Data & AI",
      icon: "🧠",
      skills: [
        { name: "Python", icon: "🐍", color: "text-blue-400" },
        { name: "Machine L.", icon: "🤖", color: "text-teal-400" },
        { name: "Data Mining", icon: "📊", color: "text-cyan-500" }
      ]
    },
    {
      title: "Infrastructure",
      icon: "⚙️",
      skills: [
        { name: "Ubuntu", icon: "🐧", color: "text-orange-500" },
        { name: "Node.js", icon: "🟩", color: "text-teal-500" },
        { name: "Git", icon: "📚", color: "text-blue-500" }
      ]
    }
  ];

  return (
    <section className="w-full py-20 px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide">Portfolio Showcase</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Explore my journey through projects, certifications, and technical expertise.
          </p>
        </div>

        {/* Tab Navigasi */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            onClick={() => setActiveTab('projects')}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 cursor-pointer text-sm tracking-wide ${
              activeTab === 'projects' 
              ? 'bg-cyan-600 text-slate-900 font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)]' 
              : 'bg-slate-900/40 text-gray-400 hover:bg-slate-900/80 hover:text-white border border-cyan-500/5'
            }`}
          >
            💻 Projects
          </button>
          
          <button 
            onClick={() => setActiveTab('certificates')}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 cursor-pointer text-sm tracking-wide ${
              activeTab === 'certificates' 
              ? 'bg-cyan-600 text-slate-900 font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)]' 
              : 'bg-slate-900/40 text-gray-400 hover:bg-slate-900/80 hover:text-white border border-cyan-500/5'
            }`}
          >
            📜 Certificates
          </button>

          <button 
            onClick={() => setActiveTab('tech')}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 cursor-pointer text-sm tracking-wide ${
              activeTab === 'tech' 
              ? 'bg-cyan-600 text-slate-900 font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)]' 
              : 'bg-slate-900/40 text-gray-400 hover:bg-slate-900/80 hover:text-white border border-cyan-500/5'
            }`}
          >
            ⚙️ Tech Stack
          </button>
        </div>

        <div className="min-h-[400px]">
          
          {/* Projects Content */}
          {activeTab === 'projects' && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {projects.map((project, index) => (
                <div key={index} className="bg-slate-900/40 border border-cyan-500/10 rounded-2xl p-6 hover:bg-slate-900/70 hover:border-cyan-500/30 transition-all group flex flex-col shadow-lg">
                  <div className="w-full h-40 bg-[#0B1120] rounded-xl mb-6 overflow-hidden flex items-center justify-center border border-cyan-500/5 relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <span className="text-slate-600 font-mono text-xs uppercase tracking-widest">System Preview</span>
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
                    <button className="text-cyan-400 text-sm font-bold hover:text-cyan-300 transition-colors cursor-pointer">
                      Live Demo ↗
                    </button>
                    <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors cursor-pointer">
                      Details
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* HIDUPKAN TAMPILAN CERTIFICATES */}
          {activeTab === 'certificates' && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {certificates.map((cert, index) => (
                <div key={index} className="bg-slate-900/40 border border-cyan-500/10 rounded-2xl p-6 flex flex-col justify-between shadow-xl">
                  <div>
                    <span className="text-xs font-mono text-cyan-400 bg-cyan-500/5 px-2 py-1 rounded border border-cyan-500/10 mb-4 inline-block">
                      ✓ Verified Credential
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2 tracking-wide">{cert.title}</h3>
                    <p className="text-gray-400 text-sm mb-1">Penerbit: {cert.issuer}</p>
                    <p className="text-gray-500 text-xs mb-6">Tahun Kelulusan: {cert.year}</p>
                  </div>
                  
                  {/* Tombol yang langsung membuka file PDF di tab baru */}
                  <a 
                    href={cert.fileName}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-white/5 hover:bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-center font-semibold py-2.5 rounded-xl transition-all text-sm block cursor-pointer"
                  >
                    Lihat Dokumen PDF 📄
                  </a>
                </div>
              ))}
            </motion.div>
          )}

          {/* Tech Stack Content */}
          {activeTab === 'tech' && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {techCategories.map((category, idx) => (
                <div key={idx} className="bg-slate-900/40 border border-cyan-500/10 rounded-3xl p-8 shadow-lg">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-cyan-500/10">
                    <span className="text-2xl">{category.icon}</span>
                    <h3 className="text-xl font-bold text-white tracking-wide">{category.title}</h3>
                  </div>
                  <div className="flex flex-col gap-4">
                    {category.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-4 bg-[#0B1120] p-3 rounded-xl border border-cyan-500/5">
                        <span className={`text-3xl ${skill.color} drop-shadow-sm`}>{skill.icon}</span>
                        <span className="text-gray-300 font-medium text-sm tracking-wide">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
};

export default Portfolio;