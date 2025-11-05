import FloatIn from "../components/FloatIn";

export default function Donate() {
  return (
    <section className="container-std py-16">
      <FloatIn delay={0}>
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-gray-900">Donate</h1>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
            Donations are tax-deductible to the extent allowed by law. Alpha Math is a fiscally
            sponsored project of Junior Asha, Asha for Education, Seattle.
          </p>
        </div>
      </FloatIn>

      <FloatIn delay={150}>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
              Your generous contribution helps us make a meaningful impact.
            </h2>
            <p className="mt-6 text-gray-800">
              <span className="font-semibold">Use this link to donate:</span>{' '}
              <a
                href="https://donate.ashanet.org/?e=1798"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://donate.ashanet.org/?e=1798
              </a>
            </p>
            <p className="mt-6 text-gray-600">Thank you for your support!</p>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-6 md:p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">Why donate?</h3>
            <ul className="mt-3 list-disc list-inside text-gray-700 space-y-1 text-base">
              <li>Support free and low-cost enrichment for local students</li>
              <li>Help us expand programs and competition prep</li>
              <li>Enable need-based scholarships and materials</li>
            </ul>
          </div>
        </div>
      </FloatIn>
    </section>
  );
}