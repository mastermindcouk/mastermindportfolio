"use client";
import { Rocket, Globe, LayoutDashboard, Server, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Link from "next/link";

const services = [
  {
    icon: Rocket,
    title: "SaaS MVP Development",
    desc: "Ship your product idea in weeks, not months",
    href: "/services#saas",
  },
  {
    icon: Globe,
    title: "Business Websites",
    desc: "Convert visitors into customers with high-performance sites",
    href: "/services#web",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Dashboards",
    desc: "Replace spreadsheets with real-time internal tools",
    href: "/services#dash",
  },
  {
    icon: Server,
    title: "API & Backend Systems",
    desc: "Robust APIs that scale with your growth",
    href: "/services#api",
  },
];

export function ServicesPreview() {
  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            What We <span className="text-gradient">Build</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            End-to-end product development — from idea to launch
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <AnimatedSection key={s.title} delay={i * 0.1}>
                <Link
                  href={s.href}
                  className="card-glass p-6 block group hover:border-brand-500/30 hover:bg-surface-300/80 transition-all duration-300 cursor-pointer relative overflow-hidden"
                >
                  {/* Top glow on hover */}
                  <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand-500/0 to-transparent group-hover:via-brand-500/60 transition-all duration-500" />

                  <div className="rounded-xl bg-brand-500/10 p-3 w-fit text-brand-400 group-hover:bg-brand-500/20 transition-colors mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {s.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {s.desc}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm text-brand-400 opacity-0 group-hover:opacity-100 transition-opacity mt-3">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
