"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { Flip } from "gsap/Flip"
import { SplitText } from "gsap/SplitText"
import { useGSAP } from "@gsap/react"
import { CurvyMobileMenu, MobileMenuToggle } from "@/components/curvy-mobile-menu"
import { heroNavLinks } from "@/lib/nav-links"

gsap.registerPlugin(Flip, SplitText, useGSAP)

const projectImages = [
  { src: "/timeline/Screenshot 2026-05-06 205826.png", alt: "Project interface 1" },
  { src: "/timeline/draw.png", alt: "Project interface 2" },
  { src: "/timeline/med.png", alt: "Project interface 3" },
  { src: "/timeline/sidebar menu.png", alt: "Project interface 4" },
  { src: "/timeline/Screenshot (180).png", alt: "Project interface 5" },
  { src: "/timeline/Screenshot (196).png", alt: "Project interface 6" },
  { src: "/timeline/Screenshot 2026-03-28 221916.png", alt: "Project interface 7" },
  { src: "/timeline/Screenshot 2026-04-01 001446.png", alt: "Project interface 8" },
  { src: "/timeline/Screenshot 2026-04-07 012118.png", alt: "Project interface 9" },
  { src: "/timeline/Screenshot 2026-04-08 092146.png", alt: "Project interface 10" },
  { src: "/timeline/Screenshot 2026-05-06 083112.png", alt: "Project interface 11" },
  { src: "/timeline/Screenshot 2026-05-06 104122.png", alt: "Project interface 12" },
  { src: "/timeline/Screenshot 2026-05-06 112735.png", alt: "Project interface 13" },
  { src: "/timeline/Screenshot 2026-05-06 114438.png", alt: "Project interface 14" },
  { src: "/timeline/Screenshot 2026-05-06 205800.png", alt: "Project interface 15" },
  { src: "/timeline/gun.png", alt: "Project interface 16" },
]

function CounterDigits() {
  return (
    <div className="tl-counter" aria-hidden="true">
      <div className="tl-counter-1 tl-digit">
        <div className="tl-num">0</div>
        <div className="tl-num tl-num-offset-1">1</div>
      </div>
      <div className="tl-counter-2 tl-digit">
        {Array.from({ length: 10 }, (_, index) => (
          <div className={index === 1 ? "tl-num tl-num-offset-2" : "tl-num"} key={index}>
            {index}
          </div>
        ))}
      </div>
      <div className="tl-counter-3 tl-digit">
        {Array.from({ length: 31 }, (_, index) => (
          <div className="tl-num" key={index}>
            {index === 30 ? 0 : index % 10}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useGSAP(
    () => {
      const hero = heroRef.current
      if (!hero) return

      const splitTargets = hero.querySelectorAll("[data-split]")
      const splits = [...splitTargets].map((target) =>
        SplitText.create(target, { type: "lines", linesClass: "tl-line" }),
      )
      const lineSpans = hero.querySelectorAll(".tl-line")

      lineSpans.forEach((line) => {
        const span = document.createElement("span")
        span.textContent = line.textContent
        line.textContent = ""
        line.appendChild(span)
      })

      const images = gsap.utils.toArray<HTMLElement>(".tl-img", hero)
      gsap.set(hero.querySelector(".tl-hero-bg"), { scaleY: 0 })
      gsap.set(images, { scale: 0 })
      gsap.set(hero.querySelectorAll(".tl-line span"), { y: "125%" })
      gsap.set(hero.querySelector(".tl-sidebar-logo"), { scale: 0 })
      gsap.set([hero.querySelector(".tl-nav-divider"), hero.querySelector(".tl-info-divider")], { scaleX: 0 })
      gsap.set(hero.querySelector(".tl-sidebar-divider"), { scaleY: 0 })

      const animateImages = () => {
        images.forEach((img) => img.classList.remove("animate-out"))
        const state = Flip.getState(images)
        images.forEach((img) => img.classList.add("animate-out"))

        const imageTl = gsap.timeline()
        imageTl.add(
          Flip.from(state, {
            duration: 1,
            stagger: 0.1,
            ease: "power3.inOut",
          }),
        )

        images.forEach((img, index) => {
          const scaleTl = gsap.timeline()
          scaleTl
            .to(img, { scale: 2.5, duration: 0.45, ease: "power3.in" }, 0.025)
            .to(img, { scale: 1, duration: 0.45, ease: "power3.out" }, 0.5)

          imageTl.add(scaleTl, index * 0.1)
        })

        return imageTl
      }

      const counterDistance = (selector: string) => {
        const counter = hero.querySelector(selector)
        const firstNum = counter?.querySelector(".tl-num")
        const nums = counter?.querySelectorAll(".tl-num")
        if (!counter || !firstNum || !nums) return 0

        return (nums.length - 1) * firstNum.clientHeight
      }

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
      tl.to(hero.querySelector(".tl-hero-bg"), { scaleY: "100%", duration: 3, ease: "power2.inOut", delay: 0.25 })
        .to(images, { scale: 1, duration: 1, stagger: 0.125, ease: "power3.out" }, "<")
        .to(hero.querySelector(".tl-counter-3"), { y: -counterDistance(".tl-counter-3"), duration: 2.5, ease: "power2.inOut" }, 0)
        .to(hero.querySelector(".tl-counter-2"), { y: -counterDistance(".tl-counter-2"), duration: 3, ease: "power2.inOut" }, 0)
        .to(hero.querySelector(".tl-counter-1"), { y: -counterDistance(".tl-counter-1"), duration: 2, delay: 1.5, ease: "power2.inOut" }, 0)
        .to(hero.querySelector(".tl-counter"), {
          autoAlpha: 0,
          duration: 0.3,
          delay: 0.3,
          ease: "power3.out",
          onStart: animateImages,
        })
        .to(hero.querySelector(".tl-sidebar-divider"), { scaleY: "100%", duration: 1, ease: "power3.inOut", delay: 1.25 })
        .to([hero.querySelector(".tl-nav-divider"), hero.querySelector(".tl-info-divider")], {
          scaleX: "100%",
          duration: 1,
          stagger: 0.5,
          ease: "power3.inOut",
        }, "<")
        .to(hero.querySelector(".tl-sidebar-logo"), { scale: 1, duration: 1, ease: "power4.inOut" }, "<")
        .to(hero.querySelectorAll(".tl-nav span"), { y: "0%", duration: 1, stagger: 0.1, ease: "power4.out", delay: 0.5 }, "<")
        .to(
          [
            ...hero.querySelectorAll(".tl-header span"),
            ...hero.querySelectorAll(".tl-site-info span"),
            ...hero.querySelectorAll(".tl-hero-footer span"),
          ],
          { y: "0%", duration: 1, stagger: 0.1, ease: "power4.out" },
          "<",
        )

      return () => {
        splits.forEach((split) => split.revert())
      }
    },
    { scope: heroRef },
  )

  return (
    <>
      <section id="home" className="afrinexel-timeline-hero" ref={heroRef}>
        <div className="tl-hero-bg" />

        <CounterDigits />

        <div className="tl-images-container" aria-hidden="true">
          {projectImages.map((image) => (
            <div className="tl-img" key={image.src}>
              <Image src={image.src} alt={image.alt} fill sizes="(max-width: 1000px) 38vw, 20vw" />
            </div>
          ))}
        </div>

        <nav className="tl-nav" aria-label="Primary navigation">
          <div className="tl-logo-name">
            <a href="#home" data-split>
              Afrinexel
            </a>
          </div>
          <div className="tl-nav-items">
            <div className="tl-links">
              {heroNavLinks.map((link) => (
                <a href={link.href} data-split key={link.label}>
                  {link.label}
                </a>
              ))}
            </div>
            <div className="tl-cta">
              <a href="/contact" data-split>
                Let&apos;s build
              </a>
            </div>
            <MobileMenuToggle open={menuOpen} onClick={() => setMenuOpen((prev) => !prev)} />
          </div>
          <div className="tl-nav-divider" />
        </nav>

        <div className="tl-sidebar" aria-hidden="true">
          <div className="tl-sidebar-logo">
            <Image src="/images/afrinexelbg.svg1.png" alt="" width={42} height={42} priority />
          </div>
          <div className="tl-sidebar-divider" />
        </div>

        <div className="tl-header">
          <h1 data-split>
            Visual engineering for modern brands
          </h1>
        </div>

        <div className="tl-site-info">
          <h2 data-split>A design team focused on brand websites, apps, and products.</h2>
          <div className="tl-info-divider" />
          <div className="tl-site-info-copy">
            <p data-split>software studio</p>
            <p data-split>Johannesburg / remote</p>
          </div>
        </div>

        <div className="tl-hero-footer">
          <h2 data-split>Scroll Down</h2>
        </div>
      </section>

      <CurvyMobileMenu
        open={menuOpen}
        onOpenChange={setMenuOpen}
        links={heroNavLinks}
        contactHref="/contact"
      />
    </>
  )
}
