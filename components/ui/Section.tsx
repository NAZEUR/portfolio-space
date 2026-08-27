"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, title, subtitle, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-20 relative w-full ${className}`}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-accent-gold mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-text-onspace/80 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>
        
        {children}
      </div>
      
      {/* Decorative mountain silhouette at bottom of sections */}
      <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none opacity-30 bg-[url('/images/asset/backgroundlayer2hero.webp')] bg-cover bg-top" />
    </section>
  );
}
