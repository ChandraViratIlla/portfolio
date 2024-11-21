'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: "LMS Platform",
    description: "Comprehensive Learning Management System with real-time collaboration features",
    image: "/assets/lms-website.png",
    tags: ["Next.js","React.js","Node.js","Express.js","Redis","Redux", "TypeScript", "Tailwind CSS", "MongoDB"],
    link: "#"
  },
  {
    title: "Portfolio Website",
    description: "Modern portfolio website with dark mode and smooth animations",
    image: "/assets/portfolio1.png",
    tags: ["React", "Next.js","Framer Motion", "Tailwind CSS"],
    link: "#"
  },
  {
    title: "Technical Blogs",
    description: "Professional blog featuring technical articles and tutorials",
    image: "/assets/blogs.png",
    tags: ["HTML", "CSS", "Tailwind CSS","JavaScript"],
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold font-[Metropolis] bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-[Metropolis]">
            Some of my recent work
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
