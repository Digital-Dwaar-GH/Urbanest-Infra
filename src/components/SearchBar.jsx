import React, { useState } from 'react';
import SearchIcon from '../assets/Images/MagnifyingGlass.png';

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    triggerSearch(event.target.value, selectedLocation, selectedType, selectedPrice);
  };

  const handleLocationChange = (e) => {
    const value = e.target.value;
    setSelectedLocation(value);
    triggerSearch(searchQuery, value, selectedType, selectedPrice);
  };

  const handleTypeChange = (e) => {
    const value = e.target.value;
    setSelectedType(value);
    triggerSearch(searchQuery, selectedLocation, value, selectedPrice);
  };

  const handlePriceChange = (e) => {
    const value = e.target.value;
    setSelectedPrice(value);
    triggerSearch(searchQuery, selectedLocation, selectedType, value);
  };

  const triggerSearch = (query, location, type, price) => {
    const filters = { query, location, type, price };
    console.log('Filters applied:', filters);
    // Replace with your search/filter logic
  };

  return (
    <div className="absolute flex justify-center items-center w-full md:top-[30.5%] transform -translate-y-1/2 z-10">
      <div className="bg-white p-4 shadow-lg rounded-md w-full sm:w-72 md:w-96 flex flex-col space-y-4">
        <div className="flex space-x-4 items-center">
          <div className="w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Search..."
            />
          </div>
          <button
            className="bg-violet-500 rounded-md p-2 cursor-pointer w-12 h-10 flex justify-center items-center"
            onClick={() => triggerSearch(searchQuery, selectedLocation, selectedType, selectedPrice)}
          >
            <img src={SearchIcon} alt="Search" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label htmlFor="location" className="block text-gray-700 font-medium mb-1">
              Location
            </label>
            <select
              id="location"
              value={selectedLocation}
              onChange={handleLocationChange}
              className="w-full px-4 py-2 border rounded-md"
            >
              <option value="">All Locations</option>
              <option value="new-york">New York</option>
              <option value="los-angeles">Los Angeles</option>
              <option value="san-francisco">San Francisco</option>
            </select>
          </div>
          <div>
            <label htmlFor="type" className="block text-gray-700 font-medium mb-1">
              Type
            </label>
            <select
              id="type"
              value={selectedType}
              onChange={handleTypeChange}
              className="w-full px-4 py-2 border rounded-md"
            >
              <option value="">All Types</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="studio">Studio</option>
            </select>
          </div>
          <div>
            <label htmlFor="price" className="block text-gray-700 font-medium mb-1">
              Price Range
            </label>
            <select
              id="price"
              value={selectedPrice}
              onChange={handlePriceChange}
              className="w-full px-4 py-2 border rounded-md"
            >
              <option value="">Any Price</option>
              <option value="0-1000">$0 - $1,000</option>
              <option value="1000-2000">$1,000 - $2,000</option>
              <option value="2000-3000">$2,000 - $3,000</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
