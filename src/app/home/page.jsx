// "use client";
// import Image from "next/image";

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-gray-100">
//       {/* Navbar */}
//       <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-4 text-white z-20">
//   <h1 className="text-2xl font-bold drop-shadow-lg">ResQLearn</h1>
//   <ul className="flex space-x-6">
//     <li>
//       <a href="#" className="hover:text-blue-400 drop-shadow-lg">Home</a>
//     </li>
//     <li>
//       <a href="#about" className="hover:text-blue-400 drop-shadow-lg">About Us</a>
//     </li>
//     <li>
//       <a href="#contact" className="hover:text-blue-400 drop-shadow-lg">Contact</a>
//     </li>
//     <li>
//       <a href="/login" className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 shadow-lg">Logout</a>
//     </li>
//     <li>
//       <a href="/profile" className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200 shadow-lg">Profile</a>
//     </li>
//   </ul>
// </nav>


//       {/* Hero Section with Background */}
//       <section
//         className="relative h-[550px] flex items-center justify-center bg-cover bg-center"
//         style={{ backgroundImage: "url('/bg_stormrain.png')" }} // place your background in public/
//       >
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black bg-opacity-50"></div>

//         {/* Card with Left (text) + Right (image) */}
//         <div className="relative bg-white text-gray-900 rounded-2xl shadow-xl p-10 max-w-6xl w-full flex flex-col md:flex-row items-center mt-08">
//           {/* Left Content */}
//           <div className="flex-1 pr-6">
//             <h2 className="text-5xl font-extrabold mb-8">
//             Bridging the Gap in Disaster Education
//             </h2>
//             <p className="mb-8 text-xl">
//             An easy-to-use platform to train students and educators in disaster response through courses, quizzes, and videos.
//             </p>
//             <button className="bg-blue-600 px-6 py-3 rounded-lg text-lg font-semibold text-white hover:bg-blue-500">
//               Get Started
//             </button>
//           </div>

//           {/* Right Image */}
//           <div className="flex-1 flex justify-center mt-6 md:mt-0">
//             <Image
//               src="/hero.png" // place your illustration in public/hero.png
//               alt="Disaster Education"
//               width={350}
//               height={300}
//               className="rounded-lg w-[350px] h-auto"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Explore Disasters Section */}
//       <section className="bg-gray-100 text-gray-900 py-16 px-10">
//         <h3 className="text-2xl font-bold text-center mb-10">Explore the Disasters</h3>
//         <div className="grid md:grid-cols-3 gap-10">
//           {/* Earthquake */}
//           <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:scale-105 transform transition">
//             <Image src="/earthquake_main.png" alt="Earthquake" width={325} height={325} className="mx-auto"/>
//             <h4 className="mt-4 font-extrabold  text-2xl ">Earthquake</h4>
//             <a href="/earthquake" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500">Start Learning</a>
//           </div>
//           {/* Flood */}
//           <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:scale-105 transform transition">
//             <Image src="/flood_main.png" alt="Flood" width={300} height={300} className="mx-auto"/>
//             <h4 className="mt-4 font-extrabold  text-2xl">Flood</h4>
//             <a href="/flood" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500">Start Learning</a>
//           </div>
//           {/* Cyclone */}
//           <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:scale-105 transform transition">
//             <Image src="/cyclonemain.png" alt="Cyclone" width={325} height={325} className="mx-auto"/>
//             <h4 className="mt-4 font-extrabold  text-2xl">Cyclone</h4>
//             <a href="/cyclone" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500">Start Learning</a>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
// "use client";
// import Image from "next/image";
// import Link from 'next/link';


// const emergencyCards = [
//   {
//     title: "Emergency Plans",
//     description: "Create and implement effective emergency plans for schools.",
//     icon: "📘",
//   },
//   {
//     title: "Safety Drills",
//     description: "Learn how to conduct safety drills and exercises.",
//     icon: "⛑",
//   },
//   {
//     title: "Emergency Alerts",
//     description: "Receive alerts and notifications during emergencies.",
//     icon: "⚠",
//   },
// ];

// export default function Home() {
//   return (
//     <main className="full-screen bg-gray-100">
//       {/* Navbar */}
//       <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-4 text-white z-20">
//         <h1 className="text-2xl font-bold drop-shadow-lg">ResQLearn</h1>
//         <ul className="flex space-x-6">
//           <li>
//             <a href="#" className="hover:text-blue-400 drop-shadow-lg">Home</a>
//           </li>
//           <li>
//             <a href="#about" className="hover:text-blue-400 drop-shadow-lg">About Us</a>
//           </li>
//           <li>
//             <a href="#contact" className="hover:text-blue-400 drop-shadow-lg">Contact</a>
//           </li>
//           <li>
//             <a href="/login" className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 shadow-lg">Logout</a>
//           </li>
//           <li>
//             <a href="/signup" className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200 shadow-lg">Profile</a>
//           </li>
//         </ul>
//       </nav>

//       {/* Hero Section */}
//       <section
//         className="relative h-[600px] flex items-center justify-center bg-cover bg-center"
//         style={{ backgroundImage: "url('/bg_stormrain.png')" }}
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-50"></div>

//         <div className="relative bg-white text-gray-900 rounded-2xl shadow-xl p-10 max-w-6xl w-full flex flex-col md:flex-row items-center mt-08">
//           <div className="flex-1 pr-6">
//             <h2 className="text-5xl font-extrabold mb-8">
//               Bridging the Gap in Disaster Education
//             </h2>
//             <p className="mb-8 text-xl">
//               An easy-to-use platform to train students and educators in disaster response through courses, quizzes, and videos.
//             </p>
//             <Link href="/exploreDisasters" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500">
//               Let's Explore
//             </Link>

//           </div>

//           <div className="flex-1 flex justify-center mt-6 md:mt-0">
//             <Image
//               src="/hero.png"
//               alt="Disaster Education"
//               width={350}
//               height={300}
//               className="rounded-lg w-[350px] h-auto"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Emergency Plans / Drills / Alerts Section */}
//       <section className="py-20 relative bg-gradient-to-b from-slate-900 to-slate-800">
//         <div className="max-w-6xl mx-auto px-6 text-center">
//           <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 drop-shadow-lg">
//             Be Prepared, Stay Safe
//           </h2>
//           <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
//             Empower students and educators with the right tools — from emergency
//             planning to hands-on safety drills and timely alerts. Together, we can
//             build resilience against disasters.
//           </p>

//           <div className="mt-14 grid gap-10 md:grid-cols-3">
//             {emergencyCards.map((card, index) => (
//               <div
//                 key={index}
//                 className="bg-gray-700/70 backdrop-blur-md rounded-2xl p-10 shadow-xl
//                            flex flex-col items-center text-center border border-gray-700
//                            hover:scale-105 hover:shadow-2xl transition-all duration-300"
//               >
//                 <div className="text-6xl mb-5">{card.icon}</div>
//                 <h3 className="text-2xl font-bold text-white mb-3">{card.title}</h3>
//                 <p className="text-gray-300 leading-relaxed">{card.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Explore Disasters Section
//       <section className="bg-slate-300 text-gray-900 py-16 px-10">
//         <h3 className="text-2xl font-bold text-center mb-10">Explore the Disasters</h3>
//         <div className="grid md:grid-cols-3 gap-10">
//           <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:scale-105 transform transition">
//             <Image src="/earthquake_main.png" alt="Earthquake" width={325} height={325} className="mx-auto"/>
//             <h4 className="mt-4 font-extrabold text-2xl">Earthquake</h4>
//             <a href="/earthquake" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500">Start Learning</a>
//           </div>
//           <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:scale-105 transform transition">
//             <Image src="/flood_main.png" alt="Flood" width={300} height={300} className="mx-auto"/>
//             <h4 className="mt-4 font-extrabold text-2xl">Flood</h4>
//             <a href="/flood" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500">Start Learning</a>
//           </div>
//           <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:scale-105 transform transition">
//             <Image src="/cyclonemain.png" alt="Cyclone" width={325} height={325} className="mx-auto"/>
//             <h4 className="mt-4 font-extrabold text-2xl">Cyclone</h4>
//             <a href="/cyclone" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500">Start Learning</a>
//           </div>
//         </div>
//       </section> */}

//       {/* How Our System Works */}
//       <section className="py-20 relative bg-gradient-to-b from-slate-800 to-slate-900 text-center">
//         <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 drop-shadow-lg">
//           How Our System Works
//         </h2>
//         <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
//           ResQLearn makes disaster preparedness simple: Learn, Practice, and Apply with confidence.
//         </p>

//         <div className="mt-14 grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
//           {[
//             { img: "/learn4.png", title: "Learn", text: "Interactive courses, quizzes, and videos to build disaster awareness." },
//             { img: "/test2.png", title: "Practice", text: "Participate in safety drills and simulations to be prepared." },
//             { img: "/apply4.png", title: "Apply", text: "Watch media to see best practices." },
//           ].map((item, index) => (
//             <div key={index} className="bg-gray-700/80 backdrop-blur-md rounded-2xl p-10 shadow-lg hover:scale-105 transition">
//               <Image src={item.img} alt={item.title} width={150} height={150} className="mx-auto w-25 h-25" />
//               <h3 className="mt-6 text-3xl font-bold text-white">{item.title}</h3>
//               <p className="mt-3 text-gray-300">{item.text}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-20 relative bg-gradient-to-b from-slate-900 to-slate-800 text-center">
//         <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 drop-shadow-lg">
//           What Schools Are Saying
//         </h2>
//         <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
//           Educators and students trust ResQLearn to make disaster preparedness engaging and impactful.
//         </p>

//         <div className="mt-14 grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
//           {[
//             { text: "Our school conducted its first earthquake drill with ResQLearn’s guidance – students were more confident and better prepared.", author: "– Principal, XYZ School" },
//             { text: "The interactive quizzes made disaster awareness fun and engaging for our students.", author: "– Teacher, ABC College" },
//             { text: "ResQLearn gives us peace of mind knowing our staff and students are trained to handle emergencies.", author: "– Administrator, DEF Institute" },
//           ].map((testimonial, index) => (
//             <div key={index} className="bg-gray-700/70 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-gray-700 hover:scale-105 transition">
//               <p className="text-gray-300  text-xl italic">“{testimonial.text}”</p>
//               <h4 className="mt-4 text-xl font-semibold text-blue-300">{testimonial.author}</h4>
//             </div>
//           ))}
//         </div>
//       </section>
//       <footer className="bg-slate-900 text-white py-6">
//         <div className="max-w-5xl mx-auto px-4 text-center">
//           <p>&copy; {new Date().getFullYear()} ResQLearn. All rights reserved.</p>
//           <div className="mt-2 space-x-4">
//             {/* <a href="/about" className="hover:underline">About</a>
//             <a href="/contact" className="hover:underline">Contact</a> */}
//             {/* <a href="/resources" className="hover:underline">Resources</a> */}
//           </div>
//         </div>
//       </footer>
//     </main>
//   );
// }
"use client";
import Image from "next/image";
import Link from 'next/link';


const emergencyCards = [
  {
    title: "Emergency Plans",
    description: "Create and implement effective emergency plans for schools.",
    icon: "📘",
  },
  {
    title: "Safety Drills",
    description: "Learn how to conduct safety drills and exercises.",
    icon: "⛑",
  },
  {
    title: "Emergency Alerts",
    description: "Receive alerts and notifications during emergencies.",
    icon: "⚠",
  },
];

export default function Home() {
  return (
    <main className="full-screen bg-gray-100">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-4 text-white z-20">
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
      <section
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/bg_stormrain.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative bg-white text-gray-900 rounded-2xl shadow-xl p-10 max-w-6xl w-full flex flex-col md:flex-row items-center mt-08">
          <div className="flex-1 pr-6">
            <h2 className="text-5xl font-extrabold mb-8">
              Bridging the Gap in Disaster Education
            </h2>
            <p className="mb-8 text-xl">
              An easy-to-use platform to train students and educators in disaster response through courses, quizzes, and videos.
            </p>
            <Link href="/exploreDisasters" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500">
              Let's Explore
            </Link>

          </div>

          <div className="flex-1 flex justify-center mt-6 md:mt-0">
            <Image
              src="/hero.png"
              alt="Disaster Education"
              width={350}
              height={300}
              className="rounded-lg w-[350px] h-auto"
            />
          </div>
        </div>
      </section>

      {/* Emergency Plans / Drills / Alerts Section */}
      <section className="py-20 relative bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 drop-shadow-lg">
            Be Prepared, Stay Safe
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Empower students and educators with the right tools — from emergency
            planning to hands-on safety drills and timely alerts. Together, we can
            build resilience against disasters.
          </p>

          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {emergencyCards.map((card, index) => (
              <div
                key={index}
                className="bg-gray-700/70 backdrop-blur-md rounded-2xl p-10 shadow-xl
                           flex flex-col items-center text-center border border-gray-700
                           hover:scale-105 hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-6xl mb-5">{card.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{card.title}</h3>
                <p className="text-gray-300 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Disasters Section
      <section className="bg-slate-300 text-gray-900 py-16 px-10">
        <h3 className="text-2xl font-bold text-center mb-10">Explore the Disasters</h3>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:scale-105 transform transition">
            <Image src="/earthquake_main.png" alt="Earthquake" width={325} height={325} className="mx-auto"/>
            <h4 className="mt-4 font-extrabold text-2xl">Earthquake</h4>
            <a href="/earthquake" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500">Start Learning</a>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:scale-105 transform transition">
            <Image src="/flood_main.png" alt="Flood" width={300} height={300} className="mx-auto"/>
            <h4 className="mt-4 font-extrabold text-2xl">Flood</h4>
            <a href="/flood" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500">Start Learning</a>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:scale-105 transform transition">
            <Image src="/cyclonemain.png" alt="Cyclone" width={325} height={325} className="mx-auto"/>
            <h4 className="mt-4 font-extrabold text-2xl">Cyclone</h4>
            <a href="/cyclone" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500">Start Learning</a>
          </div>
        </div>
      </section> */}

      {/* How Our System Works */}
      <section className="py-20 relative bg-gradient-to-b from-slate-800 to-slate-900 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 drop-shadow-lg">
          How Our System Works
        </h2>
        <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
          ResQLearn makes disaster preparedness simple: Learn, Practice, and Apply with confidence.
        </p>

        <div className="mt-14 grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { img: "/learn4.png", title: "Learn", text: "Interactive courses, quizzes, and videos to build disaster awareness." },
            { img: "/test2.png", title: "Practice", text: "Participate in safety drills and simulations to be prepared." },
            { img: "/apply4.png", title: "Apply", text: "Watch media to see best practices." },
          ].map((item, index) => (
            <div key={index} className="bg-gray-700/80 backdrop-blur-md rounded-2xl p-10 shadow-lg hover:scale-105 transition">
              <Image src={item.img} alt={item.title} width={150} height={150} className="mx-auto w-25 h-25" />
              <h3 className="mt-6 text-3xl font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-gray-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 relative bg-gradient-to-b from-slate-900 to-slate-800 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 drop-shadow-lg">
          What Schools Are Saying
        </h2>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Educators and students trust ResQLearn to make disaster preparedness engaging and impactful.
        </p>

        <div className="mt-14 grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {[
            { text: "Our school conducted its first earthquake drill with ResQLearn’s guidance – students were more confident and better prepared.", author: "– Principal, XYZ School" },
            { text: "The interactive quizzes made disaster awareness fun and engaging for our students.", author: "– Teacher, ABC College" },
            { text: "ResQLearn gives us peace of mind knowing our staff and students are trained to handle emergencies.", author: "– Administrator, DEF Institute" },
          ].map((testimonial, index) => (
            <div key={index} className="bg-gray-700/70 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-gray-700 hover:scale-105 transition">
              <p className="text-gray-300  text-xl italic">“{testimonial.text}”</p>
              <h4 className="mt-4 text-xl font-semibold text-blue-300">{testimonial.author}</h4>
            </div>
          ))}
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