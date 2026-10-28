import SocialLinks from './SocialLinks.jsx'

export default function Footer() {
  return (
    <footer className="border-t border-line/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8">
        <div>
          <p className="font-display font-semibold text-white">Atiqa Essayouti</p>
          <p className="text-xs text-slate-500">Portfolio personnel — 2026</p>
        </div>
        <SocialLinks />
      </div>
    </footer>
  )
}
