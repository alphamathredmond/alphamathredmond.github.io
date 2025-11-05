import { Link } from "react-router-dom";

/**
 * Alpha Math logo component
 * - White text "mαth"
 * - Red Greek alpha (α)
 * - "Redmond" in italic gray below
 * - Clickable link to home
 */
export default function Logo() {
  return (
    <Link
      to="/"
      className="inline-flex items-center justify-center"
    >
      <span className="text-6xl font-semibold text-blue-600 pb-2">α</span>
    </Link>
  );
}