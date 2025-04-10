import { Suspense } from "react"
import LoginPageContent from "./_components/login-page-content"

export const metadata = {
  title: "Login | SlateMate",
  description: "Secure login portal for students, parents, and teachers.",
}

export default function LoginPage() {
  return (
    <div className="pt-16 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 py-20">
        <Suspense fallback={<div className="text-center p-20">Loading login...</div>}>
          <LoginPageContent />
        </Suspense>
      </div>
    </div>
  )
}
