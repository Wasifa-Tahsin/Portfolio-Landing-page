import React from 'react';

const Experience = () => {
  return (
    <section className="container mx-auto py-16 px-5 mt-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

        {/* 1️⃣ Experience */}
        <div className="bg-white shadow-md hover:shadow-lg rounded-xl p-6 transition-transform hover:scale-105">
          <i className="fa-solid fa-layer-group text-4xl text-[#236C44]"></i>
          <h3 className="text-3xl font-bold mt-3 text-gray-800">23+</h3>
          <p className="text-gray-500 mt-1">Years of Experience</p>
        </div>

        {/* 2️⃣ Completed Projects */}
        <div className="bg-white shadow-md hover:shadow-lg rounded-xl p-6 transition-transform hover:scale-105">
          <i className="fa-solid fa-circle-check text-4xl text-[#236C44]"></i>
          <h3 className="text-3xl font-bold mt-3 text-gray-800">325+</h3>
          <p className="text-gray-500 mt-1">Completed Projects</p>
        </div>

        {/* 3️⃣ Happy Clients */}
        <div className="bg-white shadow-md hover:shadow-lg rounded-xl p-6 transition-transform hover:scale-105">
          <i className="fa-solid fa-face-smile-wink text-4xl text-[#236C44]"></i>
          <h3 className="text-3xl font-bold mt-3 text-gray-800">279+</h3>
          <p className="text-gray-500 mt-1">Happy Clients</p>
        </div>

        {/* 4️⃣ Hours of Work */}
        <div className="bg-white shadow-md hover:shadow-lg rounded-xl p-6 transition-transform hover:scale-105">
          <i className="fa-solid fa-mug-hot text-4xl text-[#236C44]"></i>
          <h3 className="text-3xl font-bold mt-3 text-gray-800">1652+</h3>
          <p className="text-gray-500 mt-1">Hours of Work</p>
        </div>

      </div>
    </section>
  );
};

export default Experience;
