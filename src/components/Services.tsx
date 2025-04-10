import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChartBarIcon, 
  PresentationChartLineIcon, 
  VideoCameraIcon, 
  UserGroupIcon, 
  ChartPieIcon,
  EllipsisHorizontalCircleIcon,
  CheckIcon,
  DocumentIcon,
  SparklesIcon,
  CalendarDaysIcon,
  FilmIcon,
  GiftIcon,
  UserCircleIcon,
  BoltIcon
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

const premiumServices = [
  {
    title: 'Brand Takeover Week',
    description: '7 Days, 7 Unique Posts, Daily Stories, Live Sessions, and Polls.',
    icon: <CalendarDaysIcon className="w-12 h-12 text-primary" />,
  },
  {
    title: 'Reel Series',
    description: 'Full shoot + posting + boosting + performance report for 30 Reels in 30 Days.',
    icon: <FilmIcon className="w-12 h-12 text-primary" />,
  },
  {
    title: 'Festive Vibe Package',
    description: 'Navratri, Diwali, Summer Sale – theme-based shoot & promo.',
    icon: <GiftIcon className="w-12 h-12 text-primary" />,
  },
  {
    title: 'Face of the Brand Model Campaign',
    description: 'Provide male/female models to represent their brand professionally.',
    icon: <UserCircleIcon className="w-12 h-12 text-primary" />,
  },
];



const Services: React.FC = () => {
  return (
    <section id="services" className="section-padding bg-black-50 text-light">
  
             {/* Premium Services Section */}
             <div className="m-20">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center mb-8">
                <SparklesIcon className="w-8 h-8 text-primary mr-3" />
                <h2 className="heading-lg text-center">Premium Services</h2>
              </div>
              <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                Exclusive campaigns and premium offerings to elevate your brand presence
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {premiumServices.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="card group hover:shadow-xl border-2 border-primary/20 hover:border-primary/40 transition-colors"
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
          
          {/* Regular Services Grid */}
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
            <motion.div
                key={'More Services'}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay:0.6}}
                className="card group hover:shadow-xl"
              >
                <div className="mb-6">{<EllipsisHorizontalCircleIcon className="w-12 h-12 text-primary" />}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors text-dark">
                  {'More Services'}
                </h3>
                <p className="text-gray-600 flex items-center"><DocumentIcon className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />Weekly Report via Google Sheet / PDF</p>
                <p className="text-gray-600 flex items-center"><DocumentIcon className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />Follower Count Growth Chart</p>
                <p className="text-gray-600 flex items-center"><DocumentIcon className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />Engagement (Likes, Comments, Shares, Saves)</p>
                <p className="text-gray-600 flex items-center"><DocumentIcon className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />Story Views & Poll Results</p>
                <p className="text-gray-600 flex items-center"><DocumentIcon className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />How Many Clients DMed / Called</p>
                <p className="text-gray-600 flex items-center"><DocumentIcon className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />Monthly ROI & Strategy Recommendations</p>
              </motion.div>
          </div>

        

       
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 