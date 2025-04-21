import { Suspense } from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navigation/navbar"
import { Footer } from "@/components/navigation/footer"
import { PageTransition } from "@/components/animations/page-transition"
import { Analytics } from "@/components/analytics"
import { Toaster } from "@/components/ui/toaster"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: {
    default: "SlateMate | AI for Safer Digital Learning",
    template: "%s | SlateMate",
  },
  description:
    "AI-powered platform for school safety, parental control, and academic performance.",
  metadataBase: new URL("https://www.slatemate.in"),
  keywords: [
    "SlateMate",
    "School Management System",
    "Parental Control App",
    "Digital Safety for Students",
    "AI in Education",
    "EdTech India",
  ],
  openGraph: {
    siteName: "SlateMate",
    type: "website",
    url: "https://www.slatemate.in",
    title: "SlateMate – AI-Powered School & Parental Control Platform",
    description:
      "Smart learning meets safe browsing. Track, protect, and empower every student.",
    images: [
      {
        url: "https://www.slatemate.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SlateMate – AI dashboard with child safety features and progress tracking",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@slatemate",
    title: "SlateMate – Empowering Schools & Parents with AI",
    description:
      "Smart parental control, real-time student progress & safe digital learning.",
    images: ["https://www.slatemate.in/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://www.slatemate.in",
    languages: {
      "en-IN": "https://www.slatemate.in",
      "hi-IN": "https://www.slatemate.in/hi",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-T6KKHN2L');
            `,
          }}
        />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "SlateMate",
              url: "https://www.slatemate.in",
              logo: "https://www.slatemate.in/logo.png",
              sameAs: [
                "https://twitter.com/slatemate",
                "https://www.linkedin.com/company/slatemate",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${poppins.variable} font-sans bg-background text-foreground antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T6KKHN2L"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <PageTransition>
              <main className="flex-1">{children}</main>
            </PageTransition>
            <Footer />
          </div>
          <Suspense fallback={null}>
            <Analytics />
          </Suspense>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
