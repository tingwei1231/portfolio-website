import React from 'react';
import { Download, ChevronRight } from 'lucide-react';
import { personalInfo } from '../data';

const Hero = () => {
  return (
    <section id="about" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 lg:px-8 max-w-6xl mx-auto relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-accent/5 rounded-full blur-[100px] -z-10"></div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-center md:text-left z-10">
          <p className="text-primary font-medium tracking-widest text-sm uppercase mb-3">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-text mb-4 leading-tight">
            {personalInfo.name.split(' ')[0]} <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              {personalInfo.name.split(' ').slice(1).join(' ')}
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-muted font-light mb-6">
            {personalInfo.title}
          </h2>
          <p className="text-base md:text-lg text-muted/80 leading-relaxed mb-10 max-w-xl mx-auto md:mx-0">
            {personalInfo.about}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a
              href={personalInfo.resumeUrl}
              download
              className="group flex items-center gap-2 bg-primary hover:bg-accent text-white px-8 py-3.5 rounded-full font-medium transition-all shadow-[0_0_20px_rgba(59,130,246,0.25)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] active:scale-95"
            >
              <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
              Download Resume (PDF)
            </a>
            <a
              href="#projects"
              className="group flex items-center gap-2 text-text hover:text-primary px-6 py-3 font-medium transition-colors"
            >
              View Projects
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end relative z-10">
          <div className="relative w-64 h-64 md:w-[350px] md:h-[350px] rounded-[2rem] shadow-[0_20px_40px_rgba(139,161,154,0.25)] transform hover:scale-[1.02] transition-transform duration-500">
            <div className="w-full h-full rounded-[2rem] overflow-hidden border-[6px] border-white bg-card">
              {/* Using a placeholder for the portfolio image, the user can replace this later */}
              <img
                src={personalInfo.imgUrl}
                alt="Profile"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[2rem]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
