import { Suspense } from "react"
import { Metadata } from "next"
import { PricingPageContent } from "./_components/pricing-page-content"

export const metadata: Metadata = {
  title: "Pricing | SlateMate",
  description: "Transparent pricing plans for individuals, families, and schools.",
}

export default function PricingPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center">Loading pricing...</div>}>
      <PricingPageContent />
    </Suspense>
  )
}
