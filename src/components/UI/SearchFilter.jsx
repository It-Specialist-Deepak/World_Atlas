import React from "react";

export const SearchFilter = ({ search, setSearch, filter, setFilter, countries, setCountries }) => {
  const handleInputChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleFilterChange = (e) => {
    e.preventDefault();
    setFilter(e.target.value); // Ensure this matches the prop name
  };

  const sortCountries = (order) => {
    const sortedCountries = [...countries].sort((a, b) => {
      if (order === "asc") {
        return a.name.common.localeCompare(b.name.common);
      } else {
        return b.name.common.localeCompare(a.name.common);
      }
    });
    setCountries(sortedCountries);
  };

  return (
    <section className="flex flex-col sm:flex-row justify-center sm:justify-between items-center p-5  space-y-4 sm:space-y-0 sm:space-x-4">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search here..."
        value={search || ""}  // Ensure the value is always a string
        onChange={handleInputChange}
        className="w-full sm:w-1/4 p-2 bg-zinc-900 text-white border border-zinc-700 rounded-md focus:outline-none focus:border-white"
      />

      {/* Ascending Sort Button */}
      <div className="flex justify-center gap-16 ">
      <button 
        onClick={() => sortCountries("asc")}
        className="w-auto sm:w-auto p-2 bg-zinc-900 text-white border border-zinc-700 rounded-md focus:outline-none focus:border-white"
      >
        Asc
      </button>

      {/* Descending Sort Button */}
      <button 
        onClick={() => sortCountries("desc")}
        className="w-auto sm:w-auto p-2 bg-zinc-900 text-white border border-zinc-700 rounded-md focus:outline-none focus:border-white"
      >
        Desc
      </button>
      </div>
      

      {/* Filter Dropdown */}
      <select 
        value={filter} 
        onChange={handleFilterChange}
        className="w-auto  sm:w-1/4 p-2 bg-zinc-900 text-white border border-zinc-700 rounded-md focus:outline-none focus:border-white"
      >
        <option value="all">All</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </section>
  );
};
