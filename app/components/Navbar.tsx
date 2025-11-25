"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/app/utils/cn";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Cocktails", href: "#cocktails" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 md:px-12",
          scrolled ? "py-4" : "py-8"
        )}
      >
        <div
          className={cn(
            "max-w-7xl mx-auto flex items-center justify-between rounded-2xl px-6 transition-all duration-500",
            scrolled
              ? "bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg py-3"
              : "bg-transparent border-transparent py-4"
          )}
        >
          {/* Logo */}
          <Link href="/" className="relative z-50 group">
            <span className="font-serif text-2xl md:text-3xl font-bold text-white tracking-tight">
              Mountain <span className="text-[var(--accent-gold)] italic">Mixology</span>
            </span>
            <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--accent-gold)] transition-all duration-300 group-hover:w-full" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-1/2 w-0 h-[1px] bg-white/50 -translate-x-1/2 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <Link
              href="#book"
              className="px-6 py-2.5 rounded-full bg-[var(--accent-gold)] text-black font-semibold text-sm hover:bg-[#E5C158] transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:scale-105 active:scale-95"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white z-50 relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-40 bg-black/60 md:hidden flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center gap-8"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl font-serif text-white hover:text-[var(--accent-gold)] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#book"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 px-8 py-3 rounded-full bg-[var(--accent-gold)] text-black font-bold text-lg hover:bg-[#E5C158] transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)]"
              >
                Book Your Event
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
