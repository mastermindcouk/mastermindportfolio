"use client";
import { Video, Palette, Camera, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Link from "next/link";

const services = [
  {
    icon: Video,
    title: "Video Editing",
    desc: "Story-driven edits and color grading that make your footage move people.",
    href: "/work/video-editing",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    desc: "Brand identity and campaign visuals — original, on-brand, no templates.",
    href: "/work/graphic-design",
  },
  {
    icon: Camera,
    title: "Photography",
    desc: "Street, portrait, and commercial photography with a film-inspired eye.",
    href: "/work/photography",
  },
];

export function ServicesPreview() {
  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            What we <span className="text-gradient">do</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Three core disciplines, one standard — work we&apos;re proud to put
            our name on.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <AnimatedSection key={s.title} delay={i * 0.1}>
                <Link
                  href={s.href}
                  className="card-glass p-8 block group hover:border-brand-500/30 hover:bg-surface-300/80 transition-all duration-300 h-full"
                >
                  <div className="rounded-xl bg-brand-500/10 p-3 w-fit text-brand-400 mb-5 group-hover:bg-brand-500/20 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {s.desc}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm text-brand-400 mt-4">
                    View work <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
