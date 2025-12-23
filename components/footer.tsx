"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const footerLinks = {
  "Quick Links": ["Home", "Services", "Portfolio", "Blog", "Contact"],
  Services: ["Web Development", "Mobile Apps", "Cloud Solutions", "UI/UX Design", "AI & Automation"]
  
}

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <footer className="bg-background border-t border-border relative overflow-hidden" ref={ref}>
      {/* Background spotlight effect */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Logo and tagline */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Image
              src="/images/afrinexelbg.svg1.png"
              alt="Afrinexel Logo"
              width={40}
              height={40}
              className="object-contain"
            />
              <span className="text-xl font-bold font-poppins text-foreground">Afrinexel</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Building digital solutions that drive growth and transform businesses through innovative technology.
            </p>
          </div>

          {/* Footer links */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h4 className="text-lg font-semibold font-poppins text-foreground mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href={title === "Quick Links" ? `#${link.toLowerCase()}` : "#"}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-border mt-12 pt-8 text-center"
        >
          <p className="text-muted-foreground">© 2024 Afrinexel . All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
