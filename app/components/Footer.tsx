"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 theme-navy">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="group inline-block">
              <span className="font-serif text-2xl font-bold text-white tracking-tight group-hover:text-[var(--accent-gold)] transition-colors duration-500">
                Mountain <span className="italic">Mixology</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed">
              Premium craft cocktail catering in the heart of the Canadian Rockies. Elevating events with liquid art.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white/50 hover:text-[var(--accent-gold)] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/50 hover:text-[var(--accent-gold)] transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Explore</h4>
            <ul className="space-y-4">
              {["Home", "About", "Services", "Cocktails", "Book Event"].map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item.toLowerCase().replace(" ", "")}`}
                    className="text-white/50 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-white font-semibold mb-6">Service Areas</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-[var(--accent-gold)]" /> Banff
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-[var(--accent-gold)]" /> Canmore
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-[var(--accent-gold)]" /> Lake Louise
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-[var(--accent-gold)]" /> Kananaskis
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-[var(--accent-gold)]" /> Calgary
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[var(--accent-gold)]" />
                <a href="mailto:hello@mountainmixology.ca" className="hover:text-white transition-colors">
                  hello@mountainmixology.ca
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[var(--accent-gold)]" />
                <a href="tel:+14035550123" className="hover:text-white transition-colors">
                  +1 (403) 555-0123
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} Mountain Mixology. All rights reserved.</p>
          <p>Designed with liquid glass & mountain spirit.</p>
        </div>
      </div>
    </footer>
  );
}
