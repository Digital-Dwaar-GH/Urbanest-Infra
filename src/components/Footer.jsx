import React from 'react'
import FacebookIcon from '../assets/svg/facebook'
import InstagramIcon from '../assets/svg/instagram'
import LinkedInIcon from '../assets/svg/linkedin'
import TwitterIcon from '../assets/svg/twitter'
import { Link } from 'react-router-dom'
import Logo from '../assets/Images/Logo UI ICON.png'
export const Footer = () => {
  return (
    <div className=' pt-20 pb-6 flex-col space-y-8'>
     <div className=' px-16 lg:px-32 flex flex-col lg:flex-row'>
          <div className='w-full lg:w-1/2 flex-col space-y-2 px-4 md:px-16'>
            <div className='flex space-x-2 '>
              <img src={Logo} alt="Logo" className="h-10 w-10" />
              <p>UrbanestInfra</p>
            </div>
            <div className='text-sm text-gray-600'>
                UrbanestInfra is a leading real estate platform dedicated to providing affordable, sustainable, and inclusive housing solutions.
            </div>
            <div className="flex items-center space-x-6">
              <Link to="https://www.facebook.com" target="_blank">
                <FacebookIcon fill="gray" className="h-6 w-6" />
              </Link>
              <Link to="https://www.facebook.com" target="_blank">
                <InstagramIcon fill="gray" className="h-6 w-6" />
              </Link>
              <Link to="https://www.facebook.com" target="_blank">
                <LinkedInIcon fill="gray" className="h-6 w-6" />
              </Link>
              <Link to="https://www.facebook.com" target="_blank">
                <TwitterIcon fill="gray" className="h-6 w-6" />
              </Link>
            </div>
          </div>
        <div className="flex justify-between w-full lg:w-1/2 px-4 md:px-16 text-xs md:text-sm lg:text-md ">
          <div className='flex-col space-y-4'>
              <div className='text-sm md:text-md lg:text-lg font-semibold'>Services</div>
              <div>Apartement</div>
              <div>Warehouse</div>
              <div>Housing</div>
              <div>Villa</div>
              <div>Coworking</div>
          </div>
          <div className='flex-col space-y-4'>
              <div className='text-sm md:text-md lg:text-lg font-semibold'>Information</div>
              <div>Become Member</div>
              <div>Get The App</div>
              <div>Rule Sign Up</div>
              <div>Newsletter</div>
          </div>
          <div className='flex-col space-y-4'>
              <div className='text-sm md:text-md lg:text-lg font-semibold'>Company</div>
              <div>Patnership</div>
              <div>Terms of Use</div>
              <div>About</div>
              <div>Sitemap</div>
              <div>Contact</div>
          </div>
        </div>
     </div>
      <div className='flex justify-center pt-2 border-t-2'>
        <div className='text-sm'>@ 2024 UrbanestInfra. All rights reserved.</div>
      </div>
    </div>
  )
}
