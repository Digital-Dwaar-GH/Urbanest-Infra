import React from 'react'

export const Banner = () => {
  return (
    <div className="px-8 md:px-32 pt-16 pb-64 md:py-48 flex flex-col items-center text-center md:items-start md:text-left">
        <div className="flex flex-col items-center space-y-8 md:items-start w-full md:w-[555px]">
            <div className="font-semibold text-2xl sm:text-4xl md:text-6xl ">
                Best Platform To Find Your Dream Residence
            </div>
            <div className="text-sm md:text-lg">
                Are you looking for the best place to live? We present an easy way to be the solution for your needs.
            </div>
        </div>
    </div>


  )
}
