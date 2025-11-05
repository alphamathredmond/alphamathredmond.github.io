import programs from "../data/programs.json";
import { Link } from "react-router-dom";
import ProgramCard from "../components/ProgramCard";

export default function Programs() {
  return (
    <section className="container-std section">
      <h1 className="text-3xl font-semibold mb-6">Programs</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map(p => (
          <ProgramCard key={p.id} p={p} />
        ))}
      </div>
      <div className="mt-8">
        <Link to="/join" className="underline">Not sure which to pick? Start the sign-up form →</Link>
      </div>
    </section>
  );
}