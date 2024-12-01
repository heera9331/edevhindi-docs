import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialLink = ({ icon: Icon, href, label }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-gray-600 transition-colors hover:text-blue-600"
  >
    <Icon className="text-xl" />
    <span>{label}</span>
  </a>
);

const ContactSection = () => {
  return (
    <div className="p-8 rounded-lg shadow-sm bg-gray-50">
      <h3 className="mb-6 text-2xl font-bold text-gray-800">Get in Touch</h3>
      <div className="flex flex-col gap-4">
        <SocialLink 
          icon={FaEnvelope} 
          href="mailto:contact@edevhindi.com" 
          label="contact@edevhindi.com" 
        />
        <SocialLink 
          icon={FaGithub} 
          href="https://github.com/edevhindi" 
          label="GitHub" 
        />
        <SocialLink 
          icon={FaLinkedin} 
          href="https://linkedin.com/company/edevhindi" 
          label="LinkedIn" 
        />
      </div>
    </div>
  );
};

export default ContactSection;