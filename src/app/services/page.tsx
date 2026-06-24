import type { Metadata } from "next";
import { ServicesContent } from "./ServicesContent";

export const metadata: Metadata = {
  title: "Services — ScaleStack Labs",
  description:
    "We build SaaS MVPs, business websites, admin dashboards, and API & backend systems for startups and businesses.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
