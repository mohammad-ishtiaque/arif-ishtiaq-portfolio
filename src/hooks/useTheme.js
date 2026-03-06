import { useState, useEffect } from 'react'

export const THEMES = [
  { id: 'default', name: 'Arif Dark', icon: '💜', accent: '#007acc' },
  { id: 'rose-pine', name: 'Rosé Pine', icon: '🌸', accent: '#eb6f92' },
  { id: 'tokyo-night', name: 'Tokyo Night', icon: '🌃', accent: '#7aa2f7' },
  { id: 'catppuccin', name: 'Catppuccin', icon: '🐱', accent: '#cba6f7' },
  { id: 'nord', name: 'Nord', icon: '🧊', accent: '#88c0d0' },
  { id: 'gruvbox', name: 'Gruvbox', icon: '🔥', accent: '#fabd2f' },
]

const STORAGE_KEY = 'arif-portfolio-theme'

export function useTheme() {
  const [themeId, setThemeId] = useState(
    () => localStorage.getItem(STORAGE_KEY) || 'default'
  )

  useEffect(() => {
    // Set data-theme on <html> — CSS selectors in index.css do the rest
    const root = document.documentElement
    if (themeId === 'default') {
      root.removeAttribute('data-theme')
    } else {
      root.setAttribute('data-theme', themeId)
    }
    localStorage.setItem(STORAGE_KEY, themeId)
  }, [themeId])

  return { themeId, setThemeId, themes: THEMES }
}