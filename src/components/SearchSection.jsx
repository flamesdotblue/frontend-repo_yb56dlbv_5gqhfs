import { Calendar, MapPin, Search, Users } from "lucide-react";
import { useState } from "react";

export default function SearchSection({ onSearch }) {
  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState("");
  const [guests, setGuests] = useState(2);

  const submit = (e) => {
    e.preventDefault();
    onSearch?.({ destination, dates, guests });
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium mb-3">
              <Search className="h-3.5 w-3.5" />
              Meta search for the best hotel fares
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
              Find the best hotel price in one search
            </h1>
            <p className="mt-3 text-slate-600 text-base">
              We compare prices from leading booking sites like Booking.com, Expedia, and more — helping you book confidently at the best available rate.
            </p>
          </div>

          <form onSubmit={submit} className="bg-white/90 backdrop-blur rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-5">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <label className="flex items-center gap-2 border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500/30 focus-within:border-blue-500/50 transition bg-white">
                <MapPin className="h-4 w-4 text-slate-500" />
                <input
                  type="text"
                  placeholder="Where to?"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full outline-none text-sm placeholder:text-slate-400"
                />
              </label>
              <label className="flex items-center gap-2 border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500/30 focus-within:border-blue-500/50 transition bg-white">
                <Calendar className="h-4 w-4 text-slate-500" />
                <input
                  type="text"
                  placeholder="Dates"
                  value={dates}
                  onChange={(e) => setDates(e.target.value)}
                  className="w-full outline-none text-sm placeholder:text-slate-400"
                />
              </label>
              <label className="flex items-center gap-2 border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500/30 focus-within:border-blue-500/50 transition bg-white">
                <Users className="h-4 w-4 text-slate-500" />
                <input
                  type="number"
                  min={1}
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full outline-none text-sm placeholder:text-slate-400"
                />
              </label>
            </div>
            <div className="mt-4 flex justify-end">
              <button type="submit" className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-sm transition">
                <Search className="h-4 w-4" />
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
