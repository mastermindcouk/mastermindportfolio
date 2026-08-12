import type { Metadata } from "next";
import { CategoryWorkContent } from "@/components/work/CategoryWorkContent";

export const metadata: Metadata = {
  title: "Graphic Design — Master Mind",
  description:
    "Brand identity, campaigns, and visuals that make your content stand out — no templates, just original work.",
};

export default function GraphicDesignPage() {
  return (
    <CategoryWorkContent
      category="design"
      title="Graphic Design"
      description="Brand identity, campaigns, and visuals that make your content stand out — no templates, just original work."
    />
  );
}
