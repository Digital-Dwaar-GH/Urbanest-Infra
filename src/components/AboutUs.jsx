import React from 'react'
import deal from '../assets/Images/about-deal.jpg'
import { projects } from '../data/projects';
export const AboutUs = () => {
  const totalItems = projects.length;
  return (
    <div className='flex flex-col lg:flex-row px-4 lg:px-32 '>
        <div className="lg:w-1/2 relative">
          <img
            src={null}
            alt="1920x1080"
            className="object-cover"
          />
          <div
            className="absolute top-[55%] right-0 transform -translate-y-1/2 w-24 h-24 bg-violet-300 rounded-full border-8 border-white flex items-center justify-center z-10 "
          >
            <div className='flex-col text-center'>
              <p className='text-3xl font-bold text-violet-500'>{totalItems}+</p>
              <p className='text-[10px]'>completed project</p>
            </div>
          </div>
          <div
            className="absolute bottom-0 right-0 w-36 h-36 rounded-full border-8 border-white overflow-clip"
          >
              <img src={deal} className="w-full h-full object-cover" alt="deal" />
          </div>
        </div>
        <div className='lg:w-1/2 flex-col space-y-6 justify-center px-4 pb-16'>
          <div className='text-md text-violet-500'>WHO WE ARE</div>
          <h1 className='text-2xl '>Crafting Your Real Estate <br></br> Story with Expertise and Care</h1>
          <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <button className='bg-violet-500 p-2 rounded-md text-white text-sm'>
              MORE ABOUT US
          </button>
        </div>
    </div>
  )
}
