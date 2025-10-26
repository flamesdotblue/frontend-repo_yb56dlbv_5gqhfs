import { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Results from './components/Results.jsx';
import Footer from './components/Footer.jsx';

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function App() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [params, setParams] = useState({ destination: '', min_rating: 0, max_price: undefined });

  const queryString = useMemo(() => {
    const q = new URLSearchParams();
    if (params.destination) q.set('destination', params.destination);
    if (params.min_rating) q.set('min_rating', String(params.min_rating));
    if (params.max_price) q.set('max_price', String(params.max_price));
    q.set('limit', '12');
    return q.toString();
  }, [params]);

  const fetchHotels = async () => {
    try {
      setLoading(true);
      setError('');
      const res = await fetch(`${API_BASE}/hotels?${queryString}`);
      if (!res.ok) throw new Error('Failed to load hotels');
      const data = await res.json();
      setHotels(Array.isArray(data) ? data : []);
    } catch (e) {
      setError(e.message || 'Something went wrong');
      setHotels([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHotels();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryString]);

  const handleSearch = ({ destination }) => {
    setParams((p) => ({ ...p, destination: destination || '' }));
  };

  const resetSearch = () => {
    setParams({ destination: '', min_rating: 0, max_price: undefined });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Navbar />
      <main>
        <Hero onSearch={handleSearch} />

        {/* Results Section */}
        <section className="mx-auto max-w-7xl px-4 py-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Top deals</h2>
              <p className="text-gray-600">Pulled live from the database and filtered by your destination.</p>
            </div>
            <div className="flex items-center gap-3">
              {(params.destination || params.min_rating || params.max_price) && (
                <button onClick={resetSearch} className="text-sm text-slate-600 hover:text-slate-900 underline">
                  Reset search
                </button>
              )}
            </div>
          </div>

          {loading && (
            <div className="py-16 text-center text-slate-500">Loading hotels…</div>
          )}

          {error && (
            <div className="py-4 mb-6 rounded-lg bg-red-50 text-red-700 px-4 border border-red-200">
              {error}
              <div className="mt-2 text-sm text-red-600/80">
                Make sure your API is running and VITE_BACKEND_URL is set. Currently using: <span className="font-mono">{API_BASE}</span>
              </div>
            </div>
          )}

          {!loading && !error && hotels.length === 0 && (
            <div className="py-12 rounded-xl border border-dashed border-slate-300 bg-white text-center">
              <p className="text-slate-700 font-medium">No hotels found</p>
              <p className="mt-1 text-sm text-slate-500">Try clearing the destination, widening your filters, or resetting the search.</p>
              <div className="mt-4">
                <button onClick={resetSearch} className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-medium transition">
                  Reset search
                </button>
              </div>
            </div>
          )}

          {!loading && !error && hotels.length > 0 && <Results hotels={hotels} />}
        </section>

        {/* Highlight strip */}
        <section className="mx-auto max-w-7xl px-4 pb-16">
          <div className="rounded-2xl bg-emerald-600 p-6 text-white shadow-lg">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-xl font-semibold">Save time. Save money.</h3>
                <p className="text-white/90">We scan hundreds of sites to bring you the best total price, instantly.</p>
              </div>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 font-semibold text-emerald-700 transition hover:bg-emerald-50"
              >
                Start exploring
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
