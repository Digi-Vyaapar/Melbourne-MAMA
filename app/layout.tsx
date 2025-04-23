import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk, Bebas_Neue } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Cursor from "@/components/cursor"
import Navbar from "@/components/navbar"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
})

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
})

export const metadata: Metadata = {
  title: "MELBOURNE MAMA | Indo-Australian Cultural Powerhouse",
  description:
    "Melbourne MAMA - Connecting, empowering, and representing the Indian community in Australia through media, business, and cultural initiatives.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${bebasNeue.variable} font-sans overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Cursor />
          <Suspense>
            <Navbar />
            {children}
          </Suspense>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
