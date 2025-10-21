import React from 'react';
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
const LatestCaseStudy = () => {
    return (
        <section className='container  '>
            <div className='flex justify-between mt-10'>
            <div className=''>
                <h1 className='text-4xl font-bold '>Latest Case Study</h1>
            <p className='mt-5 '>Morbi risus elit, fringilla in cursus a, molestie non dui. Nunc accumsan <br /> gravida risus, ac semper libero mollis ut.</p>
            </div>
            
              <div className="flex items-center">
  <i className="fa-solid fa-arrow-left border-2 border-amber-400 rounded-lg py-2 px-2 mr-3 cursor-pointer hover:bg-[#F3DB61] transition" />
  <i className="fa-solid fa-arrow-right border border-amber-600 bg-[#F3DB61] rounded-lg py-2 px-2 cursor-pointer hover:bg-yellow-400 transition" />
</div>

            
        </div>
        <div className='gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3   mt-6'>
            <img className='' src={img1} alt="" />
            <img className='' src={img2} alt="" />
            <img className='h-[370px] w-[435px]' src={img3} alt="" />
        </div>
        </section>
    );
};

export default LatestCaseStudy;