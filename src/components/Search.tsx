import { useState } from "react";

export default function Search({ search, setSearch }) {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
          placeholder="Search by Name or Phone Number"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {(search != "") ? (
          <div
            className="absolute inset-y-0 end-0 flex items-center pe-3 hover:cursor-pointer"
            onClick={()=>setSearch("")}
          >
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 5L4.99998 19M5.00001 5L19 19"
                  stroke="#6a7282"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
          </div>
        ) : (<></>)}
      </div>
    </>
  );
}
