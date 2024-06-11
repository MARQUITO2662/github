import React, { useState } from 'react';
import Profile from './components/Profile';
import ReposList from './components/ReposList';

function App() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      setUserData(data);

      const reposResponse = await fetch(data.repos_url);
      const reposData = await reposResponse.json();
      setRepos(reposData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="relative h-[40vh] bg-cover bg-center" style={{ backgroundImage: "url('/hero-image-github-profile.png')" }}>
        <div className="bg-black bg-opacity-50 h-full flex flex-col items-center justify-center text-white">
          <div className="w-full max-w-md mt-10">
            <div className="flex mb-4 justify-center">
              <button onClick={handleSearch} className="bg-[#364153] text-[#4A5567] p-2 rounded-l-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m1.35-6.65a8 8 0 11-16 0 8 8 0 0116 0z" />
                </svg>
              </button>
              <input
                type="text"
                className="p-2 text-[#CDD5E0] bg-[#364153] placeholder-[#4A5567] border border-[#364153] focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-r-md"
                placeholder="Enter GitHub username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#364153] h-3/4 w-full flex flex-col items-center py-8 relative z-10">
        <div className="w-3/4 text-center mb-4">
          <div className="flex justify-center space-x-8">
            <div className="relative flex flex-col items-center">
              <img src="/github.png" alt="GitHub Logo" className="w-28 h-28 mb-2 border-4 border-[#364153] rounded-lg absolute -top-16 z-20 bg-[#364153]" />
              <div className="text-[#CDD5E0] mt-20">
                <h1 className="text-3xl font-bold mb-2">GitHub</h1>
                <p>How people build software</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 -mt-24">
              <div className="bg-[#111729] px-4 py-2 rounded-md border border-[#4A5567]">
                <span className="text-[#4A5567]">Followers</span>
                <span className="text-[#CDD5E0] ml-2">27839</span>
              </div>
              <div className="border-l border-white mx-4"></div>
              <div className="bg-[#111729] px-4 py-2 rounded-md border border-[#4A5567]">
                <span className="text-[#4A5567]">Following</span>
                <span className="text-[#CDD5E0] ml-2">0</span>
              </div>
              <div className="border-l border-white mx-4"></div>
              <div className="bg-[#111729] px-4 py-2 rounded-md border border-[#4A5567]">
                <span className="text-[#4A5567]">Location</span>
                <span className="text-[#CDD5E0] ml-2">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-3/4 grid grid-cols-2 gap-4 text-white">
          <div className="bg-[#1D1B48] p-4 rounded-md h-48 border border-[#4A5567]">
            <h2 className="text-lg font-bold text-white">.github</h2>
            <p className="text-[#CDD5E0]">Community health files for the @GitHub organization</p>
            <div className="flex items-center mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-[#4A5567]" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M0 2a2 2 0 012-2h16a2 2 0 012 2v16a2 2 0 01-2 2H2a2 2 0 01-2-2V2zm4 16a1 1 0 001-1V9a1 1 0 00-1-1V3h12v4a1 1 0 01-1 1H5a1 1 0 00-1 1v9a1 1 0 001 1z" clipRule="evenodd" />
              </svg>
              <span className="text-[#4A5567]">2,369</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-4 mr-1 text-[#4A5567]" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM5.638 15.696a6 6 0 018.683-7.955l.678.678.678-.678a6 6 0 118.683 7.955l-7.237 7.237a1 1 0 01-1.419 0l-7.237-7.237zm7.072-6.293a1 1 0 00-1.414-1.414L7 11.586l-1.396-1.397a1 1 0 00-1.414 1.414l2.5 2
.5a1 1 0 001.414 0l5-5z" clipRule="evenodd" />
              </svg>
              <span className="text-[#4A5567]">703</span>
              <span className="text-[#4A5567] ml-4">Updated 4 days ago</span>
            </div>
          </div>

          <div className="bg-[#1D1B48] p-4 rounded-md h-48 border border-[#4A5567]">
            <h2 className="text-lg font-bold">Accessibility - alt - text - bat</h2>
          </div>
          <div className="bg-[#1D1B48] p-4 rounded-md h-48 border border-[#4A5567]">
            <h2 className="text-lg font-bold">accessibility.js</h2>
          </div>
          <div className="bg-[#1D1B48] p-4 rounded-md h-48 border border-[#4A5567]">
            <h2 className="text-lg font-bold">actions-chat-sheet</h2>
          </div>
        </div>
        <div className="w-3/4 p-4 text-white text-center">
          <p className="text-lg font-bold text-[#4A5567]">View all repositories</p>
        </div>
        <div className="w-3/4 p-4">
          {userData && <Profile userData={userData} />}
          {repos.length > 0 && <ReposList repos={repos} />}
        </div>
      </div>
    </div>
  );
}

export default App;
