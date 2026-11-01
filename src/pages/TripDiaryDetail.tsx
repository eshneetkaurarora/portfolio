import { Link, useParams } from "react-router-dom";
import { FiArrowLeft, FiCamera, FiMapPin } from "react-icons/fi";
import Reveal from "../components/Reveal";
import { TRIPS } from "../data/trips";

export default function TripDiaryDetail() {
  const { id } = useParams();
  const trip = TRIPS.find((t) => t.id === id);

  if (!trip) {
    return (
      <section className="mx-auto max-w-3xl px-6 py-28 text-center">
        <p className="text-muted">Couldn't find that trip.</p>
        <Link to="/trip-diaries" className="mt-4 inline-block text-accent">
          Back to Trip Diaries
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-3xl px-6 py-28">
      <Reveal className="mb-8">
        <Link to="/trip-diaries" data-cursor="hover" className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent">
          <FiArrowLeft /> All trips
        </Link>
      </Reveal>

      <Reveal delay={0.05}>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{trip.title}</h1>
        <p className="mt-2 flex items-center gap-1.5 text-muted">
          <FiMapPin size={14} className="shrink-0" /> {trip.location}
        </p>
        <p className="mt-6 leading-relaxed text-muted">{trip.description}</p>
      </Reveal>

      <Reveal delay={0.1} className="mt-8 rounded-2xl border border-border bg-surface p-6">
        <h2 className="text-lg font-bold text-text">The route at a glance</h2>
        <p className="mt-2 text-sm text-muted">{trip.route}</p>
        <dl className="mt-5 grid gap-4 sm:grid-cols-2">
          <div>
            <dt className="font-mono text-xs uppercase tracking-widest text-muted">Altitude</dt>
            <dd className="mt-1">
              <span className="text-xl font-bold text-accent">~{trip.altitudeM.toLocaleString("en-IN")} m</span>
              <span className="mt-1 block text-xs text-muted">Above sea level, not elevation gain</span>
            </dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-widest text-muted">Trek time</dt>
            <dd className="mt-1">
              <span className="text-xl font-bold text-accent">{trip.ascentTime}</span>
              <span className="mt-1 block text-xs text-muted">Typical uphill walking time, excluding the return</span>
            </dd>
          </div>
        </dl>
        <p className="mt-5 text-xs leading-relaxed text-muted">
          Approximate route figures; timings vary with pace, breaks, and conditions.
        </p>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
          {trip.sources.map((source) => (
            <a key={source.url} href={source.url} target="_blank" rel="noopener noreferrer" className="text-xs text-accent underline underline-offset-4 hover:text-accent-2">
              {source.label}
            </a>
          ))}
        </div>
      </Reveal>

      {trip.photos.length > 0 && (
        <Reveal delay={0.15} className="mt-10">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-text">
            <FiCamera /> From my camera roll
          </h2>
          <div className={`grid gap-6 ${trip.photos.length > 1 ? "sm:grid-cols-2" : ""}`}>
            {trip.photos.map((photo) => (
              <figure key={photo.src} className="overflow-hidden rounded-2xl border border-border bg-surface">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  width={960}
                  height={1280}
                  loading="lazy"
                  className="h-auto w-full"
                />
                <figcaption className="p-4 text-sm text-muted">{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      )}

      <Reveal delay={0.2} className="mt-10">
        <Link to="/trip-diaries" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-2">
          <FiArrowLeft /> Explore the other treks
        </Link>
      </Reveal>
    </section>
  );
}
