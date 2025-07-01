import React, { useState } from "react";
import API from "../api";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    setLoading(true);
    try {
      const res = await API.post("/users/signup", form);
      alert(res.data.message);
    } catch (err) {
      alert("Signup failed");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-700">Sign Up</h2>
        <div className="mb-4">
          <input
            name="name"
            placeholder="Name*"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={form.name}
          />
        </div>
        <div className="mb-4">
          <input
            name="email"
            placeholder="Email*"
            type="email"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={form.email}
          />
        </div>
        <div className="mb-4">
          <input
            name="phone"
            placeholder="Phone*"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={form.phone}
          />
        </div>
        <div className="mb-4">
          <input
            name="password"
            placeholder="Password*"
            type="password"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={form.password}
          />
        </div>
        <button
          onClick={handleSignup}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition duration-200"
          disabled={loading}
        >
          {loading ? "Signing up..." : "Sign Up"}
        </button>
        <div className="text-center mt-4">
          <span>Already have an account? </span>
          <a href="/login" className="text-blue-600 font-semibold hover:underline">Log In</a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
