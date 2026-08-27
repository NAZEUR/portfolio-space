"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { certificates } from "@/data/certificates";
import Section from "../ui/Section";

const categories = ["All", "Dicoding", "Kaggle", "Bangkit & Kampus Merdeka", "Kejuaraan", "Lainnya"];

export default function Certificates() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCertificates = certificates.filter((cert) => 
    activeCategory === "All" ? true : cert.category === activeCategory
  );

  return (
    <Section id="certificates" title="Galaksi Penghargaan" subtitle="Koleksi sertifikat, kursus, dan pencapaian selama ekspedisi" className="bg-space-deep relative overflow-hidden">
      
      {/* Decorative Assets */}
      <motion.div
        className="absolute top-[5%] left-[5%] w-24 h-24 md:w-40 md:h-40 opacity-50 z-0 pointer-events-none hidden md:block"
        animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image src="/assets/planet5.svg" alt="Planet Decoration" fill className="object-contain" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-[10%] right-[2%] w-16 h-16 md:w-28 md:h-28 opacity-60 z-0 pointer-events-none"
        animate={{ y: [0, -15, 0], x: [0, -10, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Image src="/assets/alien7.svg" alt="Alien Decoration" fill className="object-contain" />
      </motion.div>

      <div className="relative z-10 mt-8">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm md:text-base font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-accent-gold text-space-deep shadow-[0_0_15px_rgba(244,201,93,0.5)] scale-105"
                  : "bg-white/10 text-text-onspace/80 hover:bg-white/20 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredCertificates.map((cert) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-space-mid border border-white/10 hover:border-accent-gold/50 cursor-pointer"
              >
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-space-deep/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center">
                  <span className="text-xs font-bold uppercase tracking-widest text-accent-gold mb-2">
                    {cert.issuer}
                  </span>
                  <h3 className="text-lg md:text-xl font-display font-bold text-white drop-shadow-md">
                    {cert.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredCertificates.length === 0 && (
          <div className="text-center py-20 text-white/50">
            Tidak ada sertifikat di kategori ini.
          </div>
        )}
      </div>

    </Section>
  );
}
