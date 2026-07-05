export type Track = 'python' | 'cpp' | 'security'

export interface Project {
  name: string
  track: Track
  oneLiner: string
  why: string
  stack: string[]
  github: string
  live?: string
  /** Shown when there is no live deployment, e.g. "Runs locally · Docker" */
  statusNote?: string
  /** Role note for team projects */
  role?: string
  /** Screenshot shown at the top of the card */
  image?: { src: string; alt: string }
  /** Terminal mockup lines for console projects (lines starting with "$" are prompts) */
  terminal?: string[]
}

export const TRACK_LABELS: Record<Track, string> = {
  python: 'Python / Backend',
  cpp: 'C++ / Systems',
  security: 'Security / ML pipeline',
}

/** Static Tailwind class sets per track (kept literal so Tailwind can see them) */
export const TRACK_STYLES: Record<
  Track,
  { text: string; chip: string; activeBtn: string; terminalPrompt: string }
> = {
  python: {
    text: 'text-track-python',
    chip: 'bg-track-python-tint text-track-python',
    activeBtn: 'border-track-python bg-track-python text-paper',
    terminalPrompt: 'text-track-python-bright',
  },
  cpp: {
    text: 'text-track-cpp',
    chip: 'bg-track-cpp-tint text-track-cpp',
    activeBtn: 'border-track-cpp bg-track-cpp text-paper',
    terminalPrompt: 'text-track-cpp-bright',
  },
  security: {
    text: 'text-track-security',
    chip: 'bg-track-security-tint text-track-security',
    activeBtn: 'border-track-security bg-track-security text-paper',
    terminalPrompt: 'text-track-security-bright',
  },
}
