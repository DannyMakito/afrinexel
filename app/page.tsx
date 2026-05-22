"use client"

import { useEffect } from "react"
import HeroSection from "@/components/hero-section"
import AgencyStoryScroll from "@/components/agency-story-scroll"
import Footer from "@/components/footer"

export default function HomePage() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => {
      link.addEventListener("click", handleSmoothScroll)
    })

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll)
      })
    }
  }, [])

  return (
    <main className="min-h-screen">
      <HeroSection />
      <AgencyStoryScroll />
      <Footer />
    </main>
  )
}
