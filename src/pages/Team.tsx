import tutors from "../data/tutors.json";
import FloatIn from "../components/FloatIn";

type Tutor = {
  id: string;
  name: string;
  role?: string[];
  subjects?: string[];
  bio?: string;
  school?: string;
  grade?: string;
  links?: { image?: string };
};

export default function Team() {
  const list = tutors as Tutor[];
  const imageMap = import.meta.glob('../assets/people/*', { eager: true, as: 'url' }) as Record<string, string>;
  const resolveImage = (file?: string) => {
    if (!file) return undefined;
    // If absolute URL, use directly
    if (/^https?:\/\//.test(file)) return file;
    // Find a match in the assets/people folder by filename
    const entry = Object.entries(imageMap).find(([path]) => path.endsWith(`/${file}`));
    return entry ? entry[1] : undefined;
  };
  return (
    <section className="container-std py-20">
      <FloatIn delay={0}>
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-gray-900">Our Team</h1>
        </div>
    </FloatIn>
    <FloatIn delay={100}>
        <div className="max-w-2xl mx-auto text-center mb-10">
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">Meet the tutors and volunteers behind Alpha Math.</p>
        </div>
      </FloatIn>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {list.map((t, i) => (
          <FloatIn key={t.id} delay={200 + i * 80} className="h-full">
            <article
              className="h-full flex flex-col group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="p-8 flex-1 flex flex-col items-center text-center">
                {t.links?.image ? (
                  <img
                    src={resolveImage(t.links.image)}
                    alt={t.name}
                    className={`h-48 w-48 rounded-full object-cover ring-2 ring-blue-100 ${
                      t.id === 'chinmayi-buddhavarapu' ? 'object-[center_60%]' : ''
                    }`}
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                  />
                ) : (
                  <div className="h-48 w-48 rounded-full bg-gray-200" />
                )}

                <h3 className="mt-4 text-xl font-semibold text-gray-900">{t.name}</h3>
                {(t.school || t.grade) ? (
                  <p className="mt-1 text-sm text-gray-500">{t.school}{t.school && t.grade ? ' • ' : ''}{t.grade}</p>
                ) : null}

                {t.role?.length ? (
                  <div className="mt-3 flex flex-wrap justify-center gap-2">
                    {t.role.map((r) => (
                      <span key={r} className="inline-block rounded-full bg-blue-50 text-blue-700 px-2.5 py-0.5 text-xs">
                        {r}
                      </span>
                    ))}
                  </div>
                ) : null}

                {t.subjects?.length ? (
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {t.subjects.map((s) => (
                      <span key={s} className="inline-block rounded-md border border-gray-200 bg-white px-2.5 py-0.5 text-xs text-gray-700">
                        {s}
                      </span>
                    ))}
                  </div>
                ) : null}

                {/* {t.bio ? (
                  <p className="mt-5 text-base text-gray-600 line-clamp-4">{t.bio}</p>
                ) : null} */}
              </div>
            </article>
          </FloatIn>
        ))}
      </div>
    </section>
  );
}