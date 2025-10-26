import { SlidersHorizontal, Star } from "lucide-react";

export default function Filters({ filters, setFilters }) {
  const update = (key, value) => setFilters((prev) => ({ ...prev, [key]: value }));

  return (
    <div className="sticky top-16 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 text-slate-700">
          <SlidersHorizontal className="h-4 w-4" />
          <span className="text-sm font-medium">Refine results</span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2">
            <label className="text-xs text-slate-500">Max price</label>
            <input
              type="range"
              min={50}
              max={800}
              step={10}
              value={filters.maxPrice}
              onChange={(e) => update("maxPrice", Number(e.target.value))}
            />
            <span className="text-sm font-medium text-slate-700">${filters.maxPrice}</span>
          </div>

          <div className="flex items-center gap-2">
            <label className="text-xs text-slate-500">Min rating</label>
            <select
              value={filters.minRating}
              onChange={(e) => update("minRating", Number(e.target.value))}
              className="border rounded-md text-sm px-2 py-1"
            >
              {[0, 7, 7.5, 8, 8.5, 9].map((r) => (
                <option key={r} value={r}>
                  {r === 0 ? "Any" : r + "+"}
                </option>
              ))}
            </select>
            <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
          </div>

          <div className="flex items-center gap-2">
            <label className="text-xs text-slate-500">Sort</label>
            <select
              value={filters.sortBy}
              onChange={(e) => update("sortBy", e.target.value)}
              className="border rounded-md text-sm px-2 py-1"
            >
              <option value="recommended">Recommended</option>
              <option value="price">Price (low to high)</option>
              <option value="rating">Rating (high to low)</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
