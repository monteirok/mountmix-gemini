"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import BookEventModal from "./BookEventModal";

export default function BookEventSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="book" className="py-24 px-6 relative">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-panel p-12 md:p-20 rounded-3xl text-center relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-[var(--accent-gold)]/10 to-transparent opacity-50 pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">
                Ready to Elevate Your Event?
              </h2>
              <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10">
                Secure your date with Mountain Mixology. Whether it's an intimate gathering or a grand celebration, we bring the spirit of the Rockies to you.
              </p>
              
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-10 py-5 bg-[var(--accent-gold)] text-black font-bold text-lg rounded-full hover:bg-[#E5C158] transition-all shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:shadow-[0_0_50px_rgba(212,175,55,0.5)] hover:scale-105 active:scale-95"
              >
                Book Your Event
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <BookEventModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
