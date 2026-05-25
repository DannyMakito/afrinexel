import { Resend } from "resend"

export type ContactFormPayload = {
  name: string
  email: string
  phone?: string
  description: string
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

export async function sendContactEmail(payload: ContactFormPayload) {
  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.RESEND_FROM_EMAIL
  const to = process.env.CONTACT_TO_EMAIL ?? process.env.RESEND_TO_EMAIL

  if (!apiKey || !from || !to) {
    return {
      ok: false as const,
      status: 500,
      error: "Email service is not configured. Check RESEND_API_KEY, RESEND_FROM_EMAIL, and CONTACT_TO_EMAIL.",
    }
  }

  const { name, email, phone, description } = payload
  const resend = new Resend(apiKey)
  const phoneBlock = phone
    ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>`
    : ""

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject: `New contact from ${name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      ${phoneBlock}
      <p><strong>Project Description:</strong></p>
      <p>${escapeHtml(description).replace(/\n/g, "<br>")}</p>
    `,
  })

  if (error) {
    console.error("Resend error:", error)
    return {
      ok: false as const,
      status: 500,
      error: "Failed to send your message. Please try again shortly.",
    }
  }

  return { ok: true as const }
}
