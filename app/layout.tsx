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
    default: 'SlateMate | AI for Safer Digital Learning',
    template: '%s | SlateMate',
  },
  description: 'AI-powered platform for school safety, parental control, and academic performance.',
  metadataBase: new URL('https://www.slatemate.in'),
  openGraph: {
    siteName: 'SlateMate',
    type: 'website',
    url: 'https://www.slatemate.in',
    images: [
      {
        url: 'https://www.slatemate.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SlateMate OG Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@slatemate',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        {/* Meta charset for better SEO */}
        <meta charSet="utf-8" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SlateMate",
              url: "https://www.slatemate.in",
              logo: "https://www.slatemate.in/logo.png",
              sameAs: [
                "https://twitter.com/slatemate",
                "https://www.linkedin.com/company/slatemate"
              ],
            }),
          }}
        />
      </head>
      <body className={`${poppins.variable} font-sans bg-background text-foreground antialiased`}>
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
