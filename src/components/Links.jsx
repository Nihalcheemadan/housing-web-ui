import React from "react";

const Links = () => {
  return (
    <div className="bg-slate-100 pl-44 pt-16 w-full h-96">
        <div>
            <h3 className="text-2xl"> Useful <span className="font-semibold"> Links </span></h3>
            <h3 className="text-sm pt-2 text-gray-500"> All guide to Useful links in one place</h3>
        </div>
      <div className="flex gap-4 pt-7">
        <button className="h-12 w-64 bg-white hover:border-2 border-gray-300 rounded-lg flex items-center justify-center transition-colors duration-300 hover:border-purple-500 ">
          <p className="text-md  hover:text-purple-500 text-gray-800">
            List of All Residential Cities
          </p>
        </button>
        <button className="h-12 w-64 bg-white hover:border-2 border-gray-300 rounded-lg flex items-center justify-center transition-colors duration-300 hover:border-purple-500 ">
          <p className="text-md  hover:text-purple-500 text-gray-800">
            List of All Cities for Rent
          </p>
        </button>
        <button className="h-12 w-64 bg-white hover:border-2 border-gray-300 rounded-lg flex items-center justify-center transition-colors duration-300 hover:border-purple-500 ">
          <p className="text-md  hover:text-purple-500 text-gray-800">
            List of All Cities to Rent PG
          </p>
        </button>
      </div>
      <div className="flex gap-4 pt-5">
        <button className="h-12 w-80  bg-white hover:border-2 border-gray-300 rounded-lg flex items-center justify-center transition-colors duration-300 hover:border-purple-500 ">
          <p className="text-md  hover:text-purple-500 text-gray-800">
            Explore Residential Localities by City
          </p>
        </button>
        <button className="h-12 w-80 bg-white hover:border-2 border-gray-300 rounded-lg flex items-center justify-center transition-colors duration-300 hover:border-purple-500 ">
          <p className="text-md  hover:text-purple-500 text-gray-800">
            Explore Rental Localities by City
          </p>
        </button>
        <button className="h-12 w-80 bg-white hover:border-2 border-gray-300 rounded-lg flex items-center justify-center transition-colors duration-300 hover:border-purple-500 ">
          <p className="text-md  hover:text-purple-500 text-gray-800">
            Explore PG Localities in India
          </p>
        </button>
      </div>
      <div className="flex gap-4 pt-5">
        <button className="h-12 w-52  bg-white hover:border-2 border-gray-300 rounded-lg flex items-center justify-center transition-colors duration-300 hover:border-purple-500 ">
          <p className="text-md  hover:text-purple-500 text-gray-800">
            Find Projects by City
          </p>
        </button>
        <button className="h-12 w-72 bg-white hover:border-2 border-gray-300 rounded-lg flex items-center justify-center transition-colors duration-300 hover:border-purple-500 ">
          <p className="text-md  hover:text-purple-500 text-gray-800">
            Find Rental Societies by City
          </p>
        </button>
      </div>
    </div>
  );
};

export default Links;
