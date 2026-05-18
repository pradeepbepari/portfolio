import React from 'react';
import { motion } from 'framer-motion';
import resumePDF from '../assets/Pradeep Bepari_BE.pdf';

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-5xl"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} className="mb-8 flex justify-start">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium bg-accent/10 text-accent border border-accent/20 backdrop-blur-md">
              <span className="w-1.5 h-1.5 sm:w-2 h-2 rounded-full bg-accent animate-pulse mr-2" />
              Available for new opportunities
            </span>
          </motion.div>

          <motion.h1
            className="text-[12vw] sm:text-7xl md:text-8xl lg:text-[7.5rem] font-bold tracking-tighter mb-8 leading-[0.9] sm:leading-[1.1]"
            variants={item}
          >
            <span className="text-white">PRADEEP </span>
            <span className="bg-gradient-to-r from-accent via-white to-gray-500 bg-clip-text text-transparent">
              BEPARI
            </span>
          </motion.h1>

          <motion.div
            className="max-w-2xl mb-12"
            variants={item}
          >
            <h2 className="text-lg sm:text-2xl md:text-3xl font-light text-gray-400 leading-tight">
              Golang Backend Engineer building <span className="text-white font-medium">scalable microservices</span> and <span className="text-white font-medium">distributed systems</span>.
            </h2>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row justify-start items-stretch sm:items-center gap-4 sm:gap-6 mb-16"
            variants={item}
          >
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 text-center"
            >
              <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10 group-hover:text-black">View Projects</span>
            </a>
            
            <a
              href="#contact"
              className="group px-8 py-4 bg-transparent text-white font-semibold rounded-full border border-white/20 hover:border-accent/50 transition-all duration-300 backdrop-blur-sm text-center"
            >
              Contact Me
            </a>

            <a
              href={resumePDF}
              download="Pradeep Bepari_BE.pdf"
              className="group flex items-center justify-center sm:justify-start gap-2 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <span>Download Resume</span>
              <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </motion.div>

          <motion.div
            className="flex justify-start space-x-6 sm:space-x-8"
            variants={item}
          >
            <a
              href="https://github.com/pradeepbepari"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 text-gray-400 hover:text-accent"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/pradeep-bepari-99155224a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 text-gray-400 hover:text-accent"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator - shifted right to avoid overlapping with left content */}
      <motion.div
        className="absolute bottom-10 right-10 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-accent to-transparent relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-white"
            animate={{ top: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;