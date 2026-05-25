import React from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-white font-sans relative overflow-x-hidden selection:bg-cyan-500/30">
      
      {/* 1. Layar Sapaan (Preloader) */}
      <Preloader />

      {/* 2. Latar Belakang Gradien Siber */}
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-[#0f766e]/20 via-transparent to-transparent z-0 pointer-events-none"></div>

      {/* 3. Navbar Sticky */}
      <Navbar /> 

      {/* 4. Konten Utama */}
      <div className="w-full flex flex-col items-center pt-20">
        <section id="home" className="w-full min-h-screen flex items-center justify-center"><Hero /></section>
        <section id="about" className="w-full min-h-screen flex items-center justify-center"><About /></section>
        <section id="portfolio" className="w-full min-h-screen flex items-center justify-center pt-20"><Portfolio /></section>
        <section id="contact" className="w-full min-h-screen flex items-center justify-center"><Contact /></section>
      </div>

    </div>
  );
}

export default App;