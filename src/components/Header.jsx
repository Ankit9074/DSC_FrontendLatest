import React, { useState, useRef, useEffect } from "react";

const Header = () => {
  const [showProfile, setShowProfile] = useState(false);
  const profileRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfile(false);
      }
    }
    if (showProfile) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showProfile]);

  return (
    <header className="flex flex-col gap-3 md:flex-row justify-between items-center p-4 bg-white shadow-lg pl-0 md:pl-64 sticky top-0 z-40 transition-all duration-300 w-full">
      <div className="flex flex-col w-full md:flex-row md:w-auto gap-2 md:gap-4 items-center ml-[20px] md:ml-9">
        {/* Toggle button for mobile view (example, replace with your actual toggle if needed) */}
        <button className="md:hidden mb-2 self-start p-2 rounded bg-blue-100 text-blue-700 font-bold">☰</button>
        <input
          type="text"
          placeholder="Search..."
          className="border border-blue-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 px-4 py-2 rounded-lg transition-all duration-200 w-full md:w-64 text-sm shadow-sm"
        />
        <span className="hidden md:inline text-sm font-bold text-gray-700">Hello User!</span>
      </div>

      <div className="flex items-center gap-2 md:gap-4" ref={profileRef}>
        <button className="relative p-2 rounded-full hover:bg-blue-50 transition group">
          <span className="text-xl">🔔</span>
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5 group-hover:scale-110 transition-transform">1</span>
        </button>
        <span className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded-full text-blue-700 font-semibold text-sm">
          💰 <span>0</span>
        </span>
        <span className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded-full text-blue-700 font-semibold text-sm">
          👜 <span>0</span>
        </span>
        <div className="relative">
          <div
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-full font-bold shadow-md text-sm cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setShowProfile((prev) => !prev)}
          >
            HU
          </div>
          {showProfile && (
            <div className="fixed md:absolute inset-0 md:inset-auto md:right-0 md:mt-2 flex md:block z-50">
              <div className="flex-1 md:hidden" onClick={() => setShowProfile(false)}></div>
              <div className="w-full max-w-xs md:w-80 bg-white rounded-t-xl md:rounded-xl shadow-2xl p-4 animate-fade-in flex flex-col gap-2 mx-auto md:mx-0 md:ml-auto relative">
                {/* Mobile close button */}
                <button
                  className="absolute top-2 right-2 md:hidden text-gray-500 hover:text-blue-700 text-2xl font-bold z-10"
                  onClick={() => setShowProfile(false)}
                  aria-label="Close profile"
                >
                  &times;
                </button>
                <div className="flex items-center gap-3 mb-2">
                  <img src="https://ui-avatars.com/api/?name=Hello+User" alt="Profile" className="h-12 w-12 rounded-full border" />
                  <div>
                    <div className="font-bold text-blue-900 text-lg">Welcome</div>
                    <div className="text-sm text-gray-700">Hello User</div>
                  </div>
                </div>
                <div className="flex gap-2 mb-2">
                  <div className="flex-1 flex flex-col items-center border-r">
                    <span className="text-xs text-gray-500">Wallet Balance</span>
                    <span className="font-bold text-lg">₹ 0</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center">
                    <span className="text-xs text-gray-500">Coins</span>
                    <span className="font-bold text-lg">0</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center">
                    <span className="text-xs text-red-500">Coin Expiring</span>
                    <span className="font-bold text-lg text-red-500">0</span>
                  </div>
                </div>
                <hr />
                <div className="flex flex-col gap-1">
                  <button className="text-left py-2 px-3 rounded hover:bg-blue-50 font-medium">Profile</button>
                  <button className="text-left py-2 px-3 rounded hover:bg-blue-50 font-medium">My Wallet</button>
                  <button className="text-left py-2 px-3 rounded hover:bg-blue-50 font-medium">Reports - Accounts</button>
                  <button className="text-left py-2 px-3 rounded hover:bg-blue-50 font-medium">Reports - Services</button>
                  <button className="text-left py-2 px-3 rounded hover:bg-blue-50 font-medium">Deal Sheet</button>
                  <button className="text-left py-2 px-3 rounded hover:bg-blue-50 font-medium">Help Center</button>
                  <button className="text-left py-2 px-3 rounded hover:bg-blue-50 font-medium">Notifications</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <span className="md:hidden block text-sm font-bold text-gray-700">Hello User!</span>
    </header>
  );
};

export default Header;
