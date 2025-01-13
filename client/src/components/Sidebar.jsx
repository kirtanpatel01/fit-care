import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { ProfileBox } from "../container";
import { TbLogout } from "react-icons/tb";
import { DarkModeBtn, HRLine } from "../components";
import deamyy from "../assets/deamyy_city.jpg";

function Sidebar() {
  const links = [
    { path: "", title: "Dashboard" },
    { path: "meals", title: "Meals" },
    { path: "exercise", title: "Exercise" },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const [profileDropDown, setProfileDropDown] = useState(false);

  return (
    <div className="flex flex-col justify-between items-center bg-baseDark dark:bg-baseLight bg-opacity-10 dark:bg-opacity-5 md:h-screen md:p-4">
      <nav className="flex flex-col items-center md:gap-8">
        <button
          onClick={() => {
            setIsVisible((prev) => !prev);
            setProfileDropDown(false);
          }}
          className="absolute left-2 top-2 visible md:hidden"
        >
          {isVisible ? (
            <RxCross2 size={32} className="p-0.5 md:p-0" />
          ) : (
            <IoMenu size={32} className="p-0.5 md:p-0" />
          )}
        </button>
        <div className="w-full flex flex-col items-center md:gap-4">
          <span className="text-4xl font-bold tracking-wider text-secondary py-2 md:py-0">
            Fit Care
          </span>
          <div className="h-[1px] w-full bg-borderLight"></div>
        </div>
        <ul
          className={`z-10 absolute top-16 md:top-0 md:relative flex-col items-center gap-8 py-4 md:py-0 bg-baseLight md:bg-transparent md:dark:bg-transparent bg-opacity-95 dark:bg-baseDark dark:bg-opacity-95 border border-borderLight md:border-none rounded-xl right-2 left-2 md:right-0 md:left-0
          ${isVisible ? "flex" : "hidden md:flex"}`}
        >
          {links.map((link) => (
            <Link
              to={link.path}
              key={link.title}
              onClick={() => setIsVisible(false)}
              className="w-fit min-w-40 text-center border border-borderLight bg-baseLight50 dark:bg-baseDark900 btn-hover p-2 rounded-xl cursor-pointer font-medium text-xl hover:text-secondary"
            >
              {link.title}
            </Link>
          ))}
        </ul>

        {!profileDropDown && (
          <button
            onClick={() => {
              setProfileDropDown(true);
              setIsVisible(false);
            }}
            className="absolute right-1 top-1 flex md:hidden"
          >
            <img
              src={deamyy}
              alt="deamyy"
              className="h-12 w-12 md:h-20 md:w-20 rounded-full z-10 border border-secondary"
            />
          </button>
        )}
      </nav>

      {profileDropDown && (
        <div className="absolute top-1 right-1 p-2 flex flex-col items-center gap-4 md:hidden border border-borderLight rounded-lg bg-baseLight50 bg-opacity-75 dark:bg-baseDark900 dark:bg-opacity-50">
          <div onClick={() => setProfileDropDown(false)}>
            <ProfileBox />
          </div>
          <HRLine />
          <button className="flex items-center gap-2">
            <TbLogout />
            <span>Logout</span>
          </button>
          <HRLine />
          <DarkModeBtn />
        </div>
      )}

      <div className="hidden md:flex">
        <DarkModeBtn />
      </div>
    </div>
  );
}

export default Sidebar;
