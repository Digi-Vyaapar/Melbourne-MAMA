"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface RevealProps {
  children: ReactNode
  className?: string
  threshold?: number
  delay?: number
  staggered?: boolean
}

export default function RevealOnScroll({
  children,
  className = "",
  threshold = 0.1,
  delay = 0,
  staggered = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            if (ref.current) {
              ref.current.classList.add("visible")
            }
          }, delay)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold, delay])

  return (
    <div ref={ref} className={`${staggered ? "staggered-reveal" : "reveal-text"} ${className}`}>
      {children}
    </div>
  )
}
