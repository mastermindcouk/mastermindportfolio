"use client";
import { ArrowRight, CheckCircle, Clapperboard } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GlowOrb } from "@/components/ui/GlowOrb";
import { projectBySlug } from "@/data/projects";
import Link from "next/link";

const studies: Record<
  string,
  {
    name: string;
    tag: string;
    problem: string;
    solution: string;
    results: string[];
    deliverables: string[];
        gradient: string;
    image?: string;
  }
> = {
  "cinematic-travel-reel": {
    name: "Cinematic Travel Reel",
    tag: "Brand Film",
    problem:
      "A travel brand had hours of beautiful raw footage but nothing that told their story in a way audiences connected with — flat edits, inconsistent color, and no sound design.",
    solution:
      "We cut a story-driven brand film built around a clear narrative arc — cinematic color grading, layered sound design, and branded motion titles. The reel was then re-cut into platform-native versions for reels, stories, and paid placements.",
    results: [
      "A cinematic brand film that actually told a story",
      "Consistent, film-grade color across every shot",
      "Sound design and mix that raised production value",
      "Social-ready cutdowns for every major platform",
    ],
    deliverables: ["Color Grading", "Sound Design", "Social Cuts", "Motion Titles"],
    gradient: "from-brand-900 to-brand-700",
  },
  "cafe-brand-packaging": {
    name: "The Training Theatre - Course Promo Design",
    tag: "Brand Identity",
    problem:
      "A beloved local café had strong coffee but a forgettable, inconsistent look — mismatched menus, packaging, and social graphics that didn't reflect the quality of the product.",
    solution:
      "We built a complete visual identity from the ground up — logo system, color palette, typography, packaging, menu design, and brand guidelines — then rolled it out across store and social touchpoints for one cohesive, memorable look.",
    results: [
      "A cohesive identity customers immediately recognize",
      "Packaging and menus that feel premium and on-brand",
      "Clear brand guidelines for consistent future use",
      "A social presence that finally matches the product",
    ],
    deliverables: ["Logo Design", "Packaging", "Brand Guidelines", "Menu Design"],
    gradient: "from-emerald-900 to-emerald-700",
  },
  "product-launch-film": {
    name: "Product Launch Film",
    tag: "Campaign",
    problem:
      "A company was launching a new product with no strong launch creative — they needed a hero film that would excite an audience and convert paid ad traffic.",
    solution:
      "We scripted, designed, and edited a high-energy launch film combining live product footage with motion graphics and kinetic typography. We then produced multiple ad cutdowns, thumbnails, and platform variants to maximize reach across paid channels.",
    results: [
      "Thousands of views across paid and organic channels",
      "A hero film and ad cutdowns for every platform",
      "Kinetic type and motion that boosted engagement and recall",
      "A launch asset pack ready for multi-channel rollout",
    ],
    deliverables: ["Scripting", "Motion Graphics", "Ad Cutdowns", "Thumbnails"],
    gradient: "from-purple-900 via-brand-900 to-surface-400",
  },
  "social-campaign-suite": {
    name: "Social Campaign Suite",
    tag: "Social Media",
    problem:
      "A DTC brand was posting inconsistently with disjointed visuals and low engagement — they needed a monthly content system that was on-brand and built for each platform.",
    solution:
      "We produced a full campaign suite — platform-native reels, static ads, carousels, and motion stings — designed from one creative direction. Every asset was delivered in the right format for its channel so the brand stayed consistent and engaging all month.",
    results: [
      "A complete, platform-native monthly content kit",
      "Consistent on-brand visuals across every channel",
      "Higher engagement from reels and motion content",
      "Clear system the brand can brief and scale",
    ],
    deliverables: ["Reels Editing", "Static Ads", "Carousels", "Motion Stings"],
    gradient: "from-brand-900 to-brand-700",
  },
  "podcast-rebrand": {
    name: "Podcast Rebrand & Edit",
    tag: "Podcast",
    problem:
      "A growing podcast had great conversations but dated visuals and slow, boring edits — episodes weren't standing out in crowded feeds.",
    solution:
      "We handled the full multi-cam edit and gave the show a fresh identity — a new intro animation, lower thirds, and show-notes graphics. We also cut a social clip pack so every episode could be promoted across platforms.",
    results: [
      "Polished multi-cam edits that keep viewers hooked",
      "A refreshed visual identity that looks professional",
      "Lower thirds and motion that reinforce the brand",
      "A ready-to-post clip pack for every episode",
    ],
    deliverables: ["Multi-cam Edit", "Show Notes Graphics", "Intro Animation", "Clip Pack"],
    gradient: "from-emerald-900 to-emerald-700",
  },
  "live-event-graphics": {
    name: "Live Event Graphics",
    tag: "Events",
    problem:
      "A corporate gala needed broadcast-quality visuals — LED loop content, speaker titles, and a polished aftermovie — to feel as professional as the event itself.",
    solution:
      "We designed and delivered LED loop content, lower thirds, and title cards for the live screens, then cut a cinematic aftermovie edit that captured the energy of the night and gave the brand shareable content afterward.",
    results: [
      "Broadcast-ready visuals across all live screens",
      "Clean speaker titles and lower thirds throughout",
      "A cinematic aftermovie the brand can reuse for months",
      "An event that looked as premium as it felt",
    ],
    deliverables: ["LED Loop Content", "Lower Thirds", "Title Cards", "Aftermovie Edit"],
    gradient: "from-purple-900 via-brand-900 to-surface-400",
  },
};

export function CaseStudyContent({ slug }: { slug: string }) {
      const study = projectBySlug[slug] ?? studies[slug];
  if (!study) return null;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-grid-pattern bg-grid opacity-50 pointer-events-none"
          style={{ backgroundSize: "48px 48px" }}
        />
        <GlowOrb className="top-1/4 left-1/3 w-96 h-96" color="brand" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Link
              href="/work"
              className="text-sm text-gray-500 hover:text-brand-400 transition-colors mb-4 inline-block"
            >
              ← Back to Work
            </Link>
            <Badge>{study.tag}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
              {study.name}
            </h1>
            <p className="text-lg text-gray-400">{study.problem}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Cover */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className={`block bg-gradient-to-br ${study.gradient} rounded-2xl h-64 md:h-96 relative overflow-hidden group`}>
                            {study.image && (
                <img
                  src={study.image}
                  alt={study.name}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20 pointer-events-none" style={{ backgroundSize: "48px 48px" }} />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-white bg-brand-600/80 px-4 py-2 rounded-full">
                  <Clapperboard className="w-4 h-4" />
                  {study.tag}
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Solution & Results */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Solution */}
            <AnimatedSection>
              <h2 className="text-2xl font-bold text-white mb-4">
                The Solution
              </h2>
              <p className="text-gray-400 leading-relaxed">
                {study.solution}
              </p>
            </AnimatedSection>

            {/* Results */}
            <AnimatedSection delay={0.1}>
              <h2 className="text-2xl font-bold text-white mb-4">
                The Results
              </h2>
              <ul className="space-y-3">
                {study.results.map((r) => (
                  <li
                    key={r}
                    className="flex items-start gap-3 text-sm text-gray-400"
                  >
                    <CheckCircle className="w-4 h-4 text-accent-500 mt-0.5 shrink-0" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-12 bg-surface-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="text-2xl font-bold text-white mb-6">
              What We Delivered
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {study.deliverables.map((t) => (
                <span
                  key={t}
                  className="px-4 py-2 rounded-xl bg-surface-300 text-sm text-gray-300 border border-white/[0.06]"
                >
                  {t}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-4">
              Want a similar result?
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              Let&apos;s create something great together. Start with a free
              discovery call.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Work with us →
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
