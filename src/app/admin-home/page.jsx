"use client";

export default function AdminHomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-900 via-slate-800 to-slate-700 text-white">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-8 py-4 text-white z-20 bg-slate-900 shadow-md">
        <h1 className="text-2xl font-bold drop-shadow-lg">ResQLearn</h1>
        <ul className="flex space-x-10">
          <li>
            <a href="/admin-home" className="hover:text-blue-400 drop-shadow-lg">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-blue-400 drop-shadow-lg">
              About Us
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-blue-400 drop-shadow-lg">
              Contact
            </a>
          </li>
          <li>
            <a
              href="/login"
              className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 shadow-lg"
            >
              Logout
            </a>
          </li>
          <li>
            <a
              href="/profile"
              className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200 shadow-lg"
            >
              Profile
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header
        className="relative h-[350px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/admin_bg.jpg')" }} // ✅ Put admin_bg.jpg in /public
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h2 className="relative text-7xl font-extrabold text-center z-10 tracking-wide">
          WELCOME BACK, ADMIN!
        </h2>
      </header>

      {/* Main Section with 3 Cards */}
      {/* <main className="flex-1 max-w-10xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-12"> */}
      <main className="flex-1 max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-16">
        {/* View Plans */}
        <div className="bg-slate-800 rounded-xl shadow-lg p-8 text-center hover:scale-105 transform transition min-h-[320px] flex flex-col justify-between">
          <img
            src="/plans.png"
            alt="View Plans"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          {/* <h3 className="text-2xl font-bold mb-2">View Plans</h3> */}
          <p className="mb-6 text-gray-300">
            Review and manage emergency plans for institutions.
          </p>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-500 transition">
            View Plans
          </button>
        </div>

        {/* Schedule a Drill */}
        <div className="bg-slate-800 rounded-xl shadow-lg p-8 text-center hover:scale-105 transform transition min-h-[320px] flex flex-col justify-between">
          <img
            src="/drill.png"
            alt="Schedule Drill"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          {/* <h3 className="text-2xl font-bold mb-2">Schedule a Drill</h3> */}
          <p className="mb-6 text-gray-300">
            Organize disaster preparedness drills for schools and colleges.
          </p>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-500 transition">
            Schedule Drill
          </button>
        </div>

        {/* Access Alert */}
        <div className="bg-slate-800 rounded-xl shadow-lg p-8 text-center hover:scale-105 transform transition min-h-[320px] flex flex-col justify-between">
          <img
            src="/alert.png"
            alt="Access Alert"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          {/* <h3 className="text-2xl font-bold mb-2">Access Alert</h3> */}
          <p className="mb-6 text-gray-300">
            View real-time alerts and notify connected users quickly.
          </p>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-500 transition">
            Access Alert
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 mt-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} ResQLearn. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
