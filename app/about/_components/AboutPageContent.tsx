"use client"

import Image from "next/image"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { TiltCard } from "@/components/ui/tilt-card"
import { Button } from "@/components/ui/button"

export default function AboutContent() {
  const team = [
    {
      name: "Sagar Gujrati",
      role: "Co-Founder & CEO",
      bio: "Former educator with 10+ years experience in EdTech innovation.",
      image: "/sagar.jpeg?height=400&width=400&text=Alex",
    },
    {
      name: "Ayush Ranjan",
      role: "Co-Founder & CTO",
      bio: "AI researcher with a passion for applying technology to education.",
      image: "/ayush.jpeg?height=400&width=400&text=Priya",
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-electric/20 to-emerald/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">About SlateMate</h1>
            <p className="text-xl mb-8 text-foreground/80">
              We're on a mission to revolutionize education through safe, AI-powered learning experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg mb-6 text-foreground/80">
                  At SlateMate, we believe that every student deserves access to personalized, engaging, and effective
                  education. We're combining the power of artificial intelligence with thoughtful design to create
                  learning experiences that adapt to each student's unique needs while giving parents and educators the
                  tools they need to guide and support that journey.
                </p>
                <p className="text-lg text-foreground/80">
                  Founded in collaboration with IIT Madras and the Center for Innovation, SlateMate represents the
                  cutting edge of educational technology with a human-centered approach.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border/50">
                <div className="aspect-video relative">
                  <Image
                    src="/mission.jpeg?text=Our+Mission&fontsize=24&bg=1E2A38&fg=FFFFFF"
                    alt="Our Mission"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Our Partners</h2>
              <p className="text-lg text-foreground/80">
                SlateMate is built on strong academic and industry partnerships.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center max-w-4xl mx-auto">
              <div className="bg-card p-6 rounded-xl shadow-sm border flex items-center justify-center h-32">
                <Image
                  src="/iitm.png?height=80&width=160&text=IIT+Madras"
                  alt="IIT Madras Logo"
                  width={160}
                  height={80}
                  className="max-h-16 w-auto"
                />
              </div>
              <div className="bg-card p-6 rounded-xl shadow-sm border flex items-center justify-center h-32">
                <Image
                  src="/nirmaan.png?height=80&width=160&text=CFI"
                  alt="nirmaan Logo"
                  width={160}
                  height={80}
                  className="max-h-16 w-auto"
                />
              </div>
              <div className="bg-card p-6 rounded-xl shadow-sm border flex items-center justify-center h-32">
                <Image
                  src="/aws-st.png?height=80&width=360&text=EdTech+Alliance"
                  alt="AWS Startup Logo"
                  width={160}
                  height={80}
                  className="max-h-16 w-auto"
                />
              </div>
              <div className="bg-card p-6 rounded-xl shadow-sm border flex items-center justify-center h-32">
                <Image
                  src="/cfi.jpeg?height=80&width=160&text=AI+Research"
                  alt="CFI Logo"
                  width={160}
                  height={80}
                  className="max-h-16 w-auto"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
              <p className="text-lg text-foreground/80">
                Passionate educators, technologists, and designers working together to transform the future of learning.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center max-w-3xl mx-auto">
          {team.map((member, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <TiltCard className="h-full" glareEnabled={true}>
                  <div className="aspect-square relative">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-electric font-medium mb-2">{member.role}</p>
                    <p className="text-foreground/80">{member.bio}</p>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Our Values</h2>
              <p className="text-lg text-foreground/80">The principles that guide everything we do at SlateMate.</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Innovation",
                description: "We continuously push the boundaries of what's possible in educational technology.",
              },
              {
                title: "Safety",
                description: "We prioritize student safety and data privacy in every decision we make.",
              },
              {
                title: "Accessibility",
                description: "We believe quality education should be accessible to students of all backgrounds.",
              },
              {
                title: "Personalization",
                description: "We recognize that every student learns differently and tailor our approach accordingly.",
              },
              {
                title: "Collaboration",
                description: "We work closely with educators, parents, and students to create the best possible tools.",
              },
              {
                title: "Impact",
                description:
                  "We measure our success by the positive difference we make in students' educational outcomes.",
              },
            ].map((value, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-card p-6 rounded-xl border shadow-sm h-full">
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-foreground/80">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-midnight to-electric/90 rounded-3xl p-12 text-white text-center shadow-xl">
              <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
              <p className="text-xl mb-8 opacity-90">
                Help us shape the future of education with innovative technology and human-centered design.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="glow" size="lg" className="border border-white/20 bg-white/10 backdrop-blur-sm">
                  Join Our Team
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-2 border-white/20 hover:bg-white/10"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
