import React from 'react';

export const Footer = () => {
  return (
    <div className='flex flex-col sm:flex-row md:flex-row justify-between w-full p-8 bg-[#1f5156] text-white'>
      <div className='flex flex-col mb-4 sm:mb-0 md:mb-0 sm:mr-4 md:mr-4' key="company">
        <p className='font-bold text-[#ffdd40]'>Company</p>
        <p className='text-[#f5b921] hover:text-white cursor-pointer'>About Us</p>
        <p className='text-[#f5b921] hover:text-white cursor-pointer'>Contact Us</p>
        <p className='text-[#f5b921] hover:text-white cursor-pointer'>Careers</p>
      </div>

      <div className='flex flex-col mb-4 sm:mb-0 md:mb-0 sm:mr-4 md:mr-4' key="products">
        <p className='font-bold text-[#ffdd40]'>Products</p>
        <p className='text-[#f5b921] hover:text-white cursor-pointer'>Pricing</p>
        <p className='text-[#f5b921] hover:text-white cursor-pointer'>Features</p>
        <p className='text-[#f5b921] hover:text-white cursor-pointer'>Integrations</p>
      </div>

      <div className='flex flex-col mb-4 sm:mb-0 md:mb-0 sm:mr-4 md:mr-4' key="legal">
        <p className='font-bold text-[#ffdd40]'>Legal</p>
        <p className='text-[#f5b921] hover:text-white cursor-pointer'>Privacy Policy</p>
        <p className='text-[#f5b921] hover:text-white cursor-pointer'>Terms of Service</p>
        <p className='text-[#f5b921] hover:text-white cursor-pointer'>GDPR Compliance</p>
      </div>

      <div className='flex flex-col' key="social">
        <p className='font-bold text-[#ffdd40]'>Social</p>
        <p className='text-[#f5b921] hover:text-white cursor-pointer'>Facebook</p>
        <p className='text-[#f5b921] hover:text-white cursor-pointer'>Twitter</p>
        <p className='text-[#f5b921] hover:text-white cursor-pointer'>LinkedIn</p>
      </div>
    </div>
  );
};
