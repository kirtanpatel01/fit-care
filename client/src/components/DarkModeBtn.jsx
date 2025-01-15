import React, { useEffect, useState } from "react";
import { TiWeatherSunny } from "react-icons/ti";
import { IoMdMoon } from "react-icons/io";

function DarkModeBtn() {
  // Initialize state from localStorage or default to system preference
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme === "dark";
    // If no saved theme, default to system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    // Apply theme to <html> element
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode((prevMode) => !prevMode);

  return (
    <button onClick={toggleDarkMode} className="flex justify-center">
      {isDarkMode ? (
        <div className="flex items-center">
          <TiWeatherSunny size={36} className="p-1" />
          <span>Light</span>
        </div>
      ) : (
        <div className="flex items-center">
          <IoMdMoon size={34} className="p-1" />
          <span>Dark</span>
        </div>
      )}
    </button>
  );
}

export default DarkModeBtn;
