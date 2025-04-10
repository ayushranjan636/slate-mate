import { Suspense } from "react"
import NotFoundPageContent from "./_components/not-found-page-content"

export const metadata = {
  title: "Page Not Found | SlateMate",
  description: "Oops! We couldn't find that page.",
}

export default function NotFoundPage() {
  return (
    <Suspense fallback={<div className="text-center p-20">Loading...</div>}>
      <NotFoundPageContent />
    </Suspense>
  )
}
