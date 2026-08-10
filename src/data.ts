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
    'BSc ICT student at Mzuzu University building production-quality apps across Android, web and desktop, from a native bridge in Kotlin/JNI to a Tauri desktop editor. Available for freelance and internship work.',
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
  { value: '9+', label: 'Projects built' },
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
    points: ['React + TypeScript frontends with Vite & Tailwind', 'Node.js, Express & Laravel backends', 'Real-time features with WebSockets & Socket.io', 'REST APIs, auth & role-based access (JWT)'],
  },
  {
    title: 'System Architecture',
    icon: 'server',
    description:
      'APIs, native bridges, and backend services that connect everything.',
    points: ['Native bridges via JNI for performance-critical paths', 'Desktop apps with Tauri + Rust', 'Bluetooth & file-system integration', 'Database design: MongoDB, SQLite, Firebase'],
  },
]

export const projects: Project[] = [
  {
    title: 'SwiftStock',
    tagline:
      'A robust, mobile-first inventory management system designed to streamline stock tracking, product management, and reporting.',
    category: 'Full-stack',
    year: '2025',
    visibility: 'Private',
    stack: ['Laravel', 'SQLite', 'Tailwind CSS', 'Vite'],
    problem:
      'Small businesses tracked stock in spreadsheets: error-prone, slow to reconcile, and useless on a phone in the store.',
    approach:
      'Built a mobile-first inventory system on Laravel with SQLite so it runs with zero external infrastructure. Focused the UI on fast stock entry and clear reporting.',
    result:
      'A complete working system covering stock tracking, product management and reporting, designed to be usable from a phone in the store.',
    takeaways:
      'SQLite kept deployment trivial for a single-owner business, the right-sized database choice.',
  },
  {
    title: "AuntJoy's Platform",
    tagline:
      'Connects local restaurants with customers via a high-performance delivery bridge, reducing vendor commission fees by 30%.',
    category: 'Mobile',
    year: '2025',
    visibility: 'Public',
    stack: ['React Native', 'Expo', 'Node.js', 'Redux'],
    repoUrl: 'https://github.com/M8Sh3ck01',
    problem:
      'Local restaurants were locked into delivery platforms charging heavy commissions that ate their already thin margins.',
    approach:
      'Built a React Native + Expo client backed by a Node.js API and Redux state management, designed so vendors deal with customers directly and keep more revenue.',
    result:
      'A direct delivery bridge that cuts vendor commission fees by 30% versus the incumbent platforms.',
  },
  {
    title: 'NexusNotes',
    tagline:
      'A sleek, modern, and high-performance Android note-taking application designed for seamless organization and productivity.',
    category: 'Mobile',
    year: '2024',
    visibility: 'Private',
    stack: ['Kotlin', 'Jetpack Compose', 'Room', 'Firebase'],
    problem:
      'Popular note apps were slow to launch and cluttered, bad for a tool meant to capture thoughts in seconds.',
    approach:
      'Built a native Android app with Kotlin and Jetpack Compose, using Room for instant offline storage and Firebase for optional sync.',
    result:
      'A fast, modern note-taking app with instant local saves and clean, distraction-free Compose UI.',
  },
  {
    title: 'MZuni Marketplace',
    tagline:
      'Empowers university students with a safe, closed-loop trading environment for textbooks and academic supplies.',
    category: 'Mobile',
    year: '2024',
    visibility: 'Public',
    stack: ['Kotlin', 'Firebase', 'Java', 'Material Design'],
    repoUrl: 'https://github.com/M8Sh3ck01',
    problem:
      'Students buy and sell textbooks in scattered WhatsApp groups, with no structure, no trust, and too easy to get scammed.',
    approach:
      'Built a closed-loop trading app for the university community with Kotlin, Firebase auth/data, and Material Design, keeping every transaction inside verified student circles.',
    result:
      'A safe, community-only marketplace for textbooks and academic supplies that keeps trades within the university.',
  },
  {
    title: 'Native Core Bridge',
    tagline:
      'Bridges the gap between high-level JS frameworks and low-level system APIs for performance-critical Bluetooth and file-system operations.',
    category: 'Systems',
    year: '2025',
    visibility: 'Private',
    stack: ['Kotlin', 'Java', 'JNI', 'Android SDK'],
    problem:
      'High-level JS frameworks can\u2019t touch low-level Android system APIs directly, so Bluetooth and file-system work ran slow through generic bridge layers.',
    approach:
      'Wrote a native bridge in Kotlin/Java exposed through JNI, so performance-critical Bluetooth and file-system operations run at native speed under a JS-friendly interface.',
    result:
      'A native core that JS frameworks can call, keeping low-level operations fast without leaving the app ecosystem.',
    takeaways:
      'Learning JNI was worth it; the 30-line native path beat a generic wrapper by a wide margin.',
  },
  {
    title: 'CampusConnect',
    tagline:
      'A high-performance, full-stack marketplace application designed for community-based buying and selling with real-time interaction.',
    category: 'Mobile',
    year: '2024',
    visibility: 'Private',
    stack: ['React Native', 'Expo', 'Node.js', 'MongoDB', 'Socket.io'],
    problem:
      'Campus communities needed a way to buy and sell that felt live, with instant responses and no page refreshes.',
    approach:
      'Combined a React Native + Expo client with a Node.js + MongoDB backend and Socket.io for real-time updates across listings and chats.',
    result:
      'A full-stack marketplace where listings and conversations update in real time across the community.',
  },
  {
    title: 'LocalBlocks',
    tagline:
      'A local-first, block-based desktop editor built with Tauri, combining the power of native performance with modern React tooling.',
    category: 'Desktop',
    year: '2025',
    visibility: 'Public',
    stack: ['React', 'TypeScript', 'Tauri', 'Rust', 'BlockNote', 'Mantine', 'Vite', 'Zustand'],
    repoUrl: 'https://github.com/M8Sh3ck01',
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
    title: 'SmartStock',
    tagline:
      'A visual-first, offline-first inventory management app with smart expiration strategies and a gamified daily workflow.',
    category: 'Mobile',
    year: '2026',
    visibility: 'Public',
    stack: ['React Native', 'Expo', 'NativeWind', 'WatermelonDB', 'Expo Router'],
    problem:
      'Tracking inventory with expiry dates is a chore, and most apps feel like spreadsheets and get abandoned.',
    approach:
      'Built a React Native app with WatermelonDB for fast offline-first storage and Expo Router for navigation. Made the daily flow visual and gamified to keep people actually using it.',
    result:
      'An offline-first inventory app with smart expiration reminders and a workflow designed to make daily stock checks a habit.',
  },
]

export const experience = [
  {
    role: 'Independent Developer',
    company: 'Personal & University Projects',
    period: '2023 - Present',
    description:
      'Designing and shipping 9+ production-quality applications across Android, web and desktop, spanning native bridges, offline-first mobile apps and full-stack platforms.',
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
