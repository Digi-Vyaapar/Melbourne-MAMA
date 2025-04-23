export default function MarqueeText({ text, className = "" }: { text: string; className?: string }) {
  // Duplicate the text to create a seamless loop
  const repeatedText = `${text} ${text} ${text} ${text}`

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div className="marquee inline-block">{repeatedText}</div>
    </div>
  )
}
