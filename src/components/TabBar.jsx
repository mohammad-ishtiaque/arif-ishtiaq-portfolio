import { FILES } from '../data'
import { FILE_ICONS } from '../icons'

export default function TabBar({ openTabs, activeFile, onTabClick, onTabClose }) {
  return (
    <div className="flex bg-vscode-bg2 border-b border-vscode-border overflow-x-auto no-scroll h-[35px] flex-shrink-0">
      {openTabs.map(id => {
        const file = FILES.find(f => f.id === id)
        if (!file) return null
        const Icon  = FILE_ICONS[id]
        const isActive = activeFile === id

        return (
          <div
            key={id}
            onClick={() => onTabClick(id)}
            className={`
              relative flex items-center gap-1.5 px-3.5 h-[35px] text-xs cursor-pointer
              border-r border-vscode-border flex-shrink-0 max-w-[160px] group
              transition-colors duration-100
              ${isActive
                ? 'bg-vscode-bg text-vscode-bright tab-active'
                : 'bg-vscode-bg2 text-vscode-dim hover:text-vscode-text'
              }
            `}
          >
            <span className="flex-shrink-0"><Icon /></span>
            <span className="truncate">{file.name}</span>

            {/* Close button — shows on hover or active */}
            <button
              onClick={e => { e.stopPropagation(); onTabClose(id) }}
              className={`
                ml-0.5 w-4 h-4 flex items-center justify-center rounded text-[11px]
                flex-shrink-0 transition-colors
                opacity-0 group-hover:opacity-100
                ${isActive ? 'opacity-100' : ''}
                hover:bg-white/10 hover:text-vscode-text text-vscode-dim
              `}
            >
              ✕
            </button>
          </div>
        )
      })}
    </div>
  )
}
