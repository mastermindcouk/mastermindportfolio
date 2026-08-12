import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyContent } from "./CaseStudyContent";
import { projectBySlug } from "@/data/projects";

/**
 * Derives the static-param / metadata map from the single source of truth
 * (src/data/projects) so every case study — including the new Photography,
 * Video Editing, and Graphic Design folios — is prerendered and indexed.
 */
const caseStudies: Record<string, { title: string; description: string }> =
  Object.fromEntries(
    Object.values(projectBySlug).map((p) => [
      p.slug,
      { title: `${p.name} — ${p.tag}`, description: p.blurb },
    ])
  );

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies[slug];
  if (!study) return { title: "Not Found" };

  return {
    title: `${study.title} — Master Mind`,
    description: study.description,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!caseStudies[slug]) {
    notFound();
  }

  return <CaseStudyContent slug={slug} />;
}
