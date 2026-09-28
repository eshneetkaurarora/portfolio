const ROW_ONE = ["React.js", "TypeScript", "JavaScript", "Next.js", "HTML", "CSS", "Bootstrap"];
const ROW_TWO = ["Python", "C/C++", "spaCy / NLP", "Figma", "Jest", "Git", "MATLAB", "A/B Testing"];

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
      <div
        className="flex shrink-0 gap-4 py-2"
        style={{
          animation: `${reverse ? "marquee-reverse" : "marquee"} 28s linear infinite`,
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="whitespace-nowrap rounded-full border border-border bg-surface px-5 py-2.5 font-mono text-sm text-text/90"
          >
            {item}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes marquee-reverse { from { transform: translateX(-50%); } to { transform: translateX(0); } }
      `}</style>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
      <div className="space-y-4">
        <MarqueeRow items={ROW_ONE} />
        <MarqueeRow items={ROW_TWO} reverse />
      </div>
    </section>
  );
}
