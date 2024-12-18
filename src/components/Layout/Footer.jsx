import React from 'react'
import FacebookIcon from '../../assets/svg/facebook'
import InstagramIcon from '../../assets/svg/instagram'
import LinkedInIcon from '../../assets/svg/linkedin'
import TwitterIcon from '../../assets/svg/twitter'
import { Link } from 'react-router-dom'
import Logo from '../../assets/Images/Logo UI white.png'
import footleft from '../../assets/Images/footer-1.jpg'
import footcenter from '../../assets/Images/footer-2.jpg'
import footright from '../../assets/Images/footer-3.jpg'
export const Footer = () => {
  return (
    <div className='py-8 px-16 lg:px-32 flex-col space-y-8 bg-whitek-500 text-white'>
     <div className=' bg-white rounded-2xl py-8 flex justify-center items-center'>
        <div className=' flex-col space-y-4 justify-center items-center  text-center'>
          <div className="relative flex justify-center items-center space-x-4">
            <div className="flex justify-center items-center rounded-full overflow-hidden border-2">{/* image*/}
              <img src={footleft} alt="Left" className="h-24 w-24 object-cover" />
            </div>

            <div className="flex justify-center items-center rounded-full overflow-hidden border-2">
              <img src={footcenter} alt="Center" className="h-24 w-24 object-cover" />
            </div>

            <div className="flex justify-center items-center rounded-full overflow-hidden border-2">
              <img src={footright} alt="Right" className="h-24 w-24 object-cover" />
            </div>
          </div>

            <div className='font-semibold text-xl'>Still Have Any Question?</div>
            <div className='text-gray-500 text-md'>Can’t find the answer you’re looking for? Please chat to our friendly team.</div>
            <div className="flex justify-center">
              <Link to="/Contact" className="text-white text-lg bg-whitek-600 hover:bg-whitek-900  px-6 py-2 rounded-md">
                Get in Touch
              </Link>
            </div>
        </div>
     </div>
     <div className=' flex flex-col lg:flex-row '>
          <div className='w-full lg:w-1/2 flex-col space-y-2'>
            <div className='flex space-x-2 '>
              <img src={Logo} alt="Logo" className="h-10 w-10" />
              <p>UrbanestInfra</p>
            </div>
            <div className='text-sm'>
                UrbanestInfra is a leading real estate platform dedicated to providing affordable, sustainable, and inclusive housing solutions.
            </div>
            <div className="flex items-center space-x-6">
              <Link to="https://www.facebook.com" target="_blank">
                <FacebookIcon fill="#c9c0bf" className="h-6 w-6" />
              </Link>
              <Link to="https://www.facebook.com" target="_blank">
                <InstagramIcon fill="#c9c0bf" className="h-6 w-6" />
              </Link>
              <Link to="https://www.facebook.com" target="_blank">
                <LinkedInIcon fill="#c9c0bf" className="h-6 w-6" />
              </Link>
              <Link to="https://www.facebook.com" target="_blank">
                <TwitterIcon fill="#c9c0bf" className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div className="flex justify-between w-full lg:w-1/2 px-4 md:px-16 text-xs md:text-sm lg:text-md">
          <div className='flex-col space-y-4'>
            <div className='text-sm md:text-md lg:text-lg font-semibold'>Services</div>
            <div className="cursor-pointer group relative">
              <span className="relative">
                Apartment
                <span className="absolute bottom-[-4px] left-1/2 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
              </span>
            </div>
            <div className="cursor-pointer group relative">
              <span className="relative">
                Warehouse
                <span className="absolute bottom-[-4px] left-1/2 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
              </span>
            </div>
            <div className="cursor-pointer group relative">
              <span className="relative">
                Housing
                <span className="absolute bottom-[-4px] left-1/2 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
              </span>
            </div>
            <div className="cursor-pointer group relative">
              <span className="relative">
                Villa
                <span className="absolute bottom-[-4px] left-1/2 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
              </span>
            </div>
            <div className="cursor-pointer group relative">
              <span className="relative">
                Coworking
                <span className="absolute bottom-[-4px] left-1/2 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
              </span>
            </div>
          </div>

          <div className='flex-col space-y-4'>
            <div className='text-sm md:text-md lg:text-lg font-semibold'>Information</div>
            <div className="cursor-pointer group relative">
              <span className="relative">
                Become Member
                <span className="absolute bottom-[-4px] left-1/2 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
              </span>
            </div>
            <div className="cursor-pointer group relative">
              <span className="relative">
                Get The App
                <span className="absolute bottom-[-4px] left-1/2 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
              </span>
            </div>
            <div className="cursor-pointer group relative">
              <span className="relative">
                Rule Sign Up
                <span className="absolute bottom-[-4px] left-1/2 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
              </span>
            </div>
            <div className="cursor-pointer group relative">
              <span className="relative">
                Newsletter
                <span className="absolute bottom-[-4px] left-1/2 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
              </span>
            </div>
          </div>

          <div className='flex-col space-y-4'>
            <div className='text-sm md:text-md lg:text-lg font-semibold'>Company</div>
            <div className="cursor-pointer group relative">
              <span className="relative">
                Partnership
                <span className="absolute bottom-[-4px] left-1/2 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
              </span>
            </div>
            <div className="cursor-pointer group relative">
              <span className="relative">
                Terms of Use
                <span className="absolute bottom-[-4px] left-1/2 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
              </span>
            </div>
            <div className="cursor-pointer group relative">
              <span className="relative">
                About
                <span className="absolute bottom-[-4px] left-1/2 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
              </span>
            </div>
            <div className="cursor-pointer group relative">
              <span className="relative">
                Sitemap
                <span className="absolute bottom-[-4px] left-1/2 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
              </span>
            </div>
            <div className="cursor-pointer group relative">
              <span className="relative">
                Contact
                <span className="absolute bottom-[-4px] left-1/2 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
              </span>
            </div>
          </div>
        </div>
     </div>
     <div className='h-1 border-t border-white'></div>
      <div className='flex justify-center'>
        <div className='text-sm'>@ 2024 <span className='font-semibold'>UrbanestInfra.</span> All rights reserved.</div>
      </div>
    </div>
  )
}
