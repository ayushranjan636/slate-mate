import { Suspense } from "react"
import NotFoundWrapper from "./_components/not-found-wrapper"

export const metadata = {
  title: "Page Not Found | SlateMate",
  description: "Oops! We couldn't find that page.",
}

export default function NotFoundPage() {
  return (
    <Suspense fallback={<div className="text-center p-20">Loading 404...</div>}>
      <NotFoundWrapper />
    </Suspense>
  )
}
