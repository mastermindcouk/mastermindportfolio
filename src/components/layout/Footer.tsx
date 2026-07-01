"use client"

import Link from "next/link";
import { Zap } from "lucide-react";

const cols = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Work", href: "/work" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "SaaS MVPs", href: "/services#saas" },
      { label: "Websites", href: "/services#web" },
      { label: "Dashboards", href: "/services#dash" },
      { label: "APIs", href: "/services#api" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "WhatsApp", href: "https://wa.me/2348130845852" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-surface-100 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-semibold text-white">
                ScaleStack <span className="text-brand-400">Labs</span>
              </span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              We build scalable digital products for startups and businesses.
              Fast delivery, modern stack, real results.
            </p>
            <div className="mt-6 flex flex-col gap-2">
              <a
                href="mailto:info@scalestacklab.online"
                className="text-xs text-gray-500 hover:text-brand-400 transition-colors"
              >
                info@scalestacklab.online
              </a>
              <a
                href="tel:+2348151073356"
                className="text-xs text-gray-500 hover:text-brand-400 transition-colors"
              >
                +234 815 107 3356
              </a>
            </div>
          </div>

          {/* Links */}
          {cols.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
                {col.title}
              </p>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-gray-500 hover:text-white transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} ScaleStack Labs. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Built with Next.js · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
