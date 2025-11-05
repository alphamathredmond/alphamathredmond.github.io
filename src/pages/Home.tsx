import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import Tag from "../components/Tag";
import FloatIn from "../components/FloatIn";
import { Statistics } from "../components/Statistics";

export default function Home() {
  return (
    <>
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
                  to="/programs"
                  className="group relative inline-flex items-center rounded-2xl px-7 py-3.5 bg-blue-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] overflow-hidden"
                >
                  <span className="relative z-10">Explore Programs</span>
                </Link>

                {/* Secondary outline button */}
                <Link
                  to="/contact"
                  className="group inline-flex items-center rounded-2xl px-7 py-3.5 border-2 border-blue-600/20 bg-white/70 backdrop-blur text-gray-800 hover:border-blue-600/40 hover:bg-white transition-all"
                >
                  <span>Contact Us</span>
                </Link>
              </div>
            </FloatIn>
          </div>

          {/* Animated Stats */}
          <FloatIn delay={500}>
            <Statistics />
          </FloatIn>
            </div>
      </section>
    </>
  );
}