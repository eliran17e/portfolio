import type { Project } from '../types'
import { TRACK_LABELS, TRACK_STYLES } from '../types'

function Terminal({ lines, accentClass }: { lines: string[]; accentClass: string }) {
  return (
    <div aria-hidden="true" className="overflow-x-auto border-b border-line bg-ink px-5 py-4 sm:px-7">
      <pre className="font-mono text-xs leading-6 text-paper/70">
        {lines.map((line, i) => (
          <div key={i} className={line.startsWith('$') ? accentClass : undefined}>
            {line}
          </div>
        ))}
      </pre>
    </div>
  )
}

export function ProjectCard({ project }: { project: Project }) {
  const { name, track, oneLiner, why, stack, github, live, statusNote, role, image, terminal } =
    project
  const styles = TRACK_STYLES[track]

  return (
    <article className="card-in overflow-hidden border border-line">
      {image ? (
        <a href={live ?? github} target="_blank" rel="noreferrer" tabIndex={-1}>
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className="aspect-[16/10] w-full border-b border-line object-cover object-top"
          />
        </a>
      ) : (
        terminal && <Terminal lines={terminal} accentClass={styles.terminalPrompt} />
      )}

      <div className="p-5 sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
          <p
            className={`inline-block px-2 py-1 font-mono text-xs uppercase tracking-widest ${styles.chip}`}
          >
            {TRACK_LABELS[track]}
          </p>
          {live ? (
            <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-live" />
              Live
            </p>
          ) : (
            statusNote && (
              <p className="font-mono text-xs uppercase tracking-widest text-muted">
                {statusNote}
              </p>
            )
          )}
        </div>

        <h3 className="mt-3 text-xl font-semibold tracking-tight">{name}</h3>
        <p className="mt-1.5 leading-relaxed text-muted">{oneLiner}</p>

        <p className="mt-4 leading-relaxed">{why}</p>

        {role && <p className="mt-3 text-sm leading-relaxed text-muted">{role}</p>}

        <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-1.5">
          {stack.map((item) => (
            <li key={item} className="font-mono text-xs text-muted">
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-5 border-t border-line pt-4">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-sm text-accent underline-offset-4 hover:underline"
          >
            GitHub<span aria-hidden="true"> ↗</span>
          </a>
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-sm text-accent underline-offset-4 hover:underline"
            >
              Live<span aria-hidden="true"> ↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
