// // "use client";

// // import Image from "next/image";
// // import { useRouter } from "next/navigation";

// // export default function LandingPage() {
// //   const router = useRouter();

// //   return (

// //     <main className="flex items-center justify-center min-h-screen bg-blue-50">
// //       <div className="bg-white rounded-3xl shadow-lg p-10 flex items-center space-x-10 max-w-5xl">
// //         {/* Left Content */}
// //         <div className="flex-1">
// //           <h1 className="text-4xl font-bold text-blue-800 mb-4">
// //             Be Prepared for Tomorrow
// //           </h1>
// //           <p className="text-gray-600 mb-6">
// //             Providing disaster preparedness education for schools and colleges,
// //             our mission is to equip you with the knowledge and skills needed to
// //             respond to emergencies effectively.
// //           </p>
// //           <button
// //             onClick={() => router.push("/home")}
// //             className="bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition"
// //           >
// //             Get Started
// //           </button>
// //         </div>

// //         {/* Right Image */}
// //         <div className="flex-1">
// //           <Image
// //             src="/PICTURE.png" // put your image in /public folder
// //             alt="Preparedness"
// //             width={400}
// //             height={400}
// //           />
// //         </div>
// //       </div>
// //     </main>
// //   );
// // }
// import Image from "next/image";

// export default function Home() {
//   return (
//     <div
//       className="min-h-screen flex flex-col items-center p-4"
//       style={{
//         backgroundImage: "url('/bg_stormrain.png')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       {/* Navbar */}
//       <nav className="w-full max-w-6xl bg-gray-900 bg-opacity-70 text-white rounded-xl px-6 py-4 flex justify-between items-center shadow-lg">
//         <h1 className="text-2xl font-bold">ResQLearn</h1>
//         <ul className="flex space-x-6 font-medium">
//           <li><a href="/" className="hover:text-blue-400">Home</a></li>
//           <li><a href="/about" className="hover:text-blue-400">About Us</a></li>
//           <li><a href="/login" className="hover:text-blue-400">Login</a></li>
//           <li>
//             <a
//               href="/signup"
//               className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition"
//             >
//               Sign Up
//             </a>
//           </li>
//         </ul>
//       </nav>

//       {/* Container with margin + adjusted width/height */}
//       <div className="bg-gray-900 bg-opacity-70 w-full max-w-6xl rounded-2xl p-10 mt-10 flex flex-col items-center shadow-2xl min-h-[75vh]">
//         {/* Heading */}
//         <h2 className="text-6xl font-extrabold text-white text-center">
//           ResQLearn
//         </h2>
//         <p className="text-2xl mt-2 mb-10 text-gray-200 text-center">
//           Education for Life
//         </p>

//         {/* Card Section */}
//         <div className="bg-white text-gray-900 rounded-2xl shadow-lg p-8 w-full flex flex-col md:flex-row items-center justify-between min-h-[500px]">
//           {/* Text Content */}
//           <div className="flex-1 md:pr-8">
//             <h3 className="text-5xl font-extrabold mb-6">Be Prepared for Tomorrow</h3>
//             <p className="text-lg leading-relaxed mb-8">
//               Learn essential disaster preparedness skills for schools and
//               colleges. Gain the knowledge to stay safe and prepared in times of
//               emergencies.
//             </p>

//             {/* Get Started Button */}
//             <a
//               href="/login"
//               className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
//             >
//               Get Started
//             </a>
//           </div>

//           {/* Illustration */}
//           <div className="flex-1 flex justify-center mt-6 md:mt-0">
//             <Image
//               src="/student.png"
//               alt="Prepared Student"
//               width={400}
//               height={400}
//               className="rounded-lg"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
