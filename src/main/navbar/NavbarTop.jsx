import React from 'react'

export default function NavbarTop() {
    return (

<div className="  mt-0 py-3 px-7 w-full  border-b-1 border-[#222333]">
  <div className="flex  justify-between items-center w-full">
            <div className="logo ">logo</div>
            <form action="/search" className="max-w-[300px] w-full ">
                <div className="relative">
                    <input type="text" name="q" className="w-full border h-12 shadow p-4 rounded-full dark:text-gray-800 dark:border-gray-700 dark:bg-gray-200" placeholder="search" />
                    <button type="submit">

                    </button>
                </div>
            </form>
            </div>
        </div>
    )
}
