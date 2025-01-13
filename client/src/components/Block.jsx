import React from "react";
import { Button } from "./index";
import { useForm } from "../context/FormContext";
import { useNavigate } from "react-router-dom";

function Block({ children, title = "", food = false }) {
  const { currentStep, nextStep, prevStep } = useForm();

  const isFirst = currentStep === 0;
  const isLast = currentStep === 4;
  const navigate = useNavigate();

  return (
    <div
      className={`${
        food ? "w-full" : "max-w-md w-full"
      } flex flex-col items-center gap-4 sm:gap-8 border border-slate-400 p-4 sm:p-10 lg:p-12 rounded-2xl bg-slate-600 bg-opacity-5 backdrop-blur-md shadow-lg`}
    >
      <h1 className="font-semibold text-2xl">{title}</h1>

      {children}
      <div className="btn-container">
        <Button 
        onClick={prevStep}
        text="Previous" 
        disabled={isFirst}
        className={`${isFirst ? 'cursor-not-allowed bg-slate-500' : 'bg-black'}`}/>

        <Button
        onClick={() => isLast ? navigate('/') : nextStep()} 
        text={`${isLast ? "Finish"  : 'Next'}`}
        className={`${isLast ? 'bg-blue-600' : 'bg-black'}`} />
      </div>
    </div>
  );
}

export default Block;
