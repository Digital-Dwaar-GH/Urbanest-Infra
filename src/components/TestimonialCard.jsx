import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';

export const TestimonialCard = ({ name, company, description, imageUrl, rating }) => {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => 
      i < rating
        ? <FaStar key={i} className="text-yellow-500" /> 
        : <FaRegStar key={i} className="text-yellow-500" />
    );
  };
  return (
    <div className="border p-6 rounded-lg shadow-md flex flex-col items-center text-center space-y-4 h-80">
      <div className="w-24 h-24">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover rounded-full border-2 border-gray-300"
        />
      </div>
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-sm text-gray-500">{company}</p>
      <div className="flex space-x-1">
        {renderStars(rating)}
      </div>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};
