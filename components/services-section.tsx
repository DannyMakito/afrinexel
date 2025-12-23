"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Smartphone, Cloud, Palette, Bot, Settings } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom web applications that convert click to clients built with modern frameworks and best practices for optimal performance and user experience.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications that deliver seamless experiences across iOS and Android devices.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and migration services to optimize your business operations and reduce costs.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design solutions that create intuitive interfaces and exceptional digital experiences.",
  },
  {
    icon: Bot,
    title: "AI & Automation",
    description: "Intelligent automation solutions and AI-powered applications to streamline your business processes.",
  },
  {
    icon: Settings,
    title: "IT Consulting",
    description:
      "Strategic technology consulting to help you make informed decisions and optimize your digital infrastructure.",
  },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-20 bg-muted relative overflow-hidden">
      {/* Background spotlight effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >

           <h1 className="text-lg md:text-5xl font-bold font-poppins text-foreground mb-6 text-balance">
             what we provide 
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold font-poppins text-foreground mb-6 text-balance">
            OursTransformative Business Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            We offer comprehensive digital solutions to help your business thrive in the modern digital landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300 group hover:scale-105 card-glow-hover">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-primary/80 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold font-poppins text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
