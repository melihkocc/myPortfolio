import React from 'react'

function Search() {
  return (
    <div className="relative w-full mt-2 rounded-md">
      <input
        id="search"
        name="search"
        type="search"
        placeholder="Search..."
        className="block mt-5 text-lg w-11/12 lg:w-8/12 mx-auto rounded-md border-0 py-2 pl-7 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-lg focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  )
}

export default Search