"use client";
import { ArrowRight, Bot, FileText, Users } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";

const projects = [
  {
    tag: "SaaS MVP",
    name: "LogiFlow",
    problem:
      "Logistics company tracking deliveries in WhatsApp groups — built a real-time delivery tracking dashboard with driver app",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Mapbox"],
    gradient: "from-brand-900 to-brand-700",
    icon: Bot,
    slug: "logiflow",
  },
  {
    tag: "FinTech",
    name: "PocketLedger",
    problem:
      "Small businesses managing finances in Excel — built a multi-currency accounting dashboard with automated reports",
    tech: ["React", "Supabase", "Tailwind"],
    gradient: "from-emerald-900 to-emerald-700",
    icon: FileText,
    slug: "pocketledger",
  },
  {
    tag: "HR Platform",
    name: "HireBase",
    problem:
      "Recruitment team losing candidates between tools — built an ATS with pipeline view, email integration, and analytics",
    tech: ["Next.js", "Prisma", "PostgreSQL", "SendGrid"],
    gradient: "from-purple-900 via-brand-900 to-surface-400",
    icon: Users,
    slug: "hirebase",
    fullWidth: true,
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
  const Icon = project.icon;
  return (
    <AnimatedSection delay={index * 0.1}>
      <Link
        href={`/work/${project.slug}`}
        className={`block group ${fullWidth ? "" : "h-full"}`}
      >
        <div className="card-glass overflow-hidden hover:border-brand-500/30 hover:bg-surface-300/80 transition-all duration-300 h-full">
          <div
            className={`bg-gradient-to-br ${project.gradient} h-48 flex items-center justify-center relative overflow-hidden`}
          >
            {/* Replace with actual screenshot */}
            <div className="absolute inset-0 bg-black/10" />
            <Icon className="w-16 h-16 text-white/30 group-hover:scale-110 group-hover:text-white/50 transition-all duration-500" />
            {/* Concept Project badge */}
            <span className="absolute top-3 right-3 text-[10px] font-medium px-2 py-0.5 rounded-full bg-white/10 text-white/70 border border-white/10">
              Concept Project
            </span>
          </div>
          <div className="p-6">
            <div className="mb-3">
              <Badge>{project.tag}</Badge>
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
            <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-400 group-hover:gap-2 transition-all">
              View Case Study <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </Link>
    </AnimatedSection>
  );
}
