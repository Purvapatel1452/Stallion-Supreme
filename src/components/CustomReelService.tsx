import React from 'react';
import { motion } from 'framer-motion';

const CustomReelService: React.FC = () => {
  return (
    <section id="custom-reel-service" className="section-padding bg-black-50 text-light">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg text-center mb-4">Ek Reel, Dhamaka Deal!</h2>
          <ul className="space-y-4 text-lg">
            <li>Only Voice Over – Professional & impactful voice tone.</li>
            <li>Only Editing – Raw video? We'll turn it into a masterpiece.</li>
            <li>Only Model – Don't want to be on camera? We'll be your face.</li>
            <li>Full Package – From concept to execution, everything in one go.</li>
            <li>Delivery Time – 2-3 days max with express edit options.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomReelService; 