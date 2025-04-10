"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { HeroAnimation } from "./hero-animation"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
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

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => {
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el)
      })
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <HeroAnimation />
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1
            ref={(el) => (elementsRef.current[0] = el)}
            className="text-4xl md:text-6xl font-bold mb-6 scroll-animation"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-electric to-emerald">
              AI-Powered Learning.
            </span>
            <br />
            Parent-Controlled Safety.
          </h1>
          <p
            ref={(el) => (elementsRef.current[1] = el)}
            className="text-xl md:text-2xl mb-10 text-foreground/80 scroll-animation"
          >
            Empower your child's education with cutting-edge AI technology while maintaining complete control over their
            learning environment.
          </p>
          <div
            ref={(el) => (elementsRef.current[2] = el)}
            className="flex flex-col sm:flex-row justify-center gap-4 scroll-animation"
          >
            <Button size="lg" className="bg-electric hover:bg-electric/90 text-white text-lg px-8 py-6 glow-button">
              Get Started
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-2">
              Explore Features <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
