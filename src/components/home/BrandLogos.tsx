"use client";

import { motion } from "framer-motion";



interface Brand {
  name: string;
  type: "placeholder" | "image";
  src?: string;
}

const brands: Brand[] = [
  { name: "Digital Agency", type: "image", src: "/images/brands/digital1.webp" },
  { name: "Lanre", type: "image", src: "/images/brands/lanre.png" },
  { name: "Vestifyhub", type: "image", src: "/images/brands/vestifylogo.png" },
  { name: "paywodi", type: "image", src: "/images/brands/paywodi.png" },
  { name: "FS", type: "image", src: "/images/brands/FS-logo.png" },
  { name: "LGGC", type: "image", src: "/images/brands/lggclogo.png" },
  { name: "skillhubs", type: "image", src: "/images/brands/skillhubs-logo-white.svg" },
  { name: "ovg", type: "image", src: "/images/brands/ovglogo.png" },
  { name: "routa", type: "image", src: "/images/brands/routerlogo.webp" },
  { name: "white", type: "image", src: "/images/brands/whitelogo2.png" },
  { name: "netpay", type: "image", src: "/images/brands/logo.png" },
  { name: "thehost", type: "image", src: "/images/brands/thhostlogo.png" },
];

// Split into two rows
const mid = Math.ceil(brands.length / 2);
const row1 = brands.slice(0, mid);
const row2 = brands.slice(mid);

// Duplicate each row for seamless infinite scroll
const row1Scroll = [...row1, ...row1];
const row2Scroll = [...row2, ...row2];

function PlaceholderLogo({ name }: { name: string }) {
  // Generate a deterministic hue from the brand name
  const hue =
    name.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0) * 30 % 360;
  return (
    <div className="relative w-36 h-14 flex items-center justify-center">
      <svg
        viewBox="0 0 144 56"
        className="w-full h-full"
        aria-label={name}
      >
        <rect
          x="1"
          y="1"
          width="142"
          height="54"
          rx="8"
          fill={`hsla(${hue}, 40%, 50%, 0.06)`}
          stroke={`hsla(${hue}, 40%, 60%, 0.15)`}
          strokeWidth="1"
        />
        <text
          x="72"
          y="32"
          textAnchor="middle"
          fill={`hsla(${hue}, 35%, 65%, 0.7)`}
          fontFamily="Inter, system-ui, sans-serif"
          fontSize="13"
          fontWeight="600"
          letterSpacing="0.02em"
        >
          {name}
        </text>
      </svg>
    </div>
  );
}

export function BrandLogos() {
  return (
    <section className="relative py-16 border-y border-white/[0.06] bg-surface-50/50 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-500/3 via-transparent to-accent-500/3 pointer-events-none" />

      <div className="relative">
        {/* Heading */}
        <div className="text-center mb-10 px-4">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500"
          >
            Brands that trust Master Mind
          </motion.p>
        </div>

        {/* Infinite scrolling rows */}
        <div className="relative space-y-6">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-surface-50 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-surface-50 to-transparent pointer-events-none" />

          {/* Row 1 — scrolls left */}
          <motion.div
            className="flex gap-8 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                duration: 15,
                ease: "linear",
              },
            }}
          >
            {row1Scroll.map((brand, i) => (
              <div
                key={`r1-${brand.name}-${i}`}
                className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105"
              >
                {brand.type === "image" && brand.src ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={brand.src}
                    alt={brand.name}
                    className="w-36 h-14 object-contain"
                  />
                ) : (
                  <PlaceholderLogo name={brand.name} />
                )}
              </div>
            ))}
          </motion.div>

          {/* Row 2 — scrolls right */}
          <motion.div
            className="flex gap-8 items-center"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              x: {
                repeat: Infinity,
                duration: 15,
                ease: "linear",
              },
            }}
          >
            {row2Scroll.map((brand, i) => (
              <div
                key={`r2-${brand.name}-${i}`}
                className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105"
              >
                {brand.type === "image" && brand.src ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={brand.src}
                    alt={brand.name}
                    className="w-36 h-14 object-contain"
                  />
                ) : (
                  <PlaceholderLogo name={brand.name} />
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
