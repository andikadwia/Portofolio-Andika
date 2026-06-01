import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  // Data Informasi Kontak Anda (Silakan ubah value dan link-nya)
  const contactInfo = [
    {
      platform: "Email",
      value: "andikadwiamanda@gmail.com",
      // Gunakan link API langsung ke Gmail web
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=andikadwiamanda@gmail.com",
      icon: <FaEnvelope />,
      color: "text-rose-400"
    },
    {
      platform: "LinkedIn",
      value: "Andika Dwi Amanda",
      link: "https://linkedin.com/in/andikadwia",
      icon: <FaLinkedin />,
      color: "text-blue-400"
    },
    {
      platform: "GitHub",
      value: "andikadwia",
      link: "https://github.com/andikadwia",
      icon: <FaGithub />,
      color: "text-white"
    },
    {
      platform: "Instagram",
      value: "@lumivillee",
      link: "https://instagram.com/lumivillee",
      icon: <FaInstagram />,
      color: "text-pink-400"
    }
  ];

  return (
    <section className="w-full py-24 px-8 relative z-10 mb-10">
      <div className="max-w-5xl mx-auto">
        
        {/* Header dengan Animasi Timbul Berulang */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide">Contact Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Meskipun saya tidak menyediakan formulir kontak langsung di sini, Anda tetap bisa terhubung dengan saya melalui platform di bawah ini. Saya selalu terbuka untuk diskusi, kolaborasi, atau peluang profesional baru!
          </p>
        </motion.div>

        {/* Grid Kotak Kontak */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactInfo.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }} // Delay agar munculnya bergantian
              viewport={{ once: false, amount: 0.2 }}
            >
              <a 
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-6 bg-slate-900/40 border border-cyan-500/10 rounded-2xl hover:bg-slate-900/70 hover:border-cyan-500/40 transition-all duration-300 group shadow-lg hover:shadow-cyan-500/10 cursor-pointer"
              >
                {/* Ikon dengan efek membesar saat di-hover */}
                <div className="w-16 h-16 bg-[#0B1120] rounded-full flex items-center justify-center text-3xl mr-6 border border-cyan-500/5 group-hover:scale-110 transition-transform duration-300">
                  <span className={contact.color}>{contact.icon}</span>
                </div>
                
                {/* Teks Informasi */}
                <div>
                  <h4 className="text-gray-400 text-sm font-medium tracking-wide mb-1 uppercase">{contact.platform}</h4>
                  <p className="text-white font-bold text-lg group-hover:text-cyan-400 transition-colors tracking-wide">
                    {contact.value}
                  </p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* RESTRUKTURISASI FOOTER MENJADI KELAS PROFESIONAL KOMERSIAL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false, amount: 0.2 }}
          className="mt-28 pt-8 border-t border-cyan-500/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left"
        >
          {/* Kolom Kiri: Hak Cipta Formal Standar Industri */}
          <div>
            <p className="text-gray-500 text-xs tracking-widest uppercase font-medium">
              © {new Date().getFullYear()} Andika Dwi Amanda. All Rights Reserved.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;