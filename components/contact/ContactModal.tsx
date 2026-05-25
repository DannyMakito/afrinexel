"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { X } from "lucide-react"

type FormState = {
  name: string
  email: string
  phone: string
  description: string
}

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  description: "",
}

const fieldLabelClass =
  "mb-2 block text-[10px] font-medium uppercase tracking-[0.18em] text-[#5c6b5c]"

const fieldInputClass =
  "h-12 w-full rounded-full border border-[#1a2e1a]/80 bg-transparent px-5 text-sm text-[#1a2e1a] placeholder:text-[#1a2e1a]/35 outline-none transition-shadow focus:ring-2 focus:ring-[#1a2e1a]/15"

export default function ContactModal() {
  const [formData, setFormData] = useState<FormState>(initialState)
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setMessage("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = (await res.json()) as { error?: string; success?: boolean }

      if (!res.ok) {
        setStatus("error")
        setMessage(data.error ?? "Something went wrong. Please try again.")
        return
      }

      setStatus("success")
      setMessage(
        "Thank you — we'll get right back to you to schedule your discovery call.",
      )
      setFormData(initialState)
    } catch {
      setStatus("error")
      setMessage("Unable to send right now. Please try again or email us directly.")
    }
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center px-4 py-24 sm:px-6">
      {/* Blurred background */}
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
          <h1
            id="contact-modal-title"
            className="font-serif text-[clamp(2rem,5vw,3.25rem)] leading-[1.1] tracking-tight text-[#1a2e1a]"
          >
            <span className="italic">Let&apos;s build</span> something amazing
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-[#5c6b5c] sm:text-base">
            Tell us a little bit about yourself and your project, and we&apos;ll get right back to
            you to schedule a discovery call.
          </p>
        </header>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className={fieldLabelClass}>
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                className={fieldInputClass}
              />
            </div>

            <div>
              <label htmlFor="email" className={fieldLabelClass}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
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
                required
                autoComplete="tel"
                value={formData.phone}
                onChange={handleChange}
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
                value={formData.description}
                onChange={handleChange}
                placeholder="What would you like us to build?"
                className="min-h-[120px] w-full resize-y rounded-[1.75rem] border border-[#1a2e1a]/80 bg-transparent px-5 py-4 text-sm text-[#1a2e1a] placeholder:text-[#1a2e1a]/35 outline-none transition-shadow focus:ring-2 focus:ring-[#1a2e1a]/15"
              />
            </div>
          </div>

          {message && (
            <p
              role="status"
              className={`mt-6 rounded-2xl px-4 py-3 text-center text-sm ${
                status === "success"
                  ? "bg-[#e8f0e8] text-[#1a2e1a]"
                  : "bg-red-50 text-red-800"
              }`}
            >
              {message}
            </p>
          )}

          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              disabled={status === "loading"}
              className="min-h-12 rounded-full bg-[#1a2e1a] px-8 text-sm font-medium text-[#fdfdf5] transition hover:bg-[#0f2847] disabled:opacity-60"
            >
              {status === "loading" ? "Sending..." : "Send message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
