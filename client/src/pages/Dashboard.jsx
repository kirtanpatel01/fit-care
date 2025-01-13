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

      <div
        onMouseEnter={() => setLogoutDropdown(true)}
        onMouseLeave={() => setLogoutDropdown(false)}
        className="hidden md:flex flex-col gap-2 items-center absolute top-4 right-4 "
      >
        <ProfileBox />
        {logoutDropdown && (
          <button className="w-fit flex items-center justify-center gap-1 py-2 btn-hover px-4 rounded-full">
            <TbLogout size={24} />
            <span>Logout</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
