// Profile.jsx
import React from 'react';

const Profile = ({ userData }) => {
  return (
    <div className="flex flex-col items-center p-6">
      <img
        src={userData.avatar_url}
        alt={userData.login}
        className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mb-4"
      />
      <h1 className="text-xl sm:text-2xl font-bold">{userData.name}</h1>
      <p className="text-gray-500">@{userData.login}</p>
      <p className="text-center mt-4">{userData.bio}</p>
      <div className="flex mt-4 space-x-4 sm:space-x-8">
        <div>
          <span className="font-bold">{userData.followers}</span> Followers
        </div>
        <div>
          <span className="font-bold">{userData.following}</span> Following
        </div>
        <div>
          <span className="font-bold">{userData.public_repos}</span> Repositories
        </div>
      </div>
    </div>
  );
};

export default Profile;




