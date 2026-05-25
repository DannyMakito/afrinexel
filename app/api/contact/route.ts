import { render } from "@react-email/render"
import { NextResponse } from "next/server"
import { Resend } from "resend"
import ContactInquiryEmail from "@/emails/contact-inquiry"
import { getResendConfig, isResendConfigured } from "@/lib/env"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const name = typeof body.name === "string" ? body.name.trim() : ""
    const email = typeof body.email === "string" ? body.email.trim() : ""
    const phone = typeof body.phone === "string" ? body.phone.trim() : ""
    const description =
      typeof body.description === "string" ? body.description.trim() : ""

    if (!name || !email || !phone || !description) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 },
      )
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      )
    }

    if (!isResendConfigured()) {
      return NextResponse.json(
        {
          error:
            "Email service is not configured yet. Add RESEND_API_KEY to your environment variables.",
        },
        { status: 503 },
      )
    }

    const { apiKey, fromEmail, toEmail } = getResendConfig()
    const resend = new Resend(apiKey)

    const html = await render(
      ContactInquiryEmail({ name, email, phone, description }),
    )

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New project inquiry from ${name}`,
      html,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json(
        { error: "Failed to send your message. Please try again shortly." },
        { status: 500 },
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Contact API error:", err)
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    )
  }
}
