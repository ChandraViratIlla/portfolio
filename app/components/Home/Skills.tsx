'use client';

import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiTypescript, SiNextdotjs } from "react-icons/si";

const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "HTML5", icon: <FaHtml5 className="text-5xl text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-5xl text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-5xl text-yellow-400" /> },
      { name: "React", icon: <FaReact className="text-5xl text-blue-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-5xl" /> },
    ]
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", icon: <FaNodeJs className="text-5xl text-green-500" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-5xl text-green-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-5xl text-blue-600" /> },
      { name: "SQL", icon: <FaDatabase className="text-5xl text-purple-500" /> },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold font-[Metropolis] bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-[Metropolis]">
            Technologies I work with
          </p>
        </motion.div>

        <div className="space-y-16">
          {skills.map((skillSet, index) => (
            <motion.div
              key={skillSet.category}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-3xl font-semibold font-[Metropolis] text-gray-800 dark:text-gray-200 mb-8">
                {skillSet.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skillSet.technologies.map((tech) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 20,
                      delay: 0.1,
                    }}
                    className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="flex justify-center items-center"
                      >
                        {tech.icon}
                      </motion.div>
                    </div>
                    <h4 className="text-lg font-semibold text-center text-gray-800 dark:text-gray-200 mt-4">
                      {tech.name}
                    </h4>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
