"use client";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlowOrb } from "@/components/ui/GlowOrb";
import { Zap, Gauge, Shield, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Speed Without Compromise",
    desc: "We ship fast without cutting corners. Smart architecture from day one.",
  },
  {
    icon: Shield,
    title: "Built to Scale",
    desc: "Every project is built with growth in mind — from database to deployment.",
  },
  {
    icon: Gauge,
    title: "Radical Transparency",
    desc: "Weekly demos, shared Slack channel, and direct access to your builder.",
  },
  {
    icon: Lightbulb,
    title: "Product Thinking First",
    desc: "We don't just write code — we help shape your product strategy.",
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
              We&apos;re a lean team of builders obsessed with{" "}
              <span className="text-gradient">shipping products</span> that
              scale.
            </h1>
            <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
              No account managers. No endless meetings. Just a small,
              experienced team that designs, builds, and ships your product.
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
                &ldquo;Our mission is to help startups and businesses turn ideas
                into scalable digital products — without the agency
                overhead.&rdquo;
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">The Team</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Founder */}
            <AnimatedSection delay={0} className="md:col-span-1">
              <div className="card-glass p-8 text-center group hover:border-brand-500/30 transition-all duration-300">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  SS
                </div>
                <h3 className="text-lg font-semibold text-white">
                  Samuel S.
                </h3>
                <p className="text-sm text-brand-400 font-medium mt-1">
                  Founder &amp; Lead Engineer
                </p>
                <p className="text-sm text-gray-400 mt-3">
                  Full-stack engineer with 8+ years building products for
                  startups and enterprises.
                </p>
              </div>
            </AnimatedSection>

            {/* Frontend */}
            <AnimatedSection delay={0.1}>
              <div className="card-glass p-8 text-center group hover:border-brand-500/30 transition-all duration-300">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center mx-auto mb-4 text-xl font-bold text-white">
                  FE
                </div>
                <h3 className="text-lg font-semibold text-white">
                  Frontend Specialists
                </h3>
                <p className="text-sm text-gray-400 mt-3">
                  React, Next.js, and Tailwind experts crafting pixel-perfect
                  interfaces.
                </p>
              </div>
            </AnimatedSection>

            {/* Backend */}
            <AnimatedSection delay={0.2}>
              <div className="card-glass p-8 text-center group hover:border-brand-500/30 transition-all duration-300">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center mx-auto mb-4 text-xl font-bold text-white">
                  BE
                </div>
                <h3 className="text-lg font-semibold text-white">
                  Backend Engineers
                </h3>
                <p className="text-sm text-gray-400 mt-3">
                  Scalable APIs, databases, and cloud infrastructure
                  specialists.
                </p>
              </div>
            </AnimatedSection>
          </div>
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
