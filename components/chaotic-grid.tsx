"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ChaoticGridProps {
  children: ReactNode[]
  className?: string
}

export default function ChaoticGrid({ children, className = "" }: ChaoticGridProps) {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!gridRef.current) return

    const items = gridRef.current.children

    // Randomize grid placement for each child
    for (let i = 0; i < items.length; i++) {
      const item = items[i] as HTMLElement

      // Random grid column span (1-3)
      const colSpan = Math.floor(Math.random() * 3) + 1
      item.style.gridColumn = `span ${colSpan}`

      // Random grid row span (1-2)
      const rowSpan = Math.floor(Math.random() * 2) + 1
      item.style.gridRow = `span ${rowSpan}`

      // Random rotation (-5 to 5 degrees)
      const rotation = Math.random() * 10 - 5
      item.style.transform = `rotate(${rotation}deg)`

      // Random z-index for overlapping effect
      item.style.zIndex = `${Math.floor(Math.random() * 10)}`
    }
  }, [children])

  return (
    <div ref={gridRef} className={cn("chaotic-grid", className)}>
      {children}
    </div>
  )
}
