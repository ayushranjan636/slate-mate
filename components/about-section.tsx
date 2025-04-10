"use client"

import { useEffect, useRef } from "react"
import { TeamCard } from "./team-card"
import Image from "next/image"

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const elementsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el)
      })
    }
  }, [])

  const team = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      bio: "Former educator with 10+ years experience in EdTech innovation.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Priya Sharma",
      role: "CTO",
      bio: "AI researcher with a passion for applying technology to education.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Michael Chen",
      role: "Head of Product",
      bio: "UX specialist focused on creating intuitive learning experiences.",
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div ref={(el) => (elementsRef.current[0] = el)} className="text-center mb-16 scroll-animation">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About SlateMate</h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            We're on a mission to revolutionize education through safe, AI-powered learning experiences.
          </p>
        </div>

        <div
          ref={(el) => (elementsRef.current[1] = el)}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 scroll-animation"
        >
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg mb-6">
              At SlateMate, we believe that every student deserves access to personalized, engaging, and effective
              education. We're combining the power of artificial intelligence with thoughtful design to create learning
              experiences that adapt to each student's unique needs while giving parents and educators the tools they
              need to guide and support that journey.
            </p>
            <p className="text-lg">
              Founded in collaboration with IIT Madras and the Center for Innovation, SlateMate represents the cutting
              edge of educational technology with a human-centered approach.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-r from-electric to-emerald rounded-full opacity-20 blur-2xl animate-pulse" />
              <div className="relative h-full w-full flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card p-6 rounded-xl shadow-lg flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=100&width=200"
                      alt="IIT Madras Logo"
                      width={200}
                      height={100}
                      className="max-h-16 w-auto"
                    />
                  </div>
                  <div className="bg-card p-6 rounded-xl shadow-lg flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=100&width=200"
                      alt="CFI Logo"
                      width={200}
                      height={100}
                      className="max-h-16 w-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div ref={(el) => (elementsRef.current[2] = el)} className="text-center mb-12 scroll-animation">
          <h3 className="text-2xl font-bold mb-4">Meet Our Team</h3>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Passionate educators, technologists, and designers working together to transform the future of learning.
          </p>
        </div>

        <div
          ref={(el) => (elementsRef.current[3] = el)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 scroll-animation"
        >
          {team.map((member, index) => (
            <TeamCard key={index} name={member.name} role={member.role} bio={member.bio} image={member.image} />
          ))}
        </div>
      </div>
    </section>
  )
}
