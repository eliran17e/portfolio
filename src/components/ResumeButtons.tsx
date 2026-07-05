const RESUMES = [
  { label: 'Resume — General', href: '/resume-general.pdf' },
  { label: 'Resume — Python', href: '/resume-python.pdf' },
]

export function ResumeButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      {RESUMES.map(({ label, href }) => (
        <a
          key={href}
          href={href}
          download
          className="border border-ink px-4 py-2 font-mono text-sm transition-colors hover:bg-ink hover:text-paper"
        >
          {label}
        </a>
      ))}
    </div>
  )
}
