"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { SplitText } from "gsap/SplitText"
import { useGSAP } from "@gsap/react"
import { X } from "lucide-react"
import type { NavLinkItem } from "@/lib/nav-links"

gsap.registerPlugin(SplitText, useGSAP)

interface CurvyMobileMenuProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  links: NavLinkItem[]
  contactHref?: string
  contactLabel?: string
  className?: string
  alwaysVisible?: boolean
}

export function MobileMenuToggle({
  open,
  onClick,
  className = "",
  alwaysVisible = false,
}: {
  open: boolean
  onClick: () => void
  className?: string
  alwaysVisible?: boolean
}) {
  return (
    <button
      type="button"
      className={`tl-menu-toggle ${alwaysVisible ? "tl-menu-toggle--visible" : ""} ${open ? "active" : ""} ${className}`.trim()}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      onClick={onClick}
    >
      <span />
      <span />
      <span />
    </button>
  )
}

export function CurvyMobileMenu({
  open,
  onOpenChange,
  links,
  contactHref = "/contact",
  contactLabel = "Start a project",
  className = "",
  alwaysVisible = false,
}: CurvyMobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null)
  const menuPathRef = useRef<SVGPathElement>(null)
  const menuTimelineRef = useRef<gsap.core.Timeline | null>(null)

  useGSAP(
    () => {
      const mobileMenu = menuRef.current
      const menuPath = menuPathRef.current
      if (!mobileMenu || !menuPath) return

      const splitTargets = mobileMenu.querySelectorAll("[data-split]")
      const splits = [...splitTargets].map((target) =>
        SplitText.create(target, { type: "lines", linesClass: "tl-line" }),
      )
      const lineSpans = mobileMenu.querySelectorAll(".tl-line")

      lineSpans.forEach((line) => {
        const span = document.createElement("span")
        span.textContent = line.textContent
        line.textContent = ""
        line.appendChild(span)
      })

      gsap.set(mobileMenu.querySelectorAll(".tl-line span"), { y: "125%" })
      gsap.set(mobileMenu, { x: "100%", pointerEvents: "none" })
      gsap.set(mobileMenu.querySelector(".tl-mobile-menu-footer"), { autoAlpha: 0, y: 20 })
      gsap.set(mobileMenu.querySelectorAll(".tl-mobile-menu-links a"), { y: 20, opacity: 0 })

      const menuTl = gsap.timeline({ paused: true, defaults: { ease: "power3.inOut" } })
      menuTl
        .to(
          mobileMenu,
          {
            x: "0%",
            duration: 0.8,
            ease: "power3.inOut",
            onStart: () => {
              gsap.set(mobileMenu, { pointerEvents: "auto" })
            },
          },
          0,
        )
        .to(
          menuPath,
          {
            attr: { d: "M100 0 L0 0 Q-50 50 0 100 L100 100 Z" },
            duration: 0.4,
            ease: "power2.in",
          },
          0,
        )
        .to(
          menuPath,
          {
            attr: { d: "M100 0 L0 0 Q0 50 0 100 L100 100 Z" },
            duration: 0.4,
            ease: "power2.out",
          },
          0.4,
        )
        .to(
          mobileMenu.querySelectorAll(".tl-mobile-menu-links a"),
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "power3.out",
          },
          0.4,
        )
        .to(
          mobileMenu.querySelectorAll(".tl-line span"),
          { y: "0%", duration: 0.5, stagger: 0.1, ease: "power4.out" },
          0.45,
        )
        .to(
          mobileMenu.querySelector(".tl-mobile-menu-footer"),
          { autoAlpha: 1, y: 0, duration: 0.5, ease: "power3.out" },
          0.6,
        )
        .eventCallback("onReverseComplete", () => {
          gsap.set(mobileMenu, { pointerEvents: "none" })
        })

      menuTimelineRef.current = menuTl

      return () => {
        menuTimelineRef.current = null
        splits.forEach((split) => split.revert())
      }
    },
    { scope: menuRef },
  )

  useEffect(() => {
    const timeline = menuTimelineRef.current
    if (!timeline) return

    if (open) {
      timeline.play()
      document.body.style.overflow = "hidden"
    } else {
      timeline.reverse()
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const closeMenu = () => onOpenChange(false)

  return (
    <div
      className={`tl-mobile-menu ${alwaysVisible ? "tl-mobile-menu--visible" : ""} ${className}`.trim()}
      ref={menuRef}
    >
      <svg className="tl-mobile-menu-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <path
          ref={menuPathRef}
          className="tl-mobile-menu-path"
          d="M100 0 L100 0 Q100 50 100 100 L100 100 Z"
          fill="#0f2847"
        />
      </svg>

      <div className="tl-mobile-menu-inner">
        <button
          type="button"
          className="tl-mobile-menu-close"
          aria-label="Close menu"
          onClick={closeMenu}
        >
          <X size={28} strokeWidth={2} />
        </button>

        <div className="tl-mobile-menu-links">
          {links.map((link) => (
            <a href={link.href} data-split key={link.label} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="tl-mobile-menu-footer">
          <div className="tl-footer-col">
            <p data-split>software studio</p>
            <p data-split>operating since 2026</p>
          </div>
          <div className="tl-footer-col">
            <a href="mailto:info@afrinexel.co.za" data-split>
              Email
            </a>
            <a href={contactHref} data-split onClick={closeMenu}>
              {contactLabel}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
