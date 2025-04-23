"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface ParallaxSectionProps {
  children: ReactNode
  speed?: number
  className?: string
}

export default function ParallaxSection({ children, speed = 0.5, className = "" }: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return

    const handleScroll = () => {
      const scrollTop = window.scrollY
      const sectionTop = sectionRef.current!.offsetTop
      const sectionHeight = sectionRef.current!.offsetHeight

      // Calculate how far the section is from the viewport top
      const distanceFromTop = scrollTop - sectionTop

      // Only apply parallax when the section is in view
      if (distanceFromTop > -window.innerHeight && distanceFromTop < sectionHeight) {
        // Apply parallax effect
        const parallaxOffset = distanceFromTop * speed
        contentRef.current!.style.transform = `translateY(${parallaxOffset}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return (
    <div ref={sectionRef} className={`parallax-container ${className}`}>
      <div ref={contentRef} className="parallax-bg">
        {children}
      </div>
    </div>
  )
}
