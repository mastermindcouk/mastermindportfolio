"use client";
import { ArrowRight, ExternalLink } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";

const projects = [
  {
    tag: "Real Estate",
    name: "Vestify Hub MVP",
    problem:
      "VestifyHub is a UK-based property investment platform connecting investors with high-quality real estate opportunities. Our team of experienced professionals is dedicated to delivering exceptional returns while maintaining the highest standards of transparency and integrity.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Mapbox"],
    gradient: "from-brand-900 to-brand-700",
    slug: "logiflow",
    liveUrl: "https://www.vestifyhub.com/",
  },
  {
    tag: "Health Care",
    name: "Life is Good Global Care",
    problem:
      "Life Is Good Global Care supports care homes, supported living services, and mental health settings with trusted professionals and responsive account management.",
    tech: ["React", "Supabase", "Tailwind"],
    gradient: "from-emerald-900 to-emerald-700",
    slug: "pocketledger",
    liveUrl: "https://www.lifeisgoodglobalcare.co.uk/",
  },
 {
    tag: "Ride-Hailing",
    name: "Routa MVP",
    problem:
      "Routa EV is the infrastructure parent company integrating ride-hailing, interstate logistics, and renewable energy to power the next generation of African mobility.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Mapbox"],
    gradient: "from-brand-900 to-brand-700",
    slug: "logiflow",
    liveUrl: "https://www.routaev.com/",
  },
];

export function FeaturedWork() {
  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Selected Work</h2>
          <p className="mt-4 text-lg text-gray-400">
            Projects we&apos;re proud of
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
  const screenshotUrl = `https://v1.screenshot.11ty.dev/${encodeURIComponent(project.liveUrl)}/opengraph/`;
  return (
    <AnimatedSection delay={index * 0.1}>
      <div className={`card-glass overflow-hidden hover:border-brand-500/30 hover:bg-surface-300/80 transition-all duration-300 h-full group ${fullWidth ? "" : "h-full"}`}>
        {/* Screenshot preview */}
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block relative h-48 overflow-hidden bg-surface-300"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={screenshotUrl}
            alt={`${project.name} preview`}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 relative"
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-white bg-brand-600/80 px-4 py-2 rounded-full">
              <ExternalLink className="w-4 h-4" />
              Visit Site
            </span>
          </div>
        </a>

        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <Badge>{project.tag}</Badge>
            {/* Live link pill */}
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-medium text-gray-500 hover:text-brand-400 transition-colors"
            >
              <ExternalLink className="w-3 h-3" />
              Live
            </a>
          </div>
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-400 transition-colors">
            {project.name}
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed mb-4">
            {project.problem}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs font-mono px-2 py-0.5 rounded bg-surface-400 text-gray-400"
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
