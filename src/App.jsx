import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Research from './components/Research';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen bg-darker text-text font-sans selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main className="w-full">
        <Hero />
        <Experience />
        <Skills />
        <Research />
        <Projects />
      </main>
      <footer className="w-full py-8 text-center text-muted text-sm bg-dark/50 border-t border-card">
        <p>&copy; {new Date().getFullYear()} Ting-Wei Chen. All rights reserved.</p>
        <p className="mt-2 text-primary/70">Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}

export default App;
