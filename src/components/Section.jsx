export default function Section({ id, title, intro, children }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <h2 id={`${id}-title`} className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 max-w-2xl text-slate-400">{intro}</p>}
      <div className="mt-12">{children}</div>
    </section>
  )
}
