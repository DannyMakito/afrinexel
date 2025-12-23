"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 w-full h-full z-0">
        <iframe
          src="https://my.spline.design/retrofuturisticcircuitloop-kEHAhP2dpTjkBefzj9yTaYW4/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="w-full h-full"
          style={{ border: "none" }}
          allow="camera; microphone; xr-spatial-tracking"
        />
      </div>

      <div className="absolute inset-0 bg-black/20 z-[1]"></div>

      {/* Parallax tech illustrations */}
      <div className="absolute inset-0 opacity-10 z-[2]">
        <div className="absolute top-20 left-10 w-20 h-20 border border-primary/30 rounded-lg rotate-12"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border border-secondary/30 rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 border border-primary/30 rounded-lg -rotate-12"></div>
        <div className="absolute bottom-20 right-10 w-18 h-18 border border-secondary/30 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-poppins text-white mb-6 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Building Digital Solutions
            <span className="block text-[#0AB6BC]">That Drive Growth</span>
          </motion.h1>

          

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-medium px-8 py-3 text-lg group"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg group bg-transparent"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              See Our Work
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}
