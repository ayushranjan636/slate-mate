import { Suspense } from "react"
import type { Metadata } from "next"
import AboutContent from "./_components/AboutPageContent"

export const metadata: Metadata = {
  title: 'About SlateMate | AI for Digital Education',
  description:
    'Learn about SlateMate — our mission to make school life safer, smarter, and more connected for students, parents, and teachers.',
  keywords: ['SlateMate', 'AI in education', 'School safety', 'Parental control'],
  openGraph: {
    title: 'About SlateMate',
    description: 'Smart AI platform for digital safety in education.',
    url: 'https://www.slatemate.in/about',
    siteName: 'SlateMate',
    images: [
      {
        url: 'https://www.slatemate.in/og-image.jpg',
        width: 800,
        height: 600,
        alt: 'SlateMate Overview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <AboutContent />
    </Suspense>
  )
}
