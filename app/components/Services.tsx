"use client";

import { motion } from "framer-motion";
import { Home, Wine, Users, Mountain, Utensils, Check } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Private Parties",
    description: "Intimate cocktail experiences for birthdays, anniversaries, and special celebrations in your home or venue.",
    icon: <Home size={32} />,
    features: ["Personalized menu consultation", "Flexible service packages"],
  },
  {
    id: 2,
    title: "Wedding Cocktail Service",
    description: "Signature cocktail menus, professional bartending, and elegant presentation for your special day in the mountains.",
    icon: <Wine size={32} />,
    features: ["Custom cocktail menu design", "Professional bartending staff"],
  },
  {
    id: 3,
    title: "Corporate Events",
    description: "Sophisticated cocktail experiences for conferences, galas, and corporate celebrations with professional service.",
    icon: <Users size={32} />,
    features: ["Scalable service options", "Brand-customized cocktails"],
  },
  {
    id: 4,
    title: "Destination Events",
    description: "Specialized cocktail catering for mountain lodges, ski chalets, and outdoor celebrations.",
    icon: <Mountain size={32} />,
    features: [],
  },
  {
    id: 5,
    title: "Full Bar Service",
    description: "Complete beverage service including wine, beer, and premium spirits alongside our signature cocktails.",
    icon: <Utensils size={32} />,
    features: ["Local craft beer options", "Premium spirit collection"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 px-6 md:px-12 relative theme-slate">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="container mx-auto max-w-7xl"
      >
        <div className="text-center mb-16">
          <span className="text-[var(--accent-gold)] uppercase tracking-widest text-sm font-bold mb-4 block">
            Our Services
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
            Curated for Every Occasion
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="group glass-panel glass-panel-hover p-8 rounded-2xl flex flex-col items-start text-left relative overflow-hidden bg-white/5 border border-white/5 h-full"
            >
              <div className="mb-6 p-4 rounded-full bg-white/5 text-[var(--accent-gold)] group-hover:scale-110 group-hover:bg-[var(--accent-gold)] group-hover:text-black transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-[var(--accent-gold)] transition-colors">
                {service.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              
              {service.features.length > 0 && (
                <ul className="space-y-2 mt-auto w-full">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-white/80">
                      <Check size={16} className="text-[var(--accent-gold)] mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
