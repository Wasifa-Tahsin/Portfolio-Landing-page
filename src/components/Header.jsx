
    import React from 'react';
import AfiaImage from '../assets/AfiaImage.png';

const Header = () => {
  return (
    <header className="container mx-auto py-4 px-4 md:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">

       
        <div className="flex items-center gap-3">
          <img className="w-12 h-12 rounded-full" src={AfiaImage} alt="Logo" />
          <h2 className="font-bold text-lg md:text-xl">Newfolio</h2>
        </div>

       
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-5">
          <ul className="flex flex-col md:flex-row gap-3 md:gap-5 text-gray-800 font-medium text-sm md:text-base text-center">
            <li className="hover:text-[#F3DB61] cursor-pointer transition">Home</li>
            <li className="hover:text-[#F3DB61] cursor-pointer transition">Project</li>
            <li className="hover:text-[#F3DB61] cursor-pointer transition">Services</li>
            <li className="hover:text-[#F3DB61] cursor-pointer transition">Resume</li>
            <li className="hover:text-[#F3DB61] cursor-pointer transition">About</li>
            <li className="hover:text-[#F3DB61] cursor-pointer transition">Article</li>
          </ul>

          <button className="bg-[#F3DB61] hover:bg-yellow-400 rounded-md py-2 px-4 font-bold text-gray-800 transition">
            Contact
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;


