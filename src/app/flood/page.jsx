"use client";
import Link from "next/link";

export default function Flood() {
  return (
  
      <main className="min-h-screen text-gray-800 pt-24 bg-cover bg-center relative"
      style={{
        backgroundImage: "url('course.png')", // put a flood-themed image in /public
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 text-white bg-slate-800 z-20">

        <h1 className="text-2xl font-bold drop-shadow-lg">ResQLearn</h1>
        <ul className="flex space-x-10">
          <li>
            <a href="/home" className="hover:text-blue-400 drop-shadow-lg">Home</a>
          </li>
          <li>
            <a href="/about" className="hover:text-blue-400 drop-shadow-lg">About Us</a>
          </li>
          <li>
            <a href="/contact" className="hover:text-blue-400 drop-shadow-lg">Contact</a>
          </li>
          <li>
            <a href="/login" className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 shadow-lg">Logout</a>
          </li>
          <li>
            <a href="/profile" className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200 shadow-lg">Profile</a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="text-center mt-8 px-4">
      <h2 className="text-6xl font-extrabold text-center text-slate-300 mb-4">
      Be Ready When the Waters Rise
        </h2>
        <p className="text-xl text-gray-400">
        Discover how to prepare, respond, and recover effectively during flood situations.
        </p>
      </section>

      {/* Courses Section */}
      <section className="mt-12 px-4 max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold mb-8 text-slate-200 text-center">Courses</h3>
        <div className="grid md:grid-cols-3 gap-6 group relative">
          {/* Flood Preparedness */}
          <div className="bg-slate-100  shadow-md rounded-xl p-6 text-left transition-all duration-300 ease-in-out
                    group-hover:[filter:blur(1px)] group-hover:scale-[0.98]
                    hover:!scale-105 hover:![filter:blur(0px)] hover:shadow-2xl z-10 relative">
            <h4 className="text-xl font-semibold mb-2">Flood Preparedness</h4>
            <p className="text-gray-700 mb-4">
              Learn how to prepare for floods, what to do during flooding, and how to recover
              safely afterward.
            </p>
            
            <p className="text-sm text-gray-500 mb-3">60% Complete</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
              <div className="bg-blue-500 h-2.5 rounded-full w-3/5"></div>
            </div>
            <button className="w-full py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition">
              Continue Course
            </button>
          </div>

          <div className="bg-slate-100  shadow-md rounded-xl p-6 text-left transition-all duration-300 ease-in-out
                    group-hover:[filter:blur(1px)] group-hover:scale-[0.98]
                    hover:!scale-105 hover:![filter:blur(0px)] hover:shadow-2xl z-10 relative">
            <h4 className="text-xl font-semibold mb-2">Emergency Shelter Setup</h4>
            <p className="text-gray-700 mb-4">
              Know where and how to find or set up emergency shelters during a flood.
            </p>
            <button className="w-full py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition">
              Start Course
            </button>
          </div>
          <div className="bg-slate-100  shadow-md rounded-xl p-6 text-left transition-all duration-300 ease-in-out
                    group-hover:[filter:blur(1px)] group-hover:scale-[0.98]
                    hover:!scale-105 hover:![filter:blur(0px)] hover:shadow-2xl z-10 relative">
            <h4 className="text-xl font-semibold mb-2">Post-Flood Recovery</h4>
            <p className="text-gray-700 mb-4">
              Learn the safety steps and procedures to follow after a flood has subsided.
            </p>
            <button className="w-full py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition">
              Start Course
            </button>
          </div>
        </div>
      </section>

      {/* Quizzes Section */}
      <section className="mt-16 px-4 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-6 text-slate-200 text-center">Quizzes</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-slate-100  shadow-md rounded-xl p-6 text-left transition-all duration-300 ease-in-out
                    group-hover:[filter:blur(1px)] group-hover:scale-[0.98]
                    hover:!scale-105 hover:![filter:blur(0px)] hover:shadow-2xl z-10 relative">
            <h4 className="text-xl font-semibold mb-2">Flood Emergency Checklist</h4>
            <p className="text-gray-600 mb-4">
              Assess your knowledge on essential items and emergency response.
            </p>
            <button className="w-full py-2 bg-purple-800 text-white rounded hover:bg-purple-900 transition">
              Take Quiz
            </button>
          </div>

          <div className="bg-slate-100  shadow-md rounded-xl p-6 text-left transition-all duration-300 ease-in-out
                    group-hover:[filter:blur(1px)] group-hover:scale-[0.98]
                    hover:!scale-105 hover:![filter:blur(0px)] hover:shadow-2xl z-10 relative">
            <h4 className="text-xl font-semibold mb-2">Real-Time Decision Scenarios</h4>
            <p className="text-gray-600 mb-4">
              Test how you would react during actual flood situations.
            </p>
            <button className="w-full py-2 bg-purple-800 text-white rounded hover:bg-purple-900 transition">
              Take Quiz
            </button>
          </div>

          <div className="bg-slate-100  shadow-md rounded-xl p-6 text-left transition-all duration-300 ease-in-out
                    group-hover:[filter:blur(1px)] group-hover:scale-[0.98]
                    hover:!scale-105 hover:![filter:blur(0px)] hover:shadow-2xl z-10 relative">
            <h4 className="text-xl font-semibold mb-2">Basic Survival Skills</h4>
            <p className="text-gray-600 mb-4">
              Challenge yourself with survival basics every student should know.
            </p>
            <button className="w-full py-2 bg-purple-800 text-white rounded hover:bg-purple-900 transition">
              Take Quiz
            </button>
          </div>
        </div>
      </section>

      {/* Helpful Videos Section */}
      <section className="mt-16 px-4 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-6 text-slate-200 text-center">Helpful Videos</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        <div className="bg-slate-100  shadow-md rounded-xl p-6 text-left transition-all duration-300 ease-in-out
                    group-hover:[filter:blur(0.75px)] group-hover:scale-[0.98]
                    hover:!scale-105 hover:![filter:blur(0px)] hover:shadow-2xl z-10 relative flex items-start gap-4">
            <div className="bg-gray-700 p-3 rounded-full">
              <span className="text-6xl">📦</span>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-1">Flood Emergency Kit Guide</h4>
              <p className="text-gray-600">
                A detailed video walkthrough for creating a flood emergency kit.
              </p>
            </div>
          </div>

          <div className="bg-slate-100  shadow-md rounded-xl p-6 text-left transition-all duration-300 ease-in-out
                    group-hover:[filter:blur(0.75px)] group-hover:scale-[0.98]
                    hover:!scale-105 hover:![filter:blur(0px)] hover:shadow-2xl z-10 relative flex items-start gap-4">
            <div className="bg-gray-700 p-3 rounded-full">
              <span className="text-6xl">🌊</span>
            </div>
            <div>
              <h4 className="font-bold mb-1">What to Do During a Flood</h4>
              <p className="text-gray-600">
                A quick animation on staying safe when waters rise unexpectedly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-6  mt-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} ResQLearn. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            {/* <a href="/about" className="hover:underline">About</a>
            <a href="/contact" className="hover:underline">Contact</a> */}
            {/* <a href="/resources" className="hover:underline">Resources</a> */}
          </div>
        </div>
      </footer>
    </main>
  );
}