import Reveal from "./Reveal";

interface SectionHeadingProps {
  index: string;
  title: string;
  blurb?: string;
}

export default function SectionHeading({ index, title, blurb }: SectionHeadingProps) {
  return (
    <Reveal className="mb-14">
      <div className="flex items-center gap-3 font-mono text-sm text-accent">
        <span>{index}</span>
        <span className="h-px w-8 bg-accent/50" />
        <span className="uppercase tracking-widest text-muted">Section</span>
      </div>
      <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      {blurb && <p className="mt-3 max-w-xl text-muted">{blurb}</p>}
    </Reveal>
  );
}
