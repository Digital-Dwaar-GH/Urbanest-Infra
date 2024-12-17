import { useEffect, useRef, useState } from "react";

export const CustomDropdown = ({ label, options, selected, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); // Reference to the dropdown container

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleOptionClick = (value) => {
    onChange(value); // Update the selected value
    setIsOpen(false); // Close the dropdown
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false); // Close the dropdown if clicked outside
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef} // Attach ref to the container
      className="relative px-4 py-2 rounded-md cursor-pointer"
    >
      <div onClick={toggleDropdown} className="flex justify-between items-center">
        <div className="flex-col">
          <div className="text-gray-700 font-medium mb-1">{label}</div>
          <span>
            {options.find((opt) => opt.value === selected)?.label || "Select"}
          </span>
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
