import React, { useState } from 'react';
import Profile from './components/Profile';
import ReposList from './components/ReposList';
import Repositories from './components/Repositories';
import UserStats from './components/UserStats';

function App() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [showAllRepos, setShowAllRepos] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      setUserData(data);

      const reposResponse = await fetch(data.repos_url);
      const reposData = await reposResponse.json();
      setRepos(reposData);

      setHasSearched(true);
      setShowAllRepos(false); // reset show all repos state on new search
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-[#0d1117] text-white min-h-screen">
      <div className="min-h-screen">
        <div className="relative h-[40vh] bg-cover bg-center" style={{ backgroundImage: `url('/hero-image-github-profile.png')` }}>
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
        <div className="bg-[#364153] flex flex-col items-center py-8 relative z-10 px-4 sm:px-0">
          <div className="w-full max-w-3xl text-center mb-4">
            {/* Renderiza los datos del usuario */}
            <UserStats userData={userData} />
          </div>
          {hasSearched && (
            <div className="w-full max-w-3xl">
              <ReposList repos={repos} showAllRepos={showAllRepos} />
              {repos.length > 4 && (
                <div className="mt-4 text-center">
                  <button
                    className="bg-[#364153] text-[#a9b5c7] p-2 rounded-md border border-[#4A5567] hover:bg-[#4A5567] hover:text-[#364153]"
                    onClick={() => setShowAllRepos(!showAllRepos)}
                  >
                    {showAllRepos ? 'Hide' : 'View all'} repositories
                  </button>
                </div>
              )}
            </div>
          )}

          {!hasSearched && !showAllRepos && (
            <Repositories />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
