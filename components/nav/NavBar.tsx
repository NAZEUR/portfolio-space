"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-space-deep/90 backdrop-blur-md shadow-lg border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="#home" className="text-2xl font-display font-bold text-accent-gold flex items-center gap-2">
          Cosmic<span className="text-text-onspace">Explorer</span>
        </Link>

        <ul className="hidden md:flex space-x-1 bg-space-mid/50 rounded-full px-2 py-1 backdrop-blur-sm border border-nebula-purple/30">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                onClick={() => setActive(link.name)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === link.name
                    ? "bg-nebula-purple text-text-onspace shadow-md"
                    : "text-text-onspace/80 hover:text-text-onspace hover:bg-space-deep/50"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#contact"
          className="hidden md:inline-block px-6 py-2 rounded-full bg-cta-cream text-text-navy-cta font-semibold hover:scale-105 transition-transform"
        >
          Let's Talk
        </Link>
      </div>
    </motion.nav>
  );
}
