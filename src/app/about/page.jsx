"use client";
import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800 flex flex-col">
      {/* ✅ Navbar */}
      <Navbar />

      {/* About Us Section */}
      <section className="flex-1 max-w-5xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold mb-6 text-blue-700">About Us</h1>
        <p className="text-lg text-gray-600 mb-8">
          Our mission is to provide simple, reliable, and practical resources
          for disaster preparedness and safety education.  
          We aim to empower individuals and communities to respond
          confidently in emergencies.
        </p>

        {/* Icons / Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <span className="text-4xl">🌍</span>
            <h3 className="text-xl font-semibold mt-4">Global Awareness</h3>
            <p className="text-gray-600 mt-2">
              Raising awareness about disaster readiness worldwide.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <span className="text-4xl">📚</span>
            <h3 className="text-xl font-semibold mt-4">Learning Resources</h3>
            <p className="text-gray-600 mt-2">
              Courses, quizzes, and guides to prepare you better.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <span className="text-4xl">🤝</span>
            <h3 className="text-xl font-semibold mt-4">Community Support</h3>
            <p className="text-gray-600 mt-2">
              Working together to create safer communities.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ Footer */}
      <footer className="bg-slate-900 text-gray-400 py-8 mt-8">
        <div className="text-center text-gray-500 text-sm mt-6 border-t border-gray-700 pt-4">
          © 2025 ResQLearn. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
