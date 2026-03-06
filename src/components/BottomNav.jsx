import { FILES } from '../data'
import { FILE_ICONS } from '../icons'

// Only show the main nav pages in bottom nav
const NAV_IDS = ['home', 'about', 'projects', 'skills', 'experience', 'contact']

export default function BottomNav({ activeFile, onNavigate }) {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around
                 border-t px-2 py-1 md:hidden"
      style={{
        background: 'var(--bg2)',
        borderColor: 'var(--border)',
        height: '52px',
      }}
    >
      {NAV_IDS.map(id => {
        const file = FILES.find(f => f.id === id)
        if (!file) return null
        const Icon = FILE_ICONS[id]
        const isActive = activeFile === id

        return (
          <button
            key={id}
            onClick={() => onNavigate(id)}
            className="flex flex-col items-center justify-center gap-0.5 px-2 py-1
                       rounded transition-all flex-1"
            style={{
              color: isActive ? 'var(--blue2)' : 'var(--dim)',
              background: isActive ? 'rgba(255,255,255,0.05)' : 'transparent',
            }}
          >
            <Icon />
            <span style={{ fontSize: '9px', letterSpacing: '0.04em' }}>
              {file.name.replace(/\.[^.]+$/, '')}
            </span>
          </button>
        )
      })}
    </div>
  )
}