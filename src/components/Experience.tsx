import { useEffect, useRef, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
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
    period: "Nov 2025 to Present",
    bullets: [
      "Build the Apps UI and application-management framework in Creative Cloud Desktop, where people find, install and manage their Adobe apps.",
      "Built UNO, an update notifier that prompts users to keep their Adobe apps current. Click-through on update prompts has risen with each rollout step, to 29%.",
      "Built Patrol Agent, an AI agent that takes a Jira issue to a pull request with an evidence-backed root cause and a proposed fix for review. It has solved 100+ production incidents.",
      "Contribute to AI features in Creative Cloud Desktop, including the AI troubleshooting experience and locally run AI models.",
    ],
  },
  {
    company: "Oracle",
    title: "Associate Application Developer",
    place: "Bangalore",
    period: "Aug 2023 to Nov 2025",
    bullets: [
      "Volunteered to scope a new SaaS module and helped plan its architecture with the engineering director.",
      "Built a rule engine from scratch: the execution framework, configurable rule sets, and the UI to manage them.",
      "Built 35% of the UI in React/TypeScript and cut page load time by 40% with pagination, infinite scroll, and async API calls.",
      "Cut redundant rule processing by 70% with a hashing-based duplicate detector.",
      "Added Optimistic Concurrency Control (versioning) so two people editing together never overwrite each other's work, without locking.",
      "Worked with product managers on requirements and low-level design, and broke large modules into tasks the team could ship.",
      "Built Next.js screens with Jest tests at 80% coverage.",
    ],
  },
  {
    company: "STMicroelectronics",
    title: "Software Development Intern",
    place: "Greater Noida",
    period: "Feb 2023 to Jul 2023",
    bullets: [
      "Led development of a resume-checker application in Python, used by the HR team to speed up resume screening.",
      "Used spaCy and Named Entity Recognition to extract key candidate information from resumes with 84% accuracy, improving parsing reliability.",
    ],
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const bounds = useRef({ first: 0, last: 0 });
  // Critically damped so the dot never overshoots past the first or last bullet.
  const dotX = useSpring(0, { stiffness: 500, damping: 45, mass: 1 });
  const dotYRaw = useSpring(0, { stiffness: 500, damping: 45, mass: 1 });
  const dotY = useTransform(dotYRaw, (y) => Math.min(Math.max(y, bounds.current.first - 7), bounds.current.last - 7));
  const fillHeight = useTransform(dotY, (y) => y + 7);
  const [ready, setReady] = useState(false);
  const [spineEnd, setSpineEnd] = useState(0);

  // The dot rides the spine and magnetically sticks to whichever bullet is at the middle of the screen.
  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    const DOT = 14;

    const offsetIn = (el: HTMLElement) => {
      let x = 0;
      let y = 0;
      let node: HTMLElement | null = el;
      while (node && node !== container) {
        x += node.offsetLeft;
        y += node.offsetTop;
        node = node.offsetParent as HTMLElement | null;
      }
      return { x: x + el.offsetWidth / 2, y: y + el.offsetHeight / 2 };
    };

    const SPINE_X = 7.5;

    const STICK = 16;
    const smooth = (t: number) => t * t * (3 - 2 * t);

    const update = () => {
      const ys = Array.from(container.querySelectorAll<HTMLElement>("[data-snap]"))
        .map((el) => offsetIn(el).y)
        .sort((a, b) => a - b);
      if (!ys.length) return;
      const first = ys[0];
      const last = ys[ys.length - 1];
      const rect = container.getBoundingClientRect();
      const line = Math.min(Math.max(window.innerHeight * 0.5 - rect.top, first), last);

      // Hold on a bullet while it is within STICK px of the screen's midline, glide to the next one in between.
      let target = last;
      for (let i = 0; i < ys.length - 1; i++) {
        const a = ys[i];
        const b = ys[i + 1];
        if (line > b) continue;
        const gap = b - a;
        if (gap <= STICK * 2) {
          target = line - a < b - line ? a : b;
        } else {
          target = a + gap * smooth(Math.min(Math.max((line - a - STICK) / (gap - STICK * 2), 0), 1));
        }
        break;
      }

      bounds.current = { first, last };
      dotX.set(SPINE_X - DOT / 2);
      dotYRaw.set(target - DOT / 2);
      setSpineEnd(last);
      setReady(true);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [dotX, dotYRaw]);

  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading index="01" title="Experience" blurb="User interfaces, application frameworks, and tools that help teams build better." />

      <div ref={ref} className="relative">
        <div style={{ height: spineEnd }} className="absolute top-0 left-[7px] w-px bg-border" />
        <motion.div
          style={{ height: fillHeight }}
          className="absolute top-0 left-[7px] w-px bg-gradient-to-b from-accent via-accent-2 to-accent-3"
        />
        <motion.span
          aria-hidden="true"
          style={{ x: dotX, y: dotY, opacity: ready ? 1 : 0 }}
          className="pointer-events-none absolute top-0 left-0 z-10 h-[14px] w-[14px] rounded-full bg-accent shadow-[0_0_18px_5px_color-mix(in_srgb,var(--color-accent)_65%,transparent)] ring-2 ring-white/30"
        />

        <div className="space-y-14">
          {ROLES.map((role, i) => (
            <Reveal key={role.company} delay={i * 0.1} className="relative pl-10">
              <motion.span
                data-snap
                initial={{ backgroundColor: "var(--color-bg)", scale: 1 }}
                whileInView={{ backgroundColor: "var(--color-accent)", scale: [1, 1.35, 1] }}
                viewport={{ once: true, margin: "0px 0px -45% 0px" }}
                transition={{ duration: 0.6 }}
                className="absolute top-1.5 left-0 h-4 w-4 rounded-full border-2 border-accent"
              />
              <div className="mb-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-lg font-bold text-text">{role.title}</h3>
                <span className="text-accent">·</span>
                <span className="font-medium text-text/90">{role.company}</span>
              </div>
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted">
                {role.place} · {role.period}
              </p>
              <ul className="space-y-2">
                {role.bullets.map((bullet, j) => (
                  <motion.li
                    key={bullet}
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "0px 0px -12% 0px" }}
                    transition={{ duration: 0.5, delay: Math.min(j, 3) * 0.07, ease: "easeOut" }}
                    className="flex gap-2 text-sm text-muted md:text-[15px]"
                  >
                    <motion.span
                      data-snap
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
                      transition={{ type: "spring", stiffness: 400, damping: 15, delay: Math.min(j, 3) * 0.07 + 0.15 }}
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent)]"
                    />
                    <span>{bullet}</span>
                  </motion.li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
