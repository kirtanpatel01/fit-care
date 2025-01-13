import React from "react";
import deamyy from "../../assets/deamyy_city.jpg";

function ProfileBox({ className='' }) {
  return (
    <div className={`${className}`}>
      <div className="flex justify-between items-center drop-shadow-md cursor-pointer">
        <img
          src={deamyy}
          alt="deamyy"
          className="h-14 w-14 md:h-20 md:w-20 rounded-full z-10 border-2 border-secondary"
        />
        <span className="pl-12 md:pl-16 pr-3 md:pr-6 py-2 md:py-5 -ml-10 md:-ml-14 bg-white dark:bg-baseDark900 text-secondary rounded-full font-semibold text-xl md:text-2xl">
          {"Kiton"}
        </span>
      </div>
    </div>
  );
}

export default ProfileBox;
