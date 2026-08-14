"use client";
import { useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlowOrb } from "@/components/ui/GlowOrb";
import { Lightbox } from "@/components/ui/Lightbox";
import { CategoryBar } from "@/components/work/CategoryBar";
import { WorkCard } from "@/components/work/WorkCard";
import { projects, type Project } from "@/data/projects";

export function WorkContent() {
  const [active, setActive] = useState<Project | null>(null);

  const work = projects.filter(
    (p) => p.category === "photography" || p.category === "design"
  );

  const handleSelect = (slug: string) => {
    setActive(projects.find((p) => p.slug === slug) ?? null);
  };

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
              Real projects across photography and graphic design.
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
            {work.map((p, i) => (
              <WorkCard key={p.slug} project={p} index={i} onSelect={setActive} />
            ))}
          </div>
        </div>
      </section>

      <Lightbox project={active} onClose={() => setActive(null)} />
    </>
  );
}
