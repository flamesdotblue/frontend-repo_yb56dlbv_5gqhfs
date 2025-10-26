import { useState } from 'react';
import { MapPin, Calendar, Users, Search } from 'lucide-react';

export default function Hero({ onSearch }) {
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);

  const onSubmit = (e) => {
    e.preventDefault();
    onSearch?.({ destination, checkIn, checkOut, guests });
  };

  return (
    <section className="relative">
      {/* Background image */}
      <div
        className="absolute inset-0"
        aria-hidden
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.65)'
        }}
      />

      {/* Gradient overlay - allow interaction with the form */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:py-28 lg:py-32 text-white">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-medium backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400" /> Best fare meta‑search
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-6xl">
            Find the perfect stay at the best price
          </h1>
          <p className="mt-4 text-lg text-white/90">
            Compare prices across top booking sites in one search. No hidden fees, just transparent deals you can trust.
          </p>
        </div>

        {/* Search bar */}
        <form
          onSubmit={onSubmit}
          className="mt-10 grid grid-cols-1 gap-3 rounded-2xl bg-white/90 p-3 shadow-xl backdrop-blur sm:grid-cols-6"
        >
          <div className="sm:col-span-2 flex items-center gap-2 rounded-xl border border-black/5 bg-white px-4 py-3">
            <MapPin className="h-5 w-5 text-emerald-600" />
            <input
              type="text"
              placeholder="Where are you going?"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full bg-transparent text-gray-900 placeholder:text-gray-400 focus:outline-none"
              aria-label="Destination"
            />
          </div>
          <div className="sm:col-span-1 flex items-center gap-2 rounded-xl border border-black/5 bg-white px-4 py-3">
            <Calendar className="h-5 w-5 text-emerald-600" />
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full bg-transparent text-gray-900 placeholder:text-gray-400 focus:outline-none"
              aria-label="Check-in"
            />
          </div>
          <div className="sm:col-span-1 flex items-center gap-2 rounded-xl border border-black/5 bg-white px-4 py-3">
            <Calendar className="h-5 w-5 text-emerald-600" />
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full bg-transparent text-gray-900 placeholder:text-gray-400 focus:outline-none"
              aria-label="Check-out"
            />
          </div>
          <div className="sm:col-span-1 flex items-center gap-2 rounded-xl border border-black/5 bg-white px-4 py-3">
            <Users className="h-5 w-5 text-emerald-600" />
            <input
              type="number"
              min={1}
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="w-full bg-transparent text-gray-900 placeholder:text-gray-400 focus:outline-none"
              aria-label="Guests"
            />
          </div>
          <button
            type="submit"
            className="col-span-1 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white transition hover:bg-emerald-700"
          >
            <Search className="h-5 w-5" />
            Search
          </button>
        </form>

        {/* Trust indicators */}
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/80">
          <span>Trusted by savvy travelers</span>
          <span className="hidden h-1 w-1 rounded-full bg-white/40 sm:inline-block" />
          <span>Compares Booking, Expedia, Hotels.com and more</span>
          <span className="hidden h-1 w-1 rounded-full bg-white/40 sm:inline-block" />
          <span>No extra fees</span>
        </div>
      </div>
    </section>
  );
}
