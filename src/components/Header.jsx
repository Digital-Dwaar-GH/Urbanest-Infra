import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FacebookIcon from '../assets/svg/facebook.jsx';
import Mail from '../assets/svg/email.jsx';
import InstagramIcon from '../assets/svg/instagram.jsx';
import LinkedInIcon from '../assets/svg/linkedin.jsx';
import LocationIcon from '../assets/svg/location.jsx';
import TwitterIcon from '../assets/svg/twitter.jsx';
import Logo from '../assets/Images/Logo UI white.png'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate=useNavigate()

  return (
    <div className="relative">
      <div className=' justify-between h-12 px-8 md:px-16 py-2 hidden md:flex '>
        <div className="flex items-center space-x-4 text-white">
          <Link to="https://www.yourwebsite.com" className="flex items-center space-x-2">
            <Mail fill="white" className="h-6 w-6" /> 
            <span className="text-md font-bold">mail</span>
          </Link>
          <Link to="https://www.yourwebsite.com" className="flex items-center space-x-2">
            <LocationIcon fill="white" className="h-6 w-6" /> 
            <span className="text-md font-bold">Location</span>
          </Link>
        </div>
        <div className="flex items-center space-x-6">
          <Link to="https://www.facebook.com" target="_blank">
            <FacebookIcon fill="white" className="h-6 w-6" />
          </Link>
          <Link to="https://www.facebook.com" target="_blank">
            <InstagramIcon fill="white" className="h-6 w-6" />
          </Link>
          <Link to="https://www.facebook.com" target="_blank">
            <LinkedInIcon fill="white" className="h-6 w-6" />
          </Link>
          <Link to="https://www.facebook.com" target="_blank">
            <TwitterIcon fill="white" className="h-6 w-6" />
          </Link>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center  h-32 px-8 md:px-32 py-8">
        <Link to='/'>
          <img src={Logo} alt="UrbanInsta" className="h-12 w-12" />
        </Link>
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
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex flex-row space-x-8 py-4 text-white">
            <div className="font-semibold cursor-pointer" onClick={() => navigate('/')}>Home</div>
            <div>Property</div>
            <div>Agent</div>
            <div className='cursor-pointer' onClick={() => navigate('/Contact')}>Contact</div>
            <div>About</div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-32 left-0 w-full bg-white border-t-2 border-violet-300 shadow-lg md:hidden text-white">
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
