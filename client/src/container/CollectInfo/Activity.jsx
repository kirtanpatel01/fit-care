import React from "react";
import { Block, ActivityDesc } from "../../components";
import { useForm } from "../../context/FormContext";

const activityData = [
  {
    value: "sedentary",
    level: "Sedentary",
    desc: "Office work, sitting most of the day.",
  },
  {
    value: "light",
    level: "Lightly Active",
    desc: "Walking for 20–30 minutes daily.",
  },
  {
    value: "moderate",
    level: "Moderately Active",
    desc: "Jogging, cycling, or playing sports regularly.",
  },
  {
    value: "very",
    level: "Very Active",
    desc: "Intense gym sessions, construction work, or regular sports activities.",
  },
  {
    value: "extra",
    level: "Extra Active",
    desc: "Professional athletes, marathon training, or jobs requiring heavy labor.",
  },
];

function Activity() {
    const { formData, updateFormData } = useForm();
  
  return (
    <Block title="Activity Info" className="pl-0">
      <div className="w-full flex flex-col gap-4">
        {activityData.map((act) => (
          <label 
          key={act.value}
          className="radio-label">
            <input
              type="radio"
              name="activity"
              value={act.value}
              checked={formData.activity === act.value}
              onChange={(e) => updateFormData('activity', e.target.value)}
              className="hidden peer"
            />
            <span className="radio-btn-span"></span>
            <ActivityDesc className="w-full" level={act.level} desc={act.desc} />
          </label>
        ))}
      </div>
    </Block>
  );
}

export default Activity;
