"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { categories } from "@/data/projects";

export function CategoryBar() {
  const pathname = usePathname();
  const items = [{ label: "All Work", href: "/work" }, ...categories];

  return (
    <nav className="flex flex-wrap items-center justify-center gap-2 mb-10">
      {items.map((c) => {
        const active = pathname === c.href;
        return (
          <Link
            key={c.href}
            href={c.href}
            className={cn(
              "px-4 py-2 text-sm rounded-full transition-all border",
              active
                ? "bg-brand-500/15 text-brand-400 border-brand-500/40"
                : "bg-surface-300 text-gray-400 border-white/[0.06] hover:text-white hover:bg-surface-400"
            )}
          >
            {c.label}
          </Link>
        );
      })}
    </nav>
  );
}
