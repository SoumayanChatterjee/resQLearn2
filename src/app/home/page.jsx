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
      <a href="/login" className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 shadow-lg">Logout</a>
    </li>
    <li>
      <a href="/profile" className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200 shadow-lg">Profile</a>
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
