import React from "react";
import { useNavigate } from "react-router-dom";
import { HRLine } from "../components";

function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col">
      <div className="text-9xl flex gap-6 cormorant-garamond-bold font-semibold ">
          <span>Welcome,</span>
          <span className="text-secondary">Kiton</span>
      </div>
      <HRLine />
      <button onClick={() => navigate("/collect-info")} className="primary-btn">
        Collect information
      </button>
    </div>
  );
}

export default Dashboard;
