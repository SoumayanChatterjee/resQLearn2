export default function CyclonePage() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800">
      {/* Navbar */}
      <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700">ResQLearn</h1>
        <ul className="flex gap-6 font-medium">
          <li className="hover:text-blue-700 cursor-pointer">Home</li>
          <li className="hover:text-blue-700 cursor-pointer">Courses</li>
          <li className="hover:text-blue-700 cursor-pointer">Quizzes</li>
          <li className="hover:text-blue-700 cursor-pointer">Leaderboard</li>
          <li className="hover:text-blue-700 cursor-pointer">Profile</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="text-center mt-12 px-4">
        <h2 className="text-4xl font-bold mb-4">Prepare for Cyclone Disasters</h2>
        <p className="text-lg text-gray-600">
          Learn how to stay safe during cyclones through engaging courses, quizzes, and helpful guides.
        </p>
      </section>

      {/* Courses Section */}
      <section className="mt-12 px-4 max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6">Courses</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Cyclone Basics */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h4 className="text-xl font-semibold mb-2">Cyclone Basics</h4>
            <p className="text-gray-600 mb-4">
              Understand how cyclones form and what dangers they pose to communities.
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
              <div className="bg-yellow-500 h-2.5 rounded-full w-[60%]"></div>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
              Continue Course
            </button>
          </div>

          {/* Evacuation Strategies */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h4 className="text-xl font-semibold mb-2">Evacuation Strategies</h4>
            <p className="text-gray-600 mb-6">
              Learn when and how to evacuate safely during a cyclone emergency.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
              Start Course
            </button>
          </div>

          {/* Post-Cyclone Recovery */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h4 className="text-xl font-semibold mb-2">Post-Cyclone Recovery</h4>
            <p className="text-gray-600 mb-6">
              Tips and procedures for staying safe and helping others after a cyclone.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
              Start Course
            </button>
          </div>
        </div>
      </section>

      {/* Quizzes Section */}
      <section className="mt-16 px-4 max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6">Quizzes</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h4 className="text-xl font-semibold mb-2">Cyclone Safety Tips</h4>
            <p className="text-gray-600 mb-4">
              Test your knowledge on staying safe before, during, and after a cyclone.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">
              Take Quiz
            </button>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h4 className="text-xl font-semibold mb-2">Emergency Communication</h4>
            <p className="text-gray-600 mb-4">
              How well do you know emergency communication protocols?
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">
              Take Quiz
            </button>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h4 className="text-xl font-semibold mb-2">Evacuation Readiness</h4>
            <p className="text-gray-600 mb-4">
              Are you prepared for a quick and safe evacuation?
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">
              Take Quiz
            </button>
          </div>
        </div>
      </section>

      {/* Helpful Videos Section */}
      <section className="mt-16 px-4 max-w-6xl mx-auto mb-16">
        <h3 className="text-2xl font-semibold mb-6">Helpful Videos</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6 flex items-start gap-4">
            <div className="text-2xl">🌀</div>
            <div>
              <h4 className="text-xl font-semibold mb-1">Cyclone Preparation Guide</h4>
              <p className="text-gray-600">
                Watch how to prepare your home and family for an incoming cyclone.
              </p>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 flex items-start gap-4">
            <div className="text-2xl">🚨</div>
            <div>
              <h4 className="text-xl font-semibold mb-1">Evacuation Demo</h4>
              <p className="text-gray-600">
                See how a timely and safe evacuation can save lives during a cyclone.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
