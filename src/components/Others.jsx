/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { vehicleData } from "./../assets/data";

const Others = () => {
  const [yearFilter, setYearFilter] = useState("");
  const [isAvailableOnly, setIsAvailableOnly] = useState(false);

  const handleToggleChange = () => {
    setIsAvailableOnly(!isAvailableOnly);
  };

  const handleYearFilterChange = (event) => {
    setYearFilter(event.target.value);
  };

  const filteredItems = vehicleData.filter((vehicle) => {
    if (yearFilter !== "" && vehicle.year !== Number(yearFilter)) {
      return false;
    }
    if (isAvailableOnly && vehicle.status !== "available") {
      return false;
    }
    return true;
  });
  return (
    <div className="" id="other">
      <div className="pt-[210px]">
        <div className="flex justify-between fixed w-11/12 backdrop-blur-md bg-yellow-300 px-2 rounded-3xl">
          <div className="relative mt-2">
            <input
              type="checkbox"
              id="toggle"
              checked={isAvailableOnly}
              onChange={handleToggleChange}
              className="hidden"
            />
            <label
              htmlFor="toggle"
              className={`relative inline-flex items-center h-6 rounded-full w-12 transition-colors duration-200  ${
                isAvailableOnly ? "bg-sky-600" : "bg-gray-500"
              }`}
            >
              <span
                className={`absolute left-0 transform translate-x-1 transition-transform duration-200 ${
                  isAvailableOnly ? "translate-x-6" : "translate-x-1"
                }`}
              >
                <span
                  className={`block w-4 h-4 rounded-full bg-white shadow-md transition-transform duration-200 ${
                    isAvailableOnly ? "translate-x-1" : "translate-x-0"
                  }`}
                ></span>
              </span>
            </label>
            <p className="text-sm text-slate-800 absolute w-max top-0.5 -right-[136px]">Show Available Only</p>
          </div>

          <select
            value={yearFilter}
            onChange={handleYearFilterChange}
            className="rounded-sm focus:outline-0 bg-transparent"
          >
            <option value="">All Years</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
        </div>
      </div>
      <div className="pt-14 flex gap-5 flex-wrap justify-center pb-24 ">
        {filteredItems.map((vehicle) => (
          <div
            className="border p-2 rounded-lg border-amber-500 shadow-xl hover:shadow-2xl hover:bg-slate-900 hover:text-amber-200 transition duration-300"
            key={vehicle.id}
          >
            <div className="w-[150px] h-[100px]">
              <img
                src={vehicle.img}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[150px]">
              <h1 className="pt-4 pb-2 font-semibold text-xl w-[150px]">{vehicle.name}</h1>
              <div className="max-w-full">
                <p>Price: {vehicle.price}</p>
                <p>color: {vehicle.color}</p>
                <p>mileage: {vehicle.mileage}</p>
                <p>year: {vehicle.year}</p>
                <p>type : {vehicle.type}</p>
                <p
                  className={
                    vehicle.status === "available"
                      ? "text-green-500"
                      : "text-red-500"
                  }
                >
                  status: {vehicle.status}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Others;
