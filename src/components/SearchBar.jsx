import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
const SearchBar = () => {
  return (
    <div className="search-bar-container flex items-center ml-3 md:ml-0 w-28 md:w-32 justify-center mr-2 bg-gray-200 rounded-md">
         
      <FontAwesomeIcon icon={faMagnifyingGlass} className='mr-1 text-gray-400 text-md font-semibold'/>
      <input
        type="text"
        placeholder="Search"
        className="search-input bg-gray-200 w-full md:w-1/2 rounded-md h-9 outline-none text-md font-semibold mr-10" 
      />
      
      
     
    </div>
  );
};

export default SearchBar;
