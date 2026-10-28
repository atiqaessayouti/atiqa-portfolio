import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/content.js'

export default function SocialLinks({ withLabels = false }) {
  const items = [
    { href: profile.github, label: 'GitHub', Icon: Github, ext: true },
    { href: profile.linkedin, label: 'LinkedIn', Icon: Linkedin, ext: true },
    { href: `mailto:${profile.email}`, label: profile.email, Icon: Mail, ext: false },
  ]
  return (
    <ul className={withLabels ? 'space-y-3' : 'flex gap-2'}>
      {items.map(({ href, label, Icon, ext }) => (
        <li key={label}>
          <a href={href} {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})} aria-label={withLabels ? undefined : label} className="inline-flex items-center gap-3 text-slate-300 transition-colors hover:text-white">
            <Icon size={20} aria-hidden="true" />{withLabels && <span>{label}</span>}
          </a>
        </li>
      ))}
    </ul>
  )
}
