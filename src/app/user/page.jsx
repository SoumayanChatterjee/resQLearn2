"use client";
import { useState, useEffect } from "react";

export default function UserPage() {
  const [form, setForm] = useState({ name: "", password: "" });
  const [users, setUsers] = useState([]);

  // Fetch users list
  useEffect(() => {
    fetch("/api/user")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    // Reset form
    setForm({ name: "", password: "" });

    // Refresh users list
    const updated = await fetch("/api/user").then((res) => res.json());
    setUsers(updated);
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Login / Register</h1>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border p-2 w-full rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="border p-2 w-full rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Login
        </button>
      </form>

      <ul className="mt-6">
        {users.map((u) => (
          <li key={u._id} className="border-b py-2">
            {u.name} — {u.password}
          </li>
        ))}
      </ul>
    </div>
  );
}
