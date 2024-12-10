import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate=useNavigate()

  return (
    <div className="relative">
      <div className=' justify-between h-12 px-8 md:px-16 py-2 hidden md:flex '>
        <div className="flex items-center space-x-4">
          <a href="https://www.yourwebsite.com" className="flex items-center space-x-2">
            <img src="/logo.png" alt="Logo" />
            <span className="text-md font-bold">mail</span>
          </a>
          <a href="https://www.yourwebsite.com" className="flex items-center space-x-2">
            <img src="/logo.png" alt="Logo"/>
            <span className="text-md font-bold">Location</span>
          </a>
        </div>
        <div className="flex items-center space-x-6">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/facebook-logo.png" alt="Facebook" className="h-6" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="/twitter-logo.png" alt="Twitter" className="h-6" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin-logo.png" alt="LinkedIn" className="h-6" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/instagram-logo.png" alt="Instagram" className="h-6" />
          </a>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center  h-32 px-8 md:px-32 py-8">
        <div className="border-2 border-violet-300">Logo</div>
        <button
          className="block md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div className="hidden md:flex">
          <div className="pt-1">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 18V2H18"
                stroke="#7C3AED"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex flex-row space-x-8 py-4">
            <div className="font-semibold cursor-pointer" onClick={() => navigate('/')}>Home</div>
            <div>Property</div>
            <div>Agent</div>
            <div className='cursor-pointer' onClick={() => navigate('/Contact')}>Contact</div>
            <div>About</div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-32 left-0 w-full bg-white border-t-2 border-violet-300 shadow-lg md:hidden">
          <div className="flex flex-col space-y-4 p-4">
            <div className="font-semibold">Home</div>
            <div>Property</div>
            <div>Agent</div>
            <div>Contact</div>
            <div>About</div>
          </div>
        </div>
      )}
    </div>
  );
};
