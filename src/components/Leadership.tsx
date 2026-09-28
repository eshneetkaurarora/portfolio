import { FiHeart, FiMusic, FiUsers, FiUserCheck } from "react-icons/fi";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const ITEMS = [
  {
    icon: FiUserCheck,
    title: "1:1 Career Mentor",
    org: "Adobe",
    body: "Mentored a final-year student through her job search — resume, interview prep, and the confidence to push through it. She's now at Adobe.",
  },
  {
    icon: FiUsers,
    title: "Student Mentor, Team Everest",
    org: "NGO Partnership · Oracle",
    body: "Volunteered with a job-readiness program built to empower young women with professional and personal development skills.",
  },
  {
    icon: FiMusic,
    title: "Dance Mentor",
    org: "Adobe",
    body: "Mentor dancers in Adobe's internal dance community — because leadership shows up outside the org chart too.",
  },
  {
    icon: FiHeart,
    title: "Technical Coordinator, TechFest",
    org: "STMicroelectronics",
    body: "Coordinated a 100-person team across a full technical fest — logistics, documentation, and support, start to finish.",
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        index="04"
        title="Leadership & Mentorship"
        blurb="The parts a job title doesn't cover — showing up for people, not just for the sprint."
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {ITEMS.map((item, i) => {
          const Icon = item.icon;
          return (
            <Reveal key={item.title} delay={i * 0.08} className="rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-glow)]">
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-full bg-accent/10 text-accent">
                <Icon size={18} />
              </div>
              <h3 className="font-bold text-text">{item.title}</h3>
              <p className="mb-2 font-mono text-xs uppercase tracking-widest text-muted">{item.org}</p>
              <p className="text-sm text-muted">{item.body}</p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
