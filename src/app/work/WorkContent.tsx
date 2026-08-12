"use client";
import { ArrowRight, Clapperboard } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { GlowOrb } from "@/components/ui/GlowOrb";
import { CategoryBar } from "@/components/work/CategoryBar";
import Link from "next/link";

const projects = [
  {
    tag: "Brand Film",
    name: "Cinematic Travel Reel",
    blurb:
      "A story-driven brand film cut from raw travel footage with cinematic color grading, sound design, and social-ready edits.",
    deliverables: ["Color Grading", "Sound Design", "Social Cuts", "Motion Titles"],
    gradient: "from-brand-900 to-brand-700",
    slug: "cinematic-travel-reel",
  },
  {
    tag: "Brand Identity",
    name: "Café Brand & Packaging",
    blurb:
      "A complete visual identity system — logo, palette, packaging, and menu design — that turned a local café into a beloved brand.",
    deliverables: ["Logo Design", "Packaging", "Brand Guidelines", "Menu Design"],
    gradient: "from-emerald-900 to-emerald-700",
    slug: "cafe-brand-packaging",
  },
  {
    tag: "Campaign",
    name: "Product Launch Film",
    blurb:
      "A high-energy launch film with motion graphics, kinetic type, and ad cutdowns that drove thousands of views across paid channels.",
    deliverables: ["Scripting", "Motion Graphics", "Ad Cutdowns", "Thumbnails"],
    gradient: "from-purple-900 via-brand-900 to-surface-400",
    slug: "product-launch-film",
  },
];

const extraProjects = [
  {
    tag: "Social Media",
    name: "Social Campaign Suite",
    blurb:
      "A full set of platform-native reels, static ads, carousels, and motion stings that kept a DTC brand consistent and engaging all month.",
    deliverables: ["Reels Editing", "Static Ads", "Carousels", "Motion Stings"],
    gradient: "from-brand-900 to-brand-700",
    slug: "social-campaign-suite",
  },
  {
    tag: "Podcast",
    name: "Podcast Rebrand & Edit",
    blurb:
      "Multi-cam podcast editing with a fresh visual identity — intro animation, lower thirds, and a clip pack built for social distribution.",
    deliverables: ["Multi-cam Edit", "Show Notes Graphics", "Intro Animation", "Clip Pack"],
    gradient: "from-emerald-900 to-emerald-700",
    slug: "podcast-rebrand",
  },
  {
    tag: "Events",
    name: "Live Event Graphics",
    blurb:
      "LED loop content, lower thirds, title cards, and a polished aftermovie edit that made a corporate gala feel broadcast-ready.",
    deliverables: ["LED Loop Content", "Lower Thirds", "Title Cards", "Aftermovie Edit"],
    gradient: "from-purple-900 via-brand-900 to-surface-400",
    slug: "live-event-graphics",
  },
];

export function WorkContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-grid-pattern bg-grid opacity-50 pointer-events-none"
          style={{ backgroundSize: "48px 48px" }}
        />
        <GlowOrb className="top-1/3 left-1/2 w-96 h-96" color="brand" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Our <span className="text-gradient">Work</span>
            </h1>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
              Video and design projects we&apos;ve crafted for real brands.
            </p>
          </AnimatedSection>
        </div>
            </section>

      {/* Category navigation */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CategoryBar />
        </div>
      </section>

      {/* Featured projects */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...projects, ...extraProjects].map((p, i) => {
              return (
                <AnimatedSection key={`${p.name}-${i}`} delay={(i % 6) * 0.05}>
                  <div className="card-glass overflow-hidden hover:border-brand-500/30 hover:bg-surface-300/80 transition-all duration-300 h-full group">
                    {/* Cover preview */}
                    <div className={`relative h-40 overflow-hidden bg-gradient-to-br ${p.gradient}`}>
                      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20 pointer-events-none" style={{ backgroundSize: "48px 48px" }} />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="inline-flex items-center gap-2 text-sm font-medium text-white bg-brand-600/80 px-4 py-2 rounded-full">
                          <Clapperboard className="w-4 h-4" />
                          View Case Study
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="mb-3">
                        <Badge>{p.tag}</Badge>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-brand-400 transition-colors">
                        {p.name}
                      </h3>
                      <p className="text-sm text-gray-400 line-clamp-2 mb-3">
                        {p.blurb}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {p.deliverables.map((t) => (
                          <span
                            key={t}
                            className="text-xs px-2 py-0.5 rounded bg-surface-400 text-gray-400"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={`/work/${p.slug}`}
                        className="inline-flex items-center gap-1 text-sm font-medium text-brand-400 hover:gap-2 transition-all"
                      >
                        View Case Study <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
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
