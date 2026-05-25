import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import {
  getAllProjectSlugs,
  getProjectBySlug,
} from "@/data/projects-data"
import CaseStudyHero from "@/components/work/CaseStudyHero"
import CaseStudyMetaStrip from "@/components/work/CaseStudyMetaStrip"
import CaseStudySection from "@/components/work/CaseStudySection"
import CaseStudyOutcome from "@/components/work/CaseStudyOutcome"
import WorkCTA from "@/components/work/WorkCTA"
import WorkPageShell from "@/components/work/WorkPageShell"

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return { title: "Project not found - Afrinexel" }
  }

  return {
    title: `${project.client} - Case Study | Afrinexel`,
    description: project.tagline,
  }
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <WorkPageShell>
      <main className="min-h-screen pt-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/work"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#0f2847]/60 transition-colors hover:text-[#0f2847]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            All work
          </Link>
        </div>

        <CaseStudyHero project={project} />
        <CaseStudyMetaStrip project={project} />

        {project.caseStudy.sections.map((section, index) => (
          <CaseStudySection
            key={section.phase}
            project={project}
            section={section}
            index={index}
          />
        ))}

        <CaseStudyOutcome outcome={project.caseStudy.outcome} />

        <WorkCTA
          heading="See it in action"
          description={`Explore the live ${project.type === "website" ? "site" : "design"} or start a conversation about your next project.`}
          primaryLabel={project.caseStudy.ctaLabel}
          primaryHref={project.caseStudy.ctaUrl}
          primaryExternal
          showSecondary
        />
      </main>
    </WorkPageShell>
  )
}
