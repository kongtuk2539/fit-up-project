import React, { useState } from "react";
// import "../App.css";
import Header from "./component/header";
import Form2 from "./component/Form2";
import Successdialog from "./Successdialog";

const Signup2 = () => {
  const [dialogSuccess, setDialogSuccess] = useState(false);

  const toggleDialogSuccess = () => {
    setDialogSuccess(!dialogSuccess);
  };

  return (
    <div className="bg-black-medium w-[375px] h-full lg:w-[423px] lg:p-10">
      <Header />
      <div className="px-4 py-6 lg:px-0 lg:pt-0">
        <div className="text-black-light font-roboto-mono">
          <p>
            <span className="font-bold">Step 2 </span>of 2
          </p>
        </div>
        <div>
          <Form2 />
          <div className="flex gap-4">
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
            </button>
            {dialogSuccess && (
              <div className="fixed inset-0 h-full w-full z-10">
                <div onClick={toggleDialogSuccess} className="bg-black-dark-op80 fixed inset-0 h-full w-full z-10"></div>
                <Successdialog toggleDialogSuccess={toggleDialogSuccess} />
                {/* <Successdialog toggleDialogdel={toggleDialogdel} /> */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup2;
