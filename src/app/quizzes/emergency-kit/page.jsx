"use client";
import { useState } from "react";

export default function EmergencyKitQuiz() {
  const [score, setScore] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});

  const questions = [
    {
      question: "Which of these is essential in an emergency kit?",
      options: ["Flashlight", "Video Game", "Perfume", "Sunglasses"],
      answer: "Flashlight",
    },
    {
      question: "How much water should you store per person per day?",
      options: ["1 liter", "2 liters", "4 liters", "10 liters"],
      answer: "4 liters",
    },
    {
      question: "What kind of radio is recommended for emergencies?",
      options: [
        "AM/FM battery-powered or hand-crank radio",
        "Internet radio",
        "Car stereo",
        "Smartphone app",
      ],
      answer: "AM/FM battery-powered or hand-crank radio",
    },
    {
      question: "Which of these items should be included in a first aid kit?",
      options: ["Bandages", "Makeup kit", "Hairdryer", "Wallet"],
      answer: "Bandages",
    },
    {
      question: "Why is it important to have extra batteries?",
      options: [
        "To keep your flashlight and radio working",
        "To play video games",
        "To charge your phone faster",
        "For decoration",
      ],
      answer: "To keep your flashlight and radio working",
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
    <main className="min-h-screen bg-gray-100 text-gray-800 p-6">
      <h1 className="text-3xl font-bold mb-6">Emergency Kit Quiz</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {questions.map((q, i) => (
          <fieldset key={i} className="bg-white p-4 rounded-lg shadow">
            <legend className="font-semibold mb-2">
              {i + 1}. {q.question}
            </legend>
            {q.options.map((option, j) => {
              const isSubmitted = score !== null;
              const userAnswer = userAnswers[i];
              const isCorrect = option === q.answer;
              const isUserChoice = option === userAnswer;

              let optionClass = "block mb-1 px-2 py-1 rounded ";
              if (isSubmitted) {
                if (isCorrect) {
                  optionClass += "bg-green-100 text-green-700 font-semibold";
                } else if (isUserChoice && !isCorrect) {
                  optionClass += "bg-red-100 text-red-700 font-semibold";
                }
              }

              return (
                <label key={j} className={optionClass}>
                  <input
                    type="radio"
                    name={`q${i}`}
                    value={option}
                    className="mr-2"
                    required
                    disabled={isSubmitted} // disable after submission
                  />
                  {option}
                  {isSubmitted &&
                    isUserChoice &&
                    !isCorrect && (
                      <span className="ml-2 text-sm text-gray-600">
                        (Correct: {q.answer})
                      </span>
                    )}
                </label>
              );
            })}
          </fieldset>
        ))}

        {score === null ? (
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        ) : (
          <div className="mt-6 text-xl font-semibold text-center">
            ✅ You scored {score} out of {questions.length}
          </div>
        )}
      </form>
    </main>
  );
}
