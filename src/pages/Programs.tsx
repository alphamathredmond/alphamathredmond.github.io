import FloatIn from "../components/FloatIn";

export default function Programs() {
  return (
    <section className="container-std py-16">
      <div className="max-w-2xl mx-auto text-center mb-10">
        <FloatIn delay={0}>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-gray-900">Competitions</h1>
        </FloatIn>
        <FloatIn delay={100}>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
            We help students prepare for local, regional, and national math competitions.
          </p>
        </FloatIn>
      </div>

      <FloatIn delay={150}>
        <article className="mt-12 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Math is Cool</h2>
          <p className="mt-3 text-gray-700 max-w-3xl">
            Math is Cool is a Washington-based team competition for grades 4–12 featuring individual,
            collaborative, and buzzer events. It rewards both depth of mathematical understanding and
            quick strategic thinking.
          </p>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900">Highlights</h3>
              <ul className="mt-3 space-y-2 text-gray-700">
                <li>
                  <span className="font-medium">Individual rounds:</span> mental math (oral) and a 40-question
                  free-response exam build speed and accuracy.
                </li>
                <li>
                  <span className="font-medium">Team strategy:</span> multiple-choice, free-response, and triple-jump
                  rounds emphasize communication under time pressure.
                </li>
                <li>
                  <span className="font-medium">College Bowl:</span> high-energy buzzer rounds keep students sharp and
                  reward quick recall.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Resources</h3>
              <ul className="mt-3 space-y-2 text-sm text-blue-600">
                <li>
                  <a className="hover:underline" href="https://academicsarecool.com" target="_blank" rel="noreferrer">
                    Official competition site
                  </a>
                </li>
                <li>
                  <a
                    className="hover:underline"
                    href="https://academicsarecool.com/#/rules"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Rules & eligibility
                  </a>
                </li>
                <li>
                  <a
                    className="hover:underline"
                    href="https://academicsarecool.com/#/history"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Competition history
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </FloatIn>

      <FloatIn delay={250}>
        <article className="mt-12 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">MOEMS (Mathematical Olympiads for Elementary and Middle Schools)</h2>
          <p className="mt-3 text-gray-700 max-w-3xl">
            MOEMS introduces students in grades 4–8 to creative problem solving through five monthly contests from
            November to March. Each round features five short-answer questions that develop persistence and number sense.
          </p>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900">Highlights</h3>
              <ul className="mt-3 space-y-2 text-gray-700">
                <li>Encourages complete written solutions instead of guesswork.</li>
                <li>Approachable difficulty for newcomers while still challenging veterans.</li>
                <li>Season-long structure rewards consistent practice and teamwork.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Resources</h3>
              <ul className="mt-3 space-y-2 text-sm text-blue-600">
                <li>
                  <a className="hover:underline" href="https://moems.org" target="_blank" rel="noreferrer">
                    Official MOEMS site
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </FloatIn>

      <FloatIn delay={350}>
        <article className="mt-12 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">AMC (American Mathematics Competitions)</h2>
          <p className="mt-3 text-gray-700 max-w-3xl">
            The AMC series (AMC 8, 10, and 12) is the gateway to the USA Mathematical Olympiad. These 25-question multiple-choice
            exams emphasize clever problem solving, algebraic manipulation, and geometric reasoning under time pressure.
          </p>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900">Highlights</h3>
              <ul className="mt-3 space-y-2 text-gray-700">
                <li>AMC 8 targets grades 6–8 with a 40-minute contest.</li>
                <li>AMC 10/12 offer 75-minute exams for advanced middle and high school students.</li>
                <li>Top scorers qualify for AIME, USAMO, and national team pathways.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Resources</h3>
              <ul className="mt-3 space-y-2 text-sm text-blue-600">
                <li>
                  <a className="hover:underline" href="https://www.maa.org/math-competitions" target="_blank" rel="noreferrer">
                    MAA AMC homepage
                  </a>
                </li>
                <li>
                  <a
                    className="hover:underline"
                    href="https://artofproblemsolving.com/wiki/index.php/AMC_Problems_and_Solutions"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Past AMC problems on AoPS
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </FloatIn>

      <FloatIn delay={450}>
        <article className="mt-12 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Math Kangaroo</h2>
          <p className="mt-3 text-gray-700 max-w-3xl">
            Math Kangaroo is an international contest celebrating logical thinking for students in grades 1–12. Problems
            feature puzzles, patterns, and creative reasoning with level-specific point values.
          </p>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900">Highlights</h3>
              <ul className="mt-3 space-y-2 text-gray-700">
                <li>Held each March with in-person and online test centers.</li>
                <li>Multiple-choice questions grow in difficulty within each test.</li>
                <li>Excellent confidence builder for younger students new to contests.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Resources</h3>
              <ul className="mt-3 space-y-2 text-sm text-blue-600">
                <li>
                  <a className="hover:underline" href="https://mathkangaroo.org" target="_blank" rel="noreferrer">
                    Math Kangaroo USA
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </FloatIn>

      <FloatIn delay={550}>
        <article className="mt-12 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Noetic Learning Math Contest</h2>
          <p className="mt-3 text-gray-700 max-w-3xl">
            The Noetic Learning Math Contest runs each fall and spring for grades 2–8. Students solve 20 thought-provoking
            problems in 45 minutes, competing individually and as part of a school or club team.
          </p>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900">Highlights</h3>
              <ul className="mt-3 space-y-2 text-gray-700">
                <li>Balanced mix of number sense, logic, and word problems.</li>
                <li>Medals and team awards recognize both individual and group achievement.</li>
                <li>Strong stepping stone toward AMC and Math is Cool contests.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Resources</h3>
              <ul className="mt-3 space-y-2 text-sm text-blue-600">
                <li>
                  <a
                    className="hover:underline"
                    href="https://www.noetic-learning.com/mathcontest"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Noetic Learning contest site
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </FloatIn>
    </section>
  );
}
