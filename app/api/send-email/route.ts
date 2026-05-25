import { NextResponse } from "next/server"
import { sendContactEmail } from "@/lib/send-contact-email"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const name = typeof body.name === "string" ? body.name.trim() : ""
    const email = typeof body.email === "string" ? body.email.trim() : ""
    const phone = typeof body.phone === "string" ? body.phone.trim() : ""
    const description =
      typeof body.description === "string" ? body.description.trim() : ""

    if (!name || !email || !description) {
      return NextResponse.json(
        { error: "Name, email, and project description are required." },
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

    const result = await sendContactEmail({
      name,
      email,
      phone: phone || undefined,
      description,
    })

    if (!result.ok) {
      return NextResponse.json({ error: result.error }, { status: result.status })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("send-email error:", err)
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    )
  }
}
