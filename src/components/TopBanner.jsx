import React from 'react'
import { Link } from 'react-router-dom'
import FacebookIcon from '../assets/svg/facebook.jsx';
import Mail from '../assets/svg/email.jsx';
import InstagramIcon from '../assets/svg/instagram.jsx';
import LinkedInIcon from '../assets/svg/linkedin.jsx';
import LocationIcon from '../assets/svg/location.jsx';
import TwitterIcon from '../assets/svg/twitter.jsx';

export const TopBanner = () => {
  return (
    <div>
        <div className=' justify-between h-12 px-8 md:px-16 py-2 hidden md:flex '>
            <div className="flex items-center space-x-4 text-gray-500">
            <Link to="https://www.yourwebsite.com" className="flex items-center space-x-2">
                <Mail fill="gray" className="h-6 w-6" /> 
                <span className="text-md font-bold">Mail</span>
            </Link>
            <Link to="https://www.yourwebsite.com" className="flex items-center space-x-2">
                <LocationIcon fill="gray" className="h-6 w-6" /> 
                <span className="text-md font-bold">Location</span>
            </Link>
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
    </div>
  )
}
