import {
  Building2,
  CheckCircle,
  Code,
  Flag,
  MapPin,
  type LucideIcon,
} from "lucide-react"
import type { Project } from "@/data/projects-data"

const metaFields: {
  key: keyof Project["caseStudy"]["metaStrip"]
  label: string
  icon: LucideIcon
}[] = [
  { key: "industry", label: "Industry", icon: Building2 },
  { key: "location", label: "Location", icon: MapPin },
  { key: "goal", label: "Goal", icon: Flag },
  { key: "outcome", label: "Outcome", icon: CheckCircle },
  { key: "stack", label: "Stack", icon: Code },
]

interface CaseStudyMetaStripProps {
  project: Project
}

export default function CaseStudyMetaStrip({ project }: CaseStudyMetaStripProps) {
  const { metaStrip } = project.caseStudy

  return (
    <section className="border-y border-[#0f2847]/10 py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {metaFields.map(({ key, label, icon: Icon }) => (
            <div key={key} className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-[#0a9cab]">
                <Icon className="h-4 w-4 shrink-0" aria-hidden />
                <span className="text-xs font-bold uppercase tracking-[0.2em]">{label}</span>
              </div>
              <p className="text-sm leading-snug text-[#0f2847]/85">{metaStrip[key]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
