import React from "react";

const Default = () => {
  return (
    // <div className="bg-pink-op10 w-343 h-444 my-6 flex flex-col justify-center items-center border border-dashed border-pink rounded-lg">
    <div className="borderdefault w-343 h-444 my-6 flex flex-col justify-center items-center">
      <img src="./src/assets/image/Activity/Dollar.png" alt="Dollar" />
      <div>
        <h3 className="font-orbitron text-xl font-bold w-228 h-30 text-center mt-11 mb-2">
          Create an Activity
        </h3>
        <p className="font-roboto-mono text-black-light w-228 h-11 mb-8 text-center">
          Let's Turn Activity into Earnings
        </p>
      </div>
      <div>
        <button className="flex justify-center items-center bg-pink w-263 h-12 text-black-dark font-roboto-mono font-bold">
          <span class="material-symbols-outlined pr-2.5 ">add_circle</span>
          Create new activity
        </button>
      </div>
    </div>
  );
};

export default Default;
