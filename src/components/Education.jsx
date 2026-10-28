import { GraduationCap } from 'lucide-react'
import Section from './Section.jsx'
import { education } from '../data/content.js'

export default function Education() {
  return (
    <Section id="education" title="Formation">
      <ol className="space-y-6 border-l border-line pl-6">
        {education.map((e) => (
          <li key={e.degree} className="relative">
            <span className="absolute -left-[2.15rem] top-0 grid h-7 w-7 place-items-center rounded-full bg-night text-violet ring-1 ring-line"><GraduationCap size={15} aria-hidden="true" /></span>
            <p className="text-sm text-aqua">{e.period}</p>
            <h3 className="mt-1 text-lg font-semibold">{e.degree}</h3>
            <p className="text-slate-400">{e.school}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
