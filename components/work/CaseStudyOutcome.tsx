interface CaseStudyOutcomeProps {
  outcome: string
}

export default function CaseStudyOutcome({ outcome }: CaseStudyOutcomeProps) {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <blockquote className="rounded-r-xl border-l-4 border-[#0a9cab] bg-[#dbeaf3] px-6 py-8 text-lg leading-relaxed text-[#0f2847]/90 md:px-10 md:py-10">
          {outcome}
        </blockquote>
      </div>
    </section>
  )
}
