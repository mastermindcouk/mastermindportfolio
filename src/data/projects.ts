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
    tag: "Brand Film",
    name: "Cinematic Travel Reel",
    blurb:
      "A story-driven brand film cut from raw travel footage with cinematic color grading, sound design, and social-ready edits.",
    problem:
      "A travel brand had hours of beautiful raw footage but nothing that told their story in a way audiences connected with — flat edits, inconsistent color, and no sound design.",
    solution:
      "We cut a story-driven brand film built around a clear narrative arc — cinematic color grading, layered sound design, and branded motion titles. The reel was then re-cut into platform-native versions for reels, stories, and paid placements.",
    results: [
      "A cinematic brand film that actually told a story",
      "Consistent, film-grade color across every shot",
      "Sound design and mix that raised production value",
      "Social-ready cutdowns for every major platform",
    ],
    deliverables: ["Color Grading", "Sound Design", "Social Cuts", "Motion Titles"],
    gradient: "from-brand-900 to-brand-700",
    slug: "cinematic-travel-reel",
  },
  {
    category: "video",
    tag: "Campaign",
    name: "Product Launch Film",
    blurb:
      "A high-energy launch film with motion graphics, kinetic type, and ad cutdowns that drove thousands of views across paid channels.",
    problem:
      "A company was launching a new product with no strong launch creative — they needed a hero film that would excite an audience and convert paid ad traffic.",
    solution:
      "We scripted, designed, and edited a high-energy launch film combining live product footage with motion graphics and kinetic typography. We then produced multiple ad cutdowns, thumbnails, and platform variants to maximize reach across paid channels.",
    results: [
      "Thousands of views across paid and organic channels",
      "A hero film and ad cutdowns for every platform",
      "Kinetic type and motion that boosted engagement and recall",
      "A launch asset pack ready for multi-channel rollout",
    ],
    deliverables: ["Scripting", "Motion Graphics", "Ad Cutdowns", "Thumbnails"],
    gradient: "from-purple-900 via-brand-900 to-surface-400",
    slug: "product-launch-film",
  },
  {
    category: "video",
    tag: "Social Media",
    name: "Social Campaign Suite",
    blurb:
      "A full set of platform-native reels, static ads, carousels, and motion stings that kept a DTC brand consistent and engaging all month.",
    problem:
      "A DTC brand was posting inconsistently with disjointed visuals and low engagement — they needed a monthly content system that was on-brand and built for each platform.",
    solution:
      "We produced a full campaign suite — platform-native reels, static ads, carousels, and motion stings — designed from one creative direction. Every asset was delivered in the right format for its channel so the brand stayed consistent and engaging all month.",
    results: [
      "A complete, platform-native monthly content kit",
      "Consistent on-brand visuals across every channel",
      "Higher engagement from reels and motion content",
      "Clear system the brand can brief and scale",
    ],
    deliverables: ["Reels Editing", "Static Ads", "Carousels", "Motion Stings"],
    gradient: "from-brand-900 to-brand-700",
    slug: "social-campaign-suite",
  },
    {
    category: "video",
    tag: "Podcast",
    name: "Podcast Rebrand & Edit",
    blurb:
      "Multi-cam podcast editing with a fresh visual identity — intro animation, lower thirds, and a clip pack built for social distribution.",
    problem:
      "A growing podcast had great conversations but dated visuals and slow, boring edits — episodes weren't standing out in crowded feeds.",
    solution:
      "We handled the full multi-cam edit and gave the show a fresh identity — a new intro animation, lower thirds, and show-notes graphics. We also cut a social clip pack so every episode could be promoted across platforms.",
    results: [
      "Polished multi-cam edits that keep viewers hooked",
      "A refreshed visual identity that looks professional",
      "Lower thirds and motion that reinforce the brand",
      "A ready-to-post clip pack for every episode",
    ],
    deliverables: ["Multi-cam Edit", "Show Notes Graphics", "Intro Animation", "Clip Pack"],
    gradient: "from-emerald-900 to-emerald-700",
    slug: "podcast-rebrand",
  },
  {
    category: "video",
    tag: "Events",
    name: "Live Event Graphics",
    blurb:
      "LED loop content, lower thirds, title cards, and a polished aftermovie edit that made a corporate gala feel broadcast-ready.",
    problem:
      "A corporate gala needed broadcast-quality visuals — LED loop content, speaker titles, and a polished aftermovie — to feel as professional as the event itself.",
    solution:
      "We designed and delivered LED loop content, lower thirds, and title cards for the live screens, then cut a cinematic aftermovie edit that captured the energy of the night and gave the brand shareable content afterward.",
    results: [
      "Broadcast-ready visuals across all live screens",
      "Clean speaker titles and lower thirds throughout",
      "A cinematic aftermovie the brand can reuse for months",
      "An event that looked as premium as it felt",
    ],
    deliverables: ["LED Loop Content", "Lower Thirds", "Title Cards", "Aftermovie Edit"],
    gradient: "from-purple-900 via-brand-900 to-surface-400",
    slug: "live-event-graphics",
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
