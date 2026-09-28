import { Link, useParams } from "react-router-dom";
import { FiArrowLeft, FiCamera, FiClock, FiMapPin, FiTrendingUp } from "react-icons/fi";
import Reveal from "../components/Reveal";
import Sparkline from "../components/Sparkline";
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

  const pace = (trip.durationHours / trip.distanceKm).toFixed(2);

  return (
    <section className="mx-auto max-w-3xl px-6 py-28">
      <Reveal className="mb-8">
        <Link to="/trip-diaries" data-cursor="hover" className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent">
          <FiArrowLeft /> All trips
        </Link>
      </Reveal>

      <Reveal delay={0.05}>
        {trip.isSample && (
          <span className="mb-3 inline-block rounded-full bg-accent-2/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-accent-2">
            Sample Entry
          </span>
        )}
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{trip.title}</h1>
        <p className="mt-2 flex items-center gap-1.5 text-muted">
          <FiMapPin size={14} /> {trip.location} · {trip.date}
        </p>
      </Reveal>

      <Reveal delay={0.1} className="my-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { label: "Distance", value: `${trip.distanceKm} km` },
          { label: "Elevation Gain", value: `${trip.elevationGainM} m` },
          { label: "Duration", value: `${trip.durationHours} h` },
          { label: "Pace", value: `${pace} h/km` },
        ].map((stat) => (
          <div key={stat.label} className="rounded-2xl border border-border bg-surface p-4 text-center shadow-[var(--shadow-glow)]">
            <p className="text-lg font-bold text-accent">{stat.value}</p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted">{stat.label}</p>
          </div>
        ))}
      </Reveal>

      <Reveal delay={0.15} className="mb-10 rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-glow)]">
        <p className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted">
          <FiTrendingUp /> Elevation Profile
        </p>
        <Sparkline data={trip.elevationProfile} className="h-28 w-full" />
      </Reveal>

      <Reveal delay={0.2} className="mb-10">
        <h2 className="mb-3 text-lg font-bold text-text">Core Memory</h2>
        <p className="leading-relaxed text-muted">{trip.memory}</p>
      </Reveal>

      <Reveal delay={0.25}>
        <h2 className="mb-3 flex items-center gap-2 text-lg font-bold text-text">
          <FiCamera /> Photos
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {trip.photos.map((photo, i) => (
            <div
              key={i}
              className="group relative flex aspect-square items-center justify-center overflow-hidden rounded-xl border border-dashed border-border bg-gradient-to-br from-accent/15 to-accent-3/10"
            >
              {/* Replace with <img src="/trips/{trip.id}/photo-1.jpg" className="absolute inset-0 h-full w-full object-cover" /> */}
              <FiCamera className="text-text/30" size={22} />
              <span className="absolute inset-x-0 bottom-0 bg-bg/80 p-2 text-center text-xs text-muted">{photo.caption}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
