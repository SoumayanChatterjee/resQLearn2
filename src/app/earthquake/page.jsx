"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Earthquake() {
  return (
    <main className="min-h-screen text-gray-800 pt-24 bg-cover bg-center relative"
    style={{
      backgroundImage: "url('course.png')",
      backgroundRepeat: "no-repeat",
    }}>

      {/* Navbar */}
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
        Stay Safe When the Ground Shakes
        </h2>
        <p className="text-xl text-gray-400">
        Learn what to do before, during, and after an earthquake to protect yourself and others.
        </p>
      </section>
    
      {/* Courses Section */}
      <section className="mt-12 px-4 max-w-6xl mx-auto">
  <h3 className="text-3xl font-bold text-center mb-8 text-slate-200">
    Courses
  </h3>

  {/* Group for hover effect */}
  <div className="grid md:grid-cols-3 gap-6 group relative">

    {/* First Aid Basics */}
    <div className="bg-slate-100 shadow-md rounded-xl p-6 transition-all duration-300 ease-in-out 
                    group-hover:[filter:blur(1px)] group-hover:scale-[0.98] 
                    hover:!scale-105 hover:!blur-none hover:shadow-2xl z-10 relative">
      <h4 className="text-xl font-semibold mb-2">First Aid Basics</h4>
      <p className="text-gray-700 mb-4">
        Learn essential life-saving techniques, from treating minor cuts
        to responding to more serious injuries.
      </p>
      <Link href="/courses/first-aid">
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
          Start Course
        </button>
      </Link>
    </div>

    {/* Fire Safety & Evacuation */}
    <div className="bg-slate-100 shadow-md rounded-xl p-6 transition-all duration-300 ease-in-out 
                    group-hover:[filter:blur(1px)] group-hover:scale-[0.98] 
                    hover:!scale-105 hover:!blur-none hover:shadow-2xl z-10 relative">
      <h4 className="text-xl font-semibold mb-2">
        Fire Safety & Evacuation
      </h4>
      <p className="text-gray-700 mb-4">
        Understand fire prevention, how to use a fire extinguisher, and
        proper evacuation procedures.
      </p>
      <Link href="/courses/fire-safety">
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
          Start Course
        </button>
      </Link>
    </div>

    {/* Earthquake Preparedness */}
    <div className="bg-slate-100  shadow-md rounded-xl p-6 transition-all duration-300 ease-in-out 
                    group-hover:[filter:blur(1px)] group-hover:scale-[0.98] 
                    hover:!scale-105 hover:!blur-none hover:shadow-2xl z-10 relative">
      <h4 className="text-xl font-semibold mb-2">
        Earthquake Preparedness
      </h4>
      <p className="text-gray-700 mb-4">
        What to do before, during, and after an earthquake to ensure your
        safety and that of others.
      </p>
      <Link href="/courses/earthquake">
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
          Start Course
        </button>
      </Link>
    </div>

  </div>
</section>

     {/* Quizzes Section */}
<section className="mt-16 px-4 max-w-6xl mx-auto">
  <h3 className="text-3xl font-bold text-center mb-8 text-slate-200">
    Quizzes
  </h3>

  <div className="grid md:grid-cols-3 gap-6 group">

    {/* Emergency Kit Checklist */}
    <div className="bg-slate-100  shadow-md rounded-xl p-6 text-left transition-all duration-300 ease-in-out
                    group-hover:[filter:blur(1px)] group-hover:scale-[0.98]
                    hover:!scale-105 hover:![filter:blur(0px)] hover:shadow-2xl z-10 relative">
      <h4 className="text-xl font-semibold mb-2">Emergency Kit Checklist</h4>
      <p className="text-gray-700 mb-4">
        Test your knowledge on the essential items for a survival kit.
      </p>
      <Link href="/quizzes/emergency-kit">
        <button className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded">
          Take Quiz
        </button>
      </Link>
    </div>

    {/* First Aid Knowledge */}
    <div className="bg-slate-100  shadow-md rounded-xl p-6 text-left transition-all duration-300 ease-in-out
                    group-hover:[filter:blur(1px)] group-hover:scale-[0.98]
                    hover:!scale-105 hover:![filter:blur(0px)] hover:shadow-2xl z-10 relative">
      <h4 className="text-xl font-semibold mb-2">First Aid Knowledge</h4>
      <p className="text-gray-700 mb-4">
        Can you make the right decisions in a critical situation? Find out now.
      </p>
      <Link href="/quizzes/first-aid">
        <button className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded">
          Take Quiz
        </button>
      </Link>
    </div>

    {/* Earthquake Scenarios */}
    <div className="bg-slate-100  shadow-md rounded-xl p-6 text-left transition-all duration-300 ease-in-out
                    group-hover:[filter:blur(1px)] group-hover:scale-[0.98]
                    hover:!scale-105 hover:![filter:blur(0px)] hover:shadow-2xl z-10 relative">
      <h4 className="text-xl font-semibold mb-2">Earthquake Scenarios</h4>
      <p className="text-gray-700 mb-4">
        Challenge yourself with questions on basic earthquake procedures.
      </p>
      <Link href="/quizzes/earthquake">
        <button className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded">
          Take Quiz
        </button>
      </Link>
    </div>

  </div>
</section>

      {/* Helpful Videos Section */}
      <section className="mt-16 px-4 max-w-6xl mx-auto pb-16">
  <h3 className="text-3xl font-bold text-center mb-8 text-slate-200">Helpful Videos</h3>
  <div className="grid md:grid-cols-3 gap-6 group">
    {/* Video 1 */}
    <div
      className="bg-slate-100  shadow-md rounded-lg p-4 transition-all duration-300 ease-in-out
                 group-hover:[filter:blur(1px)] group-hover:scale-[0.98]
                 hover:!scale-105 hover:![filter:blur(0px)] hover:shadow-2xl z-10 relative"
    >
      <div className="relative w-full aspect-video">
        <iframe
          src="https://www.youtube.com/embed/dJpIU1rSOFY?si=eIeRVE3lBE58QDOY"
          title="What causes an earthquake?"
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <h4 className="text-xl font-semibold mt-3">What causes an earthquake?</h4>
    </div>

    {/* Video 2 */}
    <div
      className="bg-slate-100  shadow-md rounded-lg p-4 transition-all duration-300 ease-in-out
                 group-hover:[filter:blur(1px)] group-hover:scale-[0.98]
                 hover:!scale-105 hover:![filter:blur(0px)] hover:shadow-2xl z-10 relative"
    >
      <div className="relative w-full aspect-video">
        <iframe
          src="https://www.youtube.com/embed/H4VQul_SmCg?si=qnC-LMJs9rD8Ua7g"
          title="Why do buildings fall in earthquakes?"
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <h4 className="text-xl font-semibold mt-3">
      What factors cause structural failure during an earthquake??
      </h4>
    </div>

    {/* Video 3 */}
    <div
      className="bg-slate-100  shadow-md rounded-lg p-4 transition-all duration-300 ease-in-out
                 group-hover:[filter:blur(1px)] group-hover:scale-[0.98]
                 hover:!scale-105 hover:![filter:blur(0px)] hover:shadow-2xl z-10 relative"
    >
      <div className="relative w-full aspect-video">
        <iframe
          src="https://www.youtube.com/embed/o80_DkrVrVg?si=7dUOGC5mfPWvo8Y_"
          title="Every Earthquake Magnitude"
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <h4 className="text-xl font-semibold mt-3">How do magnitudes correlate with damage caused?</h4>
    </div>
  </div>
</section>
<footer className="bg-slate-900 text-white py-6">
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