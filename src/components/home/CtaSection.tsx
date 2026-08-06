"use client";
import { MessageCircle } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { GlowOrb } from "@/components/ui/GlowOrb";

export function CtaSection() {
  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          {/* Animated border wrapper */}
          <div className="rounded-3xl p-[1px] bg-gradient-to-r from-brand-500 via-accent-500 to-brand-500 animate-pulse-slow">
            <div className="relative rounded-3xl bg-surface-200 py-16 px-8 md:py-20 md:px-16 overflow-hidden text-center">
              {/* Glow orb */}
              <GlowOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72" />

              {/* Content */}
              <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                  Have a project? Let&apos;s create something unforgettable.
                </h2>
                <p className="text-lg text-gray-400">
                  From one-off edits to full campaigns — tell us what you need
                  and we&apos;ll craft it.
                </p>

                <div className="flex flex-wrap justify-center gap-4 pt-4">
                  <Button href="/contact" variant="primary" size="lg">
                    Start a Project →
                  </Button>
                  <a
                    href="mailto:mastermind.co.uk@gmail.com"
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-xl text-gray-400 hover:text-white hover:bg-surface-300 transition-all"
                  >
                    mastermind.co.uk@gmail.com
                  </a>
                </div>

                <div className="pt-2">
                  <a
                    href="https://wa.me/2348130845852"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-medium text-sm transition-all active:scale-[0.97]"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
