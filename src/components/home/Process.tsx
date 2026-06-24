"use client";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { MessageSquare, Pen, Code2, Rocket, HeartHandshake } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: MessageSquare,
    title: "Discovery",
    desc: "We understand your goals, users, and constraints in a focused kick-off call",
  },
  {
    num: "02",
    icon: Pen,
    title: "Design",
    desc: "UI/UX wireframes and high-fidelity mockups before a line of code is written",
  },
  {
    num: "03",
    icon: Code2,
    title: "Build",
    desc: "Iterative development with weekly demos — you always know what's happening",
  },
  {
    num: "04",
    icon: Rocket,
    title: "Test & Launch",
    desc: "QA, performance checks, and deployment to production",
  },
  {
    num: "05",
    icon: HeartHandshake,
    title: "Support",
    desc: "Post-launch monitoring and 30-day support included on all projects",
  },
];

export function Process() {
  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">How We Work</h2>
          <p className="mt-4 text-lg text-gray-400">
            A process designed for speed without sacrificing quality
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Animated progress line — desktop */}
          <div className="hidden lg:block absolute top-12 left-[calc(10%+12px)] right-[calc(10%+12px)] h-px overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="h-full bg-gradient-to-r from-brand-500 to-accent-500 origin-left"
            />
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-4 relative">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <AnimatedSection key={step.num} delay={i * 0.12}>
                  <div className="flex flex-col items-center text-center lg:text-left lg:items-start">
                    {/* Number + icon */}
                    <div className="relative mb-4">
                      <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-surface-300 border border-white/[0.06] flex items-center justify-center relative z-10 group-hover:border-brand-500/30 transition-colors">
                        <Icon className="w-7 h-7 text-brand-400" />
                      </div>
                      {/* Step number */}
                      <span className="absolute -top-2 -right-2 text-[10px] font-mono text-brand-400 bg-surface-50 px-1.5 py-0.5 rounded">
                        {step.num}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed max-w-[220px]">
                      {step.desc}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
