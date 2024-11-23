'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/resume.pdf'; // Path to the resume file in the public directory
    link.download = 'Illa_Chandra_Virat_Resume.pdf';
    link.click();
  };

  return (
    <section
      id="about"
      className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full">
              <Image
                src="/assets/image8.jpg"
                alt="Illa Chandra Virat"
                fill
                className="object-cover rounded-xl sm:rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl sm:rounded-2xl" />
            </div>
            <div className="hidden md:block absolute -bottom-8 -right-8 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-3xl opacity-20 animate-pulse" />
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[Metropolis] bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 font-[Metropolis]">
                Passionate Full-Stack Developer crafting digital experiences
              </p>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-[Metropolis]">
              I specialize in building robust and scalable web applications using cutting-edge technologies. 
              With a keen eye for design and a deep understanding of modern web development practices, 
              I create solutions that not only look beautiful but also perform exceptionally.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleResumeDownload}
              className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg sm:rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Download Resume
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
