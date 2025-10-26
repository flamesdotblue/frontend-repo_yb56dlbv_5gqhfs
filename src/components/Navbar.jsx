import { Globe, Star } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-sm">
            <Globe className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <p className="text-lg font-semibold tracking-tight">FareFindr</p>
            <p className="text-[11px] text-slate-500 -mt-0.5">Find the best hotel fares</p>
          </div>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-600">
          <a className="hover:text-slate-900 transition" href="#">Hotels</a>
          <a className="hover:text-slate-900 transition" href="#">Deals</a>
          <a className="hover:text-slate-900 transition" href="#">Support</a>
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-1 text-amber-500 text-sm">
            <Star className="h-4 w-4 fill-amber-500" />
            <span className="font-medium">Best Fare Meta Search</span>
          </div>
          <button className="px-3 py-1.5 text-sm rounded-md border border-slate-300 hover:bg-slate-50 transition">
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
}
