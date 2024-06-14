import React from 'react';

const UserStats = ({ userData }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-8 items-center">
      <div className="relative flex flex-col items-center">
        {/* GitHub Logo */}
        <img
          src="/github.png"
          alt="GitHub Logo"
          className="w-28 h-28 mb-2 border-4 border-[#364153] rounded-lg absolute -top-16 z-20 bg-[#364153]"
        />
        {/* Avatar del usuario, si userData está definido */}
        {userData && (
          <img
            src={userData.avatar_url}
            alt="User Avatar"
            className="w-28 h-28 mb-2 border-4 border-[#364153] rounded-lg absolute -top-16 z-20 bg-[#364153]"
          />
        )}
        <div className="text-[#CDD5E0] mt-20">
          <h1 className="text-3xl font-bold mb-2">GitHub</h1>
          <p>How people build software</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mt-24 md:mt-0">
        {/* Seguidores */}
        <div className="bg-[#111729] px-4 py-2 rounded-md border border-[#4A5567]">
          <span className="text-[#4A5567]">Followers</span>
          {userData && <span className="text-[#CDD5E0] ml-2">{userData.followers}</span>}
        </div>
        <div className="border-l border-white mx-4 hidden md:block"></div>
        {/* Siguiendo */}
        <div className="bg-[#111729] px-4 py-2 rounded-md border border-[#4A5567]">
          <span className="text-[#4A5567]">Following</span>
          {userData && <span className="text-[#CDD5E0] ml-2">{userData.following}</span>}
        </div>
        <div className="border-l border-white mx-4 hidden md:block"></div>
        {/* Ubicación */}
        <div className="bg-[#111729] px-4 py-2 rounded-md border border-[#4A5567]">
          <span className="text-[#4A5567]">Location</span>
          {userData && <span className="text-[#CDD5E0] ml-2">{userData.location}</span>}
        </div>
      </div>
    </div>
  );
};

export default UserStats;
