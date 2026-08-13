"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { NeuButton } from "@/components/ui/NeuButton";

const NAV_ITEMS = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#projects" },
  { name: "Experience", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 z-50 w-full px-4 pt-4 sm:px-6">
      <nav
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between transition-all duration-300",
          isScrolled
            ? "neu-nav-floating rounded-xl px-4 py-2.5 sm:px-5"
            : "bg-transparent px-0 py-2"
        )}
      >
        <a
          href="#"
          className="flex items-center gap-2.5 text-sm font-semibold tracking-tight text-foreground sm:text-base"
        >
          <span className="neu-inset-sm flex h-8 w-8 items-center justify-center font-mono text-[11px] text-foreground">
            AB
          </span>
          <span className="hidden sm:inline">Anubhav</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="nav-link px-3.5 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-secondary"
            >
              {item.name}
            </a>
          ))}
          <NeuButton href="#contact" variant="accent" size="sm" className="ml-3">
            Let&apos;s talk
          </NeuButton>
        </div>

        <button
          className="neu-raised-sm flex h-10 w-10 items-center justify-center text-foreground md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5" suppressHydrationWarning />
          ) : (
            <Menu className="h-5 w-5" suppressHydrationWarning />
          )}
        </button>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="neu-nav-floating mx-auto mt-3 max-w-6xl rounded-xl px-6 py-8 md:hidden"
          >
            <div className="flex flex-col items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="w-full rounded-lg py-3 text-center text-lg font-medium text-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <NeuButton
                href="#contact"
                variant="accent"
                size="md"
                className="mt-4 w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Let&apos;s talk
              </NeuButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
