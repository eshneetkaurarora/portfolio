import { Link } from "react-router-dom";
import { FiArrowRight, FiCamera, FiCompass, FiSmile, FiSunrise } from "react-icons/fi";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const FACETS = [
  {
    icon: FiCompass,
    label: "Trekking",
    gradient: "from-accent/40 to-accent-3/30",
    caption: "Usually the one still smiling at 4am basecamp wake-ups.",
  },
  {
    icon: FiSunrise,
    label: "Spirituality",
    gradient: "from-accent-2/40 to-accent/30",
    caption: "Grounded, unhurried, and big on perspective.",
  },
  {
    icon: FiCamera,
    label: "Photography",
    gradient: "from-accent-3/40 to-accent-2/30",
    caption: "I love to capture smiles on people's faces — literally.",
  },
  {
    icon: FiSmile,
    label: "People, always",
    gradient: "from-accent/40 to-accent-2/30",
    caption: "If I can help someone, I usually already am.",
  },
];

export default function BeyondWork() {
  return (
    <section id="beyond" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        index="05"
        title="Beyond the Work"
        blurb="A resume shows what I've built. This is closer to why."
      />

      <div className="grid gap-10 md:grid-cols-2">
        <div className="grid grid-cols-2 gap-4">
          {FACETS.map((facet, i) => {
            const Icon = facet.icon;
            return (
              <Reveal key={facet.label} delay={i * 0.08}>
                <div
                  className={`group relative aspect-square overflow-hidden rounded-2xl border border-dashed border-border bg-gradient-to-br ${facet.gradient} p-4`}
                >
                  {/* Replace this placeholder with <img src="/personality/your-photo.jpg" className="absolute inset-0 h-full w-full object-cover" /> */}
                  <div className="flex h-full flex-col items-center justify-center gap-2 text-center">
                    <Icon size={22} className="text-text/70" />
                    <p className="text-sm font-semibold text-text">{facet.label}</p>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 translate-y-full bg-bg/90 p-3 text-xs text-muted backdrop-blur transition-transform duration-300 group-hover:translate-y-0">
                    {facet.caption}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.15} className="flex items-center">
          <blockquote className="relative rounded-2xl border border-accent/30 bg-accent/5 p-8">
            <span className="absolute -top-4 left-6 font-mono text-5xl text-accent/40">&ldquo;</span>
            <p className="text-lg leading-relaxed text-text/90">
              Ask anyone who's trekked with me — I'm the one who'll strike up a conversation with
              a total stranger on a random mountain trail, and somehow it turns out they're a CSO.
              I don't network at events. I network on trails, above the tree line, out of breath.
            </p>
            <footer className="mt-4 font-mono text-sm text-muted">— probably true, ask my trek group</footer>
          </blockquote>
        </Reveal>
      </div>

      <Reveal delay={0.2} className="mt-8 text-center">
        <Link
          to="/trip-diaries"
          data-cursor="hover"
          className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-text hover:border-accent hover:text-accent"
        >
          See my Trip Diaries <FiArrowRight size={14} />
        </Link>
      </Reveal>
    </section>
  );
}
