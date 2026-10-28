import { Github, ExternalLink, ImageIcon, BrainCircuit, Workflow, HeartPulse, CarFront, Code2 } from 'lucide-react'

const icons = { BrainCircuit, Workflow, HeartPulse, CarFront }
import Tag from './Tag.jsx'

export default function ProjectCard({ p }) {
  const Icon = icons[p.icon] || Code2
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-panel transition-colors hover:border-violet/60">
      {p.screenshot ? (
        <img src={p.screenshot} alt={`Capture d’écran du projet ${p.title}`} loading="lazy" className="aspect-video w-full object-cover" />
      ) : (
        <div className="flex aspect-video flex-col items-center justify-center gap-2 border-b border-dashed border-line text-xs text-slate-500">
          <ImageIcon size={22} aria-hidden="true" /> Capture d’écran à ajouter
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-violet/30 to-aqua/20 text-aqua"><Icon size={20} aria-hidden="true" /></span>
          <div>
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="text-xs text-slate-500">{p.category}</p>
          </div>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-slate-400">{p.description}</p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">{p.tags.map((t) => <Tag key={t}>{t}</Tag>)}</ul>
        <div className="mt-6 flex flex-wrap gap-3 pt-2">
          <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2 text-sm font-medium text-white hover:bg-white/5">
            <Github size={16} /> {p.profileLink ? 'GitHub (profil)' : 'GitHub'}
          </a>
          {p.demo && (
            <a href={p.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-aqua px-4 py-2 text-sm font-semibold text-night">
              <ExternalLink size={16} /> Démo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
