import React from 'react'
import countryFacts from "../../api/countryData.json";
const Fact = () => {
  return (
    <section className="bg-black text-white py-10 px-6 sm:px-10 md:px-20 lg:px-36">
    <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-8">
      Interesting Facts About Countries
    </h2>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {countryFacts.map((country) => {
        const { id, countryName, capital, population, interestingFact, flag } = country;
        return (
          <div
            className="card bg-zinc-800 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            key={id}
          >
            <div className='flex justify-start items-center mb-2'>
              <img src={flag} alt="" className="w-16 h-auto mr-2" /> {/* Use flag URL */}
              <h3 className="text-xl sm:text-2xl font-semibold text-white">{countryName}</h3>
            </div>
            <p className="text-white">
              <span className="font-semibold">Capital:</span> {capital}
            </p>
            <p className="text-white">
              <span className="font-semibold">Population:</span> {population.toLocaleString()}
            </p>
            <p className="text-white">
              <span className="font-semibold">Interesting Fact:</span> {interestingFact}
            </p>
          </div>
        );
      })}
    </div>
  </section>
  )
}

export default Fact ;