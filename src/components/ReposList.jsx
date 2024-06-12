import React from 'react';

const ReposList = ({ repos, showAllRepos, setShowAllRepos }) => {
  const displayedRepos = showAllRepos ? repos : repos.slice(0, 4);

  return (
    <div className="w-3/4 mx-auto mt-8">
      <div className="grid grid-cols-2 gap-4">
        {displayedRepos.map(repo => (
          <div key={repo.id} className="bg-[#1D1B48] p-4 rounded-md border border-[#4A5567]">
            <h2 className="text-lg font-bold">{repo.name}</h2>
            <p className="text-[#CDD5E0]">{repo.description}</p>
            <div className="flex items-center mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-[#4A5567]" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M0 2a2 2 0 012-2h16a2 2 0 012 2v16a2 2 0 01-2 2H2a2 2 0 01-2-2V2zm4 16a1 1 0 001-1V9a1 1 0 00-1-1V3h12v4a1 1 0 01-1 1H5a1 1 0 00-1 1v9a1 1 0 001 1z" clipRule="evenodd" />
              </svg>
              <span className="text-[#4A5567]">{repo.license?.name || 'No License'}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-4 mr-1 text-[#4A5567]" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM5.638 15.696a6 6 0 018.683-7.955l.678.678.678-.678a6 6 0 118.683 7.955l-7.237 7.237a1 1 0 01-1.419 0l-7.237-7.237zm7.072-6.293a1 1 0 00-1.414-1.414L7 11.586l-1.396-1.397a1 1 0 00-1.414 1.414l2.5 2.5a1 1 0 001.414 0l5-5z" clipRule="evenodd" />
              </svg>
              <span className="text-[#4A5567]">{repo.stargazers_count}</span>
              <span className="text-[#4A5567] ml-4">Updated {new Date(repo.updated_at).toLocaleDateString()}</span>
            </div>
          </div>
        ))}
      </div>
      {repos.length > 4 && (
        <div className="mt-4 text-center">
          <button
            className="bg-[#364153] text-[#CDD5E0] py-2 px-4 rounded-md"
            onClick={() => setShowAllRepos(!showAllRepos)}
          >
            {showAllRepos ? 'Show Less' : 'View All Repositories'}
          </button>
        </div>
      )}
    </div>
  );
};

export default ReposList;
