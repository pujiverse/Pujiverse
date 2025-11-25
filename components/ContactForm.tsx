import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { CONTACT_EMAIL, WHATSAPP_LINK, TELEGRAM_CHANNEL_LINK } from '../constants';
import { FaEnvelope, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the email subject and body
    const subject = encodeURIComponent(`Contact from Pujiverse: ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );
    
    // Open the default email client with the data pre-filled
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    console.log('Form Data Submitted:', formData);
    setIsSubmitted(true);
    
    // Reset the form after a delay
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 5000); 
  };

  return (
    <SectionWrapper id="contact">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
        Get in Touch ✉️
      </h2>
      <div className="max-w-xl mx-auto p-8 bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 bg-black/40 border border-gray-600 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 text-white placeholder-gray-500 sm:text-sm transition-colors duration-200"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 bg-black/40 border border-gray-600 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 text-white placeholder-gray-500 sm:text-sm transition-colors duration-200"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 bg-black/40 border border-gray-600 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 text-white placeholder-gray-500 sm:text-sm transition-colors duration-200"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="inline-flex justify-center py-3 px-8 border border-transparent shadow-[0_0_15px_rgba(8,145,178,0.5)] text-lg font-semibold rounded-full text-white bg-cyan-600 hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-all duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
            {isSubmitted && (
              <p className="mt-4 text-green-400 font-medium">
                Opening your email client...
              </p>
            )}
          </div>
        </form>

        <div className="mt-10 pt-6 border-t border-gray-700 text-center">
          <p className="text-lg text-gray-300 mb-4">
            Prefer direct contact? Reach out via:
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 transition-colors duration-300 transform hover:scale-105 border border-gray-600"
            >
              <FaEnvelope className="mr-2" /> Email
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-full shadow-md hover:bg-green-500 transition-colors duration-300 transform hover:scale-105 border border-green-500"
            >
              <FaWhatsapp className="mr-2" /> WhatsApp
            </a>
            <a
              href={TELEGRAM_CHANNEL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-cyan-600 text-white rounded-full shadow-md hover:bg-cyan-500 transition-colors duration-300 transform hover:scale-105 border border-cyan-500"
            >
              <FaTelegramPlane className="mr-2" /> Telegram
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactForm;