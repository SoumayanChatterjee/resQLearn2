// import { Users, Target, Heart } from "lucide-react";

// export default function AboutPage() {
//   return (
//     <main className="min-h-screen bg-gray-100 text-gray-800">
//       {/* Hero Section */}
//       <section className="text-center py-16 px-6 bg-gradient-to-r from-blue-600 to-green-600 text-white">
//         <h1 className="text-4xl font-bold mb-4">About ResQLearn</h1>
//         <p className="text-lg max-w-2xl mx-auto">
//           Empowering people with knowledge and skills to stay safe during
//           disasters through interactive learning and practical training.
//         </p>
//       </section>

//       {/* Who We Are */}
//       <section className="py-16 px-6 max-w-6xl mx-auto text-center">
//         <h2 className="text-3xl font-semibold mb-8">Who We Are</h2>
//         <p className="text-gray-600 max-w-2xl mx-auto mb-10">
//           We are a team of educators, developers, and safety experts dedicated
//           to making disaster preparedness easy, engaging, and accessible for
//           everyone.
//         </p>
//         <img
//           src="https://img.freepik.com/free-vector/team-concept-illustration_114360-678.jpg"
//           alt="Our Team"
//           className="mx-auto rounded-lg shadow-md w-full max-w-lg"
//         />
//       </section>

//       {/* Mission, Vision, Values */}
//       <section className="py-16 px-6 bg-white">
//         <h2 className="text-3xl font-semibold text-center mb-12">
//           What Drives Us
//         </h2>
//         <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {/* Mission */}
//           <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
//             <Target className="w-10 h-10 text-blue-600 mx-auto mb-4" />
//             <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
//             <p className="text-gray-600 text-sm">
//               To provide disaster education that saves lives through interactive
//               courses and engaging quizzes.
//             </p>
//           </div>

//           {/* Vision */}
//           <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
//             <Users className="w-10 h-10 text-green-600 mx-auto mb-4" />
//             <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
//             <p className="text-gray-600 text-sm">
//               A world where every individual feels confident and prepared to
//               respond in times of crisis.
//             </p>
//           </div>

//           {/* Values */}
//           <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
//             <Heart className="w-10 h-10 text-red-500 mx-auto mb-4" />
//             <h3 className="text-xl font-semibold mb-2">Our Values</h3>
//             <p className="text-gray-600 text-sm">
//               Accessibility, compassion, and innovation in disaster preparedness
//               education.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="text-center py-16 px-6 bg-gradient-to-r from-green-600 to-blue-600 text-white">
//         <h2 className="text-3xl font-bold mb-4">Join Us in Making a Difference</h2>
//         <p className="mb-6">
//           Explore our courses and quizzes today, and take your first step toward
//           disaster readiness.
//         </p>
//         <a
//           href="/courses"
//           className="bg-white text-blue-700 px-6 py-3 rounded-lg shadow hover:bg-gray-100 font-semibold"
//         >
//           Get Started
//         </a>
//       </section>
//     </main>
//   );
// }
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
