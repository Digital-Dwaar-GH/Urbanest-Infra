import React from 'react'
import deal from '../assets/Images/about-deal.jpg'
import { projects } from '../data/projects';
import AboutImg from '../assets/Images/aboutUs.jpg'
export const AboutUs = () => {
  const totalItems = projects.length;
  return (
    <div className="flex flex-col lg:flex-row rounded-2xl overflow-hidden shadow-lg bg-white">
        <div className="lg:w-1/2 relative h-auto">
          <img
            src={AboutImg}
            alt="1920x1080"
            className="object-cover h-full w-full"
          />
          <div
            className="absolute top-[75%] lg:top-[75%] right-0 transform -translate-y-1/2 w-12 h-12 md:w-24 md:h-24 bg-violet-300 rounded-full border-8 border-white flex items-center justify-center z-10 "
          >
            <div className='flex-col text-center'>
              <p className=' text-md md:text-3xl font-bold text-violet-500'>{totalItems}+</p>
              <p className='hidden md:block text-[10px]'>completed project</p>
            </div>
          </div>
          <div
            className="absolute bottom-0 right-0 w-24 h-24 md:w-36 md:h-36 rounded-full border-8 border-white overflow-clip"
          >
              <img src={deal} className="w-full h-full object-cover" alt="deal" />
          </div>
        </div>
        <div className='lg:w-1/2 flex-col space-y-6 justify-center px-4 py-16 relative'>
            <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-20 left-2 lg:left-1"
              >
                <path
                  d="M2 34V2H34"
                  stroke="#7C3AED"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
          <div className='text-2xl md:text-3xl'>WHO WE ARE</div>
          <h1 className='text-3xl md:text-5xl '>Crafting Your Real Estate <br></br> Story with Expertise and Care</h1>
          <p className='max-w-md break-words text-sm md:text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <button className='bg-violet-500 p-2 rounded-md text-white text-sm'>
              MORE ABOUT US
          </button>
        </div>
    </div>
  )
}
