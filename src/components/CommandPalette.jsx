import { useEffect, useRef, useState } from 'react'
import { FILES } from '../data'
import { FILE_ICONS } from '../icons'

// ── Copilot icon (inline SVG) ────────────────────────────────────────────────
function CopilotSVG() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
         stroke="#9370db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5L12 2z"/>
    </svg>
  )
}

// ── Static commands (non-file actions) ───────────────────────────────────────
const COMMANDS = [
  {
    id:       'copilot',
    name:     "Open Arif's Copilot",
    hint:     'Ctrl+Shift+C',
    isAction: true,
    icon:     <CopilotSVG />,
    color:    '#b48eff',
  },
]

export default function CommandPalette({ query, onQueryChange, onSelect, onClose, onToggleCopilot }) {
  const inputRef = useRef()
  const [focused, setFocused] = useState(0)

  useEffect(() => {
    setTimeout(() => inputRef.current?.focus(), 50)
  }, [])

  const filteredFiles = FILES.filter(f =>
    f.name.toLowerCase().includes(query.toLowerCase())
  )

  const filteredCmds = COMMANDS.filter(c =>
    c.name.toLowerCase().includes(query.toLowerCase())
  )

  // Commands first, then files
  const allResults = [...filteredCmds, ...filteredFiles]

  useEffect(() => {
    setFocused(0)
  }, [query])

  useEffect(() => {
    const h = (e) => {
      if (e.key === 'ArrowDown') { e.preventDefault(); setFocused(f => Math.min(f + 1, allResults.length - 1)) }
      if (e.key === 'ArrowUp')   { e.preventDefault(); setFocused(f => Math.max(f - 1, 0)) }
      if (e.key === 'Enter') {
        e.preventDefault()
        const item = allResults[focused]
        if (item) handleSelect(item)
      }
    }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [focused, allResults])

  const handleSelect = (item) => {
    if (item.isAction) {
      onToggleCopilot?.()
      onClose()
    } else {
      onSelect(item.id)
    }
  }

  return (
    <div
      className="fixed inset-0 bg-black/55 z-50 flex items-start justify-center pt-20
                 backdrop-blur-sm animate-fade-in"
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-[#2d2d30] border border-white/15 rounded-md w-[540px] overflow-hidden
                      shadow-[0_24px_70px_rgba(0,0,0,0.7)]">

        {/* Input */}
        <div className="flex items-center gap-2 px-3.5 py-2.5 border-b border-white/[0.07]">
          <span className="text-vscode-dim text-sm">›</span>
          <input
            ref={inputRef}
            value={query}
            onChange={e => onQueryChange(e.target.value)}
            placeholder="Go to file or run command..."
            className="flex-1 bg-transparent border-none outline-none text-vscode-bright
                       font-mono text-[14px] placeholder:text-vscode-dim"
          />
          <kbd className="text-[10px] px-1.5 py-0.5 rounded border hidden sm:block"
               style={{ background: 'rgba(255,255,255,0.06)', borderColor: 'var(--border)', color: 'var(--dim)' }}>
            Esc
          </kbd>
        </div>

        {/* Results */}
        <div className="max-h-[320px] overflow-y-auto thin-scroll">

          {/* ── Action commands (Copilot etc.) ── */}
          {filteredCmds.length > 0 && (
            <>
              <div className="px-3.5 py-1 text-[10px] tracking-widest uppercase"
                   style={{ color: 'var(--dim)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                Commands
              </div>
              {filteredCmds.map((cmd, i) => (
                <button
                  key={cmd.id}
                  onClick={() => handleSelect(cmd)}
                  className="w-full flex items-center gap-2.5 px-3.5 py-2.5 text-xs text-left transition-colors"
                  style={{
                    background: focused === i ? 'rgba(110,64,201,0.18)' : 'transparent',
                    borderLeft: focused === i ? '2px solid #6E40C9' : '2px solid transparent',
                    color:      cmd.color || 'var(--text)',
                  }}
                  onMouseEnter={() => setFocused(i)}
                >
                  <span className="flex-shrink-0">{cmd.icon}</span>
                  <span className="flex-1 font-medium">{cmd.name}</span>
                  {cmd.hint && (
                    <kbd className="text-[10px] px-1.5 py-0.5 rounded border flex-shrink-0"
                         style={{ background: 'rgba(255,255,255,0.06)', borderColor: 'var(--border)', color: 'var(--dim)' }}>
                      {cmd.hint}
                    </kbd>
                  )}
                </button>
              ))}
            </>
          )}

          {/* ── File results ── */}
          {filteredFiles.length > 0 && (
            <>
              <div className="px-3.5 py-1 text-[10px] tracking-widest uppercase"
                   style={{ color: 'var(--dim)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                Files
              </div>
              {filteredFiles.map((file, i) => {
                const Icon        = FILE_ICONS[file.id]
                const resultIndex = filteredCmds.length + i
                return (
                  <button
                    key={file.id}
                    onClick={() => handleSelect(file)}
                    className="w-full flex items-center gap-2.5 px-3.5 py-2 text-xs text-left transition-colors"
                    style={{
                      background: focused === resultIndex ? 'rgba(255,255,255,0.08)' : 'transparent',
                      borderLeft: focused === resultIndex ? '2px solid var(--blue)' : '2px solid transparent',
                      color:      'var(--text)',
                    }}
                    onMouseEnter={() => setFocused(resultIndex)}
                  >
                    <span className="flex-shrink-0"><Icon /></span>
                    <span className="flex-1">{file.name}</span>
                    <span className="text-vscode-dim text-[11px]">
                      {file.folder === 'root' ? './' : file.folder + '/'}
                    </span>
                  </button>
                )
              })}
            </>
          )}

          {allResults.length === 0 && (
            <div className="px-3.5 py-6 text-center text-[12px]" style={{ color: 'var(--dim)' }}>
              No results for "{query}"
            </div>
          )}
        </div>

        {/* Footer hint */}
        <div className="px-3.5 py-1.5 border-t border-white/[0.05] flex items-center gap-3"
             style={{ background: 'rgba(0,0,0,0.2)' }}>
          <span className="text-[10px]" style={{ color: 'var(--dim)' }}>
            ↑↓ navigate &nbsp;·&nbsp; ↵ open &nbsp;·&nbsp; Esc close
          </span>
          <span className="ml-auto text-[10px]" style={{ color: 'var(--dim)' }}>
            Tip: type "copilot" to open AI chat 
          </span>
        </div>
      </div>
    </div>
  )
}