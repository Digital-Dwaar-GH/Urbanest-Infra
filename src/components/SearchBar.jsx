import React, { useState } from 'react';
import SearchIcon from '../assets/Images/MagnifyingGlass.png';

const CustomDropdown = ({ label, options, selected, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleOptionClick = (value) => {
    onChange(value);
    setIsOpen(false);
  };

  return (
    <div
      className="relative px-4 py-2 rounded-md cursor-pointer"
      onClick={toggleDropdown}
    >
        <div className="flex justify-between items-center">
          <div className='flex-col'>
            <div className="text-gray-700 font-medium mb-1">{label}</div>
            <span>{options.find((opt) => opt.value === selected)?.label || "Select"}</span>
          </div>
          <span
            className={`transform transition-transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="gray"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </div>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white border shadow-lg rounded-md z-10 w-full">
          {options.map((option) => (
            <div
              key={option.value}
              className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                option.value === selected ? "font-bold" : ""
              }`}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export const SearchBar = () => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    triggerSearch(event.target.value, selectedLocation, selectedType, selectedPrice);
  };

  const triggerSearch = () => {
    const filters = { selectedLocation, selectedType, selectedPrice };
    console.log("Filters applied:", filters);
    // Replace with your search/filter logic
  };

  return (
    <div className="absolute flex justify-center items-center w-full md:top-[30.5%] transform -translate-y-1/2 z-10">
      <div className="bg-white p-4 shadow-lg rounded-md w-full sm:w-[550px] md:w-[675px] flex flex-col space-y-4">
        <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 items-center">
          <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <CustomDropdown
                  label="Location"
                  selected={selectedLocation}
                  onChange={setSelectedLocation}
                  options={[
                    { label: "All Locations", value: "" },
                    { label: "New York", value: "new-york" },
                    { label: "Los Angeles", value: "los-angeles" },
                    { label: "San Francisco", value: "san-francisco" },
                ]}
              />
              <CustomDropdown
                label="Type"
                selected={selectedType}
                onChange={setSelectedType}
                options={[
                  { label: "All Types", value: "" },
                  { label: "Apartment", value: "apartment" },
                  { label: "House", value: "house" },
                  { label: "Studio", value: "studio" },
                ]}
              />
              <CustomDropdown
                label="Price"
                selected={selectedPrice}
                onChange={setSelectedPrice}
                options={[
                  { label: "Any Price", value: "" },
                  { label: "$0 - $1,000", value: "0-1000" },
                  { label: "$1,000 - $2,000", value: "1000-2000" },
                  { label: "$2,000 - $3,000", value: "2000-3000" },
                ]}
              />
            </div>
          </div>
          <button
            className="bg-violet-500 rounded-md p-2 cursor-pointer w-full md:w-14 md:h-14 flex justify-center items-center"
            onClick={() => triggerSearch(searchQuery, selectedLocation, selectedType, selectedPrice)}
          >
            <img src={SearchIcon} alt="Search" className=' w-8 h-8 md:w-10 md:h-8' />
          </button>
        </div>
      </div>
    </div>
  );
};
