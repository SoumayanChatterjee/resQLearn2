"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);

  // Update login state from localStorage
  const checkLoginStatus = () => {
    const status = localStorage.getItem("loggedIn");
    setLoggedIn(status === "true");
  };

  // Check on mount and listen to changes (e.g., logout from another tab)
  useEffect(() => {
    checkLoginStatus();
    window.addEventListener("storage", checkLoginStatus);

    return () => {
      window.removeEventListener("storage", checkLoginStatus);
    };
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    setLoggedIn(false);
    router.push("/login");
  };

  return (
    <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
      {/* Logo */}
      <Link href="/" className="text-xl font-bold text-blue-600">
        ResQLearn
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-6">
        <Link href="/home" className="hover:text-blue-600">
          Home
        </Link>
        <Link href="/about" className="hover:text-blue-600">
          About Us
        </Link>
        <Link href="/contact" className="hover:text-blue-600">
          Contact
        </Link>

        {/* Auth Buttons */}
        {loggedIn ? (
          <>
            <Link href="/profile" className="hover:text-blue-600 font-medium">
              Profile
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              href="/login"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="border border-blue-500 text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-50"
            >
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}