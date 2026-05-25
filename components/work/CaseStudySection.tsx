import Image from "next/image"
import type { CaseStudySection as CaseStudySectionType, Project } from "@/data/projects-data"

interface CaseStudySectionProps {
  project: Project
  section: CaseStudySectionType
  index: number
}

function SectionContent({ content }: { content: string[] }) {
  if (content.length === 0) return null

  const [lead, ...rest] = content
  const bulletItems = rest.filter((item) => item.startsWith("–"))
  const paragraphItems = rest.filter((item) => !item.startsWith("–"))

  return (
    <div className="space-y-4">
      <p className="text-lg font-medium leading-relaxed">{lead}</p>
      {bulletItems.length > 0 && (
        <ul className="space-y-2">
          {bulletItems.map((item) => (
            <li key={item} className="flex gap-3 text-[#0f2847]/75">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0a9cab]" aria-hidden />
              <span>{item.replace(/^–\s*/, "")}</span>
            </li>
          ))}
        </ul>
      )}
      {paragraphItems.map((item) => (
        <p key={item} className="text-[#0f2847]/75">
          {item}
        </p>
      ))}
    </div>
  )
}

function SectionImage({
  project,
  section,
}: {
  project: Project
  section: CaseStudySectionType
}) {
  const imageSrc = project.images[section.image]

  if (section.imageLayout === "portrait") {
    return (
      <div className="flex justify-center">
        <div className="relative aspect-[9/16] w-[220px] sm:w-[260px]">
          <Image
            src={imageSrc}
            alt={section.imageAlt}
            fill
            className="rounded-2xl object-cover shadow-sm"
            sizes="(max-width: 640px) 220px, 260px"
          />
        </div>
      </div>
    )
  }

  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl ${
        section.image === "detail" ? "aspect-[4/3]" : "aspect-video"
      }`}
    >
      <Image
        src={imageSrc}
        alt={section.imageAlt}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    </div>
  )
}

export default function CaseStudySection({ project, section, index }: CaseStudySectionProps) {
  const imageOnRight = index % 2 === 0

  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div
            className={`order-first lg:order-none ${imageOnRight ? "lg:order-2" : "lg:order-1"}`}
          >
            <SectionImage project={project} section={section} />
          </div>
          <div
            className={`order-last lg:order-none ${imageOnRight ? "lg:order-1" : "lg:order-2"}`}
          >
            <h3 className="text-xl font-semibold">{section.phase}</h3>
            <div className="mt-6">
              <SectionContent content={section.content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
