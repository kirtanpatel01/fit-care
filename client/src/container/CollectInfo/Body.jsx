import React from "react";
import { Block } from "../../components";
import { useForm } from "../../context/FormContext";

function Body() {
  const { formData, updateFormData } = useForm();

  return (
    <Block title="Body Info">
      <div className="w-full flex flex-col gap-4 sm:gap-8">
        <div className="flex gap-2">
          <input
            type="number"
            min={0}
            max={1000}
            placeholder="Height"
            className="w-full input-bg"
            value={formData.height || ""}
            onChange={(e) => updateFormData("height", e.target.value)}
            onKeyDown={(e) => {
              if (["e", "E", "+", "-", "."].includes(e.key)) {
                e.preventDefault();
              }
            }}
          />
          <select
            value={formData.heightUnit || ""}
            onChange={(e) => updateFormData("heightUnit", e.target.value)}
            className="w-24 input-bg"
            name="heightUnit"
          >
            <option value="cm">cm</option>
            <option value="m">m</option>
            <option value="ft">ft</option>
            <option value="in">in</option>
          </select>
        </div>

        <div className="flex gap-2">
          <input
            type="number"
            min={0}
            max={1000}
            placeholder="Weight"
            className="w-full input-bg"
            value={formData.weight || ""}
            onChange={(e) => updateFormData("weight", e.target.value)}
            onKeyDown={(e) => {
              if (["e", "E", "+", "-", "."].includes(e.key)) {
                e.preventDefault();
              }
            }}
          />
          <select
            value={formData.weightUnit || ""}
            onChange={(e) => updateFormData("weightUnit", e.target.value)}
            className="w-24 input-bg"
            name="weightUnit"
          >
            <option value="kg">kg</option>
            <option value="lbs">lbs</option>
            <option value="g">g</option>
          </select>
        </div>

        <div className="input-bg">
          <span className="font-bold">Goal:</span>
          <div className="flex gap-4">
            {["gain", "loss"].map((gender) => (
              <label key={gender} className="radio-label">
                <input
                  type="radio"
                  name="goal"
                  value={gender}
                  checked={formData.gender === gender}
                  onChange={(e) => updateFormData("gender", e.target.value)}
                  className="hidden peer"
                />
                <span className="radio-btn-span"></span>
                {gender.charAt(0).toUpperCase() + gender.slice(1)}
              </label>
            ))}
          </div>
        </div>

        <div className="flex gap-2">
          <input
            type="number"
            min={0}
            max={1000}
            value={formData.target || ""}
            onChange={(e) => updateFormData("target", e.target.value)}
            placeholder="Target Weight"
            className="w-full input-bg"
            onKeyDown={(e) => {
              if (["e", "E", "+", "-", "."].includes(e.key)) {
                e.preventDefault();
              }
            }}
          />
          <select
            value={formData.targetUnit || ""}
            onChange={(e) => updateFormData("targetUnit", e.target.value)}
            className="w-24 input-bg"
            name="weightUnit"
          >
            <option value="kg">kg</option>
            <option value="lbs">lbs</option>
            <option value="g">g</option>
          </select>
        </div>
      </div>
    </Block>
  );
}

export default Body;
