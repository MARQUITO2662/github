// Profile.jsx
import React from 'react';

const Profile = ({ userData }) => {
  return (
    <div className="flex flex-col items-center p-6">
      <img
        src={userData.avatar_url}
        alt={userData.login}
        className="w-32 h-32 rounded-full mb-4"
      />
      <h1 className="text-2xl font-bold">{userData.name}</h1>
      <p className="text-[#4A5567]">@{userData.login}</p>
      <p className="text-center mt-4">{userData.bio}</p>
      <div className="flex mt-4 space-x-8">
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