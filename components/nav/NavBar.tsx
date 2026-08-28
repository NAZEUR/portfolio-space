"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Scroll Spy for active sections
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      navLinks.forEach((link) => {
        const id = link.href.substring(1);
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActive(link.name);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    
    // Initial check on mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-[60] transition-colors duration-300 ${
          scrolled ? "bg-space-deep/90 backdrop-blur-md shadow-lg border-b border-white/5" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="#home" className="text-xl md:text-2xl font-display font-bold text-accent-gold flex items-center gap-2 z-50">
            Cosmic<span className="text-text-onspace">Explorer</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex space-x-1 bg-space-mid/50 rounded-full p-1 backdrop-blur-sm border border-nebula-purple/30">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setActive(link.name)}
                  className={`block px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
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
            className="hidden lg:inline-block px-6 py-2 rounded-full bg-cta-cream text-text-navy-cta font-semibold hover:scale-105 transition-transform"
          >
            Let's Talk
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white p-2 z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-space-deep/95 backdrop-blur-xl flex flex-col justify-center items-center"
          >
            <ul className="flex flex-col items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => {
                      setActive(link.name);
                      setMobileMenuOpen(false);
                    }}
                    className={`text-2xl font-bold transition-colors ${
                      active === link.name ? "text-accent-gold" : "text-white/70 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="mt-4">
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-8 py-3 rounded-full bg-cta-cream text-text-navy-cta font-bold text-lg"
                >
                  Let's Talk
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
