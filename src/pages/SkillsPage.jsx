import { useEffect, useRef, useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { SKILLS, PILLS } from '../data'

function SkillBar({ name, pct, color }) {
  const [width, setWidth] = useState(0)
  const ref = useRef()

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setWidth(pct) },
      { threshold: 0.2 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [pct])

  return (
    <div ref={ref} className="flex items-center gap-3 mb-3">
      <span className="w-28 text-[13px] text-vscode-dim flex-shrink-0">{name}</span>
      <div className="flex-1 h-[2px] bg-white/[0.06] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-[1400ms] ease-out"
          style={{ width: width + '%', background: color }}
        />
      </div>
      <span className="w-8 text-right text-[13px] flex-shrink-0" style={{ color }}>{pct}%</span>
    </div>
  )
}

export default function SkillsPage() {
  useReveal('skills')

  return (
    <div className="px-12 py-12 max-w-[940px]">
      <p className="text-vscode-gcm italic text-[14px] mb-3">
        {"// skills.json — tech stack & tools I actually use"}
      </p>
      <h2 className="font-display text-[35px] font-extrabold text-vscode-bright tracking-tight mb-1">
        Skills
      </h2>
      <p className="text-vscode-dim text-[14px] mb-8">
        {"{"} "status": "always_learning", "passion": "immeasurable" {"}"}
      </p>

      {/* Skill bars — 2 col grid */}
      <div className="text- [18px] grid grid-cols-2 gap-x-10 gap-y-6 mb-8">
        {SKILLS.map(group => (
          <div key={group.group} className="reveal">
            <div className="text-[16px] uppercase tracking-[0.2em] text-vscode-yel mb-4 pb-2 border-b border-vscode-border">
              {group.group}
            </div>
            {group.items.map(s => <SkillBar key={s.name} {...s} />)}
          </div>
        ))}
      </div>

      {/* Certifications
      <div className="reveal mb-8">
        <div className="text-[10px] uppercase tracking-[0.2em] text-vscode-yel mb-4 pb-2 border-b border-vscode-border">
          🎓 Certifications
        </div>
        <div className="flex flex-col gap-2.5">
          {CERTIFICATIONS.map(({ name, platform, color }) => (
            <div
              key={name}
              className="flex items-center justify-between px-4 py-3 bg-white/[0.02] border border-vscode-border rounded"
              style={{ borderLeft: `3px solid ${color}` }}
            >
              <div>
                <div className="text-xs text-vscode-bright mb-0.5">{name}</div>
                <div className="text-[10px] text-vscode-dim">{platform}</div>
              </div>
              <span
                className="text-[10px] px-2 py-0.5 rounded"
                style={{ color, border: `1px solid ${color}44`, background: `${color}11` }}
              >
                ✓ certified
              </span>
            </div>
          ))}
        </div>
      </div> */}

      {/* Also familiar with pills */}
      <div className="reveal">
        <div className="text-[16px] uppercase tracking-[0.2em] text-vscode-yel mb-4 pb-2 border-b border-vscode-border">
          Also familiar with
        </div>
        <div className="flex flex-wrap gap-2">
          {PILLS.map(p => (
            <span
              key={p}
              className="text-[13px] px-2.5 py-1 border border-vscode-border rounded text-vscode-dim
                         cursor-default transition-all hover:border-vscode-blue2 hover:text-vscode-blue"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}