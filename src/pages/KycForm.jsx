import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

const KycForm = () => {
  const [aadhaar_no, setAadhaar] = useState("");
  const [profile_image, setImage] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [pan_number, setPanNumber] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [date_of_birth, setDOB] = useState("");
  const navigate = useNavigate();

  const handleKyc = async () => {
    const userId = JSON.parse(atob(localStorage.getItem("token").split(".")[1])).id;
    const res = await API.put(`/users/kyc/${userId}`, {
      aadhaar_no,
      profile_image,
      first_name,
      last_name,
      pan_number,
      address,
      pincode,
      city,
      state,
      country,
      date_of_birth
    });
    alert(res.data.message);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-700">KYC Form</h2>
        <form onSubmit={e => { e.preventDefault(); handleKyc(); }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {/* First Name */}
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 20 20"><path d="M10 10a4 4 0 100-8 4 4 0 000 8zm0 2c-4.418 0-8 2.239-8 5v1a1 1 0 001 1h14a1 1 0 001-1v-1c0-2.761-3.582-5-8-5z"/></svg>
              </span>
              <input
                type="text"
                placeholder="First Name"
                className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={first_name}
                onChange={e => setFirstName(e.target.value)}
              />
            </div>
            {/* Last Name */}
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 20 20"><path d="M10 10a4 4 0 100-8 4 4 0 000 8zm0 2c-4.418 0-8 2.239-8 5v1a1 1 0 001 1h14a1 1 0 001-1v-1c0-2.761-3.582-5-8-5z"/></svg>
              </span>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={last_name}
                onChange={e => setLastName(e.target.value)}
              />
            </div>
            {/* PAN Number */}
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 20 20"><path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm2 0v10h12V5H4zm2 2h8v2H6V7zm0 4h5v2H6v-2z"/></svg>
              </span>
              <input
                type="text"
                placeholder="PAN Number"
                className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={pan_number}
                onChange={e => setPanNumber(e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Address */}
            <div className="relative col-span-2">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a6 6 0 016 6c0 4.418-6 10-6 10S4 12.418 4 8a6 6 0 016-6zm0 8a2 2 0 100-4 2 2 0 000 4z"/></svg>
              </span>
              <input
                type="text"
                placeholder="Address"
                className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={address}
                onChange={e => setAddress(e.target.value)}
              />
            </div>
            {/* Pincode */}
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 20 20"><path d="M5 8a5 5 0 1110 0A5 5 0 015 8zm5 7a7 7 0 100-14 7 7 0 000 14z"/></svg>
              </span>
              <input
                type="text"
                placeholder="Pincode"
                className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={pincode}
                onChange={e => setPincode(e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {/* City */}
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a6 6 0 016 6c0 4.418-6 10-6 10S4 12.418 4 8a6 6 0 016-6zm0 8a2 2 0 100-4 2 2 0 000 4z"/></svg>
              </span>
              <input
                type="text"
                placeholder="City"
                className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={city}
                onChange={e => setCity(e.target.value)}
              />
            </div>
            {/* State */}
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a6 6 0 016 6c0 4.418-6 10-6 10S4 12.418 4 8a6 6 0 016-6zm0 8a2 2 0 100-4 2 2 0 000 4z"/></svg>
              </span>
              <input
                type="text"
                placeholder="State"
                className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={state}
                onChange={e => setState(e.target.value)}
              />
            </div>
            {/* Country */}
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a6 6 0 016 6c0 4.418-6 10-6 10S4 12.418 4 8a6 6 0 016-6zm0 8a2 2 0 100-4 2 2 0 000 4z"/></svg>
              </span>
              <input
                type="text"
                placeholder="Country"
                className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={country}
                onChange={e => setCountry(e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Date of Birth */}
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 20 20"><path d="M6 2a1 1 0 00-1 1v1H5a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H8V3a1 1 0 00-2 0zm8 4v10H6V6h8z"/></svg>
              </span>
              <input
                type="date"
                className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={date_of_birth}
                onChange={e => setDOB(e.target.value)}
              />
            </div>
            {/* Aadhaar Number */}
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 20 20"><path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm2 0v10h12V5H4zm2 2h8v2H6V7zm0 4h5v2H6v-2z"/></svg>
              </span>
              <input
                type="text"
                placeholder="Aadhaar Number"
                className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={aadhaar_no}
                onChange={e => setAadhaar(e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* Profile Image URL */}
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 20 20"><path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm0 2h12v10H4V5zm2 2a2 2 0 114 0 2 2 0 01-4 0zm0 6l2.293-2.293a1 1 0 011.414 0L14 13h-8z"/></svg>
              </span>
              <input
                type="text"
                placeholder="Profile Image URL"
                className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={profile_image}
                onChange={e => setImage(e.target.value)}
              />
            </div>
            {profile_image && (
              <div className="flex justify-center items-center">
                <img src={profile_image} alt="Profile Preview" className="h-20 w-20 rounded-full object-cover border-2 border-blue-400" />
              </div>
            )}
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-2 rounded transition duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default KycForm;
