import { useState, useRef } from 'react'
import { FILES } from '../data'

export default function Breadcrumb({ activeFile }) {
  const file = FILES.find(f => f.id === activeFile)
  if (!file) return null

  const initialParts =
    file.folder === 'root'
      ? ['arif-ishtiaq', file.name]
      : ['arif-ishtiaq', file.folder, file.name]

  const [parts, setParts] = useState(initialParts)
  const [dragIndex, setDragIndex] = useState(null)
  const [overIndex, setOverIndex] = useState(null)
  const dragItem = useRef(null)

  // Reset when activeFile changes
  if (parts.join() !== initialParts.join() && dragIndex === null) {
    setParts(initialParts)
  }

  const onDragStart = (i) => {
    dragItem.current = i
    setDragIndex(i)
  }

  const onDragEnter = (i) => {
    setOverIndex(i)
  }

  const onDragEnd = () => {
    if (dragItem.current !== null && overIndex !== null && dragItem.current !== overIndex) {
      const next = [...parts]
      const [moved] = next.splice(dragItem.current, 1)
      next.splice(overIndex, 0, moved)
      setParts(next)
    }
    dragItem.current = null
    setDragIndex(null)
    setOverIndex(null)
  }

  return (
    <div className="flex items-center gap-0.5 px-4 py-1 text-xs text-vscode-dim border-b border-vscode-border bg-vscode-bg flex-shrink-0 min-h-[26px] select-none">
      {parts.map((part, i) => (
        <span
          key={i}
          className="flex items-center gap-0.5"
        >
          <span
            draggable
            onDragStart={() => onDragStart(i)}
            onDragEnter={() => onDragEnter(i)}
            onDragEnd={onDragEnd}
            onDragOver={e => e.preventDefault()}
            className="flex items-center gap-0.5 px-1 rounded cursor-grab active:cursor-grabbing transition-all"
            style={{
              opacity: dragIndex === i ? 0.35 : 1,
              background: overIndex === i && dragIndex !== i ? 'var(--bg3)' : 'transparent',
              outline: overIndex === i && dragIndex !== i ? '1px dashed var(--border)' : 'none',
              color: i === parts.length - 1 ? 'var(--text)' : 'var(--dim)',
            }}
          >
            {part}
          </span>
          {i < parts.length - 1 && (
            <span className="opacity-30 text-[10px] mx-0.5 pointer-events-none">›</span>
          )}
        </span>
      ))}
    </div>
  )
}