"use client"

import Link from "next/link";
import { Zap } from "lucide-react";
import Image from "next/image";

const cols = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Work", href: "/work" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Video Editing", href: "/services#video" },
      { label: "Graphic Design", href: "/services#design" },
      { label: "Motion Graphics", href: "/services#motion" },
      { label: "Brand Identity", href: "/services#brand" },
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
            <Image src="/images/mmlogo.png" alt="Logo" width={50} height={50} className="w-[50px] h-[50px]" />
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Master Mind is a digital production company crafting standout
              video editing and graphic design that makes your brand
              unforgettable.
            </p>
            <div className="mt-6 flex flex-col gap-2">
              <a
                href="mailto:mastermind.co.uk@gmail.com"
                className="text-xs text-gray-500 hover:text-brand-400 transition-colors"
              >
                mastermind.co.uk@gmail.com
              </a>
              <a
                href="tel:+2348151073356"
                className="text-xs text-gray-500 hover:text-brand-400 transition-colors"
              >
                +44 7867 05259
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
            © {new Date().getFullYear()} Master Mind. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Built with Next.js · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
