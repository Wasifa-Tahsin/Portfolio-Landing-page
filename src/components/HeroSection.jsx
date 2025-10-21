import React from 'react';
import AfiaImage from '../assets/AfiaImage.png';

const HeroSection = () => {
  return (
    <section className="container mx-auto py-5 md:py-8 px-6 bg-[#236C44] rounded-md">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-12 px-4 md:px-5">
        
       {/* text */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            👋 Hey, I’m <span className="text-[#F3DB61]">Afia</span>,<br />
            <span>Full-Stack Engineer.</span>
          </h1>

          <p className="text-gray-300 mt-4 text-base sm:text-lg leading-relaxed">
            Full Stack Frontend Developer and Content Writer <br className="hidden sm:block" />
            based in LA. I specialize in bug fixing, responsive web design, and visual development.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
            <button className="bg-[#F3DB61] hover:bg-yellow-300 text-gray-800 font-semibold px-6 py-3 rounded-md shadow-md transition">
              HIRE ME
            </button>
            <button className="border border-[#F3DB61] hover:bg-[#F3DB61] hover:text-gray-800 text-white font-semibold px-6 py-3 rounded-md shadow-md transition">
              ▶ Play Store
            </button>
          </div>
        </div>

        {/* Image  */}
        <div className="flex justify-center">
          <img
            className="w-56 sm:w-64 md:w-[320px] lg:w-[380px] h-auto rounded-lg shadow-lg object-cover"
            src={AfiaImage}
            alt="Afia portrait"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
