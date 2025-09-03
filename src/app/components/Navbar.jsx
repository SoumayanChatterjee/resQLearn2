"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white px-6 py-4 flex justify-between items-center shadow-lg">
      {/* Logo / Icon */}
      <div className="flex items-center space-x-2">
        <span className="text-2xl font-bold">🌐</span>
        <h1 className="text-xl font-semibold">DisasterEdu</h1>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6">
        <Link href="/home" className="hover:text-blue-300">Home</Link>
        <Link href="/about" className="hover:text-blue-300">About Us</Link>
        <Link href="/resources" className="hover:text-blue-300">Resources</Link>
        <Link href="/contact" className="hover:text-blue-300">Contact</Link>
        <Link href="/login" className="hover:text-blue-300">Login</Link>
        <Link href="/signup" className="hover:text-blue-300">Sign Up</Link>
      </div>
    </nav>
  );
}
                                 