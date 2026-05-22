import { Code2, LayoutTemplate, Mail, Palette, type LucideIcon } from "lucide-react"

export type ServiceSlug =
  | "web-design"
  | "software-development"
  | "email-marketing-campaigns"
  | "graphic-design"

export interface ServiceItem {
  slug: ServiceSlug
  title: string
  shortTitle: string
  eyebrow: string
  indexLabel: string
  summary: string
  heroLead: string
  heroAccent: string
  heroBody: string
  problemEyebrow: string
  problemTitle: string
  problemAccent: string
  problemBody: string
  problemSupport: string
  slideshowImage: string
  heroImage: string
  messageImage: string
  accentColor: string
  softColor: string
  icon: LucideIcon
  deliverables: Array<{
    title: string
    copy: string
  }>
  timeline: Array<{
    title: string
    copy: string
  }>
  outcomes: string[]
}

export const services: ServiceItem[] = [
  {
    slug: "web-design",
    title: "Web design and development",
    shortTitle: "Web design",
    eyebrow: "Web design services",
    indexLabel: "01",
    summary:
      "Websites, landing pages, web hosting, conversion journeys, and development systems built to turn visitors into qualified leads.",
    heroLead: "Websites that convert",
    heroAccent: "without the technical bottlenecks",
    heroBody:
      "Afrinexel designs, develops, hosts, and improves business websites that are fast, clear, search-friendly, and ready for campaigns.",
    problemEyebrow: "Every click counts",
    problemTitle: "No business wants a beautiful website",
    problemAccent: "that nobody uses",
    problemBody:
      "Slow pages, unclear messaging, weak mobile experiences, and disconnected landing pages quietly drain budget from every campaign.",
    problemSupport:
      "We build web experiences around the offer, the customer journey, and the next action you need visitors to take.",
    slideshowImage:
      "https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?q=80&w=2486&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2400&auto=format&fit=crop",
    messageImage:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1800&auto=format&fit=crop",
    accentColor: "#cfff5e",
    softColor: "#eaf7fb",
    icon: LayoutTemplate,
    deliverables: [
      {
        title: "Website design",
        copy: "Modern responsive pages shaped around your offer, brand, audience, and conversion goals.",
      },
      {
        title: "Web development",
        copy: "Next.js, React, CMS, ecommerce, forms, dashboards, integrations, and performance-focused frontends.",
      },
      {
        title: "Campaign landing pages",
        copy: "Focused pages for paid ads, product launches, lead magnets, events, and seasonal promotions.",
      },
      {
        title: "Web hosting and care",
        copy: "Deployment, hosting support, maintenance, uptime checks, content updates, and technical cleanup.",
      },
      {
        title: "SEO foundations",
        copy: "Metadata, structure, speed, schema-ready pages, and content paths that search engines can understand.",
      },
      {
        title: "Analytics and tracking",
        copy: "Conversion events, forms, funnels, and reporting setup so you know what is producing leads.",
      },
    ],
    timeline: [
      {
        title: "Strategy before screens",
        copy: "We clarify the offer, customer journey, site map, content needs, and conversion moments before design starts.",
      },
      {
        title: "Design that sells",
        copy: "Each section has a job: build trust, explain value, answer objections, or move the visitor to action.",
      },
      {
        title: "Built to scale",
        copy: "Your website is built for speed, mobile usage, search visibility, easy updates, and future campaign growth.",
      },
      {
        title: "Launch and improve",
        copy: "We test the experience, connect tracking, launch cleanly, and refine based on real visitor behavior.",
      },
    ],
    outcomes: [
      "A faster, clearer website experience",
      "Landing pages ready for paid and organic campaigns",
      "Hosting and maintenance support without the technical fog",
    ],
  },
  {
    slug: "software-development",
    title: "Software development",
    shortTitle: "Software development",
    eyebrow: "Software development services",
    indexLabel: "02",
    summary:
      "Custom platforms, dashboards, portals, automations, and internal systems that replace manual work with scalable digital operations.",
    heroLead: "Software that removes friction",
    heroAccent: "from the way your business works",
    heroBody:
      "We build practical software for teams that need better workflows, smarter customer experiences, and reliable systems that can grow.",
    problemEyebrow: "Operations need momentum",
    problemTitle: "Spreadsheets and manual admin",
    problemAccent: "do not scale",
    problemBody:
      "When teams rely on scattered tools and repetitive work, service slows down, data gets messy, and growth starts creating more pressure.",
    problemSupport:
      "Afrinexel turns repeated business processes into clean, usable software that gives your team time back.",
    slideshowImage:
      "https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?q=80&w=2487&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2400&auto=format&fit=crop",
    messageImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1800&auto=format&fit=crop",
    accentColor: "#65d6ff",
    softColor: "#eef4ff",
    icon: Code2,
    deliverables: [
      {
        title: "Custom web apps",
        copy: "Client portals, booking systems, admin panels, dashboards, and business platforms built around your workflow.",
      },
      {
        title: "Automation workflows",
        copy: "Automated approvals, notifications, reporting, customer handoffs, and repetitive task reduction.",
      },
      {
        title: "API integrations",
        copy: "Connect CRMs, payment tools, email platforms, databases, analytics, and third-party services.",
      },
      {
        title: "Internal tools",
        copy: "Lean operational tools that help teams manage work, customers, data, and decisions in one place.",
      },
      {
        title: "MVP development",
        copy: "Startup-ready product builds that validate fast without overbuilding features nobody needs yet.",
      },
      {
        title: "Maintenance and iteration",
        copy: "Technical support, feature improvements, bug fixes, and product evolution after launch.",
      },
    ],
    timeline: [
      {
        title: "Map the workflow",
        copy: "We document the process, users, data, permissions, integrations, and pain points before defining features.",
      },
      {
        title: "Prototype the core",
        copy: "We design the main user flows early so decisions happen before expensive development choices are locked in.",
      },
      {
        title: "Build in modules",
        copy: "Core features are built in usable releases, making it easier to test, learn, and expand without chaos.",
      },
      {
        title: "Support adoption",
        copy: "We help your team understand the system, gather feedback, and improve the software after real use.",
      },
    ],
    outcomes: [
      "Less manual work and fewer disconnected tools",
      "Custom systems that match your actual process",
      "A scalable product foundation for customers or internal teams",
    ],
  },
  {
    slug: "email-marketing-campaigns",
    title: "Email marketing campaigns",
    shortTitle: "Email marketing",
    eyebrow: "Email marketing services",
    indexLabel: "03",
    summary:
      "Branded email campaigns, lifecycle flows, newsletters, automations, and retention systems that keep your audience moving.",
    heroLead: "Email campaigns that deliver results",
    heroAccent: "without the production bottlenecks",
    heroBody:
      "Afrinexel plans, designs, builds, and improves email marketing campaigns that look on-brand, load fast, and convert.",
    problemEyebrow: "Every email counts",
    problemTitle: "No brand wants to be",
    problemAccent: "seen as spam",
    problemBody:
      "Generic templates, inconsistent visuals, poor segmentation, and rushed copy can damage trust before a customer even clicks.",
    problemSupport:
      "We create email systems that respect the inbox, support your sales journey, and make repeat communication feel useful.",
    slideshowImage:
      "https://images.unsplash.com/photo-1726066012698-bb7a3abce786?q=80&w=2487&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2400&auto=format&fit=crop",
    messageImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1800&auto=format&fit=crop",
    accentColor: "#d8ff65",
    softColor: "#f2f8e8",
    icon: Mail,
    deliverables: [
      {
        title: "Promotional campaigns",
        copy: "Launches, offers, announcements, and seasonal campaigns designed to drive clicks and conversions.",
      },
      {
        title: "Lifecycle automations",
        copy: "Welcome flows, onboarding, lead nurturing, abandoned cart, reactivation, and retention sequences.",
      },
      {
        title: "Newsletter systems",
        copy: "Repeatable newsletter layouts, content structure, audience segmentation, and publishing support.",
      },
      {
        title: "CRM-native builds",
        copy: "Email assets built for the tools your team already uses, from HTML-ready templates to CRM deployment support.",
      },
      {
        title: "Copy and design",
        copy: "Subject lines, email copy, branded layouts, mobile responsive design, and message hierarchy.",
      },
      {
        title: "Testing and optimization",
        copy: "A/B testing ideas, performance review, deliverability basics, and iteration based on campaign data.",
      },
    ],
    timeline: [
      {
        title: "Message strategy",
        copy: "We define the audience, goal, offer, timing, and desired action for every campaign or flow.",
      },
      {
        title: "Modular design",
        copy: "Reusable sections make it easier to create consistent campaigns without starting from scratch every time.",
      },
      {
        title: "Build and test",
        copy: "Emails are prepared for mobile, reviewed for clarity, and checked before they reach your audience.",
      },
      {
        title: "Measure and refine",
        copy: "We use opens, clicks, conversions, and behavior signals to improve the next send.",
      },
    ],
    outcomes: [
      "More consistent email production",
      "Better follow-up across leads and customers",
      "Campaigns that support revenue instead of adding noise",
    ],
  },
  {
    slug: "graphic-design",
    title: "Graphic design",
    shortTitle: "Graphic design",
    eyebrow: "Graphic design services",
    indexLabel: "04",
    summary:
      "Brand systems, campaign graphics, social assets, pitch decks, product visuals, and design support that make your business easier to trust.",
    heroLead: "Design that makes your offer",
    heroAccent: "feel clear, credible, and ready",
    heroBody:
      "We create practical visual systems and campaign assets that help your brand show up consistently across every digital touchpoint.",
    problemEyebrow: "Design shapes trust",
    problemTitle: "Inconsistent visuals make strong offers",
    problemAccent: "feel forgettable",
    problemBody:
      "When every post, deck, page, and campaign looks different, customers struggle to remember the brand and trust the message.",
    problemSupport:
      "Afrinexel builds design systems and creative assets that keep your marketing polished without slowing your team down.",
    slideshowImage:
      "https://images.unsplash.com/photo-1688733720228-4f7a18681c4f?q=80&w=2487&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2400&auto=format&fit=crop",
    messageImage:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1800&auto=format&fit=crop",
    accentColor: "#ffb36b",
    softColor: "#fff2e8",
    icon: Palette,
    deliverables: [
      {
        title: "Brand identity support",
        copy: "Logo refinement, visual direction, color, typography, brand rules, and practical usage guidance.",
      },
      {
        title: "Campaign assets",
        copy: "Ad creatives, social media graphics, launch visuals, banners, brochures, and promotion kits.",
      },
      {
        title: "Pitch decks",
        copy: "Investor decks, sales decks, company profiles, and proposal designs that sharpen your story.",
      },
      {
        title: "UI and product visuals",
        copy: "Interface graphics, product mockups, app visuals, website graphics, and design assets for digital products.",
      },
      {
        title: "Social content systems",
        copy: "Reusable templates and content formats that help your team publish faster without losing consistency.",
      },
      {
        title: "Design production",
        copy: "Ongoing design support for teams that need reliable creative output without hiring a full internal team.",
      },
    ],
    timeline: [
      {
        title: "Clarify the brand",
        copy: "We define the audience, tone, message, and visual direction before producing assets.",
      },
      {
        title: "Create a system",
        copy: "Instead of isolated graphics, we build reusable visual patterns your business can keep using.",
      },
      {
        title: "Produce the assets",
        copy: "We design the priority materials for your launch, campaign, product, or ongoing marketing need.",
      },
      {
        title: "Prepare for use",
        copy: "Files are exported, organized, and prepared for web, social, email, print, or sales workflows.",
      },
    ],
    outcomes: [
      "A more consistent and professional brand presence",
      "Campaign assets produced faster and with clearer direction",
      "Design systems your team can reuse across channels",
    ],
  },
]

export function getService(slug: string) {
  return services.find((service) => service.slug === slug)
}
