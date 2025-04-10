"use client"

import { useRef, useEffect, type ReactNode } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

interface ScrollRevealProps {
  children: ReactNode
  width?: "full" | "auto"
  delay?: number
}

export function ScrollReveal({ children, width = "full", delay = 0 }: ScrollRevealProps) {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
      className={width === "full" ? "w-full" : ""}
    >
      {children}
    </motion.div>
  )
}