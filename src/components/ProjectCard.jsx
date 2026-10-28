import { Github, ExternalLink, BrainCircuit, Workflow, HeartPulse, CarFront, Code2 } from 'lucide-react'
import Tag from './Tag.jsx'

const icons = { BrainCircuit, Workflow, HeartPulse, CarFront }

export default function ProjectCard({ p }) {
  const Icon = icons[p.icon] || Code2
  return (
    <article className="flex flex-col rounded-2xl border border-line bg-panel p-6 transition-colors hover:border-violet/60">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-violet/30 to-aqua/20 text-aqua">
          <Icon size={20} aria-hidden="true" />
        </span>
        <div>
          <h3 className="text-lg font-semibold">{p.title}</h3>
          <p className="text-xs text-slate-500">{p.category}</p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-slate-400">{p.description}</p>
      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
        {p.tags.map((t) => <Tag key={t}>{t}</Tag>)}
      </ul>
      <div className="mt-6 flex flex-wrap gap-3 pt-2">
        <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2 text-sm font-medium text-white hover:bg-white/5">
          <Github size={16} /> GitHub
        </a>
        {p.demo && (
          <a href={p.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-aqua px-4 py-2 text-sm font-semibold text-night">
            <ExternalLink size={16} /> Démo
          </a>
        )}
      </div>
    </article>
  )
}