import type { Metadata } from "next"
import Image from "next/image"
import { ScrollReveal } from "@/components/animations/scroll-reveal"

export const metadata: Metadata = {
  title: "Product | SlateMate",
  description: "Discover how SlateMate serves schools, parents, and students with its AI-powered learning platform.",
}

export default function ProductPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-electric/20 to-emerald/20">
        <ScrollReveal>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">The Complete Learning Platform</h1>
              <p className="text-xl mb-8 text-foreground/80">
                SlateMate adapts to the needs of students, parents, and educators, providing a cohesive learning
                ecosystem for everyone involved.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* For Schools Section */}
      <section id="schools" className="py-24 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <span className="inline-block text-electric font-medium mb-2">FOR SCHOOLS</span>
                <h2 className="text-3xl font-bold mb-6">Empower Your Educational Institution</h2>
                <p className="text-lg mb-6 text-foreground/80">
                  SlateMate integrates seamlessly with your existing systems while providing powerful new tools for
                  teachers and administrators.
                </p>

                <ul className="space-y-4">
                  {[
                    "Customizable admin dashboards",
                    "Attendance tracking integration",
                    "LMS compatibility",
                    "Class management tools",
                    "Teacher insight panels",
                    "Curriculum alignment features",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-3 h-6 w-6 flex-shrink-0 rounded-full bg-emerald flex items-center justify-center">
                        <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border/50 aspect-[4/3]">
                <Image
                  src="/pro-school.png?text=School+Dashboard&fontsize=24&bg=1E2A38&fg=FFFFFF"
                  alt="School Dashboard"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* For Parents Section */}
      <section id="parents" className="py-24 bg-muted/30 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="order-2 md:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border/50 aspect-[4/3]">
                  <Image
                    src="/pro-parents.png?text=Parent+Controls&fontsize=24&bg=1E2A38&fg=FFFFFF"
                    alt="Parent Controls"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="order-1 md:order-2">
                <span className="inline-block text-electric font-medium mb-2">FOR PARENTS</span>
                <h2 className="text-3xl font-bold mb-6">Stay Involved in Your Child's Learning</h2>
                <p className="text-lg mb-6 text-foreground/80">
                  SlateMate gives parents unprecedented visibility and control over their child's digital learning
                  experience.
                </p>

                <ul className="space-y-4">
                  {[
                    "Real-time activity monitoring",
                    "Content filtering controls",
                    "Screen time management",
                    "Progress reports and alerts",
                    "Direct messaging with teachers",
                    "Learning goal collaboration",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-3 h-6 w-6 flex-shrink-0 rounded-full bg-electric flex items-center justify-center">
                        <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section id="ai-features" className="py-24 scroll-mt-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block text-electric font-medium mb-2">AI FEATURES</span>
              <h2 className="text-3xl font-bold mb-6">Powered by Advanced AI</h2>
              <p className="text-lg text-foreground/80">
                Our AI technology adapts to each student's learning style, pace, and preferences to create a truly
                personalized educational experience.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Adaptive Learning Paths",
                description: "Dynamic curriculum that adjusts based on student performance and learning patterns.",
              },
              {
                title: "Natural Language Understanding",
                description: "AI that comprehends student questions and provides contextual assistance.",
              },
              {
                title: "Personalized Recommendations",
                description: "Smart content suggestions that reinforce learning and address knowledge gaps.",
              },
              {
                title: "Progress Prediction",
                description: "Forecasting tools that help identify potential challenges before they become obstacles.",
              },
              {
                title: "Learning Style Detection",
                description: "Technology that identifies and adapts to individual learning preferences.",
              },
              {
                title: "Content Generation",
                description: "AI-created exercises and examples tailored to each student's needs.",
              },
            ].map((feature, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-card border rounded-xl p-6 h-full tilt-card">
                  <div className="tilt-card-content">
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-foreground/80">{feature.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
