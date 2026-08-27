"use client";

import Link from "next/link";
import { profile } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-space-deep border-t border-white/5 pt-12 pb-6 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col items-center md:items-start">
          <Link href="#home" className="text-xl font-display font-bold text-accent-gold mb-2">
            Cosmic<span className="text-text-onspace">Explorer</span>
          </Link>
          <p className="text-sm text-text-onspace/60">
            © {year} {profile.name}. All rights reserved.
          </p>
        </div>

        <div className="flex gap-4">
          <Link href="#home" className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-sm font-medium transition-colors">
            🚀 Return to Earth
          </Link>
        </div>

      </div>
    </footer>
  );
}
