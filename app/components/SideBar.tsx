function SideBar({ logo = "nishyan.svg", storeName = "Nishyan", credits="233.20"}) {
  return (
    <div className="bg-blue-900 text-white h-full flex flex-col ">
      <div className="p-3 flex ">
        <div>
          <img src={logo} className="h-12 w-12 rounded-xl"></img>
        </div>
        <div className="flex justify-between w-full">
          <div className="ml-3">
            {storeName}
            <div className="underline">Visit Store</div>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="3"
              stroke="currentColor"
              className="size-7"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-end flex-grow">
        <div className="bg-gray-500 w-full m-3 p-2 flex items-center rounded-md">
          <div >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-13"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
              />
            </svg>
          </div>
          <div>
          <div className="text-sm ml-2">Available Credits</div>
          <div className="ml-2 text-xl">{credits}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
