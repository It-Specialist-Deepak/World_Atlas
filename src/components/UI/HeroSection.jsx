import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import {Link} from 'react-router-dom'

 export const HeroSection = () => {
  return (
    <div className="bg-black text-white flex flex-col lg:flex-row justify-center items-center lg:items-start pt-5">
      {/* Left Section */}
      <div className="p-5 lg:m-5 text-center lg:text-left flex flex-col justify-center">
        <h1 className="text-4xl lg:text-6xl font-bold mb-2">Explore the World.</h1>
        <h1 className="text-4xl lg:text-6xl font-bold ">One Country at a Time.</h1>
        <p className="text-zinc-400 text-base lg:text-xxl my-2 mx-auto  lg:mx-0">
          Discover the history, culture, and beauty of every nation. Search through countries to find the one you love.
        </p>
      <div >
        <Link to="/country">
        <div className="flex justify-start items-center ">
  <button className="bg-black flex justify-start items-center text-white border border-white py-2 px-4 mt-3 rounded-full hover:bg-white hover:text-black transition-all mx-auto  ">
    Start Exploring
    <FaArrowRightLong className="ml-3" />
  </button>
</div>

</Link>
      </div>
    </div>
    <div className="right-main w-3/4 lg:w-2/3   pb-10 ">
      <img
        src="/earth.png"
        alt="Earth World Tour"
        className="w-full h-auto rounded-lg shadow-lg"
      />
    </div>
  </div>
  )
}

