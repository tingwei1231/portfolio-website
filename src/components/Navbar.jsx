import React, { useState, useEffect } from 'react';
import { Mail, Phone, Github, Linkedin, Menu, X } from 'lucide-react';
import { personalInfo } from '../data';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Research', href: '#research' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-darker/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
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
              <a href={`mailto:${personalInfo.email}`} className="text-muted hover:text-primary transition-colors"><Mail size={18} /></a>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-muted hover:text-primary transition-colors"><Github size={18} /></a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-muted hover:text-primary transition-colors"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-text" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-card mt-4 rounded-b-2xl shadow-xl py-6 flex flex-col items-center border-t border-dark">
          <ul className="flex flex-col space-y-4 text-center mb-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} onClick={() => setIsMenuOpen(false)} className="text-text hover:text-primary transition-colors font-medium">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-6 pt-6 border-t border-dark w-full justify-center">
            <a href={`mailto:${personalInfo.email}`} className="text-muted hover:text-primary transition-colors"><Mail size={22} /></a>
            <a href={personalInfo.github} className="text-muted hover:text-primary transition-colors"><Github size={22} /></a>
            <a href={personalInfo.linkedin} className="text-muted hover:text-primary transition-colors"><Linkedin size={22} /></a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
