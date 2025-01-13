import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HRLine } from "../components";

function Dashboard() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isGivenData, setIsGivenData] = useState(false);

  return (
    <div className="flex flex-col">
      {!isAuthenticated && (
        <div className="p-8 min-[475px]:p-4 lg:p-8 flex flex-col gap-4">
          <div className="flex flex-col min-[475px]:flex-row gap-1 lg:gap-6 cormorant-garamond-bold font-semibold">
            <span className="text-6xl min-[475px]:text-7xl sm:text-8xl lg:text-9xl">
              Hey,
            </span>
            <span className="text-secondary text-7xl sm:text-8xl lg:text-9xl">
              Buddy
            </span>
          </div>
          <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl min-[475px]:p-8">
            <span>
              You aren't logged in, Please{" "}
              <Link to={"/login"} className="text-secondary">
                login
              </Link>
              !
            </span>
          </div>
        </div>
      )}

      {!isGivenData && isAuthenticated && (
        <div className="p-8 min-[475px]:p-4 lg:p-8 flex flex-col gap-4">
          <div className="flex flex-col min-[475px]:flex-row gap-1 lg:gap-6 cormorant-garamond-bold font-semibold">
            <span className="text-6xl min-[475px]:text-7xl sm:text-8xl lg:text-9xl">
              Welcome,
            </span>
            <span className="text-secondary text-7xl sm:text-8xl lg:text-9xl">
              Kiton
            </span>
          </div>
          <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl flex flex-col gap-4 min-[475px]:p-8">
            <span>You haven't given your data,</span>
            <span className="w-fit">
              Please give your{" "}
              <Link to={"/collect-info"} className="text-secondary w-fit">
                personal information
              </Link>{" "}
              to start your fitness journey!
            </span>
          </span>
        </div>
      )}
      <HRLine />
    </div>
  );
}

export default Dashboard;
