import React, { useState } from "react";
// import "../App.css";
import Header from "./component/header";
import Form2 from "./component/Form2";
import Successdialog from "./Successdialog";

const Signup2 = ({ createUser }) => {
  const [dialogSuccess, setDialogSuccess] = useState(false);

  const toggleDialogSuccess = () => {
    setDialogSuccess(!dialogSuccess);
  };

  return (
    <div className="z-50 flex justify-center items-center h-full bg-gray-op90">
      <div className="bg-black-medium w-[375px] h-full lg:w-[423px] lg:px-10 lg:pb-10">
      {/* <div className="bg-black-medium w-[375px] h-full lg:w-[423px] lg:p-10"> */}
        {/* <Header /> */}
        <div className="h-14 bg-black-dark flex items-center justify-center text-white lg:pt-0 lg:flex lg:flex-col lg:items-start lg:justify-center lg:bg-transparent">
          <div className="font-roboto-mono font-bold text-sm lg:font-orbitron lg:text-xl lg:pb-2">
            Create your account
          </div>
          <div className="lg:w-full lg:border-b-half lg:border lg:rounded lg:border-black-light"></div>
          <button className="absolute left-6 top-4 lg:relative lg:left-0 lg:top-0">
            <span className="clickbutton material-symbols-outlined lg:absolute lg:left-[320px] lg:-top-10 hover:cursor-pointer">
              close
            </span>
          </button>
        </div>
        <div className="px-4 py-6 lg:px-0 lg:pt-0">
          <div className="text-black-light font-roboto-mono">
            <p>
              <span className="font-bold">Step 2 </span>of 2
            </p>
          </div>
          <div>
            <Form2 createUser={createUser} />
            {/* <div className="flex gap-4">
              <button
                type="button"
                className="h-12 w-12 flex justify-center items-center pl-[8px] secondary-contained-button text-black-dark"
              >
                <span class="clickbutton material-symbols-outlined">arrow_back_ios</span>
              </button>
              <button
                type="button"
                onClick={toggleDialogSuccess}
                className="clickbutton h-12 w-[279px] primary-contained-button font-roboto-mono text-black-dark font-bold rounded"
              >
                Sign up
              </button> */}
            {/* {dialogSuccess && (
                <div className="fixed inset-0 h-full w-full z-10">
                  <div onClick={toggleDialogSuccess} className="bg-black-dark-op80 fixed inset-0 h-full w-full z-10"></div>
                  <Successdialog toggleDialogSuccess={toggleDialogSuccess} />
                </div>
              )} */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup2;
