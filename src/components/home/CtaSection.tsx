"use client";
import { MessageCircle } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

export function CtaSection() {
  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="rounded-3xl bg-surface-200 py-16 px-8 md:py-20 md:px-16 text-center border border-white/[0.06]">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-2xl mx-auto">
            Have a project? Let&apos;s talk.
          </h2>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Work with us →
            </Button>
            <a
              href="mailto:mastermind.co.uk@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-4 text-sm font-medium rounded-xl text-gray-400 hover:text-white hover:bg-surface-300 transition-all"
            >
              mastermind.co.uk@gmail.com
            </a>
            <a
              href="https://wa.me/2348130845852"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-green-500 hover:bg-green-600 text-white font-medium text-sm transition-all active:scale-[0.97]"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
