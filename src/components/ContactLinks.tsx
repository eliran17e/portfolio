const LINKS = [
  { label: 'GitHub', href: 'https://github.com/eliran17e' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/eliran-elisha-68410a338/' },
  { label: 'Email', href: 'mailto:eliran17eli@gmail.com' },
]

export function ContactLinks() {
  return (
    <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
      {LINKS.map(({ label, href }) => (
        <li key={label}>
          <a
            href={href}
            target={href.startsWith('mailto:') ? undefined : '_blank'}
            rel="noreferrer"
            className="font-mono text-sm text-accent underline-offset-4 hover:underline"
          >
            {label}
            <span aria-hidden="true"> ↗</span>
          </a>
        </li>
      ))}
    </ul>
  )
}
