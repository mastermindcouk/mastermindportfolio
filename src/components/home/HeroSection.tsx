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
              <Badge>Now booking video & design projects</Badge>
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
            >
              We Turn Film & Ideas Into{" "}
              <span className="text-gradient">Stories People Remember</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="text-lg text-gray-400 max-w-xl leading-relaxed"
            >
              Master Mind is a digital production company crafting standout
              video editing, motion graphics, and graphic design. From social
              reels to full brand identities — no templates, just original
              work.
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

            {/* <motion.div
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
            </motion.div> */}
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
                  Master Mind Studio
                </span>
              </div>

              {/* Content */}
              <div className="space-y-4 font-mono text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Projects Delivered</span>
                  <span className="text-white font-semibold">120+</span>
                  <span className="text-accent-500 text-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                    Rolling
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Videos Edited</span>
                  <span className="text-white font-semibold">480+</span>
                  <span className="text-brand-400 text-xs flex items-center gap-1">
                    ↑ This month
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Designs Delivered</span>
                  <span className="text-white font-semibold">1.4k</span>
                  <span className="text-gray-500 text-xs">and counting</span>
                </div>

                <div className="pt-4 mt-4 border-t border-white/[0.06] space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-accent-500" />
                    <span className="text-gray-400 text-xs">
                      Latest: Brand launch film
                    </span>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-500">Turnaround</span>
                      <span className="text-brand-400">48h</span>
                    </div>
                    <div className="w-full h-1.5 bg-surface-400 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-brand-500 to-accent-500 rounded-full"
                        style={{ width: "80%" }}
                      />
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">
                    Next delivery: Today, 6pm
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
