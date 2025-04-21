import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | SlateMate - AI-Powered Learning Platform",
  description: "Read our comprehensive terms of service to understand the rules and guidelines for using SlateMate's AI-powered learning platform. Learn about user responsibilities, service usage, and intellectual property rights.",
  keywords: "SlateMate terms of service, AI learning platform terms, educational technology terms, user agreement, service terms",
  openGraph: {
    title: "Terms of Service | SlateMate - AI-Powered Learning Platform",
    description: "Read our comprehensive terms of service to understand the rules and guidelines for using SlateMate's AI-powered learning platform.",
    type: "website",
    url: "https://slatemate.in/terms",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SlateMate Terms of Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | SlateMate - AI-Powered Learning Platform",
    description: "Read our comprehensive terms of service to understand the rules and guidelines for using SlateMate.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://slatemate.in/terms",
  },
}

export default function TermsOfService() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Service",
    "description": "Terms of Service for SlateMate AI-Powered Learning Platform",
    "publisher": {
      "@type": "Organization",
      "name": "SlateMate",
      "logo": {
        "@type": "ImageObject",
        "url": "https://slatemate.in/logo.png"
      }
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Terms of Service",
      "datePublished": "2024-01-01",
      "dateModified": new Date().toISOString().split('T')[0],
      "author": {
        "@type": "Organization",
        "name": "SlateMate"
      }
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using SlateMate, you agree to be bound by these Terms of Service. 
              If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. User Accounts</h2>
            <p>
              To access certain features of our service, you may be required to create an account. 
              You are responsible for maintaining the confidentiality of your account information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Service Usage</h2>
            <p>
              You agree to use our services only for lawful purposes and in accordance with these terms. 
              Prohibited activities include:
            </p>
            <ul className="list-disc pl-6">
              <li>Violating any applicable laws or regulations</li>
              <li>Infringing on intellectual property rights</li>
              <li>Transmitting harmful or malicious content</li>
              <li>Attempting to gain unauthorized access</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
            <p>
              All content and materials available on SlateMate are protected by intellectual property rights. 
              You may not use, reproduce, or distribute any content without our permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
            <p>
              SlateMate shall not be liable for any indirect, incidental, special, consequential, 
              or punitive damages resulting from your use of our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Contact Information</h2>
            <p>
              For any questions regarding these Terms of Service, please contact us at:
              <br />
              <a href="mailto:info@slatemate.in" className="text-primary hover:underline">
                info@slatemate.in
              </a>
            </p>
          </section>
        </div>
      </div>
    </>
  )
} 
