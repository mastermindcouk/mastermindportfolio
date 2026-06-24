"use client";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GlowOrb } from "@/components/ui/GlowOrb";
import { CheckCircle } from "lucide-react";

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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 bg-grid-pattern bg-grid animate-grid-fade pointer-events-none"
        style={{ backgroundSize: "48px 48px" }}
      />

      {/* Glow orbs */}
      <GlowOrb className="top-1/4 -left-32 w-96 h-96" color="brand" />
      <GlowOrb className="bottom-1/4 -right-32 w-80 h-80" color="accent" />

      {/* Radial brand overlay */}
      <div className="absolute inset-0 bg-radial-brand pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <motion.div {...fadeUp(0)}>
              <Badge>Now accepting projects for Q3 2025</Badge>
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
            >
              We Build{" "}
              <span className="text-gradient">Scalable Digital Products</span>{" "}
              — Fast.
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="text-lg text-gray-400 max-w-xl leading-relaxed"
            >
              ScaleStack Labs partners with startups and businesses to ship web
              apps, SaaS platforms, and APIs. No bloat, no agency overhead —
              just clean code and real results.
            </motion.p>

            <motion.div
              {...fadeUp(0.3)}
              className="flex flex-wrap gap-4 items-center"
            >
              <Button href="/contact" variant="primary" size="lg">
                Start a Project →
              </Button>
              <Button href="/work" variant="secondary" size="lg">
                View Our Work
              </Button>
            </motion.div>

            <motion.div
              {...fadeUp(0.35)}
              className="flex items-center gap-4 pt-4"
            >
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-surface-50 bg-surface-400 flex items-center justify-center text-[10px] font-semibold text-gray-400"
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <span className="text-sm text-gray-500">
                Trusted by teams building the future
              </span>
            </motion.div>
          </div>

          {/* Right — floating code card */}
          <motion.div
  initial={{ opacity: 0, x: 40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{
    duration: 0.7,
    delay: 0.5,
    ease: [0.22, 1, 0.36, 1] as const,
  }}
  className="hidden md:block animate-float"
>
            <div className="card-glass glow-brand p-6 w-full max-w-sm mx-auto">
              {/* Card header */}
              <div className="flex items-center gap-2 mb-5 pb-4 border-b border-white/[0.06]">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                </div>
                <span className="text-xs font-mono text-gray-500 ml-2">
                  ScaleStack Dashboard
                </span>
              </div>

              {/* Content */}
              <div className="space-y-4 font-mono text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Projects</span>
                  <span className="text-white font-semibold">7</span>
                  <span className="text-accent-500 text-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                    Active
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Deployments</span>
                  <span className="text-white font-semibold">23</span>
                  <span className="text-brand-400 text-xs flex items-center gap-1">
                    ↑ This week
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Team</span>
                  <span className="text-white font-semibold">4</span>
                  <span className="text-gray-500 text-xs">members</span>
                </div>

                <div className="pt-4 mt-4 border-t border-white/[0.06] space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-accent-500" />
                    <span className="text-gray-400 text-xs">
                      Latest: E-commerce MVP
                    </span>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-500">Status</span>
                      <span className="text-brand-400">80%</span>
                    </div>
                    <div className="w-full h-1.5 bg-surface-400 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-brand-500 to-accent-500 rounded-full"
                        style={{ width: "80%" }}
                      />
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">
                    Next deploy: Today, 6pm
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
