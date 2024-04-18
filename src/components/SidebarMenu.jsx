import React, { useState } from 'react';

function SidebarMenu() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex items-center justify-between md:hidden  ">
      <div className="logo-container mb-4 md:ml-10 flex justify-between absolute  right-2/3 items-center">
        <button id="menu-toggle" className="md:hidden ml-1" onClick={toggleMenu}>
          
          <svg className="h-6 w-6  text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <div>
        <img className="h-20 w-30 bg-[#F2D184]" src="https://logowik.com/content/uploads/images/dribbble.jpg" alt="Logo"></img>
        </div>
         
         
        
      </div>
      <ul id="menu" className={`md:flex flex-col bg-[#ccc] w-screen z-10 ml-3 h-44  gap-2 mt-2 md:mt-7 mr-10 font-semibold ${showMenu ? '' : 'hidden'}`}>
        <li className='mb-3 '><a href="#">Inspiration</a></li>
        <li className='mb-3'><a href="#">Find Work</a></li>
        <li className='mb-3'><a href="#">Learn Design</a></li>
        <li className='mb-3'><a href="#">Go Pro</a></li>
        <li className='mb-3'><a href="#">Hire Designers</a></li>
      </ul>
    </div>
  );
}

export default SidebarMenu;
