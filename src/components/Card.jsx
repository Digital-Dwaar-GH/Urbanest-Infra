import React from 'react';

export const Card = ({ title, description, imageUrl}) => {
  return (
    <div className='border p-4 rounded-lg shadow-md'
      >
      <div className='h-56'>
        <img 
          src={imageUrl} 
          alt={title} 
          className='w-full h-full object-cover rounded-md ' 
        />
      </div>
      <div>
        <h3 className='font-semibold text-lg mb-2'>{title}</h3>
        <p className='text-sm text-gray-600'>{description}</p>
      </div>
    </div>
  );
};
