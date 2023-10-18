import React, { useState, useContext } from 'react'
import '../App.css'
import LogoSVG from '../components/signincomponents/LogoSVG'
import WelcomeWord from '../components/signincomponents/WelcomeWord'
import InputEmail from '../components/signincomponents/Inputemail'
import InputPassword from '../components/signincomponents/InputPassword'
import RememberMeCheckbox from '../components/signincomponents/RememberMeCheckbox'
import ForgotPassword from '../components/signincomponents/ForgotPassword'
import LoginButton from '../components/signincomponents/LoginButton'
import Divider from '../components/signincomponents/Divider'
import GoogleButton from '../components/signincomponents/GoogleButton'
import SignupButton from '../components/signincomponents/SignupButton'
import WelcomeImage from '../components/signincomponents/WelcomeImage'
import WelcomeVideo from '../components/signincomponents/WelcomeVideo'
import { useAuth } from '../components/auth/AuthContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [dataLogin, setDataLogin] = useState({});
  const [user, setUser] = useState('');
  const auth = useAuth();
  const navigate = useNavigate();

  const userlogin = () => {
    auth.login(dataLogin.user_email);
    navigate('/dashboard');
  }

  //email
  const handleEmailChange = (e) => {
    setDataLogin((c) => ({ ...c, 'user_email': e.target.value }));
  };

  //password
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setDataLogin((c) => ({ ...c, 'user_password': e.target.value }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='flex items-center lg:w-full'>
      <div className='hidden lg:block h-screen w-full'>
        <WelcomeImage />
      </div>
      <div className='flex flex-col justify-center items-center mx-auto gap-8 px-4 w-full sm:max-w-[400px] lg:max-w-[400px] lg:mx-20'>
        <div className='pt-8 lg:pt-0 '>
          <LogoSVG />
        </div>
        <WelcomeWord />
        <div className='flex flex-col justify-center items-center w-full gap-4'>
          <div className="w-full flex flex-col gap-2 text-white">
            <label htmlFor="email" className="block font-roboto-mono text-sm">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={dataLogin.user_email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-black-dark rounded font-roboto-mono hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-pink focus:ring-1 input-placeholder-color"
            />
          </div>
          <div className='flex flex-col justify-center items-center w-full gap-4'>
            <div className="w-full flex flex-col gap-2 text-white">
              <label htmlFor="password" className="block font-roboto-mono text-sm">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={dataLogin.user_password}
                  onChange={handlePasswordChange}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 bg-black-dark rounded font-roboto-mono hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-pink focus:ring-1 input-placeholder-color"
                />
                <span
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer"
                >
                  {showPassword ? (
                    <i className="material-symbols-outlined text-gray-400">visibility_off</i>
                  ) : (
                    <i className="material-symbols-outlined text-gray-400">visibility</i>
                  )}
                </span>

              </div>
            </div>
            <div className='flex justify-between items-center w-full'>
              <RememberMeCheckbox />
              <ForgotPassword />
            </div>
          </div>
        </div>
        <button
          type="button"
          className="h-12 w-full bg-pink hover:bg-pink-medium active:bg-pink-light font-roboto-mono text-black-dark font-bold rounded"
          onClick={userlogin}
        >
          Log in
        </button>
        <Divider />
        <GoogleButton />
        <SignupButton />
      </div>
    </div>
  )
}

export default Login