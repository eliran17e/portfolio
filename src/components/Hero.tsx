import { ContactLinks } from './ContactLinks'
import { ResumeButtons } from './ResumeButtons'

export function Hero() {
  return (
    <header className="pt-16 sm:pt-24">
      <p className="font-mono text-xs uppercase tracking-widest text-muted">
        Portfolio · 2026
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
        Eliran Elisha
      </h1>
      <p className="mt-3 text-lg sm:text-xl">
        Junior software developer —{' '}
        <span className="font-medium text-track-python">Python/backend</span> &amp;{' '}
        <span className="font-medium text-track-cpp">C++/systems</span>.
      </p>
      <p className="mt-5 max-w-xl leading-relaxed text-muted">
        CS graduate (B.Sc., Tel-Hai College, 2026) and alumnus of the
        Excellenteam bootcamp, mentored by engineers from Google, NVIDIA, and
        Check Point. I build production Python backends and write modern C++
        where correctness and performance matter.
      </p>
      <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <ContactLinks />
        <ResumeButtons />
      </div>
    </header>
  )
}
