import React, { useState } from "react";

const Card = () => {
  const [dropdownOpen, setDropdownOpen] = useState(true);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <>
      <div className="bg-run bg-cover w-343 h-324 rounded-lg my-6 text-white relative">
        <div className="flex justify-end h-screen">
          {/* menu */}
          <div className="relative m-4" data-x-data="{ dropdownOpen: true }">
            <button
              onClick={toggleDropdown}
              className="relative z-10 block w-11 h-11 rounded bg-pink flex justify-center items-center"
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
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>

            {dropdownOpen && (
              <>
                <div
                  onClick={toggleDropdown}
                  className="fixed inset-0 h-full w-full z-10"
                ></div>

                <div className="absolute border border-white w-32 h-24 px-2 py-1.5 right-0 mt-2 bg-black-medium rounded shadow-xl z-20">
                  {/* <div className="absolute border border-white w-32 h-24 px-2 right-0 mt-2 bg-black-medium rounded shadow-xl z-20"> */}
                  <a
                    href="#"
                    className="flex items-center rounded px-4 py-2 text-white font-roboto-mono hover:bg-white hover:text-black-dark"
                  >
                    <span class="material-symbols-outlined pr-2">edit</span>
                    Edit
                  </a>
                  <a
                    href="#"
                    className="flex items-center rounded px-4 py-2 text-red font-roboto-mono hover:bg-white hover:text-black-Red"
                  >
                    <span class="material-symbols-outlined pr-2">delete</span>
                    Delete
                  </a>
                </div>
              </>
            )}
          </div>

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
