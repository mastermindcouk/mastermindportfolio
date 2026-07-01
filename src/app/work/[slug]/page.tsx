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
  "vestify-hub": {
    title: "Vestify Hub — UK Property Investment Platform",
    description:
      "How we built a modern property investment platform for VestifyHub.",
  },
  lggc: {
    title: "Life is Good Global Care — Healthcare Provider Website",
    description:
      "How we built a professional healthcare website for Life is Good Global Care.",
  },
  "routa-ev": {
    title: "Routa MVP — African Mobility Platform",
    description:
      "How we built an MVP for Routa EV's ride-hailing, logistics, and energy platform.",
  },
  "qr-geek": {
    title: "QR Geek MVP — QR Code Generation Platform",
    description:
      "How we built a simple yet powerful QR code generation platform.",
  },
  "impact-city": {
    title: "Impact City — Personal & Professional Development Platform",
    description:
      "How we built a development support platform for ImpactCity.",
  },
  digitalli: {
    title: "Digitalli — Brand Asset Management Platform",
    description:
      "How we built a brand asset management system for Digitalli.",
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
    title: `${study.title} — ScaleStack Labs`,
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
