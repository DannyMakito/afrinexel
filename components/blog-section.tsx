"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    title: "The Future of AI in Software Development",
    excerpt:
      "Explore how artificial intelligence is revolutionizing the way we build and deploy software applications.",
    category: "AI & Technology",
    date: "2024-01-15",
    readTime: "5 min read",
    image: "/placeholder-ql4ly.png",
  },
  {
    title: "Cloud Migration Best Practices",
    excerpt: "A comprehensive guide to successfully migrating your applications to the cloud with minimal downtime.",
    category: "Cloud Computing",
    date: "2024-01-10",
    readTime: "8 min read",
    image: "/placeholder-l34fi.png",
  },
  {
    title: "Building Scalable Mobile Applications",
    excerpt: "Learn the key principles and technologies for creating mobile apps that can handle millions of users.",
    category: "Mobile Development",
    date: "2024-01-05",
    readTime: "6 min read",
    image: "/placeholder-v646n.png",
  },
  {
    title: "Microservices Architecture Patterns",
    excerpt: "Discover proven patterns and practices for designing and implementing microservices architectures.",
    category: "Architecture",
    date: "2023-12-28",
    readTime: "10 min read",
    image: "/microservices-architecture.png",
  },
  {
    title: "UI/UX Trends for 2024",
    excerpt: "Stay ahead of the curve with the latest design trends that will shape user experiences this year.",
    category: "Design",
    date: "2023-12-20",
    readTime: "4 min read",
    image: "/placeholder-47wh8.png",
  },
  {
    title: "DevOps Automation Strategies",
    excerpt: "Streamline your development workflow with effective automation strategies and tools.",
    category: "DevOps",
    date: "2023-12-15",
    readTime: "7 min read",
    image: "/placeholder-mwwfr.png",
  },
]

export default function BlogSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="blog" className="py-20 bg-background relative overflow-hidden">
      {/* Background spotlight effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-r from-primary/15 to-secondary/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-r from-secondary/15 to-primary/15 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-poppins text-foreground mb-6 text-balance">
            Latest Insights
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Stay updated with the latest trends, best practices, and insights from the world of technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300 group hover:scale-105 overflow-hidden card-glow-hover">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-medium text-white bg-primary/90 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                    <span className="mx-2">•</span>
                    {post.readTime}
                  </div>
                  <h3 className="text-xl font-semibold font-poppins text-foreground mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <Button
                    variant="ghost"
                    className="text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto font-medium group"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
