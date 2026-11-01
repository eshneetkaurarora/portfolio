import { Link } from "react-router-dom";
import { FiArrowLeft, FiArrowRight, FiClock, FiCompass, FiMapPin, FiTrendingUp } from "react-icons/fi";
import Reveal from "../components/Reveal";
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
        <p className="mb-3 font-mono text-sm uppercase tracking-widest text-accent">Away from the screen</p>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Trip Diaries</h1>
        <p className="mt-3 max-w-xl text-muted">
          Triund, Prashar Lake, Hemkund Sahib, and Kareri Lake, a growing collection of places
          I've walked, with a few moments from my camera roll.
        </p>
        <p className="mt-3 text-xs text-muted">
          Altitudes and uphill trek times are approximate route estimates. Route details and references are on each trip page.
        </p>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        {TRIPS.map((trip, i) => (
          <Reveal key={trip.id} delay={i * 0.08}>
            <Link to={`/trip-diaries/${trip.id}`} data-cursor="hover" className="block h-full">
              <TiltCard className="h-full cursor-pointer">
                {trip.photos[0] ? (
                  <img
                    src={trip.photos[0].src}
                    alt={trip.photos[0].alt}
                    width={960}
                    height={1280}
                    loading="lazy"
                    className="mb-5 aspect-[4/3] w-full rounded-xl object-cover object-[center_60%]"
                  />
                ) : (
                  <div className="mb-5 flex aspect-[4/3] flex-col items-center justify-center gap-4 rounded-xl bg-gradient-to-br from-accent/20 to-accent-3/10">
                    <FiCompass size={44} className="text-accent" aria-hidden="true" />
                    <p className="font-mono text-xs uppercase tracking-widest text-muted">Himachal Pradesh</p>
                  </div>
                )}
                <h2 className="mb-1 text-xl font-bold text-text">{trip.title}</h2>
                <p className="mb-4 flex items-center gap-1.5 text-sm text-muted">
                  <FiMapPin size={13} className="shrink-0" /> {trip.location}
                </p>
                <div className="mb-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-text/90">
                  <span className="inline-flex items-center gap-1.5">
                    <FiTrendingUp className="text-accent" /> ~{trip.altitudeM.toLocaleString("en-IN")} m altitude
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <FiClock className="text-accent" /> {trip.ascentTime} uphill
                  </span>
                </div>
                <p className="text-sm text-muted">{trip.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                  Explore the trip <FiArrowRight size={14} />
                </span>
              </TiltCard>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
