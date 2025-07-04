import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RandomNoticeBoard from "./RandomNoticeBoard";

const ServicePacks = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [showKycPopup, setShowKycPopup] = useState(false);

  useEffect(() => {
    // Get token and userId from localStorage
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    async function fetchUserProfile() {
      try {
        if (!token || !userId) return;
        const res = await fetch(
          `https://dsc-backend-rd2n.onrender.com/api/users/profile/${userId}`,
          {
            headers: {
              Authorization: ` ${token}`,
            },
          }
        );
        if (res.ok) {
          const data = await res.json();
          setUser(data.user);
        }
      } catch (err) {}
    }
    fetchUserProfile();
  }, []);
  const services = [
    { img: require("../assets/bank-transfer.png"), title: "Money Transfer" },
    { img: require("../assets/wallet.png"), title: "Wallet" },
    // {img: require("../assets/Aadhaar1.png"), title: "Aadhaar" },
    {img: require("../assets/Edistric.png"), title: "E-Distric" },
    {img: require("../assets/digitalgold.png"), title: "Digital Gold" },
    {img: require("../assets/credit-card.png"), title: "Credit Card Payment" },
    {img: require("../assets/fingerprint.png"), title: "AEPS" },
    {img: require("../assets/bankcsp.png"), title: "Bank CSP" },
    {img: require("../assets/bus.png"), title: "Bus" },
    {img: require("../assets/train.png"), title: "Train" },
    { img: require("../assets/id-card.png"), title: "ID Card" },
    { img: require("../assets/bill.png"), title: "Bill" },
    { img: require("../assets/mobile.png"), title: "Mobile Charge" },
    { img: require("../assets/driving (1).png"), title: "Aadhaar Pay" },
    { img: require("../assets/bank.png"), title: "Bank" },
    { img: require("../assets/deposit.png"), title: "Deposit Money" },
     { img: require("../assets/pancard.png"), title: "Pan Card" },
    { img: require("../assets/cash.png"), title: "Cash Collection" },
        { img: require("../assets/life-insurance.png"), title: "LIC Premium" },
    { img: require("../assets/health-insurance.png"), title: "Insurance" },
     { img: require("../assets/ott.png"), title: "OTT Subscription" },
        { img: require("../assets/commerce.png"), title: "E-Gift Card" },
    { img: require("../assets/salary.png"), title: "Sell & Earn" },
  ];

  return (
    <div className="p-4 md:ml-64 md:p-6">
     

      {/* Services Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-4">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-blue-100 to-purple-200 rounded-xl p-6 shadow-lg flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer border-2 border-transparent hover:border-blue-400"
            onClick={() => {
              if (user && user.kyc_status === false) {
                navigate("/kyc-form");
              } else {
                setShowKycPopup(true);
              }
            }}
          >
            <img
              src={s.img}
              alt="service"
              className="w-20 h-20 object-contain mb-0 drop-shadow-lg"
            />
            <span className="mt-2 text-xs text-gray-700 font-medium">{s.title}</span>
          </div>
        ))}
        {/* KYC Pending Popup */}
        {showKycPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center">
              <span className="text-2xl mb-2 text-blue-700 font-bold">Service inactive</span>
              <button
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                onClick={() => setShowKycPopup(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
 {/* Dashboard UI */}
      <div className="mb-8 mt-6">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          <button className="px-6 py-2 rounded bg-[#2d317a] text-white font-semibold focus:outline-none">Today</button>
          <button className="px-6 py-2 rounded bg-[#338af3] text-white font-semibold focus:outline-none">Yesterday</button>
          <button className="px-6 py-2 rounded bg-[#338af3] text-white font-semibold focus:outline-none">Week</button>
          <button className="px-6 py-2 rounded bg-[#338af3] text-white font-semibold focus:outline-none">Month</button>
          <button className="px-6 py-2 rounded bg-[#338af3] text-white font-semibold focus:outline-none">Last Month</button>
        </div>
        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* Total Income */}
          <div className="flex items-center bg-white rounded-lg shadow p-4 min-h-[110px]">
            <img src={require("../assets/cash.png")} alt="Total Income" className="w-12 h-12 mr-4" />
            <div>
              <div className="font-semibold text-gray-800">Total Income</div>
              <div className="text-2xl font-bold text-gray-900">0</div>
            </div>
          </div>
          {/* Transaction Volume */}
          <div className="flex items-center bg-white rounded-lg shadow p-4 min-h-[110px]">
            <img src={require("../assets/commerce.png")} alt="Transaction Volume" className="w-12 h-12 mr-4" />
            <div>
              <div className="font-semibold text-gray-800">Transaction Volume</div>
              <div className="text-2xl font-bold text-gray-900">0</div>
            </div>
          </div>
          {/* Count */}
          <div className="flex items-center bg-white rounded-lg shadow p-4 min-h-[110px]">
            <img src={require("../assets/bankcsp.png")} alt="Count" className="w-12 h-12 mr-4" />
            <div>
              <div className="font-semibold text-gray-800">Count</div>
              <div className="text-2xl font-bold text-gray-900">0</div>
            </div>
          </div>
          {/* Complaints */}
          <div className="flex items-center bg-white rounded-lg shadow p-4 min-h-[110px]">
            <img src={require("../assets/boy.png")} alt="Complaints" className="w-12 h-12 mr-4" />
            <div>
              <div className="font-semibold text-gray-800">Complaints</div>
              <div className="text-2xl font-bold text-gray-900">0</div>
            </div>
          </div>
        </div>
      </div>
      {/* More Section */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">More</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          <RandomNoticeBoard />
        </div>
      </div>
    </div>
  );
};

export default ServicePacks;

