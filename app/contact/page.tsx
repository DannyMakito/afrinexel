import type { Metadata } from "next"
import ContactModal from "@/components/contact/ContactModal"

export const metadata: Metadata = {
  title: "Contact Us - Afrinexel",
  description:
    "Tell us about your project — we'll get right back to you to schedule a discovery call.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactModal />
    </main>
  )
}
