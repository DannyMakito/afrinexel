import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import ServiceTimeline from "@/components/service-timeline"
import { getService, services } from "@/lib/services"

interface ServiceDetailPageProps {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)

  if (!service) {
    return {
      title: "Service not found - Afrinexel",
    }
  }

  return {
    title: `${service.title} - Afrinexel Services`,
    description: service.summary,
  }
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params
  const service = getService(slug)

  if (!service) {
    notFound()
  }

  const Icon = service.icon

  return (
    <main className="min-h-screen bg-[#faf9f5] text-[#061f2b]">
      <section
        className="relative min-h-svh overflow-hidden bg-[#061f2b] px-4 pb-20 pt-28 text-white sm:px-6 lg:px-8"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(6,31,43,0.96) 0%, rgba(6,31,43,0.82) 42%, rgba(6,31,43,0.15) 100%), url(${service.heroImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-auto flex min-h-[calc(100svh-7rem)] max-w-7xl flex-col justify-center">
          <Link
            href="/services"
            className="mb-14 inline-flex w-fit items-center gap-2 text-sm font-bold uppercase tracking-wider text-white/70 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            All services
          </Link>

          <div className="max-w-4xl">
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.28em]" style={{ color: service.accentColor }}>
              {service.eyebrow}
            </p>
            <h1 className="max-w-5xl text-[clamp(3.25rem,7.8vw,7.75rem)] font-bold leading-[0.92] tracking-[-0.05em]">
              {service.heroLead}{" "}
              <span className="font-serif italic tracking-normal text-white/90">{service.heroAccent}</span>
            </h1>
            <p className="mt-10 max-w-2xl text-xl leading-relaxed text-white/85">
              {service.heroBody}
            </p>
            <Button
              asChild
              className="mt-10 rounded-full px-7 py-6 text-[#061f2b] hover:opacity-90"
              style={{ backgroundColor: service.accentColor }}
            >
              <a href="mailto:info@afrinexel.co.za?subject=Service%20project%20request">
                Start a project
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8" style={{ backgroundColor: service.softColor }}>
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#0a9cab]">
              {service.problemEyebrow}
            </p>
            <div className="mb-8 h-px w-full bg-[#061f2b]/35" />
            <h2 className="text-[clamp(3rem,6vw,6.25rem)] font-bold leading-[0.95] tracking-[-0.05em]">
              {service.problemTitle}{" "}
              <span className="font-serif italic tracking-normal">{service.problemAccent}</span>
            </h2>
            <p className="mt-10 max-w-3xl text-2xl leading-snug text-[#061f2b]">
              {service.problemBody}
            </p>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#061f2b]/72">
              {service.problemSupport}
            </p>
          </div>

          <div
            className="min-h-[420px] rounded-[2rem] shadow-2xl shadow-[#061f2b]/15 lg:min-h-[560px]"
            style={{
              backgroundImage: `url(${service.messageImage})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            aria-label={`${service.title} visual`}
            role="img"
          />
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#c96442]">
                What is included
              </p>
              <h2 className="text-[clamp(3rem,6vw,6.25rem)] font-bold uppercase leading-[0.85] tracking-tight">
                Designed
                <br />
                for useful
                <br />
                execution
              </h2>
            </div>
            <p className="max-w-md text-lg leading-relaxed text-[#061f2b]/65">
              Every deliverable has a job: clarify the offer, remove friction, support campaigns, or
              make the business easier to operate.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {service.deliverables.map((item, index) => (
              <article
                className="min-h-[260px] rounded-3xl p-6 text-[#061f2b]"
                key={item.title}
                style={{ backgroundColor: index % 3 === 0 ? service.softColor : index % 3 === 1 ? "#ffffff" : "#dbeaf3" }}
              >
                <div className="mb-14 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#061f2b]/45">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Icon className="h-6 w-6 text-[#0a9cab]" />
                </div>
                <h3 className="mb-3 text-2xl font-bold">{item.title}</h3>
                <p className="leading-relaxed text-[#061f2b]/65">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ServiceTimeline steps={service.timeline} />

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] bg-[#061f2b] p-8 text-white md:grid-cols-[0.9fr_1.1fr] md:p-12">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em]" style={{ color: service.accentColor }}>
              Outcomes
            </p>
            <h2 className="text-[clamp(2.75rem,5vw,5.5rem)] font-bold uppercase leading-[0.86] tracking-tight">
              What you
              <br />
              leave with
            </h2>
          </div>
          <div className="space-y-5">
            {service.outcomes.map((outcome) => (
              <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5" key={outcome}>
                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0" style={{ color: service.accentColor }} />
                <p className="text-xl leading-relaxed text-white/82">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[2rem] p-8 md:flex-row md:items-center md:justify-between md:p-12" style={{ backgroundColor: service.accentColor }}>
          <div className="max-w-3xl text-[#061f2b]">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em]">
              Ready when you are
            </p>
            <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
              Let us build the system your growth needs next.
            </h2>
          </div>
          <Button asChild className="w-fit rounded-full bg-[#061f2b] px-7 py-6 text-white hover:bg-[#12394a]">
            <a href="mailto:info@afrinexel.co.za?subject=Start%20a%20service%20project">
              Talk to Afrinexel
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>
    </main>
  )
}
