import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

interface Frame {
  src: string;
  alt: string;
  title: string;
  story: string;
  span: string;
  focus: string;
}

const PORTRAIT = "aspect-[3/4] sm:aspect-auto sm:row-span-2";
const LANDSCAPE = "aspect-[4/3] sm:aspect-auto sm:col-span-2 sm:row-span-2";

const FRAMES: Frame[] = [
  {
    src: "/photos/beyond/dance.jpg",
    alt: "Dancing in a coral skirt on a stage with a drum kit behind",
    title: "Last performance",
    story: "My last performance in college. Before the code, there was the stage. Nothing teaches you to be present in a room quite like a spotlight and a beat.",
    span: PORTRAIT,
    focus: "50% 60%",
  },
  {
    src: "/photos/beyond/techweek.jpg",
    alt: "A busy corporate lobby during STMicroelectronics TechWeek 2023",
    title: "TechWeek, ST",
    story: "One of those weeks where everything depends on small things going right. I was glad to be the one holding them together.",
    span: LANDSCAPE,
    focus: "50% 55%",
  },
  {
    src: "/photos/beyond/first-students.jpg",
    alt: "A small group of first students at a summer camp",
    title: "First students",
    story: "The first time someone understood a thing because of me. I've been chasing that feeling since.",
    span: PORTRAIT,
    focus: "50% 30%",
  },
  {
    src: "/photos/beyond/izhaar.jpg",
    alt: "A large group photo on stage at the Izhaar 2K23 college fest",
    title: "Izhaar 2K23",
    story: "Somewhere in this frame is proof that the best nights are the ones you helped build for everyone else.",
    span: LANDSCAPE,
    focus: "50% 65%",
  },
  {
    src: "/photos/beyond/school-captain.jpg",
    alt: "A school assembly with students holding flags in the courtyard",
    title: "School captain",
    story: "Captain of Tagore House. Our motto was \"Be true to thyself\", and I still try to lead that way.",
    span: LANDSCAPE,
    focus: "50% 50%",
  },
];

function Frame({
  frame,
  delay,
  state,
  onEnter,
  onLeave,
}: {
  frame: Frame;
  delay: number;
  state: "idle" | "active" | "dimmed";
  onEnter: () => void;
  onLeave: () => void;
}) {
  const active = state === "active";
  const dimmed = state === "dimmed";
  const figureRef = useRef<HTMLElement>(null);
  const [side, setSide] = useState<"right" | "left">("right");
  const [overhang, setOverhang] = useState(120);

  // The card sits on the bottom-right corner and hangs past the photo's edge so it covers as little as possible.
  // Photos at the screen's right edge have no room, so their card hangs off the bottom-left corner instead.
  const handleEnter = () => {
    const rect = figureRef.current?.getBoundingClientRect();
    if (rect) {
      const room = window.innerWidth - rect.right - 20;
      setSide(room >= 100 ? "right" : "left");
      setOverhang(Math.min(Math.max(room >= 100 ? room : rect.left - 20, 0), 130));
    }
    onEnter();
  };

  return (
    <Reveal delay={delay} className={`relative ${frame.span} ${active ? "z-20" : "z-0"}`}>
      <motion.figure
        ref={figureRef}
        onMouseEnter={handleEnter}
        onMouseLeave={onLeave}
        data-cursor="hover"
        animate={{
          scale: active ? 1.14 : dimmed ? 0.92 : 1,
          opacity: dimmed ? 0.45 : 1,
          filter: dimmed ? "blur(4px)" : "blur(0px)",
          boxShadow: active
            ? "0 0 0 1px var(--color-accent), 0 30px 90px -18px var(--color-accent)"
            : "0 0 0 1px var(--color-border)",
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="group relative h-full w-full overflow-hidden rounded-2xl bg-surface"
      >
        <motion.img
          src={frame.src}
          alt={frame.alt}
          loading="lazy"
          animate={{ scale: active ? 1.04 : 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: frame.focus }}
        />

        {/* quiet label, fades when active */}
        <motion.figcaption
          animate={{ opacity: active ? 0 : 1 }}
          transition={{ duration: 0.25 }}
          className="absolute bottom-4 left-5 font-mono text-xs uppercase tracking-widest text-white/90 drop-shadow-lg"
        >
          {frame.title}
        </motion.figcaption>

        {/* small screens: compact card over the bottom of the photo */}
        <motion.div
          animate={{ opacity: active ? 1 : 0, y: active ? 0 : 18 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="pointer-events-none absolute inset-x-3 bottom-3 rounded-xl border border-white/15 bg-black/40 p-4 backdrop-blur-xl sm:hidden"
        >
          <p className="font-mono text-[11px] uppercase tracking-widest text-accent">{frame.title}</p>
          <p className="mt-1.5 text-sm font-medium leading-relaxed text-white">{frame.story}</p>
        </motion.div>
      </motion.figure>

      {/* larger screens: story card rises from the bottom-right corner so most of the photo stays visible */}
      <motion.div
        aria-hidden={!active}
        initial={false}
        animate={{ opacity: active ? 1 : 0, x: active ? 0 : side === "right" ? -16 : 16, y: active ? 0 : 24, scale: active ? 1 : 0.95 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        style={side === "right" ? { right: -overhang } : { left: -overhang }}
        className="pointer-events-none absolute -bottom-10 z-30 hidden w-56 sm:block"
      >
        <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-bg/70 p-4 shadow-[0_20px_60px_-15px_var(--color-accent)] backdrop-blur-xl">
          <span
            aria-hidden="true"
            className={`absolute top-0 h-full w-1 bg-gradient-to-b from-accent via-accent-2 to-accent-3 ${
              side === "right" ? "left-0" : "right-0"
            }`}
          />
          <p className="font-mono text-[11px] uppercase tracking-widest text-accent">{frame.title}</p>
          <p className="mt-2 text-sm leading-relaxed text-text">{frame.story}</p>
        </div>
      </motion.div>
    </Reveal>
  );
}

export default function BeyondWork() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="beyond" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        index="04"
        title="Beyond the Work"
        blurb="A resume shows what I've built. Hover a frame for the rest of the story."
      />

      <div className="grid grid-flow-dense grid-cols-1 gap-6 sm:auto-rows-[13rem] sm:grid-cols-2 lg:auto-rows-[11rem] lg:grid-cols-4">
        {FRAMES.map((frame, i) => (
          <Frame
            key={frame.src}
            frame={frame}
            delay={Math.min(i, 4) * 0.07}
            state={active === null ? "idle" : active === i ? "active" : "dimmed"}
            onEnter={() => setActive(i)}
            onLeave={() => setActive((cur) => (cur === i ? null : cur))}
          />
        ))}
      </div>
    </section>
  );
}
