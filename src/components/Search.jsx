import React, { useState } from "react";

// never mutate the states
// the child element should never mutate the props

function Search({ searchTerm, setSearchTerm }) {
  return (
    <div className="text-white text-3xl w-full max-w-2xl">
      <div className="flex items-center gap-3">
        <img src="/search.svg" alt="search" className="w-6 h-6" />

        <input
          className="w-full px-4 py-2 bg-gray-800 rounded text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Search among thousands of movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Search;
