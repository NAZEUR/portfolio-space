"use client";

import { motion } from "framer-motion";
import { skillClusters } from "@/data/skills";
import { educationList } from "@/data/education";
import Section from "../ui/Section";
import Image from "next/image";
import { 
  SiFigma, SiNextdotjs, SiTailwindcss, SiLaravel, SiFlask, 
  SiPython, SiPytorch, SiTensorflow, SiKotlin, SiFlutter, SiFirebase 
} from "react-icons/si";
import { FaUsers, FaEye } from "react-icons/fa";
import { MdDesignServices, MdOutlineApi } from "react-icons/md";
import { TbGridDots } from "react-icons/tb";
import { BsBoundingBox } from "react-icons/bs";

// Map skill ID to a specific react-icon component
const iconMap: Record<string, React.ReactNode> = {
  "figma": <SiFigma className="w-5 h-5" />,
  "user-research": <FaUsers className="w-5 h-5" />,
  "design-systems": <MdDesignServices className="w-5 h-5" />,
  "wireframing": <TbGridDots className="w-5 h-5" />,
  "nextjs": <SiNextdotjs className="w-5 h-5" />,
  "tailwind": <SiTailwindcss className="w-5 h-5" />,
  "laravel": <SiLaravel className="w-5 h-5" />,
  "flask": <SiFlask className="w-5 h-5" />,
  "python": <SiPython className="w-5 h-5" />,
  "yolo": <BsBoundingBox className="w-5 h-5" />,
  "pytorch": <div className="flex -space-x-1"><SiPytorch className="w-5 h-5 relative z-10" /><SiTensorflow className="w-5 h-5 relative z-0 opacity-80" /></div>,
  "cv": <FaEye className="w-5 h-5" />,
  "kotlin": <SiKotlin className="w-5 h-5" />,
  "flutter": <SiFlutter className="w-5 h-5" />,
  "firebase": <SiFirebase className="w-5 h-5" />,
  "restapi": <MdOutlineApi className="w-5 h-5" />,
};

export default function Skills() {
  return (
    <Section id="skills" title="Academy & Equipment" subtitle="Educational background and technological weapons mastered" className="relative">
      
      {/* Decorative Assets */}
      <motion.div
        className="absolute bottom-[10%] left-[2%] w-36 h-36 md:w-48 md:h-48 opacity-40 z-0 pointer-events-none"
        animate={{ y: [0, -25, 0], rotate: [0, 8, -8, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image src="/assets/planet4.svg" alt="Planet Decoration" fill sizes="192px" className="object-contain" />
      </motion.div>
      
      <motion.div
        className="absolute top-[10%] right-[5%] w-16 h-16 md:w-20 md:h-20 opacity-70 z-0 pointer-events-none hidden md:block"
        animate={{ y: [0, -15, 0], x: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      >
        <Image src="/assets/alien6.svg" alt="Alien Decoration" fill sizes="80px" className="object-contain" />
      </motion.div>

      <motion.div 
        className="absolute right-[15%] bottom-[5%] w-[80px] h-[80px] z-0 opacity-50 hidden md:block pointer-events-none"
        animate={{ y: [0, 20, 0], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image src="/images/asset/alien2.webp" alt="Alien mascot" fill sizes="80px" className="object-contain" />
      </motion.div>

      <div className="relative z-10 flex flex-col gap-16 mt-8">
        
        {/* --- EDUCATION SECTION --- */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <h3 className="text-2xl font-display font-bold text-white">Academic History</h3>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-accent-gold/50 to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {educationList.map((edu, idx) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="flex items-center gap-5 p-5 rounded-2xl bg-space-mid/30 border border-white/5 backdrop-blur-sm hover:border-accent-gold/50 hover:bg-space-mid/50 transition-colors group"
              >
                {/* Logo */}
                <div className="flex-shrink-0 w-16 h-16 bg-white/5 rounded-xl p-2 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <div className="relative w-full h-full">
                    <Image
                      src={edu.logo}
                      alt={`${edu.institution} logo`}
                      fill
                      sizes="64px"
                      className="object-contain drop-shadow-md"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="flex flex-col">
                  <h4 className="text-lg font-bold text-white leading-tight mb-1 group-hover:text-accent-gold transition-colors">
                    {edu.institution}
                  </h4>
                  <p className="text-sm font-semibold text-text-onspace/80 mb-2">
                    {edu.degree}
                  </p>
                  <div className="inline-block px-3 py-1 rounded-full bg-accent-gold/10 text-accent-gold text-xs font-medium w-fit">
                    {edu.period}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- SKILLS SECTION --- */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <h3 className="text-2xl font-display font-bold text-white">Technologies & Tools</h3>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-nebula-teal/50 to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillClusters.map((cluster, clusterIdx) => (
              <motion.div
                key={cluster.id}
                className="bg-space-mid/30 p-8 rounded-[2rem] border border-white/5 backdrop-blur-sm relative overflow-hidden group flex flex-col h-full"
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
                  className="text-2xl font-display font-bold mb-8 flex items-center gap-3"
                  style={{ color: cluster.color }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                  {cluster.label}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow content-start">
                  {cluster.skills.map((skill) => (
                    <motion.div
                      key={skill.id}
                      className="flex items-center gap-4 bg-space-deep/60 p-4 rounded-xl border border-white/5 hover:bg-space-deep hover:border-white/20 transition-all cursor-default"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div 
                        className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-white/5"
                        style={{ color: cluster.color }}
                      >
                        {iconMap[skill.id]}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-text-onspace">{skill.name}</span>
                        <span className="text-[11px] text-text-onspace/50 mt-0.5 uppercase tracking-wider">{skill.level}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
}
