import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0B1120]/80 backdrop-blur-md py-4 border-b border-cyan-500/10 shadow-lg' : 'bg-transparent py-6'
    } px-8 md:px-16 flex justify-between items-center`}>
      
      <div className="text-2xl font-bold text-white cursor-pointer tracking-wider">
        D<span className="text-cyan-400">K</span>
      </div>

      <div className="hidden md:flex gap-8 text-gray-300 font-medium">
        {navLinks.map((link) => (
          <a 
            key={link.id}
            href={`#${link.id}`} 
            className={`relative group transition-colors px-1 py-2 text-sm tracking-wide ${
              activeSection === link.id ? 'text-cyan-400' : 'hover:text-cyan-300'
            }`}
          >
            {link.name}
            
            <span className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 rounded-full ${
              activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;