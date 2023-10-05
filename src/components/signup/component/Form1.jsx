import React, { useState } from "react";
// import InputPassword from './Password';
import InputPassword from "./password";

const Form1 = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  const handleFirstnameChange = (e) => {
    setFirstname(e.target.value);
  };
  const handleLastnameChange = (e) => {
    setLastname(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <div className="w-full flex flex-col gap-2 text-white">
        <label
          htmlFor="firstname"
          className="block font-roboto-mono text-sm pb-2"
        >
          First Name
        </label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          value={firstname}
          onChange={handleFirstnameChange}
          placeholder="Enter your first name"
          className="w-full px-4 py-3 mb-4 bg-black-dark rounded font-roboto-mono hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-pink focus:ring-1 input-placeholder-color"
        />
      </div>
      <div className="w-full flex flex-col gap-2 text-white">
        <label
          htmlFor="lastname"
          className="block font-roboto-mono text-sm pb-2"
        >
          Last Name
        </label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          value={lastname}
          onChange={handleLastnameChange}
          placeholder="Enter your last name"
          className="w-full px-4 py-3 mb-4 bg-black-dark rounded font-roboto-mono hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-pink focus:ring-1 input-placeholder-color"
        />
      </div>
      <div className="w-full flex flex-col gap-2 text-white">
        <label htmlFor="email" className="block font-roboto-mono text-sm pb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
          className="w-full px-4 py-3 mb-4 bg-black-dark rounded font-roboto-mono hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-pink focus:ring-1 input-placeholder-color"
        />
      </div>
      <InputPassword />
      <div className="mb-6 font-roboto-mono text-xs text-black-light">
        <div className="flex items-center gap-2">
          <span className="text-base material-symbols-outlined">task_alt</span>
          <p>8 characters minimum</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-base material-symbols-outlined">task_alt</span>
          <p>1 uppercase letter</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-base material-symbols-outlined">task_alt</span>
          <p>1 number</p>
        </div>
      </div>
    </>
  );
};

export default Form1;
