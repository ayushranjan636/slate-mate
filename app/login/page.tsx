"use client"

import { Suspense } from "react"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LoginSearchParams from "./_components/login-search-params"

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      router.push("/")
    }, 1500)
  }

  return (
    <div className="pt-16 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto w-full max-w-md"
        >
          <div className="bg-card rounded-xl border shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
                <p className="text-foreground/70">Sign in to access your SlateMate account</p>

                <Suspense fallback={null}>
                  <LoginSearchParams />
                </Suspense>
              </div>

              <Tabs defaultValue="email" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="email">Email</TabsTrigger>
                  <TabsTrigger value="school">School ID</TabsTrigger>
                </TabsList>

                <TabsContent value="email">
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your@email.com" required className="h-11" />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password">Password</Label>
                        <Link href="/forgot-password" className="text-sm text-electric hover:underline">
                          Forgot password?
                        </Link>
                      </div>
                      <Input id="password" type="password" placeholder="••••••••" required className="h-11" />
                    </div>

                    <Button variant="glow" className="w-full h-11" disabled={isLoading}>
                      {isLoading ? "Signing in..." : "Sign In"}
                    </Button>

                    <div className="text-center text-sm">
                      <span className="text-muted-foreground">Don't have an account? </span>
                      <Link href="/signup" className="text-electric hover:underline">
                        Sign up
                      </Link>
                    </div>
                  </form>
                </TabsContent>

                <TabsContent value="school">
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="school-id">School ID</Label>
                      <Input id="school-id" placeholder="Enter your school ID" required className="h-11" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="student-id">Student ID</Label>
                      <Input id="student-id" placeholder="Enter your student ID" required className="h-11" />
                    </div>

                    <Button variant="glow" className="w-full h-11" disabled={isLoading}>
                      {isLoading ? "Signing in..." : "Sign In with School ID"}
                    </Button>

                    <div className="text-center text-sm">
                      <span className="text-muted-foreground">Need help? </span>
                      <Link href="/help" className="text-electric hover:underline">
                        Contact support
                      </Link>
                    </div>
                  </form>
                </TabsContent>
              </Tabs>
            </div>

            <div className="px-8 py-4 bg-muted/30 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
              <span className="text-foreground/70">Protected by SSL encryption</span>
              <div className="flex gap-4">
                <Link href="/privacy" className="text-electric hover:underline">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-electric hover:underline">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
