import { createContext, useContext, useState, useEffect } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("formData");
    return savedData ? JSON.parse(savedData) : {};
  });

  const [currentStep, setCurrentStep] = useState(() => {
    const savedStep = localStorage.getItem("currentStep");
    return savedStep ? parseInt(savedStep, 10) : 0; // Default to step 0 if not saved
  });
  const [selectedFoods, setSelectedFoods] = useState([]);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    localStorage.setItem("currentStep", currentStep.toString());
  }, [currentStep]);

  const updateFormData = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: typeof value === "function" ? value(prev[field]) : value,
    }));
  };

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  return (
    <FormContext.Provider
      value={{
        formData,
        updateFormData,
        currentStep,
        nextStep,
        prevStep,
        selectedFoods,
        setSelectedFoods,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};
