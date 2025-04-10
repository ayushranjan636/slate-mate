import type { Metadata } from "next"
import { Suspense } from "react"
import FeaturesPageContent from "./FeaturesPageContent"

export const metadata: Metadata = {
  title: "Features | SlateMate",
  description: "Explore the powerful features of SlateMate's AI-powered learning platform.",
}

export default function FeaturesPage() {
  return (
    <Suspense fallback={<div className="text-center p-20">Loading features...</div>}>
      <FeaturesPageContent />
    </Suspense>
  )
}
