import React, { useState } from "react";
import { FaRegFileAlt } from "react-icons/fa";

const demoData = [
  {
    policyNo: "1234567890",
    name: "Amit Kumar",
    amount: "₹2,000",
    transactionId: "LIC20250701A",
    date: "2025-07-01",
    paymentMode: "UPI",
    status: "Success",
    checkStatus: "Checked",
    complain: "No",
    receipt: "Download",
  },
  {
    policyNo: "9876543210",
    name: "Priya Singh",
    amount: "₹1,500",
    transactionId: "LIC20250701B",
    date: "2025-07-01",
    paymentMode: "Netbanking",
    status: "Pending",
    checkStatus: "Pending",
    complain: "No",
    receipt: "-",
  },
  {
    policyNo: "1122334455",
    name: "Rahul Sharma",
    amount: "₹3,200",
    transactionId: "LIC20250630C",
    date: "2025-06-30",
    paymentMode: "Card",
    status: "Failed",
    checkStatus: "Failed",
    complain: "Yes",
    receipt: "-",
  },
];

const LICPremium = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="p-4 md:ml-64 md:p-6">
      <div className="flex items-center mb-6">
        <h2 className="text-2xl font-bold text-blue-900 ">LIC Premium</h2>
      </div>

      <div className="bg-white rounded shadow p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 flex items-center border rounded px-3 py-2 bg-gray-50">
            <input
              type="text"
              className="bg-transparent outline-none w-full"
              placeholder="Policy Number"
            />
          </div>
          <div className="flex-1 flex items-center border rounded px-3 py-2 bg-gray-50">
            <input
              type="email"
              className="bg-transparent outline-none w-full"
              placeholder="Email"
            />
          </div>
          <div className="flex-1 flex items-center border rounded px-3 py-2 bg-gray-50">
            <input
              type="date"
              className="bg-transparent outline-none w-full"
              placeholder="Date Of Birth"
            />
          </div>
        </div>
        <div className="flex gap-4 justify-center mb-2">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-2 rounded-full shadow transition-all">
            FETCH
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-2 rounded-full shadow transition-all">
            CANCEL
          </button>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow p-6">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <select className="border rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option>Status</option>
            <option>All</option>
            <option>Success</option>
            <option>Pending</option>
            <option>Failed</option>
          </select>
          <input
            type="date"
            className="border rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="From Date"
          />
          <input
            type="date"
            className="border rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="To Date"
          />
          <input
            type="text"
            className="border rounded px-3 py-2 flex-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Transaction Id or Account Number or Reference No."
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full shadow transition-all">
            SEARCH
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="px-4 py-2 font-semibold">Policy No.</th>
                <th className="px-4 py-2 font-semibold">Name</th>
                <th className="px-4 py-2 font-semibold">Amount</th>
                <th className="px-4 py-2 font-semibold">Transaction ID</th>
                <th className="px-4 py-2 font-semibold">Date</th>
                <th className="px-4 py-2 font-semibold">Payment Mode</th>
                <th className="px-4 py-2 font-semibold">Status</th>
                <th className="px-4 py-2 font-semibold">Check Status</th>
                <th className="px-4 py-2 font-semibold">Complain</th>
                <th className="px-4 py-2 font-semibold">Receipt</th>
              </tr>
            </thead>
            <tbody>
              {/* {demoData.map((row, idx) => (
                <tr className="border-b" key={row.transactionId}>
                  <td className="px-4 py-2">{row.policyNo}</td>
                  <td className="px-4 py-2">{row.name}</td>
                  <td className="px-4 py-2">{row.amount}</td>
                  <td className="px-4 py-2">{row.transactionId}</td>
                  <td className="px-4 py-2">{row.date}</td>
                  <td className="px-4 py-2">{row.paymentMode}</td>
                  <td className="px-4 py-2">{row.status}</td>
                  <td className="px-4 py-2">{row.checkStatus}</td>
                  <td className="px-4 py-2">{row.complain}</td>
                  <td className="px-4 py-2">{row.receipt}</td>
                </tr>
              ))} */}
            </tbody>
          </table>
        </div>
        <div className="text-center mt-4">
          <a href="#" className="text-blue-700 font-semibold hover:underline">
            View Latest Transactions
          </a>
        </div>
      </div>
    </div>
  );
};

export default LICPremium;
