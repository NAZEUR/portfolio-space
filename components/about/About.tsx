"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/data/profile";
import Section from "../ui/Section";
import Image from "next/image";

const GREETINGS = [
  "Halo!",
  "Hello!",
  "你好!",
  "Bonjour!",
  "こんにちは!"
];

export default function About() {
  const [greetingIndex, setGreetingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % GREETINGS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Section id="about" title="Journey Chronicle" subtitle="The origin and vision of my cosmic exploration" className="bg-space-deep relative overflow-hidden">
      
      {/* Decorative Assets */}
      <motion.div
        className="absolute top-[15%] left-[5%] w-24 h-24 md:w-40 md:h-40 opacity-70 z-0 pointer-events-none"
        animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image src="/assets/planet1.svg" alt="Planet Decoration" fill sizes="160px" className="object-contain" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-[10%] right-[5%] w-16 h-16 md:w-24 md:h-24 opacity-80 z-0 pointer-events-none hidden md:block"
        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Image src="/assets/alien3.svg" alt="Alien Decoration" fill sizes="96px" className="object-contain" />
      </motion.div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16 md:gap-8 mt-16 md:mt-28 relative z-10">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col space-y-6">
          <div className="space-y-2">
            <div className="h-16 overflow-hidden flex items-end">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={greetingIndex}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl md:text-5xl font-display font-bold text-accent-gold"
                >
                  {GREETINGS[greetingIndex]}
                </motion.h2>
              </AnimatePresence>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-display font-bold text-white tracking-wide mt-2">
              I'm <span className="text-accent-gold">{profile.name.split(' ')[0]}</span> {profile.name.split(' ').slice(1).join(' ')}
            </h1>
            
            <p className="text-lg md:text-xl text-text-onspace/80 font-medium font-body pt-3">
              UI/UX Designer & Software Engineer
            </p>
          </div>

          <div className="pt-6">
            <div className="flex items-center gap-6 md:gap-8 bg-space-mid/80 p-5 md:p-6 rounded-2xl border border-white/5 backdrop-blur-md shadow-xl w-fit max-w-full overflow-x-auto no-scrollbar">
              {profile.stats.map((stat, index) => (
                <div key={index} className="flex flex-col gap-1 pr-6 md:pr-8 last:pr-0 border-r last:border-r-0 border-white/10 whitespace-nowrap">
                  <span className="text-xl md:text-2xl font-bold text-white">{stat.value}</span>
                  <span className="text-[10px] md:text-xs uppercase tracking-widest text-text-onspace/60 font-semibold">
                    {stat.label.replace('Skills & Tools Mastered', 'UI/UX & TECH FOCUS').replace('Years of Exploration', 'YEARS CODING').replace('Missions Completed', 'PROJECTS BUILT')}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Avatar (Pop-out effect) */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-16 md:mt-0">
         <div className="w-full md:w-1/2 flex justify-center items-center mt-12 md:mt-0 relative h-[350px] md:h-[450px]">
          {/* Background Circle */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full border-[3px] border-accent-gold"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
             {/* Inner dark circle with dashed border */}
             <div className="absolute inset-[6px] rounded-full border border-dashed border-white/20 bg-space-deep/80" />
          </motion.div>
          
          {/* Avatar Image (Overflowing) */}
          <motion.div
            className="absolute -top-12 left-0 w-full h-[120%] z-10"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/images/asset/avatar_pose2.webp"
              alt="Avatar"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain object-bottom"
              priority
            />
          </motion.div>
          </div>
        </div>

      </div>
    </Section>
  );
}
