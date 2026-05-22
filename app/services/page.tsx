import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import {
  HoverSlider,
  HoverSliderImage,
  HoverSliderImageWrap,
  TextStaggerHover,
} from "@/components/ui/animated-slideshow"
import { services } from "@/lib/services"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Services - Afrinexel Web Design, Software Development & Digital Marketing",
  description:
    "Explore Afrinexel services for web design, web development, custom software development, email marketing campaigns, and graphic design.",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#faf9f5] text-[#0f2847]">
      <section className="px-4 pb-12 pt-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-4xl">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[#0a9cab]">
                Afrinexel services
              </p>
              <h1 className="text-[clamp(3rem,8vw,8rem)] font-bold uppercase leading-[0.85] tracking-tight">
                Digital work
                <br />
                built to move
                <br />
                the business
              </h1>
            </div>
            <p className="max-w-md text-lg leading-relaxed text-[#0f2847]/75">
              Web design, software development, email marketing, and graphic design shaped into systems that
              reduce friction, improve clarity, and support scalable digital growth.
            </p>
          </div>
        </div>
      </section>

      <HoverSlider className="bg-[#faf9f5] px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-14">
          <div>
            <p className="mb-8 text-xs font-bold uppercase tracking-[0.24em] text-[#c96442]">
              / choose a service
            </p>
            <div className="flex flex-col space-y-2 md:space-y-3">
              {services.map((service, index) => (
                <Link href={`/services/${service.slug}`} key={service.slug} className="group w-fit">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-[#0f2847]/45">
                    {service.indexLabel}
                  </span>
                  <TextStaggerHover
                    index={index}
                    className="cursor-pointer text-[clamp(1.5rem,3.2vw,3.25rem)] font-bold uppercase leading-[0.92] tracking-tighter"
                    text={service.shortTitle}
                  />
                </Link>
              ))}
            </div>
          </div>

          <HoverSliderImageWrap className="mx-auto aspect-[4/3] w-full max-w-md min-h-0 max-h-[280px] rounded-[1.5rem] bg-[#dbeaf3] shadow-xl shadow-[#0f2847]/10 md:max-h-[340px] lg:max-w-lg lg:justify-self-end">
            {services.map((service, index) => (
              <div key={service.slug}>
                <HoverSliderImage
                  index={index}
                  imageUrl={service.slideshowImage}
                  src={service.slideshowImage}
                  alt={service.title}
                  className="size-full object-cover"
                  loading="eager"
                  decoding="async"
                />
              </div>
            ))}
          </HoverSliderImageWrap>
        </div>
      </HoverSlider>

      <section className="bg-[#061f2b] px-4 py-24 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div>
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.24em] text-[#d8ff65]">
              One connected team
            </p>
            <h2 className="text-[clamp(1.75rem,4vw,3.5rem)] font-bold uppercase leading-[0.9] tracking-tight">
              Strategy,
              <br />
              creative,
              <br />
              code,
              <br />
              campaigns.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Link
                  href={`/services/${service.slug}`}
                  key={service.slug}
                  className="group rounded-3xl border border-white/12 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/10"
                >
                  <Icon className="mb-8 h-8 w-8 text-[#d8ff65]" />
                  <h3 className="mb-3 text-2xl font-bold">{service.title}</h3>
                  <p className="mb-8 text-sm leading-relaxed text-white/65">{service.summary}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#d8ff65]">
                    Explore service
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[2rem] bg-[#dbeaf3] p-8 text-[#0f2847] md:flex-row md:items-center md:justify-between md:p-12">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#0a9cab]">
              Not sure where to start?
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              Tell us what is slowing your digital growth down.
            </h2>
          </div>
          <Button asChild className="w-fit rounded-full bg-[#0f2847] px-7 py-6 text-white hover:bg-[#14395f]">
            <a href="mailto:info@afrinexel.co.za?subject=Service%20consultation">
              Start a consultation
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>
    </main>
  )
}
