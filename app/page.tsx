import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight } from "lucide-react"
import { HeroAnimation } from "@/components/home/hero-animation"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { Counter } from "@/components/animations/counter"
import { PilotForm } from "@/components/forms/pilot-form"

export const metadata: Metadata = {
  title: "SlateMate | AI-Powered Learning Platform",
  description:
    "Empower your child's education with cutting-edge AI technology while maintaining complete control over their learning environment.",
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen pt-16 flex items-center overflow-hidden">
        <HeroAnimation />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-electric to-emerald">
                  AI-Powered Learning.
                </span>
                <br />
                Parent-Controlled Safety.
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-foreground/80">
                Empower your child's education with cutting-edge AI technology while maintaining complete control over
                their learning environment.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="glow" size="lg" asChild>
                  <Link href="/features">Explore Features</Link>
                </Button>
                <Button variant="outline" size="lg" className="border-2">
                  Join Pilot Program <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-8 bg-gradient-to-r from-electric/10 to-emerald/10">
        <ScrollReveal>
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-8 rounded-2xl bg-card shadow-lg border border-electric/20">
              <div className="flex items-center mb-4 md:mb-0">
                <span className="text-3xl mr-4">🎉</span>
                <h3 className="text-xl md:text-2xl font-bold">Join our Pilot Program for FREE – Limited Offer</h3>
              </div>
              <PilotForm
                triggerButton={
                  <Button variant="glow" size="lg">
                    Join Pilot
                  </Button>
                }
              />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Benefits Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Key Benefits</h2>
              <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
                Our platform combines cutting-edge AI with thoughtful design to create a learning experience that's both
                effective and safe.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Powered Learning",
                description: "Personalized learning paths adapted to each student's unique needs and pace.",
              },
              {
                title: "Parent Controls",
                description: "Complete oversight and control over content, screen time, and learning progress.",
              },
              {
                title: "School Integration",
                description: "Seamlessly integrates with school curriculum and learning management systems.",
              },
              {
                title: "Social Learning",
                description: "Safe, moderated collaborative learning spaces for students to work together.",
              },
              {
                title: "Progress Analytics",
                description: "Detailed insights into learning patterns, strengths, and areas for improvement.",
              },
              {
                title: "Data Privacy",
                description: "Industry-leading security measures to protect student data and privacy.",
              },
            ].map((benefit, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-card border rounded-xl p-6 h-full tilt-card">
                  <div className="tilt-card-content">
                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-foreground/80">{benefit.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-electric/5 to-emerald/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { prefix: "", value: 95, suffix: "%", label: "Student Retention" },
              { prefix: "", value: 5000, suffix: "+", label: "Trusted Parents" },
              { prefix: "", value: 1, suffix: "M+", label: "AI Recommendations" },
              { prefix: "", value: 32, suffix: "+", label: "Partner Schools" },
            ].map((stat, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="text-center p-6 bg-card rounded-xl shadow-sm border">
                  <Counter prefix={stat.prefix} end={stat.value} suffix={stat.suffix} duration={2000} />
                  <p className="mt-2 text-foreground/70">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <ScrollReveal>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-midnight to-electric/90 rounded-3xl p-12 text-white text-center shadow-xl">
              <h2 className="text-3xl font-bold mb-4">Ready to transform learning?</h2>
              <p className="text-xl mb-8 opacity-90">
                Join thousands of parents and educators who are already using SlateMate to provide a better learning
                experience.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="glow" size="lg" className="border border-white/20 bg-white/10 backdrop-blur-sm">
                  Get Started Free
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-2 border-white/20 hover:bg-white/10"
                >
                  <Link href="/schedule-demo" className="flex items-center">                  
                  Schedule Demo
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}

