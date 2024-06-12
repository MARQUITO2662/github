import React, { useState } from 'react';
import Profile from './components/Profile';
import ReposList from './components/ReposList';

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
        <div className="bg-[#364153] flex flex-col items-center py-8 relative z-10 px-4 sm:px-0">
          <div className="w-full max-w-3xl text-center mb-4">
            <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-8 items-center">
              <div className="relative flex flex-col items-center">
                <img src="/github.png" alt="GitHub Logo" className="w-28 h-28 mb-2 border-4 border-[#364153] rounded-lg absolute -top-16 z-20 bg-[#364153]" />
                {userData && (
                  <img src={userData.avatar_url} alt="GitHub Logo" className="w-28 h-28 mb-2 border-4 border-[#364153] rounded-lg absolute -top-16 z-20 bg-[#364153]" />
                )}
                <div className="text-[#CDD5E0] mt-20">
                  <h1 className="text-3xl font-bold mb-2">GitHub</h1>
                  <p>How people build software</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mt-24 md:mt-0">
                <div className="bg-[#111729] px-4 py-2 rounded-md border border-[#4A5567]">
                  <span className="text-[#4A5567]">Followers</span>
                  {userData && <span className="text-[#CDD5E0] ml-2">{userData.followers}</span>}
                </div>
                <div className="border-l border-white mx-4 hidden md:block"></div>
                <div className="bg-[#111729] px-4 py-2 rounded-md border border-[#4A5567]">
                  <span className="text-[#4A5567]">Following</span>
                  {userData && <span className="text-[#CDD5E0] ml-2">{userData.following}</span>}
                </div>
                <div className="border-l border-white mx-4 hidden md:block"></div>
                <div className="bg-[#111729] px-4 py-2 rounded-md border border-[#4A5567]">
                  <span className="text-[#4A5567]">Location</span>
                  {userData && <span className="text-[#CDD5E0] ml-2">{userData.location}</span>}
                </div>
              </div>
            </div>
          </div>
          {hasSearched && (
            <div className="w-full max-w-3xl">
              <ReposList repos={repos} />
            </div>
          )}

          {!hasSearched && !showAllRepos && (
            <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-4 text-white mt-8">
              <div className="bg-[#1D1B48] p-4 rounded-md h-48 border border-[#4A5567]">
                <h2 className="text-lg font-bold">.github</h2>
                <p className="text-[#CDD5E0]">Community health files for the @GitHub organization</p>
                <div className="flex items-center mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-[#4A5567]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M0 2a2 2 0 012-2h16a2 2 0 012 2v16a2 2 0 01-2 2H2a2 2 0 01-2-2V2zm4 16a1 1 0 001-1V9a1 1 0 00-1-1V3h12v4a1 1 0 01-1 1H5a1 1 0 00-1 1v9a1 1 0 001 1z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#4A5567]">2,369</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-4 mr-1 text-[#4A5567]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM5.638 15.696a6 6 0 018.683-7.955l.678.678.678-.678a6 6 0 118.683 7.955l-7.237 7.237a1 1 0 01-1.419 0l-7.237-7.237zm7.072-6.293a1 1 0 00-1.414-1.414L7 11.586l-1.396-1.397a1 1 0 00-1.414 1.414l2.5 2.5a1 1 0 001.414 0l5-5z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#4A5567]">703</span>
                  <span className="text-[#4A5567] ml-4">Updated 4 days ago</span>
                </div>
              </div>

              <div className="bg-[#1D1B48] p-4 rounded-md h-48 border border-[#4A5567]">
  <h2 className="text-lg font-bold">Accessibility - alt - text - bat</h2>
  <p className="text-[#CDD5E0]">An action to remind users to add alt text on Issues, pull Requests, and Discussions</p>
  <div className="flex items-center mt-2">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-[#4A5567]" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M0 2a2 2 0 012-2h16a2 2 0 012 2v16a2 2 0 01-2 2H2a2 2 0 01-2-2V2zm4 16a1 1 0 001-1V9a1 1 0 00-1-1V3h12v4a1 1 0 01-1 1H5a1 1 0 00-1 1v9a1 1 0 001 1z" clipRule="evenodd" />
    </svg>
    <span className="text-[#4A5567]">2,369</span>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-4 mr-1 text-[#4A5567]" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM5.638 15.696a6 6 0 018.683-7.955l.678.678.678-.678a6 6 0 118.683 7.955l-7.237 7.237a1 1 0 01-1.419 0l-7.237-7.237zm7.072-6.293a1 1 0 00-1.414-1.414L7 11.586l-1.396-1.397a1 1 0 00-1.414 1.414l2.5 2.5a1 1 0 001.414 0l5-5z" clipRule="evenodd" />
    </svg>
    <span className="text-[#4A5567]">703</span>
    <span className="text-[#4A5567] ml-4">Updated 4 days ago</span>
  </div>
</div>

{/* Aquí continuarían las otras cajas similares... */}

<div className="bg-[#1D1B48] p-4 rounded-md h-48 border border-[#4A5567]">
  <h2 className="text-lg font-bold">accessibility.js</h2>
  <p className="text-[#CDD5E0]">Client side accessibility error scanner</p>
  <div className="flex items-center mt-2">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-[#4A5567]" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M0 2a2 2 0 012-2h16a2 2 0 012 2v16a2 2 0 01-2 2H2a2 2 0 01-2-2V2zm4 16a1 1 0 001-1V9a1 1 0 00-1-1V3h12v4a1 1 0 01-1 1H5a1 1 0 00-1 1v9a1 1 0 001 1z" clipRule="evenodd" />
    </svg>
    <span className="text-[#4A5567]">26</span>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-4 mr-1 text-[#4A5567]" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM5.638 15.696a6 6 0 018.683-7.955l.678.678.678-.678a6 6 0 118.683 7.955l-7.237 7.237a1 1 0 01-1.419 0l-7.237-7.237zm7.072-6.293a1 1 0 00-1.414-1.414L7 11.586l-1.396-1.397a1 1 0 00-1.414 1.414l2.5 2.5a1 1 0 001.414 0l5-5z" clipRule="evenodd" />
    </svg>
    <span className="text-[#4A5567]">703</span>
    <span className="text-[#4A5567] ml-4">Updated 4 days ago</span>
  </div>
</div>

{/* Continuarían las otras cajas similares... */}
<div className="bg-[#1D1B48] p-4 rounded-md h-48 border border-[#4A5567]">
                <h2 className="text-lg font-bold">actions-chat-sheet</h2>
                <p className="text-[#CDD5E0]">A cheat sheet for GitHub Actions</p>
                <div className="flex items-center mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-[#4A5567]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M0 2a2 2 0 012-2h16a2 2 0 012 2v16a2 2 0 01-2 2H2a2 2 0 01-2-2V2zm4 16a1 1 0 001-1V9a1 1 0 00-1-1V3h12v4a1 1 0 01-1 1H5a1 1 0 00-1 1v9a1 1 0 001 1z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#4A5567]">26</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-4 mr-1 text-[#4A5567]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM5.638 15.696a6 6 0 018.683-7.955l.678.678.678-.678a6 6 0 118.683 7.955l-7.237 7.237a1 1 0 01-1.419 0l-7.237-7.237zm7.072-6.293a1 1 0 00-1.414-1.414L7 11.586l-1.396-1.397a1 1 0 00-1.414 1.414l2.5 2.5a1 1 0 001.414 0l5-5z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#4A5567]">703</span>
                  <span className="text-[#4A5567] ml-4">Updated 4 days ago</span>
                </div>
              
            </div>

</div>
        )}

        {!hasSearched && !showAllRepos && (
          <div className="flex items-center justify-center w-full h-full">
            <h1 className="text-xl text-[#4A5567]">View all repositories</h1>
          </div>
        )}

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
      </div>
    </div>
  
</div>
);
}

export default App;
