import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | SlateMate - AI-Powered Learning Platform",
  description: "Learn how SlateMate protects your privacy and handles your data. Our comprehensive privacy policy covers data collection, usage, and security measures for our AI-powered learning platform.",
  keywords: "SlateMate privacy policy, data protection, student privacy, AI learning platform privacy, educational technology privacy",
  openGraph: {
    title: "Privacy Policy | SlateMate - AI-Powered Learning Platform",
    description: "Learn how SlateMate protects your privacy and handles your data. Our comprehensive privacy policy covers data collection, usage, and security measures.",
    type: "website",
    url: "https://slatemate.in/privacy",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SlateMate Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | SlateMate - AI-Powered Learning Platform",
    description: "Learn how SlateMate protects your privacy and handles your data.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://slatemate.in/privacy",
  },
}

export default function PrivacyPolicy() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy",
    "description": "Privacy Policy for SlateMate AI-Powered Learning Platform",
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
      "headline": "Privacy Policy",
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
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p>
              At SlateMate, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
              disclose, and safeguard your information when you use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, including but not limited to:
            </p>
            <ul className="list-disc pl-6">
              <li>Name and contact information</li>
              <li>Account credentials</li>
              <li>Payment information</li>
              <li>Usage data and preferences</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p>
              We use the collected information to:
            </p>
            <ul className="list-disc pl-6">
              <li>Provide and maintain our services</li>
              <li>Improve user experience</li>
              <li>Process transactions</li>
              <li>Send periodic emails</li>
              <li>Ensure platform security</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information from 
              unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
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
