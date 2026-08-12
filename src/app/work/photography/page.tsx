import type { Metadata } from "next";
import { CategoryWorkContent } from "@/components/work/CategoryWorkContent";

export const metadata: Metadata = {
  title: "Photography — Master Mind",
  description:
    "Timeless street, portrait, and commercial photography for brands that want to stand out.",
};

export default function PhotographyPage() {
  return (
    <CategoryWorkContent
      category="photography"
      title="Photography"
      description="Timeless frames for brands that want to stand out — street, portrait, and commercial photography with a distinct, film-inspired eye."
    />
  );
}
