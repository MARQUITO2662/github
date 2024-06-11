import React from 'react';

function ReposList({ repos }) {
  return (
    <div className="bg-white text-black border p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Repositories</h2>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id} className="mb-2">
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              {repo.name}
            </a>
            <p>{repo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReposList;
