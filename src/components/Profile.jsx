import React from 'react';

function Profile({ userData }) {
  return (
    <div className="bg-white text-black border p-4 mb-4 rounded-lg shadow-md">
      <img src={userData.avatar_url} alt={userData.login} className="w-24 h-24 rounded-full mb-4" />
      <h2 className="text-xl font-bold">{userData.name || userData.login}</h2>
      <p>{userData.bio}</p>
      <p><strong>Followers:</strong> {userData.followers}</p>
      <p><strong>Following:</strong> {userData.following}</p>
      <p><strong>Location:</strong> {userData.location}</p>
    </div>
  );
}

export default Profile;
