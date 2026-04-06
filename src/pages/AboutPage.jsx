import { useReveal } from '../hooks/useReveal'
import { ME, EDUCATION } from '../data'

export default function AboutPage() {
  useReveal('about')

  const focus = [
    ['🔭', 'Building scalable backend systems & AI integrations at Sparktech'],
    ['🤖', 'Deep interest in NLP, LLMs & ML pipelines'],
    ['🌱', 'Currently exploring RAG, MLOps & Vector Databases'],
    ['💬', 'Talk to me about Python, APIs, Data Science'],
    ['⚡', 'Making data stories non-data people actually get'],
    ['✨', 'Always learning, always shipping'],
  ]

  return (
    <div className="px-12 py-12 max-w-[940px]">
      {/* Page comment */}
      <p className="text-vscode-gcm italic text-[14px] mb-3">&lt;!-- about.html - Arif Ishtiaq --&gt;</p>
      <h2 className="font-display text-[35px] font-extrabold text-vscode-bright tracking-tight mb-1">
        About Me
      </h2>
      <p className="text-vscode-dim text-[14px] mb-8">// who I am · what I do · where I build</p>

      {/* Bio card */}
      <div className="reveal bg-white/[0.025] border border-vscode-border rounded p-6 mb-4">
        <p className="text-[13px] text-vscode-dim leading-[1.9]">
          Hi! I'm{' '}
          <strong className="text-vscode-blue font-medium">Arif Ishtiaq</strong>
          , a software developer living at the crossroads of{' '}
          <strong className="text-vscode-blue font-medium">Full stack engineering</strong>,{' '}
          <strong className="text-vscode-blue font-medium">AI/ML</strong>, and{' '}
          <strong className="text-vscode-blue font-medium">data science</strong>.
          I love building systems that are not just functional but genuinely{' '}
          <strong className="text-vscode-blue font-medium">intelligent and scalable</strong>.
          Currently a{' '}
          <strong className="text-vscode-blue font-medium">Software Developer at Sparktech</strong>,
          building AI integrations and backend systems that power learning experiences for thousands of users daily.
        </p>
      </div>

      {/* Current Focus */}
      <div className="reveal bg-white/[0.025] border border-vscode-border rounded p-5 mb-4 hover:border-white/[0.12] transition-colors">
        <div className="text-[18px] uppercase tracking-[0.2em] text-vscode-green mb-3">
          Current Focus
        </div>
        <div className="grid grid-cols-2 gap-x-6">
          {focus.map(([icon, text]) => (
            <div key={text} className="flex gap-2.5 mb-2.5 text-xs text-vscode-dim leading-relaxed">
              <span>{icon}</span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="reveal">
        <div className="text-[18px] uppercase tracking-[0.2em] text-vscode-green mb-3">
          Education
        </div>
        <div className="flex flex-col gap-3">
          {EDUCATION.map((edu) => (
            <div
              key={edu.id}
              className="bg-white/[0.025] border border-vscode-border rounded p-5 hover:border-white/[0.12] transition-colors"
            >
              <div className="flex items-start justify-between gap-4 mb-1">
                <div>
                  <span className="text-[15px] font-semibold text-vscode-bright block">
                    {edu.icon} {edu.institution}
                  </span>
                  {edu.university && (
                    <span className="text-[11px] text-vscode-dim">{edu.university}</span>
                  )}
                </div>
                <span className="text-[10px] text-vscode-dim whitespace-nowrap mt-0.5">{edu.period}</span>
              </div>
              <p className="text-xs text-vscode-blue mt-1.5">{edu.degree}</p>
              {edu.minor && (
                <p className="text-[11px] text-vscode-dim mt-0.5">{edu.minor}</p>
              )}
              <p className="text-[11px] text-vscode-green mt-1">{edu.gpa}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}