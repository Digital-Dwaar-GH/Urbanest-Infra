import React, { useState } from 'react';

export const QuestionCard = ({ question, answer, number }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-l-2 border-r-2 border-b-2 rounded-xl border-gray-200">
      {/* Question Section */}
      <div
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={toggleAnswer}
      >
        <h3 className="text-lg font-semibold">{`Q${number}: ${question}`}</h3>
        <svg
          className={`transform ${isOpen ? 'rotate-180' : ''} transition-transform duration-200`}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 10L12 15L17 10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Answer Section with smooth transition */}
      <div
        className={`transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        {isOpen && (
          <div className="p-4 pt-0 text-left">
            <p>{answer}</p>
          </div>
        )}
      </div>
    </div>
  );
};
