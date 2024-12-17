import React, { useState } from 'react';
import SearchIcon from '../../assets/Images/MagnifyingGlass.png';
import { CustomDropdown } from './CustomDropdown';

export const SearchBar = () => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');

  // const handleSearchChange = (event) => {
  //   setSearchQuery(event.target.value);
  //   triggerSearch(event.target.value, selectedLocation, selectedType, selectedPrice);
  // };

  const triggerSearch = () => {
    const filters = { selectedLocation, selectedType, selectedPrice };
    console.log("Filters applied:", filters);
    // Replace with your search/filter logic
  };

  return (
    <div className="flex justify-center items-center w-full">
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
