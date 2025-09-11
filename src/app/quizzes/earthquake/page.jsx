"use client";
import { useState } from "react";

export default function EarthquakeQuiz() {
  const [score, setScore] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});

  const questions = [
    {
      q: "What should you do FIRST during an earthquake indoors?",
      options: [
        "Run outside immediately",
        "Stand near windows",
        "Drop, Cover, and Hold On",
        "Use the elevator",
      ],
      answer: "Drop, Cover, and Hold On",
    },
    {
      q: "Where is the safest place indoors during an earthquake?",
      options: [
        "Near glass windows",
        "Under a sturdy table",
        "In the kitchen",
        "Next to a tall bookshelf",
      ],
      answer: "Under a sturdy table",
    },
    {
      q: "After an earthquake, what is the first thing you should check?",
      options: [
        "Gas leaks and safety hazards",
        "Your phone",
        "Your car",
        "TV news",
      ],
      answer: "Gas leaks and safety hazards",
    },
    {
      q: "If you are outside during an earthquake, what should you do?",
      options: [
        "Run inside quickly",
        "Move away from buildings and power lines",
        "Lie on the ground",
        "Stand under a tree",
      ],
      answer: "Move away from buildings and power lines",
    },
    {
      q: "What should you keep in an earthquake emergency kit?",
      options: [
        "Water, food, flashlight, first aid kit",
        "Paint, perfume, books",
        "Television, video games, charger",
        "Shoes, hat, umbrella",
      ],
      answer: "Water, food, flashlight, first aid kit",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    let s = 0;
    const answers = {};

    questions.forEach((q, i) => {
      const userAnswer = form.get(`q${i}`);
      answers[i] = userAnswer;
      if (userAnswer === q.answer) s++;
    });

    setUserAnswers(answers);
    setScore(s);
  };

  return (
    <main className="min-h-screen bg-slate-100 text-gray-800">
      {/* Header section */}
      <div className="bg-slate-800 py-8 text-center">
        <h1 className="text-3xl font-bold flex items-center justify-center gap-2 text-slate-100">
          🌍 Earthquake Scenarios Quiz
        </h1>
        <p className="text-gray-200 font-medium mt-2">
          Test your knowledge on what to do before, during and after an earthquake.
        </p>
      </div>

      {/* Quiz content */}
      <div className="max-w-3xl mx-auto px-4 py-10">
        <form onSubmit={handleSubmit} className="space-y-4">
          {questions.map((q, i) => (
            <fieldset
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h2 className="text-lg font-semibold mb-4">
                {i + 1}. {q.q}
              </h2>
              <div className="space-y-2">
                {q.options.map((opt) => {
                  const isSubmitted = score !== null;
                  const userAnswer = userAnswers[i];
                  const isCorrect = opt === q.answer;
                  const isUserChoice = opt === userAnswer;

                  let optionClass =
                    "block mb-1 px-3 py-2 rounded cursor-pointer transition ";
                  if (isSubmitted) {
                    if (isCorrect) {
                      optionClass +=
                        "bg-green-100 text-green-700 font-semibold";
                    } else if (isUserChoice && !isCorrect) {
                      optionClass +=
                        "bg-red-100 text-red-700 font-semibold";
                    } else {
                      optionClass += "hover:bg-gray-100";
                    }
                  } else {
                    optionClass += "hover:bg-gray-100";
                  }

                  return (
                    <label key={opt} className={optionClass}>
                      <input
                        type="radio"
                        name={`q${i}`}
                        value={opt}
                        className="mr-2 accent-indigo-600"
                        required
                        disabled={isSubmitted}
                      />
                      {opt}
                      {isSubmitted && isUserChoice && !isCorrect && (
                        <span className="ml-2 text-sm text-gray-600">
                          (Correct: {q.answer})
                        </span>
                      )}
                    </label>
                  );
                })}
              </div>
            </fieldset>
          ))}

          {score === null ? (
            <button
              type="submit"
              className="block mx-auto bg-indigo-600 text-white px-6 py-2 rounded shadow hover:bg-indigo-700 transition"
            >
              Submit
            </button>
          ) : (
            <p className="mt-8 font-extrabold text-3xl text-center">
              ✅ Your Score: {score}/{questions.length}
            </p>
          )}
        </form>
      </div>
    </main>
  );
}