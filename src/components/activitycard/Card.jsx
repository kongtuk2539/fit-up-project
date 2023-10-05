import React, { useState } from "react";
import Actionbutton from "./Actionbutton";

const Card = () => {
  return (
    <>
      <div className="bg-run bg-cover w-343 h-324 rounded-lg mb-6 text-white relative">
        <div className="flex justify-end ">
          {/* menu */}
          <Actionbutton />

          {/* text */}
          <div className="absolute bottom-0 left-0 py-6 px-4">
            <h2 className="text-2xl font-bold font-orbitron">Run</h2>
            <p className="font-roboto-mono">
              Stride by stride, making every run my best run.
            </p>
            <p className="mt-4 text-sm font-roboto-mono text-white-op70">
              Sat, 26 Aug (1 hr 10 mins)
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
