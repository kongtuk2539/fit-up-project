import React, { useState, useContext } from "react";
import "../App.css";
import LogoSVG from "../components/signincomponents/LogoSVG";
import WelcomeWord from "../components/signincomponents/WelcomeWord";
import InputEmail from "../components/signincomponents/Inputemail";
import InputPassword from "../components/signincomponents/InputPassword";
import RememberMeCheckbox from "../components/signincomponents/RememberMeCheckbox";
import ForgotPassword from "../components/signincomponents/ForgotPassword";
import LoginButton from "../components/signincomponents/LoginButton";
import Divider from "../components/signincomponents/Divider";
import GoogleButton from "../components/signincomponents/GoogleButton";
import SignupButton from "../components/signincomponents/SignupButton";
import WelcomeImage from "../components/signincomponents/WelcomeImage";
import WelcomeVideo from "../components/signincomponents/WelcomeVideo";
import { useAuth } from "../components/auth/AuthContext";
import { useNavigate } from "react-router-dom";
import Signup1 from "../components/signup/Signup1";
import validator from "validator";

const Login = () => {
  const [dataLogin, setDataLogin] = useState({});
  const [showSignup, setShowSignup] = useState(false);
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const userlogin = async () => {
    const result = await auth.login(formData.email, formData.password);
    console.log(result);
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!validator.isEmail(formData.email)) {
      errors.email = "Please enter a valid email";
      isValid = false;
    }
    if (!formData.email.trim()) {
      errors.email = "Please enter your email";
      isValid = false;
    }

    //check valid password
    if (formData.password !== formData.password) {
      errors.repassword = "Incorrect email or password. Try again";
      isValid = false;
    }
    if (!formData.password.trim()) {
      errors.password = "Please enter your password";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      await userlogin();
      console.log('78')
      console.log(' if =>', auth)
      if (localStorage.getItem('token')) {
        navigate("/dashboard");
      }
    } else {
      console.log("Form submission failed due to validation errors.");
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleSignup = () => {
    setShowSignup(!showSignup);
  };

  return (
    <div className="bg-black-medium flex items-center lg:w-full">
      <div className="hidden lg:block h-screen w-full">
        <WelcomeImage />
      </div>
      {showSignup ? <Signup1 /> : ""}
      <div className="flex flex-col justify-center items-center mx-auto gap-8 px-4 w-full sm:max-w-[400px] lg:max-w-[400px] lg:mx-20">
        <div className="pt-8 lg:pt-0 ">
          <LogoSVG />
        </div>
        <WelcomeWord />
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center w-full gap-4">
          <div className="w-full flex flex-col gap-2 text-white">
            <label htmlFor="email" className="block font-roboto-mono text-sm">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className={`${formErrors.email === "Please enter your email" ||
                formErrors.email === "Please enter a valid email" ||
                formErrors.password === "Incorrect email or password. Try again"
                ? "ring-1 ring-red w-full px-4 py-3 mb-0 bg-black-dark rounded font-roboto-mono hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-pink focus:ring-1 input-placeholder-color"
                : "w-full px-4 py-3 mb-0 bg-black-dark rounded font-roboto-mono hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-pink focus:ring-1 input-placeholder-color"
                }`}
            // className="w-full px-4 py-3 bg-black-dark rounded font-roboto-mono hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-pink focus:ring-1 input-placeholder-color"
            />
            <span className="my-2 mb-4 text-red text-xs font-roboto-mono font-bold">
              {formErrors.email}
            </span>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-4">
            <div className="w-full flex flex-col gap-2 text-white">
              <label
                htmlFor="password"
                className="block font-roboto-mono text-sm"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  className={`${formErrors.password === "Please enter your password" ||
                    formErrors.password ===
                    "Incorrect email or password. Try again"
                    ? "ring-1 ring-red w-full px-4 py-3 mb-0 bg-black-dark rounded font-roboto-mono hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-pink focus:ring-1 input-placeholder-color"
                    : "w-full px-4 py-3 mb-0 bg-black-dark rounded font-roboto-mono hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-pink focus:ring-1 input-placeholder-color"
                    }`}
                // className="w-full px-4 py-3 bg-black-dark rounded font-roboto-mono hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-pink focus:ring-1 input-placeholder-color"
                />
                <span
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer"
                >
                  {showPassword ? (
                    <i className="material-symbols-outlined text-gray-400">
                      visibility_off
                    </i>
                  ) : (
                    <i className="material-symbols-outlined text-gray-400">
                      visibility
                    </i>
                  )}
                </span>
              </div>
              <span className="my-2 mb-4 text-red text-xs font-roboto-mono font-bold">
                {formErrors.password}
              </span>
            </div>
            <div className="flex justify-between items-center w-full">
              <RememberMeCheckbox />
              <ForgotPassword />
            </div>
          </div>
          <button
            type="submit"
            className="h-12 w-full bg-pink hover:bg-pink-medium active:bg-pink-light font-roboto-mono text-black-dark font-bold rounded"
          // onClick={userlogin}
          >
            Log in
          </button>
        </form>
        <Divider />
        <GoogleButton />
        {/* <SignupButton /> */}
        <div className="flex justify-between items-center gap-2">
          <div className="label-text font-roboto-mono text-sm text-white">
            Don’t have an account?{" "}
          </div>
          <button onClick={toggleSignup}>
            <a
              href="#"
              className="label-text font-roboto-mono text-sm font-bold text-pink hover:underline"
            >
              Sign up
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
