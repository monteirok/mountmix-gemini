"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-32 px-6 md:px-12 overflow-hidden theme-navy">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] bg-[var(--accent-gold)]/10 rounded-full blur-[120px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="container mx-auto max-w-6xl"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <span className="text-[var(--accent-gold)] uppercase tracking-widest text-sm font-bold mb-4 block">
              About Us
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Crafting Moments in the <br />
              <span className="text-white/60 italic">Canadian Rockies</span>
            </h2>
            <div className="space-y-6 text-white/70 text-lg leading-relaxed">
              <p>
                Mountain Mixology was born from a passion for exceptional hospitality and the rugged beauty of the Rockies. We believe that every event deserves a signature touch—a flavor profile that lingers in memory long after the last toast.
              </p>
              <p>
                Based in Canmore, we bring the cocktail lounge experience to your wedding, corporate retreat, or private gathering. Our mixologists are artisans, blending premium spirits with locally foraged ingredients and house-made syrups to create liquid art.
              </p>
            </div>
          </div>

          {/* Inner Glass Cards */}
          <div className="relative">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="glass-panel p-8 rounded-2xl relative z-10 md:ml-12 bg-white/5 border border-white/10"
            >
              <h3 className="font-serif text-2xl text-white mb-4">Our Mission</h3>
              <p className="text-white/70">
                To elevate the standard of event bartending by combining luxury service with the wild spirit of the mountains. We don't just pour drinks; we curate experiences.
              </p>
            </motion.div>

            <div className="absolute -top-12 -left-4 md:-left-12 w-64 h-64 bg-white/5 rounded-full blur-2xl -z-10" />
            
            {/* Decorative Image/Card */}
             <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="glass-panel p-8 rounded-2xl mt-6 md:-ml-6 md:mr-12 border-white/10 bg-white/5"
            >
               <h3 className="font-serif text-2xl text-white mb-4">The Experience</h3>
               <p className="text-white/70">
                 From the sound of the shaker to the perfect garnish, every detail is meticulously planned. We handle everything, allowing you to be a guest at your own event.
               </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
