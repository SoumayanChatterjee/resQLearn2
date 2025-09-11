"use client"; // ✅ must be the first line, no comments above

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (data.success) {
        alert("Login successful!");
        // ✅ Clear credentials after successful login
        setEmail("");
        setPassword("");

        if (data.user.role === "admin") {
          router.push("/admin-home");
        } else {
          router.push("/home");
        }
      } else {
        setError(data.error || "Invalid credentials");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/login_bg3.png')" }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      <div className="relative flex bg-white/90 rounded-xl shadow-2xl overflow-hidden w-3/4 max-w-4xl">
        {/* Left Section */}
        <div className="w-1/2 bg-slate-100 flex flex-col items-center justify-center p-10">
          <img
            src="/login_welcome2.jpg"
            alt="Login Illustration"
            className="max-w-xs w-full h-auto mb-6 rounded-lg shadow"
          />
          <h2 className="text-2xl font-bold mb-4">Welcome to ResQLearn!</h2>
          <p className="text-gray-600 text-center">
            Providing disaster preparedness education for schools and colleges.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-1/2 p-10 bg-slate-200">
          <h2 className="text-2xl font-bold mb-6">Log in</h2>

          {/* Role Toggle */}
          <div className="flex mb-6">
            <button
              type="button"
              className={`flex-1 py-2 rounded-l-lg ${
                role === "student" ? "bg-blue-800 text-white" : "bg-gray-200"
              }`}
              onClick={() => setRole("student")}
            >
              Student
            </button>
            <button
              type="button"
              className={`flex-1 py-2 rounded-r-lg ${
                role === "admin" ? "bg-blue-800 text-white" : "bg-gray-200"
              }`}
              onClick={() => setRole("admin")}
            >
              Admin
            </button>
          </div>

          {/* Error */}
          {error && <p className="text-red-500 mb-4">{error}</p>}

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-4" autoComplete="off">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="new-email"
              className="w-full p-2 border rounded"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="new-password"
              className="w-full p-2 border rounded"
            />
            <button
              type="submit"
              className="w-full bg-blue-800 text-white py-2 rounded hover:bg-blue-600"
            >
              Log in
            </button>
          </form>

          <p className="mt-4 text-sm text-gray-600">
            Don’t have an account?{" "}
            <a href="/signup" className="text-blue-500 hover:underline">
              Sign up here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
