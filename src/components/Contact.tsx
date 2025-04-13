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
  const [errors, setErrors] = useState<{
    name?: string;
    contact?: string;
    message?: string;
  }>({});

  const form = useRef<HTMLFormElement>(null);

  const validateForm = () => {
    const newErrors: {
      name?: string;
      contact?: string;
      message?: string;
    } = {};

    if (!formData.from_name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.from_email.trim() && !formData.contact_number.trim()) {
      newErrors.contact = 'Either email or contact number is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setStatus('error');
      return;
    }

    setStatus('sending');

    try {
      if (form.current) {
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
        setFormData({ from_name: '', from_email: '', contact_number: '', message: '' });
        setErrors({});
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
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const isFormValid = () => {
    return (
      formData.from_name.trim() !== '' &&
      formData.message.trim() !== '' &&
      (formData.from_email.trim() !== '' || formData.contact_number.trim() !== '')
    );
  };

  const getWhatsAppMessage = () => {
    if (!isFormValid()) {
      return 'Please fill in the required fields first';
    }
    return `From: ${formData.from_name}%0AEmail: ${formData.from_email}%0AContact: ${formData.contact_number}%0A%0AMessage: ${formData.message}`;
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
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="from_name"
                      value={formData.from_name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${
                        errors.name ? 'border-red-500' : 'border-white/20'
                      } text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                    )}
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
                      minLength={10}
                      className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${
                        errors.contact ? 'border-red-500' : 'border-white/20'
                      } text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40`}
                      placeholder="Your contact number"
                    />
                    {errors.contact && (
                      <p className="mt-1 text-sm text-red-400">{errors.contact}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${
                        errors.message ? 'border-red-500' : 'border-white/20'
                      } text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40`}
                      placeholder="How can we help you?"
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                    )}
                  </div>
                  <div className="space-y-4">
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full btn bg-white text-primary hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === 'sending' ? 'Sending...' : 'Send Message'}
                    </button>

                    <div className="relative">
                      <a
                        href={isFormValid() ? `https://wa.me/+919898391697?text=${getWhatsAppMessage()}` : '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center w-full px-4 py-3 text-white rounded-lg transition-colors duration-300 ${
                          isFormValid()
                            ? 'bg-green-600 hover:bg-green-700'
                            : 'bg-gray-400 cursor-not-allowed'
                        }`}
                        onClick={(e) => {
                          if (!isFormValid()) {
                            e.preventDefault();
                            alert('Please fill in all required fields (Name, Message, and either Email or Contact) before sending via WhatsApp.');
                          }
                        }}
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        Contact via WhatsApp
                      </a>
                      {!isFormValid() && (
                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm py-2 px-3 rounded-lg whitespace-nowrap">
                          Fill in required fields first
                        </div>
                      )}
                    </div>
                  </div>
                  
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