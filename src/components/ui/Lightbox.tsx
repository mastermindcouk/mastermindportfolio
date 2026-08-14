"use client";
import { useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Play } from "lucide-react";
import Image from "next/image";
import { categories, type Project } from "@/data/projects";

function labelFor(id: Project["category"]): string {
  return categories.find((c) => c.id === id)?.label ?? "";
}

/**
 * Fullscreen lightbox that previews a single portfolio piece (image or, for
 * video projects without a still, a gradient placeholder). Clicking a grid
 * card opens this in-page instead of navigating to a separate case-study page.
 */
export function Lightbox({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const esc = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", esc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", esc);
    };
  }, [project, esc]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.name} preview`}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl rounded-2xl border border-white/10 bg-surface-200 overflow-hidden"
          >
            {/* Close */}
            <button
              onClick={onClose}
              aria-label="Close preview"
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/50 text-white/90 hover:bg-black/70 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Media */}
            <div
              className={`relative w-full aspect-video overflow-hidden bg-gradient-to-br ${project.gradient}`}
            >
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white/85">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                    <Play className="h-6 w-6" />
                  </span>
                  <p className="text-sm text-white/70">{project.name}</p>
                </div>
              )}
            </div>

            {/* Caption */}
            <div className="flex items-center justify-between gap-4 p-5">
              <div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-500/15 text-brand-400 border border-brand-500/20 mb-2">
                  {labelFor(project.category)}
                </span>
                <h3 className="text-lg font-bold text-white">{project.name}</h3>
              </div>
              <p className="text-xs text-gray-500 hidden sm:block">
                {project.tag}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}