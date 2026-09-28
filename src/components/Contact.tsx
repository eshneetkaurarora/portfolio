import { useState } from "react";
import { FiCheck, FiCopy, FiLinkedin, FiMail } from "react-icons/fi";
import MagneticButton from "./MagneticButton";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const EMAIL = "eshneetkaurarora@gmail.com";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading index="06" title="Get in Touch" blurb="Open to conversations about roles, MEM/MISM, or a good trek recommendation." />

      <Reveal className="flex flex-col items-start gap-6 rounded-2xl border border-border bg-surface p-8 shadow-[var(--shadow-glow)] sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-semibold text-text">Let's talk.</p>
          <p className="mt-1 text-sm text-muted">I usually reply within a day or two.</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <MagneticButton
            onClick={copyEmail}
            className="flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white"
          >
            {copied ? <FiCheck /> : <FiCopy />}
            {copied ? "Copied!" : EMAIL}
          </MagneticButton>
          <MagneticButton
            href={`mailto:${EMAIL}`}
            className="grid h-11 w-11 place-items-center rounded-full border border-border text-text hover:border-accent hover:text-accent"
          >
            <FiMail size={17} />
          </MagneticButton>
          <MagneticButton
            href="https://linkedin.com/in/eshneet-kaur-arora-3ba665191"
            className="grid h-11 w-11 place-items-center rounded-full border border-border text-text hover:border-accent hover:text-accent"
          >
            <FiLinkedin size={17} />
          </MagneticButton>
        </div>
      </Reveal>
    </section>
  );
}
