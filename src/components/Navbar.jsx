import React, { useState, useEffect } from 'react';
import { Mail, Phone, Github, Linkedin, Menu, X, Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { lang, toggleLang, t } = useLanguage();
  const { personalInfo } = t;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: lang === 'zh' ? '關於我' : 'About', href: '#about' },
    { name: lang === 'zh' ? '經歷' : 'Experience', href: '#experience' },
    { name: lang === 'zh' ? '技能' : 'Skills', href: '#skills' },
    { name: lang === 'zh' ? '研究' : 'Research', href: '#research' },
    { name: lang === 'zh' ? '作品' : 'Projects', href: '#projects' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-darker/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center gap-4 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent z-50">
            CTW
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6 text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted hover:text-text transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center space-x-4 border-l border-card pl-4">
              <button
                onClick={toggleLang}
                className="flex items-center gap-1.5 text-xs font-bold text-text hover:text-primary transition-colors border border-darker hover:border-primary/50 bg-card px-3 py-1.5 rounded-full shadow-sm"
              >
                <Languages size={14} />
                {lang === 'zh' ? 'EN' : '中文'}
              </button>
              <a href={`mailto:${personalInfo.email}`} className="text-muted hover:text-primary transition-colors"><Mail size={18} /></a>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-muted hover:text-primary transition-colors"><Github size={18} /></a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-muted hover:text-primary transition-colors"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* Mobile Menu Button + Lang Toggle */}
          <div className="md:hidden flex items-center space-x-4 z-50">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 text-xs font-bold text-text hover:text-primary transition-colors bg-card px-2.5 py-1.5 rounded-full shadow-sm"
            >
              <Languages size={14} />
              {lang === 'zh' ? 'EN' : '中'}
            </button>
            <button className="text-text" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-card shadow-xl flex flex-col items-center border-t border-darker pb-6 pt-4 animate-in slide-in-from-top-4">
          <ul className="flex flex-col space-y-5 text-center w-full">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} onClick={() => setIsMenuOpen(false)} className="block w-full text-text hover:text-primary transition-colors font-medium text-lg">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-6 pt-8 mt-4 border-t border-darker w-[80%] justify-center">
            <a href={`mailto:${personalInfo.email}`} className="text-muted hover:text-primary transition-colors"><Mail size={24} /></a>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-muted hover:text-primary transition-colors"><Github size={24} /></a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-muted hover:text-primary transition-colors"><Linkedin size={24} /></a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
