import { FiCode, FiLayers, FiTool } from "react-icons/fi";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const GROUPS = [
  {
    icon: FiCode,
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "C/C++", "MATLAB"],
  },
  {
    icon: FiLayers,
    label: "Frameworks & Libraries",
    items: ["React.js", "Next.js", "spaCy / NLP", "Jest", "Bootstrap"],
  },
  {
    icon: FiTool,
    label: "Tools & Practices",
    items: ["Git", "Figma", "System Design", "Agile / Scrum", "HTML / CSS"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading index="05" title="Toolkit" blurb="The languages, frameworks, and tools I reach for most." />

      <div className="grid gap-5 sm:grid-cols-3">
        {GROUPS.map((group, i) => {
          const Icon = group.icon;
          return (
            <Reveal
              key={group.label}
              delay={i * 0.08}
              className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/50"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-accent/10 text-accent">
                  <Icon size={17} />
                </span>
                <h3 className="font-mono text-xs uppercase tracking-widest text-text">{group.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-bg px-3 py-1.5 text-sm text-text/90"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
