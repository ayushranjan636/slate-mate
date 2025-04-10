"use client"

import { useEffect, useRef } from "react"
import { FeatureCard } from "./feature-card"
import { PricingCard } from "./pricing-card"
import { Brain, Shield, Users, School, BarChart, Lock } from "lucide-react"

export function ProductSection() {
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

  const features = [
    {
      title: "AI-Powered Learning",
      description: "Personalized learning paths adapted to each student's unique needs and pace.",
      icon: Brain,
    },
    {
      title: "Parent Controls",
      description: "Complete oversight and control over content, screen time, and learning progress.",
      icon: Shield,
    },
    {
      title: "School Integration",
      description: "Seamlessly integrates with school curriculum and learning management systems.",
      icon: School,
    },
    {
      title: "Social Learning",
      description: "Safe, moderated collaborative learning spaces for students to work together.",
      icon: Users,
    },
    {
      title: "Progress Analytics",
      description: "Detailed insights into learning patterns, strengths, and areas for improvement.",
      icon: BarChart,
    },
    {
      title: "Data Privacy",
      description: "Industry-leading security measures to protect student data and privacy.",
      icon: Lock,
    },
  ]

  const pricingPlans = [
    {
      title: "Free",
      price: "$0",
      description: "Basic features for individual students",
      features: ["Limited AI-powered learning", "Basic progress tracking", "Standard content library", "Email support"],
      buttonText: "Get Started",
    },
    {
      title: "Premium",
      price: "$9.99",
      description: "Advanced features for families",
      features: [
        "Full AI-powered learning",
        "Complete parent controls",
        "Advanced progress analytics",
        "Expanded content library",
        "Priority support",
      ],
      buttonText: "Subscribe",
      popular: true,
    },
    {
      title: "School",
      price: "Custom",
      description: "Enterprise solutions for educational institutions",
      features: [
        "School-wide deployment",
        "LMS integration",
        "Administrative dashboard",
        "Custom content creation",
        "Dedicated account manager",
        "24/7 support",
      ],
      buttonText: "Contact Sales",
    },
  ]

  return (
    <section ref={sectionRef} id="product" className="py-20">
      <div className="container mx-auto px-4">
        <div ref={(el) => (elementsRef.current[0] = el)} className="text-center mb-16 scroll-animation">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transforming Education with Technology</h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            SlateMate combines cutting-edge AI with thoughtful design to create a learning experience that's both
            effective and safe.
          </p>
        </div>

        <div
          ref={(el) => (elementsRef.current[1] = el)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 scroll-animation"
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} title={feature.title} description={feature.description} icon={feature.icon} />
          ))}
        </div>

        <div ref={(el) => (elementsRef.current[2] = el)} className="text-center mb-16 scroll-animation">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Plan</h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Flexible pricing options to meet the needs of individual students, families, and educational institutions.
          </p>
        </div>

        <div
          ref={(el) => (elementsRef.current[3] = el)}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 scroll-animation"
        >
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              buttonText={plan.buttonText}
              popular={plan.popular}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
