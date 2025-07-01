import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaMobileAlt, FaTv, FaUser, FaRupeeSign, FaFilter, FaCalendarAlt, FaSearch } from "react-icons/fa";

const Recharge = ({ tabType }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [tab, setTab] = useState(tabType || "mobile");
  const [form, setForm] = useState({
    mobile: "",
    operator: "",
    circle: "",
    subscriberId: "",
    amount: ""
  });
  const [filters, setFilters] = useState({
    status: "All",
    fromDate: "",
    toDate: "",
    search: ""
  });
  // Demo transactions data
  const transactions = [
    {
      id: "TXN123456",
      mobile: "9876543210",
      subscriberId: "SUB123456",
      amount: 199,
      date: "2025-07-01",
      operator: "Airtel",
      status: "Success",
      reference: "REF987654",
    },
    {
      id: "TXN654321",
      mobile: "9123456780",
      subscriberId: "SUB654321",
      amount: 299,
      date: "2025-06-28",
      operator: "Jio",
      status: "Failed",
      reference: "REF123789",
    },
  ];

  useEffect(() => {
    if (tabType && tab !== tabType) {
      setTab(tabType);
    }
  }, [tabType]);

  // When tab changes, update the route
  useEffect(() => {
    if (location.pathname !== `/recharge/${tab}`) {
      navigate(`/recharge/${tab}`, { replace: true });
    }
  }, [tab]);

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-gray-100 min-h-screen md:ml-60 ml-0">
      <h2 className="flex items-center mb-4 sm:mb-6 text-xl sm:text-2xl font-semibold text-left">
        {tab === "mobile" ? (
          <FaMobileAlt className="text-blue-700 mr-2" />
        ) : (
          <FaTv className="text-blue-700 mr-2" />
        )}
        {tab === "mobile" ? "Mobile Recharge" : "DTH Recharge"}
      </h2>
      <div className="flex gap-2 sm:gap-4 mb-4 sm:mb-6 flex-wrap">
        <button
          onClick={() => setTab("mobile")}
          className={`text-base sm:text-lg px-3 sm:px-4 py-1 rounded font-medium focus:outline-none ${tab === "mobile" ? "text-blue-700 font-bold" : "text-gray-800 hover:text-blue-700"}`}
        >
          Mobile
        </button>
        <button
          onClick={() => setTab("dth")}
          className={`text-base sm:text-lg px-3 sm:px-4 py-1 rounded font-medium focus:outline-none ${tab === "dth" ? "text-blue-700 font-bold" : "text-gray-800 hover:text-blue-700"}`}
        >
          DTH
        </button>
      </div>
      {/* Card Container for Form */}
      <div className="bg-white rounded-xl shadow p-4 sm:p-6 mb-6 sm:mb-8">
        <div className="flex flex-col md:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6 flex-wrap">
          {tab === "mobile" ? (
            <>
              <div className="flex items-center bg-gray-100 rounded-lg px-3 flex-1 min-w-[150px] sm:min-w-[200px] mb-2 md:mb-0">
                <FaMobileAlt className="text-gray-400 mr-2" />
                <input
                  name="mobile"
                  value={form.mobile}
                  onChange={handleFormChange}
                  placeholder="Mobile"
                  className="bg-transparent border-none outline-none w-full py-2 sm:py-3 text-base"
                />
              </div>
              <div className="flex items-center bg-gray-100 rounded-lg px-3 flex-1 min-w-[150px] sm:min-w-[200px] mb-2 md:mb-0">
                <FaTv className="text-gray-400 mr-2" />
                <select
                  name="operator"
                  value={form.operator}
                  onChange={handleFormChange}
                  className="bg-transparent border-none outline-none w-full py-2 sm:py-3 text-base"
                >
                  <option value="">Select Operator</option>
                  <option value="Airtel">Airtel</option>
                  <option value="Jio">Jio</option>
                  <option value="Vi">Vi (Vodafone Idea)</option>
                  <option value="BSNL">BSNL</option>
                  <option value="MTNL">MTNL</option>
                </select>
              </div>
              <div className="flex items-center bg-gray-100 rounded-lg px-3 flex-1 min-w-[150px] sm:min-w-[200px] mb-2 md:mb-0">
                <FaUser className="text-gray-400 mr-2" />
                <select
                  name="circle"
                  value={form.circle}
                  onChange={handleFormChange}
                  className="bg-transparent border-none outline-none w-full py-2 sm:py-3 text-base"
                >
                  <option value="">Select Circle</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Kolkata">Kolkata</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Punjab">Punjab</option>
                  <option value="UP East">UP East</option>
                  <option value="UP West">UP West</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="West Bengal">West Bengal</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar & Jharkhand">Bihar & Jharkhand</option>
                  <option value="Odisha">Odisha</option>
                  <option value="North East">North East</option>
                  <option value="Jammu & Kashmir">Jammu & Kashmir</option>
                  <option value="Others">Others</option>
                </select>
                <button className="ml-2 bg-blue-100 text-blue-700 rounded px-2 sm:px-4 py-1 font-medium text-xs sm:text-sm hover:bg-blue-200">View Plans</button>
              </div>
              <div className="flex items-center bg-gray-100 rounded-lg px-3 flex-1 min-w-[150px] sm:min-w-[200px] mb-2 md:mb-0">
                <FaRupeeSign className="text-gray-400 mr-2" />
                <input
                  name="amount"
                  value={form.amount}
                  onChange={handleFormChange}
                  placeholder="Amount"
                  className="bg-transparent border-none outline-none w-full py-2 sm:py-3 text-base"
                />
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center bg-gray-100 rounded-lg px-3 flex-1 min-w-[150px] sm:min-w-[200px] mb-2 md:mb-0">
                <FaTv className="text-gray-400 mr-2" />
                <input
                  name="operator"
                  value={form.operator}
                  onChange={handleFormChange}
                  placeholder="Operator"
                  className="bg-transparent border-none outline-none w-full py-2 sm:py-3 text-base"
                />
              </div>
              <div className="flex items-center bg-gray-100 rounded-lg px-3 flex-1 min-w-[150px] sm:min-w-[200px] mb-2 md:mb-0">
                <FaUser className="text-gray-400 mr-2" />
                <input
                  name="subscriberId"
                  value={form.subscriberId}
                  onChange={handleFormChange}
                  placeholder="Subscriber ID"
                  className="bg-transparent border-none outline-none w-full py-2 sm:py-3 text-base"
                />
                <button className="ml-2 bg-blue-100 text-blue-700 rounded px-2 sm:px-4 py-1 font-medium text-xs sm:text-sm hover:bg-blue-200">View Info</button>
              </div>
              <div className="flex items-center bg-gray-100 rounded-lg px-3 flex-1 min-w-[150px] sm:min-w-[200px] mb-2 md:mb-0">
                <FaRupeeSign className="text-gray-400 mr-2" />
                <input
                  name="amount"
                  value={form.amount}
                  onChange={handleFormChange}
                  placeholder="Amount"
                  className="bg-transparent border-none outline-none w-full py-2 sm:py-3 text-base"
                />
              </div>
            </>
          )}
        </div>
        <div className="flex justify-center">
          <button className="bg-blue-700 text-white rounded-full px-8 sm:px-10 py-2 sm:py-3 font-semibold text-base sm:text-lg shadow hover:bg-blue-800 transition w-full sm:w-auto">
            RECHARGE
          </button>
        </div>
      </div>
      {/* Card Container for Filter/Search and Table */}
      <div className="bg-white rounded-xl shadow p-4 sm:p-6">
        <div className="flex flex-col md:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6 flex-wrap">
          <div className="flex items-center bg-gray-100 rounded-lg px-3 mb-2 md:mb-0">
            <FaFilter className="text-gray-400 mr-2" />
            <select
              name="status"
              value={filters.status}
              onChange={handleFilterChange}
              className="bg-transparent border-none outline-none py-2 sm:py-3 text-base"
            >
              <option value="All">All</option>
              <option value="Success">Success</option>
              <option value="Failed">Failed</option>
              <option value="Pending">Pending</option>
            </select>
          </div>
          <div className="flex items-center bg-gray-100 rounded-lg px-3 mb-2 md:mb-0">
            <FaCalendarAlt className="text-gray-400 mr-2" />
            <input
              type="date"
              name="fromDate"
              value={filters.fromDate}
              onChange={handleFilterChange}
              className="bg-transparent border-none outline-none py-2 sm:py-3 text-base"
            />
          </div>
          <div className="flex items-center bg-gray-100 rounded-lg px-3 mb-2 md:mb-0">
            <FaCalendarAlt className="text-gray-400 mr-2" />
            <input
              type="date"
              name="toDate"
              value={filters.toDate}
              onChange={handleFilterChange}
              className="bg-transparent border-none outline-none py-2 sm:py-3 text-base"
            />
          </div>
          <div className="flex items-center bg-gray-100 rounded-lg px-3 flex-1 min-w-[150px] sm:min-w-[200px] mb-2 md:mb-0">
            <input
              name="search"
              value={filters.search}
              onChange={handleFilterChange}
              placeholder="Transaction Id or Account Number or Reference No."
              className="bg-transparent border-none outline-none w-full py-2 sm:py-3 text-base"
            />
          </div>
          <button className="bg-blue-700 text-white rounded-full px-6 sm:px-8 py-2 font-semibold text-sm sm:text-base shadow flex items-center hover:bg-blue-800 transition w-full sm:w-auto justify-center">
            <FaSearch className="mr-2" />SEARCH
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-[14px] sm:text-[15px] min-w-[600px]">
            <thead>
              <tr className="bg-gray-100">
                {tab === "mobile" ? (
                  <th className="py-2 sm:py-3 px-1 sm:px-2 font-semibold">Mobile Number</th>
                ) : (
                  <th className="py-2 sm:py-3 px-1 sm:px-2 font-semibold">Subscriber ID</th>
                )}
                <th className="py-2 sm:py-3 px-1 sm:px-2 font-semibold">Amount</th>
                <th className="py-2 sm:py-3 px-1 sm:px-2 font-semibold">Transaction ID</th>
                <th className="py-2 sm:py-3 px-1 sm:px-2 font-semibold">Recharge Date</th>
                <th className="py-2 sm:py-3 px-1 sm:px-2 font-semibold">Operator</th>
                <th className="py-2 sm:py-3 px-1 sm:px-2 font-semibold">Status</th>
                <th className="py-2 sm:py-3 px-1 sm:px-2 font-semibold">Check Status</th>
                <th className="py-2 sm:py-3 px-1 sm:px-2 font-semibold">Complain</th>
                <th className="py-2 sm:py-3 px-1 sm:px-2 font-semibold">Repeat</th>
              </tr>
            </thead>
            <tbody>
              {transactions.length === 0 ? (
                <tr>
                  <td colSpan={9} className="text-center py-4 sm:py-6 text-blue-700 font-semibold text-sm sm:text-base">
                    View Latest Transactions
                  </td>
                </tr>
              ) : (
                transactions.map((txn, idx) => (
                  <tr key={txn.id} className="border-b last:border-b-0">
                    {tab === "mobile" ? (
                      <td className="py-2 sm:py-3 px-1 sm:px-2">{txn.mobile}</td>
                    ) : (
                      <td className="py-2 sm:py-3 px-1 sm:px-2">{txn.subscriberId}</td>
                    )}
                    <td className="py-2 sm:py-3 px-1 sm:px-2">₹{txn.amount}</td>
                    <td className="py-2 sm:py-3 px-1 sm:px-2">{txn.id}</td>
                    <td className="py-2 sm:py-3 px-1 sm:px-2">{txn.date}</td>
                    <td className="py-2 sm:py-3 px-1 sm:px-2">{txn.operator}</td>
                    <td className="py-2 sm:py-3 px-1 sm:px-2">
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${txn.status === 'Success' ? 'bg-green-100 text-green-700' : txn.status === 'Failed' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'}`}>{txn.status}</span>
                    </td>
                    <td className="py-2 sm:py-3 px-1 sm:px-2">
                      <button className="text-blue-700 underline text-xs sm:text-sm">Check</button>
                    </td>
                    <td className="py-2 sm:py-3 px-1 sm:px-2">
                      <button className="text-blue-700 underline text-xs sm:text-sm">Complain</button>
                    </td>
                    <td className="py-2 sm:py-3 px-1 sm:px-2">
                      <button className="text-blue-700 underline text-xs sm:text-sm">Repeat</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Recharge;
