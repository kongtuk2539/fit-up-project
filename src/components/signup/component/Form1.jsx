import React, { useState } from "react";
// import InputPassword from './Password';
import InputPassword from "./password";
import validator from "validator";

const Form1 = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.firstname.trim()) {
      errors.firstname = "Please enter your first name";
      isValid = false;
    }

    if (!formData.lastname.trim()) {
      errors.lastname = "Please enter your last name";
      isValid = false;
    }

    if (!validator.isEmail(formData.email)) {
      errors.email = "Invalid email format";
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Please enter your email";
      isValid = false;
    }

    setFormErrors(errors);
    console.log(errors);
    console.log(formErrors.firstname);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Submit the form data
      console.log("Form data submitted:", formData);
    } else {
      console.log("Form submission failed due to validation errors.");
    }
  };

  // const [firstname, setFirstname] = useState("");
  // const [lastname, setLastname] = useState("");
  // const [email, setEmail] = useState("");

  // const handleFirstnameChange = (e) => {
  //   setFirstname(e.target.value);
  // };
  // const handleLastnameChange = (e) => {
  //   setLastname(e.target.value);
  // };
  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
            value={formData.firstname}
            onChange={handleInputChange}
            placeholder="Enter your first name"
            className={`${
              formErrors.firstname === "Please enter your first name"
                ? "ring-1 ring-red w-full px-4 py-3 mb-0 bg-black-dark rounded font-roboto-mono hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-pink focus:ring-1 input-placeholder-color"
                : "w-full px-4 py-3 mb-0 bg-black-dark rounded font-roboto-mono hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-pink focus:ring-1 input-placeholder-color"
            }`}
          />
          <span className="my-2 mb-4 text-red text-xs font-roboto-mono font-bold">
            {formErrors.firstname}
          </span>
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
            value={formData.lastname}
            onChange={handleInputChange}
            placeholder="Enter your last name"
            className={`${
              formErrors.firstname === "Please enter your first name"
                ? "ring-1 ring-red w-full px-4 py-3 mb-0 bg-black-dark rounded font-roboto-mono hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-pink focus:ring-1 input-placeholder-color"
                : "w-full px-4 py-3 mb-0 bg-black-dark rounded font-roboto-mono hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-pink focus:ring-1 input-placeholder-color"
            }`}
          />
          <span className="my-2 mb-4 text-red text-xs font-roboto-mono font-bold">
            {formErrors.lastname}
          </span>
        </div>

        <div className="w-full flex flex-col gap-2 text-white">
          <label
            htmlFor="email"
            className="block font-roboto-mono text-sm pb-2"
          >
            Email
          </label>
          <input
            type="text"
            // type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            className={`${
              formErrors.firstname === "Please enter your first name"
                ? "ring-1 ring-red w-full px-4 py-3 mb-0 bg-black-dark rounded font-roboto-mono hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-pink focus:ring-1 input-placeholder-color"
                : "w-full px-4 py-3 mb-0 bg-black-dark rounded font-roboto-mono hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-pink focus:ring-1 input-placeholder-color"
            }`}
          />
          <span className="my-2 mb-4 text-red text-xs font-roboto-mono font-bold">
            {formErrors.email}
          </span>
        </div>

        <InputPassword />
        <div className="mb-6 font-roboto-mono text-xs text-black-light">
          <div className="flex items-center gap-2">
            <span className="text-base material-symbols-outlined">
              task_alt
            </span>
            <p>8 characters minimum</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-base material-symbols-outlined">
              task_alt
            </span>
            <p>1 uppercase letter</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-base material-symbols-outlined">
              task_alt
            </span>
            <p>1 number</p>
          </div>
        </div>
        <button
          type="submit"
          className="h-12 w-full bg-pink hover:bg-pink-medium active:bg-pink-light font-roboto-mono text-black-dark font-bold rounded"
        >
          Next
        </button>
      </form>
    </>
  );
};

export default Form1;
