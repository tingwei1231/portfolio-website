import React from 'react';
import { FileText } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Research = () => {
  const { lang, t } = useLanguage();
  const { research } = t;

  return (
    <section id="research" className="py-20 px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="mb-12 text-center md:text-left flex items-center gap-3 justify-center md:justify-start">
        <FileText className="text-primary hidden md:block" size={32} />
        <div>
          <h2 className="text-sm font-semibold text-primary tracking-widest uppercase mb-1">
            {lang === 'zh' ? '學術成就' : 'Academic'}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-text">
            {lang === 'zh' ? '研究與發表' : 'Research & Publications'}
          </h3>
        </div>
      </div>

      <div className="space-y-6">
        {research.map((item, index) => (
          <div key={index} className="bg-card p-6 md:p-8 rounded-2xl border border-transparent shadow-md hover:shadow-xl transition-shadow relative overflow-hidden group">
            <div className="absolute right-0 top-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -mr-10 -mt-10 group-hover:bg-primary/10 transition-colors"></div>
            
            <span className="inline-block px-3 py-1 bg-primary/10 text-accent text-xs font-semibold rounded-full mb-4">
              {item.venue}
            </span>
            <h4 className="text-lg md:text-xl font-bold text-text mb-3 leading-snug group-hover:text-primary transition-colors">
              {item.title}
            </h4>
            <p className="text-muted text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Research;
