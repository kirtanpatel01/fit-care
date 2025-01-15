import React, { useState } from "react";
import { ProfileBox, NotGivenData, NotAuthenticated } from "../container";
import { TbLogout } from "react-icons/tb";

function Dashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isGivenData, setIsGivenData] = useState(true);
  const [logoutDropdown, setLogoutDropdown] = useState(false);

  if (!isAuthenticated) {
    return <NotAuthenticated />;
  }

  return (
    <div className="flex flex-col">
      {!isGivenData && <NotGivenData />}
    </div>
  );
}

export default Dashboard;
