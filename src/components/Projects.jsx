import React, { useState } from 'react';
import { ExternalLink, Github, ChevronRight, X } from 'lucide-react';
import { projects } from '../data';

const Projects = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  // Helper to trap clicks inside modal and prevent background dismissal
  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <section id="projects" className="py-20 px-6 lg:px-8 bg-dark/30 border-t border-card relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 text-center">
          <h2 className="text-sm font-semibold text-primary tracking-widest uppercase mb-2">Portfolio</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-text">Featured Projects</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col bg-card rounded-2xl overflow-hidden border border-card shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              
              {/* Project Image - Click to Zoom */}
              <div 
                className="h-48 overflow-hidden relative cursor-pointer"
                onClick={() => setSelectedImg(project.imgUrl)}
                title="點擊放大圖片"
              >
                <div className="absolute inset-0 bg-darker/10 group-hover:bg-transparent transition-colors z-10 w-full h-full flex items-center justify-center">
                   <span className="bg-darker/80 text-text text-sm py-1 px-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity transform scale-95 group-hover:scale-100 font-medium">查看大圖</span>
                </div>
                <img 
                  src={project.imgUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Content */}
              <div className="p-6 flex flex-col flex-1 relative">
                <h4 className="text-xl font-bold text-text mb-3 group-hover:text-primary transition-colors">{project.title}</h4>
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                     <span key={idx} className="text-xs font-semibold text-accent bg-primary/10 px-2 py-1 rounded-md">
                       {tag}
                     </span>
                  ))}
                </div>
                
                <p className="text-sm text-muted/90 mb-6 leading-relaxed flex-1">
                  {project.description}
                </p>
                
                {/* Actions (More Button) -> Right Aligned */}
                <div className="flex justify-end mt-auto pt-4 border-t border-darker">
                  <a 
                    href={project.link || "#"} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center gap-1 text-sm font-bold text-primary hover:text-accent transition-colors py-1 px-2 rounded-lg hover:bg-primary/5"
                  >
                    More <ChevronRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200" 
          onClick={() => setSelectedImg(null)}
        >
          <div 
            className="relative max-w-5xl w-full max-h-[90vh] flex justify-center items-center" 
            onClick={handleModalContentClick}
          >
            <button 
              className="absolute -top-12 right-0 md:-right-12 text-white/70 hover:text-white p-2 transition-colors z-50 bg-black/50 hover:bg-black rounded-full"
              onClick={() => setSelectedImg(null)}
              title="關閉"
            >
              <X size={28} />
            </button>
            <img 
              src={selectedImg} 
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl" 
              alt="Project zoom preview" 
            />
          </div>
        </div>
      )}
    </section>
  );
};
export default Projects;
