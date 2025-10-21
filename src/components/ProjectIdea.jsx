import React from 'react';

const ProjectIdea = () => {
  return (
    <section className="container mx-auto mt-20 bg-[#0E2B1B] text-white rounded-2xl py-16 px-8 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        
        {/* Left side  */}
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Have a project idea? <br /> Let’s work together!
          </h1>
          <p className="mt-5 text-gray-400 text-sm md:text-base">
            Do you fancy saying hi to me or want to get started with your project and need my help? <br />
            Feel free to contact me anytime.
          </p>

          <button className="mt-7 bg-[#F3DB61] hover:bg-[#e8ca4f] text-black font-semibold px-5 py-3 rounded-md transition-all duration-300">
            LET'S WORK TOGETHER <i className="fa-solid fa-arrow-right ml-2"></i>
          </button>
        </div>

        {/* Right side */}
        <div className="flex flex-col gap-6 w-full md:w-auto">

          {/* Email  */}
          <div className="flex items-center gap-4 border border-gray-600 bg-[#133823] hover:bg-[#17452b] rounded-lg py-3 px-4 transition">
            <i className="fa-solid fa-envelope text-2xl text-yellow-300"></i>
            <div>
              <p className="text-xs text-gray-400">CHAT WITH ME</p>
              <span className="font-medium">arminafia86@gmail.com</span>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4 border border-gray-600 bg-[#133823] hover:bg-[#17452b] rounded-lg py-3 px-4 transition">
            <i className="fa-solid fa-phone-volume text-2xl text-yellow-300"></i>
            <div>
              <p className="text-xs text-gray-400">CALL ME</p>
              <span className="font-medium">01721721111</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectIdea;
