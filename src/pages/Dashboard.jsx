import ServicePacks from "../components/ServicePacks";


import { Navigate } from "react-router-dom";

const Dashboard = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return (
    <div>
      {/* You can add the header and welcome message here if needed */}
      <ServicePacks />
    </div>
  );
};

export default Dashboard;
