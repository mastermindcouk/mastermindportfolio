"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

const links = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/** Sub-navigation for the "Work" portfolio category pages. */
const workCategories = [
  { label: "Photography", href: "/work/photography" },
  { label: "Video Editing", href: "/work/video-editing" },
  { label: "Graphic Design", href: "/work/graphic-design" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface-50/80 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image src="/images/mmlogo.png" alt="Logo" width={50} height={50} className="w-[50px] h-[50px]" />
          <p>Master Mind Agency</p>
        </Link>

                        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <div key={l.href} className="relative group">
              <Link
                href={l.href}
                className="px-4 py-2 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-surface-300 transition-all"
              >
                {l.label}
              </Link>
              {l.label === "Work" && (
                <div className="absolute top-full left-0 mt-2 w-48 rounded-xl bg-surface-200/90 backdrop-blur-xl border border-white/[0.06] shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-200 overflow-hidden">
                  <div className="py-1">
                    {workCategories.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-surface-300 transition-all"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button href="/contact" variant="primary" size="sm">
            Work with us →
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-surface-300"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface-100 border-t border-white/[0.06] overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-surface-300 transition-all"
                >
                  {l.label}
                </Link>
              ))}
              <div className="mt-3 flex flex-col gap-2 pt-3 border-t border-white/[0.06]">
                <Button href="/contact" variant="primary" size="sm">
                  Work with us →
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
