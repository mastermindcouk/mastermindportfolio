import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://mastermind.scalestacklab.online"),
  title: "Master Mind",
  description:
    "Master Mind is a digital production company crafting standout video editing, motion graphics, and graphic design that make brands unforgettable.",
  openGraph: {
    title: "Master Mind",
    description:
      "Video editing, graphic design & creative production that makes your brand unforgettable.",
    siteName: "Master Mind",
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
