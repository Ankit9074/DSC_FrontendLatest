import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

const UserAuth = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogin = async () => {
    setLoading(true);
    try {
      const res = await API.post("/users/login", {
        email: form.email,
        password: form.password
      });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data.userId);
      alert("Login successful");
      navigate("/");
    } catch (err) {
      alert("Login failed");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-700">
          Welcome To{" "}
          <span className="text-cyan-500">E Tailed Digital Services PVT LTD</span>
        </h2>
        <div className="mb-4">
          <input
            name="email"
            placeholder="email*"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={form.email}
          />
        </div>
        <div className="mb-6">
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
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition duration-200"
          disabled={loading}
        >
          {loading ? "Logging in..." : "LOG IN"}
        </button>
        <div className="text-center mt-4">
          <span>Don't have an account? </span>
          <a href="/signup" className="text-blue-600 font-semibold hover:underline">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserAuth;
