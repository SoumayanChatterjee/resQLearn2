"use client";
import { useEffect, useState } from "react";
import { FaEnvelope, FaGraduationCap, FaCalendarAlt } from "react-icons/fa";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch("/api/profile");
        const data = await res.json();
        if (data.success) setUser(data.user);
        else setError(data.error || "Failed to load profile");
      } catch {
        setError("Something went wrong");
      }
    };
    fetchProfile();
  }, []);

  if (error) return <p className="text-red-500 text-center mt-10">{error}</p>;
  if (!user) return <p className="text-center mt-10">Loading profile...</p>;

  return (
    <div className="min-h-[100vh] flex flex-col bg-gradient-to-b from-slate-200 via-slate-300 to-slate-200 text-white">
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-4 text-white z-20 bg-slate-900">
        <h1 className="text-2xl font-bold drop-shadow-lg">ResQLearn</h1>
        <ul className="flex space-x-10">
          <li><a href="/home" className="hover:text-blue-400">Home</a></li>
          <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
          <li><a href="/login" className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500">Logout</a></li>
          <li><a href="/profile" className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200">Profile</a></li>
        </ul>
      </nav>

      <div className="mt-10">
        <nav className="w-full bg-slate-800 flex items-center px-10 py-10 shadow-md">
          <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-5xl font-bold uppercase mr-8">
            {user.name.charAt(0)}
          </div>
          <h1 className="text-6xl font-extrabold">Welcome back, {user.name}</h1>
        </nav>
      </div>

      <div className="max-w-[50rem] w-full mx-auto px-8 py-14 bg-[#1e293b] border border-[#334155] rounded-xl shadow-md mt-24 space-y-10 min-h-[400px]">
        <InfoRow icon={<FaEnvelope />} label="Email" value={user.email} />
        <InfoRow icon={<FaGraduationCap />} label="School/College" value={user.school} />
        <InfoRow icon={<FaCalendarAlt />} label="Member Since" value={new Date(user.createdAt).toLocaleDateString()} />
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