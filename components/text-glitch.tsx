interface TextGlitchProps {
  text: string
  className?: string
}

export default function TextGlitch({ text, className = "" }: TextGlitchProps) {
  return (
    <span className={`glitch ${className}`} data-text={text}>
      {text}
    </span>
  )
}
