import React, { useState } from 'react';
import '../../assets/styles/scrollbar.css';
import { developers } from '../../data/developers';

export const Developers = () => {
  const [scrollIndex, setScrollIndex] = useState(0);
  const totalItems = developers.length;

  const handleNext = () => {
    if (scrollIndex < totalItems - 3) {
      setScrollIndex(scrollIndex + 1);
    }
  };

  const handlePrev = () => {
    if (scrollIndex > 0) {
      setScrollIndex(scrollIndex - 1);
    }
  };

  return (
    <div className="bg-white rounded-2xl">
      <div className="flex flex-col space-y-4 p-8">
        <div className="flex flex-row justify-center">
          <div className="max-w-xl text-3xl md:text-5xl font-semibold">
            Our Developers
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {/* Left Button */}
          <button
            onClick={handlePrev}
            className="bg-transparent p-2 text-whitek-500 hover:text-whitek-900 focus:outline-none z-10 border-2 border-rblack-200 rounded-full hover:border-rblack-500 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
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
          <div className="overflow-x-auto custom-scrollbar">
            <div
              className="flex space-x-4"
              style={{
                transform: `translateX(-${scrollIndex * (100 / 3)}%)`, // Fixed to 3 cards per row
                transition: 'transform 0.5s ease',
              }}
            >
              {developers.map((developer, index) => (
                <div
                  key={developer.id}
                  className={`flex-shrink-0 text-center transition-all duration-300 ${
                    index >= scrollIndex && index < scrollIndex + 3
                      ? 'opacity-100 scale-100'
                      : 'opacity-50 scale-90'
                  }`}
                  style={{
                    width: `calc(${100 / 3}% - 16px)`,
                  }}
                >
                  <div>
                    <img
                      src={developer.imageUrl}
                      alt={developer.name}
                      className="rounded-lg w-full h-48 md:h-60 object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Button */}
          <button
            onClick={handleNext}
            className="bg-transparent p-2 text-whitek-500 hover:text-whitek-900 focus:outline-none z-10 border-2 border-rblack-200 rounded-full hover:border-rblack-500 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
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

        {/* Developer Info (Below Carousel) */}
        <div className=" flex justify-center space-x-4 lg:space-x-24">
          {developers
            .slice(scrollIndex, scrollIndex + 3)
            .map((developer) => (
              <div
                key={developer.id}
                className="flex flex-col space-y-2 justify-center items-center"
              >
                <h3 className=" text-sm lg:text-lg font-bold">{developer.name}</h3>
                <div className="hidden  lg:flex space-x-4">
                  <p className="text-sm text-gray-500">
                    propertiesForSale: {developer.propertiesForSale}
                  </p>
                  <p className="text-sm">
                    propertiesForRent: {developer.propertiesForRent}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
