"use client"
import { useEffect, useState } from "react"

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hidden, setHidden] = useState(true)
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    // Check if it's a touch device
    const isTouchEnabled = 'ontouchstart' in window
    setIsTouchDevice(isTouchEnabled)
    
    if (isTouchEnabled) {
      return
    }

    const updatePosition = (e: { clientX: any; clientY: any }) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setHidden(false)
    }
    
    const handleMouseDown = () => setClicked(true)
    const handleMouseUp = () => setClicked(false)
    const handleMouseEnter = () => setHidden(false)
    const handleMouseLeave = () => setHidden(true)
    const handleLinkHoverStart = () => setLinkHovered(true)
    const handleLinkHoverEnd = () => setLinkHovered(false)
    
    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    window.addEventListener("mouseenter", handleMouseEnter)
    window.addEventListener("mouseleave", handleMouseLeave)
    
    document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
      el.addEventListener("mouseenter", handleLinkHoverStart)
      el.addEventListener("mouseleave", handleLinkHoverEnd)
    })
    
    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("mouseenter", handleMouseEnter)
      window.removeEventListener("mouseleave", handleMouseLeave)
      
      document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
        el.removeEventListener("mouseenter", handleLinkHoverStart)
        el.removeEventListener("mouseleave", handleLinkHoverEnd)
      })
    }
  }, [])
  
  // Don't render anything for touch devices
  if (isTouchDevice) {
    return null
  }
  
  return (
    <div
      className={`custom-cursor ${hidden ? "opacity-0" : "opacity-100"} ${clicked ? "scale-75" : ""} ${linkHovered ? "hover" : ""}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  )
}