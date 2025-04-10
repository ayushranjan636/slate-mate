"use client"

import { useSearchParams } from "next/navigation"
import LoginPageContent from "./login-page-content"

export default function LoginPageSearchParams() {
  const searchParams = useSearchParams()
  const redirect = searchParams.get("redirect")

  return <LoginPageContent redirect={redirect || undefined} />
}
