import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TiWeatherSunny } from "react-icons/ti";
import { BsFillMoonStarsFill } from "react-icons/bs";

function Sidebar() {
  const links = [
    { path: "dashboard", title: "Dashboard" },
    { path: "meals", title: "Meals" },
    { path: "exercise", title: "Exercise" },
  ];

  const [isDarkMode, setIsDarkMode] = useState(false);

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
    <div className="flex flex-col justify-between bg-baseDark dark:bg-baseLight bg-opacity-10 dark:bg-opacity-5 min-h-screen p-4">
      <nav className="flex flex-col gap-4">
        <span className="text-3xl font-bold tracking-wider">Fit Care</span>
        <ul className="flex flex-col gap-4">
          {links.map((link) => (
            <Link to={link.path} key={link.title} className="text-center border border-borderLight hover:bg-hBlue hover:bg-opacity-25 p-2 rounded-xl cursor-pointer font-medium text-lg">
              {link.title}
            </Link>
          ))}
        </ul>
      </nav>
      <button onClick={toggleDarkMode} className="flex justify-center min-w-40">
          {isDarkMode ? (
            <div className="flex items-center gap-2">
              <TiWeatherSunny size={36} />
              <span>Light Mode</span>
            </div>
          ) : (
            <div className="flex items-center gap-3 text-baseDark">
              <BsFillMoonStarsFill size={26} />
              <span className="mb-1">Dark Mode</span>
            </div>
          )}
      </button>
    </div>
  );
}

export default Sidebar;
