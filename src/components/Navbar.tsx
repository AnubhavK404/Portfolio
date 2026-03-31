"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const NAV_ITEMS = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-black/80 py-4 backdrop-blur-lg" : "bg-transparent py-8"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#" className="text-xl font-bold tracking-tighter text-white">
          ANUBHAV.
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-12 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium uppercase tracking-widest text-secondary transition-colors hover:text-white"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-black transition-transform hover:scale-105"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black/95 px-6 py-12 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-2xl font-bold tracking-tighter text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
