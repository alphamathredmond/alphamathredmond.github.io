import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-dvh flex flex-col relative">
      {/* Global background gradient */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
      <Header />
      <main className="flex-1">
        <div className="pt-2">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
}