import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="text-xl font-bold text-white mb-2">PRADEEP <span className="text-accent">BEPARI</span></div>
            <p className="text-gray-500 text-sm max-w-xs">
              Backend Engineer specializing in Golang, microservices, and distributed systems.
            </p>
          </div>
          
          <div className="flex gap-8">
            <a href="https://github.com/pradeepbepari" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/pradeep-bepari-99155224a/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
            <a href="mailto:pradeepbepari07@gmail.com" className="text-gray-400 hover:text-white transition-colors">Email</a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Pradeep Bepari. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs flex items-center gap-2">
            Built with <span className="text-accent">React</span>, <span className="text-accent">Tailwind</span> & <span className="text-accent">Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
