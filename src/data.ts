export type Project = {
  title: string
  tagline: string
  category: 'Web' | 'Mobile' | 'Desktop' | 'Full-stack' | 'Systems'
  year: string
  visibility: 'Public' | 'Private'
  stack: string[]
  image?: string
  liveUrl?: string
  repoUrl?: string
  problem: string
  approach: string
  result: string
  takeaways?: string
}

export const profile = {
  name: 'Misheck Champopa',
  role: 'Mobile & Web Architect',
  tagline:
    'I build scalable, native-feeling apps across Android, web, and desktop.',
  pitch:
    'BSc ICT student at Mzuzu University building production-quality apps across Android, web and desktop, from an offline-first music player to a Tauri desktop editor and full-stack ordering platforms. Available for freelance and internship work.',
  availability: true,
  location: 'Mzuzu, Malawi',
  email: 'misheckchampopa01@gmail.com',
  whatsapp: 'https://wa.me/265995191852',
  avatar: '/profile.jpg',
  githubUsername: 'M8Sh3ck01',
}

export const socials = [
  { label: 'GitHub', url: 'https://github.com/M8Sh3ck01' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/misheck-champopa-2b2b26363' },
  { label: 'Email', url: 'mailto:misheckchampopa01@gmail.com' },
]

export const stats = [
  { value: '6', label: 'Projects built' },
  { value: '15+', label: 'Technologies' },
  { value: '4', label: 'Platforms covered' },
  { value: '3+', label: 'Years building' },
]

export const services = [
  {
    title: 'Mobile Apps',
    icon: 'smartphone',
    description:
      'Native Android & cross-platform applications built for performance and feel.',
    points: ['Native Android with Kotlin & Jetpack Compose', 'Cross-platform with React Native & Expo', 'Offline-first data with Room & WatermelonDB', 'Push notifications, auth & Firebase services'],
  },
  {
    title: 'Web Platforms',
    icon: 'globe',
    description:
      'Full-stack, scalable systems with clean architecture and modern UX.',
    points: ['React + TypeScript frontends with Vite & Tailwind', 'Node.js & Express backends with JWT auth', 'Real-time features with WebSockets & Socket.io', 'REST API design & role-based access'],
  },
  {
    title: 'System Architecture',
    icon: 'server',
    description:
      'Desktop apps, APIs, and backend services that connect everything.',
    points: ['Desktop apps with Tauri + Rust', 'Offline-first storage with Room, SQLite & WatermelonDB', 'OAuth, payments & real-time WebSocket features', 'Database design: MySQL, MongoDB, SQLite, Firebase'],
  },
]

export const projects: Project[] = [
  {
    title: "AuntJoy's Platform",
    tagline:
      'A web-based food ordering platform for Aunt Joy\u2019s Restaurant in Mzuzu, built with object-oriented PHP and a clean MVC structure.',
    category: 'Web',
    year: '2025',
    visibility: 'Public',
    stack: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS'],
    repoUrl: 'https://github.com/M8Sh3ck01/Auntjoys-app',
    problem:
      'A local restaurant ran on phone calls and word-of-mouth, with no structured way for customers to browse the menu or place orders.',
    approach:
      'Built an OOP PHP platform following MVC with a normalized MySQL schema, prepared statements for every query, session-based auth, and role-based access for customer, admin, sales and manager accounts.',
    result:
      'A working web ordering platform where customers browse meals and place orders while staff manage the flow through role-scoped dashboards.',
    takeaways:
      'A normalized schema and prepared statements kept queries fast and safe against SQL injection.',
  },
  {
    title: 'NexusNotes',
    tagline:
      'A sleek, modern, and high-performance Android note-taking application designed for seamless organization and productivity.',
    category: 'Mobile',
    year: '2024',
    visibility: 'Public',
    stack: ['Kotlin', 'Jetpack Compose', 'Room', 'Firebase'],
    repoUrl: 'https://github.com/M8Sh3ck01/NexusNotes-app',
    problem:
      'Popular note apps were slow to launch and cluttered, bad for a tool meant to capture thoughts in seconds.',
    approach:
      'Built a native Android app with Kotlin and Jetpack Compose, using Room for instant offline storage and Firebase for optional sync.',
    result:
      'A fast, modern note-taking app with instant local saves and clean, distraction-free Compose UI.',
  },
  {
    title: 'LocalBlocks',
    tagline:
      'A local-first, block-based desktop editor built with Tauri, combining the power of native performance with modern React tooling.',
    category: 'Desktop',
    year: '2025',
    visibility: 'Public',
    stack: ['React', 'TypeScript', 'Tauri', 'Rust', 'BlockNote', 'Mantine', 'Vite', 'Zustand'],
    repoUrl: 'https://github.com/M8Sh3ck01/LocalBlocks',
    problem:
      'Web-based editors are slow and lose your data to the cloud. A local-first editor should feel native and keep everything on disk.',
    approach:
      'Built the editor UI with React, TypeScript, BlockNote and Mantine, then wrapped it in Tauri + Rust so the whole app runs as a lightweight native binary with local-first storage.',
    result:
      'A native-feeling, block-based desktop editor that stores data locally and stays fast on every keystroke.',
  },
  {
    title: 'TrustFund Restaurant',
    tagline:
      'A full-stack cafeteria management system for university settings, covering daily menus, catered event bookings, and meal subscriptions.',
    category: 'Full-stack',
    year: '2024',
    visibility: 'Private',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'WebSockets', 'JWT'],
    problem:
      'University cafeterias ran menus, bookings and meal plans on paper and word-of-mouth, with no central record.',
    approach:
      'Built a React + Vite frontend with a Node.js/Express API, MongoDB persistence, WebSockets for live updates, and JWT auth for students and staff roles.',
    result:
      'A complete cafeteria system handling daily menus, catered event bookings and meal subscriptions with secure role-based access.',
  },
  {
    title: 'Slack/Discord Workspace Clone',
    tagline:
      'A Slack/Discord-style messaging workspace for web and mobile PWA, built with React 19 and a feature-sliced architecture.',
    category: 'Web',
    year: '2026',
    visibility: 'Public',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'TanStack Query', 'Zustand', 'Radix UI'],
    repoUrl: 'https://github.com/M8Sh3ck01/slack-discord-clone',
    problem:
      'Real-time team messaging is either heavyweight SaaS or a serious engineering challenge to build well, spanning channels, threads and presence.',
    approach:
      'Built a web and mobile PWA with React 19, TypeScript and Vite, organized into feature slices (workspaces and channels, chat feed, thread panel, user presence). Used TanStack Query for server state, Zustand for UI state, TanStack Virtual for long feeds, and MSW to mock the REST API before a real backend is wired in.',
    result:
      'A fully functional workspace clone covering channels, threads and presence on web and mobile, with a documented path to a production backend.',
    takeaways:
      'Virtualizing the chat feed kept rendering smooth even with thousands of messages in the list.',
  },
  {
    title: 'Sonic',
    tagline:
      'A high-fidelity, offline-first Android music player engineered for stable playback and a buttery-smooth local library.',
    category: 'Mobile',
    year: '2026',
    visibility: 'Private',
    stack: ['Kotlin', 'Jetpack Compose', 'Media3', 'Room', 'Koin'],
    problem:
      'Streaming apps are useless without a connection, and stock players rarely feel native, so local music on Android is often a rough experience.',
    approach:
      'Built a pure-Kotlin player on Jetpack Media3 (exoplayer + session) with a Room-backed offline catalog, a Compose Material 3 UI and Koin dependency injection, designed around modern Android background-execution rules.',
    result:
      'A local-first player with fast offline file discovery and stable, stutter-free playback for wired and wireless headphones.',
    takeaways:
      'Locking an architecture PRD before coding kept playback, lifecycle and UI work on one clean baseline.',
  },
]

export const experience = [
  {
    role: 'Independent Developer',
    company: 'Personal & University Projects',
    period: '2023 - Present',
    description:
      'Designing and shipping 6 production-quality applications across Android, web and desktop, spanning offline-first mobile apps, native desktop editors and full-stack platforms.',
  },
  {
    role: 'BSc ICT Student',
    company: 'Mzuzu University',
    period: '2024 - Present',
    description:
      'Currently Level 3, Semester 2. Applying coursework in databases, networking and software engineering to real, deployed projects.',
  },
]

export const education = [
  {
    degree: 'B.Sc. Information & Communication Technology (ICT)',
    school: 'Mzuzu University',
    period: '2024 - Present',
  },
]

export const testimonials: {
  quote: string
  name: string
  role: string
}[] = []

export const contactForm = {
  // Create a free account at https://web3forms.com, add your inbox email, then paste your access key here.
  web3formsAccessKey: 'bc7cdd0e-b410-481e-b813-18abe394c917',
}
