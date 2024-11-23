import React from 'react';

export const Card = ({ title, description, imageUrl }) => {
  return (
    <div className='border w-96 p-4 rounded-lg shadow-md '>
      <img 
        src={imageUrl} 
        alt={title} 
        className='w-full h-40 object-cover rounded-md mb-4' 
      />
      <h3 className='font-semibold text-lg mb-2'>{title}</h3>
      <p className='text-sm text-gray-600'>{description}</p>
    </div>
  );
};
