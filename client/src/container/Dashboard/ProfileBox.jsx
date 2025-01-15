import React, { useEffect, useState } from "react";
import deamyy from "../../assets/deamyy_city.jpg";
import profile from "../../assets/profile.svg";
import axios from "axios";
import { useUser } from "../../context/UserContext";
const profileImage = deamyy;

function ProfileBox({ className = "" }) {
  const { user } = useUser();

  return (
    <div className={`${className}`}>
      <div className=" drop-shadow-md cursor-pointer bg-white dark:bg-baseDark900 text-secondary rounded-full">
        <div className="flex justify-between items-center">
          <img
            src={user?.profileImage || profile}
            alt={user?.username || "Profile"}
            className={`h-14 w-14 md:h-20 md:w-20 rounded-full ${
              profileImage ? "p-2" : ""
            }`}
          />
          <span className="font-semibold text-lg md:text-xl pr-4">
            {user?.username || "User"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProfileBox;
