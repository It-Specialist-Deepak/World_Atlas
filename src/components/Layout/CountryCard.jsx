/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";

export const CountryCard = ({ country }) => {
  const { name, flags, population, region, capital } = country;
  return (
    <li className="country-card hover:translate-y-[-5px] transition-transform duration-300">
      <div className="card w-80 bg-zinc-800 p-2 sm:p-6 lg:px-8 lg:py-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 max-w-sm mx-auto sm:max-w-none">
        <img
          src={flags.png}
          alt={name.common}
          className="w-full h-40 object-cover rounded-lg "
        />
        <h3 className="text-xl sm:text-2xl font-semibold text-white mt-4">
          {name.common}
        </h3>
        <ul className="text-white mt-2">
          <li>
            <span className="font-semibold">Population:</span>{' '}
            {population.toLocaleString()}
          </li>
          <li>
            <span className="font-semibold">Region:</span> {region}
          </li>
          <li>
            <span className="font-semibold">Capital:</span> {capital}
          </li>

        </ul>
        <NavLink to={`/country/${name.common}`}>
          <button className="bg-black flex justify-center items-center text-white border border-white py-2 px-4 mt-3 rounded-full hover:bg-white hover:text-black transition-all">
            Read More
            <FaArrowRightLong className="ml-3" />
          </button>
        </NavLink>
      </div>
    </li>
  );
};
