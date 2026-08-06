"use client";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlowOrb } from "@/components/ui/GlowOrb";
import { Clapperboard, PenTool, Palette, Timer } from "lucide-react";

const values = [
  {
    icon: Clapperboard,
    title: "Story-First",
    desc: "We lead with narrative, not just footage — every cut and design decision serves your message.",
  },
  {
    icon: PenTool,
    title: "Craft & Detail",
    desc: "Color, typography, pacing, composition — we sweat the details that make work feel premium.",
  },
  {
    icon: Palette,
    title: "On-Brand Every Time",
    desc: "Every deliverable is built to feel like you — consistent, recognizable, and professional.",
  },
  {
    icon: Timer,
    title: "Deadlines You Can Trust",
    desc: "Creative that respects your schedule, with fast turnarounds and clear communication.",
  },
];

export function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-grid-pattern bg-grid opacity-50 pointer-events-none"
          style={{ backgroundSize: "48px 48px" }}
        />
        <GlowOrb className="top-1/3 left-1/4 w-96 h-96" color="brand" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto">
              We&apos;re a creative studio obsessed with{" "}
              <span className="text-gradient">telling stories</span> that move
              people.
            </h1>
            <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
              No cookie-cutter templates. Just a focused team of editors,
              designers, and motion artists who craft video and visuals that
              make your brand impossible to ignore.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="card-glass p-10 md:p-14 text-center max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl font-display text-gray-200 leading-relaxed">
                &ldquo;Our mission is to help brands of every size tell sharper,
                more memorable stories through standout video editing and
                graphic design — without the agency overhead.&rdquo;
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>


      {/* Values */}
      <section className="py-20 bg-surface-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Our Values</h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <AnimatedSection key={v.title} delay={i * 0.1}>
                  <div className="card-glass p-6 group hover:border-brand-500/30 hover:bg-surface-300/80 transition-all duration-300">
                    <div className="rounded-xl bg-brand-500/10 p-3 w-fit text-brand-400 mb-4 group-hover:bg-brand-500/20 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {v.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
