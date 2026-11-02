import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import Reveal from "../components/Reveal";

export default function WhiteboardPost() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-28">
      <Reveal className="mb-8">
        <Link to="/#work" data-cursor="hover" className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent">
          <FiArrowLeft /> Back to portfolio
        </Link>
      </Reveal>

      <Reveal delay={0.05}>
        <p className="mb-3 font-mono text-sm uppercase tracking-widest text-accent">Writing</p>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">The Blank Whiteboard That Got Me Into Product Thinking</h1>
        <p className="mt-3 text-sm text-muted">Eshneet Kaur Arora</p>
      </Reveal>

      <Reveal delay={0.12} className="prose-content mt-10 space-y-5 text-[15px] leading-relaxed text-text/90 md:text-base">
        <p>
          About two years into my time at Oracle, my manager asked the team if anyone wanted to join a new module being scoped as a proof of concept. I volunteered. It didn&apos;t exist yet, and I wanted to see how something comes into being and be part of building it from scratch.
        </p>

        <p>
          The module was part of a SaaS rule-creation platform. It had to let people who don&apos;t write code create and manage business rules on their own. There was nothing existing to build on. All we had was a whiteboard and a meeting with the engineering director.
        </p>

        <figure className="overflow-hidden rounded-2xl border border-border bg-surface">
          <a
            href="/photos/writing/early-module-diagram.jpg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View the early module architecture sketch at full size in a new tab"
          >
            <img
              src="/photos/writing/early-module-diagram.jpg"
              alt="Early architecture sketch connecting the SaaS application environment, configuration REST endpoints, and identity services"
              width={1197}
              height={674}
              loading="lazy"
              className="h-auto w-full"
            />
          </a>
          <figcaption className="px-5 py-3 text-sm text-muted">
            An early architecture sketch from the module&apos;s proof-of-concept phase.
          </figcaption>
        </figure>

        <p>
          I&apos;ll be honest, that first meeting was uncomfortable. I was used to getting a clear problem, and now I had to figure out what the problem even was. I caught myself reaching for the safe option, which was to sketch something similar to a system I had already seen. Then I stopped and asked a different question: who is actually going to use this, and what does &quot;done&quot; mean to them?
        </p>

        <p>
          We didn&apos;t have a neat answer that day. But the question stayed with us, and the conversations that followed kept coming back to it. We talked less about what the engine should do and more about the person using it: someone who has never written code, and still has to trust that the rules they set up will behave the way they expect. The first thing we drew together was what that person would see on screen. Prototypes, API specs and the task breakdown all came after.
        </p>

        <p>
          Small decisions kept coming from the same place as we built. One of them was what should happen when two people edit the same set of rules at once. We settled on versioning, so that nobody&apos;s work gets silently overwritten. None of that was in the original spec. It came up because we kept picturing real people using the thing.
        </p>

        <p>
          I built the execution framework, the configurable rule sets and part of the interface. By the time we shipped, though, what stayed with me was not the code. I could trace most of what we had built back to that uncomfortable first conversation at the whiteboard.
        </p>

        <p>
          That is where my interest in product management began. I realised I enjoyed asking what we should build, and why, as much as building it. I still love building things. But I now see that the work starts before the first line of code, and it doesn&apos;t end when the feature ships.
        </p>
      </Reveal>
    </article>
  );
}
