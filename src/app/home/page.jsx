// import Navbar from "../components/Navbar";
// import Link from "next/link";

// export default function HomePage() {
//   return (
//     <div>
//       {/* Navbar */}
//       <Navbar />

//       {/* Hero Section */}
//       <section className="bg-blue-50 py-16 px-8 md:px-20 flex flex-col md:flex-row items-center justify-between">
//         <div className="max-w-lg">
//           <h1 className="text-4xl font-bold text-gray-900 leading-snug">
//             Disaster Preparedness <br /> for Schools and Colleges
//           </h1>
//           <p className="mt-4 text-gray-600">
//             Learn how to prepare and respond effectively to emergencies,
//             ensuring the safety of students and staff.
//           </p>
//           <Link href="/home#explore">
//             <button className="mt-6 bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800">
//               Get Started
//             </button>
//           </Link>
//         </div>

//         <div className="mt-8 md:mt-0">
//           <img
//             src="/homepagepic.jpg"
//             alt="Disaster Preparedness"
//             className="w-96"
//           />
//         </div>
//       </section>

//       {/* Why Disaster Preparedness Matters */}
//       <section className="py-16 px-8 md:px-20 text-center">
//         <h2 className="text-3xl font-bold text-gray-900">
//           Why Disaster Preparedness Matters
//         </h2>
//         <p className="mt-2 text-gray-600">
//           Disasters can strike without warning, and schools must be prepared to
//           protect students and staff.
//         </p>

//         <div className="mt-10 grid md:grid-cols-3 gap-8">
//           <div className="bg-white p-6 rounded-xl shadow-md">
//             <img src="/risk.jpg" alt="Risks" className="mx-auto h-40" />
//             <h3 className="mt-4 text-xl font-semibold">Understand the Risks</h3>
//             <p className="text-gray-600 mt-2">
//               Know the types of disasters that could occur in your area and
//               assess potential risks.
//             </p>
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow-md">
//             <img
//               src="/skills.jpg"
//               alt="Skills"
//               className="mx-auto h-40"
//             />
//             <h3 className="mt-4 text-xl font-semibold">
//               Develop Critical Skills
//             </h3>
//             <p className="text-gray-600 mt-2">
//               Learn essential skills to respond effectively to emergencies with
//               confidence.
//             </p>
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow-md">
//             <img
//               src="/confidence.jpg"
//               alt="Confidence"
//               className="mx-auto h-40"
//             />
//             <h3 className="mt-4 text-xl font-semibold">Build Confidence</h3>
//             <p className="text-gray-600 mt-2">
//               Boost your confidence to handle challenging situations and stay
//               calm.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Explore Disasters */}
//       <section id="explore" className="py-16 px-8 md:px-20 bg-gray-50">
//         <h2 className="text-3xl font-bold text-gray-900 text-center">
//           Let’s Explore the Disasters
//         </h2>

//         <div className="mt-10 grid md:grid-cols-3 gap-8">
//           {/* Earthquake */}
//           <div className="bg-white p-6 rounded-xl shadow-md text-center">
//             <img
//               src="/earthquake.jpg"
//               alt="Earthquake"
//               className="mx-auto h-40"
//             />
//             <h3 className="mt-4 text-xl font-semibold">Earthquake</h3>
//             <Link href="/earthquake">
//               <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
//                 Start Learning
//               </button>
//             </Link>
//           </div>

//           {/* Flood */}
//           <div className="bg-white p-6 rounded-xl shadow-md text-center">
//             <img src="/flood.jpg" alt="Flood" className="mx-auto h-40" />
//             <h3 className="mt-4 text-xl font-semibold">Flood</h3>
//             <Link href="/flood">
//               <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
//                 Start Learning
//               </button>
//             </Link>
//           </div>

//           {/* Cyclone */}
//           <div className="bg-white p-6 rounded-xl shadow-md text-center">
//             <img
//               src="/cyclone.jpg"
//               alt="Cyclone"
//               className="mx-auto h-40"
//             />
//             <h3 className="mt-4 text-xl font-semibold">Cyclone</h3>
//             <Link href="/cyclone">
//               <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
//                 Start Learning
//               </button>
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-4 text-white z-20">
  <h1 className="text-2xl font-bold drop-shadow-lg">ResQLearn</h1>
  <ul className="flex space-x-6">
    <li>
      <a href="#" className="hover:text-blue-400 drop-shadow-lg">Home</a>
    </li>
    <li>
      <a href="#about" className="hover:text-blue-400 drop-shadow-lg">About Us</a>
    </li>
    <li>
      <a href="#contact" className="hover:text-blue-400 drop-shadow-lg">Contact</a>
    </li>
    <li>
      <a href="/login" className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 shadow-lg">Login</a>
    </li>
    <li>
      <a href="/signup" className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200 shadow-lg">Signup</a>
    </li>
  </ul>
</nav>


      {/* Hero Section with Background */}
      <section
        className="relative h-[550px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/bg_stormrain.png')" }} // place your background in public/
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Card with Left (text) + Right (image) */}
        <div className="relative bg-white text-gray-900 rounded-2xl shadow-xl p-10 max-w-6xl w-full flex flex-col md:flex-row items-center mt-08">
          {/* Left Content */}
          <div className="flex-1 pr-6">
            <h2 className="text-5xl font-extrabold mb-8">
            Bridging the Gap in Disaster Education
            </h2>
            <p className="mb-8 text-xl">
            An easy-to-use platform to train students and educators in disaster response through courses, quizzes, and videos.
            </p>
            <button className="bg-blue-600 px-6 py-3 rounded-lg text-lg font-semibold text-white hover:bg-blue-500">
              Get Started
            </button>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center mt-6 md:mt-0">
            <Image
              src="/hero.png" // place your illustration in public/hero.png
              alt="Disaster Education"
              width={350}
              height={300}
              className="rounded-lg w-[350px] h-auto"
            />
          </div>
        </div>
      </section>

      {/* Explore Disasters Section */}
      <section className="bg-gray-100 text-gray-900 py-16 px-10">
        <h3 className="text-2xl font-bold text-center mb-10">Explore the Disasters</h3>
        <div className="grid md:grid-cols-3 gap-10">
          {/* Earthquake */}
          <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:scale-105 transform transition">
            <Image src="/earthquake_main.png" alt="Earthquake" width={325} height={325} className="mx-auto"/>
            <h4 className="mt-4 font-extrabold  text-2xl ">Earthquake</h4>
            <a href="/earthquake" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500">Start Learning</a>
          </div>
          {/* Flood */}
          <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:scale-105 transform transition">
            <Image src="/flood_main.png" alt="Flood" width={300} height={300} className="mx-auto"/>
            <h4 className="mt-4 font-extrabold  text-2xl">Flood</h4>
            <a href="/flood" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500">Start Learning</a>
          </div>
          {/* Cyclone */}
          <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:scale-105 transform transition">
            <Image src="/cyclonemain.png" alt="Cyclone" width={325} height={325} className="mx-auto"/>
            <h4 className="mt-4 font-extrabold  text-2xl">Cyclone</h4>
            <a href="/cyclone" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500">Start Learning</a>
          </div>
        </div>
      </section>
    </main>
  );
}
