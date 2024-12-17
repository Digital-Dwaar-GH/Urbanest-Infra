import React, { useEffect, useState } from 'react'
import '../assets/styles/scrollbar.css';
import { reviews } from '../data/reviews';
import { TestimonialCard } from './TestimonialCard';

export const Testimonial = () => {
    const [scrollIndex, setScrollIndex] = useState(0);
    const [cardsPerRow, setCardsPerRow] = useState(3); // Default for large screens
    const totalItems = reviews.length;
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
    <div className="bg-white rounded-2xl">
      <div className="flex flex-col space-y-4 p-8 relative ">
        <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:justify-between ">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-6 left-2 lg:left-2"
          >
            <path
              d="M2 34V2H34"
              stroke="#7C3AED"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="max-w-xl text-3xl md:text-5xl font-semibold">
            They vote on the property services we provide
          </div>
        </div>
        <div className="relative">
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
            <div className='overflow-x-auto custom-scrollbar'>
              <div
                className="flex space-x-4"
                style={{
                  transform: `translateX(-${scrollIndex * (100 / cardsPerRow)}%)`,
                  transition: 'transform 0.5s ease',
                }}
              >
                {reviews.map((review) => (
                  <div key={review.id} className="flex-shrink-0" style={{
                    width: `calc(${100 / cardsPerRow}% - 16px)`,
                  }}>
                  <TestimonialCard
                    key={review.id}
                    name={review.name}
                    company={review.company}
                    description={review.description}
                    imageUrl={review.imageUrl}
                    rating={review.rating}
                  />
                  </div>
                ))}
              </div>
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
  )
}
