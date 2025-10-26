import { useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import SearchSection from "./components/SearchSection";
import Filters from "./components/Filters";
import Results from "./components/Results";

const MOCK_HOTELS = [
  {
    id: "h1",
    name: "Seaview Grand Hotel",
    location: "Miami Beach, USA",
    rating: 8.9,
    reviews: 2134,
    image:
      "https://images.unsplash.com/photo-1501117716987-c8e2a3a67c47?q=80&w=1600&auto=format&fit=crop",
    offers: [
      { name: "Booking.com", price: 189 },
      { name: "Expedia", price: 179 },
      { name: "Hotels.com", price: 185 },
      { name: "Agoda", price: 181 },
    ],
  },
  {
    id: "h2",
    name: "Urban Skyline Suites",
    location: "New York, USA",
    rating: 9.2,
    reviews: 5310,
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600&auto=format&fit=crop",
    offers: [
      { name: "Booking.com", price: 299 },
      { name: "Expedia", price: 289 },
      { name: "Hotels.com", price: 305 },
      { name: "Agoda", price: 295 },
    ],
  },
  {
    id: "h3",
    name: "Riviera Boutique Inn",
    location: "Nice, France",
    rating: 8.4,
    reviews: 987,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600&auto=format&fit=crop",
    offers: [
      { name: "Booking.com", price: 142 },
      { name: "Expedia", price: 139 },
      { name: "Hotels.com", price: 149 },
      { name: "Agoda", price: 145 },
    ],
  },
  {
    id: "h4",
    name: "Alpine Retreat Lodge",
    location: "Zermatt, Switzerland",
    rating: 9.0,
    reviews: 1543,
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1600&auto=format&fit=crop",
    offers: [
      { name: "Booking.com", price: 420 },
      { name: "Expedia", price: 399 },
      { name: "Hotels.com", price: 410 },
      { name: "Agoda", price: 405 },
    ],
  },
  {
    id: "h5",
    name: "Palm Oasis Resort",
    location: "Dubai, UAE",
    rating: 8.1,
    reviews: 3210,
    image:
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1600&auto=format&fit=crop",
    offers: [
      { name: "Booking.com", price: 210 },
      { name: "Expedia", price: 199 },
      { name: "Hotels.com", price: 205 },
      { name: "Agoda", price: 209 },
    ],
  },
];

export default function App() {
  const [query, setQuery] = useState({ destination: "", dates: "", guests: 2 });
  const [filters, setFilters] = useState({ maxPrice: 500, minRating: 0, sortBy: "recommended" });

  const filtered = useMemo(() => {
    const q = query.destination.trim().toLowerCase();
    let items = [...MOCK_HOTELS];

    if (q) {
      items = items.filter(
        (h) => h.name.toLowerCase().includes(q) || h.location.toLowerCase().includes(q)
      );
    }

    items = items.filter((h) => {
      const best = h.offers.reduce((min, o) => (o.price < min.price ? o : min), h.offers[0]);
      return best.price <= filters.maxPrice && h.rating >= filters.minRating;
    });

    if (filters.sortBy === "price") {
      items.sort((a, b) => {
        const ap = Math.min(...a.offers.map((o) => o.price));
        const bp = Math.min(...b.offers.map((o) => o.price));
        return ap - bp;
      });
    } else if (filters.sortBy === "rating") {
      items.sort((a, b) => b.rating - a.rating);
    }

    return items;
  }, [query, filters]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Navbar />
      <SearchSection onSearch={setQuery} />
      <Filters filters={filters} setFilters={setFilters} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="mb-4 text-sm text-slate-600">
          Showing {filtered.length} of {MOCK_HOTELS.length} stays
        </div>
        <Results hotels={filtered} />

        <section className="mt-12 grid md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border bg-white shadow-sm">
            <h3 className="font-semibold">Why a meta search?</h3>
            <p className="text-sm text-slate-600 mt-1">
              We compare prices across dozens of booking sites so you don’t have to. Save time and money with one quick search.
            </p>
          </div>
          <div className="p-4 rounded-xl border bg-white shadow-sm">
            <h3 className="font-semibold">Transparent deals</h3>
            <p className="text-sm text-slate-600 mt-1">
              See options from multiple providers side-by-side with no hidden results. Choose what matters most to you.
            </p>
          </div>
          <div className="p-4 rounded-xl border bg-white shadow-sm">
            <h3 className="font-semibold">Book with confidence</h3>
            <p className="text-sm text-slate-600 mt-1">
              Once you find the best fare, we send you to the provider to complete the booking securely.
            </p>
          </div>
        </section>

        <footer className="py-10 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} FareFindr — Inspired by Trivago & Skyscanner Hotels
        </footer>
      </main>
    </div>
  );
}
