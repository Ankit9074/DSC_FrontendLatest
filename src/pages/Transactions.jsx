import React, { useEffect, useState } from "react";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    async function fetchTransactions() {
      setLoading(true);
      setError(null);
      try {
        if (!token || !userId) return;
        const res = await fetch(
          `https://dsc-backend-rd2n.onrender.com/api/users/transactions/${userId}`,
          {
            headers: {
              Authorization: ` ${token}`,
            },
          }
        );
        if (res.ok) {
          const data = await res.json();
          setTransactions(data.transactions || []);
        } else {
          setError("Failed to fetch transactions");
        }
      } catch (err) {
        setError("Error fetching transactions");
      }
      setLoading(false);
    }
    fetchTransactions();
  }, [token, userId]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 py-10">
      <div className="max-w-3xl mx-auto bg-white/80 rounded-xl shadow-lg p-6 mt-8 backdrop-blur-md">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Transaction History</h2>
        {loading ? (
          <div className="text-gray-600">Loading...</div>
        ) : error ? (
          <div className="text-red-600">{error}</div>
        ) : transactions.length === 0 ? (
          <div className="text-gray-600">No transactions found.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 rounded-lg">
              <thead className="bg-blue-50">
                <tr>
                  <th className="px-4 py-2 text-left text-blue-800">Date</th>
                  <th className="px-4 py-2 text-left text-blue-800">Type</th>
                  <th className="px-4 py-2 text-left text-blue-800">Amount</th>
                  <th className="px-4 py-2 text-left text-blue-800">Description</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((txn) => (
                  <tr key={txn._id} className="border-t hover:bg-blue-50 transition">
                    <td className="px-4 py-2">{new Date(txn.date).toLocaleString()}</td>
                    <td className={`px-4 py-2 font-semibold ${txn.type === 'credit' ? 'text-green-600' : 'text-red-600'}`}>{txn.type}</td>
                    <td className="px-4 py-2">₹ {txn.amount}</td>
                    {/* <td className="px-4 py-2">{txn.description}</td> 
                    */}
                    <td>Funds added</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Transactions;
