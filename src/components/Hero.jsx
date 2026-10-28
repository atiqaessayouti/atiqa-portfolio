import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react'
import { profile } from '../data/content.js'
import NeuralArt from './NeuralArt.jsx'

const btn = 'inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5'
const social = 'rounded-lg p-2 text-slate-400 transition-colors hover:text-white'

export default function Hero() {
  return (
    <section id="top" className="bg-glow pt-16">
      <div className="mx-auto grid min-h-[92vh] max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-aqua/40 bg-aqua/10 px-3 py-1 text-xs font-medium text-aqua">
            <span className="h-1.5 w-1.5 rounded-full bg-aqua" aria-hidden="true" /> Open to PFE 2027
          </p>
          <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-6xl">{profile.name}</h1>
          <p className="mt-3 bg-gradient-to-r from-violet via-sky to-aqua bg-clip-text font-display text-xl font-medium text-transparent sm:text-2xl">{profile.title}</p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">{profile.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className={`${btn} bg-gradient-to-r from-violet to-sky text-night`}>Découvrir mes projets <ArrowDown size={16} /></a>
            <a href={profile.cv} download className={`${btn} border border-line text-white hover:bg-white/5`}><Download size={16} /> Télécharger mon CV</a>
          </div>
          <div className="mt-6 flex gap-1">
            <a className={social} href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={20} /></a>
            <a className={social} href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
            <a className={social} href={`mailto:${profile.email}`} aria-label="Envoyer un e-mail"><Mail size={20} /></a>
          </div>
        </div>
        <div className="flex justify-center"><NeuralArt /></div>
      </div>
    </section>
  )
}
