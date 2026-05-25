import type { Metadata } from "next"
import { projects } from "@/data/projects-data"
import ProjectRow from "@/components/work/ProjectRow"
import WorkCTA from "@/components/work/WorkCTA"
import WorkPageShell from "@/components/work/WorkPageShell"

export const metadata: Metadata = {
  title: "Our Work - Afrinexel",
  description:
    "Explore websites, platforms, and design work from Afrinexel — built with craft, clarity, and performance in mind.",
}

export default function WorkPage() {
  return (
    <WorkPageShell>
      <main className="min-h-screen pt-28">
        <section className="px-4 pb-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[#0a9cab]">
                  Afrinexel portfolio
                </p>
                <h1 className="text-[clamp(3rem,8vw,6rem)] font-bold uppercase leading-[0.85] tracking-tight">
                  Our Work
                </h1>
              </div>
              <p className="max-w-md text-lg leading-relaxed text-[#0f2847]/75">
                We design and build digital products that feel intentional — from brand-forward
                websites and storefronts to learning platforms and graphic design. Every project
                starts with understanding the business, then shaping an experience that earns trust
                and drives results.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 pb-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl divide-y divide-[#0f2847]/10">
            {projects.map((project, index) => (
              <ProjectRow key={project.slug} project={project} index={index} />
            ))}
          </div>
        </section>

        <WorkCTA />
      </main>
    </WorkPageShell>
  )
}
