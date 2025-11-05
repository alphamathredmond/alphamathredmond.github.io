export default function Resources() {
  const posts = [
    { id: "mic-overview", title: "Math Is Cool: Overview & Tips", date: "2025-10-01" },
    { id: "practice-set-1", title: "Practice Set #1 (Grades 4–6)", date: "2025-10-08" },
  ];
  return (
    <section className="container-std section">
      <h1 className="text-3xl font-semibold mb-6">Resources</h1>
      <ul className="space-y-4">
        {posts.map(p => (
          <li key={p.id} className="border rounded-lg p-4">
            <div className="text-sm text-muted-foreground">{p.date}</div>
            <h3 className="font-medium text-lg">{p.title}</h3>
            <button className="mt-2 underline text-sm">Read</button>
          </li>
        ))}
      </ul>
    </section>
  );
}