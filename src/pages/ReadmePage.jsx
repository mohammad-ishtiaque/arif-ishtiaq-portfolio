import { ME } from '../data'

export default function ReadmePage() {
  const stackItems = [
    ['Languages', ['Python', 'TypeScript', 'SQL', 'JavaScript', 'C++']],
    ['AI / ML', ['PyTorch', 'LangChain', 'HuggingFace', 'scikit-learn', 'TensorFlow']],
    ['Backend', ['FastAPI', 'Flask', 'PostgreSQL', 'Redis']],
    ['DevOps', ['Docker', 'AWS', 'Linux', 'Git']],
  ]

  const badges = [
    ['🔵', 'Python', '#3572a5'],
    ['🔷', 'TypeScript', '#3178c6'],
    ['⚡', 'FastAPI', '#4ec9b0'],
    ['🧠', 'LangChain', '#ff6fd8'],
    ['🐍', 'PyTorch', '#ef4444'],
  ]

  return (
    <div className="px-12 py-12 max-w-[760px]">
      {/* H1 */}
      <h1 className="font-display text-[35px] font-extrabold text-vscode-bright
                     pb-2.5 border-b border-vscode-border mb-3">
        Arif Ishtiaq
      </h1>

      <p className="text-[14px] text-vscode-dim leading-relaxed mb-2.5">
        {ME.role} · {ME.location}
      </p>

      {/* Language badges */}
      <div className="flex flex-wrap gap-1 mb-4">
        {badges.map(([icon, label, color]) => (
          <span
            key={label}
            className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-sm text-[12px] border"
            style={{
              background: color + '22',
              borderColor: color,
              color: color,
            }}
          >
            {icon} {label}
          </span>
        ))}
      </div>

      <hr className="border-none border-t border-vscode-border my-4" />

      {/* About */}
      <h2 className="font-display text-[16px] font-bold text-vscode-bright mt-5 mb-2">
        💜 About
      </h2>
      <p className="text-[14px] text-vscode-dim leading-[1.8] mb-4">{ME.bio2}</p>

      <ul className="pl-6 mb-3 space-y-1">
        {[
          ['🔭', 'Building', 'scalable AI integrations', 'at EduVanceAI'],
          ['🤖', 'NLP, LLMs, RAG pipelines, Vector DBs', '', ''],
          ['⚡', 'Making', 'data stories non-data people get', ''],
          ['✨', 'Always learning, always shipping', '', ''],
        ].map(([icon, pre, bold, post], i) => (
          <li key={i} className="text-[13px] text-vscode-dim leading-[1.8]">
            {icon} {pre}{' '}
            {bold && <strong className="text-vscode-text font-medium">{bold}</strong>}
            {' '}{post}
          </li>
        ))}
      </ul>

      <hr className="border-none border-t border-vscode-border my-4" />

      {/* Stack */}
      <h2 className="font-display text-[30px] font-bold text-vscode-bright mt-5 mb-2">
        Stack
      </h2>
      {stackItems.map(([label, items]) => (
        <p key={label} className="text-[14px] text-vscode-dim leading-[1.8] mb-1">
          <strong className="text-vscode-text font-medium">{label}:</strong>{' '}
          {items.map(item => (
            <code
              key={item}
              className="bg-white/[0.07] px-2 py-px rounded-sm text-vscode-orange text-[14px] mx-0.5"
            >
              {item}
            </code>
          ))}
        </p>
      ))}

      <hr className="border-none border-t border-vscode-border my-4" />

      {/* Connect */}
      <h2 className="font-display text-[30px] font-bold text-vscode-bright mt-5 mb-2">
        Connect
      </h2>
      <ul className="pl-5 space-y-1">
        {[
          ['Email', ME.email],
          ['GitHub', 'mohammad-ishtiaque'],
          ['LinkedIn', 'Kazi Md. Arif Ishtiaq'],
        ].map(([label, val]) => (
          <li key={label} className="text-[14px] text-vscode-dim leading-[1.8]">
            {label}: <strong className="text-vscode-text font-medium">{val}</strong>
          </li>
        ))}
      </ul>

      <hr className="border-none border-t border-vscode-border my-4" />

      <p className="text-s text-vscode-dim text-center">
        Made with 🤍 by Arif · {new Date().getFullYear()}
      </p>
    </div>
  )
}
