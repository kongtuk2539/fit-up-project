import React, { useState } from "react";
// import InputPassword from './Password';
import InputPassword from "./password";

const Form2 = () => {
  const [username, setUsername] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handleDobChange = (e) => {
    setDob(e.target.value);
  };
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };
  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };
  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  return (
    <>
      <div className="w-full flex flex-col gap-2 text-white">
        <label
          htmlFor="username"
          className="block font-roboto-mono text-sm pb-2"
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Enter your username"
          className="w-full px-4 py-3 mb-4 bg-black-dark rounded font-roboto-mono hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-pink focus:ring-1 input-placeholder-color"
        />
      </div>
      <div className="w-full flex flex-col gap-2 text-white">
        <label
          htmlFor="dateOfBirth"
          className="block font-roboto-mono text-sm pb-2"
        >
          Date of birth
        </label>
        <input
          type="text"
          id="dateOfBirth"
          name="dateOfBirth"
          value={dob}
          onChange={handleDobChange}
          placeholder="Select date of birth"
          className="w-full px-4 py-3 mb-4 bg-black-dark rounded font-roboto-mono hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-pink focus:ring-1 input-placeholder-color"
        />
      </div>

      <div>
        <label htmlFor="gender" className="text-white block font-roboto-mono text-sm pb-2">
          Gender
        </label>
        <div>
          <select
            id="gender"
            name="gender"
            value={gender}
            onChange={handleGenderChange}
            placeholder="Select gender"
            className="select text-gray-400 text-base w-full px-4 py-3 mb-4 bg-black-dark rounded font-roboto-mono hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-pink focus:ring-1 input-placeholder-color"
          >
            <option className="disabled selected">Select gender</option>
            <option className="text-white">Male</option>
            <option className="text-white">Female</option>
          </select>
        </div>
      </div>

      {/* <select className="select w-full px-4 py-3 mb-4 bg-black-dark rounded font-roboto-mono hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-pink focus:ring-1 input-placeholder-color">
        <option disabled selected className="text-gray-400">Select gender</option>
        <option>Male</option>
        <option>Female</option>
      </select> */}

      {/* <div className="w-full flex flex-col gap-2 text-white">
        <label htmlFor="gender" className="block font-roboto-mono text-sm pb-2">
          Gender
        </label>
        <input
          type="text"
          id="gender"
          name="gender"
          value={gender}
          onChange={handleGenderChange}
          placeholder="Select gender"
          className="w-full px-4 py-3 mb-4 bg-black-dark rounded font-roboto-mono hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-pink focus:ring-1 input-placeholder-color"
        />
      </div> */}
      <div className="w-full flex flex-col gap-2 text-white">
        <label htmlFor="weight" className="block font-roboto-mono text-sm pb-2">
          Weight (kg)
        </label>
        <input
          type="text"
          id="weight"
          name="weight"
          value={weight}
          onChange={handleWeightChange}
          placeholder="Enter your weight"
          className="w-full px-4 py-3 mb-4 bg-black-dark rounded font-roboto-mono hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-pink focus:ring-1 input-placeholder-color"
        />
      </div>
      <div className="w-full flex flex-col gap-2 text-white">
        <label htmlFor="height" className="block font-roboto-mono text-sm pb-2">
          Height (cm)
        </label>
        <input
          type="text"
          id="height"
          name="height"
          value={height}
          onChange={handleHeightChange}
          placeholder="Enter your height"
          className="w-full px-4 py-3 mb-6 bg-black-dark rounded font-roboto-mono hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-pink focus:ring-1 input-placeholder-color"
        />
      </div>
      <div className="mb-4 font-roboto-mono text-xs text-gray-400">
        <p>
          By creating an account, you agree to Fit2E{" "}
          <a
            href="#"
            className="hover:underline hover:underline-offset-2 decoration-gray-400"
          >
            Privacy Policy
          </a>{" "}
          and{" "}
          <a
            href="#"
            className="hover:underline hover:underline-offset-2 decoration-gray-400"
          >
            Terms and Conditions
          </a>
        </p>
      </div>
    </>
  );
};

export default Form2;
