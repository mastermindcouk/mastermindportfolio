"use client";
import { motion } from "framer-motion";

const items = [
  "⚡ Fast Delivery (2–6 weeks)",
  "🧱 Modern Tech Stack",
  "💰 Startup-Friendly Pricing",
  "🎨 UI/UX Included",
  "🔒 Clean, Scalable Architecture",
  "🤝 Full Product Team",
];

export function TrustStrip() {
  return (
    <section className="border-y border-white/[0.06] bg-surface-200 py-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {items.map((item, i) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="inline-flex items-center gap-1.5 text-sm text-gray-400"
            >
              <span className="hidden sm:inline w-1 h-1 rounded-full bg-brand-500/50" />
              {item}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
