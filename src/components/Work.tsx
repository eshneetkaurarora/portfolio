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
  status?: "In development" | "Coming soon";
  impactLabel?: "Goal";
  link?: { to: string; label: string; external?: boolean };
}

const CASE_STUDIES: CaseStudy[] = [
  {
    title: "Rule Engine, Built From a Blank Whiteboard",
    org: "Oracle",
    problem:
      "A new SaaS module had to let people create business rules without writing code, and there was nothing existing to build on.",
    approach: [
      "Started with the user: who creates these rules, and what does done mean to them?",
      "Turned the answers into Figma prototypes, API specs, and tasks the team could pick up.",
      "Kept asking how real people would use it as the build went on, and let that shape the design.",
    ],
    impact: [
      "Went from a blank whiteboard to a shipped module",
      "The project that got me interested in product management",
    ],
    tags: ["Architecture", "React", "TypeScript", "System Design"],
    link: { to: "/writing/whiteboard-to-shipped-feature", label: "Read the full story" },
  },
  {
    title: "Patrol Agent: From Jira to a Pull Request",
    org: "Adobe · Engineering Productivity",
    status: "In development",
    problem:
      "Looking into an issue often means jumping between Jira, the code, and logs before a fix can even start. That back and forth takes time away from real engineering work.",
    approach: [
      "Working on a skill-based agent that starts from a Jira issue and investigates it end to end.",
      "Connecting Jira, GitHub repositories, and logs through MCP (Model Context Protocol) tools, so the agent can find the root cause.",
      "The agent makes the code changes and opens a pull request for the team to review.",
    ],
    impact: [
      "Less repeated investigation and fewer manual handoffs for my team",
      "Help my teammates go from an issue to a fix that is ready for review faster",
    ],
    impactLabel: "Goal",
    tags: ["Agentic Workflows", "MCP", "Root Cause Analysis", "Developer Productivity"],
  },
  {
    title: "Project Layoff",
    org: "Personal Project · Career Recovery",
    status: "Coming soon",
    problem:
      "Losing a job is more than a job-search problem. People need a way to find direction and start earning again while they look for their next role.",
    approach: [
      "Plan one platform that brings together career guidance, resume and LinkedIn help, and interview preparation.",
      "Look at three ways back to income: a full-time role, short-term contract work, or earning from skills people already have.",
      "Start with hands-on support and a small community, then build around what people actually find useful.",
    ],
    impact: [
      "Help laid-off professionals turn their skills into income again",
      "Support people between losing a job and finding the next one",
    ],
    impactLabel: "Goal",
    tags: ["Career Recovery", "Product Discovery", "Community"],
  },
  {
    title: "Automated Parcel Delivery Terminal",
    org: "Academic Project",
    problem: "Parcels left without anyone present needed a secure, low-cost way to check who is collecting them.",
    approach: [
      "Designed a delivery terminal on a Raspberry Pi with a solenoid lock and a web control page.",
      "Built an OTP login so only the intended recipient could open it.",
    ],
    impact: ["A working hardware and software prototype, from login to the lock opening"],
    tags: ["IoT", "Raspberry Pi", "Security"],
  },
  {
    title: "Resume Coach",
    org: "Personal Project · for Team Everest",
    problem:
      "My Team Everest mentees needed specific, honest feedback on their resumes, not just a one-time review they would forget after our call.",
    approach: [
      "Reused the NER pipeline I built at STMicroelectronics as a rule-based coaching tool.",
      "Runs entirely client-side, so nothing is uploaded and mentees can paste anything without a second thought.",
      "Flags weak verbs, missing numbers, passive voice, and filler phrases line by line.",
    ],
    impact: ["Helped mentees get their first resume reviews and see where they could improve"],
    tags: ["TypeScript", "NLP Heuristics", "Mentorship"],
  },
  {
    title: "Trip Diaries",
    org: "Personal Project",
    problem: "My mountain trips and photos deserved a home beyond the camera roll.",
    approach: [
      "Built a small React diary with a page and photo gallery for each trek.",
    ],
    impact: ["A running log of real trips"],
    tags: ["React", "Photography", "Personal"],
    link: { to: "https://tripdiaries.netlify.app/", label: "Check it out", external: true },
  },
];

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        index="02"
        title="Selected Work"
        blurb="Case studies, not just commits: the problem, what I actually did, and what changed."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {CASE_STUDIES.map((cs, i) => (
          <Reveal key={cs.title} delay={(i % 2) * 0.08}>
            <TiltCard className="h-full">
              <p className="font-mono text-xs uppercase tracking-widest text-accent">{cs.org}</p>
              {cs.status && (
                <p className="mt-3 inline-block rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[11px] text-accent">
                  {cs.status}
                </p>
              )}
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
                  <FiTrendingUp /> {(cs.impactLabel ?? "Impact").toUpperCase()}
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

              {cs.link &&
                (cs.link.external ? (
                  <a
                    href={cs.link.to}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="hover"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-2"
                  >
                    {cs.link.label} <FiArrowRight size={14} />
                  </a>
                ) : (
                  <Link
                    to={cs.link.to}
                    data-cursor="hover"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-2"
                  >
                    {cs.link.label} <FiArrowRight size={14} />
                  </Link>
                ))}
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
