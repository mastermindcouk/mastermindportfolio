import type { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About — ScaleStack Labs",
  description:
    "We're a lean team of builders obsessed with shipping products that scale.",
};

export default function AboutPage() {
  return <AboutContent />;
}
