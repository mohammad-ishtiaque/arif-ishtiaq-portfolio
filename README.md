# Arif Ishtiaq — Developer Portfolio

A VS Code-themed developer portfolio built with React, Vite, and Tailwind CSS v3. Features a built-in AI assistant powered by OpenAI, a serverless API proxy, an interactive terminal, and a contact form.


---

## Project Structure

```
portfolio/
├── api/
│   └── chat.js                  # Serverless proxy for OpenAI API (keeps key server-side)
├── public/
│   └── Arif_Ishtiaq_Resume.pdf # Resume (served as static asset)
├── src/
│   ├── components/
│   │   ├── TitleBar.jsx          # MacOS chrome
│   │   ├── MenuBar.jsx           # File / Edit / View menu
│   │   ├── ActivityBar.jsx       # Left icon bar with Copilot toggle
│   │   ├── Sidebar.jsx           # File explorer panel
│   │   ├── TabBar.jsx            # Open file tabs
│   │   ├── Breadcrumb.jsx        # Path display
│   │   ├── Terminal.jsx          # Interactive terminal with real commands
│   │   ├── StatusBar.jsx         # Bottom status bar
│   │   ├── CommandPalette.jsx    # Ctrl+P file search
│   │   ├── Toast.jsx             # Notification toasts
│   │   ├── MobileSidebar.jsx     # Drawer navigation for mobile
│   ├── pages/
│   │   ├── HomePage.jsx          # Landing with typewriter effect
│   │   ├── AboutPage.jsx         # Bio and links
│   │   ├── ProjectsPage.jsx      # Project cards
│   │   ├── SkillsPage.jsx        # Skills with progress bars
│   │   ├── ExperiencePage.jsx    # Work history timeline
│   │   ├── ContactPage.jsx       # Contact form and social links
│   │   └── ReadmePage.jsx        # Markdown-style README page
│   ├── hooks/
│   │   ├── useTypewriter.js      # Typewriter animation hook
│   │   ├── useClock.js           # Live clock hook
│   │   ├── useReveal.js          # Scroll reveal hook
│   │   └── useTheme.js           # Theme switching hook
│   ├── data/
│   │   └── index.js              # All portfolio data in one place
│   ├── icons/
│   │   └── index.jsx             # SVG icons as React components
│   ├── App.jsx                   # Main layout and routing
│   ├── main.jsx                  # React entry point
│   └── index.css                 # Tailwind directives and custom CSS
├── .env                          # Environment variables (not committed)
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
# Runs at http://localhost:5173

# Build for production
npm run build

# Preview production build
npm run preview
```

<!-- ---

## Environment Variables

Create a `.env` file in the project root:

```env
OPENAI_API_KEY=sk-proj-your-key-here
```

The OpenAI key is used server-side only via the `/api/chat` serverless function. It is never exposed to the browser.

For deployment on Vercel, add `OPENAI_API_KEY` under Project Settings > Environment Variables, then redeploy.

---

## AI Assistant (Copilot)

The portfolio includes a built-in AI chat panel that answers questions about Arif's projects, experience, skills, and background.

- Powered by `gpt-4o-mini` via a serverless Vercel function at `/api/chat`
- Free message limit enforced via `localStorage` (per browser, per device)
- After the free limit, a retro dino game modal appears — score 50 points to unlock bonus messages, or support via Buy Me a Coffee
- Chat logs are silently sent to email via Formspree after each response (no login required from the visitor)
- Draggable left edge to resize the panel (260px to 520px)
- Fully scroll-isolated — the main page does not scroll when using the chat

--- -->

## Terminal Commands

Open the terminal via the Terminal menu or the bottom status bar, then try:

```
help              list all available commands
ls                list files in the explorer
cat projects.js   open a file in the editor
open about.html   same as cat
whoami            show personal info
git log           see recent commits
python --version  Python 3.11.0
clear             clear the terminal
```

---

<!-- ## Customisation

All portfolio data lives in `src/data/index.js`. Update:

- `ME` — name, role, email, social links
- `PROJECTS` — project cards
- `EXPERIENCE` — work history timeline
- `SKILLS` — skill groups and levels
- `EDUCATION` — academic background
- `TYPEWRITER_LINES` — animated text on the home page

--- -->

## Deployment

Vercel (recommended):

```bash
npm i -g vercel
vercel
```

<!-- Add `OPENAI_API_KEY` to Vercel environment variables after deploying. The `/api/chat.js` file is automatically detected as a serverless function by Vercel. -->

---

## Tech Stack

React, Vite, Tailwind CSS v3, OpenAI API (gpt-4o-mini), Vercel Serverless Functions, Formspree
