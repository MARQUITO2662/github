// src/components/SearchBar.jsx
import React from 'react';

const SearchBar = ({ username, setUsername, handleSearch }) => {
  return (
    <div className="relative h-[40vh] bg-cover bg-center" style={{ backgroundImage: "url('/hero-image-github-profile.png')" }}>
      <div className="bg-black bg-opacity-50 h-full flex flex-col items-center justify-center text-white">
        <div className="w-full max-w-md mt-10 px-4 sm:px-0">
          <div className="flex mb-4 justify-center">
            <button onClick={handleSearch} className="bg-[#364153] text-[#4A5567] p-2 rounded-l-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m1.35-6.65a8 8 0 11-16 0 8 8 0 0116 0z" />
              </svg>
            </button>
            <input
              type="text"
              className="p-2 text-[#CDD5E0] bg-[#364153] placeholder-[#4A5567] border border-[#364153] focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-r-md w-full"
              placeholder="Enter GitHub username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
