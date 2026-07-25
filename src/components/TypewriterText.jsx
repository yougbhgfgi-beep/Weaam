import { useState, useEffect } from 'react'

export default function TypewriterText({ lines, speed = 30, lineDelay = 400, className = '' }) {
  const [visibleLines, setVisibleLines] = useState(0)
  const [charCount, setCharCount] = useState(0)

  useEffect(() => {
    if (visibleLines >= lines.length) return

    const currentLine = lines[visibleLines]
    if (charCount < currentLine.length) {
      const timer = setTimeout(() => setCharCount(c => c + 1), speed)
      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => {
        setVisibleLines(v => v + 1)
        setCharCount(0)
      }, lineDelay)
      return () => clearTimeout(timer)
    }
  }, [visibleLines, charCount, lines, speed, lineDelay])

  return (
    <div className={className}>
      {lines.map((line, i) => {
        if (i > visibleLines) return null
        const text = i === visibleLines ? line.slice(0, charCount) : line
        return (
          <p key={i} className={i === lines.length - 1 ? 'text-center text-3xl sm:text-4xl mt-6 md:mt-8' : ''}>
            {text}
            {i === visibleLines && <span className="inline-block w-0.5 h-1em bg-gray-700 animate-pulse ml-0.5 align-middle" />}
          </p>
        )
      })}
    </div>
  )
}
