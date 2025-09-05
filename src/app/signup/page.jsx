"use client";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: send signup data to backend
    alert("Signup successful!");
    router.push("/login");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/login_bg3.png')",
      }}
    >
      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0"></div>

      <div className="flex bg-white rounded-xl shadow-lg overflow-hidden w-11/12 max-w-4xl z-10">
        {/* Left Section */}
        <div className="w-1/2 bg-slate-100 flex flex-col items-center justify-center p-10">
        <img
            src="/signup_welcome.jpg"
            alt="Illustration of a person using a laptop"
            className="max-w-l w-full h-auto mb-6 rounded-lg shadow"
        />
          <h2 className="text-2xl font-bold mb-4">Welcome to ResQLearn!</h2>
          <p className="text-gray-600 text-center">
            Providing disaster preparedness education for schools and colleges,
            our mission is to equip you with knowledge and skills to respond effectively.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-1/2 p-10 bg-slate-200">
          <h2 className="text-2xl font-bold mb-6">Sign Up</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-2 border rounded"
              required
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
