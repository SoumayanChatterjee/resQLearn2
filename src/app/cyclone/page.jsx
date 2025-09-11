export default function CyclonePage() {
  return (
    <main className="min-h-screen text-gray-800 pt-24 bg-cover bg-center relative"
      style={{
        backgroundImage: "url('course.png')", // put a flood-themed image in /public
        backgroundRepeat: "no-repeat",
      }}
    >
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
      <h2 className="text-6xl font-extrabold text-center text-slate-300 mb-4">Prepare for Cyclone Disasters</h2>
        <p className="text-xl text-gray-400">
          Learn how to stay safe during cyclones through engaging courses, quizzes, and helpful guides.
        </p>
      </section>

      {/* Courses Section */}
      <section className="mt-12 px-4 max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold mb-8 text-slate-200 text-center">Courses</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Cyclone Basics */}
          <div className="bg-slate-100  shadow-md rounded-xl p-6 text-left transition-all duration-300 ease-in-out
                    group-hover:[filter:blur(1px)] group-hover:scale-[0.98]
                    hover:!scale-105 hover:![filter:blur(0px)] hover:shadow-2xl z-10 relative">
            <h4 className="text-xl font-semibold mb-2">Cyclone Basics</h4>
            <p className="text-gray-600 mb-4">
              Understand how cyclones form and what dangers they pose to communities.
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
              <div className="bg-blue-500 h-2.5 rounded-full w-[60%]"></div>
            </div>
            <button className="w-full py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition">
              Continue Course
            </button>
          </div>

          {/* Evacuation Strategies */}
         
          <div className="bg-slate-100  shadow-md rounded-xl p-6 text-left transition-all duration-300 ease-in-out
                    group-hover:[filter:blur(1px)] group-hover:scale-[0.98]
                    hover:!scale-105 hover:![filter:blur(0px)] hover:shadow-2xl z-10 relative">
            <h4 className="text-xl font-semibold mb-2">Evacuation Strategies</h4>
            <p className="text-gray-600 mb-6">
              Learn when and how to evacuate safely during a cyclone emergency.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
              Start Course
            </button>
          </div>

          {/* Post-Cyclone Recovery */}
          <div className="bg-slate-100  shadow-md rounded-xl p-6 text-left transition-all duration-300 ease-in-out
                    group-hover:[filter:blur(1px)] group-hover:scale-[0.98]
                    hover:!scale-105 hover:![filter:blur(0px)] hover:shadow-2xl z-10 relative">
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
        <h3 className="text-2xl font-bold mb-8 text-slate-200 text-center">Quizzes</h3>
        <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-slate-100  shadow-md rounded-xl p-6 text-left transition-all duration-300 ease-in-out
                    group-hover:[filter:blur(1px)] group-hover:scale-[0.98]
                    hover:!scale-105 hover:![filter:blur(0px)] hover:shadow-2xl z-10 relative">
            <h4 className="text-xl font-semibold mb-2">Cyclone Safety Tips</h4>
            <p className="text-gray-600 mb-4">
              Test your knowledge on staying safe before, during, and after a cyclone.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">
              Take Quiz
            </button>
          </div>
          <div className="bg-slate-100  shadow-md rounded-xl p-6 text-left transition-all duration-300 ease-in-out
                    group-hover:[filter:blur(1px)] group-hover:scale-[0.98]
                    hover:!scale-105 hover:![filter:blur(0px)] hover:shadow-2xl z-10 relative">
            <h4 className="text-xl font-semibold mb-2">Emergency Communication</h4>
            <p className="text-gray-600 mb-4">
              How well do you know emergency communication protocols?
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">
              Take Quiz
            </button>
          </div>

          <div className="bg-slate-100  shadow-md rounded-xl p-6 text-left transition-all duration-300 ease-in-out
                    group-hover:[filter:blur(1px)] group-hover:scale-[0.98]
                    hover:!scale-105 hover:![filter:blur(0px)] hover:shadow-2xl z-10 relative">
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
        <h3 className="text-2xl font-bold mb-8 text-slate-200 text-center">Helpful Videos</h3>
        <div className="grid md:grid-cols-2 gap-6">
        
        <div className="bg-slate-100  shadow-md rounded-xl p-6 text-left transition-all duration-300 ease-in-out
                    group-hover:[filter:blur(0.75px)] group-hover:scale-[0.98]
                    hover:!scale-105 hover:![filter:blur(0px)] hover:shadow-2xl z-10 relative flex items-start gap-4">
            <div className="bg-gray-700 p-3 rounded-full ">
                 <span className="text-6xl">🌀</span>
            </div>
            <div>
              <h4 className="font-bold mb-1">Cyclone Preparation Guide</h4>
              <p className="text-gray-600">
                Watch how to prepare your home and family for an incoming cyclone.
              </p>
            </div>
          </div>

          
          <div className="bg-slate-100  shadow-md rounded-xl p-6 text-left transition-all duration-300 ease-in-out
                    group-hover:[filter:blur(0.75px)] group-hover:scale-[0.98]
                    hover:!scale-105 hover:![filter:blur(0px)] hover:shadow-2xl z-10 relative flex items-start gap-4">
           
            <div className="bg-gray-700 p-3 rounded-full ">
                 <span className="text-6xl">🚨</span>
            </div>
            <div>
              <h4 className="font-bold mb-1">Evacuation Demo</h4>
              <p className="text-gray-600">
                See how a timely and safe evacuation can save lives during a cyclone.
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