import { Suspense } from "react"
import type React from "react"
import { Poppins } from "next/font/google"
import type { Metadata } from "next"
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
    images: '/og-image.jpg',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@slatemate',
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans bg-background text-foreground antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
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
