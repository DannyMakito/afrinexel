"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { X } from "lucide-react"

const fieldLabelClass =
  "mb-2 block text-[10px] font-medium uppercase tracking-[0.18em] text-[#5c6b5c]"

const fieldInputClass =
  "h-12 w-full rounded-full border border-[#1a2e1a]/80 bg-transparent px-5 text-sm text-[#1a2e1a] placeholder:text-[#1a2e1a]/35 outline-none transition-shadow focus:ring-2 focus:ring-[#1a2e1a]/15"

export default function ContactModal() {
  const form = useRef<HTMLFormElement>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.current) return

    setIsSubmitting(true)
    setErrorMessage("")

    try {
      const formData = new FormData(form.current)
      const data = Object.fromEntries(formData.entries())

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const result = (await response.json()) as { error?: string }
        throw new Error(result.error ?? "Failed to send email")
      }

      setIsSubmitted(true)
      form.current.reset()
    } catch (error) {
      console.error("FAILED...", error)
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Failed to send request. Please try again later.",
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center px-4 py-24 sm:px-6">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <Image
          src="/images/contact-hero.png"
          alt=""
          fill
          className="scale-110 object-cover object-center opacity-60 blur-2xl"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-[#061f2b]/75 backdrop-blur-md" />
        <div className="absolute top-1/4 left-1/4 h-80 w-80 rounded-full bg-[#0a9cab]/20 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full bg-[#c96442]/15 blur-3xl" />
      </div>

      <Link
        href="/"
        className="fixed top-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/5 text-white backdrop-blur-sm transition hover:bg-white/15"
        aria-label="Close and return home"
      >
        <X className="h-5 w-5" strokeWidth={1.5} />
      </Link>

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        className="relative z-10 w-full max-w-3xl rounded-[2rem] bg-[#fdfdf5] px-8 py-10 shadow-2xl sm:px-12 sm:py-14 md:rounded-[2.5rem]"
      >
        <header className="mb-10 text-center">
          <span className="mb-4 inline-block rounded-full bg-[#0a9cab]/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-[#0a9cab]">
            Get started
          </span>
          <h1
            id="contact-modal-title"
            className="font-serif text-[clamp(2rem,5vw,3.25rem)] leading-[1.1] tracking-tight text-[#1a2e1a]"
          >
            Let&apos;s build something{" "}
            <span className="font-normal italic text-[#1a2e1a]/60">amazing</span>
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-[#5c6b5c] sm:text-base">
            Tell us a little bit about yourself and your project, and we&apos;ll get right back to
            you to schedule a discovery call.
          </p>
        </header>

        {isSubmitted ? (
          <div className="rounded-2xl border border-[#1a2e1a]/10 bg-[#e8f0e8] p-10 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="mb-3 text-2xl font-bold text-[#1a2e1a]">Thank you!</h2>
            <p className="text-base text-[#5c6b5c]">
              Your request has been received. Our team will reach out to the email provided to
              schedule your discovery call.
            </p>
            <Link
              href="/"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[#1a2e1a] px-8 text-sm font-semibold text-[#fdfdf5] transition hover:bg-[#0f2847]"
            >
              Close
            </Link>
          </div>
        ) : (
          <form ref={form} onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={fieldLabelClass}>
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="John Doe"
                  className={fieldInputClass}
                />
              </div>

              <div>
                <label htmlFor="email" className={fieldLabelClass}>
                  Business email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="john@yourcompany.com"
                  className={fieldInputClass}
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="phone" className={fieldLabelClass}>
                  Phone number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+27 ..."
                  className={fieldInputClass}
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="description" className={fieldLabelClass}>
                  Project description
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  rows={4}
                  placeholder="Tell us about what you want to build, the problems you are trying to solve, and any specific requirements..."
                  className="min-h-[120px] w-full resize-none rounded-[1.75rem] border border-[#1a2e1a]/80 bg-transparent px-5 py-4 text-sm text-[#1a2e1a] placeholder:text-[#1a2e1a]/35 outline-none transition-shadow focus:ring-2 focus:ring-[#1a2e1a]/15"
                />
              </div>
            </div>

            {errorMessage && (
              <p role="alert" className="mt-6 rounded-2xl bg-red-50 px-4 py-3 text-center text-sm text-red-800">
                {errorMessage}
              </p>
            )}

            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="min-h-12 w-full rounded-full bg-[#1a2e1a] px-8 text-sm font-bold text-[#fdfdf5] transition hover:bg-[#0f2847] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {isSubmitting ? "Submitting..." : "Submit request"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
