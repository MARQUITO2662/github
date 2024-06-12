import React from 'react';

const ReposList = ({ repos, showAllRepos }) => {
  if (!repos.length) return null;

  const uniqueRepos = []; // Lista para almacenar repositorios únicos

  const displayedRepos = showAllRepos ? repos : repos.slice(0, 2); // Mostrar solo los primeros 4 repositorios si showAllRepos es false

  // Filtrar repositorios duplicados
  displayedRepos.forEach((repo) => {
    if (!uniqueRepos.some((item) => item.id === repo.id)) {
      uniqueRepos.push(repo);
    }
  });

  return (
    <div className="w-3/4 grid grid-cols-2 gap-4 text-white">
      {uniqueRepos.map((repo) => (
        <div key={repo.id} className="bg-[#1D1B48] p-4 rounded-md h-48 border border-[#4A5567]">
          <h2 className="text-lg font-bold text-white">{repo.name}</h2>
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
  );
};

export default ReposList;
