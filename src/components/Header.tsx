import { NavLink } from "react-router-dom";
import Logo from "./Logo";

export default function Header() {
  const items = [
    { to: "/", label: "Home" },
    { to: "/programs", label: "Programs" },
    { to: "/team", label: "Team" },
    { to: "/resources", label: "Resources" },
    { to: "/about", label: "About" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-transparent">
      <div className="container-std h-16 grid grid-cols-3 items-center">
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Center pill navigation */}
        <nav className="hidden md:flex items-center justify-center">
          <div className="relative mx-6 rounded-full border border-gray-200/70 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm px-2 py-1">
            <ul className="flex items-center gap-1 text-sm font-medium">
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
        <div className="hidden md:flex items-center justify-end gap-3">
          <NavLink
            to="/join"
            className="rounded-full bg-blue-600 text-white px-5 py-2 text-sm font-semibold shadow-sm hover:bg-blue-700 transition-colors"
          >
            Join αlpha math
          </NavLink>
        </div>
      </div>
    </header>
  );
}
