import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft, FiCheckCircle, FiLock, FiAlertTriangle } from "react-icons/fi";
import Reveal from "../components/Reveal";
import { analyzeResume } from "../utils/resumeCoach";

const PLACEHOLDER = `Responsible for managing a team of developers
Helped with the migration to the new system
Built a rule engine from scratch, cutting redundant processing by 70%
Was involved in testing the new release`;

export default function ResumeCoach() {
  const [text, setText] = useState("");
  const report = useMemo(() => analyzeResume(text), [text]);

  const scoreColor = report.score >= 80 ? "text-accent-3" : report.score >= 60 ? "text-accent" : "text-accent-2";

  return (
    <section className="mx-auto max-w-4xl px-6 py-28">
      <Reveal className="mb-8">
        <Link to="/#work" data-cursor="hover" className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent">
          <FiArrowLeft /> Back to portfolio
        </Link>
      </Reveal>

      <Reveal delay={0.05} className="mb-4">
        <p className="mb-3 font-mono text-sm uppercase tracking-widest text-accent">Side Project</p>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Resume Coach</h1>
        <p className="mt-3 max-w-2xl text-muted">
          Built out of the NER pipeline I wrote at STMicroelectronics, repurposed into something my Team Everest
          mentees can actually use — paste your resume bullets and get specific, rule-based feedback on what's
          weak and why.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mb-8 flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs text-muted">
        <FiLock size={13} className="text-accent" />
        Everything runs in your browser. Nothing is uploaded or stored anywhere.
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        <Reveal delay={0.15}>
          <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted">
            Paste your bullets (one per line)
          </label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={PLACEHOLDER}
            rows={12}
            className="w-full rounded-2xl border border-border bg-surface p-4 font-mono text-sm text-text shadow-[var(--shadow-glow)] outline-none focus:border-accent"
          />
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mb-3 flex items-center justify-between">
            <p className="font-mono text-xs uppercase tracking-widest text-muted">Feedback</p>
            {text.trim() && (
              <p className={`font-mono text-2xl font-bold ${scoreColor}`}>{report.score}</p>
            )}
          </div>

          <div className="max-h-[420px] space-y-3 overflow-y-auto rounded-2xl border border-border bg-surface p-4 shadow-[var(--shadow-glow)]">
            {!text.trim() && <p className="text-sm text-muted">{report.summary}</p>}

            {text.trim() && (
              <>
                <p className="mb-2 text-sm font-medium text-text/90">{report.summary}</p>
                {report.bullets.map((b, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className="rounded-xl border border-border/60 bg-bg-soft p-3"
                  >
                    <p className="mb-1.5 text-sm text-text/90">{b.text}</p>
                    {b.issues.length === 0 ? (
                      <p className="flex items-center gap-1.5 text-xs text-accent-3">
                        <FiCheckCircle /> Looks solid
                      </p>
                    ) : (
                      <ul className="space-y-1">
                        {b.issues.map((issue, j) => (
                          <li key={j} className="flex items-start gap-1.5 text-xs text-accent-2">
                            <FiAlertTriangle className="mt-0.5 shrink-0" /> {issue.message}
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                ))}

                {report.strongVerbSuggestions.length > 0 && (
                  <div className="pt-2">
                    <p className="mb-2 font-mono text-[11px] uppercase tracking-widest text-muted">
                      Strong verbs you haven't used yet
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {report.strongVerbSuggestions.map((v) => (
                        <span key={v} className="rounded-full border border-border px-2 py-0.5 font-mono text-[11px] text-muted">
                          {v}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
