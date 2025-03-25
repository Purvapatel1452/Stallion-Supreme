import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';
import type { Package } from '../types';

const packages: Package[] = [
  {
    title: '1-Year Package',
    duration: '12 Months',
    price: '₹55,000',
    features: [
      'Pay for 10 months, Get 2 months FREE!',
      'Full Social Media Management',
      '120 High-Quality Reels (Shoot + Editing)',
      '240 Posters (Daily Active Presence)',
      'Daily Stories to Keep Engagement High',
      'Reels & Stories Optimization',
      'Paid Ad Campaigns',
      'Instagram, Facebook & LinkedIn Handling',
      'Monthly Reports & Growth Strategies'
    ],
    isPopular: true,
  },
  {
    title: '6-Month Package',
    duration: '6 Months',
    price: '₹30,000',
    features: [
      'Full Social Media Management',
      '60 High-Quality Reels (Shoot + Editing)',
      '120 Posters (Daily Active Presence)',
      'Daily Stories to Keep Engagement High',
      'Reels & Stories Optimization',
      'Instagram, Facebook & LinkedIn Handling',
      'Monthly Reports & Growth Strategies'
    ],
  },
  {
    title: '1-Month Package',
    duration: '1 Month',
    price: '₹8,000',
    features: [
      'Full Social Media Management',
      '10 High-Quality Reels (Shoot + Editing)',
      '20 Posters (Daily Active Presence)',
      'Daily Stories to Keep Engagement High',
      'Reels & Stories Optimization',
      'Instagram, Facebook & LinkedIn Handling',
      'Monthly Reports & Growth Strategies'
    ],
  },
];

const Packages: React.FC = () => {
  return (
    <section id="packages" className="section-padding bg-black-50 text-light">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg text-center mb-4">Marketing Packages</h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Choose the perfect package for your business needs and start growing your social media presence today.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`card relative ${pkg.isPopular ? 'border-2 border-primary' : ''}`}
              >
                {pkg.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-dark">{pkg.title}</h3>
                  <p className="text-gray-600 mb-4">{pkg.duration}</p>
                  {/* <div className="text-4xl font-bold text-primary mb-4">{pkg.price}</div> */}
                </div>
                <ul className="space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckIcon className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto text-center">
                  <button className="btn btn-primary w-full">
                    Get Started
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Packages; 