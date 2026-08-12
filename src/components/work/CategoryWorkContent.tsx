"use client";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlowOrb } from "@/components/ui/GlowOrb";
import { ProjectCategory, categories, projects } from "@/data/projects";
import { CategoryBar } from "@/components/work/CategoryBar";
import { WorkCard } from "@/components/work/WorkCard";

export function CategoryWorkContent({
  category,
  title,
  description,
}: {
  category: ProjectCategory;
  title: string;
  description: string;
}) {
  const label = categories.find((c) => c.id === category)?.label ?? title;
  const categoryProjects = projects.filter((p) => p.category === category);

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
              Our <span className="text-gradient">{label}</span>
            </h1>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
              {description}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Category grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CategoryBar />
          {categoryProjects.length === 0 ? (
            <p className="text-center text-gray-400">
              No projects in this category yet — check back soon.
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryProjects.map((p, i) => (
                <WorkCard key={p.slug} project={p} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
