"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "framer-motion"

interface CounterProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
}

export function Counter({ end, duration = 2000, prefix = "", suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return

    let startTime: number
    let animationFrameId: number

    const startAnimation = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime

      const percentage = Math.min(progress / duration, 1)
      const currentCount = Math.floor(percentage * end)

      setCount(currentCount)

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(startAnimation)
      } else {
        setCount(end)
      }
    }

    animationFrameId = requestAnimationFrame(startAnimation)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [end, duration, inView])

  return (
    <span ref={ref} className="text-4xl font-bold">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}
