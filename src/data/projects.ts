export type ProjectCategory = "photography" | "video" | "design";

export type Category = {
  id: ProjectCategory;
  label: string;
  href: string;
  description: string;
};

export type Project = {
  category: ProjectCategory;
  tag: string;
  name: string;
  blurb: string;
  problem: string;
  solution: string;
  results: string[];
  deliverables: string[];
    gradient: string;
  slug: string;
  image?: string;
  /** Direct file (mp4) to play fullscreen in the lightbox for video work. */
  video?: string;
};

/**
 * Featured categories for the works/portfolio section.
 * Each maps to a dedicated single page that displays only the works
 * belonging to that creative discipline.
 */
export const categories: Category[] = [
  {
    id: "photography",
    label: "Photography",
    href: "/work/photography",
    description:
      "Timeless frames for brands that want to be remembered — street, portrait, and commercial photography with a distinct, film-inspired eye.",
  },
  {
    id: "video",
    label: "Video Editing",
    href: "/work/video-editing",
    description:
      "Story-driven editing, color grading, and sound design for brands that want their video to actually move people.",
  },
  {
    id: "design",
    label: "Graphic Design",
    href: "/work/graphic-design",
    description:
      "Brand identity, campaigns, and visuals that make your content stand out — no templates, just original work.",
  },
];

/**
 * The single source of truth for every case study / project on the site.
 * Used by the work listing, the category pages, the case study pages, the
 * home "Featured Work" section, and the sitemap.
 *
 * Order is grouped by category for readability — individual pages select the
 * projects they need by slug or category, so ordering here has no side effects.
 */
export const projects: Project[] = [
    // ── Photography ──────────────────────────────────────────────
  {
    category: "photography",
    tag: "Street Photography",
    name: "Window Study, London",
    blurb:
      "A gritty, high-contrast street photography series capturing raw moments across Lagos — shot on 35mm film and digitized with a bold monochrome and amber tone grade.",
    problem:
      "A lifestyle brand wanted authentic, unscripted visual storytelling for their campaign, but stock imagery felt generic and disconnected from real urban culture.",
    solution:
      "We spent a week shooting documentary-style across the city on 35mm film, then digitized and graded the frames in a bold monochrome and amber palette. The selected shots became the backbone of their campaign across billboards and social, grounding the brand in real streets.",
    results: [
      "Authentic street imagery that felt truly local and unforced",
      "A film-digitized look with consistent monochrome + amber grading",
      "Used across billboards, web, and social for the campaign launch",
      "Audience engagement up on campaign posts featuring the photos",
    ],
    deliverables: [
      "Street Photography Series",
      "Film Digitization",
      "Color Grading",
      "Campaign Crop Variants",
    ],
        gradient: "from-sky-900 to-blue-950",
    slug: "urban-frames",
    image: "/images/img1.PNG",
  },
  // Photography continues
    {
    category: "photography",
    tag: "Portrait Photography",
    name: "Streetwear Editorial, Suburban Backdrop",
    blurb:
      "A warm, golden-hour portrait series for a wellness brand — natural light, soft focus, and a sun-kissed palette that feels alive and inviting.",
    problem:
      "A wellness brand's existing portraits felt stiff and over-lit, failing to communicate the calm, human warmth at the heart of their offering.",
    solution:
      "We shot a portrait series entirely in golden hour light using natural reflectors and a soft touch, then selected and lightly graded frames to a warm, sun-kissed palette. The images now lead every touchpoint, from the website to packaging.",
    results: [
      "Portraits that feel natural, warm, and genuinely human",
      "A cohesive sun-kissed color palette across all images",
      "Lifted perceived warmth on the brand's website and packaging",
      "Became the hero imagery for their flagship product launch",
    ],
    deliverables: [
      "Golden Hour Portrait Series",
      "Natural Light Styling",
      "Color Grading",
      "Brand Crop Variants",
    ],
        gradient: "from-amber-900 to-orange-900",
    slug: "golden-hour-portraits",
    image: "/images/img2.png",
  },
  {
    category: "photography",
    tag: "Commercial Photography",
    name: "Clouds & Carriageway",
    blurb:
      "Clean, high-detail product photography for a tech accessories line — crisp lighting and minimalist setups that let the products speak.",
    problem:
      "A tech accessories brand's product photos were flat, inconsistently lit, and lost detail — making their sleek hardware look cheap online.",
    solution:
      "We shot a clean commercial still life series with controlled key lighting and minimal reflective backgrounds, capturing every detail of the hardware. The consistent look was applied across their store, listings, and ad creative.",
    results: [
      "Consistent, crisp product imagery across the full catalog",
      "Hardware details clearly visible — boosting purchase confidence",
      "Increased add-to-cart rate on product pages",
      "Reusable style guide for future product drops",
    ],
    deliverables: [
      "Commercial Product Photography",
      "Controlled Lighting Setup",
      "Multi-Angle Shots",
      "Web & Print Crops",
    ],
        gradient: "from-rose-900 to-pink-900",
    slug: "product-still-life",
    image: "/images/img3.PNG",
  },
  {
    category: "photography",
    tag: "Commercial Photography",
    name: "Dusk on the High Street",
    blurb:
      "Clean, high-detail product photography for a tech accessories line — crisp lighting and minimalist setups that let the products speak.",
    problem:
      "A tech accessories brand's product photos were flat, inconsistently lit, and lost detail — making their sleek hardware look cheap online.",
    solution:
      "We shot a clean commercial still life series with controlled key lighting and minimal reflective backgrounds, capturing every detail of the hardware. The consistent look was applied across their store, listings, and ad creative.",
    results: [
      "Consistent, crisp product imagery across the full catalog",
      "Hardware details clearly visible — boosting purchase confidence",
      "Increased add-to-cart rate on product pages",
      "Reusable style guide for future product drops",
    ],
    deliverables: [
      "Commercial Product Photography",
      "Controlled Lighting Setup",
      "Multi-Angle Shots",
      "Web & Print Crops",
    ],
        gradient: "from-rose-900 to-pink-900",
    slug: "dusk-on-the-high-street",
    image: "/images/img4.PNG",
  },
  {
    category: "photography",
    tag: "Commercial Photography",
    name: "The Cheesegrater",
    blurb:
      "Clean, high-detail product photography for a tech accessories line — crisp lighting and minimalist setups that let the products speak.",
    problem:
      "A tech accessories brand's product photos were flat, inconsistently lit, and lost detail — making their sleek hardware look cheap online.",
    solution:
      "We shot a clean commercial still life series with controlled key lighting and minimal reflective backgrounds, capturing every detail of the hardware. The consistent look was applied across their store, listings, and ad creative.",
    results: [
      "Consistent, crisp product imagery across the full catalog",
      "Hardware details clearly visible — boosting purchase confidence",
      "Increased add-to-cart rate on product pages",
      "Reusable style guide for future product drops",
    ],
    deliverables: [
      "Commercial Product Photography",
      "Controlled Lighting Setup",
      "Multi-Angle Shots",
      "Web & Print Crops",
    ],
        gradient: "from-rose-900 to-pink-900",
    slug: "the-cheesegrater",
    image: "/images/img5.PNG",
  },
    // ── Video Editing ────────────────────────────────────────────
  {
    category: "video",
    tag: "Events",
    name: "Halloween Party Friday",
    blurb:
      "A high-energy event film capturing the full vibe of a Halloween party night — punchy cuts, beat-synced transitions, and a playlist-driven edit that keeps the energy rolling to the last frame.",
    problem:
      "The client wanted a shareable recap of their Halloween party that felt as electric as the night itself, not a flat slideshow of clips.",
    solution:
      "We trimmed hours of footage into a tight, music-synced event film with snappy cuts, burst-style transitions, and on-beat pacing, then graded it with a dark purple-orange Halloween palette to match the event's mood.",
    results: [
      "A punchy, beat-synced recap that matched the energy of the night",
      "Halloween-grade color treatment for a cohesive look",
      "A shareable film cut for stories, reels, and paid boosts",
      "High engagement with attendees tagged across socials",
    ],
    deliverables: ["Event Recap Edit", "Music Sync", "Color Grading", "Social Cuts"],
    gradient: "from-orange-900 to-purple-950",
    slug: "halloween-party-friday",
    video: "/images/halloween-party-friday.mp4",
  },
  {
    category: "video",
    tag: "Campaign",
    name: "Last Card",
    blurb:
      "A dramatic, tension-driven promo edit built around a single moment — slow-build pacing, suspenseful music, and a reveal that lands exactly on the beat.",
    problem:
      "A poker/card brand needed a promo that built suspense rather than just showing footage, so the reveal would feel earned and memorable.",
    solution:
      "We structured the edit around a narrative build — slow tension, layered sound, and quickening cuts — leading to a final reveal timed precisely to the musical drop for maximum impact.",
    results: [
      "A suspenseful edit with a reveal timed to the beat drop",
      "Layered sound design that builds and releases tension",
      "A promo that stands out in crowded feeds",
      "Reusable pacing template for future reveals",
    ],
    deliverables: ["Promo Edit", "Pacing & Structure", "Sound Design", "Beat-Synced Reveal"],
    gradient: "from-red-950 to-surface-400",
    slug: "last-card",
    video: "/images/last-card.mp4",
  },
  {
    category: "video",
    tag: "Events",
    name: "Poker & Jazz Night",
    blurb:
      "A moody event film pairing smooth jazz energy with poker table tension — seamless multi-scene coverage edited into one cinematic night.",
    problem:
      "The event blended two very different moods — laid-back jazz and competitive poker — and the recap needed to capture both without feeling disjointed.",
    solution:
      "We wove together table play, live jazz, and crowd reactions into a single cinematic flow, cutting on the music and using cross-fades to bridge the calm and the tension.",
    results: [
      "One cohesive film balancing jazz and poker atmospheres",
      "Music-led editing that smooths scene transitions",
      "A cinematic, shareable record of the night",
      "Reusable edit templates for recurring events",
    ],
    deliverables: ["Event Recap Edit", "Multi-Scene Coverage", "Music-Led Editing", "Color Grading"],
    gradient: "from-amber-950 to-zinc-900",
    slug: "poker-jazz-night",
    video: "/images/poker-Jazznight.mp4",
  },
  {
    category: "video",
    tag: "Brand Film",
    name: "The Wrap",
    blurb:
      "A clean, professional wrap-up film that ties a production together — polished pacing, tidy transitions, and a finish that leaves the client looking sharp.",
    problem:
      "The client needed a concise, polished closing film that summarized a production professionally without dragging or feeling rushed.",
    solution:
      "We cut a tight, well-paced wrap film with clean transitions, on-brand title cards, and a confident ending card, delivering a polished piece ready for client handoff and social sharing.",
    results: [
      "A concise, polished wrap-up with clean pacing",
      "On-brand title and end cards",
      "A professional finish suitable for client delivery",
      "Ready-to-share across web and socials",
    ],
    deliverables: ["Wrap-Up Edit", "Title Cards", "Clean Transitions", "Delivery Master"],
    gradient: "from-sky-950 to-brand-900",
    slug: "the-wrap",
    video: "/images/wrap.mp4",
  },
  // ── Graphic Design ───────────────────────────────────────────
  {
    category: "design",
    tag: "Brand Identity",
    name: "The Training Theatre - Course Promo Design",
    blurb:
      "A complete visual identity system — logo, palette, packaging, and menu design — that turned a local café into a beloved brand.",
    problem:
      "A beloved local café had strong coffee but a forgettable, inconsistent look — mismatched menus, packaging, and social graphics that didn't reflect the quality of the product.",
    solution:
      "We built a complete visual identity from the ground up — logo system, color palette, typography, packaging, menu design, and brand guidelines — then rolled it out across store and social touchpoints for one cohesive, memorable look.",
    results: [
      "A cohesive identity customers immediately recognize",
      "Packaging and menus that feel premium and on-brand",
      "Clear brand guidelines for consistent future use",
      "A social presence that finally matches the product",
    ],
    deliverables: ["Logo Design", "Packaging", "Brand Guidelines", "Menu Design"],
        gradient: "from-emerald-900 to-emerald-700",
    slug: "cafe-brand-packaging",
    image: "/images/graphic1.jpg",
  },
    {
    category: "design",
    tag: "Poster Series",
    name: "Stay Relevant Campaign Poster",
    blurb:
      "A bold poster series for a music venue — neon-soaked layouts, punchy typography, and a retro-future vibe that pops on walls and feeds.",
    problem:
      "A music venue's event posters looked flat and forgettable, failing to convey the energy of live shows and losing footfall to bigger venues.",
    solution:
      "We designed a recurring poster series using a neon-soaked color scheme, bold condensed typography, and layered photo collage — a retro-future look that's instantly recognizable. Templates were reused monthly with fresh content.",
    results: [
      "Posters that people actually wanted to take home and share",
      "A consistent, energetic brand for every show poster",
      "Increased event attendance and social shares",
      "A signature look the venue now uses across all collateral",
    ],
    deliverables: ["Poster Series Design", "Typography System", "Social Square Variants", "Print-Ready Files"],
        gradient: "from-fuchsia-900 to-pink-900",
    slug: "neon-nights-poster-series",
    image: "/images/graphic2.jpg",
  },
  {
    category: "design",
    tag: "Brand Refresh",
    name: "The Right Care Recruitment Ad",
    blurb:
      "A modern brand refresh for a fintech startup — cleaner logo treatment, a restrained color system, and a flexible identity that scales from app to deck.",
    problem:
      "A growing fintech had a dated logo and inconsistent visuals that felt amateur next to competitors, undermining trust with enterprise clients.",
    solution:
      "We refreshed the visual identity with a cleaner logotype, a restrained blue-gray palette, and a simple set of brand rules. We then applied it across the app, pitch decks, and data visuals for a confident, professional presence.",
    results: [
      "A sharper, more professional identity that built client confidence",
      "Consistent visuals across app, decks, and data presentations",
      "Positive feedback from new enterprise clients on first demos",
      "A lightweight brand kit the team can self-serve",
    ],
    deliverables: ["Logo Refinement", "Color & Typography System", "Brand Guidelines", "Deck & App Templates"],
        gradient: "from-indigo-900 to-purple-900",
    slug: "tech-brand-refresh",
    image: "/images/graphic3.png",
  },
];

/** Quick lookup when you already have a slug (case study pages, sitemap, etc.). */
export const projectBySlug: Record<string, Project> = Object.fromEntries(
  projects.map((p) => [p.slug, p])
);

/** Slugs that the home "Featured Work" section highlights. */
export const featuredSlugs = [
  "cinematic-travel-reel",
  "cafe-brand-packaging",
  "product-launch-film",
] as const;
