// "use client";
// import { useState } from "react";

// export default function EarthquakeQuiz() {
//   const questions = [
//     {
//       q: "What should you do FIRST during an earthquake indoors?",
//       options: [
//         "Run outside immediately",
//         "Stand near windows",
//         "Drop, Cover, and Hold On",
//         "Use the elevator",
//       ],
//       answer: "Drop, Cover, and Hold On",
//     },
//     {
//       q: "Where is the safest place indoors during an earthquake?",
//       options: [
//         "Near glass windows",
//         "Under a sturdy table",
//         "In the kitchen",
//         "Next to a tall bookshelf",
//       ],
//       answer: "Under a sturdy table",
//     },
//     {
//       q: "After an earthquake, what is the first thing you should check?",
//       options: ["Gas leaks and safety hazards", "Your phone", "Your car", "TV news"],
//       answer: "Gas leaks and safety hazards",
//     },
//     {
//       q: "If you are outside during an earthquake, what should you do?",
//       options: [
//         "Run inside quickly",
//         "Move away from buildings and power lines",
//         "Lie on the ground",
//         "Stand under a tree",
//       ],
//       answer: "Move away from buildings and power lines",
//     },
//     {
//       q: "What should you keep in an earthquake emergency kit?",
//       options: [
//         "Water, food, flashlight, first aid kit",
//         "Paint, perfume, books",
//         "Television, video games, charger",
//         "Shoes, hat, umbrella",
//       ],
//       answer: "Water, food, flashlight, first aid kit",
//     },
//   ];

//   const [score, setScore] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const form = new FormData(e.target);
//     let s = 0;
//     questions.forEach((q, i) => {
//       if (form.get('q${i}') === q.answer) s++;
//     });
//     setScore(s);
//   };

//   return (
//     <main className="min-h-screen bg-gray-100 text-gray-800 px-6 py-8">
//       <h1 className="text-2xl font-bold mb-6">🌍 Earthquake Scenarios Quiz</h1>

//       <form onSubmit={handleSubmit} className="space-y-6">
//         {questions.map((q, i) => (
//           <div key={i} className="bg-white p-4 rounded-lg shadow">
//             <p className="font-semibold mb-2">{q.q}</p>
//             {q.options.map((opt) => (
//               <label key={opt} className="block">
//                 <input type="radio" name={'q${i}'} value={opt} className="mr-2" />
//                 {opt}
//               </label>
//             ))}
//           </div>
//         ))}

//         <button
//           type="submit"
//           className="bg-indigo-600 text-white px-6 py-2 rounded shadow"
//         >
//           Submit
//         </button>
//       </form>

//       {score !== null && (
//         <p className="mt-6 font-bold text-lg">
//           ✅ Your Score: {score}/{questions.length}
//         </p>
//       )}
//     </main>
//   );
// }
"use client";
import { useState } from "react";

export default function EarthquakeQuiz() {
  const [score, setScore] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});

  const questions = [
    {
      q: "What should you do FIRST during an earthquake indoors?",
      options: ["Run outside immediately", "Stand near windows", "Drop, Cover, and Hold On", "Use the elevator"],
      answer: "Drop, Cover, and Hold On",
    },
    {
      q: "Where is the safest place indoors during an earthquake?",
      options: ["Near glass windows", "Under a sturdy table", "In the kitchen", "Next to a tall bookshelf"],
      answer: "Under a sturdy table",
    },
    {
      q: "After an earthquake, what is the first thing you should check?",
      options: ["Gas leaks and safety hazards", "Your phone", "Your car", "TV news"],
      answer: "Gas leaks and safety hazards",
    },
    {
      q: "If you are outside during an earthquake, what should you do?",
      options: ["Run inside quickly", "Move away from buildings and power lines", "Lie on the ground", "Stand under a tree"],
      answer: "Move away from buildings and power lines",
    },
    {
      q: "What should you keep in an earthquake emergency kit?",
      options: ["Water, food, flashlight, first aid kit", "Paint, perfume, books", "Television, video games, charger", "Shoes, hat, umbrella"],
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
    <main className="min-h-screen bg-gray-100 text-gray-800 px-6 py-8">
      <h1 className="text-2xl font-bold mb-6">🌍 Earthquake Scenarios Quiz</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {questions.map((q, i) => (
          <fieldset key={i} className="bg-white p-4 rounded-lg shadow">
            <legend className="font-semibold mb-2">{i + 1}. {q.q}</legend>
            {q.options.map((opt) => {
              const isSubmitted = score !== null;
              const userAnswer = userAnswers[i];
              const isCorrect = opt === q.answer;
              const isUserChoice = opt === userAnswer;

              let optionClass = "block mb-1 px-2 py-1 rounded ";
              if (isSubmitted) {
                if (isCorrect) {
                  optionClass += "bg-green-100 text-green-700 font-semibold";
                } else if (isUserChoice && !isCorrect) {
                  optionClass += "bg-red-100 text-red-700 font-semibold";
                }
              }

              return (
                <label key={opt} className={optionClass}>
                  <input
                    type="radio"
                    name={`q${i}`}
                    value={opt}
                    className="mr-2"
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
          </fieldset>
        ))}

        {score === null ? (
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded shadow"
          >
            Submit
          </button>
        ) : (
          <p className="mt-6 font-bold text-lg text-center">
            ✅ Your Score: {score}/{questions.length}
          </p>
        )}
      </form>
    </main>
  );
}
