import { useReveal } from '../hooks/useReveal'
import { EXPERIENCE } from '../data'

export default function ExperiencePage() {
  useReveal('experience')

  return (
    <div className="px-12 py-12 max-w-[940px]">
      <p className="text-vscode-gcm italic text-[14px] mb-3">// experience.ts - professional journey</p>
      <h2 className="font-display text-[35px] font-extrabold text-vscode-bright tracking-tight mb-1">
        Experience
      </h2>
      <p className="text-vscode-dim text-[14px] mb-8">{'interface Career extends Timeline {}'}</p>

      {/* Timeline */}
      <div className="pl-3 border-l border-vscode-border">
        {EXPERIENCE.map((exp, i) => (
          <div
            key={exp.date}
            className={`reveal relative pl-5 mb-9 ${exp.current ? 'tl-dot' : 'tl-dot-dim'}`}
          >
            {/* Date */}
            <div className="text-[14px] text-vscode-dim tracking-wide mb-1.5">{exp.date}</div>

            {/* Role */}
            <div className="font-display text-[20px] font-extrabold text-vscode-bright mb-0.5">
              {exp.role}
            </div>

            {/* Company */}
            <div className="text-[14px] text-vscode-blue mb-2.5">@ {exp.company}</div>

            {/* Description */}
            <p className="text-[14px] text-vscode-dim leading-[1.8] mb-3">{exp.desc}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {exp.tags.map(tag => (
                <span
                  key={tag}
                  className="text-[12px] px-1.5 py-0.5 rounded-sm text-vscode-blue
                             border border-vscode-blue2/25 bg-vscode-blue2/[0.08]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
