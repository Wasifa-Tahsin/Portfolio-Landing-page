import React from 'react';

const ServiceCard = ({ image, text, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 ">
      <img className="mx-auto mb-4  object-contain" src={image} alt={text} />
      <h4 className="text-xl font-semibold mb-2">{text}</h4>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href="#"
        className="text-[#236C44] font-semibold hover:underline"
      >
        Let’s Work Together →
      </a>
    </div>
  );
};

export default ServiceCard;
