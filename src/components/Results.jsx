import { Star } from "lucide-react";

function ProviderTag({ name, price }) {
  return (
    <div className="flex items-center justify-between gap-3 text-sm border rounded-lg px-3 py-2 bg-white">
      <span className="text-slate-600">{name}</span>
      <span className="font-semibold text-slate-900">${price}</span>
    </div>
  );
}

function HotelCard({ hotel }) {
  const bestOffer = hotel.offers.reduce((min, o) => (o.price < min.price ? o : min), hotel.offers[0]);
  return (
    <div className="grid md:grid-cols-[260px_1fr_220px] gap-4 p-4 border rounded-xl bg-white shadow-sm hover:shadow-md transition">
      <img
        src={hotel.image}
        alt={hotel.name}
        className="w-full h-40 md:h-full object-cover rounded-lg"
      />

      <div className="flex flex-col gap-2">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">{hotel.name}</h3>
            <p className="text-sm text-slate-500">{hotel.location}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <div className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-emerald-50 text-emerald-700">
            <span className="font-semibold">{hotel.rating}</span>
            <Star className="h-3.5 w-3.5 fill-emerald-500 text-emerald-500" />
          </div>
          <span className="text-slate-500">{hotel.reviews.toLocaleString()} reviews</span>
        </div>
        <div className="grid sm:grid-cols-3 gap-2 mt-2">
          {hotel.offers.slice(0, 3).map((o) => (
            <ProviderTag key={o.name} name={o.name} price={o.price} />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-end justify-between">
        <div className="text-right">
          <p className="text-xs text-slate-500">Best price from</p>
          <p className="text-sm font-medium text-slate-700">{bestOffer.name}</p>
          <p className="text-2xl font-semibold text-slate-900">${bestOffer.price}</p>
        </div>
        <button className="w-full md:w-auto px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-sm transition">
          View deal
        </button>
      </div>
    </div>
  );
}

export default function Results({ hotels }) {
  if (!hotels.length) {
    return (
      <div className="text-center py-16 text-slate-500">
        No results. Try broadening your search.
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {hotels.map((h) => (
        <HotelCard key={h.id} hotel={h} />
      ))}
    </div>
  );
}
