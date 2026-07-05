import type { Project } from '../types'

export const PROJECTS: Project[] = [
  {
    name: 'Daniel Words',
    track: 'python',
    oneLiner:
      'Voice-first bilingual (EN/HE) word-practice game for kids — say the word, get instant feedback.',
    why:
      'Real production full-stack pipeline (browser mic → FastAPI → hosted Whisper). Speech-to-text behind a provider abstraction (Groq in prod, on-device faster-whisper in dev), plus cross-language fuzzy matching that handles Hebrew speech transliterated into Latin script.',
    stack: [
      'FastAPI',
      'SQLAlchemy',
      'Pydantic v2',
      'PostgreSQL',
      'Whisper · Groq',
      'faster-whisper',
      'React 18',
      'Tailwind',
      'Framer Motion',
      'Vercel',
      'Railway',
      'Supabase',
    ],
    github: 'https://github.com/eliran17e/daniel-words',
    live: 'https://daniel-words.vercel.app',
    image: {
      src: '/shots/daniel-words.png',
      alt: 'Daniel Words — login screen of the word-practice game',
    },
  },
  {
    name: 'SettleIt',
    track: 'python',
    oneLiner:
      'A group makes a decision together and follows through — an AI agent reads the room, proposes voteable cards, locks a decision, and turns it into missions.',
    why:
      "It's a stateful AI agent, not a chat-with-AI button — it drives the group to a locked decision, then keeps pushing to execution. Realtime over native WebSockets behind a broadcast interface that a Redis backend can drop into later without touching feature code.",
    stack: [
      'FastAPI (async)',
      'REST + WebSocket',
      'PostgreSQL',
      'SQLAlchemy 2.0 (async)',
      'Alembic',
      'Gemini 2.5 Flash',
      'Groq fallback',
      'Tavily',
      'React + TypeScript',
      'Vite',
      'Tailwind',
      'shadcn/ui',
    ],
    github: 'https://github.com/ParnesOmer/SettleIt',
    live: 'https://settle-it-two.vercel.app/',
    image: {
      src: '/shots/settleit.png',
      alt: 'SettleIt — live "Movie night" decision room, inviting the group to join and weigh in',
    },
    role:
      'Team project — my role: architecture + backend (async FastAPI, WebSocket layer, schema, LLM provider abstraction).',
  },
  {
    name: 'Secure Chat',
    track: 'security',
    oneLiner:
      'Semantic Data Loss Prevention for real-time messaging — catches meaning-level leaks, not just keyword matches.',
    why:
      'Instead of paying an LLM call per message, sensitive knowledge is precomputed into embeddings; a multi-stage pipeline (URL analysis → lightweight allow/block/check prefilter → semantic cosine-similarity check) means only the few ambiguous messages reach the expensive stage. Fast enough for real-time.',
    stack: [
      'Node.js',
      'MongoDB',
      'Embeddings',
      'Cosine similarity',
      'VirusTotal',
      'Docker Compose',
    ],
    github: 'https://github.com/eliran17e/Secured_Chat',
    statusNote: 'Runs locally · Docker',
    terminal: [
      '$ docker compose up -d',
      '✓ mongo          ready',
      '✓ dlp-pipeline   ready',
      '» "lunch at 12?"              prefilter → allow',
      '» "Q3 numbers, keep quiet"    cosine 0.91 → block',
    ],
  },
  {
    name: 'simDepot',
    track: 'cpp',
    oneLiner:
      'Command-driven logistics-and-law-enforcement simulation in modern C++ — trucks, troopers, and choppers advancing in discrete time on a pannable ASCII map.',
    why:
      "Textbook MVC with a two-pass update loop so choppers resolve attacks against everyone's final positions each tick. All sim code compiles into a shared sim_core static library that both the executable and the test runner link against.",
    stack: ['C++17', 'CMake', 'MVC', 'doctest', 'CI · Linux + macOS'],
    github: 'https://github.com/eliran17e/MVC',
    statusNote: 'Console CLI',
    terminal: [
      '$ ./simDepot -f depot.dat',
      'Time 4: Truck T1 at (12,8), heading to Fort Point',
      'Time 4: Chopper C2 attacking — resolved vs final positions',
      '$ pan 10 5',
    ],
  },
  {
    name: 'Chess Engine',
    track: 'cpp',
    oneLiner:
      'Console chess engine in modern C++ with full move legality, all end-game conditions, and a multithreaded minimax AI.',
    why:
      'Complete rules engine (castling rights, promotion, checkmate/stalemate, 50-move, threefold repetition, insufficient material) plus a minimax AI whose top-level move evaluation is parallelized across 0–8 threads, with candidate moves ranked through a bounded priority queue.',
    stack: ['C++20', 'CMake', 'std::thread', 'ANSI / Win32 console'],
    github: 'https://github.com/eliran17e/Chess_C-',
    statusNote: 'Console CLI',
    terminal: [
      '$ ./chess --threads 8',
      'White ▸ e2e4',
      'Black ▸ minimax depth 5 · 8 threads · bounded PQ',
      'Black ▸ e7e5   (eval −0.12)',
    ],
  },
]
