export default function TitleBar({ onOpenCmd }) {

  const handleGreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.()
    } else {
      document.exitFullscreen?.()
    }
  }

  const handleYellow = () => {
    window.blur()
  }

  const handleRed = () => {
    const msgs = [
      "You can't close a portfolio! 😄",
      "Nice try. I'm staying open 💜",
      "Ctrl+W won't save you here 😂",
    ]
    const el = document.getElementById('tbar-msg')
    if (!el) return
    el.textContent = msgs[Math.floor(Math.random() * msgs.length)]
    el.style.opacity = '1'
    setTimeout(() => { el.style.opacity = '0' }, 2200)
  }

  return (
    <div
      style={{ gridArea: 'title' }}
      className="bg-vscode-title flex items-center gap-2 px-3 border-b border-black select-none"
    >
      {/* Window dots */}
      <div className="flex gap-1.5 group">
        {[
          { color: '#ff5f57', label: '✕', labelColor: '#900', onClick: handleRed, title: 'Close' },
          { color: '#febc2e', label: '−', labelColor: '#7a5000', onClick: handleYellow, title: 'Minimize' },
          { color: '#28c840', label: '⤢', labelColor: '#006500', onClick: handleGreen, title: 'Fullscreen' },
        ].map(({ color, label, labelColor, onClick, title }) => (
          <button
            key={title}
            onClick={onClick}
            title={title}
            className="w-3 h-3 rounded-full hover:brightness-110 transition-all
                       relative cursor-pointer border-none outline-none flex-shrink-0"
            style={{ background: color }}
          >
            <span
              className="absolute inset-0 flex items-center justify-center
                         text-[8px] font-bold opacity-0 group-hover:opacity-100
                         transition-opacity"
              style={{ color: labelColor }}
            >
              {label}
            </span>
          </button>
        ))}
      </div>

      {/* Easter egg message */}
      <span
        id="tbar-msg"
        className="text-[10px] text-white/50 transition-opacity duration-500 opacity-0
                   pointer-events-none absolute left-20"
      />

      {/* Search / command palette trigger */}
      <button
        onClick={onOpenCmd}
        className="flex-1 max-w-xs mx-auto flex items-center justify-center gap-2
                   bg-white/[0.07] border border-white/10 rounded-[5px]
                   px-3 py-[3px] text-[11px] text-vscode-dim
                   hover:bg-white/10 transition-colors cursor-pointer"
      >
        🔍 arif-ishtiaq : portfolio
        <span className="flex gap-1 ml-1">
          <kbd className="bg-white/10 px-1 py-[1px] rounded text-[10px]">Ctrl</kbd>
          <kbd className="bg-white/10 px-1 py-[1px] rounded text-[10px]">P</kbd>
        </span>
      </button>
    </div>
  )
}