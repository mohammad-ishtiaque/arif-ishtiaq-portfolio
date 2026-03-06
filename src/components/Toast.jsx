export default function ToastContainer({ toasts }) {
  return (
    <div className="fixed bottom-8 right-5 z-50 flex flex-col gap-2 pointer-events-none">
      {toasts.map(t => (
        <div
          key={t.id}
          className="bg-[#2d2d30] border border-white/10 rounded px-4 py-2.5 text-xs
                     text-vscode-text flex items-center gap-2 animate-toast-in
                     shadow-[0_8px_24px_rgba(0,0,0,0.4)] min-w-[220px] pointer-events-auto"
        >
          <span className="text-sm flex-shrink-0">{t.icon}</span>
          <span>{t.msg}</span>
        </div>
      ))}
    </div>
  )
}
