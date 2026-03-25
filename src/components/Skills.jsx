import React from 'react';
import { skills } from '../data';

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 lg:px-8 bg-dark/30 border-y border-card">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-sm font-semibold text-primary tracking-widest uppercase mb-2">Tech Stack</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-text">Professional Skills</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, skillList], index) => (
            <div key={index} className="bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-card hover:border-primary/30 transition-colors group">
              <h4 className="text-lg font-semibold text-text mb-6 pb-2 border-b border-card group-hover:border-primary/50 transition-colors uppercase tracking-wide text-sm">{category}</h4>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, sIndex) => (
                  <span
                    key={sIndex}
                    className="px-3 py-1.5 bg-darker/80 text-muted/90 text-sm font-medium rounded-lg border border-darker hover:border-primary/50 hover:text-primary transition-all shadow-sm cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;
