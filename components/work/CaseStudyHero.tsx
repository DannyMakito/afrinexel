import Image from "next/image"
import type { Project } from "@/data/projects-data"

interface CaseStudyHeroProps {
  project: Project
}

export default function CaseStudyHero({ project }: CaseStudyHeroProps) {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[#0a9cab]">
          {project.client}
        </p>
        <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[0.95] tracking-tight">
          {project.caseStudy.headline}
        </h1>
        <div className="relative mt-10 aspect-video w-full overflow-hidden rounded-xl">
          <Image
            src={project.images.caseStudyHero}
            alt={`${project.client} case study hero`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1152px"
            priority
          />
        </div>
      </div>
    </section>
  )
}
