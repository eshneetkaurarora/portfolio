import { Link } from "react-router-dom";
import { FiAlertCircle, FiArrowLeft, FiClock, FiMapPin, FiTrendingUp } from "react-icons/fi";
import Reveal from "../components/Reveal";
import Sparkline from "../components/Sparkline";
import TiltCard from "../components/TiltCard";
import { TRIPS } from "../data/trips";

export default function TripDiaries() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-28">
      <Reveal className="mb-4">
        <Link to="/#beyond" data-cursor="hover" className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent">
          <FiArrowLeft /> Back to portfolio
        </Link>
      </Reveal>

      <Reveal delay={0.05} className="mb-14">
        <p className="mb-3 font-mono text-sm uppercase tracking-widest text-accent">Side Project</p>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Trip Diaries</h1>
        <p className="mt-3 max-w-xl text-muted">
          Every trek I do ends up with the same three things: a GPX file full of numbers, a camera roll, and a
          story I tell too many times. This is where I keep all three together.
        </p>
      </Reveal>

      <Reveal className="mb-10 flex items-start gap-3 rounded-2xl border border-dashed border-accent/40 bg-accent/5 p-4 text-sm text-muted">
        <FiAlertCircle className="mt-0.5 shrink-0 text-accent" />
        <span>
          The entries below are sample placeholders so the page has something to show. Real trips (with real photos,
          stats, and stories) go in <code className="rounded bg-bg-soft px-1.5 py-0.5 font-mono text-xs">src/data/trips.ts</code>.
        </span>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        {TRIPS.map((trip, i) => (
          <Reveal key={trip.id} delay={i * 0.08}>
            <Link to={`/trip-diaries/${trip.id}`} data-cursor="hover" className="block h-full">
              <TiltCard className="h-full cursor-pointer">
                {trip.isSample && (
                  <span className="mb-3 inline-block rounded-full bg-accent-2/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-accent-2">
                    Sample
                  </span>
                )}
                <h3 className="mb-1 text-xl font-bold text-text">{trip.title}</h3>
                <p className="mb-4 flex items-center gap-1.5 text-sm text-muted">
                  <FiMapPin size={13} /> {trip.location} · {trip.date}
                </p>

                <Sparkline data={trip.elevationProfile} className="mb-4 h-16 w-full" />

                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="flex items-center gap-1.5 text-text/90">
                    <FiTrendingUp className="text-accent" /> {trip.elevationGainM}m gain
                  </span>
                  <span className="flex items-center gap-1.5 text-text/90">
                    <FiClock className="text-accent" /> {trip.durationHours}h · {trip.distanceKm}km
                  </span>
                </div>

                <p className="mt-4 line-clamp-2 text-sm text-muted">{trip.memory}</p>
              </TiltCard>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
