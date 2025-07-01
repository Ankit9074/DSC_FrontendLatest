import { Routes, Route, Navigate } from "react-router-dom";
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

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />
      <Header />
      <Routes>
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
