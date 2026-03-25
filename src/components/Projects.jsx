import React, { useState } from 'react';
import { ExternalLink, Github, ChevronRight, ChevronLeft, X, Image } from 'lucide-react';
import { projects } from '../data';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Helper to trap clicks inside modal and prevent background dismissal
  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject?.gallery) {
      setCurrentImageIndex((prev) => (prev < selectedProject.gallery.length - 1 ? prev + 1 : 0));
    }
  };

  const prevImage = () => {
    if (selectedProject?.gallery) {
      setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : selectedProject.gallery.length - 1));
    }
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

              {/* Project Image - Click to Zoom or open Album */}
              <div
                className="h-48 overflow-hidden relative cursor-pointer"
                onClick={() => openModal(project)}
                title={project.type === 'album' ? "點擊瀏覽相簿" : "點擊放大圖片"}
              >
                {project.type === 'album' && (
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs px-2.5 py-1.5 rounded-md z-20 flex items-center gap-1.5 font-medium shadow-sm">
                    <Image size={14} /> Album ({project.gallery?.length || 0})
                  </div>
                )}
                <div className="absolute inset-0 bg-darker/10 group-hover:bg-transparent transition-colors z-10 w-full h-full flex items-center justify-center">
                  <span className="bg-darker/90 text-text text-sm py-1.5 px-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity transform scale-95 group-hover:scale-100 font-bold shadow-md">
                    {project.type === 'album' ? 'View Album' : 'View Image'}
                  </span>
                </div>
                <img
                  src={project.imgUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1 relative">
                {project.date && (
                  <span className="block text-accent text-sm font-bold mb-1 tracking-wider">{project.date}</span>
                )}
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

      {/* Fullscreen Image / Album Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col justify-center items-center"
            onClick={handleModalContentClick}
          >
            <button
              className="absolute -top-12 right-0 md:-right-4 text-white/70 hover:text-white p-2 transition-colors z-50 bg-black/30 hover:bg-black/80 rounded-full"
              onClick={() => setSelectedProject(null)}
              title="close"
            >
              <X size={28} />
            </button>

            {selectedProject.type === 'album' && selectedProject.gallery ? (
              <div className="relative w-full flex items-center justify-center">
                <button
                  className="absolute left-2 md:-left-8 z-50 bg-black/50 text-white p-2 md:p-3 rounded-full hover:bg-primary transition-colors"
                  onClick={prevImage}
                >
                  <ChevronLeft size={28} />
                </button>

                <div className="relative">
                  <img
                    src={selectedProject.gallery[currentImageIndex]}
                    className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl transition-all duration-300"
                    alt={`${selectedProject.title} preview ${currentImageIndex + 1}`}
                  />
                  <div className="absolute -bottom-10 left-0 right-0 text-center text-white/80 font-medium tracking-widest text-sm">
                    {currentImageIndex + 1} / {selectedProject.gallery.length}
                  </div>
                </div>

                <button
                  className="absolute right-2 md:-right-8 z-50 bg-black/50 text-white p-2 md:p-3 rounded-full hover:bg-primary transition-colors"
                  onClick={nextImage}
                >
                  <ChevronRight size={28} />
                </button>
              </div>
            ) : (
              <img
                src={selectedProject.imgUrl}
                className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
                alt="Project zoom preview"
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
};
export default Projects;
