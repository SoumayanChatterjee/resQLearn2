"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [role, setRole] = useState("student");

  // form states
  const [name, setName] = useState("");
  const [school, setSchool] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // password validation
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role, school }),
      });

      const data = await res.json();
      if (!data.success) {
        setError(data.error || "Signup failed");
        return;
      }

      alert("Signup successful!");
      // reset fields after signup
      setName("");
      setSchool("");
      setEmail("");
      setPassword("");
      setRole("student");

      router.push("/login");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/login_bg3.png')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      {/* Signup Card */}
      <div className="relative flex bg-white/90 rounded-xl shadow-2xl overflow-hidden w-3/4 max-w-4xl">
        {/* Left Section */}
        <div className="w-1/2 bg-slate-100 flex flex-col items-center justify-center p-10">
          <img
            src="/signup_welcome.jpg"
            alt="Signup Illustration"
            className="max-w-xs w-full h-auto mb-6 rounded-lg shadow"
          />
          <h2 className="text-2xl font-bold mb-4">Join ResQLearn</h2>
          <p className="text-gray-600 text-center">
            Start your journey to becoming disaster-ready! Learn essential
            preparedness skills with us.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-1/2 p-10 bg-slate-200">
          <h2 className="text-2xl font-bold mb-6">Sign up</h2>

          {/* Role toggle */}
          <div className="flex mb-6">
            <button
              className={`flex-1 py-2 rounded-l-lg ${
                role === "student" ? "bg-blue-800 text-white" : "bg-gray-200"
              }`}
              onClick={() => setRole("student")}
              type="button"
            >
              Student
            </button>
            <button
              className={`flex-1 py-2 rounded-r-lg ${
                role === "admin" ? "bg-blue-800 text-white" : "bg-gray-200"
              }`}
              onClick={() => setRole("admin")}
              type="button"
            >
              Admin
            </button>
          </div>

          {/* Signup form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-2 border rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="School/College"
              className="w-full p-2 border rounded"
              value={school}
              onChange={(e) => setSchool(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password (min 6 chars)"
              className="w-full p-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full bg-blue-800 text-white py-2 rounded hover:bg-blue-600"
            >
              Sign up
            </button>
          </form>

          <p className="mt-4 text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Log in here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
