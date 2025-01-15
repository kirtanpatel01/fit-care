import React, { useEffect, useState } from "react";
import { TiWeatherSunny } from "react-icons/ti";
import { IoMdMoon } from "react-icons/io";

function DarkModeBtn() {
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
    <button
      onClick={toggleDarkMode}
      className="flex justify-center"
    >
      {isDarkMode ? (
        <div className="flex items-center">
          <TiWeatherSunny size={36} className="p-1" />
          <span className="">Light</span>
        </div>
      ) : (
        <div className="flex items-center">
          <IoMdMoon size={34} className="p-1" />
          <span className="">Dark</span>
        </div>
      )}
    </button>
  );
}

export default DarkModeBtn;
