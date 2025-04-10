"use client"

import { TiltCard } from "@/components/ui/tilt-card"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { motion } from "framer-motion"
import { LucideBrain, LucideShield, LucideUsers, LucideBarChart, LucideLock, LucideTarget } from "lucide-react"

const FeaturePageContent = () => {
  const features = [
    {
      title: "AI-Powered Learning",
      description:
        "Our proprietary AI analyzes learning patterns to create personalized educational pathways for each student, adapting content difficulty and style based on individual progress.",
      icon: LucideBrain,
      color: "bg-electric",
    },
    {
      title: "Parent Controls",
      description:
        "Take control with robust parental oversight tools that let you monitor activity, set limits, filter content, and receive real-time notifications about your child's learning journey.",
      icon: LucideShield,
      color: "bg-emerald",
    },
    {
      title: "Social Learning",
      description:
        "Foster collaboration through moderated learning communities where students can work together on projects, discuss concepts, and receive peer feedback in a safe environment.",
      icon: LucideUsers,
      color: "bg-golden",
    },
    {
      title: "Progress Analytics",
      description:
        "Access comprehensive dashboards with visual representations of performance data, showing strengths, weaknesses, and growth over time through intuitive charts and reports.",
      icon: LucideBarChart,
      color: "bg-electric",
    },
    {
      title: "Data Privacy",
      description:
        "Rest assured with our commitment to student data protection, employing end-to-end encryption, strict access controls, and transparent data policies that exceed industry standards.",
      icon: LucideLock,
      color: "bg-emerald",
    },
    {
      title: "Goal Setting",
      description:
        "Empower students with tools to set, track, and achieve learning objectives with customizable goals, milestone tracking, and achievement celebrations that build motivation.",
      icon: LucideTarget,
      color: "bg-golden",
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-electric/10 via-emerald/10 to-golden/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold mb-6">Powerful Features for Modern Learning</h1>
            <p className="text-xl mb-8 text-foreground/80">
              Discover how SlateMate's innovative features create an engaging, safe, and effective educational
              experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <TiltCard className="h-full" glareEnabled={true} tiltAmount={10}>
                  <div className="p-8">
                    <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-foreground/80">{feature.description}</p>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">See SlateMate in Action</h2>
              <p className="text-lg text-foreground/80">
                Experience how our features work together to create a seamless learning environment.
              </p>
            </div>
          </ScrollReveal>

          <div className="aspect-video rounded-2xl overflow-hidden shadow-xl border border-border/50 bg-card">
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-muted-foreground">Interactive Demo Placeholder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Why Choose SlateMate?</h2>
              <p className="text-lg text-foreground/80">See how we compare to traditional learning platforms.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="p-4 text-left bg-muted">Features</th>
                    <th className="p-4 text-center bg-muted">SlateMate</th>
                    <th className="p-4 text-center bg-muted">Traditional Platforms</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "AI-Powered Personalization", slatemate: true, traditional: false },
                    { feature: "Real-time Parent Controls", slatemate: true, traditional: false },
                    { feature: "Adaptive Learning Paths", slatemate: true, traditional: false },
                    { feature: "Social Learning Tools", slatemate: true, traditional: true },
                    { feature: "Advanced Analytics", slatemate: true, traditional: false },
                    { feature: "Data Privacy", slatemate: true, traditional: true },
                  ].map((row, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-4">{row.feature}</td>
                      <td className="p-4 text-center">
                        {row.slatemate ? (
                          <span className="inline-flex items-center justify-center w-6 h-6 bg-emerald rounded-full">
                            <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                        ) : (
                          <span className="inline-flex items-center justify-center w-6 h-6 bg-crimson rounded-full">
                            <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2.5"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </span>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {row.traditional ? (
                          <span className="inline-flex items-center justify-center w-6 h-6 bg-emerald rounded-full">
                            <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                        ) : (
                          <span className="inline-flex items-center justify-center w-6 h-6 bg-crimson rounded-full">
                            <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2.5"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

export default FeaturePageContent
