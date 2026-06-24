import type { Metadata } from "next";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact — ScaleStack Labs",
  description:
    "Get in touch with ScaleStack Labs. Let's discuss your project over a free discovery call.",
};

export default function ContactPage() {
  return <ContactContent />;
}
