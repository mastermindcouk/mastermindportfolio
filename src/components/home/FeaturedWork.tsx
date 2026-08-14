"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Lightbox } from "@/components/ui/Lightbox";
import { categories, projects, type Project } from "@/data/projects";

/** Curated mix across all three services, pulled from the shared portfolio data. */
const previewSlugs = [
  "dusk-on-the-high-street",
  "urban-frames",
  "cafe-brand-packaging",
  "golden-hour-portraits",
  "the-cheesegrater",
  "tech-brand-refresh",
  "product-still-life",
  "neon-nights-poster-series",
];

function categoryLabel(id: (typeof projects)[number]["category"]): string {
  return categories.find((c) => c.id === id)?.label ?? "";
}

export function FeaturedWork() {
  const [active, setActive] = useState<Project | null>(null);

  const items = previewSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is Project => Boolean(p));

  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold">
              Selected <span className="text-gradient">work</span>
            </h2>
            <p className="mt-3 text-lg text-gray-400">
              Real projects across video, design, and photography.
            </p>
          </AnimatedSection>
          <Link
            href="/work"
            className="inline-flex items-center gap-1 text-sm font-medium text-brand-400 hover:gap-2 transition-all"
          >
            View All Work <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((p, i) => (
            <AnimatedSection key={p.slug} delay={(i % 6) * 0.05}>
              <button
                type="button"
                onClick={() => setActive(p)}
                className="group block w-full text-left"
              >
                <div
                  className={`relative aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br ${p.gradient} border border-white/[0.06]`}
                >
                  {p.image && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={p.image}
                      alt={p.name}
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-white bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full">
                      View
                    </span>
                  </div>
                  <span className="absolute top-3 left-3 inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-black/55 text-white/90 backdrop-blur-sm">
                    {categoryLabel(p.category)}
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-bold text-white group-hover:text-brand-400 transition-colors">
                  {p.name}
                </h3>
              </button>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <Lightbox project={active} onClose={() => setActive(null)} />
    </section>
  );
}
