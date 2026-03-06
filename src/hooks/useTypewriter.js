import { useState, useEffect } from 'react'

export function useTypewriter(lines, speed = 70, pause = 2000) {
  const [text, setText] = useState('')
  const [li,   setLi]   = useState(0)
  const [ci,   setCi]   = useState(0)
  const [del,  setDel]  = useState(false)

  useEffect(() => {
    const line = lines[li]
    const t = setTimeout(() => {
      if (!del) {
        setText(line.slice(0, ci + 1))
        if (ci + 1 >= line.length) {
          setTimeout(() => setDel(true), pause)
          return
        }
        setCi(c => c + 1)
      } else {
        setText(line.slice(0, ci - 1))
        if (ci - 1 <= 0) {
          setDel(false)
          setLi(i => (i + 1) % lines.length)
          setCi(0)
          return
        }
        setCi(c => c - 1)
      }
    }, del ? 28 : speed)

    return () => clearTimeout(t)
  }, [ci, del, li, lines, speed, pause])

  return text
}
