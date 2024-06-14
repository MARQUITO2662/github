const Repositories = ({ repos, hasSearched, showAllRepos }) => {
    return (
      <div className="w-full max-w-3xl">
        {hasSearched ? (
          <ReposList repos={repos} />
        ) : (
          <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-4 text-white mt-8">
            {/* Repositorio estático 1 */}
            <div className="bg-[#1D1B48] p-4 rounded-md h-48 border border-[#4A5567]">
              <h2 className="text-lg font-bold">.github</h2>
              <p className="text-[#CDD5E0]">Community health files for the @GitHub organization</p>
              <div className="flex items-center mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1 text-[#4A5567]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M0 2a2 2 0 012-2h16a2 2 0 012 2v16a2 2 0 01-2 2H2a2 2 0 01-2-2V2zm4 16a1 1 0 001-1V9a1 1 0 00-1-1V3h12v4a1 1 0 01-1 1H5a1 1 0 00-1 1v9a1 1 0 001 1z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-[#4A5567]">2,369</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-4 mr-1 text-[#4A5567]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a8 8 0 100 16 8 8 0 000-16zM5.638 15.696a6 6 0 018.683-7.955l.678.678.678-.678a6 6 0 118.683 7.955l-7.237 7.237a1 1 0 01-1.419 0l-7.237-7.237zm7.072-6.293a1 1 0 00-1.414-1.414L7 11.586l-1.396-1.397a1 1 0 00-1.414 1.414l2.5 2.5a1 1 0 001.414 0l5-5z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-[#4A5567]">703</span>
                <span className="text-[#4A5567] ml-4">Updated 4 days ago</span>
              </div>
            </div>
  
            {/* Repositorio estático 2 */}
            <div className="bg-[#1D1B48] p-4 rounded-md h-48 border border-[#4A5567]">
              <h2 className="text-lg font-bold">Accessibility - alt - text - bat</h2>
              <p className="text-[#CDD5E0]">An action to remind users to add alt text on Issues, pull Requests, and Discussions</p>
              <div className="flex items-center mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1 text-[#4A5567]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M0 2a2 2 0 012-2h16a2 2 0 012 2v16a2 2 0 01-2 2H2a2 2 0 01-2-2V2zm4 16a1 1 0 001-1V9a1 1 0 00-1-1V3h12v4a1 1 0 01-1 1H5a1 1 0 00-1 1v9a1 1 0 001 1z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-[#4A5567]">2,369</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-4 mr-1 text-[#4A5567]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a8 8 0 100 16 8 8 0 000-16zM5.638 15.696a6 6 0 018.683-7.955l.678.678.678-.678a6 6 0 118.683 7.955l-7.237 7.237a1 1 0 01-1.419 0l-7.237-7.237zm7.072-6.293a1 1 0 00-1.414-1.414L7 11.586l-1.396-1.397a1 1 0 00-1.414 1.414l2.5 2.5a1 1 0 001.414 0l5-5z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-[#4A5567]">703</span>
                <span className="text-[#4A5567] ml-4">Updated 4 days ago</span>
              </div>
            </div>
  
            {/* Repositorio estático 3 */}
            <div className="bg-[#1D1B48] p-4 rounded-md h-48 border border-[#4A5567]">
              <h2 className="text-lg font-bold">accessibility.js</h2>
              <p className="text-[#CDD5E0]">Client side accessibility error scanner</p>
              <div className="flex items-center mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1 text-[#4A5567]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M0 2a2 2 0 012-2h16a2 2 0 012 2v16a2 2 0 01-2 2H2a2 2 0 01-2-2V2zm4 16a1 1 0 001-1V9a1 1 0 00-1-1V3h12v4a1 1 0 01-1 1H5a1 1 0 00-1 1v9a1 1 0 001 1z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-[#4A5567]">26</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-4 mr-1 text-[#4A5567]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a8 8 0 100 16 8 8 0 000-16zM5.638 15.696a6 6 0 018.683-7.955l.678.678.678-.678a6 6 0 118.683 7.955l-7.237 7.237a1 1 0 01-1.419 0l-7.237-7.237zm7.072-6.293a1 1 0 00-1.414-1.414L7 11.586l-1.396-1.397a1 1 0 00-1.414 1.414l2.5 2.5a1 1 0 001.414 0l5-5z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-[#4A5567]">703</span>
                <span className="text-[#4A5567] ml-4">Updated 4 days ago</span>
              </div>
            </div>
  
            {/* Repositorio estático 4 */}
            <div className="bg-[#1D1B48] p-4 rounded-md h-48 border border-[#4A5567]">
              <h2 className="text-lg font-bold">actions-chat-sheet</h2>
              <p className="text-[#CDD5E0]">A cheat sheet for GitHub Actions</p>
              <div className="flex items-center mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1 text-[#4A5567]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M0 2a2 2 0 012-2h16a2 2 0 012 2v16a2 2 0 01-2 2H2a2 2 0 01-2-2V2zm4 16a1 1 0 001-1V9a1 1 0 00-1-1V3h12v4a1 1 0 01-1 1H5a1 1 0 00-1 1v9a1 1 0 001 1z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-[#4A5567]">26</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-4 mr-1 text-[#4A5567]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a8 8 0 100 16 8 8 0 000-16zM5.638 15.696a6 6 0 018.683-7.955l.678.678.678-.678a6 6 0 118.683 7.955l-7.237 7.237a1 1 0 01-1.419 0l-7.237-7.237zm7.072-6.293a1 1 0 00-1.414-1.414L7 11.586l-1.396-1.397a1 1 0 00-1.414 1.414l2.5 2.5a1 1 0 001.414 0l5-5z"
                    clipRule="evenodd"
                  />
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
      </div>
    );
  };
  
  export default Repositories;
  