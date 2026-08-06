import type { Metadata } from "next";
import { WorkContent } from "./WorkContent";

export const metadata: Metadata = {
  title: "Our Work — Master Mind",
  description:
    "Case studies in video editing, graphic design, and creative production for brands.",
};

export default function WorkPage() {
  return <WorkContent />;
}
