"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function NotFoundPageContent() {
  const params = useSearchParams()
  const from = params.get("from")

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center text-center py-20"
    >
      <h1 className="text-5xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-foreground/70 mb-8 text-lg">
        We couldn't find what you were looking for{from ? ` from "${from}"` : ""}.
      </p>

      <Button asChild variant="glow">
        <Link href="/">Go back home</Link>
      </Button>
    </motion.div>
  )
}
