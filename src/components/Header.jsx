import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Boy from "../assets/boy.png"

const Header = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [user, setUser] = useState(null);
  const [showKycPopup, setShowKycPopup] = useState(false);
  const [showEmailDetails, setShowEmailDetails] = useState(false);
  const [showCallDetails, setShowCallDetails] = useState(false);
  const profileRef = useRef();
  const navigate = useNavigate();

  // Get token and userId from localStorage (set these after login)
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    // Fetch user profile
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
          // Check KYC status after user is set
          if (data.user && data.user.kyc_status === false) {
            setShowKycPopup(false);
            navigate("/kyc-form");
          }
        }
      } catch (err) {}
    }
    fetchUserProfile();
  }, []);

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
        <button className="md:hidden mb-2 self-start p-2 rounded bg-blue-100 text-blue-700 font-bold">
          ☰
        </button>
        <input
          type="text"
          placeholder="Search..."
          className="border border-blue-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 px-4 py-2 rounded-lg transition-all duration-200 w-full md:w-64 text-sm shadow-sm"
        />
        <span className="hidden md:inline text-sm font-bold text-gray-700">
          {user
            ? `Hello ${user.first_name || user.name || "User"}!`
            : "Hello User!"}
        </span>
      </div>

      <div className="flex items-center gap-2 md:gap-4" ref={profileRef}>
        {/* Email and Call Option */}
        <div className="flex items-center gap-2">
          <button
            className="p-2 rounded-full hover:bg-gray-100 transition relative"
            onClick={() => setShowEmailDetails((prev) => !prev)}
            title="Email"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/><polyline points="3 7 12 13 21 7" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
          </button>
          <button
            className="p-2 rounded-full hover:bg-gray-100 transition relative"
            onClick={() => setShowCallDetails((prev) => !prev)}
            title="Call"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M22 16.92V21a1 1 0 0 1-1.09 1A19.91 19.91 0 0 1 3 5.09 1 1 0 0 1 4 4h4.09a1 1 0 0 1 1 .75l1.13 4.52a1 1 0 0 1-.29 1L8.21 12.21a16 16 0 0 0 6.58 6.58l1.94-1.94a1 1 0 0 1 1-.29l4.52 1.13a1 1 0 0 1 .75 1V21z" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
          </button>
        </div>
        {/* Email Details Popup */}
        {showEmailDetails && (
          <div className="absolute top-14 right-0 bg-white border border-gray-200 rounded shadow-lg p-4 z-50 min-w-[220px] flex flex-col items-start">
            <span className="font-semibold text-gray-700 mb-2">Contact Email</span>
            <span className="text-blue-700 select-all">support@dscpay.in</span>
            <button className="mt-2 text-xs text-blue-600 hover:underline" onClick={() => setShowEmailDetails(false)}>Close</button>
          </div>
        )}
        {/* Call Details Popup */}
        {showCallDetails && (
          <div className="absolute top-14 right-0 bg-white border border-gray-200 rounded shadow-lg p-4 z-50 min-w-[220px] flex flex-col items-start">
            <span className="font-semibold text-gray-700 mb-2">Contact Number</span>
            <span className="text-blue-700 select-all">+91-9876543210</span>
            <button className="mt-2 text-xs text-blue-600 hover:underline" onClick={() => setShowCallDetails(false)}>Close</button>
          </div>
        )}
        {/* KYC Incomplete Option */}
        {user && user.kyc_status === false && (
          <button
            className="flex items-center gap-1 bg-orange-50 border border-orange-300 text-orange-600 px-3 py-1 rounded-full font-semibold text-sm hover:bg-orange-100 transition mr-2"
            onClick={() => navigate('/kyc-form')}
          >
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="inline-block align-middle"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/><line x1="12" y1="8" x2="12" y2="12" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="16" r="1" fill="currentColor"/></svg>
            <span>KYC Incomplete</span>
          </button>
        )}
        <button className="relative p-2 rounded-full hover:bg-blue-50 transition group">
          <span
            className="text-xl"
            onClick={() => {
              if (user && user.kyc_status === false) {
                navigate("/kyc-form");
              } else {
                setShowKycPopup(true);
              }
            }}
          >
            🔔
          </span>
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5 group-hover:scale-110 transition-transform">
            1
          </span>
        </button>
        <span
          className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded-full text-blue-700 font-semibold text-sm cursor-pointer"
          onClick={() => {
            if (user && user.kyc_status === false) {
              navigate("/kyc-form");
            } else {
              setShowKycPopup(true);
            }
          }}
        >
          💰 <span>{user ? user.wallet_balance : 0}</span>
        </span>
        <span
          className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded-full text-blue-700 font-semibold text-sm cursor-pointer"
          onClick={() => {
            if (user && user.kyc_status === false) {
              navigate("/kyc-form");
            } else {
              setShowKycPopup(true);
            }
          }}
        >
          👜 <span>0</span>
        </span>
      {/* KYC Pending Popup */}
      {showKycPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center">
            <span className="text-2xl mb-2 text-blue-700 font-bold">Pending by Admin</span>
            <button
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              onClick={() => setShowKycPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
        <div className="relative">
          <div
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-full font-bold shadow-md text-sm cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setShowProfile((prev) => !prev)}
          >
            {user
              ? user.first_name
                ? user.first_name[0] + (user.last_name ? user.last_name[0] : "")
                : user.name
                ? user.name[0]
                : "U"
              : "HU"}
          </div>
          {showProfile && (
            <div className="fixed md:absolute inset-0 md:inset-auto md:right-0 md:mt-2 flex md:block z-50">
              <div
                className="flex-1 md:hidden"
                onClick={() => setShowProfile(false)}
              ></div>
              <div className="w-full max-w-xs md:w-96 bg-white rounded-t-xl md:rounded-xl shadow-2xl p-4 animate-fade-in flex flex-col gap-2 mx-auto md:mx-0 md:ml-auto relative">
                {/* Mobile close button */}
                <button
                  className="absolute top-2 right-2 md:hidden text-gray-500 hover:text-blue-700 text-2xl font-bold z-10"
                  onClick={() => setShowProfile(false)}
                  aria-label="Close profile"
                >
                  &times;
                </button>
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={Boy}
                    alt="Profile"
                    className="h-12 w-12 rounded-full border"
                  />
                  <div>
                    <div className="font-bold text-blue-900 text-lg">
                      {user ? user.first_name || user.name : "Welcome"}
                    </div>
                    <div className="text-sm text-gray-700">
                      {user ? user.email : ""}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm mb-2">
                  <div className="font-semibold text-gray-600">Name:</div>
                  <div>{user ? user.first_name + ' ' + user.last_name : ''}</div>
                  <div className="font-semibold text-gray-600">Email:</div>
                  <div>{user ? user.email : ''}</div>
                  <div className="font-semibold text-gray-600">Phone:</div>
                  <div>{user ? user.phone : ''}</div>
                  <div className="font-semibold text-gray-600">DOB:</div>
                  <div>{user && user.date_of_birth ? new Date(user.date_of_birth).toLocaleDateString() : ''}</div>
                  <div className="font-semibold text-gray-600">Aadhaar No:</div>
                  <div>{user ? user.aadhaar_no : ''}</div>
                  <div className="font-semibold text-gray-600">PAN No:</div>
                  <div>{user ? user.pan_number : ''}</div>
                  <div className="font-semibold text-gray-600">Address:</div>
                  <div>{user ? user.address : ''}</div>
                  <div className="font-semibold text-gray-600">Pincode:</div>
                  <div>{user ? user.pincode : ''}</div>
                  <div className="font-semibold text-gray-600">City:</div>
                  <div>{user ? user.city : ''}</div>
                  <div className="font-semibold text-gray-600">State:</div>
                  <div>{user ? user.state : ''}</div>
                  <div className="font-semibold text-gray-600">Country:</div>
                  <div>{user ? user.country : ''}</div>
                  <div className="font-semibold text-gray-600">Business Name:</div>
                  <div>{user ? user.businessName : ''}</div>
                  <div className="font-semibold text-gray-600">Bank Account:</div>
                  <div>{user ? user.bankAccount : ''}</div>
                  <div className="font-semibold text-gray-600">Bank IFSC:</div>
                  <div>{user ? user.bankIfsc : ''}</div>
                  <div className="font-semibold text-gray-600">Wallet Balance:</div>
                  <div>₹ {user ? user.wallet_balance : 0}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <span className="md:hidden block text-sm font-bold text-gray-700">
        {user
          ? `Hello ${user.first_name || user.name || "User"}!`
          : "Hello User!"}
      </span>
    </header>
  );
};

export default Header;
