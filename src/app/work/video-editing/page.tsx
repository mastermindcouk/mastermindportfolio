import type { Metadata } from "next";
import { CategoryWorkContent } from "@/components/work/CategoryWorkContent";

export const metadata: Metadata = {
  title: "Video Editing — Master Mind",
  description:
    "Story-driven video editing, color grading, and sound design for brands that want their video to move people.",
};

export default function VideoEditingPage() {
  return (
    <CategoryWorkContent
      category="video"
      title="Video Editing"
      description="Story-driven editing, color grading, and sound design for brands that want their video to actually move people."
    />
  );
}
