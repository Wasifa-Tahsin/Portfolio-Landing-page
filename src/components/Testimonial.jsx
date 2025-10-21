import React from 'react';
import AfiaImage from '../assets/AfiaImage.png';

const Testimonial = () => {
  return (
    <section className="container mx-auto mt-20 px-6 md:px-12 lg:px-20">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">

        {/* Left side */}
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0E2B1B]">
            Client Testimonial
          </h1>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Praesent interdum eu magna a imperdiet. Ut orci ipsum, rutrum id
            tortor sit amet, mattis cursus libero. Phasellus facilisis malesuada
            nibh vel commodo.
          </p>

          {/* Quote box */}
          <div className="bg-[#FAF1C0] text-[#0E2B1B] mt-8 p-6 rounded-xl shadow-md relative">
            <i className="fa-solid fa-quote-right text-2xl  text-[#00d6a8]"></i>
            <p className="mt-3 text-lg leading-relaxed">
              “Great designer, does excellent work and is very flexible with
              changes. If you’re a programmer looking for a UI/UX designer,
              she’s definitely well-qualified for the job.”
            </p>

            <div className="mt-5">
              <h4 className="font-semibold text-lg">Armin Akter Afia</h4>
              <p className="text-sm text-gray-600">Frontend Developer, USA</p>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div>
          <img
            className="rounded-xl shadow-lg h-[420px] w-[350px] object-cover"
            src={AfiaImage}
            alt="Client"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
