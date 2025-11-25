"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const cocktails = [
  {
    id: 1,
    name: "The Summit",
    description: "A smoky, bold blend for the adventurous spirit.",
    image: "/cocktail-1.png",
    ingredients: ["Rye Whiskey", "Smoked Maple Syrup", "Angostura Bitters", "Burnt Rosemary"],
  },
  {
    id: 2,
    name: "Alpine Glow",
    description: "Delicate, floral, and refreshing as a mountain breeze.",
    image: "/cocktail-2.png",
    ingredients: ["Botanical Gin", "Elderflower Liqueur", "Fresh Lemon", "Edible Viola"],
  },
  {
    id: 3,
    name: "Glacier Melt",
    description: "Crisp, clear, and dangerously smooth.",
    image: "/cocktail-1.png", // Reusing for demo
    ingredients: ["Vodka", "Blue Curacao", "White Cranberry", "Dry Ice"],
  },
  {
    id: 4,
    name: "Emerald Lake",
    description: "A herbal masterpiece reflecting the deep green waters.",
    image: "/cocktail-2.png", // Reusing for demo
    ingredients: ["Chartreuse", "Gin", "Lime Juice", "Maraschino"],
  },
];

export default function Cocktails() {
  return (
    <section id="cocktails" className="py-24 px-6 relative bg-black/20">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[var(--accent-gold)] uppercase tracking-widest text-sm font-bold mb-4 block">
            Signature Menu
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
            Liquid Art
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cocktails.map((cocktail, index) => (
            <motion.div
              key={cocktail.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-lg"
            >
              <Image
                src={cocktail.image}
                alt={cocktail.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Default Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-0 flex flex-col justify-end p-6">
                <h3 className="font-serif text-2xl text-white mb-1">{cocktail.name}</h3>
                <p className="text-white/70 text-sm">{cocktail.description}</p>
              </div>

              {/* Hover Overlay (Ingredients) */}
              <div className="absolute inset-0 bg-black/60 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-6 text-center transform translate-y-4 group-hover:translate-y-0">
                <h3 className="font-serif text-2xl text-[var(--accent-gold)] mb-4">{cocktail.name}</h3>
                <ul className="space-y-2">
                  {cocktail.ingredients.map((ing, i) => (
                    <li key={i} className="text-white/90 text-sm font-medium border-b border-white/10 pb-1 last:border-0">
                      {ing}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
