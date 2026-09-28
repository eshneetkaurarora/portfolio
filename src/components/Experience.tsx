import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

interface Role {
  company: string;
  title: string;
  place: string;
  period: string;
  bullets: string[];
}

const ROLES: Role[] = [
  {
    company: "Adobe",
    title: "Member of Technical Staff 2",
    place: "Noida",
    period: "Dec 2025 — Present",
    bullets: [
      "Contribute to the Apps Panel on Creative Cloud Desktop — curating, maintaining, and merchandising Adobe's apps.",
      "Closely involved with a product line generating $16M in revenue, including ideas headed for production.",
      "Run and interpret A/B tests, tracking analytics to understand what actually moves the product forward.",
    ],
  },
  {
    company: "Oracle Financial Services Software",
    title: "Associate Application Developer",
    place: "Bangalore",
    period: "Aug 2023 — Nov 2025",
    bullets: [
      "Laid out the initial architecture of a new SaaS module directly with the engineering director — whiteboard to Figma prototypes to shipped feature.",
      "Built a rule engine from scratch: execution framework, configurable rule sets, and the UI to manage them.",
      "Shipped 35% of the UI in React/TypeScript; cut page load time 40% with pagination, infinite scroll, and async API calls.",
      "Cut redundant rule processing 70% with a custom hashing-based duplication detector.",
      "Implemented Optimistic Concurrency Control (versioning) so concurrent users never corrupt shared data — no locking required.",
      "Partnered directly with product managers on requirements and low-level design, breaking large modules into shippable tasks.",
      "Shipped Next.js screens backed by Jest suites at 80% coverage.",
    ],
  },
  {
    company: "STMicroelectronics",
    title: "Software Development Intern",
    place: "Greater Noida",
    period: "Feb 2023 — Jul 2023",
    bullets: [
      "Led development of a resume-parsing app in Python, using spaCy for NLP and NER to extract candidate info at 84% efficiency.",
      "Served as Technical Coordinator for TechFest, coordinating logistics and support for a 100-person team.",
    ],
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.4"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading index="02" title="Experience" blurb="From building UI to building the case for what UI should exist." />

      <div ref={ref} className="relative">
        <div className="absolute top-0 bottom-0 left-[7px] w-px bg-border md:left-[7px]" />
        <motion.div
          style={{ scaleY }}
          className="absolute top-0 left-[7px] w-px origin-top bg-gradient-to-b from-accent via-accent-2 to-accent-3 md:left-[7px]"
        />

        <div className="space-y-14">
          {ROLES.map((role, i) => (
            <Reveal key={role.company} delay={i * 0.1} className="relative pl-10">
              <span className="absolute top-1.5 left-0 h-4 w-4 rounded-full border-2 border-accent bg-bg" />
              <div className="mb-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-lg font-bold text-text">{role.title}</h3>
                <span className="text-accent">·</span>
                <span className="font-medium text-text/90">{role.company}</span>
              </div>
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted">
                {role.place} — {role.period}
              </p>
              <ul className="space-y-2">
                {role.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2 text-sm text-muted md:text-[15px]">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
