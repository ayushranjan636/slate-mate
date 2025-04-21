import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Frequently Asked Questions | SlateMate - AI-Powered Learning Platform",
  description: "Find answers to common questions about SlateMate's AI-powered learning platform. Learn about features, pricing, safety measures, and how our personalized learning system works.",
  keywords: "SlateMate FAQ, AI learning platform questions, educational technology FAQ, personalized learning questions, student safety FAQ",
  openGraph: {
    title: "Frequently Asked Questions | SlateMate - AI-Powered Learning Platform",
    description: "Find answers to common questions about SlateMate's AI-powered learning platform. Learn about features, pricing, and safety measures.",
    type: "website",
    url: "https://slatemate.in/faq",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SlateMate FAQ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions | SlateMate - AI-Powered Learning Platform",
    description: "Find answers to common questions about SlateMate's AI-powered learning platform.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://slatemate.in/faq",
  },
}

export default function FAQ() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is SlateMate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SlateMate is an AI-powered learning platform designed to provide personalized educational experiences while maintaining parent-controlled safety features."
        }
      },
      {
        "@type": "Question",
        "name": "How does SlateMate work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SlateMate uses advanced AI technology to create customized learning paths for students, while giving parents control over content and usage through our parent dashboard."
        }
      },
      {
        "@type": "Question",
        "name": "What subjects does SlateMate cover?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SlateMate currently covers core subjects including Mathematics, Science, English, and Social Studies. We're continuously adding new subjects and content."
        }
      },
      {
        "@type": "Question",
        "name": "How does the AI personalization work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our AI system adapts to each student's learning style, pace, and progress, providing customized content and recommendations to optimize their learning experience."
        }
      },
      {
        "@type": "Question",
        "name": "How do you ensure student safety?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We implement multiple layers of safety measures including content filtering, parent controls, and secure data handling practices to ensure a safe learning environment."
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">General Questions</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">What is SlateMate?</h3>
              <p>
                SlateMate is an AI-powered learning platform designed to provide personalized educational 
                experiences while maintaining parent-controlled safety features.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">How does SlateMate work?</h3>
              <p>
                SlateMate uses advanced AI technology to create customized learning paths for students, 
                while giving parents control over content and usage through our parent dashboard.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Features & Functionality</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">What subjects does SlateMate cover?</h3>
              <p>
                SlateMate currently covers core subjects including Mathematics, Science, English, and 
                Social Studies. We're continuously adding new subjects and content.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">How does the AI personalization work?</h3>
              <p>
                Our AI system adapts to each student's learning style, pace, and progress, providing 
                customized content and recommendations to optimize their learning experience.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Safety & Privacy</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">How do you ensure student safety?</h3>
              <p>
                We implement multiple layers of safety measures including content filtering, 
                parent controls, and secure data handling practices to ensure a safe learning environment.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">What data do you collect?</h3>
              <p>
                We collect only necessary information to provide our services and improve the learning 
                experience. All data is handled in accordance with our Privacy Policy.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Support & Contact</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">How can I get help?</h3>
              <p>
                You can reach our support team through email at{" "}
                <a href="mailto:support@slatemate.in" className="text-primary hover:underline">
                  support@slatemate.in
                </a>{" "}
                or call us at +91 73881 80231.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  )
} 
