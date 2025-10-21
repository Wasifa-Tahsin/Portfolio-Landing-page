import React from 'react';
import AfiaImage from '../assets/AfiaImage.png';

const Footer = () => {
  return (
    <footer className="  py-10 mt-20 rounded-t-lg">
      <section className="container mx-auto px-5">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">

          {/* Left side info */}
          <div>
            <div className="flex items-center gap-4">
              <img className="h-16 w-16 rounded-full" src={AfiaImage} alt="Afia" />
              <h2 className="text-xl font-bold">Armin Akter Afia</h2>
            </div>
            <p className="mt-3 text-gray-500 text-sm">
              4517 Ave. Manchester, Kentucky <br />
              39495, Los Angeles, California, USA
            </p>
          </div>

          {/* Middle column 1 */}
          <div>
           
            <ul className="space-y-2">
              <li className="hover:text-[#F3DB61] cursor-pointer">Home</li>
              <li className="hover:text-[#F3DB61] cursor-pointer">About</li>
              <li className="hover:text-[#F3DB61] cursor-pointer">Resume</li>
              <li className="hover:text-[#F3DB61] cursor-pointer">Article</li>
            </ul>
          </div>

          {/* Middle column 2 */}
          <div>
           
            <ul className="space-y-2">
              <li className="hover:text-[#F3DB61] cursor-pointer">Services</li>
              <li className="hover:text-[#F3DB61] cursor-pointer">Projects</li>
              <li className="hover:text-[#F3DB61] cursor-pointer">Pricing Plan</li>
              <li className="hover:text-[#F3DB61] cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Social links */}
          <div>
          
            <ul className="space-y-2">
              <li className="hover:text-[#F3DB61] cursor-pointer">Facebook</li>
              <li className="hover:text-[#F3DB61] cursor-pointer">Twitter</li>
              <li className="hover:text-[#F3DB61] cursor-pointer">Instagram</li>
              <li className="hover:text-[#F3DB61] cursor-pointer">CodePen</li>
            </ul>
          </div>

        </div>

        {/* bottom line */}
        <div className="text-center text-sm mt-10 border-t border-gray-500 pt-5">
          © {new Date().getFullYear()} Armin Akter Afia. All rights reserved.
        </div>
      </section>
    </footer>
  );
};

export default Footer;
