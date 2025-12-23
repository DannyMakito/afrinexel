"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Lightbulb, Award, Eye, TrendingUp } from "lucide-react"

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace cutting-edge technologies and creative solutions to solve complex challenges.",
  },
  {
    icon: Award,
    title: "Quality",
    description: "We deliver exceptional results through rigorous testing and attention to detail.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "We maintain open communication and provide clear insights throughout every project.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description: "We focus on scalable solutions that grow with your business and adapt to future needs.",
  },
]

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background spotlight effects */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-r from-secondary/15 to-primary/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-gradient-to-r from-primary/15 to-secondary/15 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-poppins  mb-6 text-balance">Who We Are</h2>
          <p className="text-lg  max-w-4xl mx-auto text-pretty leading-relaxed mb-8">
           Afrinexel was founded with a powerful vision in mind: to revolutionize the way businesses leverage technology. We set out to create an organization that not only delivers exceptional software solutions but also fosters four important standpoints.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg bg-transparent"
          >
            learn more 
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-muted backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300 group hover:scale-105 text-center card-glow-hover">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold font-poppins text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
