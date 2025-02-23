import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <header className="min-h-screen flex flex-col items-center justify-center relative px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            Vishwas B S
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
           Backend Developer / Data Engineer
          </p>
          <div className="flex gap-6 justify-center mb-12">
            <a href="https://github.com" className="hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:john@example.com" className="hover:text-blue-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <ChevronDown 
          size={32} 
          className="absolute bottom-8 animate-bounce text-gray-400"
        />
      </header>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((project) => (
              <div key={project} className="bg-gray-800/50 rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-all">
                <img 
                  src={`https://images.unsplash.com/photo-167${project}000000-xxxxx?auto=format&fit=crop&w=800&q=80`}
                  alt="Project Preview"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
                  <p className="text-gray-400 mb-4">
                    A beautiful and functional web application built with React and TypeScript.
                  </p>
                  <div className="flex gap-4">
                    <a 
                      href="#" 
                      className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300"
                    >
                      View Demo <ExternalLink size={16} />
                    </a>
                    <a 
                      href="#" 
                      className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300"
                    >
                      Source Code <Github size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'JavaScript', 'TypeScript', 'React', 'Node.js',
              'Python', 'Docker', 'AWS', 'GraphQL'
            ].map((skill) => (
              <div 
                key={skill}
                className="p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-xl text-gray-300 mb-8">
            I'm always open to new opportunities and interesting projects.
          </p>
          <a 
            href="mailto:vishwas557bs@gmail.com"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Send Email <Mail size={20} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 border-t border-gray-800">
        <p>© {new Date().getFullYear()} John Developer. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;