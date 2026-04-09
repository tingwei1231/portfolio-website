import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  const { lang, t } = useLanguage();
  const { education, experience } = t;

  return (
    <section id="experience" className="py-20 px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="mb-14 text-center">
        <h2 className="text-sm font-semibold text-primary tracking-widest uppercase mb-2">
          {lang === 'zh' ? '我的歷程' : 'My Journey'}
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-text">
          {lang === 'zh' ? '學歷與經歷' : 'Education & Experience'}
        </h3>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
        {/* Education Timeline */}
        <div>
          <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
            <GraduationCap className="text-primary" size={30} />
            <h4 className="text-2xl font-bold text-text">
              {lang === 'zh' ? '學歷' : 'Education'}
            </h4>
          </div>
          <div className="relative border-l-2 border-primary/30 ml-3 md:ml-4">
            {education.map((item, index) => (
              <div key={index} className="mb-10 ml-8 relative group">
                {/* Timeline Dot */}
                <span className="absolute flex items-center justify-center w-5 h-5 bg-primary rounded-full -left-[2.4rem] ring-4 ring-card group-hover:scale-125 transition-transform"></span>
                <div className="bg-card p-6 md:p-7 rounded-2xl shadow-sm border border-darker hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <span className="block mb-2 text-sm font-bold text-primary">{item.date}</span>
                  <h5 className="text-xl font-bold text-text mb-1">{item.title}</h5>
                  <h6 className="text-sm font-medium text-muted mb-3">{item.institution}</h6>
                  <p className="text-muted/90 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div>
          <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
            <Briefcase className="text-accent" size={28} />
            <h4 className="text-2xl font-bold text-text">
              {lang === 'zh' ? '經歷與領導' : 'Experience & Leadership'}
            </h4>
          </div>
          <div className="relative border-l-2 border-accent/30 ml-3 md:ml-4">
            {experience.map((item, index) => (
              <div key={index} className="mb-10 ml-8 relative group">
                {/* Timeline Dot */}
                <span className="absolute flex items-center justify-center w-5 h-5 bg-accent rounded-full -left-[2.4rem] ring-4 ring-card group-hover:scale-125 transition-transform"></span>
                <div className="bg-card p-6 md:p-7 rounded-2xl shadow-sm border border-darker hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <span className="block mb-2 text-sm font-bold text-accent">{item.date}</span>
                  <h5 className="text-xl font-bold text-text mb-1">{item.title}</h5>
                  <h6 className="text-sm font-medium text-muted mb-3">{item.institution}</h6>
                  <p className="text-muted/90 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
