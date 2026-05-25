// projects-data.ts
// Place this file at: src/data/projects.ts
// Replace all placeholder image paths and live URLs before going to production.

export type ProjectType = "website" | "graphic-design";

export interface ProjectImages {
  ourWork: string;        // Our Work listing page — 16:9 composite hero card image
  caseStudyHero: string;  // Case study page top hero — 16:9 wide banner
  mobile: string;         // Case study section 1 — phone/mobile view mockup (portrait, ~9:16)
  desktop: string;        // Case study section 2 — laptop/desktop view mockup (16:9)
  detail: string;         // Case study section 3 — close-up, tablet view, or feature highlight (4:3)
}

export interface CaseStudySection {
  phase: string;
  content: string[];
  image: keyof Pick<ProjectImages, "mobile" | "desktop" | "detail">;
  imageAlt: string;
  imageLayout: "portrait" | "landscape"; // portrait = mobile shot, landscape = desktop/detail shot
}

export interface Project {
  slug: string;
  type: ProjectType;
  client: string;
  tagline: string;
  industry: string;
  location: string;
  goal: string;
  techStack: string[];
  liveUrl?: string;
  graphicAssetUrl?: string;
  images: ProjectImages;
  shortDescription: string[];
  caseStudy: {
    headline: string;
    metaStrip: {
      industry: string;
      location: string;
      goal: string;
      outcome: string;
      stack: string;
    };
    sections: CaseStudySection[];
    outcome: string;
    ctaLabel: string;
    ctaUrl: string;
  };
}

export const projects: Project[] = [
  // ─────────────────────────────────────────────
  // 1. CARTENATEX — Automotive repair website
  // ─────────────────────────────────────────────
  {
    slug: "cartenatex",
    type: "website",
    client: "Cartenatex",
    tagline: "From decade-old presence to a digital-first automotive brand.",
    industry: "Automotive & Car Repair",
    location: "South Africa",
    goal: "Modernise digital presence and launch an online storefront to drive business growth.",
    techStack: ["Next.js", "Tailwind CSS", "Headless CMS", "E-commerce / Storefront"],
    liveUrl: "https://your-cartenatex-url.com",
    images: {
      ourWork:        "/images/cph2.jpeg",
      caseStudyHero:  "/images/cph2.jpeg",
      mobile:         "/images/cph.jpeg",
      desktop:        "/images/clp.jpeg",
      detail:         "/images/cdt.jpeg",
    },
    shortDescription: [
      "Cartenatex had been serving customers for over a decade — but their digital presence hadn't kept up. We rebuilt their website from the ground up, pairing a clean, trust-building brand experience with a fully integrated online storefront.",
      "The new site gives customers the ability to browse services, explore parts, and place orders directly — removing friction that was costing the business leads every day. Performance and mobile experience were prioritised from the first line of code.",
      "Following the launch, Cartenatex has a platform built to scale — one that reflects the quality of the work they do in the workshop, and gives them a credible foundation to grow their digital revenue.",
    ],
    caseStudy: {
      headline: "A modern digital home for a trusted decade-old automotive brand.",
      metaStrip: {
        industry: "Automotive & Car Repair",
        location: "South Africa",
        goal: "Scale digital presence and enable online sales",
        outcome: "A live storefront bringing the workshop online",
        stack: "Next.js · Tailwind CSS · Headless CMS · Storefront",
      },
      sections: [
        {
          phase: "Understanding the business",
          image: "mobile",
          imageAlt: "Cartenatex website on a mobile phone screen",
          imageLayout: "portrait",
          content: [
            "Cartenatex had built real trust with their customers over ten years of operation — but without a modern website, that reputation wasn't reaching new audiences online.",
            "– No way for customers to browse or purchase services and parts digitally",
            "– Website did not reflect the quality and experience of the business",
            "– Missing an SEO foundation to compete in local search",
            "– No mobile-optimised experience for on-the-go customers",
          ],
        },
        {
          phase: "What we built",
          image: "desktop",
          imageAlt: "Cartenatex full website layout on a laptop screen",
          imageLayout: "landscape",
          content: [
            "We designed and developed a full website rebuild with a storefront at its core.",
            "– Brand-aligned design that communicates professionalism and trust",
            "– Online storefront allowing customers to browse services and products",
            "– Add-to-cart and order flow to streamline the purchase experience",
            "– Mobile-first build, optimised for customers searching from their phones",
            "– SEO foundations including structured pages, metadata, and performance optimisation",
          ],
        },
        {
          phase: "The result",
          image: "detail",
          imageAlt: "Close-up of the Cartenatex storefront product detail page",
          imageLayout: "landscape",
          content: [
            "Cartenatex now has a digital presence worthy of their reputation — and a storefront that works while they're in the workshop.",
            "– A professional platform that builds credibility with new and returning customers",
            "– Online sales channel operational from day one of launch",
            "– Strong mobile experience capturing the majority of local search traffic",
          ],
        },
      ],
      outcome:
        "Cartenatex went from a dated web presence to a fully functioning digital business — with a storefront that extends their reach beyond the workshop floor and a brand online that matches the trust they've earned in person.",
      ctaLabel: "Visit Website",
      ctaUrl: "https://www.cartenatex.co.za/#/",
    },
  },

  // ─────────────────────────────────────────────
  // 2. LMS — Learner Management System
  // ─────────────────────────────────────────────
  {
    slug: "lms",
    type: "website",
    client: "LMS",
    tagline: "A smarter learning environment — for teachers and students alike.",
    industry: "Education Technology",
    location: "South Africa",
    goal: "Build a feature-rich LMS with AI integration, smart reporting, and a dual teacher-learner portal.",
    techStack: ["Next.js", "Tailwind CSS", "AI Chat Integration", "Data Dashboards"],
    liveUrl: "https://your-lms-url.com",
    images: {
      ourWork:        "/images/h3d.jpeg",
      caseStudyHero:  "https://placehold.co/1024x576/0f172a/ffffff?text=LMS+-+Hero",
      mobile:         "https://placehold.co/390x844/0f172a/ffffff?text=LMS+-+Mobile+View",
      desktop:        "https://placehold.co/1280x800/f8fafc/1e293b?text=LMS+-+Dashboard+Desktop",
      detail:         "https://placehold.co/800x600/f1f5f9/1e293b?text=LMS+-+AI+Chat+Detail",
    },
    shortDescription: [
      "This Learner Management System was built to close the gap between teaching and technology — giving educators powerful tools and giving learners a seamless, engaging platform to grow in.",
      "Key features include an AI chat assistant for instant learner support, smart reporting dashboards that surface meaningful insights for teachers, and a dual-portal architecture that keeps the teacher and learner experiences cleanly separated.",
      "The platform is fully web-based and mobile-responsive, meaning students can access their coursework and teachers can manage their classes from any device, anywhere.",
    ],
    caseStudy: {
      headline: "A fully integrated learning platform built for the modern classroom.",
      metaStrip: {
        industry: "Education Technology",
        location: "South Africa",
        goal: "Replace fragmented tools with a unified, intelligent LMS",
        outcome: "A live platform with AI support, smart reports, and dual portals",
        stack: "Next.js · Tailwind CSS · AI Chat · Reporting Dashboards",
      },
      sections: [
        {
          phase: "The problem to solve",
          image: "mobile",
          imageAlt: "LMS learner portal viewed on a mobile phone",
          imageLayout: "portrait",
          content: [
            "Educators were juggling multiple disconnected tools — and learners had no single reliable place to engage with their coursework.",
            "– No unified space for course content, communication, and progress tracking",
            "– Teachers lacked data to identify struggling learners early",
            "– Learners had no on-demand support between classes",
            "– Existing tools were not mobile-friendly for students on the go",
          ],
        },
        {
          phase: "Platform architecture",
          image: "desktop",
          imageAlt: "LMS teacher dashboard showing smart reports on a laptop",
          imageLayout: "landscape",
          content: [
            "We built a dual-portal LMS from the ground up, tailored to both sides of the classroom.",
            "– Teacher portal: class management, content upload, smart reports, and learner progress views",
            "– Learner portal: course access, assignment submission, and progress tracking",
            "– AI chat integration providing instant answers to learner questions 24/7",
            "– Smart reporting engine surfacing performance trends and at-risk learner flags",
            "– Fully responsive — accessible on desktop, tablet, and mobile without compromise",
          ],
        },
        {
          phase: "Outcome",
          image: "detail",
          imageAlt: "Close-up of the LMS AI chat assistant interface",
          imageLayout: "landscape",
          content: [
            "The platform launched as a complete, production-ready LMS that handles the full teaching and learning lifecycle in one place.",
            "– Teachers have real-time visibility into learner progress",
            "– Learners get immediate support through the AI chat assistant",
            "– Administrators can generate meaningful reports without manual data work",
          ],
        },
      ],
      outcome:
        "The LMS brought structure, intelligence, and accessibility to an environment that previously relied on fragmented tools. Both teachers and learners now operate from a single platform built around their real workflows — not the other way around.",
      ctaLabel: "Visit Platform",
      ctaUrl: "https://your-lms-url.com",
    },
  },

  // ─────────────────────────────────────────────
  // 3. ALKAWAYS — Fast food demo website revamp
  // ─────────────────────────────────────────────
  {
    slug: "alkaways",
    type: "website",
    client: "Alkaways Fast Food",
    tagline: "A fast food brand that's now just as fast online.",
    industry: "Food & Beverage",
    location: "South Africa",
    goal: "Revamp digital presence with an SEO-optimised landing page and an add-to-cart storefront.",
    techStack: ["Next.js", "Tailwind CSS", "SEO Optimisation", "Storefront / Add-to-Cart"],
    liveUrl: "https://akhalwaya-s.vercel.app/",
    images: {
      ourWork:        "/images/akhalways-nbg.png",
      caseStudyHero:  "/images/akhalways-nbg.png",
      mobile:         "/images/aph.jpeg",
      desktop:        "/images/alp.jpeg",
      detail:         "/images/apt.jpeg",
    },
    shortDescription: [
      "Alkaways Fast Food needed a digital presence that matched the energy of their brand — and made it just as easy to order online as it is to walk through the door.",
      "We built a revamped landing page with SEO baked in from the start, paired with a storefront featuring an add-to-cart experience that lets customers browse the menu and place orders without friction.",
      "The result is a clean, fast-loading site that ranks well in local search and converts visitors into orders — a digital extension of what makes Alkaways worth visiting in person.",
    ],
    caseStudy: {
      headline: "A revamped online presence that makes ordering as easy as eating.",
      metaStrip: {
        industry: "Food & Beverage",
        location: "South Africa",
        goal: "Modernise brand online and enable direct food ordering",
        outcome: "SEO-optimised site with a live add-to-cart storefront",
        stack: "Next.js · Tailwind CSS · SEO · Storefront",
      },
      sections: [
        {
          phase: "Where they were",
          image: "mobile",
          imageAlt: "Alkaways landing page viewed on a mobile phone",
          imageLayout: "portrait",
          content: [
            "Alkaways had the food, the brand, and the loyal customers — but their online presence wasn't doing any of that justice.",
            "– No easy way for customers to view the menu or order online",
            "– Missing from local search results where hungry customers were looking",
            "– Existing site was not mobile-friendly in an era where most orders start on a phone",
            "– Brand wasn't being communicated with the energy and appetite-appeal it deserved",
          ],
        },
        {
          phase: "The revamp",
          image: "desktop",
          imageAlt: "Alkaways full website and storefront on a laptop screen",
          imageLayout: "landscape",
          content: [
            "We built a landing page and storefront designed to convert visitors into orders from the first scroll.",
            "– Bold, appetite-driven design that communicates the brand's energy",
            "– Full menu storefront with add-to-cart functionality for easy ordering",
            "– SEO fundamentals: optimised metadata, page structure, and local search signals",
            "– Mobile-first build ensuring the experience is seamless on any screen size",
            "– Fast load times to match the fast food experience customers expect",
          ],
        },
        {
          phase: "Going live",
          image: "detail",
          imageAlt: "Close-up of the Alkaways menu and add-to-cart feature",
          imageLayout: "landscape",
          content: [
            "Alkaways launched with a site that works as hard as their kitchen does.",
            "– Customers can browse and order from the menu without leaving the site",
            "– Improved visibility in local search where purchase intent is highest",
            "– A brand presence online that matches what customers experience in person",
          ],
        },
      ],
      outcome:
        "Alkaways went from invisible online to a destination — with a storefront that turns browsers into buyers and an SEO foundation that keeps bringing new customers to the door, digitally and physically.",
      ctaLabel: "Visit Website",
      ctaUrl: "https://your-alkaways-url.com",
    },
  },

  // ─────────────────────────────────────────────
  // 4. ADELCHI — Graphic Design Flyer
  // ─────────────────────────────────────────────
  {
    slug: "adelchi",
    type: "graphic-design",
    client: "Adelchi",
    tagline: "Design that communicates before a word is read.",
    industry: "Graphic Design",
    location: "South Africa",
    goal: "Create a compelling promotional flyer that captures the brand and drives engagement.",
    techStack: ["Graphic Design", "Print & Digital"],
    graphicAssetUrl: "/images/adf.jpeg",
    images: {
      ourWork:        "/images/adf.jpeg",
      caseStudyHero:  "https://placehold.co/1024x576/18181b/ffffff?text=Adelchi+-+Design+Hero",
      mobile:         "https://placehold.co/390x844/18181b/ffffff?text=Adelchi+-+Flyer+on+Phone",
      desktop:        "https://placehold.co/1280x800/fafafa/18181b?text=Adelchi+-+Flyer+Full+View",
      detail:         "https://placehold.co/800x600/f4f4f5/18181b?text=Adelchi+-+Typography+Detail",
    },
    shortDescription: [
      "Good design doesn't just look good — it communicates. For Adelchi, we created a promotional flyer that leads with their brand identity and delivers the message before the reader has consciously decided to engage.",
      "The design balances visual hierarchy, typography, and colour to guide the eye naturally from headline to call-to-action — whether it's viewed on screen or printed.",
      "This project is a demonstration of our graphic design capability — proof that the same attention to detail we bring to code, we bring to every visual we create.",
    ],
    caseStudy: {
      headline: "Promotional design that earns attention and holds it.",
      metaStrip: {
        industry: "Graphic Design",
        location: "South Africa",
        goal: "Produce a promotional flyer that communicates the brand clearly",
        outcome: "A polished, print-and-digital-ready flyer",
        stack: "Graphic Design · Print · Digital",
      },
      sections: [
        {
          phase: "The brief",
          image: "mobile",
          imageAlt: "Adelchi flyer previewed on a mobile phone screen",
          imageLayout: "portrait",
          content: [
            "Adelchi needed a promotional piece that could do the talking — standing out in a crowded visual environment whether seen on social media or handed out in print.",
            "– Clear brand identity expression without visual clutter",
            "– Strong typographic hierarchy to guide the reader naturally",
            "– Versatile enough to work in both digital and print formats",
          ],
        },
        {
          phase: "Design approach",
          image: "desktop",
          imageAlt: "Full view of the Adelchi flyer design on a desktop screen",
          imageLayout: "landscape",
          content: [
            "We approached the flyer the same way we approach a UI — with structure, intention, and a clear user journey.",
            "– Visual hierarchy established through font weight, size, and placement",
            "– Colour palette chosen to reinforce brand personality and contrast ratio",
            "– Layout designed so the most important information is seen first",
            "– Delivered in both print-ready and web-optimised formats",
          ],
        },
        {
          phase: "The result",
          image: "detail",
          imageAlt: "Close-up of the Adelchi flyer typography and layout detail",
          imageLayout: "landscape",
          content: [
            "The final design is clean, on-brand, and built to perform in the wild.",
            "– Immediately communicates who Adelchi is and what they're offering",
            "– Visually consistent with modern design standards",
            "– Ready for both digital distribution and physical print",
          ],
        },
      ],
      outcome:
        "Adelchi received a promotional asset that represents their brand with confidence — designed with the same rigour we apply to every product we build, digital or physical.",
      ctaLabel: "View Design",
      ctaUrl: "/images/projects/adelchi/flyer.png",
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
