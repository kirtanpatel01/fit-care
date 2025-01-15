import React from "react";
import deamyy from "../../assets/deamyy_city.jpg";
import profile from "../../assets/profile.svg";
const profileImage = deamyy;

function ProfileBox({ className='' }) {
  return (
    <div className={`${className}`}>
      <div className="flex justify-between items-center drop-shadow-md cursor-pointer bg-white dark:bg-baseDark900 text-secondary rounded-full">
        <img
          src={profileImage || profile}
          alt="deamyy"
          className={`h-14 w-14 md:h-20 md:w-20 rounded-full ${profileImage ? 'p-2' : ' '}`}
        />
        <span className="font-semibold text-lg md:text-xl pr-4">
          {"Kiton"}
        </span>
      </div>
    </div>
  );
}

export default ProfileBox;
