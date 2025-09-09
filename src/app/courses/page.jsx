// export default function CoursesPage() {
//   return (
//     <main className="min-h-screen bg-gray-100 text-gray-800 px-6 py-8">
//       <h1 className="text-3xl font-bold mb-6">Available Courses</h1>

//       <ul className="space-y-4">
//         <li>
//           <a
//             href="/courses/first-aid"
//             className="block bg-white p-4 rounded-lg shadow hover:bg-gray-50"
//           >
//             🩹 First Aid Basics
//           </a>
//         </li>
//         <li>
//           <a
//             href="/courses/fire-safety"
//             className="block bg-white p-4 rounded-lg shadow hover:bg-gray-50"
//           >
//             🔥 Fire Safety
//           </a>
//         </li>
//         <li>
//           <a
//             href="/courses/earthquake"
//             className="block bg-white p-4 rounded-lg shadow hover:bg-gray-50"
//           >
//             🌍 Earthquake Preparedness
//           </a>
//         </li>
//       </ul>
//     </main>
//   );
// }
export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800 px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">Available Courses</h1>

      <ul className="space-y-4">
        <li>
          <a
            href="/courses/first-aid"
            className="block bg-white p-4 rounded-lg shadow hover:bg-gray-50"
          >
            🩹 First Aid Basics
          </a>
        </li>
        <li>
          <a
            href="/courses/fire-safety"
            className="block bg-white p-4 rounded-lg shadow hover:bg-gray-50"
          >
            🔥 Fire Safety & Evacuation
          </a>
        </li>
        <li>
          <a
            href="/courses/earthquake"
            className="block bg-white p-4 rounded-lg shadow hover:bg-gray-50"
          >
            🌍 Earthquake Preparedness
          </a>
        </li>
      </ul>
    </main>
  );
}