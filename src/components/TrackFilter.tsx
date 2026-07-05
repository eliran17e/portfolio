import type { Track } from '../types'
import { TRACK_STYLES } from '../types'

export type Filter = Track | 'all'

interface TrackFilterProps {
  active: Filter
  counts: Record<Filter, number>
  onChange: (filter: Filter) => void
}

const OPTIONS: { value: Filter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'python', label: 'Python / Backend' },
  { value: 'cpp', label: 'C++ / Systems' },
  { value: 'security', label: 'Security' },
]

function activeClasses(value: Filter): string {
  if (value === 'all') return 'border-ink bg-ink text-paper'
  return TRACK_STYLES[value].activeBtn
}

export function TrackFilter({ active, counts, onChange }: TrackFilterProps) {
  return (
    <div role="group" aria-label="Filter projects by track" className="flex flex-wrap gap-2">
      {OPTIONS.map(({ value, label }) => {
        const isActive = active === value
        return (
          <button
            key={value}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(value)}
            className={`border px-3 py-1.5 font-mono text-xs uppercase tracking-wide transition-colors ${
              isActive
                ? activeClasses(value)
                : 'border-line text-muted hover:border-muted hover:text-ink'
            }`}
          >
            {label} ({counts[value]})
          </button>
        )
      })}
    </div>
  )
}
