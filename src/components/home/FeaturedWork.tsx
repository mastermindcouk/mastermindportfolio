"use client";
import { ArrowRight, Clapperboard } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";

const projects = [
  {
    tag: "Brand Film",
    name: "Cinematic Travel Reel",
    blurb:
      "A story-driven brand film cut from raw travel footage with cinematic color grading, sound design, and social-ready edits.",
    deliverables: [
      "Color Grading",
      "Sound Design",
      "Social Cuts",
      "Motion Titles",
    ],
    gradient: "from-brand-900 to-brand-700",
    slug: "cinematic-travel-reel",
  },
  {
    tag: "Brand Identity",
    name: "Café Brand & Packaging",
    blurb:
      "A complete visual identity system — logo, palette, packaging, and menu design — that turned a local café into a beloved brand.",
    deliverables: [
      "Logo Design",
      "Packaging",
      "Brand Guidelines",
      "Menu Design",
    ],
    gradient: "from-emerald-900 to-emerald-700",
    slug: "cafe-brand-packaging",
  },
  {
    tag: "Campaign",
    name: "Product Launch Film",
    blurb:
      "A high-energy launch film with motion graphics, kinetic type, and ad cutdowns that drove thousands of views across paid channels.",
    deliverables: [
      "Scripting",
      "Motion Graphics",
      "Ad Cutdowns",
      "Thumbnails",
    ],
    gradient: "from-purple-900 via-brand-900 to-surface-400",
    slug: "product-launch-film",
  },
];

export function FeaturedWork() {
  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Selected Work</h2>
          <p className="mt-4 text-lg text-gray-400">
            Video and design projects we&apos;re proud of
          </p>
        </AnimatedSection>

        {/* Top row — first two projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {projects.slice(0, 2).map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>

        {/* Full-width third project */}
        <AnimatedSection delay={0.3}>
          <ProjectCard project={projects[2]} index={2} fullWidth />
        </AnimatedSection>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  fullWidth,
}: {
  project: (typeof projects)[0];
  index: number;
  fullWidth?: boolean;
}) {
  return (
    <AnimatedSection delay={index * 0.1}>
      <div className={`card-glass overflow-hidden hover:border-brand-500/30 hover:bg-surface-300/80 transition-all duration-300 h-full group ${fullWidth ? "" : "h-full"}`}>
        {/* Cover preview */}
        <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${project.gradient}`}>
          <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20 pointer-events-none" style={{ backgroundSize: "48px 48px" }} />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
          {/* Hover overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-white bg-brand-600/80 px-4 py-2 rounded-full">
              <Clapperboard className="w-4 h-4" />
              View Case Study
            </span>
          </div>
        </div>

        <div className="p-6">
          <div className="mb-3">
            <Badge>{project.tag}</Badge>
          </div>
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-400 transition-colors">
            {project.name}
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed mb-4">
            {project.blurb}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.deliverables.map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-0.5 rounded bg-surface-400 text-gray-400"
              >
                {t}
              </span>
            ))}
          </div>
          <Link
            href={`/work/${project.slug}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-brand-400 hover:gap-2 transition-all"
          >
            View Case Study <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
}
