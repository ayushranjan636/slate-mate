import type { Metadata } from "next"
import FeaturePageContent from "./FeaturesPageContent"

export const metadata: Metadata = {
  title: "Features | SlateMate",
  description: "Explore the powerful features of SlateMate's AI-powered learning platform.",
}

// Metadata can't be exported from Client Components
export default function FeaturesPage() {
  return <FeaturePageContent />
}
