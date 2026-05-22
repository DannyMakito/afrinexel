"use client"

import { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger, useGSAP)

interface ServiceTimelineProps {
  steps: Array<{
    title: string
    copy: string
  }>
}

export default function ServiceTimeline({ steps }: ServiceTimelineProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const section = sectionRef.current
      if (!section) return

      const progress = section.querySelector<HTMLElement>("[data-timeline-progress]")
      const items = Array.from(section.querySelectorAll<HTMLElement>("[data-timeline-item]"))

      if (progress) {
        gsap.fromTo(
          progress,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top 65%",
              end: "bottom 35%",
              scrub: true,
            },
          },
        )
      }

      items.forEach((item) => {
        gsap.fromTo(
          item,
          { autoAlpha: 0.35, x: 24 },
          {
            autoAlpha: 1,
            x: 0,
            duration: 0.45,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 78%",
              toggleActions: "play none none reverse",
            },
          },
        )
      })
    },
    { scope: sectionRef, dependencies: [steps.length] },
  )

  return (
    <section ref={sectionRef} className="bg-[#061f2b] px-4 py-24 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[#d8ff65]">
            How we work
          </p>
          <h2 className="text-[clamp(3rem,7vw,6.5rem)] font-bold uppercase leading-[0.85] tracking-tight">
            Built
            <br />
            around
            <br />
            momentum
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/70">
            We plug into the business problem, shape the right system, and move from strategy to
            production without turning every decision into a long detour.
          </p>
        </div>

        <div className="relative pl-12">
          <div className="absolute left-5 top-0 h-full w-px bg-white/15">
            <div
              data-timeline-progress
              className="h-full w-px origin-top bg-[#d8ff65]"
              style={{ transform: "scaleY(0)" }}
            />
          </div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <article data-timeline-item className="relative" key={step.title}>
                <div className="absolute -left-[3.2rem] top-0 flex h-12 w-12 items-center justify-center rounded-full border border-[#d8ff65] bg-[#061f2b] text-lg font-semibold text-white">
                  {index + 1}
                </div>
                <h3 className="mb-3 text-3xl font-bold tracking-tight">{step.title}</h3>
                <p className="max-w-2xl text-lg leading-relaxed text-white/62">{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
