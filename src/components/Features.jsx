import { Building2, Star, Shield, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Building2,
    title: 'Compare top sites',
    desc: 'See prices from Booking, Expedia, Hotels.com and more—side by side in one place.'
  },
  {
    icon: Star,
    title: 'Best price first',
    desc: 'Our smart sort bubbles up the best total price with transparent taxes and fees.'
  },
  {
    icon: Shield,
    title: 'Trusted & secure',
    desc: 'Verified reviews and secure redirects. We never store payment details.'
  },
  {
    icon: Sparkles,
    title: 'Flexible search',
    desc: 'Filter by price, rating, amenities and more. Save searches and share with friends.'
  }
];

export default function Features() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why travelers choose us</h2>
        <p className="mt-3 text-gray-600">Everything you need to find the right stay at the right price.</p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
            <p className="mt-2 text-sm text-gray-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
