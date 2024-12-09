import React, { useState } from 'react'
import SearchIcon from '../assets/Images/MagnifyingGlass.png'

export const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchClick = () => {
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="absolute flex justify-center items-center w-full md:top-[30.5%] transform -translate-y-1/2 z-10 " >
        <div className="bg-white p-4 shadow-lg rounded-md w-56 sm:w-72 md:w-96 flex space-x-4 items-center">
            <div className='w-54 md:w-96'>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full px-4 py-2 border rounded-md"
                    placeholder="Search..."
                />
            </div>
            <button className="bg-violet-500 rounded-md p-2 cursor-pointer w-12 h-12 flex justify-center items-center" onClick={handleSearchClick}>
                <img src={SearchIcon} alt="Search" />
            </button>
        </div>
    </div>
  )
}
