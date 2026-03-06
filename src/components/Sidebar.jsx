import { FILES } from '../data'
import { FILE_ICONS } from '../icons'

const downloadResume = () => {
  const a = document.createElement('a')
  a.href = '/Arif_Ishtiaq_Resume.pdf'
  a.download = 'Arif_Ishtiaq_Resume.pdf'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

export default function Sidebar({ activeFile, onFileClick, copilotOpen, onToggleCopilot }) {
  const handleClick = (file) => {
    if (file.download) { downloadResume(); return }
    onFileClick(file.id)
  }

  return (
    <div
      style={{ gridArea: 'side' }}
      className="bg-vscode-bg2 border-r border-vscode-border flex flex-col overflow-hidden select-none"
    >
      {/* Header */}
      <div className="px-4 pt-2.5 pb-1.5 text-[10px] font-bold tracking-[0.12em] uppercase text-vscode-text">
        Portfolio
      </div>

      {/* File list */}
      <div className="flex-1 overflow-y-auto thin-scroll pb-2">
        {FILES.map(file => {
          const Icon = FILE_ICONS[file.id]
          const isActive = activeFile === file.id && !file.download
          const isResume = !!file.download

          return (
            <button
              key={file.id}
              onClick={() => handleClick(file)}
              title={isResume ? 'Download Resume PDF ↓' : file.name}
              className={`
                w-full flex items-center gap-2 px-4 py-[5px] text-xs cursor-pointer
                border-l-2 transition-all duration-100 group
                ${isActive
                  ? 'bg-white/[0.07] text-vscode-bright border-vscode-blue2'
                  : isResume
                    ? 'text-vscode-dim border-transparent hover:bg-white/[0.05] hover:text-[#f44336] hover:border-[#f44336]'
                    : 'text-vscode-dim border-transparent hover:bg-white/[0.05] hover:text-vscode-text'
                }
              `}
            >
              <span className="flex-shrink-0">{Icon && <Icon />}</span>
              <span className="truncate flex-1">{file.name}</span>
              {isResume && (
                <span className="text-[11px] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                  ↓
                </span>
              )}
            </button>
          )
        })}
      </div>


      {/* Footer — git info */}
      <div className="border-t border-vscode-border px-3 py-1.5 flex items-center gap-1.5 text-[11px] text-vscode-dim">
        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="12" r="3" />
          <path d="M6 9v6M9 12h6" />
        </svg>
        <span className="text-vscode-text">main</span>
        <div className="ml-auto flex gap-2">
          <span className="text-vscode-gcm">↑1</span>
          <span className="text-vscode-orange">✦3</span>
        </div>
      </div>

      <style>{`
        @keyframes sidebar-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.3; transform: scale(1.6); }
        }
      `}</style>
    </div>
  )
}