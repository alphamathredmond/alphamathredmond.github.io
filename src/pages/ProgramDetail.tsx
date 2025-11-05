import { useParams, Link } from "react-router-dom";
import programs from "../data/programs.json";

type Program = {
  id: string;
  title: string;
  blurb: string;
  rounds?: string[];
  schedule?: { day: string; time: string; tz?: string }[];
  gradeMin: number;
  gradeMax: number;
  price: number;
};

export default function ProgramDetail() {
  const { id } = useParams();
  const program = (programs as Program[]).find(p => p.id === id);

  if (!program) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-2xl font-semibold">Program not found</h1>
        <p className="mt-2 text-muted-foreground">
          The program you’re looking for doesn’t exist.
        </p>
        <Link to="/programs" className="mt-6 inline-block underline">Back to Programs</Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-semibold">{program.title}</h1>
      <p className="mt-3 text-lg text-muted-foreground">{program.blurb}</p>

      <div className="mt-6 text-sm">
        <div>Grades {program.gradeMin}–{program.gradeMax}</div>
        <div>{program.price === 0 ? "Free" : `$${program.price}`}</div>
      </div>

      {program.rounds?.length ? (
        <div className="mt-6">
          <h2 className="font-medium mb-2">What we cover</h2>
          <ul className="list-disc pl-6 space-y-1">
            {program.rounds.map(r => <li key={r}>{r}</li>)}
          </ul>
        </div>
      ) : null}

      {program.schedule?.length ? (
        <div className="mt-6">
          <h2 className="font-medium mb-2">Schedule</h2>
          <ul className="list-disc pl-6 space-y-1">
            {program.schedule.map((s, i) => (
              <li key={i}>{s.day} • {s.time} {s.tz ?? ""}</li>
            ))}
          </ul>
        </div>
      ) : null}

      <Link to={`/join?program=${program.id}`} className="mt-8 inline-block bg-black text-white rounded px-4 py-2">
        Join this program
      </Link>
    </section>
  );
}