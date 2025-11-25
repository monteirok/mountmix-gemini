"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Parallax */}
      {/* Background Parallax - Removed to show global background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-transparent to-[var(--background)]/80" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.2em" }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="block text-[var(--accent-gold)] text-sm md:text-base font-bold uppercase tracking-widest mb-6"
          >
            Premium Craft Cocktail Catering
          </motion.span>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-8 drop-shadow-2xl">
            Elevated Cocktails, <br />
            <span className="italic text-white/90">Memorable Events</span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Experience the art of mixology in the heart of the Canadian Rockies. 
            Serving Banff, Canmore, Calgary, and Kananaskis with bespoke bar services.
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link 
              href="#book"
              className="group relative px-8 py-4 bg-[var(--accent-gold)] text-black font-semibold rounded-full overflow-hidden shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_60px_rgba(212,175,55,0.6)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Book Your Event <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </Link>
            
            <Link 
              href="#services"
              className="px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-medium hover:bg-white/10 hover:border-white/40 transition-all"
            >
              View Services
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}
