import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingBackground from './components/FloatingBackground';
import ScrollProgress from './components/ScrollProgress';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for a premium feel
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-dark-bg">
        <div className="animate-pulse-slow w-16 h-16 rounded-full border-4 border-accent border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="relative">
      <FloatingBackground />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;