import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Star, Clock, ThumbsUp, Users, Code, Terminal, Database } from 'lucide-react';
import { Stats } from './components/Stats';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-[#14a800] to-[#1f57c3] text-white overflow-hidden">
        <div className="tech-grid opacity-20"></div>
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center relative z-10">
          <h1 className="text-2xl font-bold animate-glow">Portfolio</h1>
          <div className="flex gap-4">
            <a href="#projects" className="hover:text-green-200 transition-colors duration-300">Projects</a>
            <a href="#skills" className="hover:text-green-200 transition-colors duration-300">Skills</a>
            <a href="#testimonials" className="hover:text-green-200 transition-colors duration-300">Testimonials</a>
            <a href="#contact" className="hover:text-green-200 transition-colors duration-300">Contact</a>
          </div>
        </nav>
        
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-2 typewriter">
                Salman Nausher
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 animate-slide-in" style={{ animationDelay: '2.5s' }}>
                Ruby on Rails Developer
              </h3>
              <p className="text-xl mb-8 animate-slide-in" style={{ animationDelay: '2.7s' }}>
                Top Rated PLUS Developer with 4+ years of experience building scalable web applications
              </p>
              <div className="flex gap-4 animate-slide-in" style={{ animationDelay: '2.9s' }}>
                <a href="#contact" className="bg-white text-[#14a800] px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors flex items-center">
                  <Code className="w-5 h-5 mr-2" />
                  Hire Me
                </a>
                <a href="#projects" className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#14a800] transition-colors flex items-center">
                  <Terminal className="w-5 h-5 mr-2" />
                  View Projects
                </a>
              </div>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0 relative animate-fade-in" style={{ animationDelay: '3.1s' }}>
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#14a800] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#1f57c3] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '1s' }}></div>
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000" 
                alt="Modern workspace with code on screen"
                className="rounded-lg shadow-xl relative z-10 animate-float w-full h-auto"
                style={{ animationDelay: '0.5s' }}
              />
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-white opacity-50"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-white opacity-50"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </header>

      <Stats />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />

      <footer className="bg-[#001e00] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-lg">Let's build something amazing together</p>
            </div>
            <div className="flex gap-6">
              <a href="https://github.com" className="hover:text-[#14a800] transition-colors" aria-label="Github">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" className="hover:text-[#14a800] transition-colors" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="mailto:salmanfasttian@gmail.com" className="hover:text-[#14a800] transition-colors" aria-label="Email">
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;