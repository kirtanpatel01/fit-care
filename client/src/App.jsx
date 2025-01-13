import { useEffect, useState } from "react";
import { Dashboard, Login, Register, NotFound, CollectInfo } from "./pages";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
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
    <Router>
      <div className="bg-baseLight dark:bg-baseDark min-h-screen text-baseDark dark:text-baseLight ">
        <button
          onClick={toggleDarkMode}
          className="absolute top-4 right-4 px-4 py-2 bg-baseDark dark:bg-baseLight text-baseLight dark:text-baseDark rounded-lg "
        >
          {isDarkMode ? "Dark" : "Light"}
        </button>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/collect-info" element={<CollectInfo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
