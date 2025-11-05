import FloatIn from "../components/FloatIn";

export default function Join() {
  return (
    <section className="container-std py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <FloatIn delay={0}>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
              Join Alpha Math
            </h1>
          </FloatIn>
          <FloatIn delay={100}>
            <p className="mt-6 text-lg md:text-xl text-gray-600">
              Whether you are a family searching for enrichment classes or a high school
              student ready to tutor, here&apos;s how to connect with our team.
            </p>
          </FloatIn>
        </div>

      <div className="grid gap-8 md:grid-cols-2">
        <FloatIn delay={200} className="h-full">
          <article className="flex h-full flex-col rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
              Students & Families
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900">Sign Up for Classes</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Interested in preparing for math competitions? Complete the student application
              so we can match you with the right Alpha Math program and follow up with next steps.
            </p>
            <a
              href="https://forms.microsoft.com/r/NfkzbS2qW8"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              Start the student application
            </a>
          </article>
        </FloatIn>

        <FloatIn delay={300} className="h-full">
          <article className="flex h-full flex-col rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
              Tutors
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900">Join the Alpha Math Team</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Are you a high school student excited about tutoring? Tell us about your
              interests and experience so we can connect you with upcoming opportunities.
            </p>
            <a
              href="https://forms.office.com/r/8jmm4ST6DB"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              Apply now
            </a>
            <p className="mt-6 text-xs text-gray-500">
              We review applications on a rolling basis and follow up by email with next steps.
            </p>
          </article>
        </FloatIn>
      </div>

      <FloatIn delay={400}>
        <article className="mt-10 rounded-3xl border border-gray-100 bg-white p-8 md:p-10 shadow-sm">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
            More Math Opportunities
          </span>
          <h2 className="mt-4 text-3xl font-bold text-gray-900">
            Gifted Education Advisory Council Math Club
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl">
            Keep your student sharp with additional contests and problem-solving meetups through
            the GEAC Math Club. Explore their calendar and registration details below.
          </p>
          <a
            className="mt-6 inline-flex items-center justify-center rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
            href="https://www.lwsdgeac.org/geacevents/mathematical-olympiad-for-elementary-middle-schools-moems-15-lccwj"
            target="_blank"
            rel="noreferrer"
          >
            Visit the GEAC Math Club page
          </a>
        </article>
      </FloatIn>
    </section>
  );
}
