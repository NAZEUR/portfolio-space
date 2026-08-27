"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import Section from "../ui/Section";
import Image from "next/image";

export default function Experience() {
  return (
    <Section id="experience" title="Career Trajectory" subtitle="The timeline of my professional journey across the design galaxy" className="bg-space-deep relative overflow-hidden">
      
      {/* Decorative Assets */}
      <motion.div
        className="absolute top-[10%] left-[2%] w-40 h-40 md:w-64 md:h-64 opacity-40 z-0 pointer-events-none"
        animate={{ y: [0, -40, 0], rotate: [0, 15, -15, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image src="/assets/planet3.svg" alt="Planet Decoration" fill className="object-contain" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-[20%] right-[3%] w-24 h-24 md:w-32 md:h-32 opacity-60 z-0 pointer-events-none hidden md:block"
        animate={{ y: [0, -25, 0], x: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <Image src="/assets/alien5.svg" alt="Alien Decoration" fill className="object-contain" />
      </motion.div>

      {/* Central orbit line */}
      <div className="absolute left-1/2 top-40 bottom-20 w-1 bg-gradient-to-b from-nebula-purple/10 via-nebula-purple/50 to-transparent -translate-x-1/2 rounded-full hidden md:block z-0" />

      <div className="max-w-4xl mx-auto mt-16 relative z-10">
        {experience.map((exp, idx) => {
          const isEven = idx % 2 === 0;
          
          return (
            <motion.div
              key={exp.id}
              className={`flex flex-col md:flex-row items-center justify-between mb-16 w-full ${
                isEven ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              {/* Empty space for alternating layout on desktop */}
              <div className="hidden md:block w-[45%]" />

              {/* Center Planet Icon */}
              <div className="hidden md:flex relative w-10 h-10 items-center justify-center z-20">
                <div className="absolute w-4 h-4 bg-accent-gold rounded-full shadow-[0_0_15px_rgba(244,201,93,0.8)]" />
                <motion.div
                  className="absolute w-12 h-12 rounded-full border border-accent-gold/40 border-dashed"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
              </div>

              {/* Content Card */}
              <div className="w-full md:w-[45%] bg-space-mid/40 p-6 rounded-3xl border border-white/5 backdrop-blur-md hover:border-nebula-purple/50 transition-colors shadow-xl shadow-black/20">
                <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-accent-gold mb-3">
                  {exp.period}
                </span>
                <h3 className="text-xl font-display font-bold text-text-onspace mb-1">
                  {exp.role}
                </h3>
                <h4 className="text-md text-text-onspace/70 font-medium mb-4">
                  {exp.org}
                </h4>
                <p className="text-sm text-text-onspace/80 leading-relaxed">
                  {exp.description}
                </p>
                
                {exp.achievements && exp.achievements.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {exp.achievements.map((ach: string, i: number) => (
                      <li key={i} className="text-sm text-text-onspace/70 flex items-start">
                        <span className="text-nebula-teal mr-2 mt-0.5">✦</span>
                        {ach}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

    </Section>
  );
}
