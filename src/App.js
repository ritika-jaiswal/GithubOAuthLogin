import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import GitHubLogin from './Components/GitHubLogin';
import TrendingRepos from './Components/TrendingRepos';
import RepoDetails from './Components/RepoDetails';

const clientId = '451864b21cab0cc06b0a';
const redirectUri = 'http://localhost:3000/callback';

// const GitHubLogin = () => {
//   const handleLogin = () => {
//     window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}`;
//   };

//   return (
//     <div>
//       <h2>Login with GitHub</h2>
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };
{/* <GitHubLogin/>
<TrendingRepos/> */}

// const TrendingRepos = () => {
//   const [repos, setRepos] = useState([]);

//   useEffect(() => {
//     fetchTrendingRepos();
//   }, []);

//   const fetchTrendingRepos = async () => {
//     try {
//       const response = await axios.get(
//         'https://api.github.com/search/repositories?q=created:%3E2021-01-01&sort=stars&order=desc'
//       );
//       setRepos(response.data.items);
//     } catch (error) {
//       console.error('Error fetching trending repos:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Trending Repositories</h2>
//       <ul>
//         {repos.map((repo) => (
//           <li key={repo.id}>
//             <Link to={`/repo/${repo.id}`}>{repo.name}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const RepoDetails = ({ match }) => {
//   const repoId = match.params.id;
//   const [repoDetails, setRepoDetails] = useState(null);

//   useEffect(() => {
//     fetchRepoDetails();
//   }, []);

//   const fetchRepoDetails = async () => {
//     try {
//       const response = await axios.get(`https://api.github.com/repositories/${repoId}`);
//       setRepoDetails(response.data);
//     } catch (error) {
//       console.error('Error fetching repository details:', error);
//     }
//   };

//   if (!repoDetails) {
//     return <div>Loading repository details...</div>;
//   }

//   return (
//     <div>
//       <h2>{repoDetails.name}</h2>
//       <p>Author: {repoDetails.owner.login}</p>
//       <p>Languages: {Object.keys(repoDetails.languages).join(', ')}</p>
//       <p>Stars: {repoDetails.stargazers_count}</p>
//       <p>Forks: {repoDetails.forks_count}</p>
//     </div>
//   );
// };

const App = () => {
  return (
    <>
    <BrowserRouter>
    
      <Routes>
        
        <Route exact path="/" element={<GitHubLogin/>} />
        <Route path="/callback" element={<TrendingRepos/>} />
        <Route path="/repo/:id" element={<RepoDetails/>} />
      </Routes>
    
    </BrowserRouter>
     
    </>
    
  );
};

export default App;
