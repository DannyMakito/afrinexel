import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"
import Navbar from "@/components/navbar"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.afrinexel.co.za"),
  title: "Afrinexel - Web Development, Software Development & Digital Marketing",
  description:
    "Afrinexel builds conversion-focused websites, custom software, brand design, email marketing campaigns, automation, and digital growth systems for startups and established businesses.",
  generator: "v0.app",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/images/afrinexel-logo.jpeg", type: "image/jpeg", sizes: "any" }],
    shortcut: "/images/afrinexel-logo.jpeg",
    apple: "/images/afrinexel-logo.jpeg",
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${inter.variable} ${poppins.variable} antialiased`}>
        <Navbar />
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
