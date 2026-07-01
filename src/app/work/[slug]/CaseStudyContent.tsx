"use client";
import { ArrowRight, CheckCircle, ExternalLink } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GlowOrb } from "@/components/ui/GlowOrb";
import Link from "next/link";

const studies: Record<
  string,
  {
    name: string;
    tag: string;
    problem: string;
    solution: string;
    results: string[];
    tech: string[];
    gradient: string;
    liveUrl: string;
  }
> = {
  "vestify-hub": {
    name: "Vestify Hub",
    tag: "Real Estate",
    problem:
      "VestifyHub is a UK-based property investment platform connecting investors with high-quality real estate opportunities. Their team needed a modern, trust-building digital presence to showcase opportunities and streamline investor onboarding.",
    solution:
      "We built a high-performance property investment platform with a clean, professional design. The platform features property listings with detailed analytics, investor dashboards, secure authentication, and SEO-optimized content to attract qualified leads and build credibility in the competitive UK property market.",
    results: [
      "Professional digital presence established for a UK property brand",
      "SEO-optimized structure driving organic investor traffic",
      "Seamless investor onboarding experience",
      "Responsive, mobile-first design for on-the-go access",
    ],
    tech: ["Next.js", "Node.js", "PostgreSQL", "Mapbox"],
    gradient: "from-brand-900 to-brand-700",
    liveUrl: "https://www.vestifyhub.com/",
  },
  lggc: {
    name: "Life is Good Global Care",
    tag: "Health Care",
    problem:
      "Life Is Good Global Care needed a professional web presence to showcase their care home, supported living, and mental health support services. They required a platform that instills trust and makes it easy for clients and partners to reach them.",
    solution:
      "We developed a clean, compassionate website that clearly communicates their mission and services. The site includes detailed service pages, a contact and referral system, and accessibility-focused design to ensure ease of use for all visitors.",
    results: [
      "Professional brand presence for a UK healthcare provider",
      "Clear service breakdown for care homes & mental health support",
      "Easy referral and contact system for clients and partners",
      "Accessible, trust-building design",
    ],
    tech: ["React", "Supabase", "Tailwind"],
    gradient: "from-emerald-900 to-emerald-700",
    liveUrl: "https://www.lifeisgoodglobalcare.co.uk/",
  },
  "routa-ev": {
    name: "Routa MVP",
    tag: "Ride-Hailing",
    problem:
      "Routa EV needed an MVP to launch their vision as an infrastructure parent company integrating ride-hailing, interstate logistics, and renewable energy to power the next generation of African mobility.",
    solution:
      "We built a scalable MVP showcasing Routa EV's integrated ecosystem. The platform covers their three core pillars — ride-hailing, interstate logistics, and renewable energy — with a clean brand identity and growth-ready architecture.",
    results: [
      "MVP launched to validate multi-pillar mobility concept",
      "Clear brand identity established for African market entry",
      "Scalable architecture ready for feature expansion",
      "Integrated ride-hailing, logistics & energy verticals",
    ],
    tech: ["Next.js", "Node.js", "PostgreSQL", "Mapbox"],
    gradient: "from-brand-900 to-brand-700",
    liveUrl: "https://www.routaev.com/",
  },
  "qr-geek": {
    name: "QR Geek MVP",
    tag: "SaaS",
    problem:
      "QR codes shouldn't be complicated, expensive, or unreliable. QR Geek identified that existing QR solutions were either too basic for serious businesses or too complex for everyday users — leaving a gap for a simple, powerful tool.",
    solution:
      "We developed a streamlined QR code generation platform that balances simplicity with professional features. The MVP includes custom QR code creation with branding options, analytics tracking, bulk generation, and a clean user dashboard.",
    results: [
      "MVP launched to disrupt the QR code market",
      "Custom branding & analytics features for businesses",
      "Bulk generation capability for enterprise use",
      "Simple, intuitive user experience",
    ],
    tech: ["Next.js", "Node.js", "PostgreSQL", "Mapbox"],
    gradient: "from-brand-900 to-brand-700",
    liveUrl: "https://qr-geek.com/",
  },
  "impact-city": {
    name: "Impact City",
    tag: "ImpactCity",
    problem:
      "ImpactCity needed a digital platform to provide different forms of development support that help people grow both personally and professionally, reaching a wider audience with their programs.",
    solution:
      "We built a comprehensive platform for ImpactCity that showcases their development programs, allows users to explore support options, and facilitates engagement with their community initiatives through an intuitive interface.",
    results: [
      "Centralized platform for personal & professional development",
      "Improved discoverability of support programs",
      "Community engagement streamlined through digital tools",
      "Professional brand presence established",
    ],
    tech: ["React", "Supabase", "Tailwind"],
    gradient: "from-emerald-900 to-emerald-700",
    liveUrl: "https://impact-city.com/",
  },
  digitalli: {
    name: "Digitalli",
    tag: "Branding",
    problem:
      "Digitalli is the system behind how growing companies design, store, track, and distribute every branded asset. Growing businesses needed a centralized hub to manage their brand identity efficiently.",
    solution:
      "We created a brand asset management platform where teams can upload, organize, and share design assets, brand guidelines, templates, and marketing materials — ensuring brand consistency across every channel.",
    results: [
      "Centralized brand asset repository for growing companies",
      "Streamlined design-to-distribution workflow",
      "Brand consistency maintained across all channels",
      "Efficient team collaboration on brand materials",
    ],
    tech: ["Next.js", "Prisma", "PostgreSQL", "SendGrid"],
    gradient: "from-purple-900 via-brand-900 to-surface-400",
    liveUrl: "https://digitallikrafts.vercel.app/",
  },
};

export function CaseStudyContent({ slug }: { slug: string }) {
  const study = studies[slug];
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

      {/* Screenshot */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <a
              href={study.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`block bg-gradient-to-br ${study.gradient} rounded-2xl h-64 md:h-96 relative overflow-hidden group`}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
              {study.liveUrl && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={`https://v1.screenshot.11ty.dev/${encodeURIComponent(study.liveUrl)}/opengraph/`}
                  alt={`${study.name} screenshot`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 relative"
                  loading="lazy"
                />
              )}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-white bg-brand-600/80 px-4 py-2 rounded-full">
                  <ExternalLink className="w-4 h-4" />
                  Visit Site
                </span>
              </div>
            </a>
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

      {/* Tech Stack */}
      <section className="py-12 bg-surface-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="text-2xl font-bold text-white mb-6">
              Tech Stack
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {study.tech.map((t) => (
                <span
                  key={t}
                  className="px-4 py-2 rounded-xl bg-surface-300 text-sm font-mono text-gray-300 border border-white/[0.06]"
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
              Let&apos;s build something great together. Start with a free
              discovery call.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Start a Project →
              </Button>
              <a
                href={study.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-xl text-gray-400 hover:text-white hover:bg-surface-300 transition-all border border-white/10"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
