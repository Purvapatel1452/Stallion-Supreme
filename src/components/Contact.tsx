import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    contact_number: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    if (!formData.from_email && !formData.contact_number) {
      setStatus('error');
      alert('Please provide either an email or a contact number.');
      return;
    }

    try {
      if (form.current) {
        // Prepare the message with sender's email included
        const emailParams = {
          from_name: formData.from_name,
          from_email: formData.from_email,
          contact_number: formData.contact_number,
          message: `From: ${formData.from_name}\nEmail: ${formData.from_email}\nContact: ${formData.contact_number}\n\nMessage:\n${formData.message}`,
          to_email: 'stallionsupreme02@gmail.com'
        };

        await emailjs.send(
          'service_s7k3j9f',
          'template_9y7ddar',
          emailParams,
          'u_rFbVMIR0twf9Ydb'
        );
        
        setStatus('success');
        setFormData({ from_name: '', from_email: '', contact_number: '', message: '' }); // Reset form
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="section-padding bg-primary text-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg text-center mb-4">Get In Touch</h2>
            <p className="text-xl text-center mb-12 opacity-90">
              Ready to transform your social media presence? Let's talk about how we can help your business grow.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="from_name"
                      value={formData.from_name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="from_email"
                      value={formData.from_email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact" className="block text-sm font-medium mb-2">
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      id="contact"
                      name="contact_number"
                      value={formData.contact_number}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
                      placeholder="Your contact number"
                      minLength={10}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full btn bg-white text-primary hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                  
                  {status === 'success' && (
                    <p className="mt-2 text-green-400 text-center">
                      Message sent successfully!
                    </p>
                  )}
                  
                  {status === 'error' && (
                    <p className="mt-2 text-red-400 text-center">
                      Failed to send message. Please try again.
                    </p>
                  )}
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div className="flex items-start space-x-4">
                  <EnvelopeIcon className="w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <a href="mailto:stallionsupreme02@gmail.com" className="opacity-90 hover:opacity-100">
                      stallionsupreme02@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <PhoneIcon className="w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Call Us</h3>
                    <a href="tel:+1234567890" className="opacity-90 hover:opacity-100">
                      +91 92271 44346
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPinIcon className="w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Visit Us</h3>
                    <p className="opacity-90">
                      F/3 Kanku Complex, Opp. Welcome Party Plot,<br />
                      Modhera Road, Mehsana 2
                    </p>
                  </div>
                </div>

                <div className="pt-8">
                  <h3 className="font-semibold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    {/* Add social media icons/links here */}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 