"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { CurvyMobileMenu, MobileMenuToggle } from "@/components/curvy-mobile-menu"
import { primaryNavLinks } from "@/lib/nav-links"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  if (isHome && !scrolled) {
    return null
  }

  const contactHref = "/contact"

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50 transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/images/afrinexelbg.svg1.png"
                  alt="Afrinexel Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <span className="text-xl font-bold font-poppins text-foreground">Afrinexel</span>
              </Link>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {primaryNavLinks.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  whileHover={{ scale: 1.05 }}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.label}
                </motion.a>
              ))}
              <Button
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-medium px-6"
                asChild
              >
                <a href={contactHref}>lets build together</a>
              </Button>
            </div>

            <div className="md:hidden">
              <MobileMenuToggle
                alwaysVisible
                open={isOpen}
                onClick={() => setIsOpen((prev) => !prev)}
              />
            </div>
          </div>
        </div>
      </motion.nav>

      <CurvyMobileMenu
        alwaysVisible
        open={isOpen}
        onOpenChange={setIsOpen}
        links={primaryNavLinks}
        contactHref={contactHref}
      />
    </>
  )
}
