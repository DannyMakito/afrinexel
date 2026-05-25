import Image from "next/image"
import Link from "next/link"
import type { Project } from "@/data/projects-data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface ProjectRowProps {
  project: Project
  index: number
}

export default function ProjectRow({ project, index }: ProjectRowProps) {
  const imageFirstOnDesktop = index % 2 === 0

  return (
    <article className="grid grid-cols-1 items-center gap-10 py-12 md:py-20 lg:grid-cols-2 lg:gap-16">
      <div
        className={`order-first lg:order-none ${imageFirstOnDesktop ? "lg:order-1" : "lg:order-2"}`}
      >
        <div className="relative aspect-video w-full overflow-hidden rounded-xl">
          <Image
            src={project.images.ourWork}
            alt={`${project.client} project preview`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>

      <div
        className={`order-last lg:order-none ${imageFirstOnDesktop ? "lg:order-2" : "lg:order-1"}`}
      >
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">{project.client}</h2>
        <p className="mt-2 text-lg font-medium text-[#0f2847]/75">{project.tagline}</p>
        <div className="mt-6 space-y-4 text-[#0f2847]/75">
          {project.shortDescription.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="border-[#0f2847]/15 bg-white/60 text-[#0f2847]"
            >
              {tech}
            </Badge>
          ))}
        </div>
        <div className="mt-8">
          {project.type === "website" ? (
            <Button
              asChild
              size="lg"
              className="min-h-11 rounded-full bg-[#0f2847] px-8 text-white hover:bg-[#14395f]"
            >
              <Link href={`/work/${project.slug}`}>Read Case Study</Link>
            </Button>
          ) : (
            <Button
              asChild
              size="lg"
              className="min-h-11 rounded-full bg-[#0f2847] px-8 text-white hover:bg-[#14395f]"
            >
              <a
                href={project.graphicAssetUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Design
              </a>
            </Button>
          )}
        </div>
      </div>
    </article>
  )
}
