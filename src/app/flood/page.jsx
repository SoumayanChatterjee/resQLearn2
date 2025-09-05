"use client";

import React from "react";

export default function flood() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navigation Bar */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-700">ResQLearn</h1>
          <nav className="space-x-6 font-medium">
            <a href="#" className="text-gray-700 hover:text-blue-700">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-700">Courses</a>
            <a href="#" className="text-gray-700 hover:text-blue-700">Quizzes</a>
            <a href="#" className="text-gray-700 hover:text-blue-700">Leaderboard</a>
            <a href="#" className="text-gray-700 hover:text-blue-700">Profile</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Start Your Learning Journey
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore a range of courses, test your knowledge with quizzes, and discover valuable
          resources to help you prepare for any situation.
        </p>

        {/* Courses Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Courses</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Flood Course Card */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-lg font-semibold mb-2">Flood Preparedness</h4>
              <p className="text-sm text-gray-600 mb-4">
                Learn how to prepare for floods, what to do during flooding, and how to recover
                safely afterward.
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div className="bg-blue-600 h-2.5 rounded-full w-3/5"></div>
              </div>
              <p className="text-sm text-gray-500 mb-3">60% Complete</p>
              <button className="w-full py-2 bg-blue-700 text-white font-semibold rounded hover:bg-blue-800 transition">
                Continue Course
              </button>
            </div>

            {/* Add two more placeholders */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-lg font-semibold mb-2">Emergency Shelter Setup</h4>
              <p className="text-sm text-gray-600 mb-4">
                Know where and how to find or set up emergency shelters during a flood.
              </p>
              <button className="w-full py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition">
                Start Course
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-lg font-semibold mb-2">Post-Flood Recovery</h4>
              <p className="text-sm text-gray-600 mb-4">
                Learn the safety steps and procedures to follow after a flood has subsided.
              </p>
              <button className="w-full py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition">
                Start Course
              </button>
            </div>
          </div>
        </div>

        {/* Quizzes Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Quizzes</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-semibold mb-2">Flood Emergency Checklist</h4>
              <p className="text-sm text-gray-600 mb-4">
                Assess your knowledge on essential items and emergency response.
              </p>
              <button className="w-full py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
                Take Quiz
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-semibold mb-2">Real-Time Decision Scenarios</h4>
              <p className="text-sm text-gray-600 mb-4">
                Test how you would react during actual flood situations.
              </p>
              <button className="w-full py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
                Take Quiz
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-semibold mb-2">Basic Survival Skills</h4>
              <p className="text-sm text-gray-600 mb-4">
                Challenge yourself with survival basics every student should know.
              </p>
              <button className="w-full py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
                Take Quiz
              </button>
            </div>
          </div>
        </div>

        {/* Helpful Videos Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Helpful Videos</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow flex items-start gap-4">
              <div className="bg-gray-200 p-3 rounded-full">
                <span className="text-2xl">📦</span>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Flood Emergency Kit Guide</h4>
                <p className="text-sm text-gray-600">
                  A detailed video walkthrough for creating a flood emergency kit.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow flex items-start gap-4">
              <div className="bg-gray-200 p-3 rounded-full">
                <span className="text-2xl">🌊</span>
              </div>
              <div>
                <h4 className="font-semibold mb-1">What to Do During a Flood</h4>
                <p className="text-sm text-gray-600">
                  A quick animation on staying safe when waters rise unexpectedly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        &copy; 2025 Disaster Preparedness Hub. All Rights Reserved.
      </footer>
    </main>
  );
}