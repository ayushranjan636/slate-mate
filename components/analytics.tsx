"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react"

export function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Track page view
      console.log("Page view:", pathname + searchParams.toString())
    }
  }, [pathname, searchParams])

  return null
}
