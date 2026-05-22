"use client"

import { ArrowRight } from "lucide-react"
import FlowArt, { FlowSection } from "@/components/ui/story-scroll"

const capabilityRows = [
  {
    title: "Web development",
    copy: "Conversion-focused websites, landing pages, ecommerce builds, and web apps that load fast and make the next step obvious.",
  },
  {
    title: "Software development",
    copy: "Custom platforms, dashboards, portals, automations, and internal tools built around the way your business actually works.",
  },
  {
    title: "Brand and graphic design",
    copy: "Visual systems, campaign assets, pitch decks, social graphics, and product interfaces that make your offer easier to trust.",
  },
  {
    title: "Email marketing campaigns",
    copy: "Lifecycle flows, newsletters, lead nurture sequences, and retention campaigns that turn attention into repeat revenue.",
  },
  {
    title: "Digital marketing systems",
    copy: "SEO structure, analytics, funnel strategy, CRM handoffs, and content paths that show what is working and what is wasting budget.",
  },
  {
    title: "AI and automation",
    copy: "Smart workflows that remove manual admin, speed up operations, and help teams serve more customers without adding complexity.",
  },
]

const processSteps = [
  {
    title: "01 — Diagnose",
    copy: "We find the real bottleneck: unclear offer, slow site, weak funnel, broken process, or campaigns that attract the wrong leads.",
  },
  {
    title: "02 — Design",
    copy: "We shape the customer journey, brand message, technical architecture, and conversion path before writing unnecessary code.",
  },
  {
    title: "03 — Build",
    copy: "We create the website, software, creative assets, automations, and campaign flows as one connected growth system.",
  },
  {
    title: "04 — Launch",
    copy: "We ship clean, test the experience, connect analytics, and make sure your team can use what has been built.",
  },
  {
    title: "05 — Improve",
    copy: "We use real data to refine pages, products, campaigns, and workflows so growth keeps compounding after launch.",
  },
]

const outcomes = [
  {
    metric: "Less waste",
    copy: "No bloated builds, vague strategy decks, or scattered tools that never become revenue.",
  },
  {
    metric: "More clarity",
    copy: "Your customers understand what you offer, why it matters, and what to do next.",
  },
  {
    metric: "Better systems",
    copy: "Marketing, design, software, and operations work together instead of pulling in different directions.",
  },
]

const headlineClass =
  "text-[clamp(3.5rem,12vw,14rem)] font-bold uppercase leading-[0.85] tracking-tight lg:text-[clamp(3.5rem,8.8vw,10.75rem)]"

function Divider({ light = false }: { light?: boolean }) {
  return <hr className={light ? "my-[2vw] border-none border-t border-white/50" : "my-[2vw] border-none border-t border-black/60"} />
}

function FeatureGrid({
  items,
  light = false,
}: {
  items: Array<{ title: string; copy: string }>
  light?: boolean
}) {
  return (
    <div className="grid grid-cols-1 gap-[3vw] md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div className="min-w-[180px]" key={item.title}>
          <p className="mb-2 text-sm font-bold uppercase tracking-wider">{item.title}</p>
          <p className={`text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed ${light ? "text-white/75" : "opacity-75"}`}>
            {item.copy}
          </p>
        </div>
      ))}
    </div>
  )
}

export default function AgencyStoryScroll() {
  return (
    <FlowArt aria-label="Afrinexel digital growth story" className="font-poppins">
      <FlowSection
        desktopHold
        id="services"
        aria-label="Digital growth pain points"
        innerClassName="max-md:justify-start"
        style={{ backgroundColor: "#dbeaf3", color: "#0f2847" }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em]">01 — The problem</p>
        <Divider />
        <div>
          <h1 className={headlineClass}>
            Growth
            <br />
            Shouldn&apos;t
            <br />
            Feel
            <br />
            Random
          </h1>
        </div>
        <Divider />
        <p className="max-w-[58ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed max-md:mt-[14vh] md:mt-auto">
          Most businesses do not need more noise. They need a digital partner that can connect the website,
          software, design, automation, and marketing into one clear growth engine.
        </p>
      </FlowSection>

      <FlowSection
        desktopHold
        aria-label="Afrinexel services"
        style={{ backgroundColor: "#0f2847", color: "#fff" }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em]">02 — What we build</p>
        <Divider light />
        <div>
          <h2 className={headlineClass}>
            Web.
            <br />
            Software.
            <br />
            Brand.
            <br />
            Campaigns.
          </h2>
        </div>
        <Divider light />
        <p className="max-w-[58ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
          Afrinexel builds digital products and marketing systems for startups and established businesses that
          want practical execution, measurable outcomes, and fewer moving parts.
        </p>
        <Divider light />
        <FeatureGrid items={capabilityRows} light />
      </FlowSection>

      <FlowSection
        desktopHold
        aria-label="Afrinexel process"
        style={{ backgroundColor: "#f5f0e8", color: "#0f2847" }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em]">03 — How we work</p>
        <Divider />
        <div>
          <h2 className={headlineClass}>
            Cut
            <br />
            The
            <br />
            Fluff.
            <br />
            Scale
            <br />
            The
            <br />
            System.
          </h2>
        </div>
        <Divider />
        <p className="max-w-[58ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
          We do not start with trends. We start with the business problem, the customer journey, and the
          fastest path to a solution your team can actually use.
        </p>
        <Divider />
        <FeatureGrid items={processSteps} />
      </FlowSection>

      <FlowSection
        desktopHold
        aria-label="Business growth outcomes"
        style={{ backgroundColor: "#1a3de8", color: "#fff" }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em]">04 — Why it matters</p>
        <Divider light />
        <div>
          <h2 className={headlineClass}>
            Turn
            <br />
            Attention
            <br />
            Into
            <br />
            Pipeline
          </h2>
        </div>
        <Divider light />
        <p className="max-w-[60ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
          A good digital presence should do more than look polished. It should explain your value, capture
          qualified leads, automate follow-up, support sales, and give your team room to grow.
        </p>
        <Divider light />
        <FeatureGrid items={outcomes.map((item) => ({ title: item.metric, copy: item.copy }))} light />
        <Divider light />
        <p className="ml-auto max-w-[58ch] text-right text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
          Whether you are launching a startup or modernizing an established business, the goal is the same:
          digital growth that is clear, scalable, and built around real customers.
        </p>
      </FlowSection>

      <FlowSection
        desktopHold
        id="contact"
        aria-label="Start a project with Afrinexel"
        style={{ backgroundColor: "#05070b", color: "#fff" }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em]">05 — Start here</p>
        <Divider light />
        <div>
          <h2 className={headlineClass}>
            Ready
            <br />
            For
            <br />
            Digital
            <br />
            Growth
            <br />
            That
            <br />
            Works?
          </h2>
        </div>
        <Divider light />
        <div className="mt-auto flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <p className="max-w-[58ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
            Tell us what is slowing the business down. We will help you shape the right website, software,
            design, automation, or marketing system to move it forward.
          </p>
          <a
            href="mailto:info@afrinexel.co.za?subject=Start%20a%20digital%20growth%20project"
            className="inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-bold uppercase tracking-wider text-[#0f2847] transition hover:bg-[#dbeaf3]"
          >
            Start a project
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </FlowSection>
    </FlowArt>
  )
}
