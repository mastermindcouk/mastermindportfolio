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
 * Fullscreen lightbox that previews a single portfolio piece. Clicking a grid
 * card opens this in-page instead of navigating to a separate case-study page.
 * - For media with a `video`, a fullscreen <video> player is shown (mp4).
 * - For media with an `image`, the image is shown edge-to-edge with contain.
 * - Projects with neither show a gradient placeholder.
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
          className="fixed inset-0 z-[100] flex items-center justify-center"
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
          <div className="absolute inset-0 bg-black/95 backdrop-blur-sm" />

          {/* Fullscreen media */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative h-full w-full overflow-hidden"
          >
            {/* Close */}
            <button
              onClick={onClose}
              aria-label="Close preview"
              className="absolute top-4 right-4 z-20 p-3 rounded-full bg-black/60 text-white/90 hover:bg-black/80 border border-white/10 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {project.video ? (
              <video
                key={project.video}
                src={project.video}
                controls
                autoPlay
                playsInline
                className="h-full w-full object-contain"
              />
            ) : project.image ? (
              <div
                className={`relative h-full w-full bg-gradient-to-br ${project.gradient}`}
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
            ) : (
              <div
                className={`h-full w-full bg-gradient-to-br ${project.gradient} flex flex-col items-center justify-center gap-3 text-white/85`}
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                  <Play className="h-7 w-7" />
                </span>
                <p className="text-sm text-white/70">{project.name}</p>
              </div>
            )}

            {/* Caption */}
            <div className="absolute bottom-0 inset-x-0 z-10 flex items-center justify-between gap-4 px-6 py-5 bg-gradient-to-t from-black/85 to-transparent">
              <div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-500/15 text-brand-400 border border-brand-500/20 mb-2">
                  {labelFor(project.category)}
                </span>
                <h3 className="text-lg font-bold text-white">{project.name}</h3>
              </div>
              <p className="text-xs text-gray-400 hidden sm:block">
                {project.tag} · click anywhere to close
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}