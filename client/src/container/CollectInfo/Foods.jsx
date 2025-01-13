import React, { useState } from "react";
import { Block } from "../../components";
import { statesInIndia } from "./Basic.jsx";
import { useForm } from "../../context/FormContext.jsx";
import { RxCross2 } from "react-icons/rx";

// console.log(statesInIndia);

const foodData = [
  {
    id: 1,
    foodName: "Roti",
    calories: { value: 3.5, quantity: { value: 100, unit: "g" } },
  },
  {
    id: 2,
    foodName: "Rice",
    calories: { value: 1.3, quantity: { value: 100, unit: "g" } },
  },
  {
    id: 3,
    foodName: "Dal",
    calories: { value: 1.2, quantity: { value: 100, unit: "g" } },
  },
  {
    id: 4,
    foodName: "Paneer",
    calories: { value: 2.0, quantity: { value: 100, unit: "g" } },
  },
  {
    id: 5,
    foodName: "Chicken Curry",
    calories: { value: 2.5, quantity: { value: 100, unit: "g" } },
  },
  {
    id: 6,
    foodName: "Fish Curry",
    calories: { value: 2.0, quantity: { value: 100, unit: "g" } },
  },
  {
    id: 7,
    foodName: "Idli",
    calories: { value: 1.0, quantity: { value: 100, unit: "g" } },
  },
  {
    id: 8,
    foodName: "Dosa",
    calories: { value: 1.5, quantity: { value: 100, unit: "g" } },
  },
  {
    id: 9,
    foodName: "Sambar",
    calories: { value: 0.8, quantity: { value: 100, unit: "ml" } },
  },
  {
    id: 10,
    foodName: "Chutney",
    calories: { value: 1.0, quantity: { value: 100, unit: "g" } },
  },
  {
    id: 11,
    foodName: "Aloo Paratha",
    calories: { value: 3.0, quantity: { value: 100, unit: "g" } },
  },
  {
    id: 12,
    foodName: "Bhindi Masala",
    calories: { value: 1.2, quantity: { value: 100, unit: "g" } },
  },
  {
    id: 13,
    foodName: "Rajma",
    calories: { value: 1.5, quantity: { value: 100, unit: "g" } },
  },
  {
    id: 14,
    foodName: "Chole",
    calories: { value: 1.4, quantity: { value: 100, unit: "g" } },
  },
  {
    id: 15,
    foodName: "Biryani",
    calories: { value: 1.7, quantity: { value: 100, unit: "g" } },
  },
  {
    id: 16,
    foodName: "Kheer",
    calories: { value: 1.8, quantity: { value: 100, unit: "ml" } },
  },
  {
    id: 17,
    foodName: "Gulab Jamun",
    calories: { value: 3.5, quantity: { value: 100, unit: "g" } },
  },
  {
    id: 18,
    foodName: "Lassi",
    calories: { value: 0.8, quantity: { value: 100, unit: "ml" } },
  },
  {
    id: 19,
    foodName: "Pakora",
    calories: { value: 2.5, quantity: { value: 100, unit: "g" } },
  },
  {
    id: 20,
    foodName: "Samosa",
    calories: { value: 3.0, quantity: { value: 100, unit: "g" } },
  },
  {
    id: 21,
    foodName: "Chaat",
    calories: { value: 1.8, quantity: { value: 100, unit: "g" } },
  },
  {
    id: 22,
    foodName: "Pani Puri",
    calories: { value: 2.2, quantity: { value: 100, unit: "g" } },
  },
  {
    id: 23,
    foodName: "Vada Pav",
    calories: { value: 2.5, quantity: { value: 100, unit: "g" } },
  },
  {
    id: 24,
    foodName: "Poha",
    calories: { value: 1.2, quantity: { value: 100, unit: "g" } },
  },
  {
    id: 25,
    foodName: "Upma",
    calories: { value: 1.0, quantity: { value: 100, unit: "g" } },
  },
  {
    id: 26,
    foodName: "Halwa",
    calories: { value: 4.0, quantity: { value: 100, unit: "g" } },
  },
  {
    id: 27,
    foodName: "Masala Chai",
    calories: { value: 0.5, quantity: { value: 100, unit: "ml" } },
  },
  {
    id: 28,
    foodName: "Mango Lassi",
    calories: { value: 0.9, quantity: { value: 100, unit: "ml" } },
  },
  {
    id: 29,
    foodName: "Butter Chicken",
    calories: { value: 2.8, quantity: { value: 100, unit: "g" } },
  },
  {
    id: 30,
    foodName: "Tandoori Roti",
    calories: { value: 3.0, quantity: { value: 100, unit: "g" } },
  },
  {
    id: 31,
    foodName: "Apple",
    calories: { value: 0.52, quantity: { value: 1, unit: "piece" } },
  },
  {
    id: 32,
    foodName: "Banana",
    calories: { value: 0.89, quantity: { value: 1, unit: "piece" } },
  },
  {
    id: 33,
    foodName: "Orange",
    calories: { value: 0.47, quantity: { value: 1, unit: "piece" } },
  },
  {
    id: 34,
    foodName: "Carrot",
    calories: { value: 0.41, quantity: { value: 100, unit: "g" } },
  },
  {
    id: 35,
    foodName: "Tomato",
    calories: { value: 0.18, quantity: { value: 100, unit: "g" } },
  },
  {
    id: 36,
    foodName: "Potato",
    calories: { value: 0.77, quantity: { value: 100, unit: "g" } },
  },
  {
    id: 37,
    foodName: "Mango",
    calories: { value: 0.6, quantity: { value: 1, unit: "piece" } },
  },
  {
    id: 38,
    foodName: "Papaya",
    calories: { value: 0.4, quantity: { value: 1, unit: "piece" } },
  },
  {
    id: 39,
    foodName: "Guava",
    calories: { value: 0.68, quantity: { value: 1, unit: "piece" } },
  },
  {
    id: 40,
    foodName: "Pineapple",
    calories: { value: 0.5, quantity: { value: 1, unit: "piece" } },
  },
];

function Foods() {
  const { formData, updateFormData, selectedFoods, setSelectedFoods } =
    useForm();

  const handleFoodSelection = (food) => {
    setSelectedFoods((prev) => {
      const isAlreadyAdded = prev.some((foodItem) => foodItem.id === food.id);
      if (isAlreadyAdded) return prev;

      // console.log(food.calories.value)
      return [...prev, food];
    });
  };

  return (
    <Block title="Food Selection: Add what you're used to eat..." food={true}>
      <div className="w-full grid grid-cols-1 md:grid-cols-[auto_auto_1fr_auto_auto] border border-slate-500">
        <div className="w-full flex flex-col items-center justify-evenly md:justify-start min-[320px]:gap-8 p-4">
          <div className="w-full flex md:flex-col justify-evenly gap-0 min-[320px]:gap-8">
            <div>
              <span className="font-medium">Food Type:</span>
              {["vegeterian", "non-vegeterian"].map((item) => (
                <label key={item} className="radio-label">
                  <input
                    type="checkbox"
                    name="vegnonveg"
                    value={item}
                    className="hidden peer"
                    checked={
                      (Array.isArray(formData.tastecb) &&
                        formData.tastecb.includes(item)) ||
                      formData.taste === item
                    }
                    onChange={(e) => {
                      const value = e.target.value;
                      updateFormData(
                        "tastecb",
                        (prev = []) =>
                          e.target.checked
                            ? [...prev, value] // Add if checked
                            : prev.filter((item) => item !== value) // Remove if unchecked
                      );
                    }}
                  />
                  <span className="checkbox-btn-span"></span>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </label>
              ))}
            </div>

            <div>
              <span className="font-medium">Timing:</span>
              {["breakfast", "lunch", "dinner"].map((time) => (
                <label key={time} className="radio-label">
                  <input
                    type="checkbox"
                    name="timing"
                    value={time}
                    checked={
                      Array.isArray(formData.time) &&
                      formData.time.includes(time)
                    }
                    onChange={(e) => {
                      const value = e.target.value;
                      updateFormData(
                        "time",
                        (prev = []) =>
                          e.target.checked
                            ? [...prev, value] // Add if checked
                            : prev.filter((item) => item !== value) // Remove if unchecked
                      );
                    }}
                    className="hidden peer"
                  />
                  <span className="checkbox-btn-span"></span>
                  {time.charAt(0).toUpperCase() + time.slice(1)}
                </label>
              ))}
            </div>
          </div>

          <select
            name="states"
            className="h-fit w-full max-w-72 md:max-w-64 md:w-40 lg:w-48 xl:w-52 input-bg"
            value={formData.state2 || formData.state}
            onChange={(e) => updateFormData("state2", e.target.value)}
          >
            {statesInIndia.map((state) => (
              <option
                className=""
                key={state}
                value={state.toLocaleLowerCase()}
              >
                {state}
              </option>
            ))}
          </select>
        </div>

        <div className="vr-line"></div>

        <div className="grid min-[375px]:grid-cols-2 sm:grid-cols-3 min-[850px]:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 min-[1440px]:grid-cols-5 min-[1600px]:grid-cols-6 gap-2 h-96 md:h-[35rem] overflow-y-auto p-4">
          {foodData.map((food) => (
            <div
              key={food.id}
              className="item-bg min-w-32 h-fit cursor-pointer btn-hover"
              level={food.foodName}
              desc={food.calories}
              onClick={() => handleFoodSelection(food)}
            >
              <h3 className="font-medium text-lg">{food.foodName}</h3>
              {/* <span className="flex text-gray-600">
                <div className="flex items-center gap">
                  <span>{food.calories.value}</span>
                  <img className="h-4" src={fire} alt="fire" />
                </div>
                <span>/</span>
                <div>
                  <span>{food.calories.quantity.value}</span>
                  <span>{food.calories.quantity.unit}</span>
                </div>
              </span> */}
            </div>
          ))}
        </div>

        <div className="vr-line"></div>

        {/* selected foods section */}
        <div className="w-full min-w-44 p-4 grid min-[375px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-1 gap-2 h-96 md:h-[35rem] overflow-y-auto items-start">
          {selectedFoods.map((foodItem, index) => (
            <div key={foodItem.id} className="item-bg h-fit flex justify-between gap-2">
              <h3 className="font-medium mb-1">{foodItem.foodName}</h3>
              {/* <div className="flex items-center gap-1 lg:gap-2">
                  <div className="flex items-center">
                    <span>
                      {foodItem.calories.value}
                    </span>
                    <img className="h-4" src={fire} alt="fire" />
                  </div>
                  <span>|</span>
                  <span className="flex gap-1 items-center">
                  
                    <span>{foodItem.calories.quantity.unit}</span>
                  </span>
                </div> */}

              <RxCross2
                size={24}
                className="border border-red-400 dark:border-red-700 rounded-md text-red-400 bg-red-100 dark:bg-red-950 cursor-pointer hover:bg-red-300 hover:text-red-800"
                onClick={() =>
                  setSelectedFoods((prev) =>
                    prev.filter((_, idx) => idx !== index)
                  )
                }
              />
            </div>
          ))}
        </div>
      </div>
    </Block>
  );
}

export default Foods;
