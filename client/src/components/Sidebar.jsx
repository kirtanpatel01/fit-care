import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TiWeatherSunny } from "react-icons/ti";
import { IoMdMoon } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

function Sidebar() {
  const links = [
    { path: "", title: "Dashboard" },
    { path: "meals", title: "Meals" },
    { path: "exercise", title: "Exercise" },
  ];

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };
  return (
    <div className="flex flex-col justify-between bg-baseDark dark:bg-baseLight bg-opacity-10 dark:bg-opacity-5 md:h-screen md:p-4">
      <nav className="flex flex-col items-center md:gap-8">
        <button
          onClick={() => setIsVisible((prev) => !prev)}
          className="absolute left-2 top-2 visible md:hidden"
        >
          {isVisible ? (
            <RxCross2 size={32} className="p-0.5 md:p-0" />
          ) : (
            <IoMenu size={32} className="p-0.5 md:p-0" />
          )}
        </button>
        <div className="w-full flex flex-col items-center gap-4">
          <span className="text-4xl font-bold tracking-wider">
            Fit Care
          </span>
          <div className="h-[1px] w-full bg-borderLight"></div>
        </div>
        <ul
          className={`z-10 absolute top-[3.75rem] md:top-0 md:relative flex-col items-center gap-8 py-4 md:py-0 bg-baseLight md:bg-transparent md:dark:bg-transparent bg-opacity-95 dark:bg-baseDark dark:bg-opacity-95 border border-borderLight md:border-none rounded-xl right-2 left-2 md:right-0 md:left-0
          ${isVisible ? "flex" : "hidden md:flex"}`}
        >
          {links.map((link) => (
            <Link
              to={link.path}
              key={link.title}
              onClick={() => setIsVisible(false)}
              className="w-fit min-w-40 text-center border border-borderLight bg-baseLight50 dark:bg-baseDark900 hover:bg-hBlue hover:bg-opacity-25 dark:hover:bg-hBlue dark:hover:bg-opacity-25 p-2 rounded-xl cursor-pointer font-medium text-xl"
            >
              {link.title}
            </Link>
          ))}
        </ul>
      </nav>

      <button
        onClick={toggleDarkMode}
        className="absolute right-2 top-2 md:relative flex justify-center mb-2"
      >
        {isDarkMode ? (
          <div className="flex items-center gap-2">
            <TiWeatherSunny size={36} className="p-1 md:p-0" />
            <span className="hidden md:flex">Light Mode</span>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-baseDark">
            <IoMdMoon size={34} className="p-1 md:p-0" />
            <span className="hidden md:flex">Dark Mode</span>
          </div>
        )}
      </button>
    </div>
  );
}

export default Sidebar;
