import { motion } from "framer-motion";
import { FiArrowDown, FiCompass } from "react-icons/fi";
import MagneticButton from "./MagneticButton";

const ROLE_WORDS = ["Member of Technical Staff 2 at Adobe", "Systems Thinker", "Mentor & Mountain Person", "Builder at Heart"];

function AnimatedRole() {
  return (
    <div className="h-8 overflow-hidden text-base font-medium text-muted sm:text-lg md:text-xl">
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

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 py-12 md:grid-cols-[1.3fr_1fr]">
        <div>
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

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="mt-6 max-w-xl space-y-4 text-base text-muted md:text-lg"
        >
          <p>
            I&apos;m an electrical engineer by degree and a software engineer by trade, now building the
            Creative Cloud Desktop experience at Adobe.
          </p>
          <p className="text-sm md:text-base">
            At Oracle, I put my hand up to help scope a brand new module. It was
            the first time I started from a blank page, and it is where my interest in product management began.
          </p>
          <p className="flex items-start gap-2 text-sm md:text-base">
            <FiCompass className="mt-1 shrink-0 text-accent" />
            <span>
              I like to understand the person I&apos;m building for. Outside work, you&apos;ll usually find me
              on a mountain trail with my camera, dancing, or helping someone find their feet.
            </span>
          </p>
        </motion.div>

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
        </motion.div>
        </div>

        <motion.figure
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow-glow)] md:max-w-none"
        >
          <img
            src="/photos/hero/portrait.jpg"
            alt="Portrait of Eshneet smiling in a pink sweater and a floral headband"
            width={1179}
            height={1356}
            className="aspect-[4/5] w-full object-cover object-[50%_25%]"
          />
          <figcaption className="px-6 py-4 text-sm text-muted">Engineer, mentor, and mountain person.</figcaption>
        </motion.figure>
      </div>

      <motion.a
        href="#experience"
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
