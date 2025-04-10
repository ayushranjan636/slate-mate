import { Suspense } from "react"
import type { Metadata } from "next"
import LoginPageSearchParams from "./_components/login-search-params" // <— this is important

export const metadata: Metadata = {
  title: "Login | SlateMate",
  description: "Secure login portal for students, parents, and teachers.",
}

export default function LoginPage() {
  return (
    <div className="pt-16 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 py-20">
        <Suspense fallback={<div className="text-center p-20">Loading login...</div>}>
          <LoginPageSearchParams />
        </Suspense>
      </div>
    </div>
  )
}
