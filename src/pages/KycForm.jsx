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
  const [businessName, setBusinessName] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [bankIfsc, setBankIfsc] = useState("");
  const [panDemoImg, setPanDemoImg] = useState("");
  const [aadhaarFrontDemoImg, setAadhaarFrontDemoImg] = useState("");
  const [aadhaarBackDemoImg, setAadhaarBackDemoImg] = useState("");
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
      date_of_birth,
      businessName,
      bankAccount,
      bankIfsc
    });
    alert(res.data.message);
    navigate("/");
  };

  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8">
        {!showForm ? (
          <>
            <div className="flex w-full mb-8">
              <div className="flex-1 flex flex-col items-center">
                <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold bg-blue-600 text-white">1</div>
                <span className="mt-2 font-semibold text-blue-700">KYC Documents</span>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center font-bold">2</div>
                <span className="mt-2 text-gray-500 font-semibold">My Profile</span>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center font-bold">3</div>
                <span className="mt-2 text-gray-500 font-semibold">KYC Video</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* PAN Card */}
              <div className="border-2 border-blue-300 rounded-lg flex flex-col items-center p-6 relative">
                <div className="text-lg font-semibold mb-2">PAN Card</div>
                <div className="text-gray-500 mb-2">KYC Pending</div>
                <div className="flex flex-col items-center justify-center flex-1 w-full">
                  <label className="w-20 h-20 border-2 border-dashed border-blue-300 rounded-full flex items-center justify-center text-4xl text-blue-400 bg-blue-50 mb-2 cursor-pointer relative">
                    <input type="file" accept="image/*" style={{ display: 'none' }} onChange={e => {
                      const file = e.target.files[0];
                      if (file) {
                        const url = URL.createObjectURL(file);
                        setPanDemoImg(url);
                      }
                    }} />
                    +
                    {panDemoImg && (
                      <img src={panDemoImg} alt="PAN Preview" className="absolute top-0 left-0 w-full h-full object-cover rounded-full z-10" style={{zIndex:2}} />
                    )}
                  </label>
                  <div className="text-xs text-gray-400">Drag files to upload / <span className="text-blue-500 cursor-pointer">Browse</span></div>
                </div>
              </div>
              {/* Aadhaar Card Front */}
              <div className="border-2 border-blue-300 rounded-lg flex flex-col items-center p-6 relative">
                <div className="text-lg font-semibold mb-2">Aadhaar Card Front</div>
                <div className="text-gray-500 mb-2">KYC Uploaded</div>
                <div className="flex flex-col items-center justify-center flex-1 w-full">
                  <label className="w-20 h-20 border-2 border-dashed border-blue-300 rounded-full flex items-center justify-center text-4xl text-blue-400 bg-blue-50 mb-2 cursor-pointer relative">
                    <input type="file" accept="image/*" style={{ display: 'none' }} onChange={e => {
                      const file = e.target.files[0];
                      if (file) {
                        const url = URL.createObjectURL(file);
                        setAadhaarFrontDemoImg(url);
                      }
                    }} />
                    +
                    {aadhaarFrontDemoImg && (
                      <img src={aadhaarFrontDemoImg} alt="Aadhaar Front Preview" className="absolute top-0 left-0 w-full h-full object-cover rounded-full z-10" style={{zIndex:2}} />
                    )}
                  </label>
                  <div className="text-xs text-gray-400">Drag files to upload / <span className="text-blue-500 cursor-pointer">Browse</span></div>
                </div>
              </div>
              {/* Aadhaar Card Back */}
              <div className="border-2 border-blue-300 rounded-lg flex flex-col items-center p-6 relative">
                <div className="text-lg font-semibold mb-2">Aadhaar Card Back</div>
                <div className="text-gray-500 mb-2">KYC Uploaded</div>
                <div className="flex flex-col items-center justify-center flex-1 w-full">
                  <label className="w-20 h-20 border-2 border-dashed border-blue-300 rounded-full flex items-center justify-center text-4xl text-blue-400 bg-blue-50 mb-2 cursor-pointer relative">
                    <input type="file" accept="image/*" style={{ display: 'none' }} onChange={e => {
                      const file = e.target.files[0];
                      if (file) {
                        const url = URL.createObjectURL(file);
                        setAadhaarBackDemoImg(url);
                      }
                    }} />
                    +
                    {aadhaarBackDemoImg && (
                      <img src={aadhaarBackDemoImg} alt="Aadhaar Back Preview" className="absolute top-0 left-0 w-full h-full object-cover rounded-full z-10" style={{zIndex:2}} />
                    )}
                  </label>
                  <div className="text-xs text-gray-400">Drag files to upload / <span className="text-blue-500 cursor-pointer">Browse</span></div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <button
                type="button"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-2 rounded-full transition duration-200 text-lg shadow"
                onClick={() => setShowForm(true)}
              >
                SUBMIT
              </button>
            </div>
          </>
        ) : (
          <form onSubmit={e => { e.preventDefault(); handleKyc(); }}>
            {/* ...existing form code... */}
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {/* Business Name */}
              <div className="relative md:col-span-2">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 20 20"><path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm2 0v8h12V6H4zm2 2h8v2H6V8zm0 4h5v2H6v-2z"/></svg>
                </span>
                <input
                  type="text"
                  placeholder="Business Name"
                  className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={businessName}
                  onChange={e => setBusinessName(e.target.value)}
                />
              </div>
              {/* Bank Account */}
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 20 20"><path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm0 2h12v10H4V5zm2 2a2 2 0 114 0 2 2 0 01-4 0zm0 6l2.293-2.293a1 1 0 011.414 0L14 13h-8z"/></svg>
                </span>
                <input
                  type="text"
                  placeholder="Bank Account Number"
                  className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={bankAccount}
                  onChange={e => setBankAccount(e.target.value)}
                />
              </div>
              {/* Bank IFSC */}
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 20 20"><path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm2 0v10h12V5H4zm2 2h8v2H6V7zm0 4h5v2H6v-2z"/></svg>
                </span>
                <input
                  type="text"
                  placeholder="Bank IFSC"
                  className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={bankIfsc}
                  onChange={e => setBankIfsc(e.target.value)}
                />
              </div>
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
        )}
      </div>
    </div>
  );
};

export default KycForm;
