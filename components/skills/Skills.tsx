"use client";

import { motion } from "framer-motion";
import { skillClusters } from "@/data/skills";
import Section from "../ui/Section";
import Image from "next/image";

export default function Skills() {
  return (
    <Section id="skills" title="Perlengkapan Misi" subtitle="Teknologi dan alat yang digunakan untuk menaklukkan setiap tantangan" className="relative">
      
      {/* Decorative Assets */}
      <motion.div
        className="absolute bottom-[10%] left-[2%] w-36 h-36 md:w-48 md:h-48 opacity-40 z-0 pointer-events-none"
        animate={{ y: [0, -25, 0], rotate: [0, 8, -8, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image src="/assets/planet4.svg" alt="Planet Decoration" fill className="object-contain" />
      </motion.div>
      
      <motion.div
        className="absolute top-[10%] right-[5%] w-16 h-16 md:w-20 md:h-20 opacity-70 z-0 pointer-events-none hidden md:block"
        animate={{ y: [0, -15, 0], x: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      >
        <Image src="/assets/alien6.svg" alt="Alien Decoration" fill className="object-contain" />
      </motion.div>

      {/* Decorative floating alien (original) */}
      <motion.div 
        className="absolute right-[15%] bottom-[5%] w-[80px] h-[80px] z-0 opacity-50 hidden md:block pointer-events-none"
        animate={{ y: [0, 20, 0], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image src="/images/asset/alien2.webp" alt="Alien mascot" fill className="object-contain" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 mt-8">
        {skillClusters.map((cluster, clusterIdx) => (
          <motion.div
            key={cluster.id}
            className="bg-space-mid/30 p-8 rounded-[2rem] border border-white/5 backdrop-blur-sm relative overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: clusterIdx * 0.1 }}
            style={{ 
              boxShadow: `0 0 0 rgba(0,0,0,0)`,
            }}
            whileHover={{ 
              boxShadow: `0 10px 40px -10px ${cluster.color}40`,
              borderColor: `${cluster.color}50`
            }}
          >
            {/* Top accent line */}
            <div 
              className="absolute top-0 left-0 right-0 h-1" 
              style={{ backgroundColor: cluster.color }} 
            />

            <h3 
              className="text-2xl font-display font-bold mb-6 flex items-center gap-3"
              style={{ color: cluster.color }}
            >
              {/* Simple star icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              {cluster.label}
            </h3>

            <div className="flex flex-wrap gap-3">
              {cluster.skills.map((skill) => (
                <motion.div
                  key={skill.id}
                  className="px-4 py-2 rounded-full bg-space-deep/60 border border-white/10 text-sm font-medium flex flex-col items-start hover:bg-space-deep transition-colors"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="text-text-onspace">{skill.name}</span>
                  <span className="text-[10px] text-text-onspace/50 mt-0.5">{skill.level}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
