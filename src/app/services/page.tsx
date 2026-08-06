import type { Metadata } from "next";
import { ServicesContent } from "./ServicesContent";

export const metadata: Metadata = {
  title: "Services — Master Mind",
  description:
    "Video editing, graphic design, motion graphics, and brand identity services that make your content stand out.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
