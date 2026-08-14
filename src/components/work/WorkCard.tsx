"use client";
import { ArrowRight, Clapperboard } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { Project } from "@/data/projects";

export function WorkCard({
  project,
  index = 0,
  onSelect,
}: {
  project: Project;
  index?: number;
  onSelect?: (project: Project) => void;
}) {
  return (
    <AnimatedSection delay={(index % 6) * 0.05}>
      <div
        onClick={onSelect ? () => onSelect(project) : undefined}
        role={onSelect ? "button" : undefined}
        tabIndex={onSelect ? 0 : undefined}
        className="card-glass overflow-hidden hover:border-brand-500/30 hover:bg-surface-300/80 transition-all duration-300 h-full group cursor-pointer"
      >
        {/* Cover preview */}
                <div className={`relative h-40 overflow-hidden bg-gradient-to-br ${project.gradient}`}>
          {project.video ? (
            <video
              src={project.video}
              muted
              loop
              autoPlay
              playsInline
              preload="auto"
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            project.image && (
              <img
                src={project.image}
                alt={project.name}
                className="absolute inset-0 h-full w-full object-cover"
              />
            )
          )}
          <div
            className="absolute inset-0 bg-grid-pattern bg-grid opacity-20 pointer-events-none"
            style={{ backgroundSize: "48px 48px" }}
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-white bg-brand-600/80 px-4 py-2 rounded-full">
              <Clapperboard className="w-4 h-4" />
              View
            </span>
          </div>
        </div>

        <div className="p-5">
          <div className="mb-3">
            <Badge>{project.tag}</Badge>
          </div>
          <h3 className="text-lg font-bold text-white mb-1 group-hover:text-brand-400 transition-colors">
            {project.name}
          </h3>
          <p className="text-sm text-gray-400 line-clamp-2 mb-3">
            {project.blurb}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.deliverables.map((t) => (
              <span
                key={`${project.slug}-${t}`}
                className="text-xs px-2 py-0.5 rounded bg-surface-400 text-gray-400"
              >
                {t}
              </span>
            ))}
          </div>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-400">
            View <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </AnimatedSection>
  );
}
