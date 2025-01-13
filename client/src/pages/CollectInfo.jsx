import React from "react";
import { Basic, Body, Activity, Taste, Foods } from "../container";
import { FormProvider, useForm } from "../context/FormContext";
import "../styles/collectInfo.css";

function CollectInfo() {
  const components = [Basic, Body, Activity, Taste, Foods];
  return (
    <FormProvider>
      <div className="w-full min-h-screen flex justify-center items-center gap-16 p-4 sm:p-8 xl:p-16">
        <FormNavigator components={components} />
      </div>
    </FormProvider>
  );
}

const FormNavigator = ({ components }) => {
  const { currentStep } = useForm();
  const CurrentComponent = components[currentStep];

  return <CurrentComponent />;
};

export default CollectInfo;

