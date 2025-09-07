"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [role, setRole] = useState("student");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // ✅ Password validation
  const validatePassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[@$!%*?&#]/.test(password);

    if (password.length < minLength) {
      return "Password must be at least 8 characters long.";
    }
    if (!hasUpperCase) {
      return "Password must contain at least one uppercase letter.";
    }
    if (!hasLowerCase) {
      return "Password must contain at least one lowercase letter.";
    }
    if (!hasNumber) {
      return "Password must contain at least one number.";
    }
    if (!hasSpecialChar) {
      return "Password must contain at least one special character (@$!%*?&#).";
    }
    return null; // ✅ No errors
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    // ✅ Check password strength
    const passwordError = validatePassword(password);
    if (passwordError) {
      setError(passwordError);
      return;
    }

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Signup successful! Please log in.");

        // ✅ Clear fields
        setName("");
        setEmail("");
        setPassword("");
        e.target.reset();

        router.push("/login");
      } else {
        setError(data.error || "Signup failed");
      }
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
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      {/* Card */}
      <div className="relative flex bg-white/90 rounded-xl shadow-2xl overflow-hidden w-3/4 max-w-4xl">
        {/* Left */}
        <div className="w-1/2 bg-slate-100 flex flex-col items-center justify-center p-10">
          <img
            src="/signup_welcome.png"
            alt="Signup Illustration"
            className="max-w-xs w-full h-auto mb-6 rounded-lg shadow"
          />
          <h2 className="text-2xl font-bold mb-4">Join ResQLearn!</h2>
          <p className="text-gray-600 text-center">
            Start your journey in disaster preparedness education today.
          </p>
        </div>

        {/* Right */}
        <div className="w-1/2 p-10 bg-slate-200">
          <h2 className="text-2xl font-bold mb-6">Sign Up</h2>

          {/* Role toggle */}
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

          {/* Form */}
          <form onSubmit={handleSignup} className="space-y-4" autoComplete="off">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoComplete="new-name"
              className="w-full p-2 border rounded"
            />
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
              Sign Up
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
