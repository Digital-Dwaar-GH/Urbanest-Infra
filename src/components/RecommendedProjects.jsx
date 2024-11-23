import React, { useEffect, useRef, useState } from 'react'
import { Card } from './Card';
import { projects } from '../data/projects';
import '../assets/styles/scrollbar.css'

export const RecommendedProjects = () => {
    const [scrollIndex, setScrollIndex] = useState(0);

    const handleNext = () => {
        if (scrollIndex < projects.length-4) {
            setScrollIndex(scrollIndex + 1);
          }
    };

    const handlePrev = () => {
        if (scrollIndex > 0) {
            setScrollIndex(scrollIndex - 1);
          }
    };
    const scrollbarWidth = (scrollIndex / (projects.length - 4)) * 100;
  return (
    <div className='bg-white'>
        <div className='pt-32 pb-12 flex flex-col space-y-4 px-4 lg:px-32 relative'>
            <div className=' flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:justify-between'>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"  className="absolute top-28 left-0 lg:left-28">
                        <path d="M2 34V2H34" stroke="#7C3AED" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div className='max-w-md text-3xl md:text-5xl font-semibold'>
                    Recommended Projects
                </div>
                <div className='max-w-md break-words text-sm md:text-lg text-gray-700'>
                    Each property that we present has features and advantages that suit every need and expectation with what is desired, from a safe and comfortable environment.
                </div>
            </div>
            <div className=" overflow-x-auto custom-scrollbar">
                <div className="flex space-x-4" 
                style={{ transform: `translateX(-${scrollIndex * (25)}%)`, transition: 'transform 0.5s ease' }}>
                    {projects.map((project) => (
                    <div key={project.id} className="flex-shrink-0">
                        <Card
                        title={project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                        />
                    </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-between items-center">
                <div className="custom-scrollbar w-full h-1 mx-4 mt-2 bg-gray-200 relative">
                    <div
                    className="absolute top-0 left-0 h-full bg-violet-400"
                    style={{
                        width: `${scrollbarWidth}%`, // Dynamic scrollbar width
                    }}
                    />
                </div>
                <div className='flex space-x-2'>
                    <button
                        onClick={handlePrev}
                        className="bg-gray-200 text-white p-4 rounded-xl hover:bg-violet-400 group"
                    >
                        <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 2L2 8L8 14" stroke="#020617" stroke-width="2.2" stroke-linecap="round"  stroke-linejoin="round"   className="group-hover:stroke-white"/>
                        </svg>

                    </button>

                    <button
                        onClick={handleNext}
                        className=" bg-gray-200 text-white p-4 rounded-xl hover:bg-violet-400 group"
                    >
                        <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 14L8 8L2 2" stroke="#020617" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"   className="group-hover:stroke-white"/>
                        </svg>

                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
