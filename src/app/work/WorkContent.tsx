"use client";
import { ArrowRight, ExternalLink } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { GlowOrb } from "@/components/ui/GlowOrb";
import Link from "next/link";

const projects = [
  {
    tag: "Real Estate",
    name: "Vestify Hub",
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

const extraProjects = [
  {
    tag: "SaaS",
    name: "QR Geek MVP",
    problem:
      "QR codes shouldn't be complicated, expensive, or unreliable. We started QR Geek because existing solutions were either too basic for serious businesses or too complex for everyday users.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Mapbox"],
    gradient: "from-brand-900 to-brand-700",
    slug: "logiflow",
    liveUrl: "https://qr-geek.com/",
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
    tag: "Branding",
    name: "Digitalli",
    problem:
      "Digitalli is the system behind how growing companies design,store, track, and distribute every branded asset.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "SendGrid"],
    gradient: "from-purple-900 via-brand-900 to-surface-400",
    slug: "hirebase",
    liveUrl: "https://digitallikrafts.vercel.app/",
    fullWidth: true,
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
              Real projects we&apos;ve built for real businesses.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured projects */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...projects, ...extraProjects].map((p, i) => {
              const screenshotUrl = `https://v1.screenshot.11ty.dev/${encodeURIComponent(p.liveUrl ?? "")}/opengraph/`;
              return (
                <AnimatedSection key={`${p.name}-${i}`} delay={(i % 6) * 0.05}>
                  <div className="card-glass overflow-hidden hover:border-brand-500/30 hover:bg-surface-300/80 transition-all duration-300 h-full group">
                    {/* Screenshot preview */}
                    <a
                      href={p.liveUrl ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative h-40 overflow-hidden bg-surface-300"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient}`} />
                      {p.liveUrl && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={screenshotUrl}
                          alt={`${p.name} preview`}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 relative"
                          loading="lazy"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = "none";
                          }}
                        />
                      )}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="inline-flex items-center gap-2 text-sm font-medium text-white bg-brand-600/80 px-4 py-2 rounded-full">
                          <ExternalLink className="w-4 h-4" />
                          Visit Site
                        </span>
                      </div>
                    </a>

                    <div className="p-5">
                      <div className="flex items-start justify-between mb-3">
                        <Badge>{p.tag}</Badge>
                        {p.liveUrl && (
                          <a
                            href={p.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[11px] font-medium text-gray-500 hover:text-brand-400 transition-colors"
                          >
                            <ExternalLink className="w-3 h-3" />
                            Live
                          </a>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-brand-400 transition-colors">
                        {p.name}
                      </h3>
                      <p className="text-sm text-gray-400 line-clamp-2 mb-3">
                        {p.problem}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {p.tech.map((t) => (
                          <span
                            key={t}
                            className="text-xs font-mono px-2 py-0.5 rounded bg-surface-400 text-gray-400"
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
