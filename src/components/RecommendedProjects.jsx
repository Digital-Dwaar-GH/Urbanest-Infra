import React, { useState, useEffect } from 'react';
import { Card } from './Card';
import { projects } from '../data/projects';
import '../assets/styles/scrollbar.css';

export const RecommendedProjects = () => {
  const [scrollIndex, setScrollIndex] = useState(0);
  const [cardsPerRow, setCardsPerRow] = useState(3); // Default for large screens
  const totalItems = projects.length;
  const getCardsPerRow = () => {
    if (window.innerWidth < 640) return 1; // 1 card on small screens
    if (window.innerWidth < 1024) return 2; // 2 cards on medium screens
    return 3; // 3 cards on large screens
  };

  useEffect(() => {
    const handleResize = () => {
      setCardsPerRow(getCardsPerRow());
    };
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNext = () => {
    if (scrollIndex < totalItems - cardsPerRow) {
      setScrollIndex(scrollIndex + 1);
    }
  };

  const handlePrev = () => {
    if (scrollIndex > 0) {
      setScrollIndex(scrollIndex - 1);
    }
  };

  return (
    <div className="bg-white">
      <div className=" pt-56 md:pt-32 pb-12 flex flex-col space-y-4 px-4 lg:px-32 relative">
        <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:justify-between">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-56 sm:top-48 md:top-28 left-2 lg:left-28"
          >
            <path
              d="M2 34V2H34"
              stroke="#7C3AED"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="max-w-md text-3xl md:text-5xl font-semibold">
            Recommended Projects
          </div>
          <div className="max-w-md break-words text-sm md:text-lg text-gray-700">
            Each property that we present has features and advantages that suit
            every need and expectation with what is desired, from a safe and
            comfortable environment.
          </div>
        </div>

        <div className="relative overflow-x-auto custom-scrollbar">
            {/* Left Button */}
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-transparent p-2 text-violet-200 hover:text-violet-500 focus:outline-none z-10 border-2 border-violet-200 rounded-full hover:border-violet-300 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 18L9 12L15 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Carousel Content */}
            <div
              className="flex space-x-4"
              style={{
                transform: `translateX(-${scrollIndex * (100 / cardsPerRow)}%)`,
                transition: 'transform 0.5s ease',
              }}
            >
              {projects.map((project) => (
                <div key={project.id} className="flex-shrink-0" style={{
                  width: `calc(${100 / cardsPerRow}% - 16px)`,
                }}>
                  <Card
                    title={project.title}
                    description={project.description}
                    imageUrl={project.imageUrl}
                  />
                </div>
              ))}
            </div>

            {/* Right Button */}
            <button
              onClick={handleNext}
               className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-transparent p-2 text-violet-200 hover:text-violet-500 focus:outline-none z-10 border-2 border-violet-200 rounded-full hover:border-violet-300 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
        </div>
      </div>
    </div>
  );
};
