import Link from "next/link";

export default function LandingPage() {
  return (
    <section className="bg-blue-50 min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
        Disaster Preparedness for Schools and Colleges
      </h1>
      <p className="mt-4 text-lg text-gray-600 max-w-2xl">
        Learn how to prepare and respond effectively to emergencies, ensuring
        the safety of students and staff.
      </p>
      <Link href="/home">
        <button className="mt-8 bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800">
          Get Started
        </button>
      </Link>
    </section>
  );
}
