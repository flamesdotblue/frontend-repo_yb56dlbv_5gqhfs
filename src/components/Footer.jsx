export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <h4 className="text-lg font-semibold">StaySavvy</h4>
            <p className="mt-2 text-sm text-gray-600">
              A meta‑search engine that helps you compare hotel prices across top booking sites.
            </p>
          </div>
          <nav className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <h5 className="font-semibold text-gray-900">Explore</h5>
              <ul className="mt-3 space-y-2 text-gray-600">
                <li><a className="hover:text-gray-900" href="#">Popular Destinations</a></li>
                <li><a className="hover:text-gray-900" href="#">Deals</a></li>
                <li><a className="hover:text-gray-900" href="#">Travel Guides</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-gray-900">Company</h5>
              <ul className="mt-3 space-y-2 text-gray-600">
                <li><a className="hover:text-gray-900" href="#">About</a></li>
                <li><a className="hover:text-gray-900" href="#">Careers</a></li>
                <li><a className="hover:text-gray-900" href="#">Contact</a></li>
              </ul>
            </div>
          </nav>
          <div className="sm:text-right">
            <p className="text-sm text-gray-600">© {new Date().getFullYear()} StaySavvy. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
