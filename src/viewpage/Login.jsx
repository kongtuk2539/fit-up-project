import React from 'react'
import './App.css'
import LogoSVG from './components/signincomponents/LogoSVG'
import WelcomeWord from './components/signincomponents/WelcomeWord'
import InputEmail from './components/signincomponents/Inputemail'
import InputPassword from './components/signincomponents/InputPassword'
import RememberMeCheckbox from './components/signincomponents/RememberMeCheckbox'
import ForgotPassword from './components/signincomponents/ForgotPassword'
import LoginButton from './components/signincomponents/LoginButton'
import Divider from './components/signincomponents/Divider'
import GoogleButton from './components/signincomponents/GoogleButton'
import SignupButton from './components/signincomponents/SignupButton'
import WelcomeImage from './components/signincomponents/WelcomeImage'
import WelcomeVideo from './components/signincomponents/WelcomeVideo'

const App = () => {
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
          <InputEmail />
          <div className='flex flex-col justify-center items-center w-full gap-4'>
            <InputPassword />
            <div className='flex justify-between items-center w-full'>
              <RememberMeCheckbox />
              <ForgotPassword />
            </div>
          </div>
        </div>
        <LoginButton />
        <Divider />
        <GoogleButton />
        <SignupButton />
      </div>
    </div>
  )
}

export default App