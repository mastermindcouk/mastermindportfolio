import type { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About — Master Mind",
  description:
    "We're a creative studio crafting standout video editing and graphic design for brands that want to be remembered.",
};

export default function AboutPage() {
  return <AboutContent />;
}
