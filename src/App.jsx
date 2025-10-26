import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
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
