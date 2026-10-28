import { Mail } from 'lucide-react'
import Section from './Section.jsx'
import SocialLinks from './SocialLinks.jsx'
import { profile } from '../data/content.js'

export default function Contact() {
  return (
    <Section id="contact" title="Contact" intro="Une opportunité de stage PFE 2027 en IA ou Data Science ? Écrivez-moi directement.">
      <div className="flex flex-col gap-10 rounded-2xl border border-line bg-gradient-to-br from-panel to-night p-8 sm:flex-row sm:items-center sm:justify-between">
        <SocialLinks withLabels />
        <a href={`mailto:${profile.email}?subject=${encodeURIComponent('Opportunité de stage PFE 2027')}`} className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet to-sky px-6 py-3 text-sm font-semibold text-night transition-transform hover:-translate-y-0.5">
          <Mail size={16} /> Me contacter pour une opportunité PFE 2027
        </a>
      </div>
    </Section>
  )
}
