import React from "react";
import { Block } from "../../components";
import { useForm } from "../../context/FormContext.jsx";

const statesInIndia = [
  "--Select the state--",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry",
];

function Basic() {
  const { formData, updateFormData } = useForm();

  return (
    <Block title="Basic Info">
      <div className="flex flex-col gap-4 sm:gap-8 w-full">
        {/* Input for age */}
        <div className="flex gap-2 items-center">
          <input
            type="number"
            placeholder="Age"
            min={16}
            max={100}
            content="Year"
            className="input-bg"
            value={formData.age || ""}
            onChange={(e) => updateFormData("age", e.target.value)}
            onKeyDown={(e) => {
              {
                /* Prevent non-numeric characters */
              }
              if (["e", "E", "+", "-", "."].includes(e.key)) {
                e.preventDefault();
              }
            }}
          />
          Year
        </div>

        {/*Radio Button for gender*/}
        <div className="input-bg">
          <span className="font-bold">Gender:</span>
          <div className="flex-col min-[375px]:flex gap-4 ">
            {["male", "female", "other"].map((gender) => (
              <label className="radio-label" key={gender}>
                <input
                  type="radio"
                  name="gender"
                  value={gender}
                  className="hidden peer"
                  checked={formData.gender === gender}
                  onChange={(e) => updateFormData("gender", e.target.value)}
                />
                <span className="radio-btn-span"></span>
                {gender.charAt(0).toUpperCase() + gender.slice(1)}
              </label>
            ))}
          </div>
        </div>

        <select name="country" className="input-bg">
          <option value="india">India</option>
        </select>

        <select
          name="states"
          className="input-bg"
          value={formData.state || ""}
          onChange={(e) => updateFormData("state", e.target.value)}
        >
          {statesInIndia.map((state) => (
            <option key={state} value={state.toLocaleLowerCase()}>
              {state}
            </option>
          ))}
        </select>

        <input
          className="input-bg"
          placeholder="City"
          value={formData.city || ""}
          onChange={(e) => updateFormData("city", e.target.value)}
        />
      </div>
    </Block>
  );
}

export default Basic;

export { statesInIndia };
