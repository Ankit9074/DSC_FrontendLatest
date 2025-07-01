import React, { useState } from "react";

const demoData = [
  {
    customerMobile: "9876543210",
    amount: "₹5,000",
    transactionId: "CC20250701A",
    date: "2025-07-01",
    customerName: "Rohit Verma",
    network: "VISA",
    cardNumber: "XXXX-XXXX-XXXX-1234",
    bankRRN: "BRN123456",
    source: "Web",
    status: "Success",
    complain: "No",
    receipt: "Download",
    checkStatus: "Checked",
    claim: "-",
  },
  {
    customerMobile: "9123456780",
    amount: "₹2,200",
    transactionId: "CC20250701B",
    date: "2025-07-01",
    customerName: "Sneha Patel",
    network: "Mastercard",
    cardNumber: "XXXX-XXXX-XXXX-5678",
    bankRRN: "BRN654321",
    source: "App",
    status: "Pending",
    complain: "No",
    receipt: "-",
    checkStatus: "Pending",
    claim: "-",
  },
  {
    customerMobile: "9988776655",
    amount: "₹3,800",
    transactionId: "CC20250630C",
    date: "2025-06-30",
    customerName: "Aman Gupta",
    network: "VISA",
    cardNumber: "XXXX-XXXX-XXXX-4321",
    bankRRN: "BRN789012",
    source: "Web",
    status: "Failed",
    complain: "Yes",
    receipt: "-",
    checkStatus: "Failed",
    claim: "Initiated",
  },
];

const CreditCard = () => {
  const [cardType, setCardType] = useState("VISA");
  return (
    <div className="p-4 md:ml-64 md:p-6">
      <div className="bg-white rounded-xl shadow p-6 mb-6">
        <div className="flex gap-4 mb-6">
          <button
            className={`flex-1 py-2 rounded bg-gray-100 border-2 ${cardType === "VISA" ? "border-blue-500" : "border-transparent"}`}
            onClick={() => setCardType("VISA")}
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="VISA" className="h-8 mx-auto" />
          </button>
          <button
            className={`flex-1 py-2 rounded bg-gray-100 border-2 ${cardType === "Mastercard" ? "border-orange-500" : "border-transparent"}`}
            onClick={() => setCardType("Mastercard")}
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="Mastercard" className="h-8 mx-auto" />
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <input type="text" className="border rounded px-3 py-2 flex-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Card Number *" />
          <input type="text" className="border rounded px-3 py-2 flex-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Mobile *" />
          <input type="text" className="border rounded px-3 py-2 flex-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Name *" />
        </div>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <input type="text" className="border rounded px-3 py-2 flex-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Amount *" />
          <input type="text" className="border rounded px-3 py-2 flex-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Payee Name *" />
          <input type="text" className="border rounded px-3 py-2 flex-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Remarks *" />
        </div>
        <div className="text-gray-700 text-sm mb-4">
          Note: Kindly cross-check the card number before proceeding with the transaction. If deposited in the wrong card, we will not be responsible for the retrieval of the amount.
        </div>
        <div className="flex justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-2 rounded-full shadow transition-all">GET OTP</button>
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
          <input type="date" className="border rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="From Date" />
          <input type="date" className="border rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="To Date" />
          <input type="text" className="border rounded px-3 py-2 flex-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Transaction Id or Account Number or Reference No." />
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded shadow transition-all">SEARCH</button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="px-4 py-2 font-semibold">Customer Mobile</th>
                <th className="px-4 py-2 font-semibold">Amount</th>
                <th className="px-4 py-2 font-semibold">Transaction ID</th>
                <th className="px-4 py-2 font-semibold">Date</th>
                <th className="px-4 py-2 font-semibold">Customer Name</th>
                <th className="px-4 py-2 font-semibold">Network</th>
                <th className="px-4 py-2 font-semibold">Card Number</th>
                <th className="px-4 py-2 font-semibold">Bank RRN</th>
                <th className="px-4 py-2 font-semibold">Source</th>
                <th className="px-4 py-2 font-semibold">Status</th>
                <th className="px-4 py-2 font-semibold">Complain</th>
                <th className="px-4 py-2 font-semibold">Receipt</th>
                <th className="px-4 py-2 font-semibold">Check Status</th>
                <th className="px-4 py-2 font-semibold">Claim</th>
              </tr>
            </thead>
            <tbody>
              {demoData.map((row, idx) => (
                <tr className="border-b" key={row.transactionId}>
                  <td className="px-4 py-2">{row.customerMobile}</td>
                  <td className="px-4 py-2">{row.amount}</td>
                  <td className="px-4 py-2">{row.transactionId}</td>
                  <td className="px-4 py-2">{row.date}</td>
                  <td className="px-4 py-2">{row.customerName}</td>
                  <td className="px-4 py-2">{row.network}</td>
                  <td className="px-4 py-2">{row.cardNumber}</td>
                  <td className="px-4 py-2">{row.bankRRN}</td>
                  <td className="px-4 py-2">{row.source}</td>
                  <td className="px-4 py-2">{row.status}</td>
                  <td className="px-4 py-2">{row.complain}</td>
                  <td className="px-4 py-2">{row.receipt}</td>
                  <td className="px-4 py-2">{row.checkStatus}</td>
                  <td className="px-4 py-2">{row.claim}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-center mt-4">
          <a href="#" className="text-blue-700 font-semibold hover:underline">View Latest Transactions</a>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
