import React from 'react';

export const Footer = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-between w-full p-8 bg-[#1f5156] text-white'>
      <div className='flex flex-col mb-4 sm:mb-0 sm:mr-4' key="project">
        <p className='font-bold text-[#ffdd40] mb-2'>Password Manager</p>
        <p className='text-[#f5b921] hover:text-white cursor-pointer'>About</p>
        <p className='text-[#f5b921] hover:text-white cursor-pointer'>Features</p>
        <p className='text-[#f5b921] hover:text-white cursor-pointer'>Security</p>
      </div>

      <div className='flex flex-col mb-4 sm:mb-0 sm:mr-4' key="resources">
        <p className='font-bold text-[#ffdd40] mb-2'>Resources</p>
        <p className='text-[#f5b921] hover:text-white cursor-pointer'>Documentation</p>
        <p className='text-[#f5b921] hover:text-white cursor-pointer'>API Reference</p>
        <p className='text-[#f5b921] hover:text-white cursor-pointer'>Support</p>
      </div>

      <div className='flex flex-col mb-4 sm:mb-0 sm:mr-4' key="legal">
        <p className='font-bold text-[#ffdd40] mb-2'>Legal</p>
        <p className='text-[#f5b921] hover:text-white cursor-pointer'>Privacy Policy</p>
        <p className='text-[#f5b921] hover:text-white cursor-pointer'>Terms of Service</p>
        <p className='text-[#f5b921] hover:text-white cursor-pointer'>Data Protection</p>
      </div>

      <div className='flex flex-col' key="social">
        <p className='font-bold text-[#ffdd40] mb-2'>Follow Us</p>
        <p className='text-[#f5b921] hover:text-white cursor-pointer'>GitHub</p>
        <p className='text-[#f5b921] hover:text-white cursor-pointer'>Twitter</p>
        <p className='text-[#f5b921] hover:text-white cursor-pointer'>LinkedIn</p>
      </div>
    </div>
  );
};

export default Footer;