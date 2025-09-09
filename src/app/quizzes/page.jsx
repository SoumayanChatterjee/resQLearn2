export default function QuizzesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-700 text-white px-6 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">QUIZZES</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <a
          href="/quizzes/emergency-kit"
          className="bg-white text-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition"
        >
          <h2 className="text-xl font-bold mb-2">Emergency Kit Checklist</h2>
          <p className="text-sm mb-4">Test your knowledge on survival essentials.</p>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded">Take Quiz</button>
        </a>

        <a
          href="/quizzes/first-aid"
          className="bg-white text-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition"
        >
          <h2 className="text-xl font-bold mb-2">First Aid Knowledge</h2>
          <p className="text-sm mb-4">Do you know what to do in emergencies?</p>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded">Take Quiz</button>
        </a>

        <a
          href="/quizzes/earthquake"
          className="bg-white text-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition"
        >
          <h2 className="text-xl font-bold mb-2">Earthquake Scenarios</h2>
          <p className="text-sm mb-4">Challenge yourself with earthquake safety.</p>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded">Take Quiz</button>
        </a>
      </div>
    </main>
  );
}