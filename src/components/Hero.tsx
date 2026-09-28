import { motion } from "framer-motion";
import { FiArrowDown, FiLinkedin, FiMail, FiFileText } from "react-icons/fi";
import MagneticButton from "./MagneticButton";

const ROLE_WORDS = ["Software Engineer @ Adobe", "Systems Thinker", "Aspiring Product Leader", "Builder at Heart"];

function AnimatedRole() {
  return (
    <div className="h-8 overflow-hidden text-lg font-medium text-muted md:text-xl">
      <motion.div
        animate={{ y: [0, -32, -64, -96, 0] }}
        transition={{ duration: 8, times: [0, 0.25, 0.5, 0.75, 1], repeat: Infinity, ease: "easeInOut" }}
      >
        {ROLE_WORDS.map((word) => (
          <div key={word} className="h-8 leading-8">
            {word}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

const headline = "Eshneet Kaur Arora".split("");

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-accent/30 blur-3xl"
          animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-0 h-[28rem] w-[28rem] rounded-full bg-accent-2/20 blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, 60, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-accent-3/20 blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="mx-auto w-full max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-4 font-mono text-sm text-accent"
        >
          Hi, I&apos;m
        </motion.p>

        <h1 aria-label="Eshneet Kaur Arora" className="flex flex-wrap text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
          {headline.map((char, i) => (
            <motion.span
              key={i}
              aria-hidden="true"
              initial={{ opacity: 0, y: 40, rotateX: -60 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 0.2 + i * 0.035, duration: 0.6, ease: "easeOut" }}
              className={char === " " ? "w-3 md:w-5" : "text-gradient"}
            >
              {char === " " ? " " : char}
            </motion.span>
          ))}
        </h1>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="mt-3">
          <AnimatedRole />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="mt-6 max-w-xl text-base text-muted md:text-lg"
        >
          I write production code at Adobe — and I'm just as happy in the room where we decide
          what gets built. Lately that's meant sketching architecture next to a director, reading
          A/B test results, and mentoring the next person up. I'm now formalizing that shift.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <MagneticButton
            href="#work"
            className="rounded-full bg-accent px-7 py-3 text-sm font-semibold text-white shadow-[0_0_30px_-5px_var(--color-accent)] transition-shadow hover:shadow-[0_0_45px_-5px_var(--color-accent)]"
          >
            View My Work
          </MagneticButton>
          <MagneticButton
            href="#contact"
            className="rounded-full border border-border px-7 py-3 text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent"
          >
            Get in Touch
          </MagneticButton>

          <div className="ml-2 flex items-center gap-4 text-muted">
            <MagneticButton href="https://linkedin.com/in/eshneet-kaur-arora-3ba665191" className="grid h-10 w-10 place-items-center rounded-full border border-border hover:border-accent hover:text-accent" >
              <FiLinkedin size={17} />
            </MagneticButton>
            <MagneticButton href="mailto:eshneetkaurarora@gmail.com" className="grid h-10 w-10 place-items-center rounded-full border border-border hover:border-accent hover:text-accent">
              <FiMail size={17} />
            </MagneticButton>
            <MagneticButton href="/resume.pdf" className="grid h-10 w-10 place-items-center rounded-full border border-border hover:border-accent hover:text-accent">
              <FiFileText size={17} />
            </MagneticButton>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        data-cursor="hover"
        aria-label="Scroll down"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <FiArrowDown size={20} />
      </motion.a>
    </section>
  );
}
