"use client"
export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
      <div className="noise" />

      <div className="text-center">
        <h2 className="font-heading text-5xl mb-6 animate-pulse">
          MELBOURNE <span className="text-primary">MAMA</span>
        </h2>

        <div className="flex gap-2 justify-center">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-4 h-4 rounded-full bg-primary animate-bounce"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
