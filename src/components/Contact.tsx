import { useState } from "react";
import { FiArrowUpRight, FiCheck, FiCopy, FiLinkedin, FiMail } from "react-icons/fi";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const EMAIL = "eshneetkaurarora@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/eshneetkaurarora";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        index="06"
        title="Get in Touch"
        blurb="Open to new opportunities and good conversations."
      />

      <Reveal className="grid gap-8 rounded-2xl border border-border bg-surface p-8 shadow-[var(--shadow-glow)] md:grid-cols-2 md:p-10">
        {/* Left: invitation */}
        <div className="flex flex-col justify-center">
          <p className="text-3xl font-bold text-text">Let's talk.</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            Whether it's a role, a project, or a chat about mentoring or mountains, my inbox is always open.
          </p>
        </div>

        {/* Right: contact rows */}
        <div className="flex flex-col gap-3">
          <button
            onClick={copyEmail}
            data-cursor="hover"
            className="group flex items-center gap-4 rounded-xl border border-border bg-bg p-4 text-left transition-colors hover:border-accent/60"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-accent/10 text-accent">
              <FiMail size={18} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-xs font-medium uppercase tracking-widest text-muted">Email</span>
              <span className="block truncate text-sm font-semibold text-text">{EMAIL}</span>
            </span>
            <span className="shrink-0 text-muted group-hover:text-accent">
              {copied ? <FiCheck size={18} /> : <FiCopy size={16} />}
            </span>
          </button>

          <a
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
            data-cursor="hover"
            className="group flex items-center gap-4 rounded-xl border border-border bg-bg p-4 transition-colors hover:border-accent/60"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-accent/10 text-accent">
              <FiLinkedin size={18} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-xs font-medium uppercase tracking-widest text-muted">LinkedIn</span>
              <span className="block truncate text-sm font-semibold text-text">in/eshneetkaurarora</span>
            </span>
            <span className="shrink-0 text-muted group-hover:text-accent">
              <FiArrowUpRight size={18} />
            </span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
