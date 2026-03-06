import { useState, useEffect, useRef } from 'react'
import { TERMINAL_FS_FILES, TERMINAL_FILE_MAP } from '../data'

export default function Terminal({ onClose, onOpenFile }) {
  const [history, setHistory] = useState([
    { type: 'info', text: "Welcome! Type 'help' to see available commands." },
  ])
  const [input, setInput] = useState('')
  const [cwd, setCwd] = useState('~')
  const [cmdHist, setCmdHist] = useState([])
  const [histIdx, setHistIdx] = useState(-1)

  const bodyRef = useRef()
  const inputRef = useRef()

  const push = entries => setHistory(h => [...h, ...entries])

  const handleCommand = raw => {
    const trimmed = raw.trim()
    if (!trimmed) return

    setCmdHist(h => [trimmed, ...h])
    setHistIdx(-1)

    const [cmd, ...argParts] = trimmed.split(/\s+/)
    const arg = argParts.join(' ')

    push([{ type: 'cmd', text: trimmed }])

    switch (cmd.toLowerCase()) {
      case 'help':
        push([
          { type: 'ok', text: 'Available commands:' },
          { type: 'out', text: '  ls               — list files in current directory' },
          { type: 'out', text: '  pwd              — print working directory' },
          { type: 'out', text: '  cd <dir>         — change directory (cd .. to go up)' },
          { type: 'out', text: '  cat <file>       — view / open a file in the editor' },
          { type: 'out', text: '  open <file>      — same as cat' },
          { type: 'out', text: '  whoami           — who am I?' },
          { type: 'out', text: '  echo <text>      — print text' },
          { type: 'out', text: '  date             — show current date & time' },
          { type: 'out', text: '  git log          — show recent commits' },
          { type: 'out', text: '  python --version — show Python version' },
          { type: 'out', text: '  clear            — clear the terminal' },
        ])
        break

      case 'ls':
        push([{ type: 'ok', text: TERMINAL_FS_FILES.join('   ') }])
        break

      case 'pwd':
        push([{ type: 'ok', text: `/home/arif/${cwd === '~' ? '' : cwd}`.replace(/\/$/, '') || '/home/arif' }])
        break

      case 'cd':
        if (!arg || arg === '~' || arg === '/') {
          setCwd('~'); push([{ type: 'out', text: '' }])
        } else if (arg === '..') {
          setCwd('~'); push([{ type: 'out', text: '' }])
        } else {
          push([{ type: 'err', text: `cd: ${arg}: No such directory` }])
        }
        break

      case 'cat':
      case 'open': {
        if (!arg) {
          push([{ type: 'err', text: `${cmd}: missing operand` }]); break
        }
        const pageId = TERMINAL_FILE_MAP[arg]
        if (pageId) {
          push([{ type: 'ok', text: `Opening ${arg} in editor…` }])
          setTimeout(() => onOpenFile(pageId), 300)
        } else {
          push([
            { type: 'err', text: `${cmd}: ${arg}: No such file` },
            { type: 'out', text: `Try: ${TERMINAL_FS_FILES.join(', ')}` },
          ])
        }
        break
      }

      case 'whoami':
        push([
          { type: 'ok', text: 'arif' },
          { type: 'out', text: 'Junior Software Developer @ Sparktech' },
          { type: 'out', text: 'Backend Engineer · AI/ML Developer · Data Scientist' },
          { type: 'out', text: 'Bangladesh BD  ·  kazimdarifishtiaque@gmail.com' },
        ])
        break

      case 'echo':
        push([{ type: 'ok', text: arg }])
        break

      case 'date':
        push([{ type: 'ok', text: new Date().toString() }])
        break

      case 'clear':
        setHistory([])
        break

      case 'git':
        if (arg.startsWith('log')) {
          push([
            { type: 'out', text: 'a3f1c2e (HEAD → main) feat: add RAG pipeline with LangChain' },
            { type: 'out', text: 'b7d4a1f fix: optimise FastAPI response time' },
            { type: 'out', text: 'd1f8c4a chore: deploy to AWS ECS' },
            { type: 'out', text: 'e2a0b5c feat: PostgreSQL connection pooling' },
          ])
        } else if (arg === 'status') {
          push([
            { type: 'ok', text: 'On branch main' },
            { type: 'out', text: 'Your branch is up to date with origin/main.' },
          ])
        } else {
          push([{ type: 'out', text: "git: try 'git log' or 'git status'" }])
        }
        break

      case 'python':
      case 'python3':
        if (arg === '--version' || arg === '-V') {
          push([{ type: 'ok', text: 'Python 3.11.0' }])
        } else {
          push([{ type: 'out', text: 'Python interactive mode not available here.' }])
        }
        break

      default:
        push([{ type: 'err', text: `command not found: ${cmd} — type 'help' for commands` }])
    }
  }

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight
  }, [history])

  useEffect(() => { inputRef.current?.focus() }, [])

  const onKeyDown = e => {
    if (e.key === 'Enter') { handleCommand(input); setInput('') }
    else if (e.key === 'ArrowUp') {
      e.preventDefault()
      const next = Math.min(histIdx + 1, cmdHist.length - 1)
      setHistIdx(next); if (cmdHist[next]) setInput(cmdHist[next])
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      const next = Math.max(histIdx - 1, -1)
      setHistIdx(next); setInput(next === -1 ? '' : cmdHist[next])
    }
  }

  const typeStyles = {
    cmd: 'text-vscode-bright',
    out: 'text-vscode-dim',
    ok: 'text-vscode-green',
    err: 'text-vscode-red',
    info: 'text-vscode-blue',
  }

  const Prompt = () => (
    <>
      <span className="text-vscode-green">arif</span>
      <span className="text-vscode-dim">@portfolio</span>
      <span className="text-vscode-dim">:</span>
      <span className="text-vscode-green">{cwd}</span>
      <span className="text-vscode-dim">$</span>
      <span> </span>
    </>
  )

  return (
    <div className="bg-vscode-bg2 border-t border-vscode-border flex flex-col h-[220px] animate-slide-up flex-shrink-0">
      {/* Header */}
      <div className="flex items-center gap-2 px-3 py-1 border-b border-vscode-border bg-vscode-bg3 flex-shrink-0">
        {['TERMINAL', 'PROBLEMS', 'OUTPUT'].map((tab, i) => (
          <button
            key={tab}
            className={`text-xs px-2 py-0.5 rounded transition-colors ${i === 0
              ? 'text-vscode-text bg-white/[0.07]'
              : 'text-vscode-dim hover:bg-white/[0.05]'
              }`}
          >
            {tab}
          </button>
        ))}
        <button
          onClick={onClose}
          className="ml-auto text-vscode-dim hover:text-vscode-text text-sm transition-colors"
        >
          ✕
        </button>
      </div>

      {/* Output */}
      <div
        ref={bodyRef}
        onClick={() => inputRef.current?.focus()}
        className="flex-1 overflow-y-auto thin-scroll px-3.5 pt-2 pb-1 text-xs leading-[1.8] cursor-text font-mono"
      >
        {history.map((line, i) => (
          <div key={i}>
            {line.type === 'cmd' && <Prompt />}
            <span className={typeStyles[line.type] ?? 'text-vscode-dim'}>{line.text}</span>
          </div>
        ))}
      </div>

      {/* Live input row */}
      <div className="flex items-center gap-1 px-3.5 pb-2 font-mono text-xs">
        <Prompt />
        <input
          ref={inputRef}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          autoComplete="off"
          spellCheck={false}
          className="flex-1 bg-transparent border-none outline-none text-vscode-bright text-xs font-mono"
        />
        <span className="term-cursor" />
      </div>
    </div>
  )
}
