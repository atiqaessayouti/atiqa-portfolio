import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { nav } from '../data/content.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-night/80 backdrop-blur">
      <nav aria-label="Navigation principale" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="font-display text-lg font-semibold text-white">Atiqa Essayouti</a>
        <ul className="hidden gap-8 md:flex">
          {nav.map((n) => (
            <li key={n.id}><a href={`#${n.id}`} className="text-sm text-slate-400 transition-colors hover:text-white">{n.label}</a></li>
          ))}
        </ul>
        <button className="md:hidden rounded-lg p-2 text-slate-200" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && (
        <ul id="mobile-menu" className="border-t border-line/60 bg-night px-5 pb-4 md:hidden">
          {nav.map((n) => (
            <li key={n.id}><a href={`#${n.id}`} onClick={() => setOpen(false)} className="block py-3 text-slate-300">{n.label}</a></li>
          ))}
        </ul>
      )}
    </header>
  )
}
