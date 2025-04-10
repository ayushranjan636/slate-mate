import { Suspense } from "react"
import type { Metadata } from "next"
import AboutContent from "./_components/AboutPageContent"


export const metadata: Metadata = {
  title: "About Us | SlateMate",
  description: "Learn about our mission, team, and the story behind SlateMate.",
}

export default function AboutPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <AboutContent />
    </Suspense>

  )
}
