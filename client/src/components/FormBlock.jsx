import React from "react";

function FormBlock({ children, className='' }) {
  return (
    <div 
    className={`${className} flex flex-col justify-center items-center gap-8 min-[320px]:border border-neutral-600 p-1 min-[320px]:p-4 sm:p-16 rounded-3xl bg-slate-200 bg-opacity-5`}>
      {children}
    </div>
  );
}

export default FormBlock;
