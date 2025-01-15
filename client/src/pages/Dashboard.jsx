import React, { useState } from "react";
import { ProfileBox, NotGivenData, NotAuthenticated } from "../container";
import { TbLogout } from "react-icons/tb";
import { useUser } from "../context/UserContext";

function Dashboard() {
  const { isAuthenticated } = useUser();
  const [isGivenData, setIsGivenData] = useState(false);
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
