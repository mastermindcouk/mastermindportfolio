"use client";
import { ArrowRight, Bot, FileText, Users } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { GlowOrb } from "@/components/ui/GlowOrb";
import Link from "next/link";

const projects = [
  {
    tag: "SaaS MVP",
    name: "LogiFlow",
    problem:
      "Logistics company tracking deliveries in WhatsApp groups — built a real-time delivery tracking dashboard with driver app",
    solution:
      "We built a comprehensive logistics platform with real-time GPS tracking, automated dispatch, driver mobile app, and customer notifications. The system replaced chaotic WhatsApp threads with a clean, organized dashboard.",
    results: [
      "Delivery tracking time reduced by 80%",
      "Customer satisfaction score increased to 4.8/5",
      "Scaled to 50+ drivers in 3 months",
    ],
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
    solution:
      "A multi-tenant accounting platform with automated bank feeds, invoice generation, expense tracking, and real-time financial reporting. Eliminated manual Excel workflows.",
    results: [
      "Reduced bookkeeping time by 60%",
      "Processed 10,000+ transactions monthly",
      "Adopted by 200+ small businesses",
    ],
    tech: ["React", "Supabase", "Tailwind", "Plaid"],
    gradient: "from-emerald-900 to-emerald-700",
    icon: FileText,
    slug: "pocketledger",
  },
  {
    tag: "HR Platform",
    name: "HireBase",
    problem:
      "Recruitment team losing candidates between tools — built an ATS with pipeline view, email integration, and analytics",
    solution:
      "A modern applicant tracking system with Kanban pipeline, automated email sequences, interview scheduling, and hiring analytics. Integrated with LinkedIn and major job boards.",
    results: [
      "Time-to-hire reduced by 40%",
      "Team interviewed 3x more candidates per week",
      "Centralized 5,000+ candidate profiles",
    ],
    tech: ["Next.js", "Prisma", "PostgreSQL", "SendGrid"],
    gradient: "from-purple-900 via-brand-900 to-surface-400",
    icon: Users,
    slug: "hirebase",
  },
];

const extraProjects = [
  {
    tag: "E-Commerce",
    name: "ShopVue",
    icon: Bot,
    problem: "Multi-vendor marketplace needing a modern storefront",
    tech: ["Next.js", "Stripe", "Sanity CMS"],
    gradient: "from-amber-900 to-amber-700",
    slug: "shopvue",
  },
  {
    tag: "HealthTech",
    name: "MediTrack",
    icon: Bot,
    problem: "Clinic management system with appointment scheduling",
    tech: ["React", "Node.js", "MongoDB"],
    gradient: "from-rose-900 to-rose-700",
    slug: "meditrack",
  },
  {
    tag: "EdTech",
    name: "LearnPath",
    icon: Bot,
    problem: "Online course platform with interactive quizzes",
    tech: ["Next.js", "Supabase", "Tailwind"],
    gradient: "from-sky-900 to-sky-700",
    slug: "learnpath",
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
              const Icon = p.icon || Bot;
              return (
                <AnimatedSection key={p.name} delay={(i % 6) * 0.05}>
                  <Link
                    href={p.slug === "shopvue" || p.slug === "meditrack" || p.slug === "learnpath" ? "#" : `/work/${p.slug}`}
                    className="block group h-full"
                  >
                    <div className="card-glass overflow-hidden hover:border-brand-500/30 hover:bg-surface-300/80 transition-all duration-300 h-full">
                      <div
                        className={`bg-gradient-to-br ${p.gradient} h-40 flex items-center justify-center relative`}
                      >
                        {/* Replace with actual screenshot */}
                        <div className="absolute inset-0 bg-black/10" />
                        <Icon className="w-14 h-14 text-white/30 group-hover:scale-110 group-hover:text-white/50 transition-all duration-500" />
                        <span className="absolute top-3 right-3 text-[10px] font-medium px-2 py-0.5 rounded-full bg-white/10 text-white/70 border border-white/10">
                          Concept Project
                        </span>
                      </div>
                      <div className="p-5">
                        <Badge>{p.tag}</Badge>
                        <h3 className="text-lg font-bold text-white mt-3 mb-1 group-hover:text-brand-400 transition-colors">
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
                        <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-400 group-hover:gap-2 transition-all">
                          View Case Study <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
