import { Metadata } from "next"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Careers | SlateMate - Join Our AI-Powered Learning Team",
  description: "Join SlateMate's team and help shape the future of AI-powered education. Explore current job openings for AI/ML Engineers, Frontend Developers, and Content Developers.",
  keywords: "SlateMate careers, AI learning platform jobs, educational technology careers, remote jobs, AI education jobs",
  openGraph: {
    title: "Careers | SlateMate - Join Our AI-Powered Learning Team",
    description: "Join SlateMate's team and help shape the future of AI-powered education. Explore current job openings and opportunities.",
    type: "website",
    url: "https://slatemate.in/careers",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SlateMate Careers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | SlateMate - Join Our AI-Powered Learning Team",
    description: "Join SlateMate's team and help shape the future of AI-powered education.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://slatemate.in/careers",
  },
}

export default function Careers() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "AI/ML Engineer",
    "description": "We're looking for an AI/ML Engineer to help develop and improve our learning algorithms. You'll work on creating personalized learning experiences using state-of-the-art AI models.",
    "datePosted": new Date().toISOString(),
    "employmentType": "FULL_TIME",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "SlateMate",
      "sameAs": "https://slatemate.in",
      "logo": "https://slatemate.in/logo.png"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      }
    },
    "applicantLocationRequirements": {
      "@type": "Country",
      "name": "India"
    },
    "jobLocationType": "TELECOMMUTE"
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Join Our Team</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Why Work at SlateMate?</h2>
            <p className="mb-4">
              At SlateMate, we're building the future of education with AI. We're looking for passionate 
              individuals who want to make a difference in how students learn and grow.
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Work on cutting-edge AI technology</li>
              <li>Make a real impact on education</li>
              <li>Collaborative and innovative environment</li>
              <li>Competitive compensation and benefits</li>
              <li>Flexible work arrangements</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Current Openings</h2>
            
            <div className="space-y-8">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">AI/ML Engineer</h3>
                <p className="text-muted-foreground mb-4">Full-time • Remote</p>
                <p className="mb-4">
                  We're looking for an AI/ML Engineer to help develop and improve our learning algorithms. 
                  You'll work on creating personalized learning experiences using state-of-the-art AI models.
                </p>
                <Button asChild>
                  <a href="mailto:careers@slatemate.in?subject=Application for AI/ML Engineer">
                    Apply Now
                  </a>
                </Button>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Frontend Developer</h3>
                <p className="text-muted-foreground mb-4">Full-time • Remote</p>
                <p className="mb-4">
                  Join our frontend team to build beautiful, responsive, and accessible user interfaces 
                  for our learning platform. Experience with React and Next.js preferred.
                </p>
                <Button asChild>
                  <a href="mailto:careers@slatemate.in?subject=Application for Frontend Developer">
                    Apply Now
                  </a>
                </Button>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Content Developer</h3>
                <p className="text-muted-foreground mb-4">Full-time • Remote</p>
                <p className="mb-4">
                  Help create engaging educational content for our platform. We're looking for someone 
                  with experience in curriculum development and a passion for education.
                </p>
                <Button asChild>
                  <a href="mailto:careers@slatemate.in?subject=Application for Content Developer">
                    Apply Now
                  </a>
                </Button>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How to Apply</h2>
            <p className="mb-4">
              To apply for any of our open positions, please send your resume and a cover letter to{" "}
              <a href="mailto:careers@slatemate.in" className="text-primary hover:underline">
                careers@slatemate.in
              </a>
              . Make sure to include the position you're applying for in the subject line.
            </p>
          </section>
        </div>
      </div>
    </>
  )
} 
