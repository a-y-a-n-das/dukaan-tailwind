function AppBar() {
  return (
    <div className="flex h-16 items-center justify-between border border-gray-300 ">
      <div className="flex justify-between font-semibold text-xl w-35 ml-5">
        <button className="lg:hidden ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <div className="flex items-center">
        Payouts
        </div>
      </div>

      <div>
        <input
          className="border border-gray-100 rounded-md m-1 p-2  w-[280px]  bg-gray-100 focus:outline-none"
          placeholder="Search features, tutorials, etc."
        ></input>
      </div>

      <div>
        <button>notif</button>
      </div>
    </div>
  );
}

export default AppBar;
