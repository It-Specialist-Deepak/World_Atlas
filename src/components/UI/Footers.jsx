import React from 'react';
import { FaPhone, FaMapMarkerAlt, FaEnvelope} from 'react-icons/fa';

const Footers = () => {
  return (
    <>
      <footer className="bg-zinc-900 text-white lg:py-1.5 sm:py-8  px-6 sm:px-10 md:px-20 lg:px-36 pb-6 pt-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Left side: Logo and description */}
          <div className="flex items-center mb-6 md:mb-0 gap-4">
            
            <img src="./world.png" className='w-9 ' alt="" />
            <h2 className="text-2xl font-bold">World Atlas</h2>
          </div>

          {/* Right side: Contact information */}
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start ">
              <FaPhone className="text-blue-500 mr-2" />
              <span>+1 (234) 567-890</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <FaMapMarkerAlt className="text-blue-500 mr-2" />
              <span>123 Atlas Street, New Island City</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <FaEnvelope className="text-blue-500 mr-2" />
              <span>contact@worldatlas.com</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom text */}
      <div className="bg-zinc-900 text-center text-sm text-zinc-400 py-2 ">
        <p>© {new Date().getFullYear()} All rights reserved | developed by developer_Deepak</p>
      </div>
    </>
  );
};

export default Footers;
