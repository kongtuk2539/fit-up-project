import React from "react";
import { useState } from "react";
// import logo from '.../assets/image/Logo/Logo.png'
const Sidebar = () => {
  const [nav, setNav] = useState(false);
  return (
    <>
      {/* Mobile */}
      <div className="border-solid border-2 border-pink  m-0 p-0 absolute top-0 left-0 mt-0 ml-14 inline sm:hidden ">
        <div className="flex items-center">
          <div onClick={() => setNav(!nav)} className="cursor-pointer pt-3 hover:bg-white">
            <span class="material-symbols-outlined">menu</span>
          </div>
          <div className="w-65 h-full ml-2 justify-center text-center  inline sm:hidden border-solid border-2 border-pink">
            <img
              src="/src/assets/image/Logo/Logo.png"
              alt="is missing"
              className=""
            />
          </div>
        </div>

        {/* Modile Menu */}
        {/* Overlay */}
        {nav ? (
          <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
        ) : (
          ""
        )}
        {/* <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div> */}

        {/* Side drwer menu */}
        <div
          className={
            nav
              ? "fixed top-0 left-0 w-[300px] h-screen bg-black-medium z-10 duration-300 text-white"
              : "fixed top-0 left-[-100%] w-[300px] h-screen bg-black-medium z-10 duration-300 text-white"
          }
        >
          
          <div
            onClick={() => setNav(!nav)}
            className="absolute right-3 mt-10 pt-3 cursor-pointer h-0 "
            // className="fixed inset-0 h-full w-full z-10"
          >
            <span class="material-symbols-outlined">close</span>
          </div>

          <nav>
            <ul className="flex flex-col items-center pl-0 pr-4 mt-10 pt-3 ">
              <li className="">
                <button className="font-roboto-mono hover:font-bold pl-4 w-52 h-14 bg-black-medium hover:bg-pink hover:text-black-slid flex items-center gap-6 rounded-lg">
                  <span class="material-symbols-outlined">dashboard</span>
                  Dashboard
                </button>
              </li>
              <li>
                <button className="font-roboto-mono hover:font-bold pl-4 w-52 h-14 bg-black-medium hover:bg-pink hover:text-black-slid flex items-center gap-6 rounded-lg">
                  <span class="material-symbols-outlined">date_range</span>
                  Workouts
                </button>
              </li>
              <li>
                <button className="font-roboto-mono hover:font-bold pl-4 w-52 h-14 bg-black-medium hover:bg-pink hover:text-black-slid flex items-center gap-6 rounded-lg">
                  <span class="material-symbols-outlined">paid</span>
                  Wallet
                </button>
              </li>
              <li>
                <button className="font-roboto-mono hover:font-bold pl-4 w-52 h-14 bg-black-medium hover:bg-pink hover:text-black-slid flex items-center gap-6 rounded-lg">
                  <span class="material-symbols-outlined">redeem</span>
                  Reward
                </button>
              </li>
              <li>
                <button className="font-roboto-mono hover:font-bold pl-4 w-52 h-14 bg-black-medium hover:bg-pink hover:text-black-slid flex items-center gap-6 rounded-lg">
                  <span class="material-symbols-outlined">rss_feed</span>
                  Feed
                </button>
              </li>
              <li>
                <button className="font-roboto-mono hover:font-bold pl-4 w-52 h-14 bg-black-medium hover:bg-pink hover:text-black-slid flex items-center gap-6 rounded-lg">
                  <span class="material-symbols-outlined">
                    local_fire_department
                  </span>
                  Challenges
                </button>
              </li>
              <li>
                <button className="font-roboto-mono hover:font-bold pl-4 w-52 h-14 bg-black-medium hover:bg-pink hover:text-black-slid flex items-center gap-6 rounded-lg">
                  <span class="material-symbols-outlined">emoji_events</span>
                  Leaderboard
                </button>
              </li>
              <li>
                <button className="font-roboto-mono hover:font-bold pl-4 w-52 h-14 bg-black-medium hover:bg-pink hover:text-black-slid flex items-center gap-6 rounded-lg">
                  <span class="material-symbols-outlined">ad_units</span>
                  Device
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* labtop */}
      <div className="border-solid border-2 border-pink  m-0 p-0 absolute top-10 left-0 mt-0 ml-14 sm:inline hidden ">
        <div className="flex items-center">
          <div onClick={() => setNav(!nav)} className="cursor-pointer pt-3 hover:bg-white">
            <span class="material-symbols-outlined">menu</span>
          </div>
          {/* <div className="w-65 h-full ml-2 justify-center text-center  inline sm:hidden border-solid border-2 border-pink">
            <img
              src="/src/assets/image/Logo/Logo.png"
              alt="is missing"
              className=""
            />
          </div> */}
        </div>

        {/* Modile Menu */}
        {/* Overlay */}
        {nav ? (
          <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
        ) : (
          ""
        )}
        {/* <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div> */}

        {/* Side drwer menu */}
        <div
          className={
            nav
              ? "fixed top-0 left-0 w-[300px] h-screen bg-black-medium z-10 duration-300 text-white"
              : "fixed top-0 left-[-100%] w-[300px] h-screen bg-black-medium z-10 duration-300 text-white"
          }
        >
          
          <div
            onClick={() => setNav(!nav)}
            className="absolute right-3 mt-10 pt-3 cursor-pointer h-0 "
            // className="fixed inset-0 h-full w-full z-10"
          >
            <span class="material-symbols-outlined">close</span>
          </div>

          <nav>
            <ul className="flex flex-col items-center pl-0 pr-4 mt-10 pt-3 ">
              <li className="">
                <button className="font-roboto-mono hover:font-bold pl-4 w-52 h-14 bg-black-medium hover:bg-pink hover:text-black-slid flex items-center gap-6 rounded-lg">
                  <span class="material-symbols-outlined">dashboard</span>
                  Dashboard
                </button>
              </li>
              <li>
                <button className="font-roboto-mono hover:font-bold pl-4 w-52 h-14 bg-black-medium hover:bg-pink hover:text-black-slid flex items-center gap-6 rounded-lg">
                  <span class="material-symbols-outlined">date_range</span>
                  Workouts
                </button>
              </li>
              <li>
                <button className="font-roboto-mono hover:font-bold pl-4 w-52 h-14 bg-black-medium hover:bg-pink hover:text-black-slid flex items-center gap-6 rounded-lg">
                  <span class="material-symbols-outlined">paid</span>
                  Wallet
                </button>
              </li>
              <li>
                <button className="font-roboto-mono hover:font-bold pl-4 w-52 h-14 bg-black-medium hover:bg-pink hover:text-black-slid flex items-center gap-6 rounded-lg">
                  <span class="material-symbols-outlined">redeem</span>
                  Reward
                </button>
              </li>
              <li>
                <button className="font-roboto-mono hover:font-bold pl-4 w-52 h-14 bg-black-medium hover:bg-pink hover:text-black-slid flex items-center gap-6 rounded-lg">
                  <span class="material-symbols-outlined">rss_feed</span>
                  Feed
                </button>
              </li>
              <li>
                <button className="font-roboto-mono hover:font-bold pl-4 w-52 h-14 bg-black-medium hover:bg-pink hover:text-black-slid flex items-center gap-6 rounded-lg">
                  <span class="material-symbols-outlined">
                    local_fire_department
                  </span>
                  Challenges
                </button>
              </li>
              <li>
                <button className="font-roboto-mono hover:font-bold pl-4 w-52 h-14 bg-black-medium hover:bg-pink hover:text-black-slid flex items-center gap-6 rounded-lg">
                  <span class="material-symbols-outlined">emoji_events</span>
                  Leaderboard
                </button>
              </li>
              <li>
                <button className="font-roboto-mono hover:font-bold pl-4 w-52 h-14 bg-black-medium hover:bg-pink hover:text-black-slid flex items-center gap-6 rounded-lg">
                  <span class="material-symbols-outlined">ad_units</span>
                  Device
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Desktop */}
      <div className="w-240  m-0 p-0 absolute top-0 left-0 h-full border-solid border-2 border-pink hidden md:inline">
        <div className=" bg-black-medium top-0 left-0 h-full text-white pt-10">
          <div className="flex justify-center text-center pb-10">
            <img
              src="/src/assets/image/Logo/Logo.png"
              alt="is missing"
              className=""
            />
          </div>
          <ul className="flex flex-col items-center pl-4 pr-4">
            <li className="">
              <button className="font-roboto-mono hover:font-bold pl-4 w-52 h-14 bg-black-medium hover:bg-pink hover:text-black-slid flex items-center gap-6 rounded-lg">
                <span class="material-symbols-outlined">dashboard</span>
                Dashboard
              </button>
            </li>
            <li>
              <button className="font-roboto-mono hover:font-bold pl-4 w-52 h-14 bg-black-medium hover:bg-pink hover:text-black-slid flex items-center gap-6 rounded-lg">
                <span class="material-symbols-outlined">date_range</span>
                Workouts
              </button>
            </li>
            <li>
              <button className="font-roboto-mono hover:font-bold pl-4 w-52 h-14 bg-black-medium hover:bg-pink hover:text-black-slid flex items-center gap-6 rounded-lg">
                <span class="material-symbols-outlined">paid</span>
                Wallet
              </button>
            </li>
            <li>
              <button className="font-roboto-mono hover:font-bold pl-4 w-52 h-14 bg-black-medium hover:bg-pink hover:text-black-slid flex items-center gap-6 rounded-lg">
                <span class="material-symbols-outlined">redeem</span>
                Reward
              </button>
            </li>
            <li>
              <button className="font-roboto-mono hover:font-bold pl-4 w-52 h-14 bg-black-medium hover:bg-pink hover:text-black-slid flex items-center gap-6 rounded-lg">
                <span class="material-symbols-outlined">rss_feed</span>
                Feed
              </button>
            </li>
            <li>
              <button className="font-roboto-mono hover:font-bold pl-4 w-52 h-14 bg-black-medium hover:bg-pink hover:text-black-slid flex items-center gap-6 rounded-lg">
                <span class="material-symbols-outlined">
                  local_fire_department
                </span>
                Challenges
              </button>
            </li>
            <li>
              <button className="font-roboto-mono hover:font-bold pl-4 w-52 h-14 bg-black-medium hover:bg-pink hover:text-black-slid flex items-center gap-6 rounded-lg">
                <span class="material-symbols-outlined">emoji_events</span>
                Leaderboard
              </button>
            </li>
            <li>
              <button className="font-roboto-mono hover:font-bold pl-4 w-52 h-14 bg-black-medium hover:bg-pink hover:text-black-slid flex items-center gap-6 rounded-lg">
                <span class="material-symbols-outlined">ad_units</span>
                Device
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
