"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, User, Mail, MessageSquare, GlassWater } from "lucide-react";
import { useState, useEffect } from "react";

interface BookEventModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookEventModal({ isOpen, onClose }: BookEventModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventType: "wedding",
    date: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setFormData({ name: "", email: "", eventType: "wedding", date: "", message: "" });
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="w-full max-w-lg bg-[#0a0f1c] border border-white/10 rounded-2xl shadow-2xl overflow-hidden pointer-events-auto relative">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors z-10"
              >
                <X size={24} />
              </button>

              <div className="p-8">
                {!submitted ? (
                  <>
                    <h2 className="font-serif text-3xl text-white mb-2">Book Your Event</h2>
                    <p className="text-white/60 mb-6 text-sm">
                      Tell us about your occasion, and we'll craft the perfect bar experience.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Name */}
                      <div className="space-y-1">
                        <label className="text-xs uppercase tracking-wider text-white/50 font-semibold">Name</label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                          <input
                            required
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[var(--accent-gold)] focus:ring-1 focus:ring-[var(--accent-gold)] transition-all"
                            placeholder="Jane Doe"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="space-y-1">
                        <label className="text-xs uppercase tracking-wider text-white/50 font-semibold">Email</label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                          <input
                            required
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[var(--accent-gold)] focus:ring-1 focus:ring-[var(--accent-gold)] transition-all"
                            placeholder="jane@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        {/* Event Type */}
                        <div className="space-y-1">
                          <label className="text-xs uppercase tracking-wider text-white/50 font-semibold">Event Type</label>
                          <div className="relative">
                            <GlassWater className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                            <select
                              value={formData.eventType}
                              onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                              className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white appearance-none focus:outline-none focus:border-[var(--accent-gold)] focus:ring-1 focus:ring-[var(--accent-gold)] transition-all"
                            >
                              <option value="wedding" className="bg-[#0a0f1c]">Wedding</option>
                              <option value="corporate" className="bg-[#0a0f1c]">Corporate</option>
                              <option value="private" className="bg-[#0a0f1c]">Private Party</option>
                              <option value="other" className="bg-[#0a0f1c]">Other</option>
                            </select>
                          </div>
                        </div>

                        {/* Date */}
                        <div className="space-y-1">
                          <label className="text-xs uppercase tracking-wider text-white/50 font-semibold">Date</label>
                          <div className="relative">
                            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                            <input
                              required
                              type="date"
                              value={formData.date}
                              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                              className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[var(--accent-gold)] focus:ring-1 focus:ring-[var(--accent-gold)] transition-all [color-scheme:dark]"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Message */}
                      <div className="space-y-1">
                        <label className="text-xs uppercase tracking-wider text-white/50 font-semibold">Message</label>
                        <div className="relative">
                          <MessageSquare className="absolute left-3 top-4 text-white/30" size={18} />
                          <textarea
                            rows={4}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[var(--accent-gold)] focus:ring-1 focus:ring-[var(--accent-gold)] transition-all resize-none"
                            placeholder="Tell us about your vision..."
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-[var(--accent-gold)] text-black font-bold rounded-lg hover:bg-[#E5C158] transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                      >
                        {isSubmitting ? "Sending..." : "Send Inquiry"}
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-serif text-white mb-2">Inquiry Sent!</h3>
                    <p className="text-white/60">We'll be in touch shortly to discuss your event.</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
