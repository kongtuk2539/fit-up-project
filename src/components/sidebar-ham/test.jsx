<div className="inline md:hidden border-solid border-2 border-pink">
  <div className="flex items-center">
    <div onClick={() => setHam(!ham)} className="cursor-pointer pt-3">
      <span class="material-symbols-outlined">menu</span>
    </div>
  </div>

  {nav ? (
    <div className="bg-black/80 fixed w-full h-screen z-10 top-0 right-0"></div>
  ) : (
    ""
  )}

  {/* Side drwer menu */}
  <div
    className={
      nav
        ? "fixed top-0 right-0 w-[300px] h-screen bg-black-medium z-10 duration-300 text-white"
        : "fixed top-0 right-[-100%] w-[300px] h-screen bg-black-medium z-10 duration-300 text-white"
    }
  >
    <div
      onClick={() => setHam(!ham)}
      className="absolute right-3 mt-10 pt-3 cursor-pointer h-0 "
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
      </ul>
    </nav>
  </div>
</div>;
