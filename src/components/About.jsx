import React from 'react';
import { motion } from 'framer-motion';
import FotoProfil from '../assets/foto-profil.jpg'; 

const About = () => {
  const experiences = [
    {
      year: "Agustus - Februari 2024",
      title: "Aplikasi Reservasi dan Pemesanan Lapangan Futsal berbasis Web",
      company: "Project Based Learning (PBL) Politeknik Negeri Batam",
      desc: "Aplikasi ini memungkinkan pengguna untuk melihat jadwal lapangan, melakukan reservasi, dan memesan lapangan futsal secara online. Fitur utama meliputi manajemen jadwal, sistem pembayaran, dan notifikasi otomatis."
    },
    {
      year: "Februari - Agustus 2025",
      title: "Aplikasi Reservasi dan Pemesanan Alat Musik berbasis Web",
      company: "Project Based Learning (PBL) Politeknik Negeri Batam",
      desc: "Aplikasi ini memungkinkan pengguna untuk melihat jadwal alat musik, melakukan reservasi, dan memesan alat musik secara online. Fitur utama meliputi manajemen jadwal, sistem pembayaran, dan notifikasi otomatis."
    },
    {
      year: "Agustus - Februari 2026",
      title: "RambuID: Aplikasi Pengenalan Rambu Jalan Raya Indonesia",
      company: "Project Based Learning (PBL) Politeknik Negeri Batam",
      desc: "RambuID adalah aplikasi berbasis web yang menggunakan teknologi pengenalan gambar untuk mengidentifikasi rambu jalan raya Indonesia. Aplikasi ini membantu pengguna memahami arti rambu jalan dengan cepat dan akurat, meningkatkan keselamatan berkendara."
    },
    {
      year: "Februari - Agustus 2027",
      title: "Perbandingan antara Algoritma Naive Bayes dan K-NN untuk Pengarsipan Surat",
      company: "Project Based Learning (PBL) Politeknik Negeri Batam",
      desc: "Penelitian ini membandingkan kinerja algoritma Naive Bayes dan K-NN dalam konteks pengarsipan surat. Evaluasi dilakukan berdasarkan akurasi dalam mengklasifikasikan surat ke dalam kategori yang tepat."
    }
  ];

  const education = [
    {
      year: "2024 - 2027",
      title: "D3 Teknik Informatika",
      school: "Politeknik Negeri Batam",
      desc: "Fokus pada pengembangan sistem informasi, manajemen basis data, dan kecerdasan buatan."
    },
    {
      year: "2021 - 2024",
      title: "Ilmu Pengetahuan Alam",
      school: "SMA Negeri 8 Batam",
      desc: "Lulus dengan pemahaman kuat pada logika analitis dan ilmu dasar."
    }
  ];

  return (
    <section id="about" className="w-full py-24 px-8 relative z-10 bg-[#070a13]/50">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide">About Me</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
        </motion.div>

        {/* BAGIAN 1: FOTO PROFIL & DESKRIPSI SINGKAT */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-24">
          
          {/* Sisi Kiri: Teks Deskripsi */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
              Menghubungkan <span className="text-cyan-400">Logika</span> dengan <span className="text-blue-500">Kreativitas</span>
            </h3>
            <p className="text-gray-400 text-base leading-relaxed mb-6">
              Saya adalah mahasiswa Teknik Informatika yang sangat antusias terhadap rekayasa perangkat lunak dan Artificial Intelligence. Dari mengonfigurasi server Linux hingga membangun antarmuka web modern, saya menikmati setiap proses pemecahan masalah.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              Berbekal pengalaman operasional yang menuntut kedisiplinan dan manajemen waktu yang ketat, saya membawa etos kerja keras tersebut ke dalam setiap baris kode yang saya tulis.
            </p>
            
            <div className="flex gap-4">
              <div className="bg-slate-900/50 border border-cyan-500/20 px-4 py-3 rounded-xl flex-1 text-center">
                <span className="block text-cyan-400 font-bold text-xl mb-1">UI/UX</span>
                <span className="text-gray-500 text-xs uppercase tracking-wider">Frontend</span>
              </div>
              <div className="bg-slate-900/50 border border-cyan-500/20 px-4 py-3 rounded-xl flex-1 text-center">
                <span className="block text-cyan-400 font-bold text-xl mb-1">AI/ML</span>
                <span className="text-gray-500 text-xs uppercase tracking-wider">Data Focus</span>
              </div>
            </div>
          </motion.div>

          {/* Sisi Kanan: Foto Profil & Tombol CV */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
            className="md:w-1/2 flex flex-col items-center justify-center relative"
          >
            {/* Efek Lingkaran Glow di Belakang Foto */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl transform scale-75 -z-10"></div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="w-56 h-56 md:w-72 md:h-72 border-2 border-cyan-500/30 rounded-3xl flex items-center justify-center relative shadow-[0_0_40px_rgba(6,182,212,0.15)] overflow-hidden z-10 bg-[#0B1120] mb-8"
            >
              {/* Ini adalah foto asli Anda */}
              <img src={FotoProfil} alt="Andika Dwi Amanda" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/40 to-transparent"></div>
            </motion.div>
          </motion.div>

        </div>

        {/* BAGIAN 2: TIMELINE PENDIDIKAN & PENGALAMAN */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 border-t border-cyan-500/10 pt-16">
          
          {/* Education Timeline */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-8 flex items-center gap-3">
              <span></span> Education
            </h3>
            <div className="space-y-8 border-l-2 border-cyan-500/20 ml-4 pl-8 relative">
              {education.map((item, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)] group-hover:scale-125 transition-transform"></div>
                  <span className="text-cyan-400 font-mono text-xs mb-1 block">{item.year}</span>
                  <h4 className="text-white font-bold text-lg">{item.title}</h4>
                  <p className="text-cyan-200/70 text-sm mb-2">{item.school}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Work Experience Timeline */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-blue-400 mb-8 flex items-center gap-3">
              <span></span>Project Experience
            </h3>
            <div className="space-y-8 border-l-2 border-blue-500/20 ml-4 pl-8 relative">
              {experiences.map((item, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] group-hover:scale-125 transition-transform"></div>
                  <span className="text-blue-400 font-mono text-xs mb-1 block">{item.year}</span>
                  <h4 className="text-white font-bold text-lg">{item.title}</h4>
                  <p className="text-blue-200/70 text-sm mb-2">{item.company}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;