import { useState, useRef, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { ExplorerIcon, SearchIcon, GitIcon, SettingsIcon } from '../icons'
import { THEMES } from '../hooks/useTheme'

const SHORTCUTS = [
  ['Ctrl P', 'Go to file (command palette)'],
  ['Ctrl `', 'Toggle terminal'],
  ['Ctrl B', 'Toggle sidebar'],
  ['Esc', 'Close overlay'],
  ['↑ / ↓', 'Terminal history'],
]

function Popover({ anchorRef, open, onClose, children }) {
  const [pos, setPos] = useState({ top: 0, left: 0 })
  const boxRef = useRef()

  useEffect(() => {
    if (!open) return
    const id = requestAnimationFrame(() => {
      if (!anchorRef.current || !boxRef.current) return
      const r = anchorRef.current.getBoundingClientRect()
      const bh = boxRef.current.offsetHeight
      const vh = window.innerHeight
      const top = r.top + bh > vh - 16 ? Math.max(8, vh - bh - 16) : r.top
      setPos({ top, left: r.right + 8 })
    })
    return () => cancelAnimationFrame(id)
  }, [open])

  const handleOutside = useCallback((e) => {
    const clickedAnchor = anchorRef.current?.contains(e.target)
    const clickedBox = boxRef.current?.contains(e.target)
    if (!clickedAnchor && !clickedBox) onClose()
  }, [onClose])

  useEffect(() => {
    if (!open) return
    document.addEventListener('pointerdown', handleOutside, true)
    return () => document.removeEventListener('pointerdown', handleOutside, true)
  }, [open, handleOutside])

  if (!open) return null

  return createPortal(
    <div
      ref={boxRef}
      className="fixed z-[9999] w-72 rounded border overflow-y-auto"
      style={{
        top: pos.top,
        left: pos.left,
        maxHeight: 'calc(100vh - 40px)',
        background: 'var(--bg2)',
        borderColor: 'var(--border)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.65)',
      }}
    >
      {children}
    </div>,
    document.body
  )
}

function PanelHeader({ children }) {
  return (
    <div
      className="px-3 py-2 text-[10px] font-bold tracking-widest uppercase sticky top-0 z-10"
      style={{ color: 'var(--dim)', borderBottom: '1px solid var(--border)', background: 'var(--bg2)' }}
    >
      {children}
    </div>
  )
}

function SectionLabel({ children }) {
  return (
    <div className="px-3 pt-3 pb-1 text-[10px] font-bold tracking-widest uppercase"
      style={{ color: 'var(--dim)' }}>
      {children}
    </div>
  )
}

function Divider() {
  return <div className="mx-3 my-1" style={{ borderTop: '1px solid var(--border)' }} />
}

function ResumeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="12" y1="11" x2="12" y2="17" />
      <polyline points="9 14 12 17 15 14" />
    </svg>
  )
}

function CopilotIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5L12 2z" />
    </svg>
  )
}

export default function ActivityBar({
  sidebarOpen,
  onToggleSidebar,
  onOpenCmd,
  onToggleTerm,
  themeId,
  onThemeChange,
  copilotOpen,
  onToggleCopilot,
  mobile = false,
}) {
  const [gitOpen, setGitOpen] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)

  const gitRef = useRef()
  const settingsRef = useRef()

  const bar = mobile
    ? 'bg-vscode-bg3 flex flex-row items-center justify-around px-2 py-1 border-b border-vscode-border'
    : 'bg-vscode-bg4 flex flex-col items-center pt-1 border-r border-vscode-border gap-0.5'

  const handleResumeDownload = () => {
    const link = document.createElement('a')
    link.href = '/Arif_Ishtiaq_Resume.pdf'
    link.download = 'Arif_Ishtiaq_Resume.pdf'
    link.click()
  }

  return (
    <div style={mobile ? {} : { gridArea: 'act' }} className={bar}>

      <Btn icon={<ExplorerIcon />} title="Explorer"
        active={sidebarOpen && !mobile} onClick={onToggleSidebar} />

      <Btn icon={<SearchIcon />} title="Search (Ctrl+P)" onClick={onOpenCmd} />

      {/* Source Control */}
      <div ref={gitRef} className="relative">
        <Btn icon={<GitIcon />} title="Source Control"
          active={gitOpen} onClick={() => setGitOpen(o => !o)} />

        <Popover anchorRef={gitRef} open={gitOpen} onClose={() => setGitOpen(false)}>
          <PanelHeader>Source Control</PanelHeader>

          <div className="px-3 py-2.5 flex items-center gap-2"
            style={{ borderBottom: '1px solid var(--border)' }}>
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="var(--blue)" strokeWidth="2">
              <circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="12" r="3" />
              <path d="M6 9v6M9 12h6" />
            </svg>
            <span className="text-[12px] text-vscode-text font-medium">main</span>
            <span className="ml-auto text-[11px]" style={{ color: 'var(--gcm)' }}>↑ 1 commit ahead</span>
          </div>

          <div className="flex" style={{ borderBottom: '1px solid var(--border)' }}>
            {[['3', 'Modified', '#ce9178'], ['1', 'Added', '#4ec9b0'], ['0', 'Deleted', '#f44747']].map(([n, l, c]) => (
              <div key={l} className="flex-1 py-2 text-center">
                <div className="text-[14px] font-bold" style={{ color: c }}>{n}</div>
                <div className="text-[9px] text-vscode-dim">{l}</div>
              </div>
            ))}
          </div>

          <div className="px-3 py-2 mt-1">
            <a href="https://github.com/mohammad-ishtiaque" target="_blank" rel="noreferrer"
              className="text-[11px] hover:opacity-75 transition-opacity" style={{ color: 'var(--blue)' }}>
              View on GitHub ↗
            </a>
          </div>
        </Popover>
      </div>

      {/* Resume Download */}
      <Btn icon={<ResumeIcon />} title="Download Resume" onClick={handleResumeDownload} />

      {/* ✨ Copilot Chat */}
      <Btn
        icon={<CopilotIcon />}
        title="Arif's Copilot Chat"
        active={copilotOpen}
        onClick={onToggleCopilot}
      />

      {!mobile && <div className="flex-1" />}

      {/* Settings */}
      <div ref={settingsRef} className="relative" style={mobile ? {} : { marginBottom: 4 }}>
        <Btn icon={<SettingsIcon />} title="Settings"
          active={settingsOpen} onClick={() => setSettingsOpen(o => !o)} />

        <Popover anchorRef={settingsRef} open={settingsOpen} onClose={() => setSettingsOpen(false)}>
          <PanelHeader>Settings</PanelHeader>

          <SectionLabel>🎨 Color Theme</SectionLabel>
          {THEMES.map(t => {
            const isActive = t.id === themeId
            return (
              <button
                key={t.id}
                onClick={() => { onThemeChange?.(t.id) }}
                className="w-full flex items-center gap-3 px-3 py-2 text-left text-[12px]
                           transition-colors border-l-2 cursor-pointer"
                style={{
                  background: isActive ? 'rgba(255,255,255,0.08)' : 'transparent',
                  color: isActive ? 'var(--bright)' : 'var(--text)',
                  borderColor: isActive ? t.accent : 'transparent',
                }}
                onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
                onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = 'transparent' }}
              >
                <span className="w-4 h-4 rounded-full flex-shrink-0"
                  style={{ background: t.accent, boxShadow: `0 0 0 2px ${t.accent}44` }} />
                <span className="flex-1">{t.icon} {t.name}</span>
                {isActive && <span className="text-[10px]" style={{ color: t.accent }}>✓</span>}
              </button>
            )
          })}

          <Divider />

          <SectionLabel>⚡ Quick Actions</SectionLabel>
          {[
            { icon: '🔍', label: 'Command Palette', hint: 'Ctrl+P', action: () => { onOpenCmd?.(); setSettingsOpen(false) } },
            { icon: '📟', label: 'Toggle Terminal', hint: 'Ctrl+`', action: () => { onToggleTerm?.(); setSettingsOpen(false) } },
           // { icon: '✨', label: 'Copilot Chat', hint: '', action: () => { onToggleCopilot?.(); setSettingsOpen(false) } },
            { icon: '📄', label: 'Download Resume', hint: '', action: () => { handleResumeDownload(); setSettingsOpen(false) } },
            {
              icon: '🖥️', label: 'Toggle Fullscreen', hint: 'F11',
              action: () => {
                !document.fullscreenElement
                  ? document.documentElement.requestFullscreen?.()
                  : document.exitFullscreen?.()
                setSettingsOpen(false)
              }
            },
          ].map(item => (
            <button
              key={item.label}
              onClick={item.action}
              className="w-full flex items-center gap-3 px-3 py-2 text-left text-[12px] transition-colors"
              style={{ color: 'var(--text)', background: 'transparent' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
            >
              <span className="w-4 text-center flex-shrink-0">{item.icon}</span>
              <span className="flex-1">{item.label}</span>
              {item.hint && <span className="text-[10px] text-vscode-dim">{item.hint}</span>}
            </button>
          ))}

          <Divider />

          <SectionLabel>⌨️ Keyboard Shortcuts</SectionLabel>
          {SHORTCUTS.map(([key, desc]) => (
            <div key={key} className="flex items-center gap-3 px-3 py-1.5">
              <kbd className="text-[10px] px-1.5 py-0.5 rounded border flex-shrink-0"
                style={{ background: 'rgba(255,255,255,0.07)', borderColor: 'var(--border)', color: 'var(--yel)' }}>
                {key}
              </kbd>
              <span className="text-[11px] text-vscode-dim">{desc}</span>
            </div>
          ))}

          <Divider />

          <div className="px-3 py-3">
            <p className="text-[11px] mb-1 text-vscode-dim">Portfolio v3.0 · React + Vite + Tailwind</p>
            <p className="text-[11px] text-vscode-dim">
              Made with 💜 by{' '}
              <a href="https://github.com/mohammad-ishtiaque" target="_blank" rel="noreferrer"
                style={{ color: 'var(--blue)' }} className="hover:opacity-75 transition-opacity">
                Arif Ishtiaq
              </a>
            </p>
          </div>
        </Popover>
      </div>
    </div>
  )
}

function Btn({ icon, title, active = false, onClick }) {
  return (
    <button
      title={title}
      onClick={onClick}
      className={`
        relative w-11 h-11 flex items-center justify-center rounded-md
        transition-colors duration-150 cursor-pointer border-none outline-none
        ${active ? 'text-white ab-active' : 'text-white/40 hover:text-white/85 hover:bg-white/[0.05]'}
      `}
    >
      {icon}
    </button>
  )
}