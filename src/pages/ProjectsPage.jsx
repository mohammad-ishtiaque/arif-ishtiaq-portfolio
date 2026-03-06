import { useReveal } from '../hooks/useReveal'
import { PROJECTS } from '../data'

export default function ProjectsPage() {
  useReveal('projects')

  return (
    <div className="px-12 py-12 max-w-[1100px]">
      <p className="text-vscode-gcm italic text-[14px] mb-3">// projects.js : things I've built &amp; shipped</p>
      <h2 className="font-display text-[35px] font-extrabold text-vscode-bright tracking-tight mb-1">
        Projects
      </h2>
      <p className="text-vscode-dim text-xs mb-8">const projects = [ ...shipped, ...building ]</p>

      <div className="grid grid-cols-2 gap-3.5">
        {PROJECTS.map(p => (
          <div
            key={p.id}
            className="project-card reveal relative bg-white/[0.02] border border-vscode-border
                       rounded p-5 overflow-hidden
                       hover:border-white/[0.14] hover:-translate-y-0.5 hover:bg-white/[0.03]
                       transition-all duration-200"
            style={{ '--card-accent': p.accent }}
          >
            {/* Icon */}
            <div className="mb-3">
              <span className="text-[22px]">{p.icon}</span>
            </div>

            {/* Type + links on same row */}
            <div className="flex justify-between items-center mb-1.5">
              <div className="text-[13px] uppercase tracking-[0.15em] font-medium" style={{ color: p.accent }}>
                {p.type}
              </div>
              <div className="flex gap-2">
                <a href={p.link} target="_blank" rel="noreferrer"
                  className="text-[11px] text-vscode-dim no-underline px-2 py-0.5
                            border border-vscode-border rounded-sm
                            hover:text-vscode-text hover:border-white/28 transition-colors">
                  GitHub ↗
                </a>
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer"
                    className="text-[11px] no-underline px-2 py-0.5 border rounded-sm transition-colors"
                    style={{ color: p.accent, borderColor: p.accent + '55' }}>
                    Live ↗
                  </a>
                )}
              </div>
            </div>

            {/* Name */}
            <div className="font-display text-[18px] font-extrabold text-vscode-bright mb-2.5">
              {p.name}
            </div>

            {/* Description */}
            <p className="text-xs text-vscode-dim leading-[1.75] mb-4">{p.desc}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {p.tags.map(tag => (
                <span
                  key={tag}
                  className="text-[10px] px-1.5 py-0.5 bg-white/[0.04]
                             border border-white/[0.07] rounded-sm text-vscode-dim"
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