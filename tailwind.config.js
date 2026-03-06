/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // VS Code dark theme palette
        vscode: {
          bg:        '#1e1e1e',  // editor background
          bg2:       '#252526',  // sidebar background
          bg3:       '#2d2d2d',  // menu bar
          bg4:       '#333333',  // activity bar
          title:     '#1a1a2e',  // title bar (deep navy)
          border:    '#3c3c3c',
          text:      '#cccccc',
          dim:       '#777777',
          bright:    '#ffffff',
          blue:      '#4fc1ff',
          blue2:     '#007acc',  // VS Code brand blue
          green:     '#4ec9b0',
          gcm:       '#6a9955',  // comment green
          yellow:    '#dcdcaa',
          orange:    '#ce9178',
          purple:    '#c586c0',
          pink:      '#ff6fd8',
          red:       '#f44747',
        }
      },
      fontFamily: {
        mono:    ['JetBrains Mono', 'monospace'],
        display: ['Syne', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['10px', '1.4'],
        'xs':  ['11px', '1.5'],
        'sm':  ['12px', '1.6'],
        'md':  ['13px', '1.7'],
        'base':['14px', '1.8'],
      },
      animation: {
        'slide-up':   'slideUp 0.5s ease forwards',
        'fade-up':    'fadeUp 0.2s ease forwards',
        'fade-in':    'fadeIn 0.15s ease',
        'toast-in':   'toastIn 0.3s ease',
        'blink':      'blink 1.1s step-end infinite',
        'su-1': 'slideUp 0.5s ease 0.1s forwards',
        'su-2': 'slideUp 0.5s ease 0.3s forwards',
        'su-3': 'slideUp 0.5s ease 0.5s forwards',
        'su-4': 'slideUp 0.5s ease 0.7s forwards',
        'su-5': 'slideUp 0.5s ease 0.9s forwards',
        'su-6': 'slideUp 0.5s ease 1.1s forwards',
        'su-7': 'slideUp 0.5s ease 1.3s forwards',
      },
      keyframes: {
        slideUp:  { from: { opacity: '0', transform: 'translateY(12px)' }, to: { opacity: '1', transform: 'none' } },
        fadeUp:   { from: { opacity: '0', transform: 'translateY(6px)' },  to: { opacity: '1', transform: 'none' } },
        fadeIn:   { from: { opacity: '0' }, to: { opacity: '1' } },
        toastIn:  { from: { opacity: '0', transform: 'translateX(16px)' }, to: { opacity: '1', transform: 'none' } },
        blink:    { '50%': { opacity: '0' } },
      },
      letterSpacing: {
        widest2: '0.15em',
      },
    },
  },
  plugins: [],
}
