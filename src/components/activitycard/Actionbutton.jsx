import React, { useState } from "react";
import Deletedialog from "./Deletedialog";
import Successdialog from "./Successdialog";

const Actionbutton = () => {
  const [dropdownOpen, setDropdownOpen] = useState(!true);
  const [dialogdel, setDialogdel] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const toggleDialogdel = () => {
    setDialogdel(!dialogdel);
  };

  return (
    <div>
      <div className="relative m-4" data-x-data="{ dropdownOpen: true }">
        <button
          onClick={toggleDropdown}
          className="primary-contained-button clickbutton relative z-10 w-11 h-11 rounded flex justify-center items-center"
        >
          {/* <span class="material-symbols-outlined text-black-dark">more_horiz</span> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M5 12H5.01M12 12H12.01M19 12H19.01M6 12C6 12.5523 5.55228 13 5 13C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11C5.55228 11 6 11.4477 6 12ZM13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM20 12C20 12.5523 19.5523 13 19 13C18.4477 13 18 12.5523 18 12C18 11.4477 18.4477 11 19 11C19.5523 11 20 11.4477 20 12Z"
              stroke="#1C1C1E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {dropdownOpen && (
          <>
            <div
              onClick={toggleDropdown}
              className="fixed inset-0 h-full w-full z-10"
            ></div>

            <div className="animate-in zoom-in absolute border border-white w-32 h-24 flex flex-col justify-center right-0 mt-2 bg-black-medium rounded shadow-box z-20">
              {/* <div className="absolute border border-white w-32 h-24 px-2 right-0 mt-2 bg-black-medium rounded shadow-xl z-20"> */}
              <button className="clickbutton w-full flex items-center rounded px-4 py-2 text-white font-roboto-mono">
                <span className="material-symbols-outlined pr-2">edit</span>
                Edit
              </button>
              <button
                onClick={toggleDialogdel}
                className="clickbutton w-full flex items-center rounded px-4 py-2 text-red font-roboto-mono"
              >
                <span class="material-symbols-outlined pr-2">delete</span>
                Delete
              </button>
              {dialogdel && (
                <div className="fixed inset-0 h-full w-full z-10">
                  <div onClick={toggleDialogdel} className="bg-black-dark-op80 fixed inset-0 h-full w-full z-10"></div>
                  <Deletedialog toggleDialogdel={toggleDialogdel} />
                  {/* <Successdialog toggleDialogdel={toggleDialogdel} /> */}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Actionbutton;
