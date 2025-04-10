"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import { PilotForm } from "@/components/forms/pilot-form"

export function BannerCTA() {
  const bannerRef = useRef<HTMLDivElement>(null)

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

    if (bannerRef.current) {
      observer.observe(bannerRef.current)
    }

    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current)
      }
    }
  }, [])

  return (
    <section className="py-8 bg-gradient-to-r from-electric/10 to-emerald/10">
      <div ref={bannerRef} className="container mx-auto px-4 scroll-animation">
        <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-8 rounded-2xl bg-card shadow-lg border border-electric/20">
          <div className="flex items-center mb-4 md:mb-0">
            <Sparkles className="h-8 w-8 text-golden mr-4 animate-pulse" />
            <h3 className="text-xl md:text-2xl font-bold">🎉 Join our Pilot Program for FREE – Limited Offer</h3>
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
    </section>
  )
}
