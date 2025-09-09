// "use client";
// import Link from "next/link";
// import Navbar from "@/components/Navbar";  // ✅ import Navbar

// export default function Earthquake() {
//   return (
//     <main className="min-h-screen bg-gray-100 text-gray-800">
//       {/* ✅ Navbar placed here */}
//       <Navbar />

//       {/* Hero Section */}
//       <section className="text-center mt-12 px-4">
//         <h2 className="text-4xl font-bold text-center mb-4">Start Your Learning Journey</h2>
//         <p className="text-lg text-gray-600">
//           Explore a range of courses, test your knowledge with quizzes, and
//           discover valuable resources to help you prepare for any situation.
//         </p>
//       </section>

//       {/* Courses Section */}
//       <section className="mt-12 px-4 max-w-6xl mx-auto">
//         <h3 className="text-2xl font-semibold text-center mb-8">Courses</h3>
//         <div className="grid md:grid-cols-3 gap-6">
//           {/* First Aid Basics */}
//           <div className="bg-white shadow-md rounded-lg p-6">
//             <h4 className="text-xl font-semibold mb-2">First Aid Basics</h4>
//             <p className="text-gray-600 mb-4">
//               Learn essential life-saving techniques, from treating minor cuts
//               to responding to more serious injuries.
//             </p>
//             <Link href="/courses/first-aid">
//               <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
//                 Start Course
//               </button>
//             </Link>
//           </div>

//           {/* Fire Safety & Evacuation */}
//           <div className="bg-white shadow-md rounded-lg p-6">
//             <h4 className="text-xl font-semibold mb-2">Fire Safety & Evacuation</h4>
//             <p className="text-gray-600 mb-6">
//               Understand fire prevention, how to use a fire extinguisher, and
//               proper evacuation procedures.
//             </p>
//             <Link href="/courses/fire-safety">
//               <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
//                 Start Course
//               </button>
//             </Link>
//           </div>

//           {/* Earthquake Preparedness */}
//           <div className="bg-white shadow-md rounded-lg p-6">
//             <h4 className="text-xl font-semibold mb-2">Earthquake Preparedness</h4>
//             <p className="text-gray-600 mb-6">
//               What to do before, during, and after an earthquake to ensure your
//               safety and that of others.
//             </p>
//             <Link href="/courses/earthquake">
//               <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
//                 Start Course
//               </button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Quizzes Section */}
//       <section className="mt-16 px-4 max-w-6xl mx-auto">
//         <h3 className="text-2xl font-semibold text-center mb-8">Quizzes</h3>
//         <div className="grid md:grid-cols-3 gap-6">
//           <div className="bg-white shadow-md rounded-lg p-6 text-center">
//             <h4 className="text-xl font-semibold mb-2">Emergency Kit Checklist</h4>
//             <p className="text-gray-600 mb-4">
//               Test your knowledge on the essential items for a survival kit.
//             </p>
//             <Link href="/quizzes/emergency-kit">
//               <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
//                 Take Quiz
//               </button>
//             </Link>
//           </div>

//           <div className="bg-white shadow-md rounded-lg p-6 text-center">
//             <h4 className="text-xl font-semibold mb-2">First Aid Knowledge</h4>
//             <p className="text-gray-600 mb-4">
//               Can you make the right decisions in a critical situation? Find out now.
//             </p>
//             <Link href="/quizzes/first-aid">
//               <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
//                 Take Quiz
//               </button>
//             </Link>
//           </div>

//           <div className="bg-white shadow-md rounded-lg p-6 text-center">
//             <h4 className="text-xl font-semibold mb-2">Earthquake Scenarios</h4>
//             <p className="text-gray-600 mb-4">
//               Challenge yourself with questions on basic earthquake procedures.
//             </p>
//             <Link href="/quizzes/earthquake">
//               <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
//                 Take Quiz
//               </button>
//             </Link>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }


// "use client";
// import Link from "next/link";
// import Navbar from "@/components/Navbar";

// export default function Earthquake() {
//   return (
//     <main className="min-h-screen bg-gray-200 text-gray-800">
//       {/* Navbar */}
//       <Navbar />

//       {/* Hero Section */}
//       <section className="text-center mt-12 px-4">
//         <h2 className="text-4xl font-bold text-center mb-4">
//           Start Your Learning Journey
//         </h2>
//         <p className="text-lg text-gray-600">
//           Explore a range of courses, test your knowledge with quizzes, and
//           discover valuable resources to help you prepare for any situation.
//         </p>
//       </section>

//       {/* Courses Section */}
//       <section className="mt-12 px-4 max-w-6xl mx-auto">
//         <h3 className="text-2xl font-semibold text-center mb-8">Courses</h3>
//         <div className="grid md:grid-cols-3 gap-6">
//           {/* First Aid Basics */}
//           <div className="bg-white shadow-md rounded-lg p-6">
//             <h4 className="text-xl font-semibold mb-2">First Aid Basics</h4>
//             <p className="text-gray-600 mb-4">
//               Learn essential life-saving techniques, from treating minor cuts
//               to responding to more serious injuries.
//             </p>
//             <Link href="/courses/first-aid">
//               <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
//                 Start Course
//               </button>
//             </Link>
//           </div>

//           {/* Fire Safety & Evacuation */}
//           <div className="bg-white shadow-md rounded-lg p-6">
//             <h4 className="text-xl font-semibold mb-2">
//               Fire Safety & Evacuation
//             </h4>
//             <p className="text-gray-600 mb-6">
//               Understand fire prevention, how to use a fire extinguisher, and
//               proper evacuation procedures.
//             </p>
//             <Link href="/courses/fire-safety">
//               <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
//                 Start Course
//               </button>
//             </Link>
//           </div>

//           {/* Earthquake Preparedness */}
//           <div className="bg-white shadow-md rounded-lg p-6">
//             <h4 className="text-xl font-semibold mb-2">
//               Earthquake Preparedness
//             </h4>
//             <p className="text-gray-600 mb-6">
//               What to do before, during, and after an earthquake to ensure your
//               safety and that of others.
//             </p>
//             <Link href="/courses/earthquake">
//               <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
//                 Start Course
//               </button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Quizzes Section */}
//       <section className="mt-16 px-4 max-w-6xl mx-auto">
//         <h3 className="text-2xl font-semibold text-center mb-8">Quizzes</h3>
//         <div className="grid md:grid-cols-3 gap-6">
//           <div className="bg-white shadow-md rounded-lg p-6 text-center">
//             <h4 className="text-xl font-semibold mb-2">
//               Emergency Kit Checklist
//             </h4>
//             <p className="text-gray-600 mb-4">
//               Test your knowledge on the essential items for a survival kit.
//             </p>
//             <Link href="/quizzes/emergency-kit">
//               <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
//                 Take Quiz
//               </button>
//             </Link>
//           </div>

//           <div className="bg-white shadow-md rounded-lg p-6 text-center">
//             <h4 className="text-xl font-semibold mb-2">First Aid Knowledge</h4>
//             <p className="text-gray-600 mb-4">
//               Can you make the right decisions in a critical situation? Find out
//               now.
//             </p>
//             <Link href="/quizzes/first-aid">
//               <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
//                 Take Quiz
//               </button>
//             </Link>
//           </div>

//           <div className="bg-white shadow-md rounded-lg p-6 text-center">
//             <h4 className="text-xl font-semibold mb-2">Earthquake Scenarios</h4>
//             <p className="text-gray-600 mb-4">
//               Challenge yourself with questions on basic earthquake procedures.
//             </p>
//             <Link href="/quizzes/earthquake">
//               <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
//                 Take Quiz
//               </button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Helpful Videos Section */}
//       <section className="mt-16 px-4 max-w-6xl mx-auto pb-16">
//         <h3 className="text-2xl font-semibold text-center mb-8">
//           Helpful Videos
//         </h3>
//         <div className="grid md:grid-cols-3 gap-6">
//           <div className="bg-white shadow-md rounded-lg p-4">
//             <iframe width="325" height="315" src="https://www.youtube.com/embed/dJpIU1rSOFY?si=eIeRVE3lBE58QDOY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" refernerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
//             <h4 className="text-xl font-semibold mt-3">
//               What Is An Earthquake?
//             </h4>
//           </div>
//           <div className="bg-white shadow-md rounded-lg p-4">
//             <iframe width="325" height="315" src="https://www.youtube.com/embed/H4VQul_SmCg?si=qnC-LMJs9rD8Ua7g" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" refernerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
//             <h4 className="text-xl font-semibold mt-3">Why do buildings fall in earthquakes?</h4>
//           </div>
//           <div className="bg-white shadow-md rounded-lg p-4">
//             <iframe width="325" height="315" src="https://www.youtube.com/embed/o80_DkrVrVg?si=7dUOGC5mfPWvo8Y_" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" refernerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
//             <h4 className="text-xl font-semibold mt-3">
//               Every Earthquake Magnitude
//             </h4>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }


"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Earthquake() {
  return (
    <main className="min-h-screen bg-gray-200 text-gray-800">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="text-center mt-12 px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Start Your Learning Journey
        </h2>
        <p className="text-lg text-gray-600">
          Explore a range of courses, test your knowledge with quizzes, and
          discover valuable resources to help you prepare for any situation.
        </p>
      </section>

      {/* Courses Section */}
      <section className="mt-12 px-4 max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold text-center mb-8">Courses</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {/* First Aid Basics */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h4 className="text-xl font-semibold mb-2">First Aid Basics</h4>
            <p className="text-gray-600 mb-4">
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
          <div className="bg-white shadow-md rounded-lg p-6">
            <h4 className="text-xl font-semibold mb-2">
              Fire Safety & Evacuation
            </h4>
            <p className="text-gray-600 mb-6">
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
          <div className="bg-white shadow-md rounded-lg p-6">
            <h4 className="text-xl font-semibold mb-2">
              Earthquake Preparedness
            </h4>
            <p className="text-gray-600 mb-6">
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
        <h3 className="text-2xl font-semibold text-center mb-8">Quizzes</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h4 className="text-xl font-semibold mb-2">
              Emergency Kit Checklist
            </h4>
            <p className="text-gray-600 mb-4">
              Test your knowledge on the essential items for a survival kit.
            </p>
            <Link href="/quizzes/emergency-kit">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                Take Quiz
              </button>
            </Link>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h4 className="text-xl font-semibold mb-2">First Aid Knowledge</h4>
            <p className="text-gray-600 mb-4">
              Can you make the right decisions in a critical situation? Find out
              now.
            </p>
            <Link href="/quizzes/first-aid">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                Take Quiz
              </button>
            </Link>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h4 className="text-xl font-semibold mb-2">Earthquake Scenarios</h4>
            <p className="text-gray-600 mb-4">
              Challenge yourself with questions on basic earthquake procedures.
            </p>
            <Link href="/quizzes/earthquake">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                Take Quiz
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Helpful Videos Section */}
      <section className="mt-16 px-4 max-w-6xl mx-auto pb-16">
        <h3 className="text-2xl font-semibold text-center mb-8">
          Helpful Videos
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Video 1 */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <div className="relative w-full aspect-video">
              <iframe
                src="https://www.youtube.com/embed/dJpIU1rSOFY?si=eIeRVE3lBE58QDOY"
                title="What Is An Earthquake?"
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <h4 className="text-xl font-semibold mt-3">
              What Is An Earthquake?
            </h4>
          </div>

          {/* Video 2 */}
          <div className="bg-white shadow-md rounded-lg p-4">
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
              Why do buildings fall in earthquakes?
            </h4>
          </div>

          {/* Video 3 */}
          <div className="bg-white shadow-md rounded-lg p-4">
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
            <h4 className="text-xl font-semibold mt-3">
              Every Earthquake Magnitude
            </h4>
          </div>
        </div>
      </section>
    </main>
  );
}
