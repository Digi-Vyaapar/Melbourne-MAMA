"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center pt-20 px-4">
      <div className="noise" />

      <div className="max-w-md text-center">
        <h1 className="font-heading text-9xl mb-4 glitch" data-text="404">
          <span className="text-primary">4</span>0<span className="text-primary">4</span>
        </h1>

        <h2 className="font-heading text-4xl mb-6">PAGE NOT FOUND</h2>

        <p className="text-xl mb-8 text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Button asChild className="brutalist-button text-lg px-8 py-6">
          <Link href="/">BACK TO HOME</Link>
        </Button>
      </div>
    </main>
  )
}
