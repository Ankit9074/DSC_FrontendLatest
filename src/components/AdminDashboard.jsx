import React, { useEffect, useState } from "react";
import API from "../api";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [fundInput, setFundInput] = useState({}); // track fund inputs per user
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await API.get("/admin/users");
      setUsers(res.data);
    } catch (error) {
      alert("Unauthorized or token missing.");
    }
    setLoading(false);
  };

  const handleActivate = async (id) => {
    await API.put(`/admin/activate/${id}`);
    fetchUsers();
  };

  const handleDeactivate = async (id) => {
    await API.put(`/admin/deactivate/${id}`);
    fetchUsers();
  };

  const handleAddFunds = async (id) => {
    const amount = Number(fundInput[id]);
    if (!amount || amount <= 0) return alert("Enter valid amount");
    await API.put(`/admin/funds/${id}`, { amount });
    fetchUsers();
  };

  const handleDeleteUser = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      await API.delete(`/admin/user/${id}`);
      fetchUsers();
    } catch (error) {
      alert("Failed to delete user.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    // Clear all cookies
    document.cookie.split(";").forEach((c) => {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`);
    });
    window.location.href = "/";
  };

  // Filter users by search
  const filteredUsers = users.filter((u) => {
    const q = search.toLowerCase();
    return (
      u.name?.toLowerCase().includes(q) ||
      u.email?.toLowerCase().includes(q) ||
      u.phone?.toLowerCase().includes(q)
    );
  });

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-700 text-white px-6 py-4 flex items-center justify-between shadow">
        <div className="text-xl font-bold tracking-wide">Admin Dashboard</div>
        <div className="flex items-center gap-4">
          <a href="/admin-dashboard" className="hover:underline">Users</a>
          <button onClick={handleLogout} className="hover:underline bg-transparent border-none cursor-pointer text-white">Logout</button>
        </div>
      </nav>
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-6 mt-8">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center flex items-center justify-center gap-2">
          <span>Admin Panel</span>
        </h2>
        <div className="mb-4 flex justify-end">
          <input
            type="text"
            placeholder="Search by name, email, or phone..."
            className="w-72 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg overflow-hidden">
            <thead className="bg-blue-100">
              <tr>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-left">Phone</th>
                <th className="py-3 px-4 text-center">KYC</th>
                <th className="py-3 px-4 text-center">Status</th>
                <th className="py-3 px-4 text-center">Wallet</th>
                <th className="py-3 px-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={7} className="py-10 text-center">
                    <div className="flex justify-center items-center">
                      <div className="w-10 h-10 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
                    </div>
                  </td>
                </tr>
              ) : filteredUsers.map((u) => (
                <tr key={u._id} className="border-b hover:bg-blue-50 transition">
                  <td className="py-2 px-4">{u.name}</td>
                  <td className="py-2 px-4">{u.email}</td>
                  <td className="py-2 px-4">{u.phone}</td>
                  <td className="py-2 px-4 text-center">{u.kyc_status ? <span className="text-green-600 font-bold">✔</span> : <span className="text-red-500 font-bold">✘</span>}</td>
                  <td className="py-2 px-4 text-center">{u.is_active ? <span className="text-green-600 font-semibold">Active</span> : <span className="text-gray-500">Inactive</span>}</td>
                  <td className="py-2 px-4 text-center">₹{u.wallet_balance}</td>
                  <td className="py-2 px-4 text-center">
                    <div className="flex flex-col gap-2 items-center">
                      {u.is_active ? (
                        <button onClick={() => handleDeactivate(u._id)} className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded text-xs font-semibold">Deactivate</button>
                      ) : (
                        <button onClick={() => handleActivate(u._id)} className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-xs font-semibold">Activate</button>
                      )}
                      <div className="flex gap-2 mt-1">
                        <input
                          type="number"
                          placeholder="Add ₹"
                          className="w-20 px-2 py-1 border rounded text-xs focus:outline-none focus:ring-2 focus:ring-blue-400"
                          value={fundInput[u._id] || ""}
                          onChange={(e) => setFundInput({ ...fundInput, [u._id]: e.target.value })}
                        />
                        <button onClick={() => handleAddFunds(u._id)} className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">Add</button>
                      </div>
                      <button onClick={() => handleDeleteUser(u._id)} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs font-semibold mt-1">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
              {!loading && filteredUsers.length === 0 && (
                <tr>
                  <td colSpan={7} className="text-center py-6 text-gray-400">No users found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
