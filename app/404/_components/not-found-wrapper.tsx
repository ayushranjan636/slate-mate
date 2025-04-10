"use client"

import { useSearchParams } from "next/navigation"
import NotFoundPageContent from "./not-found-page-content"

export default function NotFoundWrapper() {
  const searchParams = useSearchParams()
  const from = searchParams.get("from")

  return <NotFoundPageContent from={from || undefined} />
}
