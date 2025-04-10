"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react"

export function Analytics() {
  // This component should be wrapped in a Suspense boundary when used
  const pathname = usePathname()
  // The useSearchParams hook requires a Suspense boundary
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Track page view
      console.log("Page view:", pathname + (searchParams.toString() ? `?${searchParams.toString()}` : ""))
    }
  }, [pathname, searchParams])

  return null
}
