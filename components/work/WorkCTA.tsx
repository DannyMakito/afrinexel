import Link from "next/link"
import { Button } from "@/components/ui/button"

interface WorkCTAProps {
  heading?: string
  description?: string
  primaryLabel?: string
  primaryHref?: string
  primaryExternal?: boolean
  showSecondary?: boolean
}

export default function WorkCTA({
  heading = "Ready to build something worth showing?",
  description = "Tell us about your product, brand, or platform — we'll shape the right approach together.",
  primaryLabel = "Let's Work Together",
  primaryHref = "/contact",
  primaryExternal = false,
  showSecondary = false,
}: WorkCTAProps) {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div
        className={`mx-auto max-w-6xl rounded-[2rem] bg-[#dbeaf3] p-8 text-[#0f2847] md:p-12 ${
          showSecondary
            ? "flex flex-col items-center gap-8 text-center"
            : "flex flex-col gap-8 md:flex-row md:items-center md:justify-between"
        }`}
      >
        <div className={showSecondary ? "max-w-2xl" : "max-w-2xl"}>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#0a9cab]">
            Get in touch
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{heading}</h2>
          {description && (
            <p className="mt-4 text-lg leading-relaxed text-[#0f2847]/75">{description}</p>
          )}
        </div>
        <div
          className={`flex shrink-0 gap-4 ${
            showSecondary ? "flex-col sm:flex-row" : "flex-col sm:flex-row"
          }`}
        >
          <Button
            asChild
            size="lg"
            className="min-h-11 w-fit rounded-full bg-[#0f2847] px-7 text-white hover:bg-[#14395f]"
          >
            {primaryExternal ? (
              <a href={primaryHref} target="_blank" rel="noopener noreferrer">
                {primaryLabel}
              </a>
            ) : (
              <Link href={primaryHref}>{primaryLabel}</Link>
            )}
          </Button>
          {showSecondary && (
            <Button
              asChild
              variant="outline"
              size="lg"
              className="min-h-11 w-fit rounded-full border-[#0f2847]/20 bg-white/60 px-7 text-[#0f2847] hover:bg-white"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
