import { Suspense } from "react"
import LoginPageContent from "./_components/login-page-content"

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading login...</div>}>
      <LoginPageContent />
    </Suspense>
  )
}
