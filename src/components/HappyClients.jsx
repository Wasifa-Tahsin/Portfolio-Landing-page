import React from 'react';
import logo from '../assets/Company Logo (5).png';
import logo1 from '../assets/Company Logo (1).png';
import logo2 from '../assets/Company Logo (2).jpg';
import logo3 from '../assets/Company Logo (3).png';
import logo4 from '../assets/Company Logo (4).png';

const HappyClients = () => {
  return (
    <section className="container mx-auto items-center py-12 px-5">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
        {/* Left side */}
        <div className="text-center lg:text-left max-w-xl">
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold leading-snug">
            I work with over 279+ happy <br />
            clients all over the world.
          </h1>
          <p className="mt-5 text-gray-600 text-sm md:text-base">
            Suspendisse eget ultricies felis, in lacinia lectus. Morbi <br className="hidden md:block" />
            accumsan dapibus tortor, in fermentum odio malesuada <br className="hidden md:block" />
            in aliquam sed ipsum tristique.
          </p>
        </div>

        {/* Right side */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-5 p-4 justify-items-center">
          <img
            className="border border-gray-300 p-3 rounded-md flex justify-center items-center object-contain hover:scale-105 transition-transform"
            src={logo}
            alt=""
          />
          <img
            className="border border-gray-300 p-3 rounded-md flex justify-center items-center object-contain hover:scale-105 transition-transform"
            src={logo1}
            alt=""
          />
          <img
            className="border border-gray-300 p-3 rounded-md flex justify-center items-center  object-contain hover:scale-105 transition-transform"
            src={logo2}
            alt=""
          />
          <img
            className="border border-gray-300 p-3 rounded-md flex justify-center items-center  object-contain hover:scale-105 transition-transform"
            src={logo3}
            alt=""
          />
          <img
            className="border border-gray-300 p-3 rounded-md flex justify-center items-center  object-contain hover:scale-105 transition-transform"
            src={logo4}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default HappyClients;
