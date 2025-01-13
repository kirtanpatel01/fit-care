import React from "react";

function FormBlock({ children }) {
  return (
    <div className="flex flex-col justify-center items-center gap-8 border border-neutral-600 p-16 rounded-3xl bg-slate-200 bg-opacity-5">{children}</div>
  );
}

export default FormBlock;
