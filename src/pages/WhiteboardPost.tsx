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
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">What a Blank Whiteboard Taught Me About Wanting to Lead</h1>
        <p className="mt-3 text-sm text-muted">Eshneet Kaur Arora</p>
      </Reveal>

      <Reveal delay={0.12} className="prose-content mt-10 space-y-5 text-[15px] leading-relaxed text-text/90 md:text-base">
        <p>
          Two years into my job at Oracle Financial Services Software, my director asked if I wanted to help scope
          a new module for our SaaS rule-creation platform. Not build it — scope it. I remember being surprised by
          the question, because up to that point my job had mostly been answering a different one: here is the spec,
          how do we build it.
        </p>

        <p>
          The module needed a way for non-technical users to create and manage business rules without writing code
          — an execution framework, configurable rule sets, a UI for all of it. There was no existing system to
          extend. Just a whiteboard, a director with fifteen more years of experience than me, and a genuinely open
          question: what should this even look like?
        </p>

        <p>
          I want to be honest about what that first meeting actually felt like, because it wasn't triumphant. It was
          uncomfortable. When you're used to being handed a well-defined problem, "figure out what the problem is"
          is a different muscle entirely. I remember reaching for the safest option in the room — sketching
          something close to a system I'd already seen — before catching myself and asking a more useful question
          instead: who actually uses this, and what does "done" look like for them?
        </p>

        <p>
          That question changed the conversation. We weren't just designing an execution engine anymore; we were
          designing for a business analyst who had never written a line of code and needed to trust that the rule
          she configured on Tuesday would run correctly in production on Friday. That single constraint — trust
          without code literacy — is what eventually led us to build in Optimistic Concurrency Control from the
          start, using versioning instead of locking, so two people editing the same rule set would never silently
          overwrite each other's work. It wasn't in the original brief. It came out of actually sitting with the
          problem instead of jumping to the solution.
        </p>

        <p>
          From there, the work looked more familiar: Figma prototypes, API specs, breaking the module into tasks a
          team could actually execute against. I built the execution framework, the configurable rule sets, and a
          chunk of the UI myself — including a hashing-based duplication detector that cut redundant rule
          processing by 70%, which remains one of the pieces of this project I'm most proud of. But by the time we
          shipped, the part that stuck with me wasn't the code. It was the fact that I could trace almost every
          engineering decision back to that first whiteboard conversation about a person who'd never use our API
          directly.
        </p>

        <p>
          I've thought about that gap a lot since — the gap between building what you're told to build and deciding
          what should exist in the first place. Both are real skills. I'm good at the first one; Oracle is proof of
          that, and so is the work I do now at Adobe on a product line that generates $16M in revenue. But the
          whiteboard is the part I keep wanting more of. Being in the room for the "why" changes how you write the
          "how" — you stop optimizing for what's technically elegant and start optimizing for what the actual human
          on the other end needs to be true.
        </p>

        <p>
          That's the honest version of why I'm applying to MEM and MISM programs. Not because I want to stop
          building — I don't, and I don't think I ever will. But because I want to formalize the instinct I
          stumbled into on that whiteboard: the ability to sit with an ambiguous problem, ask better questions
          before reaching for a solution, and make the structural decisions that everything else gets built on top
          of. I got a taste of that by accident once. I'd like to get much better at it on purpose.
        </p>
      </Reveal>
    </article>
  );
}
