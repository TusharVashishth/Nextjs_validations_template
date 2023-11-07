"use client";

import { hobbies } from "@/config/hobbies";
import React from "react";

export default function UserForm() {
  const inputClass =
    "border border-red-400 rounded-md h-10 p-2 w-full bg-transparent outline-none";

  const handleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files?.[0];

    console.log("The image is", files);
  };

  return (
    <div className="w-[500px] shadow bg-[#282828] rounded-lg p-5">
      <form>
        <h1 className="text-xl font-bold">Form Validation</h1>
        <h1>Handle Validation like a pro</h1>
        <div className="mt-5">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className={inputClass}
          />
        </div>
        <div className="mt-5">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className={inputClass}
          />
        </div>
        <div className="mt-5">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className={inputClass}
          />
        </div>
        <div className="mt-5">
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            className={inputClass}
          />
        </div>
        <div className="mt-5">
          <label>Select Hobbies</label>
          <div className="grid grid-cols-3 mt-2">
            {hobbies.map((item) => (
              <div className="flex items-center" key={item.key}>
                <label htmlFor={item.key}>{item.value}</label>
                <input
                  type="checkbox"
                  value={item.key}
                  className="ml-2"
                  id={item.key}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5">
          <label>Profile Image</label>
          <input type="file" onChange={handleImage} className={inputClass} />
        </div>
        <div className="mt-5">
          <button className="bg-red-500 w-full p-2 h-10 rounded-lg">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
