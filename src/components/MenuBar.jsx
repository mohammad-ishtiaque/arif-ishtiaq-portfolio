import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { FILES } from '../data'

function MenuDropdown({ anchorRef, open, onClose, children }) {
  const [pos, setPos] = useState({ top: 0, left: 0 })
  const boxRef = useRef()

  useEffect(() => {
    if (!open || !anchorRef.current) return
    const r = anchorRef.current.getBoundingClientRect()
    setPos({ top: r.bottom + 1, left: r.left })
  }, [open])

  useEffect(() => {
    if (!open) return
    const h = (e) => {
      if (!anchorRef.current?.contains(e.target) && !boxRef.current?.contains(e.target)) onClose()
    }
    document.addEventListener('mousedown', h)
    return () => document.removeEventListener('mousedown', h)
  }, [open])

  if (!open) return null

  return createPortal(
    <div
      ref={boxRef}
      className="fixed z-[9999] min-w-[200px] rounded border animate-fade-in py-0.5"
      style={{
        top: pos.top,
        left: pos.left,
        background: 'var(--bg3)',
        borderColor: 'var(--border)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.65)',
      }}
    >
      {children}
    </div>,
    document.body
  )
}

function Item({ label, shortcut, onClick, disabled = false, danger = false, highlight = false }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-full flex items-center gap-2 px-4 py-[5px] text-[12px] text-left
                 transition-colors disabled:opacity-35 cursor-pointer border-none outline-none"
      style={{
        color: danger ? 'var(--red)' : highlight ? '#b48eff' : 'var(--text)',
        background: 'transparent',
      }}
      onMouseEnter={e => { if (!disabled) e.currentTarget.style.background = 'var(--blue2)' }}
      onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
    >
      <span className="flex-1">{label}</span>
      {shortcut && (
        <span className="text-[10px]" style={{ color: 'var(--dim)' }}>{shortcut}</span>
      )}
    </button>
  )
}

function Sep() {
  return <div className="my-0.5 border-t" style={{ borderColor: 'var(--border)' }} />
}

function SectionLabel({ children }) {
  return (
    <div className="px-4 pt-1.5 pb-0.5 text-[10px] tracking-widest uppercase"
      style={{ color: 'var(--dim)' }}>
      {children}
    </div>
  )
}

export default function MenuBar({
  onToggleTerm,
  onOpenCmd,
  onNavigate,
  onToggleSidebar,
  onToggleCopilot,
  copilotOpen,
  activeFile,
  openTabs,
  onCloseTab,
  onCloseAllTabs,
}) {
  const [openMenu, setOpenMenu] = useState(null)

  const refs = {
    file: useRef(),
    edit: useRef(),
    view: useRef(),
    go: useRef(),
    run: useRef(),
    terminal: useRef(),
    help: useRef(),
  }

  const toggle = (key) => setOpenMenu(o => o === key ? null : key)
  const close = () => setOpenMenu(null)
  const act = (fn) => { fn?.(); close() }

  const menuBtn = 'px-2 py-0.5 rounded text-xs text-vscode-text cursor-pointer ' +
    'hover:bg-white/[0.08] transition-colors select-none'

  return (
    <div
      style={{ gridArea: 'menu' }}
      className="bg-vscode-bg3 flex items-center gap-0.5 px-2 border-b border-vscode-border"
    >
      {/* ── File ── */}
      <div ref={refs.file}>
        <button className={menuBtn} onClick={() => toggle('file')}>File</button>
        <MenuDropdown anchorRef={refs.file} open={openMenu === 'file'} onClose={close}>
          <Item label="New Tab" shortcut="Ctrl+T" onClick={() => act(() => onNavigate?.('home'))} />
          <Item label="Open File…" shortcut="Ctrl+P" onClick={() => act(onOpenCmd)} />
          <Sep />
          <Item label="Close Tab" shortcut="Ctrl+W"
            onClick={() => act(() => activeFile && onCloseTab?.(activeFile))}
            disabled={!activeFile} />
          <Item label="Close All Tabs"
            onClick={() => act(onCloseAllTabs)}
            disabled={!openTabs?.length} />
          <Sep />
          <SectionLabel>Open Recent</SectionLabel>
          {FILES.slice(0, 4).map(f => (
            <Item key={f.id} label={`    ${f.name}`} onClick={() => act(() => onNavigate?.(f.id))} />
          ))}
          <Sep />
          <Item label="Download Resume" onClick={() => act(() => {
            const a = document.createElement('a')
            a.href = '/resume.pdf'; a.download = 'Arif_Ishtiaq_Resume.pdf'; a.click()
          })} />
        </MenuDropdown>
      </div>

      {/* ── Edit ── */}
      <div ref={refs.edit}>
        <button className={menuBtn} onClick={() => toggle('edit')}>Edit</button>
        <MenuDropdown anchorRef={refs.edit} open={openMenu === 'edit'} onClose={close}>
          <Item label="Find…" shortcut="Ctrl+P" onClick={() => act(onOpenCmd)} />
          <Sep />
          <Item label="Select All" shortcut="Ctrl+A" onClick={() => act(() => document.execCommand('selectAll'))} />
          <Item label="Copy" shortcut="Ctrl+C" onClick={() => act(() => document.execCommand('copy'))} />
        </MenuDropdown>
      </div>

      {/* ── View ── */}
      <div ref={refs.view}>
        <button className={menuBtn} onClick={() => toggle('view')}>View</button>
        <MenuDropdown anchorRef={refs.view} open={openMenu === 'view'} onClose={close}>
          <Item label="Command Palette" shortcut="Ctrl+P" onClick={() => act(onOpenCmd)} />
          <Sep />
          <Item label="Toggle Sidebar" shortcut="Ctrl+B" onClick={() => act(onToggleSidebar)} />
          <Item label="Toggle Terminal" shortcut="Ctrl+`" onClick={() => act(onToggleTerm)} />
          <Item label="✨ Arif's Copilot" shortcut="Ctrl+Shift+C" onClick={() => act(onToggleCopilot)} highlight />
          <Sep />
          <Item label="Enter Full Screen" shortcut="F11" onClick={() => act(() => {
            !document.fullscreenElement
              ? document.documentElement.requestFullscreen?.()
              : document.exitFullscreen?.()
          })} />
          <Item label="Zoom In" shortcut="Ctrl++" onClick={() => act(() => {
            const el = document.documentElement
            el.style.fontSize = Math.min(parseFloat(el.style.fontSize || '100') + 10, 150) + '%'
          })} />
          <Item label="Zoom Out" shortcut="Ctrl+-" onClick={() => act(() => {
            const el = document.documentElement
            el.style.fontSize = Math.max(parseFloat(el.style.fontSize || '100') - 10, 70) + '%'
          })} />
          <Item label="Reset Zoom" onClick={() => act(() => { document.documentElement.style.fontSize = '' })} />
        </MenuDropdown>
      </div>

      {/* ── Go ── */}
      <div ref={refs.go}>
        <button className={menuBtn} onClick={() => toggle('go')}>Go</button>
        <MenuDropdown anchorRef={refs.go} open={openMenu === 'go'} onClose={close}>
          <Item label="Go to File…" shortcut="Ctrl+P" onClick={() => act(onOpenCmd)} />
          <Sep />
          <SectionLabel>Files</SectionLabel>
          {FILES.map(f => (
            <Item key={f.id} label={`    ${f.name}`} onClick={() => act(() => onNavigate?.(f.id))} />
          ))}
        </MenuDropdown>
      </div>

      {/* ── Run ── */}
      <div ref={refs.run}>
        <button className={menuBtn} onClick={() => toggle('run')}>Run</button>
        <MenuDropdown anchorRef={refs.run} open={openMenu === 'run'} onClose={close}>
          <Item label="Start Terminal" shortcut="Ctrl+`" onClick={() => act(onToggleTerm)} />
          <Item label="Run Last Command" disabled onClick={close} />
        </MenuDropdown>
      </div>

      {/* ── Terminal ── */}
      <div ref={refs.terminal}>
        <button className={menuBtn} onClick={() => toggle('terminal')}>Terminal</button>
        <MenuDropdown anchorRef={refs.terminal} open={openMenu === 'terminal'} onClose={close}>
          <Item label="New Terminal" shortcut="Ctrl+`" onClick={() => act(onToggleTerm)} />
          <Item label="Toggle Terminal" shortcut="Ctrl+`" onClick={() => act(onToggleTerm)} />
          <Sep />
          <Item label="Clear Terminal" onClick={() => act(() => {
            window.dispatchEvent(new CustomEvent('terminal:clear'))
          })} />
        </MenuDropdown>
      </div>

      {/* ── Help ── */}
      <div ref={refs.help}>
        <button className={menuBtn} onClick={() => toggle('help')}>Help</button>
        <MenuDropdown anchorRef={refs.help} open={openMenu === 'help'} onClose={close}>
          <Item label="Command Palette" shortcut="Ctrl+P" onClick={() => act(onOpenCmd)} />
          <Sep />
          <SectionLabel>Keyboard Shortcuts</SectionLabel>
          {[
            ['Ctrl+P', 'Go to file'],
            ['Ctrl+B', 'Toggle sidebar'],
            ['Ctrl+`', 'Toggle terminal'],
            ['Ctrl+Shift+C', 'Toggle Copilot ✨'],
            ['Esc', 'Close overlay'],
          ].map(([k, d]) => (
            <div key={k} className="flex items-center gap-3 px-4 py-1">
              <kbd className="text-[10px] px-1.5 py-0.5 rounded border"
                style={{ background: 'rgba(255,255,255,0.06)', borderColor: 'var(--border)', color: 'var(--yel)' }}>
                {k}
              </kbd>
              <span className="text-[11px]" style={{ color: 'var(--dim)' }}>{d}</span>
            </div>
          ))}
          <Sep />
          <Item label="GitHub ↗"
            onClick={() => act(() => window.open('https://github.com/mohammad-ishtiaque', '_blank'))} />
          <Item label="About"
            onClick={() => act(() => alert('Arif Ishtiaq Portfolio v3.0\nBuilt with React + Vite + Tailwind 💜'))} />
        </MenuDropdown>
      </div>

      {/* ── Copilot — after Help, no dropdown, directly opens chat ── */}
      <div>
        <button className={menuBtn} onClick={onToggleCopilot} title="Toggle Arif's Copilot (Ctrl+Shift+C)">
          Copilot
        </button>
      </div>
    </div>
  )
}