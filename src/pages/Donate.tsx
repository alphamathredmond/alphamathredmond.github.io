export default function Donate() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Donate</h1>
      <p className="mt-3 text-muted-foreground">
        Your donation supports free and low-cost math enrichment for students in our community.
      </p>

      <div className="mt-6 space-y-3">
        <p>Suggested amounts and impact:</p>
        <ul className="list-disc pl-6 space-y-1 text-sm">
          <li>$50 — classroom supplies for one session</li>
          <li>$100 — covers materials for a full month</li>
          <li>$250 — sponsors a student’s full contest prep</li>
        </ul>
      </div>

      <a
        className="mt-8 inline-block bg-black text-white rounded px-4 py-2"
        href="https://example.com/donate" // replace with Asha/your link
        target="_blank" rel="noreferrer"
      >
        Donate via Asha for Education
      </a>

      <p className="mt-4 text-xs text-muted-foreground">
        Alpha Math is fiscally sponsored; donations may be tax-deductible. Receipt provided by our sponsor.
      </p>
    </section>
  );
}