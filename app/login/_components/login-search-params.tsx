"use client"

import { useSearchParams } from "next/navigation"

export default function LoginSearchParams() {
  const searchParams = useSearchParams()
  const redirect = searchParams.get("redirect")

  if (!redirect) return null

  return (
    <p className="text-sm text-muted-foreground mt-2">
      After login, you'll be redirected to: <strong>{redirect}</strong>
    </p>
  )
}
