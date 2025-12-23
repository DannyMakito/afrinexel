"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Luxury Accommodation Platform",
    description:
      "Offers curated listings of luxury accommodations with real-time availability, secure booking, and seamless user experience powered by modern web technologies.",
    category: "Web",
    image: "/makiserno.png",
    slug: "luxury-accommodation-platform",
  },
  {
    title: "Employee Management System Web App",
    description:
      "A full-featured employee management platform powered by Appwrite for backend services and React for an intuitive user interface..",
    category: "Mobile",
    image: "/healthcare-mobile-app.png",
    slug: "ems.png",
  },
  {
    title: "Cloud Infrastructure",
    description: "Scalable microservices architecture deployed on AWS with automated CI/CD pipelines.",
    category: "Cloud",
    image: "/cloud-infrastructure-dashboard.png",
    slug: "cloud-infrastructure",
  },
  {
    title: "AI Analytics Dashboard",
    description: "Machine learning powered analytics platform with predictive insights and data visualization.",
    category: "AI",
    image: "/ai-analytics-dashboard.png",
    slug: "ai-analytics-dashboard",
  },
  {
    title: "Financial Trading App",
    description: "Real-time trading platform with advanced charting tools and portfolio management.",
    category: "Mobile",
    image: "/placeholder-0dvpu.png",
    slug: "financial-trading-app",
  },
  {
    title: "SaaS Management Portal",
    description: "Multi-tenant SaaS platform with role-based access control and comprehensive admin tools.",
    category: "Web",
    image: "/placeholder-dpazg.png",
    slug: "saas-management-portal",
  },
]

const categories = ["All", "Web", "Mobile", "Cloud", "AI"]

export default function PortfolioSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="portfolio" className="py-20 bg-background relative overflow-hidden">
      {/* Parallax background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary rounded-lg rotate-45"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-secondary rounded-full"></div>
      </div>

      {/* Background spotlight effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-primary/15 to-secondary/15 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-poppins text-foreground mb-6 text-balance">
            Our Work & Demos
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed mb-8">
            Explore our latest projects and see how we've helped businesses transform their digital presence.
          </p>

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={
                  activeCategory === category
                    ? "bg-gradient-to-r from-primary to-secondary text-white"
                    : "border-primary text-primary hover:bg-primary hover:text-white"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden bg-card border-border hover:shadow-xl transition-all duration-300 hover:scale-105 card-glow-hover">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <Link href={`/case-study/${project.slug}`}>
                      <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Case Study
                      </Button>
                    </Link>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold font-poppins text-foreground mb-3">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
