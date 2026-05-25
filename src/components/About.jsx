import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  // Data Perjalanan Karir/Pendidikan Anda
  const journey = [
    {
      year: "2022 - Early 2023",
      title: "Foundations of Technology",
      desc: "Memulai perjalanan di Politeknik Negeri Batam. Fokus pada penguasaan algoritma dasar, arsitektur web, dan perancangan User Interface yang responsif.",
      icon: "🏗️"
    },
    {
      year: "Mid 2023 - 2024",
      title: "System & Server Specialization",
      desc: "Mendalami administrasi sistem Linux Ubuntu. Berhasil mengotomatisasi konfigurasi Virtual Machine dan optimasi resource server untuk skalabilitas.",
      icon: "🐧"
    },
    {
      year: "2024 - Present",
      title: "AI & Machine Learning Integration",
      desc: "Fokus pada integrasi Machine Learning dalam aplikasi web. Melakukan riset komparatif algoritma Naive Bayes & k-NN untuk sistem klasifikasi data cerdas.",
      icon: "🧠"
    }
  ];

  return (
    <section className="w-full min-h-screen py-24 px-8 relative z-10 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl w-full"
      >
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">My Journey</h2>
          <p className="text-cyan-400 text-lg font-medium tracking-wide">✨ Turning knowledge into digital solutions</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* SISI KIRI: Bio Singkat & Foto */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-cyan-600/20 to-slate-900 border-2 border-cyan-500/30 rounded-3xl mb-8 flex items-center justify-center relative shadow-[0_0_40px_rgba(6,182,212,0.15)] overflow-hidden"
            >
                <svg className="w-24 h-24 text-cyan-400/20" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                </svg>
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent"></div>
            </motion.div>

            <h3 className="text-3xl font-bold text-white mb-2">Andika Dwi Amanda</h3>
            <p className="text-cyan-400 font-mono text-sm mb-6 uppercase tracking-[0.2em]">IT Student • Batam, ID</p>
            <p className="text-gray-400 leading-relaxed mb-8 text-sm md:text-base">
              Mahasiswa Teknologi Informasi yang berfokus pada efisiensi sistem. Menggabungkan estetika <i>frontend</i> dengan kecerdasan <i>backend</i> untuk menghadirkan teknologi yang fungsional bagi masyarakat luas.
            </p>
            <button className="bg-cyan-600 hover:bg-cyan-500 text-slate-900 font-bold py-3 px-10 rounded-xl transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] cursor-pointer">
                Download CV
            </button>
          </div>

          {/* SISI KANAN: Timeline Journey */}
          <div className="lg:col-span-7 relative">
            {/* Garis Vertikal Timeline */}
            <div className="absolute left-4 lg:left-8 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-500/50 via-blue-500/20 to-transparent"></div>

            <div className="space-y-12">
              {journey.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative pl-12 lg:pl-20"
                >
                  {/* Titik Cahaya (Dot) */}
                  <div className="absolute left-[10px] lg:left-[26px] top-0 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.8)] z-10"></div>
                  
                  {/* Konten Card */}
                  <div className="bg-slate-900/40 border border-cyan-500/10 p-6 rounded-2xl hover:border-cyan-500/30 transition-all hover:bg-slate-900/60 shadow-xl group">
                    <span className="text-xs font-bold text-cyan-500 bg-cyan-500/10 px-3 py-1 rounded-full mb-4 inline-block tracking-widest">
                      {item.year}
                    </span>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{item.icon}</span>
                      <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* Statistik Bar tetap di bawah namun lebih ramping */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
          {[
            { n: "11", t: "Projects" },
            { n: "7", t: "Certificates" },
            { n: "3", t: "Experience" },
            { n: "99%", t: "Uptime" }
          ].map((s, i) => (
            <div key={i} className="text-center p-4 rounded-2xl bg-cyan-500/5 border border-cyan-500/10">
              <div className="text-2xl font-bold text-white">{s.n}</div>
              <div className="text-[10px] uppercase tracking-widest text-cyan-400/70">{s.t}</div>
            </div>
          ))}
        </div>

      </motion.div>
    </section>
  );
};

export default About;