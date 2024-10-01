import React from "react";

const Intro = () => {
  return (
    <div className="bg-black text-white pt-8 flex flex-col items-center justify-center px-4">
      {/* Header Section */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold  mb-4">Welcome to World Atlas</h1>
        <p className="text-lg  max-w-2xl mx-auto">
          Explore the world from the comfort of your home. Discover countries, cultures, and landscapes, and learn about the geography, history, and people of the Earth.
        </p>
      </header>
</div>
       
  );
};

export default Intro;
