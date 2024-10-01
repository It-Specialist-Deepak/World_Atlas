import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="w-16 h-16 border-4 border-white border-dashed rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
