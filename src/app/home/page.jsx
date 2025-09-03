import Navbar from "../components/Navbar";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-blue-50 py-16 px-8 md:px-20 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold text-gray-900 leading-snug">
            Disaster Preparedness <br /> for Schools and Colleges
          </h1>
          <p className="mt-4 text-gray-600">
            Learn how to prepare and respond effectively to emergencies,
            ensuring the safety of students and staff.
          </p>
          <Link href="/home#explore">
            <button className="mt-6 bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800">
              Get Started
            </button>
          </Link>
        </div>

        <div className="mt-8 md:mt-0">
          <img
            src="/homepagepic.jpg"
            alt="Disaster Preparedness"
            className="w-96"
          />
        </div>
      </section>

      {/* Why Disaster Preparedness Matters */}
      <section className="py-16 px-8 md:px-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Why Disaster Preparedness Matters
        </h2>
        <p className="mt-2 text-gray-600">
          Disasters can strike without warning, and schools must be prepared to
          protect students and staff.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <img src="/risk.jpg" alt="Risks" className="mx-auto h-40" />
            <h3 className="mt-4 text-xl font-semibold">Understand the Risks</h3>
            <p className="text-gray-600 mt-2">
              Know the types of disasters that could occur in your area and
              assess potential risks.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <img
              src="/skills.jpg"
              alt="Skills"
              className="mx-auto h-40"
            />
            <h3 className="mt-4 text-xl font-semibold">
              Develop Critical Skills
            </h3>
            <p className="text-gray-600 mt-2">
              Learn essential skills to respond effectively to emergencies with
              confidence.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <img
              src="/confidence.jpg"
              alt="Confidence"
              className="mx-auto h-40"
            />
            <h3 className="mt-4 text-xl font-semibold">Build Confidence</h3>
            <p className="text-gray-600 mt-2">
              Boost your confidence to handle challenging situations and stay
              calm.
            </p>
          </div>
        </div>
      </section>

      {/* Explore Disasters */}
      <section id="explore" className="py-16 px-8 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Let’s Explore the Disasters
        </h2>

        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {/* Earthquake */}
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <img
              src="/earthquake.jpg"
              alt="Earthquake"
              className="mx-auto h-40"
            />
            <h3 className="mt-4 text-xl font-semibold">Earthquake</h3>
            <Link href="/earthquake">
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Start Learning
              </button>
            </Link>
          </div>

          {/* Flood */}
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <img src="/flood.jpg" alt="Flood" className="mx-auto h-40" />
            <h3 className="mt-4 text-xl font-semibold">Flood</h3>
            <Link href="/flood">
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Start Learning
              </button>
            </Link>
          </div>

          {/* Cyclone */}
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <img
              src="/cyclone.jpg"
              alt="Cyclone"
              className="mx-auto h-40"
            />
            <h3 className="mt-4 text-xl font-semibold">Cyclone</h3>
            <Link href="/cyclone">
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Start Learning
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
