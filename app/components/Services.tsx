"use client";

import { motion } from "framer-motion";
import { GlassWater, PartyPopper, Briefcase, Gem } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Weddings",
    description: "Bespoke bar services for your special day. Custom cocktail menus that tell your love story.",
    icon: <Gem size={32} />,
  },
  {
    id: 2,
    title: "Corporate Events",
    description: "Impress clients and colleagues with a sophisticated mobile bar experience. Professional and polished.",
    icon: <Briefcase size={32} />,
  },
  {
    id: 3,
    title: "Private Parties",
    description: "Elevate your house party or gathering. We bring the bar, the bartender, and the vibe to you.",
    icon: <PartyPopper size={32} />,
  },
  {
    id: 4,
    title: "Luxury Cocktail Bars",
    description: "Full-service pop-up cocktail lounges with premium spirits, crystal glassware, and expert mixologists.",
    icon: <GlassWater size={32} />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[var(--accent-gold)] uppercase tracking-widest text-sm font-bold mb-4 block">
            Our Services
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
            Curated for Every Occasion
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group glass-panel glass-panel-hover p-8 rounded-2xl flex flex-col items-center text-center relative overflow-hidden"
            >
              <div className="mb-6 p-4 rounded-full bg-white/5 text-[var(--accent-gold)] group-hover:scale-110 group-hover:bg-[var(--accent-gold)] group-hover:text-black transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-[var(--accent-gold)] transition-colors">
                {service.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {service.description}
              </p>
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
