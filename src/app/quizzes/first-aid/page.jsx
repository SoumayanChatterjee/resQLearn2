// "use client";
// import { useState } from "react";

// export default function FirstAidQuiz() {
//   const questions = [
//     {
//       q: "What should you do first when someone is bleeding heavily?",
//       options: [
//         "Call a doctor",
//         "Apply direct pressure",
//         "Wash the wound",
//         "Give water",
//       ],
//       answer: "Apply direct pressure",
//     },
//     {
//       q: "How long should you wash a burn with cool water?",
//       options: ["10 seconds", "1 minute", "10 minutes", "30 minutes"],
//       answer: "10 minutes",
//     },
//     {
//       q: "What is the recovery position used for?",
//       options: [
//         "Broken bones",
//         "Unconscious but breathing person",
//         "Heart attack",
//         "Bleeding wounds",
//       ],
//       answer: "Unconscious but breathing person",
//     },
//     {
//       q: "If someone is choking and cannot breathe, what should you do?",
//       options: [
//         "Give them water",
//         "Perform the Heimlich maneuver",
//         "Pat them on the back gently",
//         "Call their family",
//       ],
//       answer: "Perform the Heimlich maneuver",
//     },
//     {
//       q: "What number should you dial for emergency services?",
//       options: ["100", "101", "108", "911"],
//       answer: "108",
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
//       <h1 className="text-2xl font-bold mb-6">⛑ First Aid Knowledge Quiz</h1>

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

export default function FirstAidQuiz() {
  const [score, setScore] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});

  const questions = [
    {
      question: "What should you do first when someone is bleeding heavily?",
      options: ["Call a doctor", "Apply direct pressure", "Wash the wound", "Give water"],
      answer: "Apply direct pressure",
    },
    {
      question: "How long should you wash a burn with cool water?",
      options: ["10 seconds", "1 minute", "10 minutes", "30 minutes"],
      answer: "10 minutes",
    },
    {
      question: "What is the recovery position used for?",
      options: [
        "Broken bones",
        "Unconscious but breathing person",
        "Heart attack",
        "Bleeding wounds",
      ],
      answer: "Unconscious but breathing person",
    },
    {
      question: "If someone is choking and cannot breathe, what should you do?",
      options: [
        "Give them water",
        "Perform the Heimlich maneuver",
        "Pat them on the back gently",
        "Call their family",
      ],
      answer: "Perform the Heimlich maneuver",
    },
    {
      question: "What number should you dial for emergency services?",
      options: ["100", "101", "108", "911"],
      answer: "108",
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
      <h1 className="text-3xl font-bold mb-6">⛑ First Aid Knowledge Quiz</h1>
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
                    disabled={isSubmitted}
                  />
                  {option}
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
            className="bg-indigo-600 text-white px-6 py-2 rounded shadow hover:bg-indigo-700"
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
