import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { scrollToSection } from '../utils/helpers';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com' },
    { name: 'Email', icon: Mail, url: 'mailto:alex.johnson@example.com' }
  ];

  const quickLinks = [
    { name: 'Home', href: 'hero' },
    { name: 'About', href: 'about' },
    { name: 'Skills', href: 'skills' },
    { name: 'Projects', href: 'projects' },
    { name: 'Resume', href: 'resume' },
    { name: 'Contact', href: 'contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Jabez Mageto</h3>
            <p className="text-gray-400 leading-relaxed">
              Full-Stack Software Engineer specializing in modern web technologies. 
              Building scalable applications with JavaScript, React, and Django.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white rounded-lg transition-all duration-200 transform hover:scale-110"
                  aria-label={link.name}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-3 text-gray-400">
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <a 
                  href="mailto:jabezmageto78@gmail.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  jabezmageto78@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <a 
                  href="tel:+1234567890"
                  className="hover:text-white transition-colors duration-200"
                >
                  +254 768 396296
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p>Nairobi, Kenya</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-1 text-gray-400">
              <p>&copy; {currentYear} Jabez Mageto. Made with</p>
              <Heart className="h-4 w-4 text-red-500" fill="currentColor" />
              <p>using React & Tailwind CSS</p>
            </div>
            
          
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;