const layers = [[3, 120], [5, 80], [4, 100], [2, 150]]
const xs = [50, 150, 250, 350]
const nodes = layers.map(([n, gap], l) => Array.from({ length: n }, (_, i) => ({ x: xs[l], y: 200 + (i - (n - 1) / 2) * gap * 0.62, l, i })))

export default function NeuralArt() {
  return (
    <svg viewBox="0 0 400 400" role="img" aria-label="Illustration abstraite d’un réseau de neurones" className="w-full max-w-md">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8b7bff" /><stop offset=".55" stopColor="#4fa3ff" /><stop offset="1" stopColor="#2dd4bf" />
        </linearGradient>
      </defs>
      {nodes.slice(0, -1).flatMap((layer, l) =>
        layer.flatMap((a) => nodes[l + 1].map((b) => (
          <line key={`${l}-${a.i}-${b.i}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="url(#g)" strokeOpacity=".28" />
        ))))}
      {nodes.flat().map((n) => (
        <circle key={`${n.l}-${n.i}`} className="node" style={{ animationDelay: `${(n.l * 3 + n.i) * 0.35}s` }} cx={n.x} cy={n.y} r={n.l === 3 ? 9 : 7} fill="url(#g)" />
      ))}
    </svg>
  )
}
