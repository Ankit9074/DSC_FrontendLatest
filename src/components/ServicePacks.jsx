import React from "react";
import RandomNoticeBoard from "./RandomNoticeBoard";

const ServicePacks = () => {
  const services = [
    { img: require("../assets/bank-transfer.png"), title: "Money Transfer" },
    { img: require("../assets/wallet.png"), title: "Wallet" },
    {img: require("../assets/Aadhaar1.png"), title: "Aadhaar" },
    {img: require("../assets/Edistric.png"), title: "E-Distric" },
    {img: require("../assets/digitalgold.png"), title: "Digital Gold" },
    {img: require("../assets/credit-card.png"), title: "Credit Card Payment" },
    {img: require("../assets/fingerprint.png"), title: "AEPS" },
    {img: require("../assets/bankcsp.png"), title: "Bank CSP" },
    {img: require("../assets/bus.png"), title: "Bus" },
    {img: require("../assets/train.png"), title: "Train" },
    {img: require("../assets/Aadhaar1.png"), title: "Aadhaar" },
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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-4">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-blue-100 to-purple-200 rounded-xl p-6 shadow-lg flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer border-2 border-transparent hover:border-blue-400"
          >
            <img
              src={s.img}
              alt="service"
              className="w-20 h-20 object-contain mb-0 drop-shadow-lg"
            />
            <span className="mt-2 text-xs text-gray-700 font-medium">{s.title}</span>
          </div>
        ))}
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

