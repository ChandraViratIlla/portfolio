'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BsSun, BsMoon, BsList, BsX } from "react-icons/bs";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Handle mounted state
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle scroll to section
  const handleScrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  if (!mounted) {
    return null;
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed w-full z-50 transition-all dark:bg-gray-900/90 duration-300 ${isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg py-6' : 'bg-transparent py-8'}`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-4xl font-[Metropolis] font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                CV
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
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

          {/* Desktop: Social + Theme */}
          <div className="hidden sm:flex items-center space-x-6">
            <div className="flex items-center space-x-4">
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

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-2xl cursor-pointer text-gray-600 dark:text-gray-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <BsSun /> : <BsMoon />}
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-3xl text-gray-600 dark:text-gray-200"
              aria-label="Toggle mobile menu"
            >
              <BsList />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="fixed top-0 right-0 w-2/3 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 p-6 space-y-6"
            >
              <div className="flex justify-between">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl"
                >
                  <BsX />
                </motion.button>
              </div>
              <div className="space-y-6">
                {navItems.map((item) => (
                  <motion.button
                    key={item.name}
                    onClick={() => handleScrollToSection(item.href)}
                    className="font-[Metropolis] text-xl text-gray-700 dark:text-gray-200"
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
              <div className="mt-8 flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-3xl ${social.hoverColor}`}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="text-2xl cursor-pointer text-gray-600 dark:text-gray-200"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <BsSun /> : <BsMoon />}
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
