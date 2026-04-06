import { useTypewriter } from '../hooks/useTypewriter'
import { ME, TYPEWRITER_LINES } from '../data'

// ── SVG Social Icons ──────────────────────────────────────────────────────
const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)
const MediumIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
    <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
  </svg>
)
const TableauIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
    <path d="M11.654 0v2.924H9.12V0h2.534zm-5.41 1.21v2.13H4.118V1.21H6.244zm10.91 0v2.13h-2.127V1.21h2.127zm-5.5 3.584v3.327H8.73V4.794h2.924zm-5.5 1.332v2.522H4.03V6.126h2.124zm11 0v2.522h-2.127V6.126h2.127zM.63 6.244v2.13H0v-2.13h.63zm22.74 0v2.13H24v-2.13h-.63zM11.654 9.12v2.924H9.12V9.12h2.534zm-11.024.454v2.13H0v-2.13h.63zm22.74 0v2.13H24v-2.13h-.63zM6.244 10.452v2.522H4.118v-2.522H6.244zm11 0v2.522h-2.127v-2.522h2.127zM11.654 13.956v2.924H9.12v-2.924h2.534zm-11.024.454v2.13H0v-2.13h.63zm22.74 0v2.13H24v-2.13h-.63zM6.244 15.288v2.52H4.118v-2.52H6.244zm11 0v2.52h-2.127v-2.52h2.127zM11.654 18.752v3.324H9.12v-3.324h2.534zm-5.41 1.33v2.13H4.118v-2.13H6.244zm10.91 0v2.13h-2.127v-2.13h2.127zM11.654 21.076V24H9.12v-2.924h2.534z" />
  </svg>
)
const LeetCodeIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H19.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
  </svg>
)
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
)
const EmailIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)
const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
)

export default function HomePage({ onNavigate }) {
  const typed = useTypewriter(TYPEWRITER_LINES)

  const socials = [
    { icon: <GitHubIcon />, label: 'GitHub', href: ME.links.github, color: '#e6edf3' },
    { icon: <LinkedInIcon />, label: 'LinkedIn', href: ME.links.linkedin, color: '#0a66c2' },
    // { icon: <MediumIcon />, label: 'Medium', href: ME.links.medium, color: '#d0d0d0' },
    // { icon: <TableauIcon />, label: 'Tableau', href: ME.links.tableau, color: '#e97627' },
    { icon: <LeetCodeIcon />, label: 'LeetCode', href: ME.links.leetcode, color: '#ffa116' },
    // { icon: <InstagramIcon />, label: 'Instagram', href: ME.links.instagram, color: '#e1306c' },
    { icon: <EmailIcon />, label: 'Email', href: `mailto:${ME.email}`, color: '#4ec9b0' },
    // { icon: <YouTubeIcon />, label: 'Youtube', href: ME.links.youtube, color: '#ff0000' }
  ]

  const stats = [
    ['3+', 'Years'],
    ['10+', 'Projects'],
    ['∞', 'Curiosity'],
    ['↑', 'Always Learning'],
  ]

  return (
    <div className="home-wrapper">
      <div className="home-content">

        {/* Comment */}
        <p className="text-s text-vscode-green mb-2.5 opacity-0 animate-su-1">
          // hello world !! Welcome to my portfolio
        </p>

        {/* Name + avatar inline */}
        <div className="flex items-center gap-4 mb-3.5 opacity-0 animate-su-2">
          <h1
            className="font-display font-extrabold leading-none text-vscode-bright tracking-[-2.5px]"
            style={{ fontSize: 'clamp(34px, 5.5vw, 68px)' }}
          >
            Arif<br />
            <em className="not-italic text-vscode-pink relative">
              Ishtiaq
              <span className="absolute bottom-[-2px] left-0 right-0 h-0.5
                               bg-gradient-to-r from-vscode-pink to-transparent" />
            </em>
          </h1>

          <div className="home-avatar flex-shrink-0">
            <div className="avatar-ring" />
            <div className="avatar-glow" />
          </div>
        </div>

        {/* Role badges */}
        <div className="flex flex-wrap gap-2 mb-4 opacity-0 animate-su-3">
          {[
            ['#4ec9b0', 'Full Stack Engineer'],
            ['#c586c0', 'AI / ML Dev'],
            ['#4fc1ff', 'Data Scientist'],
          ].map(([color, label]) => (
            <div key={label}
              className="inline-flex items-center gap-1.5 px-3 py-1 text-xs
                         border border-white/10 rounded-sm bg-white/[0.03]
                         hover:border-white/20 transition-colors">
              <span className="w-[7px] h-[7px] rounded-full flex-shrink-0" style={{ background: color }} />
              {label}
            </div>
          ))}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs
                          border border-vscode-pink/30 rounded-sm text-vscode-pink">
            <span className="w-[7px] h-[7px] rounded-full bg-vscode-pink flex-shrink-0" />
            @ Sparktech
          </div>
        </div>

        {/* Typewriter */}
        <p className="text-sm text-vscode-dim mb-5 min-h-[25px] opacity-0 animate-su-3">
          {typed}<span className="text-vscode-pink animate-blink">|</span>
        </p>

        {/* Bio */}
        <p className="text-[14px] text-vscode-dim leading-[1.9] max-w-[520px] mb-7 opacity-0 animate-su-4">
          I live at the crossroads of{' '}
          <strong className="text-vscode-blue font-medium">Full Stack engineering</strong>,{' '}
          <strong className="text-vscode-blue font-medium">AI/ML</strong>, and{' '}
          <strong className="text-vscode-blue font-medium">data science</strong>.
          I build systems that are genuinely{' '}
          <strong className="text-vscode-blue font-medium">intelligent and scalable</strong>.
        </p>

        {/* CTAs */}
        <div className="flex gap-2.5 flex-wrap opacity-0 animate-su-5">
          <button onClick={() => onNavigate('projects')}
            className="inline-flex items-center gap-2 px-5 py-2 bg-vscode-blue2 text-white
                       text-xs font-mono rounded-sm hover:opacity-85 transition-opacity">
            📁 Projects
          </button>
          <button onClick={() => onNavigate('about')}
            className="inline-flex items-center gap-2 px-5 py-2 border border-white/14
                       text-vscode-text text-xs font-mono rounded-sm hover:border-white/35 transition-colors">
            👤 About Me
          </button>
          <button onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-5 py-2 border border-white/14
                       text-vscode-text text-xs font-mono rounded-sm hover:border-white/35 transition-colors">
            ✉ Contact
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-px mt-12 border border-vscode-border rounded
                        overflow-hidden opacity-0 animate-su-6">
          {stats.map(([num, label]) => (
            <div key={label}
              className="px-4 py-4 bg-white/[0.02] text-center hover:bg-white/[0.04] transition-colors">
              <span className="font-display text-[22px] font-extrabold text-vscode-bright block mb-0.5">
                {num}
              </span>
              <span className="text-[10px] text-vscode-dim uppercase tracking-widest">{label}</span>
            </div>
          ))}
        </div>

        {/* Socials — icon is ALWAYS brand-colored, pill gets tinted on hover */}
        <div className="flex gap-2 mt-6 flex-wrap opacity-0 animate-su-7">
          {socials.map(({ icon, label, href, color }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-vscode-border
                         rounded-sm text-vscode-dim text-xs transition-all no-underline"
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = color + '66'
                e.currentTarget.style.color = 'var(--bright)'
                e.currentTarget.style.background = color + '15'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = ''
                e.currentTarget.style.color = ''
                e.currentTarget.style.background = ''
              }}
            >
              {/* ✅ Icon always uses brand color — no overriding with var(--dim) */}
              <span style={{ color, display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                {icon}
              </span>
              {label}
            </a>
          ))}
        </div>

      </div>
    </div>
  )
}