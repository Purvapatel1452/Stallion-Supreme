import React from 'react';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Packages from './components/Packages';
import CaseStudies from './components/CaseStudies';
import Contact from './components/Contact';
import { motion } from 'framer-motion';
import { BoltIcon, ChartBarIcon, ChartPieIcon, SparklesIcon } from '@heroicons/react/24/outline';

const App: React.FC = () => {
  const taglines = [
    {
      text: "From Scratch to Viral – That's Stallion Style.",
      icon: <BoltIcon className="w-6 h-6" />,
    },
    {
      text: "Stallion Supreme – For the Bold, For the Brands.",
      icon: <SparklesIcon className="w-6 h-6" />,
    },
    {
      text: "Content That Converts, Reports That Matter.",
      icon: <ChartBarIcon className="w-6 h-6" />,
    },
    {
      text: "Why Just Exist? When You Can Dominate!",
      icon: <ChartPieIcon className="w-6 h-6" />,
    },
  ];
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
            We Don’t Just Post, We Perform.
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
      
              {/* Taglines Section */}
              <div className="my-20 relative">
            <div className="absolute inset-0 bg-primary/5 -skew-y-3 transform"></div>
            <div className="relative py-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {taglines.map((tagline, index) => (
                  <motion.div
                    key={tagline.text}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-4 p-6 bg-white/5 rounded-lg backdrop-blur-sm border border-primary/10 hover:border-primary/20 transition-all duration-300"
                  >
                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                      {tagline.icon}
                    </div>
                    <p className="text-xl font-semibold text-dark">
                      {tagline.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
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
