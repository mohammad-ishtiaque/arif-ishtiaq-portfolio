import { useEffect } from 'react'

export function useReveal(dep) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    els.forEach((el, i) =>
      setTimeout(() => el.classList.add('in'), i * 70)
    )
  }, [dep])
}
