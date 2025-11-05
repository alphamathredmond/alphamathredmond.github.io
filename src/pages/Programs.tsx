import FloatIn from "../components/FloatIn";

export default function Programs() {
  return (
    <section className="container-std py-16">
      <FloatIn delay={0}>
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-gray-900">Competitions</h1>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">We help students prepare for local and regional math competitions. Below is an overview of Math is Cool.</p>
        </div>
      </FloatIn>

      <FloatIn delay={150}>
        <div className="mt-12 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Math is Cool</h2>
          <p className="mt-3 text-gray-700 max-w-3xl">Math is Cool is a team-based math competition for students in Washington and Oregon. Open to students from grades 4 through 12, it lets participants showcase their math skills across a variety of exciting events.</p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">Events in Math is Cool</h3>
          <div className="mt-4 grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900">Individual</h4>
              <p className="mt-1 text-sm text-gray-600">Students can showcase their math skills in various individual events:</p>
              <ul className="mt-3 list-disc list-inside text-gray-700 space-y-1">
                <li>Mental Math (oral) — 8 questions, 30 seconds per question</li>
                <li>Individual Contest (paper) — 40 FRQ questions, 35 minutes</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Team</h4>
              <p className="mt-1 text-sm text-gray-600">Team events emphasize collaboration and strategy:</p>
              <ul className="mt-3 list-disc list-inside text-gray-700 space-y-1">
                <li>Team Multiple Choice (paper) — 10 MCQ questions, 15 min</li>
                <li>Team Contest (paper) — 10 FRQ questions, 15 minutes</li>
                <li>Triple Jump (paper) — 10 FRQ questions, 15 minutes with 3 submissions on 5 minute intervals</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">College Bowl</h4>
              <p className="mt-1 text-sm text-gray-600">Fast-paced, buzzer rounds:</p>
              <ul className="mt-3 list-disc list-inside text-gray-700 space-y-1">
                <li>College Bowl (oral) — 10 questions per round, 3 rounds, 30 seconds per question</li>
              </ul>
            </div>
          </div>

          <h3 className="mt-10 text-xl font-semibold text-gray-900">More Information</h3>
          <div className="mt-4 grid md:grid-cols-3 gap-6 text-gray-700">
            <div>
              <h4 className="font-semibold text-gray-900">Website</h4>
              <p className="mt-1 text-sm">Information about Math is Cool can be found at their website: <a className="text-blue-600 hover:underline" href="https://academicsarecool.com" target="_blank" rel="noreferrer">academicsarecool.com</a></p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Rules</h4>
              <p className="mt-1 text-sm">Rules for the competition and eligibility: <a className="text-blue-600 hover:underline" href="https://academicsarecool.com/#/rules" target="_blank" rel="noreferrer">academicsarecool.com/#/rules</a></p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">History</h4>
              <p className="mt-1 text-sm">Learn more about the history: <a className="text-blue-600 hover:underline" href="https://academicsarecool.com/#/history" target="_blank" rel="noreferrer">academicsarecool.com/#/history</a></p>
            </div>
          </div>
        </div>
      </FloatIn>
    </section>
  );
}