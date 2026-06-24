import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "ScaleStack Labs — Build. Scale. Ship.",
  description:
    "We build scalable web and mobile solutions for startups and businesses. SaaS MVPs, dashboards, APIs, and more.",
  openGraph: {
    title: "ScaleStack Labs",
    description: "Scalable digital products, shipped fast.",
    siteName: "ScaleStack Labs",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} font-sans bg-surface-50 text-white antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
