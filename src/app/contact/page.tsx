import type { Metadata } from "next";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact — Master Mind",
  description:
    "Get in touch with Master Mind. Let's discuss your video and design project over a free discovery call.",
};

export default function ContactPage() {
  return <ContactContent />;
}
