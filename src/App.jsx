import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ServicePacks from "./components/ServicePacks";
import Dashboard from "./pages/Dashboard";
import OTTSubscriptions from "./pages/OTTSubscriptions";
import SellAndEarn from "./pages/SellAndEarn";
import Recharge from "./pages/Recharge";
import CashCollection from "./pages/CashCollection";
import LICPremium from "./pages/LICPremium";
import CreditCard from "./pages/CreditCard";
import UserAuth from "./components/UserAuth";
import Signup from "./components/Signup";

function App() {
  const location = useLocation();
  const token = localStorage.getItem("token");

  // Only allow /login and /signup if not authenticated
  const isAuthRoute = location.pathname === "/login" || location.pathname === "/signup";
  if (!token && !isAuthRoute) {
    return <Navigate to="/login" replace />;
  }

  const hideLayout = isAuthRoute;
  return (
    <div className="min-h-screen bg-gray-100">
      {!hideLayout && <Sidebar />}
      {!hideLayout && <Header />}
      <Routes>
        <Route path="/login" element={<UserAuth />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/ott" element={<OTTSubscriptions />} />
        <Route path="/sell-earn" element={<SellAndEarn />} />
        {/* Updated recharge routes for mobile and dth */}
        <Route path="/recharge" element={<Navigate to="/recharge/mobile" replace />} />
        <Route path="/recharge/mobile" element={<Recharge tabType="mobile" />} />
        <Route path="/recharge/dth" element={<Recharge tabType="dth" />} />
        <Route path="/utility/cash-collection" element={<CashCollection />} />
        <Route path="/utility/lic-premium" element={<LICPremium />} />
        <Route path="/utility/credit-card" element={<CreditCard />} />
        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
}

export default App;
