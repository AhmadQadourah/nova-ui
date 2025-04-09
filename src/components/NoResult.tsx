import React from "react";

const NoResults: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-64 bg-gray-100 p-6 rounded-md">
      <span className="text-5xl text-gray-400 m-3">🔍</span>
      <h2 className="text-xl font-semibold text-gray-700">No results found</h2>
      <p className="text-gray-500">Try another search keyword.</p>
    </div>
  );
};

export default NoResults;
