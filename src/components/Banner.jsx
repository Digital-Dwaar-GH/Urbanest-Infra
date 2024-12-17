import React from 'react'
import { SearchBar } from './SearchBar/SearchBar'
export const Banner = () => {
  return (
    <div className="px-8 md:px-32 pt-16 pb-64 md:pt-12 md:pb-32 flex flex-col space-y-4 items-center text-center ">
        <div className="flex flex-col items-center space-y-8 md:items-start w-full md:w-[555px] text-white">
            <div className="font-semibold text-2xl sm:text-4xl md:text-6xl">
                Best Platform To Find Your Dream Residence
            </div>
            <div className="text-sm md:text-lg">
                Are you looking for the best place to live? We present an easy way to be the solution for your needs.
            </div>
        </div>
        <SearchBar/>
    </div>


  )
}
