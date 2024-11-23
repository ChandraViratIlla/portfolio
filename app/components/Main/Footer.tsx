'use client';

import Link from 'next/link';
import { 
  FaGithub, 
  FaLinkedin, 
 
  FaEnvelope 
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: FaGithub, 
      href: 'https://github.com/ChandraViratIlla',
      label: 'GitHub'
    },
    { 
      icon: FaLinkedin, 
      href: 'https://www.linkedin.com/in/chandra-virat-illa/',
      label: 'LinkedIn'
    },
    { 
      icon: FaEnvelope, 
      href: 'mailto:maxy22a9@gmail.com',
      label: 'Email'
    }
  ];

  const footerNavigation = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: '/' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: 'javascript:void(0)' },
        { name: 'Documentation', href: 'javascript:void(0)' },
        { name: 'Portfolio', href: 'javascript:void(0)' },
        { name: 'Tutorials', href: 'javascript:void(0)' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: 'javascript:void(0)' },
        { name: 'Terms of Service', href: 'javascript:void(0)' },
        { name: 'Cookies Policy', href: 'javascript:void(0)' },
        { name: 'Disclaimer', href: 'javascript:void(0)' }
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">
              Chandra <span className="text-blue-400">Virat</span>
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Crafting innovative solutions and pushing the boundaries of technology. 
              Passionate about creating meaningful digital experiences.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-300 ease-in-out"
                  aria-label={label}
                >
                  <Icon className="text-2xl" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-3 gap-6 col-span-2">
            {footerNavigation.map((section) => (
              <div key={section.title}>
                <h4 className="text-lg font-semibold mb-4 text-blue-300">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href} 
                        className="text-gray-400 hover:text-white hover:underline transition-colors duration-300"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © {currentYear} Your Brand. All rights reserved.
          </p>
          
          <div className="flex space-x-4 text-sm text-gray-400">
            <Link 
              href="javascript:void(0)" 
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              href="javascript:void(0)" 
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
