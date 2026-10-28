import { Sparkles } from 'lucide-react'
import Section from './Section.jsx'
import { interests } from '../data/content.js'

export default function About() {
  return (
    <Section id="about" title="À propos">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-4 leading-relaxed text-slate-400">
          <p>Je prépare un Master 2 en Systèmes Distribués et Intelligence Artificielle à l’ENSET Mohammedia (Université Hassan II), après une Licence en Informatique, mention Bien, à l’ENS Marrakech.</p>
          <p>Mon parcours m’a amenée du développement web et mobile vers l’IA : j’aime construire des applications complètes où un modèle, une API et une interface travaillent ensemble.</p>
          <p>Je recherche un stage de fin d’études (PFE) en 2027 dans l’ingénierie IA, la Data Science, les LLM, le RAG ou les agents IA.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Centres d’intérêt</h3>
          <ul className="mt-4 space-y-3">
            {interests.map((i) => (
              <li key={i} className="flex items-start gap-3"><Sparkles size={18} className="mt-0.5 shrink-0 text-violet" aria-hidden="true" /><span>{i}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
