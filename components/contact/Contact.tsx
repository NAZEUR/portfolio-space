"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import Section from "../ui/Section";
import Image from "next/image";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
      
      // Reset success message after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <Section id="contact" title="Kirim Sinyal" subtitle="Hubungi pusat komando untuk kolaborasi atau sekadar menyapa">
      
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 mt-12 bg-space-mid/20 rounded-[3rem] p-8 md:p-12 border border-white/5 backdrop-blur-sm relative overflow-hidden">
        
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-nebula-purple/20 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-nebula-teal/20 rounded-full blur-[80px] pointer-events-none" />

        {/* Contact Info */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center relative z-10">
          <h3 className="text-3xl font-display font-bold text-text-onspace mb-6">
            Mari Jelajahi <span className="text-accent-gold">Galaksi Baru</span> Bersama
          </h3>
          <p className="text-text-onspace/80 mb-8 leading-relaxed">
            Yuk, kirim sinyal — aku akan balas secepat kecepatan cahaya bintang. Terbuka untuk diskusi proyek, kolaborasi, atau sekadar bertukar pikiran.
          </p>

          <div className="flex flex-col space-y-4 mb-8">
            <a href={`mailto:${profile.contact.email}`} className="flex items-center gap-4 text-text-onspace/90 hover:text-accent-gold transition-colors p-4 rounded-2xl bg-space-deep/50 border border-white/5 hover:border-accent-gold/30">
              <div className="w-12 h-12 bg-space-mid rounded-full flex items-center justify-center">
                ✉️
              </div>
              <span className="font-medium">{profile.contact.email}</span>
            </a>
          </div>

          <div className="flex gap-4">
            {profile.contact.linkedin && (
              <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-space-deep flex items-center justify-center text-xl hover:bg-accent-gold hover:text-space-deep transition-all">
                in
              </a>
            )}
            {profile.contact.github && (
              <a href={profile.contact.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-space-deep flex items-center justify-center text-xl hover:bg-accent-gold hover:text-space-deep transition-all">
                gh
              </a>
            )}
            {profile.contact.instagram && (
              <a href={profile.contact.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-space-deep flex items-center justify-center text-xl hover:bg-accent-gold hover:text-space-deep transition-all">
                ig
              </a>
            )}
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-1/2 relative z-10">
          <form onSubmit={handleSubmit} className="bg-space-deep/80 p-8 rounded-3xl border border-white/10 flex flex-col gap-5 shadow-2xl">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-text-onspace/80">Nama Astronot</label>
              <input 
                type="text" 
                id="name" 
                required
                className="bg-space-mid/50 border border-white/10 rounded-xl p-4 text-text-onspace focus:outline-none focus:border-nebula-teal transition-colors"
                placeholder="John Doe"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-text-onspace/80">Frekuensi Komunikasi (Email)</label>
              <input 
                type="email" 
                id="email" 
                required
                className="bg-space-mid/50 border border-white/10 rounded-xl p-4 text-text-onspace focus:outline-none focus:border-nebula-teal transition-colors"
                placeholder="john@earth.com"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-text-onspace/80">Pesan / Sinyal</label>
              <textarea 
                id="message" 
                required
                rows={4}
                className="bg-space-mid/50 border border-white/10 rounded-xl p-4 text-text-onspace focus:outline-none focus:border-nebula-teal transition-colors resize-none"
                placeholder="Houston, we have a project..."
              />
            </div>
            
            <button 
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="mt-2 w-full py-4 bg-cta-cream text-text-navy-cta font-bold rounded-xl hover:bg-accent-gold transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center h-14"
            >
              {status === "idle" && "Kirim Sinyal"}
              {status === "loading" && "Transmitting..."}
              {status === "success" && "Sinyal Diterima! 🚀"}
              {status === "error" && "Gagal Mengirim"}
            </button>
          </form>
        </div>

      </div>
    </Section>
  );
}
