import { useState, useEffect } from 'react'
import { FILES } from '../data'
import { FILE_ICONS } from '../icons'
import { THEMES } from '../hooks/useTheme'

const downloadResume = () => {
  const a = document.createElement('a')
  a.href = '/Arif_Ishtiaq_Resume.pdf'
  a.download = 'Arif_Ishtiaq_Resume.pdf'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

const GHIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)
const LIIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)
const MedIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
    <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
  </svg>
)
const TabIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
    <path d="M11.654 0v2.924H9.12V0h2.534zm-5.41 1.21v2.13H4.118V1.21H6.244zm10.91 0v2.13h-2.127V1.21h2.127zm-5.5 3.584v3.327H8.73V4.794h2.924zm-5.5 1.332v2.522H4.03V6.126h2.124zm11 0v2.522h-2.127V6.126h2.127zM.63 6.244v2.13H0v-2.13h.63zm22.74 0v2.13H24v-2.13h-.63zM11.654 9.12v2.924H9.12V9.12h2.534zm-11.024.454v2.13H0v-2.13h.63zm22.74 0v2.13H24v-2.13h-.63zM6.244 10.452v2.522H4.118v-2.522H6.244zm11 0v2.522h-2.127v-2.522h2.127zM11.654 13.956v2.924H9.12v-2.924h2.534zm-11.024.454v2.13H0v-2.13h.63zm22.74 0v2.13H24v-2.13h-.63zM6.244 15.288v2.52H4.118v-2.52H6.244zm11 0v2.52h-2.127v-2.52h2.127zM11.654 18.752v3.324H9.12v-3.324h2.534zm-5.41 1.33v2.13H4.118v-2.13H6.244zm10.91 0v2.13h-2.127v-2.13h2.127zM11.654 21.076V24H9.12v-2.924h2.534z" />
  </svg>
)

const LINKS = [
  { icon: <GHIcon />, label: 'GitHub', href: 'https://github.com/aahanabobade', color: '#e6edf3' },
  { icon: <LIIcon />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/aahana-bobade', color: '#0a66c2' },
  { icon: <MedIcon />, label: 'Medium', href: 'https://medium.com/@aahanabobade', color: '#d0d0d0' },
  { icon: <TabIcon />, label: 'Tableau', href: 'https://public.tableau.com/app/profile/aahana.bobade/vizzes', color: '#e97627' },
]

export default function MobileSidebar({ activeFile, onNavigate, onClose, themeId, onThemeChange, onToggleCopilot }) {
  const [view, setView] = useState('explorer') // 'explorer' | 'settings'

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  const handleFileClick = (file) => {
    if (file.download) { downloadResume(); onClose(); return }
    onNavigate(file.id)
    onClose()
  }

  const handleCopilot = () => {
    onToggleCopilot?.()
    onClose()
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40"
        style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(2px)' }}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className="fixed top-0 left-0 bottom-0 z-50 flex flex-col"
        style={{
          width: '260px',
          background: 'var(--bg2)',
          borderRight: '1px solid var(--border)',
          boxShadow: '8px 0 32px rgba(0,0,0,0.5)',
          animation: 'slideInLeft 0.22s ease',
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-4 py-3 flex-shrink-0"
          style={{ borderBottom: '1px solid var(--border)', background: 'var(--bg3)' }}
        >
          <span className="text-[11px] font-bold tracking-[0.15em] uppercase" style={{ color: 'var(--dim)' }}>
            {view === 'explorer' ? 'Explorer' : 'Settings'}
          </span>
          <div className="flex items-center gap-1">
            <IconBtn active={view === 'settings'} onClick={() => setView(v => v === 'settings' ? 'explorer' : 'settings')} title="Settings">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </IconBtn>
            <IconBtn onClick={onClose} title="Close">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </IconBtn>
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto thin-scroll">

          {/* ── EXPLORER ── */}
          {view === 'explorer' && (
            <>
              <div className="px-4 py-2 text-[10px] font-semibold tracking-widest uppercase" style={{ color: 'var(--dim)' }}>
                📁 arif-ishtiaq
              </div>
              <div className="pb-2">
                {FILES.map(file => {
                  const Icon = FILE_ICONS[file.id]
                  const isActive = activeFile === file.id && !file.download
                  const isResume = !!file.download
                  return (
                    <button
                      key={file.id}
                      onClick={() => handleFileClick(file)}
                      className="w-full flex items-center gap-2.5 px-6 py-2.5 text-xs text-left border-l-2 transition-all group"
                      style={{
                        color: isActive ? 'var(--bright)' : 'var(--dim)',
                        background: isActive ? 'rgba(255,255,255,0.07)' : 'transparent',
                        borderLeftColor: isActive ? 'var(--blue2)' : 'transparent',
                      }}
                      onMouseEnter={e => {
                        if (!isActive) e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                        if (isResume) {
                          e.currentTarget.style.color = '#f44336'
                          e.currentTarget.style.borderLeftColor = '#f44336'
                        } else {
                          e.currentTarget.style.color = 'var(--text)'
                        }
                      }}
                      onMouseLeave={e => {
                        if (!isActive) {
                          e.currentTarget.style.background = 'transparent'
                          e.currentTarget.style.color = 'var(--dim)'
                          e.currentTarget.style.borderLeftColor = 'transparent'
                        }
                      }}
                    >
                      {Icon && <span className="flex-shrink-0"><Icon /></span>}
                      <span className="flex-1">{file.name}</span>
                      {isActive && <span className="text-[9px]" style={{ color: 'var(--blue2)' }}>●</span>}
                      {isResume && <span className="text-[11px] opacity-0 group-hover:opacity-100 transition-opacity">↓</span>}
                    </button>
                  )
                })}
              </div>

              {/* ✨ Copilot button — below file list, subtle purple tint */}
              <div className="px-4 pb-4">
                <button
                  onClick={handleCopilot}
                  className="w-full flex items-center gap-2.5 px-4 py-2.5 text-xs rounded-md transition-all"
                  style={{
                    color: 'var(--dim)',
                    background: 'rgba(110,64,201,0.07)',
                    border: '1px solid rgba(110,64,201,0.2)',
                    textAlign: 'left',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(110,64,201,0.14)'
                    e.currentTarget.style.borderColor = 'rgba(110,64,201,0.4)'
                    e.currentTarget.style.color = '#b48eff'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(110,64,201,0.07)'
                    e.currentTarget.style.borderColor = 'rgba(110,64,201,0.2)'
                    e.currentTarget.style.color = 'var(--dim)'
                  }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                    stroke="#9370db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5L12 2z" />
                  </svg>
                  <span className="flex-1">Ask Aahana's Copilot</span>
                  <span className="text-[10px]" style={{ color: 'var(--dim)' }}>AI</span>
                </button>
              </div>
            </>
          )}

          {/* ── SETTINGS ── */}
          {view === 'settings' && (
            <div className="py-2">

              {/* ✨ Copilot at top of settings */}
              <div className="px-4 pt-3 pb-2">
                <button
                  onClick={handleCopilot}
                  className="w-full flex items-center gap-2.5 px-4 py-2.5 text-[13px] rounded-md transition-all"
                  style={{
                    color: '#b48eff',
                    background: 'rgba(110,64,201,0.1)',
                    border: '1px solid rgba(110,64,201,0.25)',
                    textAlign: 'left',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(110,64,201,0.18)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(110,64,201,0.1)' }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="#b48eff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5L12 2z" />
                  </svg>
                  <span className="flex-1 font-medium">Open Aahana's Copilot</span>
                  <span className="text-[10px]" style={{ color: 'rgba(180,142,255,0.55)' }}>AI ✨</span>
                </button>
              </div>

              <Divider />

              {/* Color Theme */}
              <SectionLabel>🎨 Color Theme</SectionLabel>
              {THEMES.map(t => {
                const isActive = t.id === themeId
                return (
                  <button
                    key={t.id}
                    onClick={() => onThemeChange?.(t.id)}
                    className="w-full flex items-center gap-3 px-5 py-2.5 text-[13px] text-left transition-colors border-l-2 cursor-pointer"
                    style={{
                      background: isActive ? 'rgba(255,255,255,0.07)' : 'transparent',
                      color: isActive ? 'var(--bright)' : 'var(--text)',
                      borderColor: isActive ? t.accent : 'transparent',
                    }}
                    onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
                    onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = 'transparent' }}
                  >
                    <span className="w-4 h-4 rounded-full flex-shrink-0"
                      style={{ background: t.accent, boxShadow: `0 0 0 2px ${t.accent}44` }} />
                    <span className="flex-1">{t.icon} {t.name}</span>
                    {isActive && <span className="text-[11px]" style={{ color: t.accent }}>✓</span>}
                  </button>
                )
              })}

              <Divider />

              {/* Keyboard shortcuts */}
              <SectionLabel>⌨️ Keyboard Shortcuts</SectionLabel>
              {[
                ['Ctrl+P', 'Command palette'],
                ['Ctrl+B', 'Toggle sidebar'],
                ['Ctrl+`', 'Toggle terminal'],
                ['Esc', 'Close overlay'],
                ['↑ / ↓', 'Terminal history'],
              ].map(([key, desc]) => (
                <div key={key} className="flex items-center gap-3 px-5 py-1.5">
                  <kbd className="text-[10px] px-1.5 py-0.5 rounded border flex-shrink-0"
                    style={{ background: 'rgba(255,255,255,0.06)', borderColor: 'var(--border)', color: 'var(--yel)' }}>
                    {key}
                  </kbd>
                  <span className="text-[12px]" style={{ color: 'var(--dim)' }}>{desc}</span>
                </div>
              ))}

              <Divider />

              {/* Links */}
              <SectionLabel>🌐 Links</SectionLabel>
              {LINKS.map(({ icon, label, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 px-5 py-2.5 text-[13px] no-underline transition-all"
                  style={{ color: 'var(--dim)' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = 'var(--bright)'
                    e.currentTarget.style.background = color + '15'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'var(--dim)'
                    e.currentTarget.style.background = 'transparent'
                  }}
                >
                  <span style={{ color, display: 'flex', alignItems: 'center', flexShrink: 0 }}>{icon}</span>
                  <span className="flex-1">{label}</span>
                  <span className="text-[11px] opacity-40">↗</span>
                </a>
              ))}

              <Divider />

              <div className="px-5 py-3">
                <p className="text-[11px] mb-1" style={{ color: 'var(--dim)' }}>Portfolio v3.0 · React + Vite + Tailwind</p>
                <p className="text-[11px]" style={{ color: 'var(--dim)' }}>
                  Made with 💜 by{' '}
                  <a href="https://github.com/mohammad-ishtiaque" target="_blank" rel="noreferrer" style={{ color: 'var(--blue)' }}>
                    Arif Ishtiaq
                  </a>
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-3 flex items-center gap-2 text-[11px] flex-shrink-0"
          style={{ borderTop: '1px solid var(--border)', color: 'var(--dim)' }}>
          <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="12" r="3" /><path d="M6 9v6M9 12h6" />
          </svg>
          <span style={{ color: 'var(--text)' }}>⎇ main</span>
          <span className="ml-auto" style={{ color: 'var(--gcm)' }}>↑1</span>
        </div>
      </div>

      <style>{`
        @keyframes slideInLeft {
          from { transform: translateX(-100%); opacity: 0; }
          to   { transform: translateX(0);     opacity: 1; }
        }
      `}</style>
    </>
  )
}

function IconBtn({ children, onClick, title, active = false }) {
  return (
    <button onClick={onClick} title={title}
      className="w-7 h-7 flex items-center justify-center rounded transition-colors"
      style={{ color: active ? 'var(--bright)' : 'rgba(255,255,255,0.4)', background: active ? 'rgba(255,255,255,0.08)' : 'transparent' }}
      onMouseEnter={e => { e.currentTarget.style.color = 'var(--bright)'; if (!active) e.currentTarget.style.background = 'rgba(255,255,255,0.06)' }}
      onMouseLeave={e => { e.currentTarget.style.color = active ? 'var(--bright)' : 'rgba(255,255,255,0.4)'; if (!active) e.currentTarget.style.background = 'transparent' }}
    >
      {children}
    </button>
  )
}

function SectionLabel({ children }) {
  return (
    <div className="px-5 pt-3 pb-1.5 text-[10px] font-bold tracking-[0.15em] uppercase" style={{ color: 'var(--dim)' }}>
      {children}
    </div>
  )
}

function Divider() {
  return <div className="mx-4 my-1" style={{ borderTop: '1px solid var(--border)' }} />
}