import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChartBarIcon, 
  PresentationChartLineIcon, 
  VideoCameraIcon, 
  UserGroupIcon, 
  ChartPieIcon 
} from '@heroicons/react/24/outline';
import type { Service } from '../types';

const services: Service[] = [
  {
    title: 'Social Media Management',
    description: 'Complete handling of your social media presence, from content creation to community engagement.',
    icon: <ChartBarIcon className="w-12 h-12 text-primary" />,
  },
  {
    title: 'Paid Advertising',
    description: 'Strategic ad campaigns across Facebook, Instagram, LinkedIn, and more for maximum ROI.',
    icon: <PresentationChartLineIcon className="w-12 h-12 text-primary" />,
  },
  {
    title: 'Content Creation',
    description: 'High-quality visuals, videos, and engaging copywriting designed to convert.',
    icon: <VideoCameraIcon className="w-12 h-12 text-primary" />,
  },
  {
    title: 'Influencer Marketing',
    description: 'Connect with influential voices in your industry to amplify your brand reach.',
    icon: <UserGroupIcon className="w-12 h-12 text-primary" />,
  },
  {
    title: 'Analytics & Reporting',
    description: 'Detailed monthly insights and optimization strategies to maximize your social media ROI.',
    icon: <ChartPieIcon className="w-12 h-12 text-primary" />,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="section-padding bg-black-50 text-light">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg text-center mb-4">Our Services</h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            We help businesses grow and thrive in the digital space through comprehensive social media solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card group hover:shadow-xl"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors text-dark">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 