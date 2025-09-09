// // src/app/contact/page.js
// "use client";
// import { Phone, Smartphone, Monitor, Siren, Flame, Ambulance, User } from "lucide-react";

// export default function Contact() {
//   const contacts = [
//     {
//       icon: <Phone className="w-6 h-6 text-blue-600" />,
//       title: "NDMA – National Disaster Management Authority",
//       details: ["+91 11-2670 1700"],
//     },
//     {
//       icon: <Phone className="w-6 h-6 text-blue-600" />,
//       title: "Control Room",
//       details: ["011-26701728", "011-26701729"],
//     },
//     {
//       icon: <Smartphone className="w-6 h-6 text-blue-600" />,
//       title: "Mobile (Control Room)",
//       details: ["9868891801", "9868101885"],
//     },
//     {
//       icon: <Monitor className="w-6 h-6 text-blue-600" />,
//       title: "Emergency Operations Center (MHA – NERC)",
//       details: ["011-23438252", "011-23438253"],
//     },
//     {
//       icon: <Siren className="w-6 h-6 text-blue-600" />,
//       title: "Emergency & Police",
//       details: ["112"],
//     },
//     {
//       icon: <Flame className="w-6 h-6 text-blue-600" />,
//       title: "Fire",
//       details: ["101"],
//     },
//     {
//       icon: <Ambulance className="w-6 h-6 text-blue-600" />,
//       title: "Ambulance",
//       details: ["102"],
//     },
//     {
//       icon: <User className="w-6 h-6 text-blue-600" />,
//       title: "Disaster Management (NDMA)",
//       details: ["1078"],
//     },
//     {
//       icon: <User className="w-6 h-6 text-blue-600" />,
//       title: "Relief Commissioner for Natural Calamities",
//       details: ["1070"],
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Header */}
//       <div className="text-center py-10">
//         <h1 className="text-3xl font-bold text-blue-700 flex justify-center items-center gap-2">
//           NDMA & Emergency Directory (India)
//         </h1>
//         <p className="text-gray-600 mt-2">
//           In case of emergencies, reach out using these official contacts.
//         </p>
//       </div>

//       {/* Directory List */}
//       <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6 space-y-6">
//         {contacts.map((contact, index) => (
//           <div
//             key={index}
//             className="flex items-start gap-4 border-b pb-4 last:border-b-0"
//           >
//             <div className="p-3 bg-blue-100 rounded-full">{contact.icon}</div>
//             <div>
//               <h3 className="font-semibold text-lg text-gray-800">{contact.title}</h3>
//               <ul className="text-gray-600">
//                 {contact.details.map((item, i) => (
//                   <li key={i}>{item}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Footer */}
//       <footer className="text-center py-6 text-gray-500 text-sm mt-10">
//         © 2025 ResQLearn. All rights reserved.
//       </footer>
//     </div>
//   );
// }
// src/app/contact/page.js
"use client";
import {
  PhoneIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  BellAlertIcon,
  FireIcon,
  UserIcon,
  TruckIcon,
} from "@heroicons/react/24/solid";

export default function ContactPage() {
  const contacts = [
    {
      icon: <PhoneIcon className="w-7 h-7 text-blue-600" />,
      title: "NDMA – National Disaster Management Authority",
      details: ["+91 11-2670 1700"],
    },
    {
      icon: <PhoneIcon className="w-7 h-7 text-blue-600" />,
      title: "Control Room",
      details: ["011-26701728", "011-26701729"],
    },
    {
      icon: <DevicePhoneMobileIcon className="w-7 h-7 text-blue-600" />,
      title: "Mobile (Control Room)",
      details: ["9868891801", "9868101885"],
    },
    {
      icon: <ComputerDesktopIcon className="w-7 h-7 text-blue-600" />,
      title: "Emergency Operations Center (MHA – NERC)",
      details: ["011-23438252", "011-23438253"],
    },
    {
      icon: <BellAlertIcon className="w-7 h-7 text-blue-600" />,
      title: "Emergency & Police",
      details: ["112"],
    },
    {
      icon: <FireIcon className="w-7 h-7 text-blue-600" />,
      title: "Fire",
      details: ["101"],
    },
    {
      icon: <TruckIcon className="w-7 h-7 text-blue-600" />,
      title: "Ambulance",
      details: ["102"],
    },
    {
      icon: <UserIcon className="w-7 h-7 text-blue-600" />,
      title: "Disaster Management (NDMA)",
      details: ["1078"],
    },
    {
      icon: <UserIcon className="w-7 h-7 text-blue-600" />,
      title: "Relief Commissioner for Natural Calamities",
      details: ["1070"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-4 text-white bg-slate-800 z-20">
        <h1 className="text-2xl font-bold drop-shadow-lg">ResQLearn</h1>
        <ul className="flex space-x-10">
          <li>
            <a href="/home" className="hover:text-blue-400 drop-shadow-lg">Home</a>
          </li>
          <li>
            <a href="/about" className="hover:text-blue-400 drop-shadow-lg">About Us</a>
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
      <main className="pt-20 pb-20 px-6 flex-1 max-w-7xl mx-auto">

      <div className="text-center py-10">
        <h1 className="text-4xl font-bold text-blue-700">
          NDMA & Emergency Directory (India)
        </h1>
        <p className="text-gray-600 mt-2 text-lg">
          In case of emergencies, reach out using these official contacts.
        </p>
      </div>

      {/* Directory in Card Style */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="flex items-start gap-4 bg-white shadow-md hover:shadow-lg transition rounded-2xl p-5"
          >
            <div className="p-3 bg-blue-100 rounded-full">{contact.icon}</div>
            <div>
              <h3 className="font-semibold text-lg text-gray-800">{contact.title}</h3>
              <ul className="text-gray-600">
                {contact.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
</main>
      {/* Footer */}
      <footer className="text-center bg-slate-900 py-6 text-gray-500 text-sm mt-10">
        © 2025 ResQLearn. All rights reserved.
      </footer>
    </div>
  );
}