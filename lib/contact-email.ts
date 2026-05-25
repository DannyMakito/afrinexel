import type { ContactInquiryEmailProps } from "@/emails/contact-inquiry"

export function buildContactPlainText({
  name,
  email,
  phone,
  description,
}: ContactInquiryEmailProps): string {
  return [
    "New message from the Afrinexel contact form",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    "",
    "Project description:",
    description,
    "",
    "---",
    "Reply directly to this email to respond to the sender.",
    "https://www.afrinexel.co.za",
  ].join("\n")
}

export function buildReplyTo(name: string, email: string): string {
  const safeName = name.replace(/[<>"\n\r]/g, "").trim() || "Website visitor"
  return `${safeName} <${email}>`
}

export function buildContactSubject(name: string): string {
  return `Afrinexel website — message from ${name}`
}

/** Resend sandbox address — fine for testing, poor inbox placement in production. */
export function isResendSandboxFrom(fromEmail: string): boolean {
  return fromEmail.includes("@resend.dev")
}
