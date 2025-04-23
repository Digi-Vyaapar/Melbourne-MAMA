"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface SplitTextRevealProps {
  children: ReactNode
  className?: string
  type?: "char" | "word" | "line"
  threshold?: number
  delay?: number
}

export default function SplitTextReveal({
  children,
  className = "",
  type = "word",
  threshold = 0.1,
  delay = 0,
}: SplitTextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const text = container.textContent || ""
    container.textContent = ""

    const elements: HTMLElement[] = []

    if (type === "char") {
      // Split by character
      text.split("").forEach((char) => {
        const span = document.createElement("span")
        span.textContent = char
        span.className = "char-by-char"
        container.appendChild(span)
        elements.push(span)
      })
    } else if (type === "word") {
      // Split by word
      text.split(" ").forEach((word, i) => {
        const span = document.createElement("span")
        span.textContent = word
        span.className = "word-by-word"
        container.appendChild(span)

        // Add space after each word except the last one
        if (i < text.split(" ").length - 1) {
          container.appendChild(document.createTextNode(" "))
        }

        elements.push(span)
      })
    } else if (type === "line") {
      // Split by line (assumes text has \n characters)
      text.split("\n").forEach((line) => {
        const div = document.createElement("div")
        div.textContent = line
        div.className = "line-by-line"
        container.appendChild(div)
        elements.push(div)
      })
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            elements.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("visible")
              }, i * 50) // Stagger the animation
            })
          }, delay)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    observer.observe(container)

    return () => {
      observer.disconnect()
    }
  }, [children, type, threshold, delay])

  return (
    <div ref={containerRef} className={`split-text-container ${className}`}>
      {children}
    </div>
  )
}
