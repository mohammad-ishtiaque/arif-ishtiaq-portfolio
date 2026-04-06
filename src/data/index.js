export const ME = {
  name: "Arif Ishtiaq",
  role: "Software Developer @ Sparktech",
  location: "Bangladeshi BD",
  email: "kazimdarifishtiaque@gmail.com",
  phone: "+8801864154939",
  dob: "4th February 2000",
  bio: "I live at the crossroads of frontend engineering, AI/ML, and data science. I build systems that aren't just functional but genuinely intelligent and scalable. I make data stories that non-data people actually get.",
  bio2: "Hi, Arif on this side! I am an aspiring computer engineer and am curious to learn new things about life every day! Perfection is something I always aim for. Being big on integrity and authenticity is something I always believe in. I enjoy painting, photography, designing, and editing. Growing up, I have always loved spending quality time making music on the keyboard. Glad to see you, cheers! ",
  links: {
    github: "https://github.com/mohammad-ishtiaque",
    linkedin: "https://www.linkedin.com/in/ishtiaque9833",
    leetcode: "https://leetcode.com/u/ishtiaque-9",
  },
};

export const TYPEWRITER_LINES = [
  "Building intelligent backend systems 🚀",
  "Turning data into decisions 🧠",
  "Exploring LLMs & RAG pipelines 🤖",
  "Always learning, always shipping ✨",
  "Passionate about AI & Data Science 💜",
];

export const FILES = [
  { id: "home", name: "home.tsx", folder: "src", lang: "TypeScript React" },
  { id: "about", name: "about.html", folder: "src", lang: "HTML" },
  { id: "projects", name: "projects.js", folder: "src", lang: "JavaScript" },
  { id: "skills", name: "skills.json", folder: "data", lang: "JSON" },
  { id: "experience", name: "experience.ts", folder: "src", lang: "TypeScript" },
  { id: "contact", name: "contact.css", folder: "src", lang: "CSS" },
  { id: "readme", name: "README.md", folder: "root", lang: "Markdown" },
  { id: "resume", name: "Arif_Ishtiaq_Resume.pdf", folder: "root", lang: "PDF", download: true },
];

export const EDUCATION = [
  {
    id: 1,
    university: "Gono University",
    degree: "Bachelor of Science in Computer Science & Engineering",
    minor: "Minors: Artificial Intelligence & Machine Learning (AI/ML)",
    gpa: "CGPA: 3.91",
    period: "2021 – 2025",
    location: "Nolam, Dhaka, DHK",
    icon: "🎓",
  },
  // {
  //   id: 2,
  //   institution: "New Horizon Public School, Airoli",
  //   degree: "Higher Secondary Education",
  //   gpa: "Class 12th: 89.6%  |  Class 10th: 91.8%",
  //   period: "2007 – 2021",
  //   location: "Airoli, MH",
  //   icon: "🏫",
  // },
];

export const PROJECTS = [
  {
    id: 1, icon: "🛡️", accent: "#ff6fd8",
    type: "Website · AI · Ed Tech",
    name: "Mathsbook Website",
    desc: "Website with three different role School, Teacher, and Student",
    tags: ["React js", "Node js", "Express js", "MongoDB", "Website"],
    link: "https://github.com/mohammad-ishtiaque/mathbook",
    period: "Oct 2025 – Dec 2025",
  },
  {
    id: 2, icon: "🧠", accent: "#6c63ff",
    type: "Mobile · Audio Book · Full Stack",
    name: "Grambix - UNLIMITED EBOOKS & AUDIOBOOKS",
    desc: "A proper audio and e-book solution for book lovers.",
    tags: ["Flutter", "Node js", "Express js", "MongoDB"],
    link: "https://github.com/mohammad-ishtiaque/grambix",
    period: "Jun 2025",
  },
  {
    id: 3, icon: "⚕️", accent: "#22c55e",
    type: "Website · E-commerce · Full Stack",
    name: "DENTAL WEBSITE - Dental E-commerce Website",
    desc: "A website by which user can buy dental equipments.",
    tags: ["Next js", "Redux Toolkit", "Tailwind CSS 4", "Stripe SDK"],
    link: "https://github.com/mohammad-ishtiaque/dental-website",
    period: "Mar 2026",
  },
  {
    id: 4, icon: "🏥", accent: "#38bdf8",
    type: "AI Agent · SaaS · AI Receptionist",
    name: "MEDICAL-AI-CALLING-AGENT",
    desc: "A system of Medical Center rely on AI voice agent to perform 24/7 call",
    tags: ["Python", "Redis", "Openai", "Numpy", "Pandas"],
    link: "https://github.com/mohammad-ishtiaque/Medical-AI-Receptionist-Calling-Agent",
    period: "Feb 2026",
  },
  {
    id: 5, icon: "👷🏼", accent: "#facc15",
    type: "Website · Frontend · Landing page",
    name: "We Mama",
    desc: "A landing page where user can understand which digital service are provided.",
    tags: ["Next Js", "Tailwind css", "Vercel"],
    link: "http://github.com/mohammad-ishtiaque/we-mama-website",
    period: "April 2026",
  },
  {
    id: 6, icon: "📊", accent: "#ef4444",
    type: "Website · Frontend · Dashboard",
    name: "Boat for Sale Dashboard",
    desc: "Admin dashboard from where admin can control the app and see the insight of the users.",
    tags: ["Typescript", "Tailwind css", "React Js"],
    link: "https://github.com/mohammad-ishtiaque/bfs-dashboard",
    period: "April 2026",
  },
];

export const SKILLS = [

  
  {
    group: "Languages",
    items: [
      { name: "Python", pct: 92, color: "#ff6fd8" },
      { name: "C++", pct: 72, color: "#f97316" },
      { name: "JavaScript", pct: 78, color: "#facc15" },
      { name: "TypeScript", pct: 74, color: "#38bdf8" },
      { name: "SQL", pct: 88, color: "#a855f7" },
    ],
  },

  {
    group: "Generative AI & LLM Engineering",
    items: [
      { name: "LangChain", pct: 82, color: "#34d399" },
      { name: "LangGraph", pct: 78, color: "#22c55e" },
      { name: "RAG Pipelines", pct: 85, color: "#38bdf8" },
      { name: "Prompt Engineering", pct: 90, color: "#fbbf24" },
      { name: "Agentic Workflows", pct: 80, color: "#a855f7" },
      { name: "Hugging Face Transformers", pct: 83, color: "#f97316" },
    ],
  },

  {
    group: "AI · ML · Data Science",
    items: [
      { name: "PyTorch", pct: 85, color: "#ef4444" },
      { name: "TensorFlow", pct: 80, color: "#f97316" },
      { name: "scikit-learn", pct: 90, color: "#facc15" },
      { name: "Pandas", pct: 88, color: "#6366f1" },
      { name: "NumPy", pct: 86, color: "#38bdf8" },
      // { name: "spaCy", pct: 80, color: "#22c55e" },
      // { name: "NLTK", pct: 75, color: "#6366f1" },
    ],
  },

  {
    group: "Frontend & Frameworks",
    items: [
      { name: "React Js", pct: 80, color: "#34d399" },
      { name: "Next Js", pct: 72, color: "#6366f1" },
      { name: "Tailwind CSS", pct: 78, color: "#22c55e" },
      { name: "CSS", pct: 75, color: "#38bdf8" },
      { name: "Responsive Design", pct: 88, color: "#22c55e" },
    ],
  },

  {
    group: "Backend & APIs",
    items: [
      { name: "FastAPI", pct: 90, color: "#34d399" },
      { name: "Flask", pct: 82, color: "#6366f1" },
      { name: "Django", pct: 76, color: "#22c55e" },
    ],
  },

  {
    group: "Databases",
    items: [
      { name: "PostgreSQL", pct: 85, color: "#38bdf8" },
      { name: "Redis", pct: 72, color: "#ef4444" },
      // { name: "Neo4j", pct: 80, color: "#4cceb4" },
    ],
  },

  {
    group: "Vector Databases",
    items: [
      { name: "FAISS", pct: 82, color: "#38bdf8" },
      { name: "Pinecone", pct: 78, color: "#a855f7" },
    ],
  },

  {
    group: "DevOps & Tools",
    items: [
      { name: "Docker", pct: 80, color: "#38bdf8" },
      { name: "Git", pct: 90, color: "#f97316" },
      { name: "Linux", pct: 88, color: "#facc15" },
      { name: "AWS", pct: 74, color: "#f97316" },
      { name: "GitHub Actions", pct: 80, color: "#6366f1" },
      { name: "Jupyter", pct: 85, color: "#ff6fd8" },
    ],
  },

  // {
  //   group: "Frontend",
  //   items: [
  //     { name: "React", pct: 80, color: "#38bdf8" },
  //     { name: "Next.js", pct: 72, color: "#a855f7" },
  //     { name: "TailwindCSS", pct: 85, color: "#34d399" },
      
  //   ],
  // },

  // {
  //   group: "Design",
  //   items: [
  //     { name: "Figma", pct: 78, color: "#a855f7" },
  //     { name: "UX Prototyping", pct: 75, color: "#34d399" },
  //   ],
  // },


  // {
  //   group: "Data Analytics",
  //   items: [
  //     { name: "Tableau", pct: 72, color: "#f97316" },
  //     { name: "Power BI", pct: 74, color: "#facc15" },
  //   ],
  // },
];

export const PILLS = [
  "Pandas", "NumPy", "Matplotlib", "Jupyter",
  "RAG", "FAISS", "Pinecone", "LangGraph", "OpenAI API",
  "LLM Fine-tuning", "Vector DBs",
];

export const EXPERIENCE = [
  {
    date: "2025 - Present", current: true,
    role: "Software Developer",
    company: "Sparktech",
    location: "Dhaka",
    desc: "Building intelligent backend systems and AI integrations with scalable design based on UI/UX for an EdTech platform. ML-powered personalization, RAG pipelines, and scalable APIs serving thousands of learners daily.",
    tags: ["Node Js", "Javascript", "Express Js", "MongoDB", " Typescript", "React Js", "Next Js", "Tailwind css", "SQL", "Web Applications", "FastAPI", "Python", "Django", "PostgreSQL", "Docker", "AWS", "GenAI", "React"],
  },
  {
    date: "Jan 2024 - Nov 2024", current: false,
    role: "Junior Frontend Developer",
    company: "Softvence",
    location: "Dhaka",
    desc: "Designed UI for a simulation platform and improved user experience through design thinking principles. Delivered research-backed interface improvements that enhanced usability.",
    tags: ["React Js", "Next JS", "Design Thinking", "API Integration"],
  },
  // {
  //   date: "Jun 2023 - Jul 2023", current: false,
  //   role: "Back End Intern",
  //   company: "Laser Technologies Pvt Ltd",
  //   location: "Navi Mumbai",
  //   desc: "Managed and maintained backend systems and databases to support enterprise-level web applications. Ensured uptime, performance, and data integrity across production systems.",
  //   tags: ["Backend", "Databases", "SQL", "Web Applications"],
  // },
];

export const ACHIEVEMENTS = [
  {
    icon: "🥇",
    title: "2nd Runner Up – Intra University Programming Contest",
    event: "Programming Contest (2023)",
    desc: "Participating and successfully secure the second position amoung the whole Department",
  },
  // {
  //   icon: "🥇",
  //   title: "1st Prize – TechXter Research Paper Presentation",
  //   event: "SIES GST (2025)",
  //   desc: "For research and development on Safe Yatra, focusing on women's safety innovations.",
  // },
  // {
  //   icon: "🥈",
  //   title: "2nd Prize – CSI TechNext Research Paper Presentation",
  //   event: "VIT (2024)",
  //   desc: "'From Traditional to Digital: Evaluating the Role of Spirituality in Mental Health and Therapy.'",
  // },
  // {
  //   icon: "🥇",
  //   title: "1st Prize – Cognition Technical Fest",
  //   event: "SIES GST (2023)",
  //   desc: "For GitaGPT, a web app providing personalized emotional support using AI.",
  // },
];

// export const CERTIFICATIONS = [
//   { name: "Introduction to Statistics",       platform: "Stanford University (via Coursera)", color: "#f97316" },
//   { name: "Introduction to Machine Learning", platform: "Kaggle",                             color: "#4ec9b0" },
//   { name: "AWS Cloud Foundation",             platform: "AWS Educate / Academy",              color: "#facc15" },
// ];

export const TERMINAL_FS_FILES = [
  "home.tsx", "about.html", "projects.js", "skills.json",
  "experience.ts", "contact.css", "README.md", "Arif_Ishtiaq_Resume.pdf"
];

export const TERMINAL_FILE_MAP = {
  "home.tsx": "home",
  "about.html": "about",
  "projects.js": "projects",
  "skills.json": "skills",
  "experience.ts": "experience",
  "contact.css": "contact",
  "README.md": "readme",
};