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
  logiflow: {
    title: "LogiFlow — Real-Time Delivery Tracking",
    description:
      "How we built a real-time delivery tracking dashboard for a logistics company.",
  },
  pocketledger: {
    title: "PocketLedger — Multi-Currency Accounting",
    description:
      "How we built a multi-currency accounting dashboard for small businesses.",
  },
  hirebase: {
    title: "HireBase — Modern Applicant Tracking System",
    description:
      "How we built an ATS with pipeline view, email integration, and analytics.",
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
