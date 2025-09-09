// // src/app/profile/page.jsx
// "use client";

// export default function Profile() {
//   const user = {
//     name: "Van",
//     email: "van@gmail.com",
//     school: "Techno Main Salt Lake",
//     memberSince: "08/09/2025",
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-slate-100 to-slate-200 flex flex-col items-center py-10">
//       {/* Header Banner */}
//       <div className="bg-blue-800 w-full max-w-4xl rounded-t-2xl p-8 flex items-center gap-4 shadow-lg">
//         <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold">
//           {user.name.charAt(0)}
//         </div>
//         <div>
//           <h1 className="text-3xl font-bold text-white">{user.name}</h1>
//           <p className="text-blue-200">{user.username}</p>
//         </div>
//       </div>

//       {/* Info Card */}
//       <div className="bg-white w-full max-w-4xl rounded-b-2xl shadow-lg p-6">
//         <div className="flex justify-between items-center border-b pb-4 mb-4">
//           <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
//             <span className="text-blue-600">👤</span> Personal Information
//           </h2>
//           <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
//             ✏ Edit
//           </button>
//         </div>

//         <div className="space-y-4">
//           <div className="flex items-center gap-3">
//             <span className="text-blue-600">👤</span>
//             <div>
//               <p className="text-sm text-gray-500">Full Name</p>
//               <p className="text-gray-800 font-medium">{user.name}</p>
//             </div>
//           </div>

//           <div className="flex items-center gap-3">
//             <span className="text-blue-600">📧</span>
//             <div>
//               <p className="text-sm text-gray-500">Email</p>
//               <p className="text-gray-800 font-medium">{user.email}</p>
//             </div>
//           </div>

//           <div className="flex items-center gap-3">
//             <span className="text-blue-600">🎓</span>
//             <div>
//               <p className="text-sm text-gray-500">School/College</p>
//               <p className="text-gray-800 font-medium">{user.school}</p>
//             </div>
//           </div>

//           <div className="flex items-center gap-3">
//             <span className="text-blue-600">📅</span>
//             <div>
//               <p className="text-sm text-gray-500">Member Since</p>
//               <p className="text-gray-800 font-medium">{user.memberSince}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// 'use client';

// import {
//   FaUser,
//   FaEnvelope,
//   FaGraduationCap,
//   FaCalendarAlt,
//   FaEdit,
// } from 'react-icons/fa';

// export default function ProfilePage() {
//   const user = {
//     name: 'Van',
//     email: 'van@gmail.com',
//     school: 'Techno Main Salt Lake',
//     createdAt: '08/09/2025',
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white">
//       {/* 🔵 Header Bar */}
//       <header className="w-full px-8 py-5 flex justify-between items-center bg-[#0f172a] border-b border-slate-700 shadow">
//         <h1 className="text-2xl font-bold text-white">ResQLearn</h1>
//         <div className="flex items-center gap-3">
//           <div className="bg-blue-600 text-white font-bold w-10 h-10 flex items-center justify-center rounded-full">
//             {user.name.charAt(0)}
//           </div>
//           <span className="text-white font-medium">{user.name}</span>
//         </div>
//       </header>

//       {/* 👤 Profile Section */}
//       <main className="max-w-6xl mx-auto px-6 py-12">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-3xl font-bold">Your Profile</h2>
//           <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition text-white font-semibold px-4 py-2 rounded-md">
//             <FaEdit />
//             Edit
//           </button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <InfoCard icon={<FaUser />} label="Full Name" value={user.name} />
//           <InfoCard icon={<FaEnvelope />} label="Email" value={user.email} />
//           <InfoCard icon={<FaGraduationCap />} label="School/College" value={user.school} />
//           <InfoCard icon={<FaCalendarAlt />} label="Member Since" value={user.createdAt} />
//         </div>
//       </main>
//     </div>
//   );
// }

// function InfoCard({ icon, label, value }) {
//   return (
//     <div className="bg-[#1e293b] border border-[#334155] p-6 rounded-lg shadow-md hover:shadow-lg transition">
//       <div className="flex items-center gap-3 mb-2 text-blue-400 text-xl">
//         {icon}
//         <span className="text-sm font-semibold text-gray-300">{label}</span>
//       </div>
//       <p className="text-lg font-medium text-white">{value}</p>
//     </div>
//   );
// }
// 'use client';

// import {
//   FaEnvelope,
//   FaGraduationCap,
//   FaCalendarAlt,
// } from 'react-icons/fa';

// export default function ProfilePage() {
//   const user = {
//     name: 'Van',
//     email: 'van@gmail.com',
//     school: 'Techno Main Salt Lake',
//     createdAt: '08/09/2025',
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white">
//       {/* Full width, taller navbar */}
//       <nav className="w-full bg-blue-800 flex items-center px-8 py-8 shadow-md">
//         {/* Left side: Profile pic or letter avatar */}
//         <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold uppercase mr-6 select-none">
//           {user.name.charAt(0)}
//         </div>
//         {/* Welcome text with bigger font */}
//         <h1 className="text-4xl font-semibold">
//           Welcome back, {user.name}
//         </h1>
//       </nav>

//       {/* User Info Section */}
//       <div className="max-w-3xl mx-auto px-6 py-12 bg-[#1e293b] border border-[#334155] rounded-xl shadow-md mt-10 space-y-6">
//         <InfoRow icon={<FaEnvelope />} label="Email" value={user.email} />
//         <InfoRow icon={<FaGraduationCap />} label="School/College" value={user.school} />
//         <InfoRow icon={<FaCalendarAlt />} label="Member Since" value={user.createdAt} />
//       </div>
//     </div>
//   );
// }

// function InfoRow({ icon, label, value }) {
//   return (
//     <div className="flex items-center gap-4">
//       <div className="text-blue-400 text-xl">{icon}</div>
//       <div>
//         <div className="text-sm text-gray-400">{label}</div>
//         <div className="text-lg font-medium text-white">{value}</div>
//       </div>
//     </div>
//   );
// }
'use client';

import {
  FaEnvelope,
  FaGraduationCap,
  FaCalendarAlt,
} from 'react-icons/fa';

export default function ProfilePage() {
  const user = {
    name: 'Van',
    email: 'van@gmail.com',
    school: 'Techno Main Salt Lake',
    createdAt: '08/09/2025',
  };

  return (
    <div className="min-h-[100vh] flex flex-col bg-gradient-to-b from-slate-200 via-slate-300 to-slate-200 text-white">
         <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-4 text-white z-20 bg-slate-900">
        <h1 className="text-2xl font-bold drop-shadow-lg">ResQLearn</h1>
        <ul className="flex space-x-10">
          <li>
            <a href="/home" className="hover:text-blue-400 drop-shadow-lg">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-400 drop-shadow-lg">About Us</a>
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

<div className="mt-10">
      {/* Full width, taller navbar */}
      <nav className="w-full bg-slate-800 flex items-center px-10 py-10 shadow-md">
        {/* Left side: Profile pic or letter avatar */}
        <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-5xl font-bold uppercase mr-8 select-none">
          {user.name.charAt(0)}
        </div>
        {/* Welcome text with bigger font */}
        <h1 className="text-6xl font-extrabold">
          Welcome back, {user.name}
        </h1>
      </nav>
      </div>

      {/* User Info Section */}
      <div className="max-w-[50rem] w-full mx-auto px-8 py-14 bg-[#1e293b] border border-[#334155] rounded-xl shadow-md mt-24 space-y-10 min-h-[400px]">
  <InfoRow icon={<FaEnvelope />} label="Email" value={user.email} />
  <InfoRow icon={<FaGraduationCap />} label="School/College" value={user.school} />
  <InfoRow icon={<FaCalendarAlt />} label="Member Since" value={user.createdAt} />
</div>


      <footer className="bg-slate-900 text-white py-6 mt-auto">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} ResQLearn. All rights reserved.</p>
        </div>
      </footer>
    </div>
    
  );
}

function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-center gap-6">
      <div className="text-blue-400 text-3xl">{icon}</div>
      <div>
        <div className="text-base text-gray-400 mb-1">{label}</div>
        <div className="text-2xl font-semibold text-white">{value}</div>
      </div>
    </div>
    
  );
}