import React from 'react'
import { projects } from '../data/projects';
import { useNavigate } from 'react-router-dom';
import { statsData } from '../data/status';
import LocationIcon from '../assets/svg/location';
export const AboutUs = () => {
  const totalItems = projects.length;
  const navigate=useNavigate();
  return (
    <div className="flex flex-col space-y-8 p-4 rounded-2xl overflow-hidden shadow-lg bg-white">
        <div className='w-full flex justify-center'>
          <div className='text-3xl md:text-5xl font-semibold'>WHY CHOOSE US</div>
        </div>
        <div className='flex-col space-y-4'>
          <div className='flex flex-col space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0'>
            <div className='flex-1 rounded-xl flex space-x-4 p-4 bg-gradient-to-t from-rblack-900 to-rblack-400 text-white'>
                <div>
                  <LocationIcon fill="white" className='w-10 h-10' />
                </div>
                <div className='pb-4'>
                  <div className='font-semibold'>Easy Consultation</div>
                  <div>We help the buyers from starting to the end of home purchase by understanding their needs and offering them the ideal investment opportunities.</div>
                </div>
            </div>
            <div className='flex-1 rounded-xl flex space-x-4 p-4 bg-gradient-to-t from-rblack-900 to-rblack-400 text-white'>
                <div>
                  <LocationIcon fill="white" className='w-10 h-10' />
                </div>
              <div className='pb-4'>
                <div className='font-semibold'>Financial Assistance</div>
                <div>We provide loan advisory, home loan facilitation, evaluation of mortgage options, legal assistance on long and short term taxation.</div>
              </div>
            </div>
            <div className='flex-1 rounded-xl flex space-x-4 p-4 bg-gradient-to-t from-rblack-900 to-rblack-400 text-white'>
                <div>
                  <LocationIcon fill="white" className='w-10 h-10' />
                </div>
              <div className='pb-4'>
                <div className='font-semibold'>After Sale Assistance</div>
                <div>We believe in providing the best services to the customers so we don’t just stop serving them at the end of their purchase but we also provide the after sale services.</div>
              </div>
            </div>
          </div>

          <div className='flex flex-wrap space-x-8 justify-center'>
            {statsData.map((stat, index) => (
              <div key={index} className='flex flex-col space-y-4 items-center  '>
                <div className='text-5xl font-bold text-rblack-300'>{stat.value}+</div>
                <div className='max-w-56 text-center text-xl'>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}
