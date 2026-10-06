"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { profile } from "@/data/profile";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax scroll effects
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const layer1Y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const layer2Y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const avatarY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  // Mouse Parallax effects (3D Floating)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Background moves slightly in opposite direction
  const bgMouseX = useTransform(smoothMouseX, [-0.5, 0.5], ["2%", "-2%"]);
  const bgMouseY = useTransform(smoothMouseY, [-0.5, 0.5], ["2%", "-2%"]);

  // Mid layer moves slightly with the mouse
  const layer1MouseX = useTransform(smoothMouseX, [-0.5, 0.5], ["-3%", "3%"]);
  const layer1MouseY = useTransform(smoothMouseY, [-0.5, 0.5], ["-3%", "3%"]);

  // Foreground layer moves more with the mouse (creating 3D depth)
  const layer2MouseX = useTransform(smoothMouseX, [-0.5, 0.5], ["-6%", "6%"]);
  const layer2MouseY = useTransform(smoothMouseY, [-0.5, 0.5], ["-6%", "6%"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    // Normalize coordinates between -0.5 and 0.5 based on screen center
    const x = (e.clientX / window.innerWidth) - 0.5;
    const y = (e.clientY / window.innerHeight) - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  // Create typing animation sequence: [role1, 2000, role2, 2000, ...]
  const typingSequence = profile.roles.flatMap(role => [role, 2000]);

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full h-screen min-h-[800px] overflow-hidden flex items-center bg-space-deep"
    >
      {/* Background Layers for Parallax */}
      <motion.div className="absolute inset-0 z-0 scale-110" style={{ y: bgY }}>
        <motion.div className="w-full h-full relative" style={{ x: bgMouseX, y: bgMouseY }}>
          <Image
            src="/images/asset/backgroundbelakanghero.webp"
            alt="Deep Space Background"
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
        </motion.div>
      </motion.div>

      <motion.div className="absolute inset-0 z-10 scale-110" style={{ y: layer1Y }}>
        <motion.div className="w-full h-full relative" style={{ x: layer1MouseX, y: layer1MouseY }}>
          <Image
            src="/images/asset/backgroundlayer1hero.webp"
            alt="Space Nebula Layer 1"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </motion.div>

      <motion.div className="absolute inset-0 z-20 scale-110" style={{ y: layer2Y }}>
        <motion.div className="w-full h-full relative" style={{ x: layer2MouseX, y: layer2MouseY }}>
          <Image
            src="/images/asset/backgroundlayer2hero.webp"
            alt="Space Mountains Layer 2"
            fill
            sizes="100vw"
            className="object-cover object-bottom"
          />
        </motion.div>
      </motion.div>

      {/* Floating Elements (UFO, Comet, Aliens) */}
      <motion.div
        className="absolute top-[15%] left-[10%] z-20 w-[100px] h-[60px] md:w-[150px] md:h-[90px]"
        animate={{
          y: [0, -20, 0],
          x: [0, 15, 0],
          rotate: [0, -5, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image src="/images/asset/ufo.webp" alt="UFO" fill sizes="(max-width: 768px) 100px, 150px" className="object-contain" />
      </motion.div>

      <motion.div
        className="absolute top-[10%] right-[20%] z-10 w-[200px] h-[100px] md:w-[300px] md:h-[150px]"
        animate={{
          x: [1000, -1000],
          y: [-500, 500],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
          delay: 2,
        }}
      >
        <Image src="/images/asset/komet.webp" alt="Comet" fill sizes="(max-width: 768px) 200px, 300px" className="object-contain" />
      </motion.div>
      
      {/* Small floating alien 1 */}
      <motion.div
        className="absolute bottom-[30%] left-[40%] z-30 w-[80px] h-[80px]"
        animate={{
          y: [0, -30, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <Image src="/images/asset/alien1.webp" alt="Alien 1" fill sizes="80px" className="object-contain" />
      </motion.div>

      {/* Main Content Area */}
      <div className="relative z-40 max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between mt-20">
        
        {/* Text Content */}
        <motion.div 
          className="w-full md:w-1/2 flex flex-col items-start text-left"
          style={{ y: textY }}
        >
          <p className="text-accent-gold font-medium mb-4 tracking-wider uppercase text-sm md:text-base">
            {profile.tagline}
          </p>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-4 drop-shadow-lg">
            <span className="block text-text-onspace">Nabila</span>
            <span className="block text-accent-gold">Nurhusna Yap</span>
          </h1>
          
          <div className="h-10 overflow-hidden mb-8 flex items-center">
            <TypeAnimation
              sequence={typingSequence}
              wrapper="p"
              speed={50}
              repeat={Infinity}
              className="text-xl md:text-2xl text-text-onspace/90 font-medium"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-cta-cream text-text-navy-cta font-bold rounded-full hover:scale-105 transition-transform shadow-xl shadow-cta-cream/20 text-center"
            >
              Explore Now
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-accent-gold text-accent-gold font-bold rounded-full hover:bg-accent-gold/10 transition-colors text-center"
            >
              Unduh CV
            </a>
          </div>
        </motion.div>

        {/* Astronaut Avatar */}
        <motion.div 
          className="w-full md:w-1/2 h-[400px] md:h-[600px] relative mt-10 md:mt-0"
          style={{ y: avatarY }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            className="w-full h-full relative"
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/images/asset/avatar_pose1.webp"
              alt="Nabila as Astronaut"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain object-right-bottom"
              priority
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient overlay to blend with next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-space-deep to-transparent z-30" />
    </section>
  );
}
