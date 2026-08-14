"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.6,
    delay,
    ease: [0.22, 1, 0.36, 1] as const,
  },
});

export function HeroSection() {
  return (
    <section className="relative min-h-[78vh] flex items-center overflow-hidden">
      {/* Subtle background */}
      <div
        className="absolute inset-0 bg-grid-pattern bg-grid animate-grid-fade pointer-events-none"
        style={{ backgroundSize: "48px 48px" }}
      />
      <div className="absolute inset-0 bg-radial-brand pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.h1
          {...fadeUp(0)}
          className="text-5xl md:text-7xl font-bold leading-tight tracking-tight"
        >
          We turn film & ideas into{" "}
          <span className="text-gradient">work people remember</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.15)}
          className="mt-6 text-lg md:text-xl text-gray-400 leading-relaxed mx-auto max-w-2xl"
        >
          Master Mind is a UK creative studio. Video editing, graphic design,
          and photography — original work, no templates.
        </motion.p>

        <motion.div {...fadeUp(0.3)} className="mt-10 flex justify-center">
          <Button href="/contact" variant="primary" size="lg">
            Work with us →
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
