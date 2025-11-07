import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const items = [
    { to: "/", label: "Home" },
    { to: "/competitions", label: "Competitions" },
    { to: "/team", label: "Team" },
    { to: "/donate", label: "Donate" },
  ];

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-40 bg-transparent">
      <div className="container-std relative flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-3 md:gap-4">
          <Logo />
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2">
          <div className="relative mx-6 rounded-full border border-gray-200/70 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm px-2 py-1">
            <ul className="flex items-center gap-1 text-base font-medium">
              {items.map((it) => (
                <li key={it.to}>
                  <NavLink
                    to={it.to}
                    className={({ isActive }) =>
                      `relative z-10 px-3 py-1 rounded-full transition-colors ${
                        isActive ? "text-blue-700" : "text-gray-700 hover:text-blue-700"
                      }`
                    }
                  >
                    {it.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Right action */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white/80 shadow-sm transition hover:bg-white md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute inset-x-0 top-0 h-0.5 bg-gray-800 transition-transform duration-200 ${
                  menuOpen ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute inset-x-0 top-1.5 h-0.5 bg-gray-800 transition-opacity duration-200 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute inset-x-0 bottom-0 h-0.5 bg-gray-800 transition-transform duration-200 ${
                  menuOpen ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
          <NavLink
            to="/join"
            className="hidden md:inline-flex rounded-full bg-blue-600 text-white px-5 py-2 text-sm font-semibold shadow-sm hover:bg-blue-700 transition-colors"
          >
            Join αlpha math
          </NavLink>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden transition-[max-height,opacity] duration-200 ease-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <nav className="container-std pb-4">
          <ul className="rounded-2xl border border-gray-200 bg-white shadow-sm p-4 space-y-3 text-sm font-medium text-gray-800">
            {items.map((it) => (
              <li key={it.to}>
                <NavLink
                  to={it.to}
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-2 transition-colors ${
                      isActive ? "bg-blue-50 text-blue-700" : "hover:bg-gray-50"
                    }`
                  }
                >
                  {it.label}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink
                to="/join"
                className="block rounded-lg bg-blue-600 px-3 py-2 text-center font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
              >
                Join αlpha math
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
