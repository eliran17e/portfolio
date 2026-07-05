import { ContactLinks } from './ContactLinks'
import { ResumeButtons } from './ResumeButtons'

export function Footer() {
  return (
    <footer className="mt-20 border-t border-line py-10 sm:mt-28">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <ContactLinks />
        <ResumeButtons />
      </div>
      <p className="mt-8 font-mono text-xs text-muted">
        Eliran Elisha · eliran17eli@gmail.com
      </p>
    </footer>
  )
}
