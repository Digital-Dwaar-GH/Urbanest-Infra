import React from 'react'

export const Footer = () => {
  return (
    <div className=' pt-20 pb-6 flex-col space-y-8'>
     <div className=' px-16 lg:px-32 flex flex-col lg:flex-row'>
        <div className='w-full lg:w-1/2 flex-col space-y-2 px-4 md:px-16'>
            <div className='flex '>
              <div>logo</div>
              <p>UrbanestInfra</p>
            </div>
            <div className='text-sm text-gray-600'>
                UrbanestInfra is a leading real estate platform dedicated to providing affordable, sustainable, and inclusive housing solutions.
            </div>
            <div className="flex items-center space-x-6">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="/facebook-logo.png" alt="Facebook"  />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="/twitter-logo.png" alt="Twitter"  />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src="/linkedin-logo.png" alt="LinkedIn"  />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="/instagram-logo.png" alt="Instagram"  />
              </a>
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
        <div className='text-sm'>@ 2021 UrbanestInfra. All rights reserved.</div>
      </div>
    </div>
  )
}
