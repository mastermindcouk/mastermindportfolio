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
  }
> = {
  logiflow: {
    name: "LogiFlow",
    tag: "SaaS MVP",
    problem:
      "A growing logistics company was managing delivery tracking through WhatsApp groups. Drivers would send voice notes and photos, which the ops team manually entered into spreadsheets. It was chaotic, error-prone, and impossible to scale.",
    solution:
      "We built a real-time delivery tracking platform with a driver mobile app, web dashboard for operations, and customer-facing tracking page. Key features included live GPS tracking, automated dispatch, proof of delivery photos, and real-time notifications.",
    results: [
      "Delivery tracking time reduced by 80%",
      "Customer satisfaction score increased to 4.8/5",
      "Scaled to 50+ drivers in 3 months",
      "Zero lost packages since launch",
    ],
    tech: ["Next.js", "Node.js", "PostgreSQL", "Mapbox", "Redis", "Docker"],
    gradient: "from-brand-900 to-brand-700",
  },
  pocketledger: {
    name: "PocketLedger",
    tag: "FinTech",
    problem:
      "Small business owners were juggling multiple Excel spreadsheets to track income, expenses, and invoices across different currencies. Bank reconciliation was a manual nightmare, and they had no real-time view of their financial health.",
    solution:
      "We built a multi-tenant accounting platform with automated bank feed integration, multi-currency support, invoice generation, expense tracking, and real-time financial dashboards. The system automated bank reconciliation and generated profit/loss reports on demand.",
    results: [
      "Reduced bookkeeping time by 60%",
      "Processed 10,000+ transactions monthly",
      "Adopted by 200+ small businesses",
      "99.9% bank reconciliation accuracy",
    ],
    tech: ["React", "Supabase", "Tailwind", "Plaid", "Chart.js"],
    gradient: "from-emerald-900 to-emerald-700",
  },
  hirebase: {
    name: "HireBase",
    tag: "HR Platform",
    problem:
      "A recruitment agency was losing candidates between spreadsheets, email threads, and multiple job boards. The hiring pipeline was invisible, follow-ups were missed, and reporting was non-existent.",
    solution:
      "We built a modern Applicant Tracking System (ATS) with a Kanban pipeline view, automated email sequences, interview scheduling, and comprehensive hiring analytics. The platform integrated with LinkedIn, Indeed, and other job boards for automatic candidate import.",
    results: [
      "Time-to-hire reduced by 40%",
      "Team interviewed 3x more candidates per week",
      "Centralized 5,000+ candidate profiles",
      "Automated 80% of email communication",
    ],
    tech: ["Next.js", "Prisma", "PostgreSQL", "SendGrid", "BullMQ"],
    gradient: "from-purple-900 via-brand-900 to-surface-400",
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

      {/* Screenshot placeholder */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div
              className={`bg-gradient-to-br ${study.gradient} rounded-2xl h-64 md:h-96 flex items-center justify-center relative overflow-hidden`}
            >
              {/* Replace with real screenshots here */}
              <div className="absolute inset-0 bg-black/20" />
              <div className="relative text-center">
                <p className="text-white/40 text-sm font-mono">
                  {study.name} Screenshot
                </p>
                <p className="text-white/20 text-xs mt-2">
                  {/* Add real screenshots here */}
                </p>
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
                href="#"
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
