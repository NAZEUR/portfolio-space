"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import Section from "../ui/Section";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <Section id="projects" title="Planet yang Disinggahi" subtitle="Misi dan eksplorasi karya desain & pengembangan" className="relative">
      
      {/* Decorative Assets */}
      <motion.div
        className="absolute top-[20%] right-[2%] w-32 h-32 md:w-56 md:h-56 opacity-50 z-0 pointer-events-none"
        animate={{ y: [0, -30, 0], rotate: [0, -10, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image src="/assets/planet2.svg" alt="Planet Decoration" fill className="object-contain" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-[5%] left-[5%] w-20 h-20 md:w-28 md:h-28 opacity-70 z-0 pointer-events-none hidden lg:block"
        animate={{ y: [0, -20, 0], x: [0, -10, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <Image src="/assets/alien4.svg" alt="Alien Decoration" fill className="object-contain" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 mt-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            className="group rounded-[2rem] overflow-hidden bg-space-mid/40 border border-white/10 hover:border-accent-gold/50 transition-colors flex flex-col h-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
          >
            {/* Thumbnail */}
            <div className="relative w-full h-48 overflow-hidden bg-space-deep flex items-center justify-center">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-space-mid via-nebula-purple/50 to-nebula-teal/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <span className="text-6xl font-display font-bold text-white/40 drop-shadow-lg">
                    {project.name.substring(0, 2).toUpperCase()}
                  </span>
                </div>
              )}
              <div className="absolute inset-0 bg-space-deep/20 group-hover:bg-transparent transition-colors pointer-events-none" />
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4 bg-space-deep/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-xs font-semibold text-cta-cream z-10">
                {project.category}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-display font-bold text-text-onspace mb-2 group-hover:text-accent-gold transition-colors">
                {project.name}
              </h3>
              <p className="text-sm text-text-onspace/70 mb-6 flex-grow line-clamp-3">
                {project.description}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map(tech => (
                  <span key={tech} className="text-xs px-2 py-1 bg-white/5 rounded-md text-text-onspace/60">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 mt-auto">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 bg-nebula-teal text-space-deep font-bold rounded-full text-sm hover:scale-105 transition-transform"
                  >
                    Live Demo
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 bg-white/10 text-text-onspace font-bold rounded-full text-sm hover:bg-white/20 transition-colors"
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </Section>
  );
}
