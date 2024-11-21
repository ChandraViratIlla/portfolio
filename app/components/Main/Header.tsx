'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" }, // This links to the skills section by id="skills"
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
];

const socialLinks = [
  { 
    icon: FaGithub, 
    href: "https://github.com/yourusername",
    hoverColor: "hover:text-purple-600"
  },
  { 
    icon: FaLinkedin, 
    href: "https://linkedin.com/in/yourusername",
    hoverColor: "hover:text-blue-600"
  },
  { 
    icon: FaTwitter, 
    href: "https://twitter.com/yourusername",
    hoverColor: "hover:text-sky-500"
  }
];

export default function Header() {
  const [theme, setTheme] = useState<string>('light'); // Default theme is light
  const [isScrolled, setIsScrolled] = useState(false);

  // Check theme in localStorage on load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme('light'); // Default to light theme
    }
  }, []);

  // Apply theme to the document body
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }

    // Save the theme in localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg py-6'
          : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-4xl font-[Metropolis] font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                CV
              </span>
            </Link>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleScrollToSection(item.href)}
                className="relative font-[Metropolis] text-xl font-semibold text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                {item.name}
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-blue-600"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>
            ))}
          </nav>

          {/* Right Side: Social + Theme */}
          <div className="flex items-center space-x-6">
            {/* Social Icons */}
            <div className="hidden sm:flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-2xl text-gray-600 dark:text-gray-200 ${social.hoverColor}`}
                  whileHover={{ scale: 1.2 }}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>

            {/* Theme Toggle */}
            <motion.div
              whileTap={{ scale: 0.9 }}
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-2xl cursor-pointer text-gray-600 dark:text-gray-200"
            >
              {theme === 'dark' ? <BsSun /> : <BsMoon />}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
