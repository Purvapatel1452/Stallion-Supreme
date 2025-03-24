import React from 'react';
import { motion } from 'framer-motion';
import { ArrowTrendingUpIcon } from '@heroicons/react/24/outline';
import type { CaseStudy } from '../types';

const caseStudies: CaseStudy[] = [
  {
    clientName: 'E-commerce Fashion Brand',
    objective: 'Increase engagement and drive online sales through social media.',
    strategy: 'Implemented a mix of organic content and targeted paid advertising campaigns.',
    results: '300% increase in engagement and 150% growth in sales over six months.',
  },
  {
    clientName: 'Local Restaurant Chain',
    objective: 'Build strong online presence and increase foot traffic.',
    strategy: 'Leveraged influencer partnerships and community engagement initiatives.',
    results: 'Gained 10K+ followers and boosted local foot traffic by 40%.',
  },
];

const CaseStudies: React.FC = () => {
  return (
    <section id="case-studies" className="section-padding bg-black-50 text-light">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg text-center mb-4">Case Studies</h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            See how we've helped businesses like yours achieve remarkable growth through strategic social media marketing.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.clientName}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card hover:shadow-xl"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <ArrowTrendingUpIcon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-dark">{study.clientName}</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-primary mb-2 text-dark">Objective</h4>
                        <p className="text-gray-600">{study.objective}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2 text-dark">Strategy</h4>
                        <p className="text-gray-600">{study.strategy}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2 text-dark">Results</h4>
                        <p className="text-gray-600">{study.results}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies; 