import React, { useEffect, useState } from "react";
import { getCountryData } from "../api/postApi";
import Loader from "../components/UI/Loader";
import { CountryCard } from "../components/Layout/CountryCard";
import { SearchFilter } from "../components/UI/SearchFilter";


export const Country = () => {
  const [isLoading, setIsLoading] = useState(true); // Manage loading state
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setIsLoading(true); // Start loader
        const res = await getCountryData();
        setCountries(res.data); // Set countries data
      } catch (error) {
        console.error("Error fetching countries:", error);
      } finally {
        setIsLoading(false); // Stop loader
      }
    };

    fetchCountries(); // Fetch data
  }, []);

  if (isLoading) return <Loader />; // Show loader while data is being fetched

  const searchCountry = (Country) => {
    if (search) {
      return Country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return Country;
  };

  const filterRegion = (Country) => {
    if (filter === "all") return Country;
    return Country.region === filter;
  };

  const filterCountries = countries.filter(
    (Country) => searchCountry(Country) && filterRegion(Country)
  );

  return (
    <>
      <section className="country bg-black text-white py-6 w-full">
        <div className="container mx-auto px-4">
          <SearchFilter
            search={search}
            setSearch={setSearch}
            filter={filter}
            setFilter={setFilter}
            countries={countries}
            setCountries={setCountries}
          />

          <div className="mt-4 flex justify-center">
            {/* Check if filtered countries are found */}
            {filterCountries.length > 0 ? (
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filterCountries.map((currCountry, index) => (
                  <CountryCard country={currCountry} key={index} />
                ))}
              </ul>
            ) : (
              <p className="text-center text-lg  sm:h-80  lg:h-96 pt-40 pb-40  font-semibold">Not Found</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
