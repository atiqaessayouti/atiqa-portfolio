import Section from './Section.jsx'
import Tag from './Tag.jsx'
import { skills } from '../data/content.js'

export default function Skills() {
  return (
    <Section id="skills" title="Compétences techniques">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((s) => (
          <div key={s.title} className="rounded-2xl border border-line bg-panel/60 p-6">
            <h3 className="text-base font-semibold">{s.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">{s.items.map((i) => <Tag key={i}>{i}</Tag>)}</ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
