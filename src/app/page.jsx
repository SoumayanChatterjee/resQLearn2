"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  return (
    <main className="flex items-center justify-center min-h-screen bg-blue-50">
      <div className="bg-white rounded-2xl shadow-lg p-10 flex items-center space-x-10 max-w-5xl">
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">
            Be Prepared for Tomorrow
          </h1>
          <p className="text-gray-600 mb-6">
            Providing disaster preparedness education for schools and colleges,
            our mission is to equip you with the knowledge and skills needed to
            respond to emergencies effectively.
          </p>
          <button
            onClick={() => router.push("/home")}
            className="bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition"
          >
            Get Started
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <Image
            src="/PICTURE.png" // put your image in /public folder
            alt="Preparedness"
            width={400}
            height={400}
          />
        </div>
      </div>
    </main>
  );
}
