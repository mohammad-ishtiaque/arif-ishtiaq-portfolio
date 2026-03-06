import { useState, useRef, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { THEMES } from '../hooks/useTheme'

export default function ThemePicker({ themeId, onSelect }) {
  const [open, setOpen] = useState(false)
  const [pos,  setPos]  = useState({ bottom: 0, right: 0 })
  const btnRef      = useRef()
  const dropdownRef = useRef()

  // Recalculate position whenever the dropdown opens
  useEffect(() => {
    if (!open || !btnRef.current) return
    const id = requestAnimationFrame(() => {
      if (!btnRef.current || !dropdownRef.current) return
      const r = btnRef.current.getBoundingClientRect()
      setPos({
        bottom: window.innerHeight - r.top + 8,
        right:  window.innerWidth  - r.right,
      })
    })
    return () => cancelAnimationFrame(id)
  }, [open])

  // ── THE FIX ──────────────────────────────────────────────────────────────
  // Use pointerdown in CAPTURE phase so we intercept before any child handler.
  // This correctly identifies clicks inside the portal dropdown via DOM contains().
  // Using 'mousedown' (bubble phase) was the root cause — it fired before onClick
  // on theme buttons, closing the menu and swallowing the selection.
  const handleOutside = useCallback((e) => {
    const inBtn      = btnRef.current?.contains(e.target)
    const inDropdown = dropdownRef.current?.contains(e.target)
    if (!inBtn && !inDropdown) setOpen(false)
  }, [])

  useEffect(() => {
    if (!open) return
    document.addEventListener('pointerdown', handleOutside, true) // capture = true
    return () => document.removeEventListener('pointerdown', handleOutside, true)
  }, [open, handleOutside])
  // ─────────────────────────────────────────────────────────────────────────

  const current = THEMES.find(t => t.id === themeId) ?? THEMES[0]

  return (
    <>
      {/* Trigger button */}
      <button
        ref={btnRef}
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-1.5 px-1.5 py-0.5 rounded-sm
                   hover:bg-white/15 transition-colors
                   text-[11px] text-white/85 whitespace-nowrap"
        title="Change theme"
      >
        <span>{current.icon}</span>
        <span>{current.name}</span>
        <span className="opacity-50 text-[9px]">{open ? '▼' : '▲'}</span>
      </button>

      {/* Dropdown via Portal */}
      {open && createPortal(
        <div
          ref={dropdownRef}
          className="fixed w-52 rounded overflow-hidden border z-[9999]"
          style={{
            bottom:      pos.bottom,
            right:       pos.right,
            background:  'var(--bg3)',
            borderColor: 'var(--border)',
            boxShadow:   '0 8px 32px rgba(0,0,0,0.7)',
          }}
        >
          {/* Header */}
          <div
            className="px-3 py-2 text-[10px] font-bold tracking-widest uppercase"
            style={{ color: 'var(--dim)', borderBottom: '1px solid var(--border)' }}
          >
            Color Theme
          </div>

          {/* Theme list */}
          {THEMES.map(t => {
            const isActive = t.id === themeId
            return (
              <button
                key={t.id}
                onClick={() => { onSelect(t.id); setOpen(false) }}
                className="w-full flex items-center gap-3 px-3 py-2 text-left
                           text-[12px] transition-colors cursor-pointer"
                style={{
                  background:  isActive ? 'rgba(255,255,255,0.08)' : 'transparent',
                  color:       isActive ? 'var(--bright)' : 'var(--text)',
                  borderLeft:  isActive ? `2px solid ${t.accent}` : '2px solid transparent',
                }}
                onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
                onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = 'transparent' }}
              >
                <span
                  className="w-4 h-4 rounded-full flex-shrink-0"
                  style={{ background: t.accent, boxShadow: `0 0 0 2px ${t.accent}44` }}
                />
                <span className="flex-1">{t.icon} {t.name}</span>
                {isActive && (
                  <span className="text-[10px]" style={{ color: t.accent }}>✓</span>
                )}
              </button>
            )
          })}
        </div>,
        document.body
      )}
    </>
  )
}