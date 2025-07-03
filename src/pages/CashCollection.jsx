import React from "react";


const demoData = [
  {
    amount: '₹1,200',
    transactionId: 'TXN123456',
    date: '2025-07-01',
    billerType: 'Utility',
    billerName: 'ABC Power',
    status: 'Success',
    checkStatus: 'Checked',
    complain: 'No',
    receipt: 'Download',
  },
  {
    amount: '₹800',
    transactionId: 'TXN123457',
    date: '2025-07-01',
    billerType: 'Insurance',
    billerName: 'LIC',
    status: 'Pending',
    checkStatus: 'Pending',
    complain: 'No',
    receipt: '-',
  },
  {
    amount: '₹2,500',
    transactionId: 'TXN123458',
    date: '2025-06-30',
    billerType: 'Credit Card',
    billerName: 'HDFC Bank',
    status: 'Failed',
    checkStatus: 'Failed',
    complain: 'Yes',
    receipt: '-',
  },
];

const CashCollection = () => {
  return (
    <div className="p-4 md:ml-64 md:p-6">
      <div className="bg-white rounded-xl shadow p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">Cash Collection</h2>
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
                <th className="px-4 py-2 font-semibold">Amount</th>
                <th className="px-4 py-2 font-semibold">Transaction ID</th>
                <th className="px-4 py-2 font-semibold">Date</th>
                <th className="px-4 py-2 font-semibold">BillerType</th>
                <th className="px-4 py-2 font-semibold">BillerName</th>
                <th className="px-4 py-2 font-semibold">Status</th>
                <th className="px-4 py-2 font-semibold">Check Status</th>
                <th className="px-4 py-2 font-semibold">Complain</th>
                <th className="px-4 py-2 font-semibold">Receipt</th>
              </tr>
            </thead>
            <tbody>
              {/* {demoData.map((row, idx) => (
                <tr className="border-b" key={row.transactionId}>
                  <td className="px-4 py-2">{row.amount}</td>
                  <td className="px-4 py-2">{row.transactionId}</td>
                  <td className="px-4 py-2">{row.date}</td>
                  <td className="px-4 py-2">{row.billerType}</td>
                  <td className="px-4 py-2">{row.billerName}</td>
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
          <a href="#" className="text-blue-700 font-semibold hover:underline">View Latest Transactions</a>
        </div>
      </div>
    </div>
  );
};

export default CashCollection;
