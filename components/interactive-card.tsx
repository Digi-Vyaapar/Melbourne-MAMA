"use client"

import type React from "react"

import { useState, useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface InteractiveCardProps {
  children: ReactNode
  className?: string
  maxTilt?: number
}

export default function InteractiveCard({ children, className = "", maxTilt = 10 }: InteractiveCardProps) {
  const [transform, setTransform] = useState("")
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const card = cardRef.current
    const rect = card.getBoundingClientRect()

    // Calculate mouse position relative to card center
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    // Calculate rotation based on mouse position
    const rotateX = (-y / (rect.height / 2)) * maxTilt
    const rotateY = (x / (rect.width / 2)) * maxTilt

    // Apply transform
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`)
  }

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg)")
  }

  return (
    <div
      ref={cardRef}
      className={cn("transition-transform duration-200", className)}
      style={{ transform }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}
