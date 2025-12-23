import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Tag, Users, Code2, CheckCircle2, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const caseStudies = {
  "luxury-accommodation-platform": {
    title: "Luxury Accommodation Platform",
    category: "Web Development",
    client: "Premium Stays Inc.",
    duration: "4 months",
    team: "6 developers, 2 designers, 1 PM",
    image: "/makiserno.png",
    overview:
      "We developed a comprehensive luxury accommodation platform that revolutionizes how high-end properties are discovered and booked. The platform features an intuitive interface, real-time availability tracking, and seamless payment processing.",
    challenge:
      "The client needed a platform that could handle thousands of concurrent users while maintaining lightning-fast search capabilities across a database of 10,000+ luxury properties. Additionally, they required integration with multiple payment gateways and property management systems.",
    solution:
      "We architected a scalable solution using Next.js for the frontend, Node.js microservices for the backend, and PostgreSQL with Redis caching for optimal performance. The platform utilizes Elasticsearch for lightning-fast property searches and implements real-time WebSocket connections for instant booking updates.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Elasticsearch", "Stripe", "AWS"],
    results: [
      "300% increase in booking conversions",
      "Average page load time reduced to 1.2 seconds",
      "Successfully handles 50,000+ daily active users",
      "99.9% uptime with auto-scaling infrastructure",
      "Reduced operational costs by 40% through automation",
    ],
    features: [
      "Advanced search with filters for location, amenities, and price range",
      "Real-time availability calendar with instant booking confirmation",
      "Multi-currency support with dynamic exchange rates",
      "Integrated review and rating system",
      "Property owner dashboard with analytics",
      "Mobile-responsive design with progressive web app capabilities",
    ],
    testimonial: {
      quote:
        "Afrinexel transformed our vision into reality. The platform exceeded our expectations in both functionality and design. Our booking rates have tripled since launch.",
      author: "Sarah Johnson",
      position: "CEO, Premium Stays Inc.",
    },
  },
  "employee-management-system": {
    title: "Employee Management System",
    category: "Mobile & Web Application",
    client: "TechCorp Solutions",
    duration: "3 months",
    team: "4 developers, 1 designer, 1 PM",
    image: "/healthcare-mobile-app.png",
    overview:
      "A comprehensive employee management platform built with modern technologies to streamline HR operations, attendance tracking, performance reviews, and team collaboration. The system integrates seamlessly with existing corporate infrastructure.",
    challenge:
      "TechCorp needed a unified system to replace multiple legacy tools for managing their 500+ employee workforce. They required real-time attendance tracking, automated payroll integration, and robust role-based access control while maintaining GDPR compliance.",
    solution:
      "We leveraged Appwrite for backend services providing authentication, database, and file storage, paired with React for a responsive frontend. The architecture includes automated workflows, real-time notifications, and comprehensive reporting dashboards with data visualization.",
    technologies: ["React", "Appwrite", "TypeScript", "Tailwind CSS", "Chart.js", "Node.js"],
    results: [
      "85% reduction in HR administrative time",
      "Real-time attendance tracking with 99% accuracy",
      "Automated payroll processing saving 20 hours monthly",
      "Employee satisfaction score increased by 45%",
      "Complete GDPR compliance with audit trails",
    ],
    features: [
      "Biometric and GPS-based attendance tracking",
      "Leave management with approval workflows",
      "Performance review system with goal tracking",
      "Document management with secure file sharing",
      "Real-time chat and team collaboration tools",
      "Automated reporting and analytics dashboard",
    ],
    testimonial: {
      quote:
        "The employee management system has revolutionized how we handle HR operations. Everything is now automated, secure, and accessible in one place.",
      author: "Michael Chen",
      position: "HR Director, TechCorp Solutions",
    },
  },
  "cloud-infrastructure": {
    title: "Cloud Infrastructure Modernization",
    category: "Cloud Solutions",
    client: "Global Finance Corp",
    duration: "6 months",
    team: "8 engineers, 2 architects, 1 PM",
    image: "/cloud-infrastructure-dashboard.png",
    overview:
      "A complete cloud transformation project migrating legacy on-premise infrastructure to a modern microservices architecture on AWS. The solution provides auto-scaling, high availability, and disaster recovery capabilities.",
    challenge:
      "The client's monolithic on-premise system was struggling with scaling issues, frequent downtime, and mounting maintenance costs. They needed zero-downtime migration while maintaining strict financial compliance and data security standards.",
    solution:
      "We designed a cloud-native architecture using AWS services including EKS for container orchestration, RDS for databases, and Lambda for serverless functions. Implemented infrastructure as code with Terraform, automated CI/CD pipelines, and comprehensive monitoring with CloudWatch and Datadog.",
    technologies: ["AWS", "Kubernetes", "Docker", "Terraform", "Jenkins", "Datadog", "PostgreSQL"],
    results: [
      "99.99% uptime achieved post-migration",
      "Infrastructure costs reduced by 60%",
      "Deployment time reduced from days to minutes",
      "Auto-scaling handles 10x traffic spikes effortlessly",
      "Disaster recovery time reduced from 24 hours to 15 minutes",
    ],
    features: [
      "Microservices architecture with independent scaling",
      "Automated CI/CD pipelines with blue-green deployments",
      "Multi-region disaster recovery and backup",
      "Real-time monitoring and alerting system",
      "Infrastructure as code for consistent environments",
      "Comprehensive security with WAF and DDoS protection",
    ],
    testimonial: {
      quote:
        "The cloud migration was seamless and transformative. We now have the scalability and reliability we always needed, with significant cost savings.",
      author: "David Williams",
      position: "CTO, Global Finance Corp",
    },
  },
  "ai-analytics-dashboard": {
    title: "AI-Powered Analytics Dashboard",
    category: "Artificial Intelligence",
    client: "DataDrive Analytics",
    duration: "5 months",
    team: "5 developers, 2 ML engineers, 1 designer",
    image: "/ai-analytics-dashboard.png",
    overview:
      "An intelligent analytics platform that uses machine learning to provide predictive insights, anomaly detection, and automated recommendations. The dashboard processes millions of data points to deliver actionable business intelligence.",
    challenge:
      "DataDrive needed a way to make sense of massive datasets from multiple sources while providing real-time predictions and insights. The solution had to be accessible to non-technical users while maintaining sophisticated analytical capabilities.",
    solution:
      "We built a full-stack analytics platform using Python for ML models, FastAPI for backend services, and React with D3.js for interactive visualizations. Implemented real-time data pipelines, natural language query processing, and automated report generation with customizable alerts.",
    technologies: ["Python", "TensorFlow", "FastAPI", "React", "D3.js", "MongoDB", "Apache Kafka"],
    results: [
      "Predictive accuracy of 94% for business forecasting",
      "Automated detection of 98% of data anomalies",
      "Decision-making time reduced by 70%",
      "Processing 50 million data points daily",
      "ROI increased by 250% in first year",
    ],
    features: [
      "Machine learning powered predictive analytics",
      "Real-time anomaly detection and alerting",
      "Natural language query interface",
      "Interactive data visualizations and dashboards",
      "Automated report generation and distribution",
      "Custom model training with historical data",
    ],
    testimonial: {
      quote:
        "The AI analytics platform has given us insights we never knew existed. It's like having a data scientist working 24/7 for our business.",
      author: "Emily Rodriguez",
      position: "Chief Data Officer, DataDrive Analytics",
    },
  },
  "financial-trading-app": {
    title: "Real-Time Financial Trading Application",
    category: "Mobile Development",
    client: "TradeMax Financial",
    duration: "7 months",
    team: "6 developers, 2 designers, 1 QA, 1 PM",
    image: "/placeholder-0dvpu.png",
    overview:
      "A sophisticated mobile trading platform enabling users to trade stocks, forex, and cryptocurrencies in real-time. Features advanced charting tools, portfolio management, and AI-powered trading suggestions with bank-level security.",
    challenge:
      "Building a mobile app that handles real-time market data streams, executes trades with sub-second latency, and maintains financial-grade security while providing an intuitive user experience was the primary challenge.",
    solution:
      "We developed native iOS and Android apps using React Native for cross-platform efficiency. Implemented WebSocket connections for real-time data, integrated with multiple financial APIs, and utilized biometric authentication with end-to-end encryption for security.",
    technologies: ["React Native", "TypeScript", "Node.js", "WebSocket", "MongoDB", "Redis", "AWS"],
    results: [
      "Average trade execution time under 500ms",
      "200,000+ active monthly users",
      "Zero security breaches since launch",
      "4.8-star rating on app stores",
      "Trading volume increased by 400%",
    ],
    features: [
      "Real-time market data and price alerts",
      "Advanced charting with 50+ technical indicators",
      "Portfolio tracking and performance analytics",
      "AI-powered trading signals and recommendations",
      "Social trading and copy trading features",
      "Biometric authentication and secure transactions",
    ],
    testimonial: {
      quote:
        "Afrinexel delivered a world-class trading platform that competes with industry giants. Our user growth has been phenomenal.",
      author: "James Patterson",
      position: "CEO, TradeMax Financial",
    },
  },
  "saas-management-portal": {
    title: "Multi-Tenant SaaS Management Portal",
    category: "Web Development",
    client: "CloudServe Technologies",
    duration: "5 months",
    team: "7 developers, 2 designers, 1 PM",
    image: "/placeholder-dpazg.png",
    overview:
      "A comprehensive SaaS platform enabling businesses to manage multiple client accounts with sophisticated role-based access control, billing automation, and white-label capabilities. The portal serves as the central hub for service delivery and customer management.",
    challenge:
      "CloudServe needed a scalable multi-tenant architecture that could support thousands of organizations with complete data isolation, custom branding per tenant, and complex permission hierarchies while maintaining high performance.",
    solution:
      "We architected a Next.js application with tenant isolation at the database level, implemented JWT-based authentication with granular permissions, integrated Stripe for subscription billing, and created a flexible theming system for white-label deployments.",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "Stripe", "Redis", "TypeScript", "Tailwind CSS"],
    results: [
      "Successfully managing 500+ tenant organizations",
      "99.5% billing automation accuracy",
      "Reduced customer onboarding time by 80%",
      "Supporting 100,000+ end users across all tenants",
      "Customer churn reduced by 35%",
    ],
    features: [
      "Multi-tenant architecture with complete data isolation",
      "Granular role-based access control (RBAC)",
      "Automated subscription billing and invoicing",
      "White-label customization per tenant",
      "Comprehensive admin dashboard with analytics",
      "API access with rate limiting and monitoring",
    ],
    testimonial: {
      quote:
        "The SaaS portal has transformed how we deliver services to our clients. The white-label features and automation have been game-changers.",
      author: "Lisa Thompson",
      position: "COO, CloudServe Technologies",
    },
  },
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = caseStudies[params.slug as keyof typeof caseStudies]

  if (!caseStudy) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-background via-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/#portfolio">
            <Button variant="ghost" className="mb-8 text-primary hover:text-primary/80">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                {caseStudy.category}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-poppins text-foreground mb-6 text-balance">
                {caseStudy.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">{caseStudy.overview}</p>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">Client</p>
                    <p className="font-semibold text-foreground">{caseStudy.client}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">Duration</p>
                    <p className="font-semibold text-foreground">{caseStudy.duration}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 col-span-2">
                  <Tag className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">Team Size</p>
                    <p className="font-semibold text-foreground">{caseStudy.team}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-3xl"></div>
              <img
                src={caseStudy.image || "/placeholder.svg"}
                alt={caseStudy.title}
                className="relative rounded-2xl shadow-2xl w-full h-auto border border-primary/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="card-glow-hover border-primary/20">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold font-poppins text-foreground mb-6">The Challenge</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">{caseStudy.challenge}</p>
              </CardContent>
            </Card>

            <Card className="card-glow-hover border-primary/20">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold font-poppins text-foreground mb-6">Our Solution</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">{caseStudy.solution}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Code2 className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-foreground mb-4">Technologies Used</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {caseStudy.technologies.map((tech) => (
              <div
                key={tech}
                className="bg-card border border-primary/20 px-6 py-3 rounded-full shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300"
              >
                <span className="font-medium text-foreground">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-foreground mb-12 text-center">
            Key Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudy.features.map((feature, index) => (
              <Card key={index} className="card-glow-hover border-primary/20">
                <CardContent className="p-6 flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground leading-relaxed">{feature}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-foreground mb-12 text-center">
            Results & Impact
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudy.results.map((result, index) => (
              <Card key={index} className="card-glow-hover border-primary/30 bg-card/80 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-lg font-semibold text-foreground leading-relaxed">{result}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="card-glow-hover border-primary/30 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-12">
              <div className="text-6xl text-primary mb-6">"</div>
              <p className="text-2xl text-foreground leading-relaxed mb-8 italic">{caseStudy.testimonial.quote}</p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full"></div>
                <div>
                  <p className="font-bold text-foreground text-lg">{caseStudy.testimonial.author}</p>
                  <p className="text-muted-foreground">{caseStudy.testimonial.position}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Let's build something amazing together. Get in touch to discuss your next project.
          </p>
          <Link href="/#contact">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <ExternalLink className="h-5 w-5 mr-2" />
              Get Started
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
