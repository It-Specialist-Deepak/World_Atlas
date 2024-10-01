import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCountryIndData } from "../../api/postApi";
import Loader from "../UI/Loader";
import { NavLink } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

export const CountryDetails = () => {
  const params = useParams();
  
  // State to manage the loading status and country data
  const [isLoading, setIsLoading] = useState(true);
  const [country, setCountry] = useState(null);

  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        // Set loading state to true before data fetch
        setIsLoading(true);
        
        // Fetch data
        const res = await getCountryIndData(params.id);
        
        // Set the country data
        setCountry(res.data[0]);

        // After data is fetched, set loading to false
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching country data:", error);
        setIsLoading(false);  // Even in case of error, set loading to false
      }
    };

    // Call the data fetching function
    fetchData();
  }, [params.id]);

  // If data is still loading, show the loader component
  if (isLoading) return <Loader />;

  return (
    <section className="bg-black text-white min-h-screen flex justify-center items-center py-10 px-4">
      <div className=" p-6 rounded-lg shadow-lg max-w-4xl w-full">
        {country && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Country Flag */}
            <div className="flex justify-center lg:justify-start">
              <img
                src={country.flags.svg}
                alt={country.flags.alt}
                className="w-full lg:w-3/4 h-auto rounded-lg shadow-md"
              />
            </div>

            {/* Country Info */}
            <div>
              <h1 className="text-3xl font-bold mb-6 text-blue-500">
                {country.name.official}
              </h1>
              <div className="space-y-4">
                <p>
                  <span className="font-semibold text-zinc-400">Native Names:</span>{" "}
                  {Object.keys(country.name.nativeName)
                    .map((key) => country.name.nativeName[key].common)
                    .join(", ")}
                </p>
                <p>
                  <span className="font-semibold text-zinc-400">Population:</span>{" "}
                  {country.population.toLocaleString()}
                </p>
                <p>
                  <span className="font-semibold text-zinc-400">Region:</span>{" "}
                  {country.region}
                </p>
                <p>
                  <span className="font-semibold text-zinc-400">Sub Region:</span>{" "}
                  {country.subregion}
                </p>
                <p>
                  <span className="font-semibold text-zinc-400">Capital:</span>{" "}
                  {country.capital}
                </p>
                <p>
                  <span className="font-semibold text-zinc-400">Top Level Domain:</span>{" "}
                  {country.tld[0]}
                </p>
                <p>
                  <span className="font-semibold text-zinc-400">Currencies:</span>{" "}
                  {Object.keys(country.currencies)
                    .map((curElem) => country.currencies[curElem].name)
                    .join(", ")}
                </p>
                <p>
                  <span className="font-semibold text-zinc-400">Languages:</span>{" "}
                  {Object.keys(country.languages)
                    .map((key) => country.languages[key])
                    .join(", ")}
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="country-card-backBtn mt-8">
          <NavLink to="/country">
          <button className="bg-black flex justify-center items-center text-white border border-white py-2 px-4  ml-12 rounded-full hover:bg-white hover:text-black transition-all">
            Go Back
            <FaArrowLeftLong className="ml-3" />
          </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};
