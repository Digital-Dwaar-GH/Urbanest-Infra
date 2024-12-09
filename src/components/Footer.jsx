import React from 'react'

export const Footer = () => {
  return (
    <div className=' pt-20 pb-6 flex-col space-y-8'>
     <div className='border-2 border-gray-300 px-32 flex justify-between'>
        <div>
            UrbanestInfra
        </div>
        <div className="flex justify-between border-2 border-violet-300">
          <div className="flex-1">
            <p>Services</p>
          </div>
          <div className="flex-1">
            <p>Information</p>
          </div>
          <div className="flex-1">
            <p>Company</p>
          </div>
        </div>
     </div>
      <div className='flex justify-center pt-2 border-t-2'>
        <div className='text-sm'>@ 2021 UrbanestInfra. All rights reserved.</div>
      </div>
    </div>
  )
}
