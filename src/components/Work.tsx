import { Link } from "react-router-dom";
import { FiArrowRight, FiTarget, FiTool, FiTrendingUp } from "react-icons/fi";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import TiltCard from "./TiltCard";

interface CaseStudy {
  title: string;
  org: string;
  problem: string;
  approach: string[];
  impact: string[];
  tags: string[];
  link?: { to: string; label: string };
}

const CASE_STUDIES: CaseStudy[] = [
  {
    title: "Rule Engine, Built From a Blank Whiteboard",
    org: "Oracle Financial Services Software",
    problem:
      "A new SaaS module needed a rule-creation system from zero — no existing execution framework, no UI, no architecture.",
    approach: [
      "Co-designed the initial architecture directly with the engineering director before a line of code was written.",
      "Built the execution framework and configurable rule sets, then the UI components to manage them.",
      "Added Optimistic Concurrency Control (versioning) so concurrent editors never silently overwrite each other.",
    ],
    impact: [
      "70% less redundant processing via a custom hashing-based duplication detector",
      "35% of all UI views shipped in React/TypeScript",
      "40% faster page loads via pagination, infinite scroll, and async calls",
    ],
    tags: ["Architecture", "React", "TypeScript", "System Design"],
    link: { to: "/writing/whiteboard-to-shipped-feature", label: "Read the full story" },
  },
  {
    title: "Deciding What Ships: Product Analytics at Scale",
    org: "Adobe — Creative Cloud Desktop",
    problem:
      "The Apps Panel curates and merchandises Adobe's apps for a product line generating $16M in revenue — decisions here have real weight.",
    approach: [
      "Contribute directly to product ideas headed for production, not just their implementation.",
      "Sit inside the A/B testing process to understand the methodology behind each experiment.",
      "Track and interpret analytics to judge whether a test actually moved the product forward.",
    ],
    impact: [
      "Closely involved with a $16M-revenue product line",
      "Product ideas actively in the pipeline to ship to users",
    ],
    tags: ["Product Analytics", "A/B Testing", "Merchandising"],
  },
  {
    title: "NLP Resume Parser",
    org: "STMicroelectronics",
    problem: "Manually screening resumes for key candidate information was slow and inconsistent.",
    approach: [
      "Led the build end-to-end using Python and spaCy for natural language processing.",
      "Engineered a Named Entity Recognition (NER) pipeline to extract structured candidate info from unstructured text.",
    ],
    impact: ["84% extraction efficiency on key information parsing"],
    tags: ["Python", "spaCy", "NLP", "NER"],
  },
  {
    title: "Automated Parcel Delivery Terminal",
    org: "Academic Project",
    problem: "Unattended parcel delivery needed a secure, low-cost way to authenticate a recipient without a person present.",
    approach: [
      "Designed an IoT delivery terminal on Raspberry Pi with a solenoid lock and web-based control page.",
      "Built an OTP-based authentication flow so only the intended recipient could trigger a release.",
    ],
    impact: ["Working end-to-end hardware + software prototype, from authentication to physical unlock"],
    tags: ["IoT", "Raspberry Pi", "Security"],
  },
  {
    title: "Resume Coach",
    org: "Personal Project — for Team Everest",
    problem:
      "My Team Everest mentees needed specific, honest feedback on their resumes, not just a one-time review that disappears after our call.",
    approach: [
      "Repurposed the NER pipeline I built at STMicroelectronics into a rule-based coaching engine.",
      "Runs entirely client-side — nothing is uploaded, so mentees can paste anything without a second thought.",
      "Flags weak verbs, missing metrics, passive voice, and filler phrases line by line.",
    ],
    impact: ["Live, working tool — try it with your own resume"],
    tags: ["TypeScript", "NLP Heuristics", "Mentorship"],
    link: { to: "/resume-coach", label: "Try it live" },
  },
  {
    title: "Trip Diaries",
    org: "Personal Project",
    problem: "Every trek produces a GPX file full of numbers, a camera roll, and a story — and they never live in one place.",
    approach: [
      "Built a small React app to log distance, elevation gain, and pace alongside photos and the actual memory.",
      "Elevation profiles rendered as custom SVG sparklines — no charting library needed.",
    ],
    impact: ["A running log of real trips, in progress"],
    tags: ["React", "Data Viz", "Personal"],
    link: { to: "/trip-diaries", label: "Explore the diary" },
  },
];

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        index="03"
        title="Selected Work"
        blurb="Case studies, not just commits — the problem, what I actually did, and what changed."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {CASE_STUDIES.map((cs, i) => (
          <Reveal key={cs.title} delay={(i % 2) * 0.08}>
            <TiltCard className="h-full">
              <p className="font-mono text-xs uppercase tracking-widest text-accent">{cs.org}</p>
              <h3 className="mt-1 mb-4 text-xl font-bold text-text">{cs.title}</h3>

              <div className="mb-4">
                <div className="mb-1.5 flex items-center gap-2 text-xs font-semibold text-muted">
                  <FiTarget /> PROBLEM
                </div>
                <p className="text-sm text-muted">{cs.problem}</p>
              </div>

              <div className="mb-4">
                <div className="mb-1.5 flex items-center gap-2 text-xs font-semibold text-muted">
                  <FiTool /> APPROACH
                </div>
                <ul className="space-y-1.5">
                  {cs.approach.map((a) => (
                    <li key={a} className="flex gap-2 text-sm text-text/90">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-5">
                <div className="mb-1.5 flex items-center gap-2 text-xs font-semibold text-muted">
                  <FiTrendingUp /> IMPACT
                </div>
                <ul className="space-y-1.5">
                  {cs.impact.map((im) => (
                    <li key={im} className="text-sm font-medium text-accent-3">
                      {im}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-2 flex flex-wrap gap-2">
                {cs.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-muted">
                    {tag}
                  </span>
                ))}
              </div>

              {cs.link && (
                <Link
                  to={cs.link.to}
                  data-cursor="hover"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-2"
                >
                  {cs.link.label} <FiArrowRight size={14} />
                </Link>
              )}
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
