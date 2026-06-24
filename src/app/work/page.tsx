import type { Metadata } from "next";
import { WorkContent } from "./WorkContent";

export const metadata: Metadata = {
  title: "Our Work — ScaleStack Labs",
  description:
    "Case studies and projects we've built for startups and businesses.",
};

export default function WorkPage() {
  return <WorkContent />;
}
