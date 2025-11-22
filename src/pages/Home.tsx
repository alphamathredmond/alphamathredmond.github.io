import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import Tag from "../components/Tag";
import FloatIn from "../components/FloatIn";
import { Statistics } from "../components/Statistics";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Top Ribbon */}
      <div className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-4 shadow-md">
        <a
          href="https://www.lwsd.org/services/communications/news-and-stories/news-details/~board/students-and-schools/post/doing-the-math-mann-elementary-math-club-shines-with-support-from-tesla-stem-mentors"
          target="_blank"
          rel="noreferrer"
          className="container-std mx-auto flex items-center justify-center gap-2 text-sm font-medium tracking-wide hover:opacity-90 transition-opacity"
        >
          <span className="uppercase text-base tracking-[0.25em] opacity-80">
            Featured
          </span>
          <span className="text-base font-semibold">Recognized by LWSD</span>
          <ArrowUpRight className="w-5 h-5 opacity-90 transition-all duration-200 group-hover:translate-x-0.5" />
        </a>
      </div>

      <section className="relative py-16 md:py-24">
        <div className="container-std">
          <div className="max-w-3xl mx-auto text-center">
            <FloatIn delay={0}>
              <Tag className="mb-6">
                <MapPin className="w-4 h-4 mr-1.5" />
                Redmond, Washington
              </Tag>
            </FloatIn>
            <FloatIn delay={200}>
              <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-gray-900">
                <span className="text-blue-600">α</span>lpha math
              </h1>
            </FloatIn>
            <FloatIn delay={300}>
              <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
                Competitive-math prep programs fostering excellence and mastery.
              </p>
            </FloatIn>
            <FloatIn delay={400}>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                {/* Primary gradient button */}
                <Link
                  to="/competitions"
                  className="group relative inline-flex items-center rounded-2xl px-7 py-3.5 bg-blue-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] overflow-hidden"
                >
                  <span className="relative z-10">Explore Competitions</span>
                </Link>

                {/* Secondary outline button */}
                <Link
                  to="/team"
                  className="group inline-flex items-center rounded-2xl px-7 py-3.5 border-2 border-blue-600/20 bg-white/70 backdrop-blur text-gray-800 hover:border-blue-600/40 hover:bg-white transition-all"
                >
                  <span>Meet Our Team</span>
                </Link>
              </div>
            </FloatIn>
          </div>

          {/* Animated Stats */}
          <FloatIn delay={500}>
            <Statistics />
          </FloatIn>
          {/* <FloatIn delay={600}>
            <div className="mt-12 text-center">
              <a
                href="https://www.lwsd.org/services/communications/news-and-stories/news-details/~board/students-and-schools/post/doing-the-math-mann-elementary-math-club-shines-with-support-from-tesla-stem-mentors"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <span className="text-xs uppercase tracking-[0.2em] text-white/80">
                  featured
                </span>
                Recognized by LWSD
              </a>
            </div>
          </FloatIn> */}
        </div>
      </section>
    </>
  );
}
