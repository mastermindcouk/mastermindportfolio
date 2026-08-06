"use client";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const cons = [
  "❌ Generic one-size-fits-all templates",
  "❌ Slow turnarounds that miss your deadline",
  "❌ Hidden fees and very limited revisions",
  "❌ You wait days for updates or previews",
  "❌ Pretty files with no strategy behind them",
];

const pros = [
  "✅ Custom, on-brand creative every time",
  "✅ Fast turnarounds (24–72h on most edits)",
  "✅ Clear, transparent pricing",
  "✅ Direct access to your creative team",
  "✅ Strategy first — not just pretty files",
];

export function WhyUs() {
  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Master Mind
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Traditional */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="card-glass p-8"
          >
            <h3 className="text-lg font-semibold text-gray-400 mb-6">
              Traditional Agencies
            </h3>
            <ul className="space-y-4">
              {cons.map((item) => (
                <li key={item} className="text-gray-500 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Master Mind */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="card-glass p-8 border-brand-500/20"
          >
            <h3 className="text-lg font-semibold text-brand-400 mb-6">
              Master Mind
            </h3>
            <ul className="space-y-4">
              {pros.map((item) => (
                <li key={item} className="text-gray-300 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Quote */}
        <AnimatedSection delay={0.3} className="text-center mt-16">
          <p className="text-2xl md:text-3xl font-display italic text-gray-300 leading-relaxed max-w-2xl mx-auto">
            &ldquo;We don&apos;t just deliver files — we craft stories that grow your brand.&rdquo;
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
