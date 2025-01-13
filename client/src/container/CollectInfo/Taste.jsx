import React from "react";
import { Block } from "../../components";
import { useForm } from "../../context/FormContext";

function Taste() {
  const { formData, updateFormData } = useForm();

  return (
    <Block title="Taste">
      <div className="w-full md:min-w-96">
        <div className="input-bg">
          <span className="font-bold">Food Taste:</span>
          <div className="flex flex-col sm:flex-row gap-4">
            {["vegeterian", "non-vegeterian"].map((taste) => (
              <label key={taste} className="radio-label">
                <input
                  type="radio"
                  name="novegen"
                  value={taste}
                  className="hidden peer"
                  checked={formData.taste === taste}
                  onChange={(e) => updateFormData("taste", e.target.value)}
                />
                <span className="radio-btn-span"></span>
                {taste.charAt(0).toUpperCase() + taste.slice(1)}
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full md:min-w-96">
        <div className="input-bg">
          <span className="font-bold">Taste Prefered:</span>
          <div className="grid min-[320px]:grid-cols-2 sm:grid-cols-3 gap-4">
            {["Sweet", "Sour", "Salty", "Bitter", "Spicy"].map((tat) => (
              <label key={tat} className="radio-label">
                <input
                  type="checkbox"
                  name="taste"
                  value={tat}
                  checked={
                    Array.isArray(formData.foodTaste) &&
                    formData.foodTaste.includes(tat)
                  }
                  onChange={(e) => {
                    const value = e.target.value;
                    updateFormData(
                      "foodTaste",
                      (prev = []) =>
                        e.target.checked
                          ? [...prev, value] // Add if checked
                          : prev.filter((item) => item !== value) // Remove if unchecked
                    );
                  }}
                  className="hidden peer"
                />
                <span className="checkbox-btn-span"></span>
                {tat}
              </label>
            ))}
          </div>
        </div>
      </div>
    </Block>
  );
}

export default Taste;
