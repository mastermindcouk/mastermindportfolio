import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyContent } from "./CaseStudyContent";

const caseStudies: Record<
  string,
  {
    title: string;
    description: string;
  }
> = {
  "cinematic-travel-reel": {
    title: "Cinematic Travel Reel — Brand Film",
    description:
      "How we cut a story-driven brand film with cinematic color grading, sound design, and social-ready edits.",
  },
  "cafe-brand-packaging": {
    title: "Café Brand & Packaging — Brand Identity",
    description:
      "How we built a complete visual identity, packaging, and menu system for a local café.",
  },
  "product-launch-film": {
    title: "Product Launch Film — Campaign Creative",
    description:
      "How we scripted, designed, and edited a high-energy product launch film with motion graphics and ad cutdowns.",
  },
  "social-campaign-suite": {
    title: "Social Campaign Suite — Social Media",
    description:
      "How we produced a full platform-native social campaign — reels, ads, carousels, and motion stings.",
  },
  "podcast-rebrand": {
    title: "Podcast Rebrand & Edit — Podcast Production",
    description:
      "How we handled multi-cam podcast editing and gave a show a fresh visual identity and clip pack.",
  },
  "live-event-graphics": {
    title: "Live Event Graphics — Event Production",
    description:
      "How we designed LED loop content, lower thirds, and a cinematic aftermovie for a corporate gala.",
  },
};

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
