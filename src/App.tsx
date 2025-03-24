import React from 'react';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Packages from './components/Packages';
import CaseStudies from './components/CaseStudies';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark to-dark-light relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(30deg,#FF5722_12%,transparent_12.5%,transparent_87%,#FF5722_87.5%,#FF5722),linear-gradient(150deg,#FF5722_12%,transparent_12.5%,transparent_87%,#FF5722_87.5%,#FF5722),linear-gradient(30deg,#FF5722_12%,transparent_12.5%,transparent_87%,#FF5722_87.5%,#FF5722),linear-gradient(150deg,#FF5722_12%,transparent_12.5%,transparent_87%,#FF5722_87.5%,#FF5722),linear-gradient(60deg,#FF572277_25%,transparent_25.5%,transparent_75%,#FF572277_75%,#FF572277)] bg-[length:80px_140px] opacity-5"></div>

        <div className="container relative">
          <div className="text-center">
            <h1 className="heading-xl text-white mb-6">
              Stallion Supreme
              <span className="block text-2xl mt-4 text-primary">Social Media Marketing</span>
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/80">
              Empowering businesses to thrive in the digital space through data-driven social media strategies
            </p>
            <a 
              href="#services" 
              className="btn bg-primary text-white hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main>
        <Services />
        <Packages />
        <CaseStudies />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-dark-lighter text-white py-8">
        <div className="container">
          <div className="text-center">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} Stallion Supreme. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
