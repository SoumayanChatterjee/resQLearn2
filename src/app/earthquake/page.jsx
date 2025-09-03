export default function earthquake() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800">
      {/* Navbar */}
      <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700">DisasterPrep</h1>
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
        <h2 className="text-4xl font-bold mb-4">Start Your Learning Journey</h2>
        <p className="text-lg text-gray-600">
          Explore a range of courses, test your knowledge with quizzes, and discover valuable
          resources to help you prepare for any situation.
        </p>
      </section>

      {/* Courses Section */}
      <section className="mt-12 px-4 max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6">Courses</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {/* First Aid Basics */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h4 className="text-xl font-semibold mb-2">First Aid Basics</h4>
            <p className="text-gray-600 mb-4">
              Learn essential life-saving techniques, from treating minor cuts to responding to more serious injuries.
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
              <div className="bg-yellow-500 h-2.5 rounded-full w-[75%]"></div>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
              Continue Course
            </button>
          </div>

          {/* Fire Safety & Evacuation */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h4 className="text-xl font-semibold mb-2">Fire Safety & Evacuation</h4>
            <p className="text-gray-600 mb-6">
              Understand fire prevention, how to use a fire extinguisher, and proper evacuation procedures.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
              Start Course
            </button>
          </div>

          {/* Earthquake Preparedness */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h4 className="text-xl font-semibold mb-2">Earthquake Preparedness</h4>
            <p className="text-gray-600 mb-6">
              What to do before, during, and after an earthquake to ensure your safety and that of others.
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
          {/* Emergency Kit Checklist */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h4 className="text-xl font-semibold mb-2">Emergency Kit Checklist</h4>
            <p className="text-gray-600 mb-4">
              Test your knowledge on the essential items for a survival kit.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">
              Take Quiz
            </button>
          </div>

          {/* Disaster Scenarios */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h4 className="text-xl font-semibold mb-2">Disaster Scenarios</h4>
            <p className="text-gray-600 mb-4">
              Can you make the right decisions in a critical situation? Find out now.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">
              Take Quiz
            </button>
          </div>

          {/* First Aid Knowledge */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h4 className="text-xl font-semibold mb-2">First Aid Knowledge</h4>
            <p className="text-gray-600 mb-4">
              Challenge yourself with questions on basic first aid procedures.
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
          {/* Emergency Kit Demonstration */}
          <div className="bg-white shadow-md rounded-lg p-6 flex items-start gap-4">
            <div className="text-2xl">📦</div>
            <div>
              <h4 className="text-xl font-semibold mb-1">Emergency Kit Demonstration</h4>
              <p className="text-gray-600">
                A step-by-step guide to building a comprehensive emergency kit.
              </p>
            </div>
          </div>

          {/* What to Do During an Earthquake */}
          <div className="bg-white shadow-md rounded-lg p-6 flex items-start gap-4">
            <div className="text-2xl">📺</div>
            <div>
              <h4 className="text-xl font-semibold mb-1">What to Do During an Earthquake</h4>
              <p className="text-gray-600">
                A quick, animated guide to staying safe when the ground shakes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

