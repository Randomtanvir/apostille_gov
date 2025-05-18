"use client";

import Image from "next/image";
import React, { useState } from "react";

const LoginForm = () => {
  const [nothiId, setNothiId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      console.log("Logging in with:", { nothiId, password });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            width={200}
            height={200}
            src={`https://apostille.mygov.bd/build/assets/myGov-Apostille-Logo-version-5.0-01-lBppngK5.png`}
            alt="myGov Logo"
            className="h-16 w-auto"
          />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          ব্যবহারকারীর নথি আইডি
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nothi ID Field */}
          <div>
            <label
              htmlFor="nothiId"
              className="block text-sm font-medium text-gray-700"
            >
              নথি আইডি
            </label>
            <input
              id="nothiId"
              type="text"
              value={nothiId}
              onChange={(e) => setNothiId(e.target.value)}
              placeholder="নথি আইডি"
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm p-2"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              পাসওয়ার্ড
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="পাসওয়ার্ড"
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm p-2"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md 
    text-white bg-green-600 hover:bg-green-700 
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 
    ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={loading}
          >
            {loading ? "Loading..." : "লগইন করুন"}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          কপিরাইট © {new Date().getFullYear()} সর্বস্বত্ব সংরক্ষিত <br />
          গণপ্রজাতন্ত্রী বাংলাদেশ সরকার
        </div>
        <div className="mt-4 text-center text-gray-600 text-sm">
          পরিকল্পনা বাস্তবায়নে:
          <span className="ml-1">b</span>
          <span className="ml-1">2i</span>
          <span className="ml-1">ICT</span> DIVISION
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
