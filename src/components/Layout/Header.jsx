import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/Images/Logo UI white.png'

export const Header = ({pageType}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='fixed top-0 left-0 text-white z-50 w-full'>
      <div className={`flex flex-row  items-center  ${
          isScrolled ? 'py-2 px-4 md:px-16 space-x-16 justify-center w-fit mx-auto bg-rblack-900 shadow-lg rounded-b-lg rounded-l-full rounded-r-full '
              : pageType === 'home' ? 'py-4 h-24 px-8 md:px-32 justify-between w-full' : 'py-4 h-24 px-8 md:px-32 justify-between w-full bg-gray-800/80'
            } transition-all duration-300 ` }>
        <Link to='/'>
          <img src={Logo} alt="UrbanestInfra" className="h-12 w-12" />
        </Link>
        <button
          className="block md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="white"
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
            <div
              className="font-semibold cursor-pointer group relative"
              onClick={() => navigate('/')}
            >
              Home
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
            </div>
            <div className="cursor-pointer group relative"
            onClick={() => navigate('/Property')}
            >
              Property
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
            </div>
            <div className="cursor-pointer group relative">
              Developers
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
            </div>
            <div
              className="cursor-pointer group relative"
              onClick={() => navigate('/Contact')}
            >
              Contact
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
            </div>
            <div className="cursor-pointer group relative"
                onClick={() => navigate('/About')}
              >
              About
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
            </div>
          </div>

        </div>
      </div>
      {isOpen && (
        <div className="absolute top-32 left-0 w-full bg-whitek-300 border-t-2 shadow-lg md:hidden">
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
