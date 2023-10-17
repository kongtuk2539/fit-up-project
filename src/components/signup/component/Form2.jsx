import React, { useState } from "react";
// import InputPassword from './Password';
import InputPassword from "./password";
import Successdialog from "../Successdialog";

const Form2 = () => {
  const [dialogSuccess, setDialogSuccess] = useState(false);
  const toggleDialogSuccess = () => {
    setDialogSuccess(!dialogSuccess);
  };

  const [formData, setFormData] = useState({
    username: "",
    dob: "",
    gender: "",
    weight: "",
    height: "",
  });

  const [formErrors, setFormErrors] = useState({
    username: "",
    dob: "",
    gender: "",
    weight: "",
    height: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.username.trim()) {
      errors.username = "Please enter your username";
      isValid = false;
    }
    // if (!formData.dob.trim()) {
    //   errors.dob = "Please select date of birth";
    //   isValid = false;
    // }
    if (!formData.gender.trim()) {
      errors.gender = "Please select gender";
      isValid = false;
    }
    if (!formData.weight.trim()) {
      errors.weight = "Please enter your weight";
      isValid = false;
    }
    if (!formData.height.trim()) {
      errors.height = "Please enter your height";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setDialogSuccess(true);
      console.log("Form data submitted:", formData);
    } else {
      console.log("Form submission failed due to validation errors.");
    }
  };

  const [image, setImage] = useState("");
  const [imgUploaded, setImgUploaded] = useState(false);

  // const handleImageChange = (e) => {
  //   setImage(e.target.value);
  //   setImgUploaded(e.target.files.length > 0);
  // };
  const handleImageChange = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];
  
    if (file) {
      reader.onloadend = () => {
        setImage(reader.result);
        setImgUploaded(true);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {!imgUploaded ? (
          <div className="avatar my-6 flex justify-center">
            <label
              htmlFor="image-upload"
              className="w-[123.33px] h-[123.33px] relative cursor-pointer rounded-md"
            >
              <span class="clickbutton material-symbols-outlined border-[3px] border-pink rounded-full bg-pink-op10 text-white text-[32px] p-[43px]">
                photo_camera
              </span>
              <input
                id="image-upload"
                name="image-upload"
                type="file"
                // value={image}
                onChange={handleImageChange}
                className="sr-only"
              />
            </label>
          </div>
        ) : (
          <div className="avatar my-6 flex justify-center">
            <div className="w-[123.33px] h-[123.33px] border-[3px] border-pink rounded-full">
              <img src={image} alt="profile picture"></img>
              {/* <img
                src="/src/assets/image/Activity/Run.png"
                alt="profile picture"
              /> */}
            </div>
          </div>
        )}

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
            value={formData.username}
            onChange={handleInputChange}
            placeholder="Enter your username"
            className={`${
              formErrors.username === "Please enter your username"
                ? "ring-1 ring-red w-full px-4 py-3 mb-0 bg-black-dark rounded font-roboto-mono hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-pink focus:ring-1 input-placeholder-color"
                : "w-full px-4 py-3 mb-0 bg-black-dark rounded font-roboto-mono hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-pink focus:ring-1 input-placeholder-color"
            }`}
          />
          <span className="my-2 mb-4 text-red text-xs font-roboto-mono font-bold">
            {formErrors.username}
          </span>
        </div>

        {/* <div className="w-full flex flex-col gap-2 text-white">
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
            value={formData.dob}
            onChange={handleInputChange}
            placeholder="Select date of birth"
            className={`${
              formErrors.dob === "Please select date of birth"
                ? "ring-1 ring-red w-full px-4 py-3 mb-0 bg-black-dark rounded font-roboto-mono hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-pink focus:ring-1 input-placeholder-color"
                : "w-full px-4 py-3 mb-0 bg-black-dark rounded font-roboto-mono hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-pink focus:ring-1 input-placeholder-color"
            }`}
          />
          <span className="my-2 mb-4 text-red text-xs font-roboto-mono font-bold">
            {formErrors.dob}
          </span>
        </div> */}

        <div className="w-full flex flex-col gap-2 text-white">
          <label
            htmlFor="gender"
            className="text-white block font-roboto-mono text-sm pb-2"
          >
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            placeholder="Select gender"
            className={`${
              formErrors.gender === "Please select gender"
                ? "ring-1 ring-red w-full px-4 py-3 mb-0 bg-black-dark rounded font-roboto-mono hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-pink focus:ring-1 input-placeholder-color"
                : "w-full px-4 py-3 mb-0 bg-black-dark rounded font-roboto-mono hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-pink focus:ring-1 input-placeholder-color"
            }`}
          >
            {/* <option className="disabled defaultSelected">Select gender</option> */}
            <option className="text-white">Male</option>
            <option className="text-white">Female</option>
          </select>
          <span className="my-2 mb-4 text-red text-xs font-roboto-mono font-bold">
            {formErrors.gender}
          </span>
        </div>

        <div className="w-full flex flex-col gap-2 text-white">
          <label
            htmlFor="weight"
            className="block font-roboto-mono text-sm pb-2"
          >
            Weight (kg)
          </label>
          <input
            type="text"
            id="weight"
            name="weight"
            value={formData.weight}
            onChange={handleInputChange}
            placeholder="Enter your weight"
            className={`${
              formErrors.weight === "Please enter your weight"
                ? "ring-1 ring-red w-full px-4 py-3 mb-0 bg-black-dark rounded font-roboto-mono hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-pink focus:ring-1 input-placeholder-color"
                : "w-full px-4 py-3 mb-0 bg-black-dark rounded font-roboto-mono hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-pink focus:ring-1 input-placeholder-color"
            }`}
          />
          <span className="my-2 mb-4 text-red text-xs font-roboto-mono font-bold">
            {formErrors.weight}
          </span>
        </div>

        <div className="w-full flex flex-col gap-2 text-white">
          <label
            htmlFor="height"
            className="block font-roboto-mono text-sm pb-2"
          >
            Height (cm)
          </label>
          <input
            type="text"
            id="height"
            name="height"
            value={formData.height}
            onChange={handleInputChange}
            placeholder="Enter your height"
            className={`${
              formErrors.height === "Please enter your height"
                ? "ring-1 ring-red w-full px-4 py-3 mb-0 bg-black-dark rounded font-roboto-mono hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-pink focus:ring-1 input-placeholder-color"
                : "w-full px-4 py-3 mb-0 bg-black-dark rounded font-roboto-mono hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-pink focus:ring-1 input-placeholder-color"
            }`}
          />
          <span className="my-2 mb-4 text-red text-xs font-roboto-mono font-bold">
            {formErrors.height}
          </span>
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

        <div className="flex gap-4">
          <button
            type="button"
            className="h-12 w-12 flex justify-center items-center pl-[8px] secondary-contained-button text-black-dark"
          >
            <span class="clickbutton material-symbols-outlined">
              arrow_back_ios
            </span>
          </button>
          <button
            type="submit"
            className="clickbutton h-12 w-[279px] primary-contained-button font-roboto-mono text-black-dark font-bold rounded"
          >
            Sign up
          </button>
          {dialogSuccess && (
            <div className="fixed inset-0 h-full w-full z-10">
              <div
                onClick={toggleDialogSuccess}
                className="bg-black-dark-op80 fixed inset-0 h-full w-full z-10"
              ></div>
              <Successdialog toggleDialogSuccess={toggleDialogSuccess} />
            </div>
          )}
        </div>
      </form>
    </>
  );
};

export default Form2;
