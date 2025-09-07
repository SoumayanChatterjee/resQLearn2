import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);

  // ✅ Check login status
  const checkLoginStatus = () => {
    const status = localStorage.getItem("loggedIn");
    setLoggedIn(status === "true");
  };

  // ✅ Run on mount and listen for changes
  useEffect(() => {
    checkLoginStatus();

    // Listen for storage changes
    window.addEventListener("storage", checkLoginStatus);

    return () => {
      window.removeEventListener("storage", checkLoginStatus);
    };
  }, []);

  // ✅ Logout
  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("user");
    setLoggedIn(false);

    // Notify other components
    window.dispatchEvent(new Event("storage"));

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
            <Link
              href="/profile"
              className="hover:text-blue-600 font-medium"
            >
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