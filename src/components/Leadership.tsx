import { FiAward, FiHeart, FiUsers } from "react-icons/fi";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

interface Point {
  lead?: string;
  text: string;
}

const ITEMS: { icon: typeof FiHeart; date: string; title: string; org: string; points: Point[] }[] = [
  {
    icon: FiHeart,
    date: "Class 11 onward",
    title: "Where Teaching Began",
    org: "Summer camp · COVID tuitions",
    points: [
      { lead: "Summer camp (Class 11)", text: "where I taught for the first time." },
      { lead: "Tuitions during COVID", text: "taught students through tuitions." },
      { text: "That is where my love of helping others learn started, especially girls finding their confidence and direction." },
    ],
  },
  {
    icon: FiAward,
    date: "2020 to 2023",
    title: "Society & Event Leadership",
    org: "Thapar Institute · STMicroelectronics",
    points: [
      {
        lead: "Finance Secretary, MUDRA Society",
        text: "handled finances, documentation, and operations, and led a 100+ member team to a record 10,000+ footfall over three days.",
      },
      { lead: "Publicity Head, SSA VIRSA", text: "led publicity and marketing for the society's cultural events." },
      {
        lead: "Electrical Engineering Mentor, Frosh",
        text: "guided prospective students and parents through admissions, ran a classical dance workshop, and helped get sponsorships.",
      },
      {
        lead: "Technical Coordinator, TechFest (STMicroelectronics)",
        text: "coordinated a 100-person team on logistics, documentation, and technical support.",
      },
    ],
  },
  {
    icon: FiUsers,
    date: "2025 to 2026",
    title: "Mentoring Students & Early Careers",
    org: "Team Everest · Vedic Sadhana · Foundation for a College Education",
    points: [
      {
        lead: "Team Everest NGO",
        text: "job-readiness program for young women, covering communication, interview prep, teamwork, leadership, and workplace etiquette.",
      },
      {
        lead: "Vedic Sadhana Foundation",
        text: "1:1 career coaching for a 3rd-year CS student, with honest career advice and realistic technical and behavioral mock interviews.",
      },
      {
        lead: "Foundation for a College Education",
        text: "mock interviews for prospective students, with clear feedback on how ready they are and how they communicate.",
      },
    ],
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        index="03"
        title="Leadership & Mentorship"
        blurb="The work outside my job title: showing up for people."
      />

      <div className="relative mt-4">
        {/* vertical spine */}
        <span
          aria-hidden="true"
          className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-border to-transparent sm:left-6"
        />

        <ol className="space-y-8">
          {ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={Math.min(i, 4) * 0.06} className="relative pl-16 sm:pl-20">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 grid h-11 w-11 place-items-center rounded-full border border-accent/30 bg-surface text-accent shadow-[var(--shadow-glow)] sm:h-12 sm:w-12"
                >
                  <Icon size={18} />
                </span>

                <div className="rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/50 sm:p-6">
                  <p className="mb-1 font-mono text-xs uppercase tracking-widest text-accent">{item.date}</p>
                  <h3 className="font-bold text-text">{item.title}</h3>
                  <p className="mb-3 text-sm font-medium text-muted">{item.org}</p>
                  <ul className="space-y-2">
                    {item.points.map((point, j) => (
                      <li key={j} className="flex gap-3 text-sm text-muted">
                        <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>
                          {point.lead && <strong className="font-semibold text-text">{point.lead}</strong>}
                          {point.lead && ": "}
                          {point.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
