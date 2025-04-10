"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/animations/scroll-reveal"

export function PricingPageContent() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Basic features for individual students",
      features: ["Limited AI-powered learning", "Basic progress tracking", "Standard content library", "Email support"],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Premium",
      price: "$9.99",
      period: "/month",
      description: "Advanced features for families",
      features: [
        "Full AI-powered learning",
        "Complete parent controls",
        "Advanced progress analytics",
        "Expanded content library",
        "Priority support",
        "Up to 3 student profiles",
      ],
      cta: "Subscribe",
      popular: true,
    },
    {
      name: "School",
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
      cta: "Contact Sales",
      popular: false,
    },
  ]

  const faqs = [
    {
      question: "Can I switch plans at any time?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. Changes will be applied at the start of your next billing cycle.",
    },
    {
      question: "Are there discounts for annual subscriptions?",
      answer: "Yes, we offer a 20% discount for annual subscriptions on our Premium plan.",
    },
    {
      question: "How many students can use a Premium account?",
      answer:
        "The Premium plan supports up to 3 student profiles, perfect for families with multiple children.",
    },
    {
      question: "Do you offer special pricing for schools?",
      answer:
        "Yes, we offer custom pricing for educational institutions based on the number of students and required features. Contact our sales team for a personalized quote.",
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day free trial of our Premium plan, no credit card required.",
    },
  ]

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-electric/10 to-emerald/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl mb-8 text-foreground/80">
              Choose the plan that's right for you, your family, or your school.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div
                  className={`relative rounded-xl p-8 h-full transition-all duration-300 bg-card 
                    ${plan.popular ? "shadow-lg border-2 border-electric" : "border shadow-sm hover:shadow-md hover:border-electric/30"}
                  `}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-electric text-white px-3 py-1 text-xs font-semibold rounded-bl-lg rounded-tr-lg">
                      Most Popular
                    </div>
                  )}

                  <div>
                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.period && <span className="text-foreground/70">{plan.period}</span>}
                    </div>
                    <p className="text-foreground/80 mb-6">{plan.description}</p>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <div className="mr-3 h-5 w-5 flex-shrink-0 rounded-full bg-emerald/20 text-emerald flex items-center justify-center mt-0.5">
                            <Check className="h-3 w-3" />
                          </div>
                          <span className="text-foreground/90">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <Button variant={plan.popular ? "glow" : "default"} className="w-full">
                      {plan.cta}
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-lg text-foreground/80">
                Have questions about our pricing? Find answers to common questions below.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto">
            {faqs.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="mb-6 bg-card rounded-lg p-6 border shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                  <p className="text-foreground/80">{item.answer}</p>
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
            <div className="max-w-4xl mx-auto bg-card rounded-2xl p-12 text-center shadow-lg border">
              <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
              <p className="text-lg mb-8 text-foreground/80">
                Our team is ready to help you find the perfect plan for your needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="glow" size="lg">
                  Contact Sales
                </Button>
                <Button variant="outline" size="lg">
                  View Documentation
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
