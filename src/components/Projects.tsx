import { useState } from 'react'
import { PROJECTS } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { TrackFilter, type Filter } from './TrackFilter'

const VALID_FILTERS: Filter[] = ['all', 'python', 'cpp', 'security']

function filterFromUrl(): Filter {
  const param = new URLSearchParams(window.location.search).get('track')
  return VALID_FILTERS.includes(param as Filter) ? (param as Filter) : 'all'
}

function filterToUrl(filter: Filter) {
  const url = new URL(window.location.href)
  if (filter === 'all') {
    url.searchParams.delete('track')
  } else {
    url.searchParams.set('track', filter)
  }
  window.history.replaceState(null, '', url)
}

export function Projects() {
  const [filter, setFilter] = useState<Filter>(filterFromUrl)

  const counts = {
    all: PROJECTS.length,
    python: PROJECTS.filter((p) => p.track === 'python').length,
    cpp: PROJECTS.filter((p) => p.track === 'cpp').length,
    security: PROJECTS.filter((p) => p.track === 'security').length,
  }

  const visible =
    filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.track === filter)

  const handleChange = (next: Filter) => {
    setFilter(next)
    filterToUrl(next)
  }

  return (
    <section aria-labelledby="projects-heading" className="mt-20 sm:mt-28">
      <h2
        id="projects-heading"
        className="font-mono text-xs uppercase tracking-widest text-muted"
      >
        Selected projects
      </h2>
      <div className="mt-5">
        <TrackFilter active={filter} counts={counts} onChange={handleChange} />
      </div>
      <div className="mt-8 flex flex-col gap-6">
        {visible.map((project) => (
          <ProjectCard key={`${filter}-${project.name}`} project={project} />
        ))}
      </div>
    </section>
  )
}
