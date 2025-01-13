import React from "react";

function ActivityDesc({
  level = "Sedentary",
  desc = "Office work, sitting most of the day.",
  className = "",
  ...props
}) {
  return (
    <div
      className={`px-4 py-2 border border-borderLight rounded-2xl bg-baseLight50 dark:bg-baseDark900 peer-checked:bg-opacity-100 hover:bg-white dark:hover:bg-baseDark ${className}`}
      {...props}
    >
      <h2 className="font-semibold text-lg">{level}</h2>
      <h3 className="text-slate-500 text-sm">e.g. {desc}</h3>
    </div>
  );
}

export default ActivityDesc;
