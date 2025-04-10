"use client"

import type React from "react"

import { useState, useRef, type ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TiltCardProps {
  children: ReactNode
  className?: string
  glareEnabled?: boolean
  tiltAmount?: number
  scale?: number
}

export function TiltCard({ children, className, glareEnabled = false, tiltAmount = 10, scale = 1.05 }: TiltCardProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const tiltX = ((y - centerY) / centerY) * tiltAmount
    const tiltY = ((centerX - x) / centerX) * tiltAmount

    setTilt({ x: tiltX, y: tiltY })
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    setTilt({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y,
        scale: isHovering ? scale : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 20,
      }}
      style={{ transformStyle: "preserve-3d" }}
      className={cn("relative rounded-lg bg-card text-card-foreground overflow-hidden", className)}
    >
      <div style={{ transform: "translateZ(20px)" }}>{children}</div>

      {glareEnabled && isHovering && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${tilt.x}% ${tilt.y}%, rgba(255,255,255,0.1) 0%, transparent 80%)`,
            transform: "translateZ(20px)",
          }}
        />
      )}
    </motion.div>
  )
}
