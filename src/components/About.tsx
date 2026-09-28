import { FiCompass } from "react-icons/fi";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const FACTS = [
  { label: "Currently", value: "Member of Technical Staff 2, Adobe" },
  { label: "Based in", value: "Noida, India" },
  { label: "Education", value: "B.E. Electrical Engineering, CS Minor — Thapar Institute" },
  { label: "Next chapter", value: "MEM / MISM — Duke, CMU, Dartmouth, UW" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading index="01" title="About Me" />

      <div className="grid gap-14 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5">
          <Reveal>
            <p className="text-lg text-text/90">
              I'm an electrical engineer by degree and a software engineer by trade — currently
              on Adobe's Creative Cloud Desktop team, where I help shape the Apps Panel that
              curates and merchandises Adobe's apps for millions of desktop users.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-muted">
              Before Adobe, I spent two years at Oracle Financial Services Software building a
              rule engine from the ground up — execution framework, configurable rule sets, and
              the UI to manage all of it. The project that changed how I think about my own career
              started with a mostly-blank whiteboard: I sat down with our engineering director to
              lay out the initial architecture myself, carried it through Figma prototypes and API
              specs, and then wrote the code that shipped it. Being in the room for both the
              "why" and the "how" — not just the how — is the part I kept chasing afterward.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-muted">
              At Adobe that chase continues: I'm closely involved with a product line generating
              $16M in revenue, contribute to product ideas headed for production, and sit in on
              the A/B tests and analytics that decide whether those ideas actually work.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="rounded-2xl border border-accent/30 bg-accent/5 p-6">
            <div className="mb-2 flex items-center gap-2 font-mono text-sm font-semibold text-accent">
              <FiCompass /> Why MEM / MISM
            </div>
            <p className="text-sm leading-relaxed text-text/90">
              That whiteboard session taught me something a resume bullet can't: I'm energized less
              by writing the code and more by deciding what gets built and why. MEM and MISM are how
              I formalize that shift deliberately — pairing the systems thinking I already have with
              the strategy, structure, and organizational fluency to lead that decision-making on
              purpose, not by accident. I'm applying to Duke, CMU, Dartmouth, and the University of
              Washington.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="h-fit space-y-3 rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-glow)]">
          {FACTS.map((fact) => (
            <div key={fact.label} className="border-b border-border/60 pb-3 last:border-0 last:pb-0">
              <p className="font-mono text-xs uppercase tracking-widest text-muted">{fact.label}</p>
              <p className="mt-1 text-sm font-medium text-text">{fact.value}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
