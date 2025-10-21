import React from 'react';
import ServiceCard from '../layout/ServiceCard';
import serviceImg from '../assets/Service Illustration.png';

const Services = () => {
  return (
    <section className="container mx-auto mt-16 px-6 py-16 text-center bg-[#E9F0EC] rounded-2xl shadow-sm">
      {/* Section Header */}
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0E2B1B]">My Services</h2>
      <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-sm md:text-base">
        Morbi risus elit, fringilla in cursus a, molestie non dui. Nunc accumsan gravida risus,
        ac semper libero mollis ut.
      </p>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard
          image={serviceImg}
          text="Back-end Development"
          description="Vivamus in quam ut felis consectetur imperdiet et sed metus. Nullam tristique scelerisque metus id dignissim."
        />
        <ServiceCard
          image={serviceImg}
          text="Front-end Development"
          description="Vivamus in quam ut felis consectetur imperdiet et sed metus. Nullam tristique scelerisque metus id dignissim."
        />
        <ServiceCard
          image={serviceImg}
          text="Content Writing"
          description="Vivamus in quam ut felis consectetur imperdiet et sed metus. Nullam tristique scelerisque metus id dignissim."
        />
      </div>
    </section>
  );
};

export default Services;
