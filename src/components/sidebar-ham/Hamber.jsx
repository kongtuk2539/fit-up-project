import React, { useState } from 'react'

const Hamber = () => {
  const [ham, setHam] = useState(false);
  return (
    <>
      {/* Moblie */}
      <div className='inline sm:hidden text-white'>
        <div className="flex flex-row-reverse items-center top-0 right-0 mt-0 mr-14">
          <div onClick={() => setHam(!ham)} className="cursor-pointer pt-3 bg-pink border-solid border-2 border-pink ">
          <span class="material-symbols-outlined">account_circle</span>
          </div>
        </div>

        {ham ? (
          <div className="bg-black/80 fixed w-full h-screen z-10 top-0 right-0"></div>
        ) : (
          ""
        )}

        {/* Side drwer menu */}
        <div
          className={
            ham
              ? "fixed top-0 right-0 w-[300px] h-screen bg-black-medium z-10 duration-300 text-white"
              : "fixed top-0 right-[-100%] w-[300px] h-screen bg-black-medium z-10 duration-300 text-white"
          }
        >
          
          <div
            onClick={() => setHam(!ham)}
            className="absolute right-3 mt-10 pt-3 cursor-pointer h-0 "
            // className="fixed inset-0 h-full w-full z-10"
          >
            <span class="material-symbols-outlined">close</span>
          </div>

          <nav>
            <ul className="flex flex-col items-center pl-0 pr-4 mt-10 pt-3 ">
              <li className="">
                <button className="font-roboto-mono hover:font-bold pl-4 w-52 h-14 bg-black-medium hover:bg-pink hover:text-black-slid flex items-center gap-6 rounded-lg">
                <span class="material-symbols-outlined">account_circle</span> Proflie
                </button>
              </li>
              <li>
                <button className="font-roboto-mono hover:font-bold pl-4 w-52 h-14 bg-black-medium hover:bg-pink hover:text-black-slid flex items-center gap-6 rounded-lg">
                <span class="material-symbols-outlined">info</span> Help & Support
                </button>
              </li>
              <li>
                <button className="font-roboto-mono hover:font-bold pl-4 w-52 h-14 bg-black-medium hover:bg-pink hover:text-black-slid flex items-center gap-6 rounded-lg">
                <span class="material-symbols-outlined">settings</span> Setting
                </button>
              </li>
              <li>
                <button className="font-roboto-mono hover:font-bold pl-4 w-52 h-14 bg-black-medium hover:bg-pink hover:text-black-slid flex items-center gap-6 rounded-lg">
                <span class="material-symbols-outlined">logout</span> Sign Out
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      

      {/* Desktop */}
      <div className='hidden sm:inline '>
        <div className="flex absolute top-0 right-0 mt-10 mr-14 border-solid border border-pink">
          <div className="mr-6 m-1 mt-4">
            <button className="h-10 w-10 mr-6 rounded-full p-0 hover:bg-black-dark hover:text-white border-solid border border-pink">
              <span class="material-symbols-outlined">sms</span>
            </button>
            <button className="h-10 w-10 rounded-full p-0 hover:bg-black-dark hover:text-white">
            <span class="material-symbols-outlined">notifications</span>
            </button>
          </div>
          <div className='rounded-lg'>
            <div className="dropdown dropdown-end ">
              <label tabIndex={0} className="btn m-1 bg-pink font-bold text-base">
                NAME
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow text-base rounded-box w-52 bg-black-medium text-white "
              >
                <li>
                  <a> <span class="material-symbols-outlined">account_circle</span> Proflie</a>
                </li>
                <li>
                  <a> <span class="material-symbols-outlined">info</span> Help & Support</a>
                </li>
                <li>
                  <a> <span class="material-symbols-outlined">settings</span> Setting</a>
                </li>
                <div className="border-b-2 border-black-light"></div>
                <li>
                  <a> <span class="material-symbols-outlined">logout</span> Sign Out</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Hamber