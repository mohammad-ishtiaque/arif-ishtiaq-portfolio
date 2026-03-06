import { useState, useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import { ME } from '../data'
import { GitHubIcon, LinkedInIcon, MailIcon } from '../icons'

// ── Replace this with your Formspree form ID ──────────────────────────────
// 1. Go to https://formspree.io and sign up free
// 2. Create a new form → copy the ID from the endpoint URL
// 3. Paste it below (just the ID part, e.g. 'xyzabc12')
const FORMSPREE_ID = 'myknypqb'

// ── Brand-colored social icons ─────────────────────────────────────────────
const MediumIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
  </svg>
)
const TableauIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M11.654 0v2.924H9.12V0h2.534zm-5.41 1.21v2.13H4.118V1.21H6.244zm10.91 0v2.13h-2.127V1.21h2.127zm-5.5 3.584v3.327H8.73V4.794h2.924zm-5.5 1.332v2.522H4.03V6.126h2.124zm11 0v2.522h-2.127V6.126h2.127zM.63 6.244v2.13H0v-2.13h.63zm22.74 0v2.13H24v-2.13h-.63zM11.654 9.12v2.924H9.12V9.12h2.534zm-11.024.454v2.13H0v-2.13h.63zm22.74 0v2.13H24v-2.13h-.63zM6.244 10.452v2.522H4.118v-2.522H6.244zm11 0v2.522h-2.127v-2.522h2.127zM11.654 13.956v2.924H9.12v-2.924h2.534zm-11.024.454v2.13H0v-2.13h.63zm22.74 0v2.13H24v-2.13h-.63zM6.244 15.288v2.52H4.118v-2.52H6.244zm11 0v2.52h-2.127v-2.52h2.127zM11.654 18.752v3.324H9.12v-3.324h2.534zm-5.41 1.33v2.13H4.118v-2.13H6.244zm10.91 0v2.13h-2.127v-2.13h2.127zM11.654 21.076V24H9.12v-2.924h2.534z" />
  </svg>
)
const LeetCodeIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H19.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
  </svg>
)
const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
)
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
)

const SOCIAL_META = {
  email: { color: '#4ec9b0', bg: 'rgba(78,201,176,0.08)' },
  linkedin: { color: '#0a66c2', bg: 'rgba(10,102,194,0.08)' },
  github: { color: '#e6edf3', bg: 'rgba(230,237,243,0.06)' },
  medium: { color: '#d0d0d0', bg: 'rgba(208,208,208,0.06)' },
  tableau: { color: '#e97627', bg: 'rgba(233,118,39,0.08)' },
  leetcode: { color: '#ffa116', bg: 'rgba(255,161,22,0.08)' },
  youtube: { color: '#ff4444', bg: 'rgba(255,68,68,0.08)' },
  instagram: { color: '#e1306c', bg: 'rgba(225,48,108,0.08)' },
}

// status: 'idle' | 'sending' | 'sent' | 'error'
export default function ContactPage({ onToast }) {
  useReveal('contact')
  const [status, setStatus] = useState('idle')
  const formRef = useRef()

  const contactLinks = [
    { icon: <MailIcon />, label: 'email', value: ME.email, href: `mailto:${ME.email}` },
    { icon: <LinkedInIcon />, label: 'linkedin', value: 'linkedin.com/in/ishtiaque9833', href: ME.links.linkedin },
    { icon: <GitHubIcon />, label: 'github', value: 'github.com/mohammad-ishtiaque', href: ME.links.github },
    { icon: <LeetCodeIcon />, label: 'leetcode', value: 'leetcode.com/u/ishtiaque-9', href: ME.links.leetcode },
   ]

  const handleSend = async () => {
    const form = formRef.current
    if (!form) return

    // Basic validation
    const data = new FormData(form)
    if (!data.get('name')?.trim() || !data.get('email')?.trim() || !data.get('message')?.trim()) {
      onToast?.('⚠️', 'Please fill in all required fields.')
      return
    }

    setStatus('sending')

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })

      if (res.ok) {
        setStatus('sent')
        form.reset()
        onToast?.('💜', "Message sent! I'll get back to you soon.")
      } else {
        const json = await res.json()
        throw new Error(json?.errors?.[0]?.message || 'Submission failed')
      }
    } catch (err) {
      setStatus('error')
      onToast?.('❌', 'Failed to send , please email me directly.')
      console.error('Formspree error:', err)
    }
  }

  const inputClass = `
    w-full bg-white/[0.03] border border-vscode-border rounded-sm
    text-vscode-text font-mono text-xs px-3 py-2 outline-none mb-3
    placeholder:text-vscode-dim/50 focus:border-vscode-blue2 transition-colors
  `

  return (
    <div className="px-12 py-12 max-w-[940px]">
      <p className="text-vscode-gcm italic text-[14px] mb-3">/* contact.css — let's build something */</p>
      <h2 className="font-display text-[35px] font-extrabold text-vscode-bright tracking-tight mb-1">
        Contact
      </h2>
      <p className="text-vscode-dim text-[14px] mb-8">// open to work, collabs &amp; good conversations</p>

      <div className="grid grid-cols-2 gap-7">

        {/* Left — social links */}
        <div>
          <div className="text-[20px] uppercase tracking-[0.2em] text-vscode-green mb-3">
            Find me on
          </div>
          {contactLinks.map(({ icon, label, value, href }) => {
            const meta = SOCIAL_META[label] ?? { color: '#888', bg: 'rgba(255,255,255,0.04)' }
            return (
              <a
                key={label}
                href={href}
                target={label === 'email' ? '_self' : '_blank'}
                rel="noreferrer"
                className="reveal flex items-center gap-3 px-3.5 py-2.5 border border-vscode-border
                           rounded no-underline mb-2 transition-all"
                style={{ background: 'rgba(255,255,255,0.01)' }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = meta.color + '55'
                  e.currentTarget.style.background = meta.bg
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = ''
                  e.currentTarget.style.background = 'rgba(255,255,255,0.01)'
                }}
              >
                <span
                  className="w-8 h-8 flex items-center justify-center rounded flex-shrink-0"
                  style={{ color: meta.color, background: meta.bg, border: `1px solid ${meta.color}33` }}
                >
                  {icon}
                </span>
                <div className="min-w-0">
                  <span className="block text-[12px] tracking-widest uppercase mb-0.5 font-semibold"
                    style={{ color: meta.color }}>
                    {label}
                  </span>
                  <span className="text-[12px] text-vscode-text truncate block">{value}</span>
                </div>
                <span className="ml-auto text-[12px] opacity-25 flex-shrink-0">↗</span>
              </a>
            )
          })}
        </div>

        {/* Right — contact form */}
        <div className="reveal">
          <div className="text-[20px] uppercase tracking-[0.2em] text-vscode-green mb-3">
            Send a message
          </div>

          <form ref={formRef}>
            <label className="block text-[12px] text-vscode-dim tracking-widest uppercase mb-1.5">
              // your_name <span style={{ color: '#f44747' }}>*</span>
            </label>
            <input name="name" type="text" placeholder="string" required className={inputClass} />

            <label className="block text-[12px] text-vscode-dim tracking-widest uppercase mb-1.5">
              // your_email <span style={{ color: '#f44747' }}>*</span>
            </label>
            <input name="email" type="email" placeholder="string" required className={inputClass} />

            <label className="block text-[12px] text-vscode-dim tracking-widest uppercase mb-1.5">
              // subject
            </label>
            <input name="subject" type="text" placeholder="string" className={inputClass} />

            <label className="block text-[12px] text-vscode-dim tracking-widest uppercase mb-1.5">
              // message <span style={{ color: '#f44747' }}>*</span>
            </label>
            <textarea
              name="message"
              rows={4}
              placeholder="'''your message'''"
              required
              className={`${inputClass} resize-none`}
            />
          </form>

          <button
            onClick={handleSend}
            disabled={status === 'sending' || status === 'sent'}
            className="w-full px-5 py-2.5 font-mono text-xs rounded-sm text-left transition-opacity"
            style={{
              background: status === 'sent' ? 'rgba(78,201,176,0.25)' :
                status === 'error' ? 'rgba(244,71,71,0.25)' : 'var(--blue2)',
              color: status === 'sent' ? '#4ec9b0' :
                status === 'error' ? '#f44747' : 'white',
              opacity: status === 'sending' ? 0.6 : 1,
              cursor: status === 'sending' || status === 'sent' ? 'default' : 'pointer',
            }}
          >
            {status === 'sending' ? '→ Sending...' :
              status === 'sent' ? '→ Sent! 💜' :
                status === 'error' ? '→ failed - try again' :
                  '→ send_message()'}
          </button>

          {status !== 'sent' && (
            <p className="text-[12px] text-vscode-dim mt-2 opacity-80">
              // Powered by Formspree (lands directly in my inbox) :p
            </p>
          )}
        </div>
      </div>
    </div>
  )
}